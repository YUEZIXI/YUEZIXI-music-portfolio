/* ===================================================================
 *  团队主页渲染 —— 一般不用改，内容请改 team.js
 * ===================================================================*/
(function () {
  const T = window.TEAM || {};
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));

  $("navName").textContent = T.name || "团队";
  $("teamName").textContent = T.name || "";
  $("teamPinyin").textContent = T.pinyin || "";
  $("teamTagline").textContent = T.tagline || "";
  $("teamIntro").textContent = T.intro || "";
  $("year").textContent = new Date().getFullYear();
  $("footName").textContent = T.name || "";
  document.title = (T.name || "音乐工作室") + " · 承接音乐制作";

  const members = T.members || [];

  /* ---------- 工作室合作名单（各成员 collab 去重汇总） ---------- */
  const collabAll = [...new Set(members.flatMap(m => m.collab || []))];
  if ($("teamCollab")) {
    $("teamCollab").innerHTML = collabAll.length
      ? `<span class="team-collab__label">团队成员合作名单</span>${collabAll.map(esc).join(" · ")}<span class="team-collab__note">（排名不分先后）</span>`
      : "";
  }

  /* ---------- 成员卡渲染 + 工种筛选 ---------- */
  function memberCard(m) {
    const href = m.url ? esc(m.url) : `member.html?id=${encodeURIComponent(m.id || "")}`;
    const ext = m.url ? ' target="_blank" rel="noopener"' : "";
    return `<a class="member-card" href="${href}"${ext}>
      <div class="member-card__avatar">
        <img src="${esc(m.avatar)}" alt="${esc(m.name)}" onerror="this.style.display='none'" />
      </div>
      <div class="member-card__name">${esc(m.name)}</div>
      ${m.title ? `<div class="member-card__title">${esc(m.title)}</div>` : ""}
      ${m.desc ? `<div class="member-card__desc">${esc(m.desc)}</div>` : ""}
      ${(m.collab && m.collab.length) ? `<div class="member-card__collab"><span>合作歌手</span>${m.collab.map(esc).join(" · ")}</div>` : ""}
      <div class="member-card__enter">进入主页 ${m.url ? "↗" : "→"}</div>
    </a>`;
  }
  function renderMembers(role) {
    const list = (role && role !== "全部") ? members.filter(m => (m.roles || []).includes(role)) : members;
    if ($("membersEmpty")) $("membersEmpty").hidden = list.length > 0;
    $("membersGrid").innerHTML = list.map(memberCard).join("") || "";
  }

  // 工种筛选 chips
  const allRoles = [...new Set(members.flatMap(m => m.roles || []))];
  if ($("roleFilters")) {
    $("roleFilters").innerHTML = ["全部", ...allRoles]
      .map((r, i) => `<button class="chip${i === 0 ? " active" : ""}" data-val="${esc(r)}">${esc(r)}</button>`).join("");
    $("roleFilters").addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      $("roleFilters").querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === chip));
      renderMembers(chip.dataset.val);
    });
  }
  renderMembers("全部");

  /* ---------- 背景音乐（右下角浮动按钮） ---------- */
  if (T.bgm && T.bgm.netease) {
    const audio = new Audio(`https://music.163.com/song/media/outer/url?id=${encodeURIComponent(T.bgm.netease)}.mp3`);
    audio.loop = true;
    audio.volume = 0.5;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "bgm-btn";
    btn.title = "背景音乐：" + (T.bgm.title || "");
    btn.setAttribute("aria-label", "播放 / 暂停背景音乐");
    btn.innerHTML = '<span class="bgm-ico">♪</span>';
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
      if (audio.paused) audio.play().catch(() => {});
      else audio.pause();
    });
    audio.addEventListener("play",  () => { btn.classList.add("playing"); btn.querySelector(".bgm-ico").textContent = "♪"; });
    audio.addEventListener("pause", () => { btn.classList.remove("playing"); });
  }
})();
