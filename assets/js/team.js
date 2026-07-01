/* ===================================================================
 *  团队主页数据 —— 改这里
 * ===================================================================*/
window.TEAM = {
  name: "约乐工作室",
  pinyin: "YUE LE STUDIO",
  tagline: "承接音乐制作 · 美术设计",
  intro: "承接作曲 / 作词 / 编曲 / 混音 / 演唱 等全流程音乐制作，以及曲绘 / 题字 / 海报 / 排版 等美术设计。点击下方成员进入个人主页。",

  // 背景音乐：填网易云歌曲 ID（右下角出现播放按钮，点击播放/暂停，循环）。留空则不显示
  bgm: { netease: "3376680349", title: "再越千山" },

  // 成员列表：点击卡片进入 member.html?id=<id>
  // id 必须和 data.js 里 window.MEMBERS 注册的 key 一致
  // roles：用于团队页「工种筛选」；collab：该成员合作过的（粉丝过万）歌手，展示在卡片与工作室合作名单
  members: [
    {
      id: "yuezixi",
      name: "月紫夕",
      title: "作曲 · 作词 · 策划 · 和声",
      roles: ["作曲", "作词", "策划", "和声"],
      avatar: "assets/img/avatar.jpg",
      desc: "古风原创音乐人 · 全平台 id：月紫夕YUEZIXI",
      collab: ["少年霜", "小曲儿", "兰音Reine", "诺言Jason"]
    },
    {
      id: "lingxue",
      name: "凌雪",
      title: "作曲 · 编曲",
      roles: ["作曲", "编曲"],
      avatar: "assets/img/lingxue/TouXiang.jpg",
      desc: "工种作编曲，擅长古风 / 现风 / 电子。",
      collab: ["星尘Infinity", "赤羽", "苍穹", "兰音Reine"]
    },
    {
      id: "chiwei",
      name: "池未请早睡",
      title: "和声 · 演唱 · 题字",
      roles: ["和声", "演唱", "题字"],
      avatar: "assets/img/chiwei/avatar.jpg",
      desc: "原创唱作人 · 全平台同名，兼作词作曲。",
      collab: ["Babystop_山竹", "偃雀Suechy", "星尘Infinity"]
    },
    {
      id: "qingchuji",
      name: "青初霁",
      title: "作词 · 策划 · 文案",
      roles: ["作词", "策划", "文案"],
      avatar: "assets/img/qingchuji/avatar.jpg",
      desc: "词作，主古风，合作多名知名古风歌手。",
      collab: ["萧忆情Alex", "以冬", "司南", "三无Marblue", "五色石南叶", "李蚊香", "只有影子（陈拾月）", "Mr.岑"]
    }
    // 站内成员：加一条带 id 的，并在对应数据文件里 window.MEMBERS["新id"] = {...}
    // 外部成员：加一条带 url 的（指向对方网站），就会外链跳转
  ]
};
