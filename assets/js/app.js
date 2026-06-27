/* ===================================================================
 *  渲染逻辑 —— 一般不用改。内容请改 data.js
 * ===================================================================*/
(function () {
  const D = window.SITE_DATA;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));

  /* ---------- 个人信息 ---------- */
  const p = D.profile;
  $("navName").textContent = p.name;
  $("footName").textContent = p.name;
  $("name").textContent = p.name;
  $("pinyin").textContent = p.pinyin || "";
  $("tagline").textContent = p.tagline;
  $("bio").textContent = p.bio;
  $("year").textContent = new Date().getFullYear();

  const av = $("avatar");
  if (p.avatar) { av.src = p.avatar; av.onerror = () => { av.style.display = "none"; }; }
  else av.style.display = "none";

  $("roles").innerHTML = (p.roles || []).map(r => `<span class="role-tag">${esc(r)}</span>`).join("");

  const statusMap = {
    open:    { cls: "badge--open",    txt: "接新开放中" },
    limited: { cls: "badge--limited", txt: "少量名额" },
    closed:  { cls: "badge--closed",  txt: "暂停接单 / 已满" }
  };
  const st = statusMap[p.commissionStatus] || statusMap.closed;
  $("status").innerHTML = `<span class="badge ${st.cls}">${st.txt}</span>`;

  /* 音乐平台主页链接 */
  $("platforms").innerHTML = (p.platforms || []).map(pl =>
    `<a class="platform-link platform-link--${pl.color || 'white'}" href="${esc(pl.url)}" target="_blank" rel="noopener">
       <span class="platform-link__ico">${esc(pl.icon || "♫")}</span>
       <span class="platform-link__txt">${esc(pl.label)}</span>
       <span class="platform-link__arrow">↗</span>
     </a>`).join("");

  /* ---------- 联系方式 ---------- */
  const cMeta = {
    qq:       { label: "QQ" },
    wechat:   { label: "微信" },
    email:    { label: "邮箱", href: v => `mailto:${v}` },
    bilibili: { label: "B 站", href: v => v },
    netease:  { label: "网易云", href: v => v }
  };
  $("contacts").innerHTML = Object.entries(p.contacts || {})
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => {
      const m = cMeta[k] || { label: k };
      const inner = `<div class="contact-item__label">${esc(m.label)}</div>
                     <div class="contact-item__value">${esc(v)}</div>`;
      return m.href
        ? `<a class="contact-item" href="${esc(m.href(v))}" target="_blank" rel="noopener">${inner}</a>`
        : `<div class="contact-item">${inner}</div>`;
    }).join("");

  /* ---------- 接新详情 / 报价 ---------- */
  const renderCat = (cat) => `
    <div class="price-cat">
      <div class="price-cat__head">
        <span class="price-cat__name">${esc(cat.category)}</span>
        <span class="price-cat__py">${esc(cat.pinyin || "")}</span>
      </div>
      ${(cat.groups || []).map(g => `
        <div class="price-sub">
          ${g.label ? `<div class="price-sub__label">${esc(g.label)}</div>` : ""}
          ${g.note ? `<div class="price-sub__note">${esc(g.note)}</div>` : ""}
          <div class="price-items">
            ${(g.items || []).map(it => `
              <div class="price-item">
                <div class="price-item__top">
                  <span class="price-item__name">${esc(it.name)}</span>
                  <span class="price-item__price">${esc(it.price)}</span>
                </div>
                ${it.desc ? `<div class="price-item__desc">${esc(it.desc)}</div>` : ""}
              </div>`).join("")}
          </div>
        </div>`).join("")}
      ${(cat.extra && cat.extra.length)
        ? `<ul class="price-extra">${cat.extra.map(e => `<li>${esc(e)}</li>`).join("")}</ul>`
        : ""}
    </div>`;

  // 第一列放最长的「作曲」，其余（策划 / 词作 / 其他）叠在第二列，避免大片留白
  const pg = D.priceGroups || [];
  $("priceGroups").innerHTML =
    `<div class="price-col">${pg.slice(0, 1).map(renderCat).join("")}</div>` +
    `<div class="price-col">${pg.slice(1).map(renderCat).join("")}</div>`;

  const fn = D.freeNote;
  $("freeNote").innerHTML = fn
    ? `<div class="free-note__title">${esc(fn.title)}</div><div class="free-note__desc">${esc(fn.desc)}</div>`
    : "";

  /* ---------- 排单 ---------- */
  const qMeta = { doing: "进行中", queued: "排队中", done: "已完成" };
  $("queueList").innerHTML = (D.queue || []).map(q => `
    <div class="queue-item">
      <div class="queue-item__main">
        <div class="queue-item__title">${esc(q.title)}</div>
        <div class="bar"><div class="bar__fill" style="width:${Number(q.progress) || 0}%"></div></div>
      </div>
      <div class="queue-item__meta">
        <span class="qstatus qstatus--${q.status}">${qMeta[q.status] || q.status}</span><br/>
        ${q.ddl ? "截稿 " + esc(q.ddl) : ""}
      </div>
    </div>`).join("") || `<p class="empty">暂无排单</p>`;

  /* ---------- 作品筛选 + 渲染 ---------- */
  const filterState = { role: "全部", genre: "全部" };

  function buildChips(containerId, items, key) {
    const all = ["全部", ...items];
    $(containerId).innerHTML = all.map(v =>
      `<button class="chip${v === "全部" ? " active" : ""}" data-key="${key}" data-val="${esc(v)}">${esc(v)}</button>`
    ).join("");
  }
  buildChips("roleFilters", D.taxonomy.roles, "role");
  buildChips("genreFilters", D.taxonomy.genres, "genre");

  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const { key, val } = chip.dataset;
      filterState[key] = val;
      document.querySelectorAll(`.chip[data-key="${key}"]`).forEach(c => c.classList.toggle("active", c === chip));
      renderWorks();
    });
  });

  function renderWorks() {
    const list = (D.works || []).filter(w =>
      (filterState.role === "全部"  || (w.roles  || []).includes(filterState.role)) &&
      (filterState.genre === "全部" || (w.genres || []).includes(filterState.genre))
    );

    $("worksEmpty").hidden = list.length > 0;
    $("worksGrid").innerHTML = list.map(w => {
      const coverStyle = w.cover ? `style="background-image:url('${esc(w.cover)}')"` : "";
      const tags = [
        ...(w.roles  || []).map(r => `<span class="mini-tag mini-tag--role">${esc(r)}</span>`),
        ...(w.genres || []).map(g => `<span class="mini-tag">${esc(g)}</span>`),
        ...(w.moods  || []).map(m => `<span class="mini-tag">${esc(m)}</span>`)
      ].join("");
      return `<div class="work-card">
        <div class="work-card__cover" ${coverStyle}>
          ${w.year ? `<span class="work-card__year">${esc(w.year)}</span>` : ""}
        </div>
        <div class="work-card__body">
          <div class="work-card__title">${esc(w.title)}</div>
          <div class="work-card__tags">${tags}</div>
          ${w.desc ? `<div class="work-card__desc">${esc(w.desc)}</div>` : ""}
          ${w.audio ? `<audio controls preload="none" src="${esc(w.audio)}"></audio>` : ""}
        </div>
      </div>`;
    }).join("");
  }
  renderWorks();
})();
