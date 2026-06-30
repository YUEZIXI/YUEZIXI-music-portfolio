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

  $("membersGrid").innerHTML = (T.members || []).map(m => `
    <a class="member-card" href="member.html?id=${encodeURIComponent(m.id)}">
      <div class="member-card__avatar">
        <img src="${esc(m.avatar)}" alt="${esc(m.name)}" onerror="this.style.display='none'" />
      </div>
      <div class="member-card__name">${esc(m.name)}</div>
      ${m.title ? `<div class="member-card__title">${esc(m.title)}</div>` : ""}
      ${m.desc ? `<div class="member-card__desc">${esc(m.desc)}</div>` : ""}
      <div class="member-card__enter">进入主页 →</div>
    </a>`).join("") || `<p class="empty">暂无成员</p>`;
})();
