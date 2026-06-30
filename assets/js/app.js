/* ===================================================================
 *  渲染逻辑 —— 一般不用改。内容请改 data.js
 * ===================================================================*/
(function () {
  const _mid = new URLSearchParams(location.search).get("id");
  const D = (_mid && window.MEMBERS && window.MEMBERS[_mid]) || window.SITE_DATA;
  if (D && D.profile) document.title = D.profile.name + " · 音乐作品集";
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
                     <div class="contact-item__value">${esc(v)}</div>
                     ${k === "qq" && p.qqQr ? `<div class="contact-item__qr">
                       <img src="${esc(p.qqQr)}" alt="QQ 二维码" loading="lazy" decoding="async" />
                       <span>扫码添加 QQ</span>
                     </div>` : ""}`;
      const cls = `contact-item${k === "qq" && p.qqQr ? " contact-item--qr" : ""}`;
      return m.href
        ? `<a class="${cls}" href="${esc(m.href(v))}" target="_blank" rel="noopener">${inner}</a>`
        : `<div class="${cls}">${inner}</div>`;
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
          ${g.afterNote ? `<div class="price-sub__after">${esc(g.afterNote)}</div>` : ""}
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

  /* ---------- 作品播放器：自定义黑胶 + 真同步歌词 ---------- */
  const TRACKS = window.TRACKS || {};
  let currentAudio = null;

  const neOuter = (id) => `https://music.163.com/song/media/outer/url?id=${encodeURIComponent(id)}.mp3`;

  // LRC → 带时间轴的歌词 [{t, text}]
  function parseLRC(lrc) {
    if (!lrc) return [];
    const out = [];
    const re = /\[(\d{1,2}):(\d{1,2})(?:[.:](\d{1,3}))?\]/g;
    lrc.split("\n").forEach(line => {
      const text = line.replace(/\[[^\]]*\]/g, "").trim();
      if (!text) return;
      const stamps = []; let m; re.lastIndex = 0;
      while ((m = re.exec(line))) {
        stamps.push(parseInt(m[1]) * 60 + parseInt(m[2]) + (m[3] ? parseInt((m[3] + "00").slice(0, 3)) / 1000 : 0));
      }
      (stamps.length ? stamps : [0]).forEach(t => out.push({ t, text }));
    });
    return out.sort((a, b) => a.t - b.t);
  }

  function biliFrame(bv) {
    return `<iframe class="bili-frame" scrolling="no" frameborder="no" allowfullscreen="true"
      src="https://player.bilibili.com/player.html?bvid=${encodeURIComponent(bv)}&autoplay=0&high_quality=1"></iframe>`;
  }
  function vinylBlock(w) {
    const t = TRACKS[w.netease] || {};
    const lines = parseLRC(t.lrc);
    const pos = w.coverPos || "center";
    const cover = t.cover ? `background-image:url('${esc(t.cover)}');background-position:${esc(pos)}` : "";
    const lyrics = lines.length
      ? `<div class="lyrics"><div class="lyrics__inner">${lines.map(l => `<p data-t="${l.t}">${esc(l.text)}</p>`).join("")}</div></div>`
      : `<div class="lyrics lyrics--empty">暂无歌词</div>`;
    return `<div class="vinyl-stage" data-state="paused">
        <div class="vinyl">
          <span class="vinyl__cover" style="${cover}"></span>
          <span class="vinyl__hole"></span>
          <button class="vinyl__btn" type="button" aria-label="播放 / 暂停"></button>
        </div>
        ${lyrics}
      </div>
      <div class="p2-bar"><div class="p2-fill"></div></div>
      <audio class="p2-audio" preload="none" src="${neOuter(w.netease)}"></audio>`;
  }
  function workPlayer(w) {
    const hasN = !!(w.netease && String(w.netease).trim());
    const hasB = !!(w.bilibili && String(w.bilibili).trim());
    if (!hasN && !hasB) {
      return w.audio
        ? `<audio controls preload="none" src="${esc(w.audio)}"></audio>`
        : `<div class="player-pending">🔗 链接待补充</div>`;
    }
    const tabs = (hasN && hasB) ? `
      <div class="player-tabs">
        <button class="player-tab active" data-src="netease">♪ 网易云</button>
        <button class="player-tab" data-src="bilibili">▶ B站视频</button>
      </div>` : "";
    const body = hasN ? vinylBlock(w) : `<div class="player-frame">${biliFrame(w.bilibili)}</div>`;
    return `<div class="work-player" data-netease="${esc(w.netease || "")}" data-bilibili="${esc(w.bilibili || "")}" data-coverpos="${esc(w.coverPos || "")}" data-cur="${hasN ? "netease" : "bilibili"}">
      ${tabs}
      <div class="player-body">${body}</div>
    </div>`;
  }

  // 给每个黑胶播放器接上：点击播放/暂停、转盘随播放、歌词随进度同步
  function setupPlayers(scope) {
    (scope || document).querySelectorAll(".vinyl-stage").forEach(stage => {
      if (stage.__wired) return; stage.__wired = true;
      const root = stage.parentElement;
      const audio = root.querySelector(".p2-audio");
      const inner = stage.querySelector(".lyrics__inner");
      const panel = stage.querySelector(".lyrics");
      const fill = root.querySelector(".p2-fill");
      const bar = root.querySelector(".p2-bar");
      const btn = stage.querySelector(".vinyl__btn");
      const vinyl = stage.querySelector(".vinyl");
      const card = stage.closest(".work-card");
      if (!audio || !vinyl) return;
      const lines = inner ? [...inner.querySelectorAll("p")] : [];
      const times = lines.map(l => parseFloat(l.dataset.t || "0"));

      vinyl.addEventListener("click", () => {
        if (audio.paused) {
          if (currentAudio && currentAudio !== audio) currentAudio.pause();
          currentAudio = audio;
          audio.play().catch(() => {});
        } else audio.pause();
      });
      audio.addEventListener("play",  () => {
        stage.dataset.state = "playing";
        document.querySelectorAll(".work-card.is-playing").forEach(el => {
          if (el !== card) el.classList.remove("is-playing");
        });
        if (card) card.classList.add("is-playing");
        if (btn) btn.setAttribute("aria-label", "暂停");
      });
      audio.addEventListener("pause", () => {
        stage.dataset.state = "paused";
        if (card) card.classList.remove("is-playing");
        if (btn) btn.setAttribute("aria-label", "播放");
      });
      audio.addEventListener("ended", () => {
        stage.dataset.state = "paused";
        if (card) card.classList.remove("is-playing");
        if (btn) btn.setAttribute("aria-label", "播放");
      });

      let last = -1;
      audio.addEventListener("timeupdate", () => {
        if (fill && audio.duration) fill.style.width = (audio.currentTime / audio.duration * 100) + "%";
        const ct = audio.currentTime + 0.2;
        let idx = -1;
        for (let i = 0; i < times.length; i++) { if (times[i] <= ct) idx = i; }
        if (idx !== last) {
          last = idx;
          lines.forEach((l, i) => l.classList.toggle("active", i === idx));
          if (idx >= 0 && panel && inner) {
            const line = lines[idx];
            inner.style.transform = `translateY(${panel.clientHeight / 2 - line.offsetTop - line.offsetHeight / 2}px)`;
          }
        }
      });
      if (bar) bar.addEventListener("click", (e) => {
        const r = bar.getBoundingClientRect();
        if (audio.duration) audio.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * audio.duration;
      });
    });
  }

  // 网易云 / B站 切换
  document.addEventListener("click", (e) => {
    const tab = e.target.closest(".player-tab");
    if (!tab) return;
    const wrap = tab.closest(".work-player");
    const src = tab.dataset.src;
    if (!wrap || wrap.dataset.cur === src) return;
    if (currentAudio) currentAudio.pause();
    wrap.dataset.cur = src;
    wrap.querySelectorAll(".player-tab").forEach(t => t.classList.toggle("active", t === tab));
    const w = { netease: wrap.dataset.netease, bilibili: wrap.dataset.bilibili, coverPos: wrap.dataset.coverpos };
    wrap.querySelector(".player-body").innerHTML =
      src === "netease" ? vinylBlock(w) : `<div class="player-frame">${biliFrame(w.bilibili)}</div>`;
    setupPlayers(wrap);
  });

  /* ---------- 滚动增强：导航高亮 / 回到顶部 / 卡片入场 ---------- */
  const navLinks = [...document.querySelectorAll(".nav__links a")];
  const sectionIds = navLinks.map(a => a.getAttribute("href")).filter(h => h && h.startsWith("#"));
  const sections = sectionIds.map(id => document.querySelector(id)).filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    }, { rootMargin: "-42% 0px -45% 0px", threshold: [0, .2, .6] });
    sections.forEach(section => navObserver.observe(section));
  }

  const backtop = document.querySelector(".backtop");
  if (backtop) {
    const toggleBacktop = () => backtop.classList.toggle("is-visible", window.scrollY > 420);
    window.addEventListener("scroll", toggleBacktop, { passive: true });
    backtop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    toggleBacktop();
  }

  const canAnimateLight = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (canAnimateLight && window.matchMedia("(pointer: fine)").matches) {
    let lightFrame = 0;
    window.addEventListener("pointermove", event => {
      if (lightFrame) return;
      lightFrame = requestAnimationFrame(() => {
        document.body.style.setProperty("--spot-x", `${Math.round((event.clientX / window.innerWidth) * 100)}%`);
        document.body.style.setProperty("--spot-y", `${Math.round((event.clientY / window.innerHeight) * 100)}%`);
        lightFrame = 0;
      });
    }, { passive: true });
  }

  let revealObserver = null;
  function setupReveal(scope) {
    const cards = [...(scope || document).querySelectorAll(".work-card")];
    if (!cards.length) return;
    if (!("IntersectionObserver" in window)) {
      cards.forEach(card => card.classList.add("reveal-in"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-in");
          entry.target.classList.remove("reveal-pending");
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: .14 });
    }
    cards.forEach((card, i) => {
      card.classList.add("reveal-pending");
      card.style.transitionDelay = `${Math.min(i * 45, 180)}ms`;
      revealObserver.observe(card);
    });
  }

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
      const t = TRACKS[w.netease] || {};
      const banner = w.cover || t.cover || "";
      const coverPos = w.coverPos || "center";
      const coverSize = w.coverSize || "cover";
      const coverHeight = w.coverHeight || "";
      const coverStyle = banner
        ? `style="background-image:url('${esc(banner)}');background-position:${esc(coverPos)};background-size:${esc(coverSize)}${coverHeight ? `;height:${esc(coverHeight)}` : ""}"`
        : "";
      const tags = [
        ...(w.roles  || []).map(r => `<span class="mini-tag mini-tag--role">${esc(r)}</span>`),
        ...(w.genres || []).map(g => `<span class="mini-tag">${esc(g)}</span>`),
        ...(w.moods  || []).map(m => `<span class="mini-tag">${esc(m)}</span>`)
      ].join("");
      return `<div class="work-card">
        <div class="work-card__cover${banner ? " work-card__cover--img" : ""}" ${coverStyle}>
          ${w.year ? `<span class="work-card__year">${esc(w.year)}</span>` : ""}
        </div>
        <div class="work-card__body">
          <div class="work-card__title">${esc(w.title)}</div>
          <div class="work-card__tags">${tags}</div>
          ${w.vocal ? `<div class="work-card__vocal"><span class="vocal-label">演唱</span>${esc(w.vocal)}</div>` : ""}
          ${w.desc ? `<div class="work-card__desc">${esc(w.desc)}</div>` : ""}
          ${workPlayer(w)}
        </div>
      </div>`;
    }).join("");
    setupPlayers();
    setupReveal($("worksGrid"));
  }
  renderWorks();
})();
