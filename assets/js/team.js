/* ===================================================================
 *  团队主页数据 —— 改这里
 * ===================================================================*/
window.TEAM = {
  name: "约乐工作室",
  pinyin: "YUE YUE STUDIO",
  tagline: "承接音乐制作 · 美术设计",
  intro: "承接作曲 / 作词 / 编曲 / 混音 / 演唱 等全流程音乐制作，以及曲绘 / 题字 / 海报 / 排版 等美术设计。点击下方成员进入个人主页。",

  // 背景音乐：填网易云歌曲 ID（右下角出现播放按钮，点击播放/暂停，循环）。留空则不显示
  bgm: { netease: "3376680349", title: "再越千山" },

  // 团队首页顶部「团队成员合作名单」。只影响首页展示顺序，不影响成员卡片里的个人合作名单。
  collabFeatured: [
    "萧忆情Alex", "双笙", "Winky诗", "以冬", "司南", "三无Marblue", "慕寒", "尹昔眠", "五色石南叶",
    "兰音Reine", "少年霜", "李蚊香", "醉雪", "沈谧仁", "老虎欧巴", "梦璟SAYA", "诺言Jason", "小时姑娘",
    "哦漏", "Mr.岑", "排骨教主", "陈张太康", "唐宋", "玉璇玑", "晃儿", "南风ZJN", "云三", "裂天",
    "小曲儿", "一颗狼星", "只有影子（陈拾月）", "绯村柯北", "Babystop_山竹", "张申骋", "玫月", "邹秋实",
    "Braska", "流浪的蛙蛙", "刷牙", "Akie秋绘", "南偿", "早稻叽Mukyo木西", "刘照坤", "朵芊", "戾格"
  ],

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
      collab: ["少年霜", "小曲儿", "兰音Reine", "诺言Jason", "裂天", "南偿", "解忧草", "流浪的蛙蛙", "刷牙", "Braska", "南风ZJN"]
    },
    {
      id: "lingxue",
      name: "凌雪",
      title: "作曲 · 编曲",
      roles: ["作曲", "编曲"],
      avatar: "assets/img/lingxue/TouXiang.jpg",
      desc: "工种作编曲，擅长古风 / 现风 / 电子。",
      collab: ["星尘Infinity", "赤羽", "苍穹", "兰音Reine", "裂天", "南偿", "南风ZJN", "云三"]
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
    },
    {
      id: "shaodeng",
      name: "烧灯续昼",
      title: "作词 · 策划",
      roles: ["作词", "策划"],
      avatar: "assets/img/shaodeng/avatar.jpg",
      desc: "佛系人，主古风 / 流行。当前排单到 7 月。",
      collab: ["一颗狼星", "小时姑娘", "哦漏", "梦璟SAYA", "晃儿", "醉雪", "玫月", "少年霜", "解忧草", "南偿", "玉璇玑", "唐宋", "云三", ]
    },
    {
      id: "yingling",
      name: "莹菱",
      title: "混音",
      roles: ["混音"],
      avatar: "assets/img/yingling/avatar.jpg",
      desc: "混音师 · 长期接新，主古风 / 流行。",
      collab: [ "张申骋", "池绛不吃姜"]
    },
    {
      id: "shiyaoyu",
      name: "时爻彧",
      title: "策划 · 统筹 · 监制 · 和编",
      roles: ["策划", "统筹", "监制", "和编"],
      avatar: "assets/img/shiyaoyu/avatar.jpg",
      desc: "和编擅长多层厚和声，全风格可做；常规工期 1-3 天。",
      collab: []
    },
    {
      id: "tongxi",
      name: "童夕",
      title: "演唱 · 和声编录",
      roles: ["演唱", "和声"],
      avatar: "assets/img/tongxi/avatar.jpg",
      desc: "原创音乐人 音色少女 / 少御（F3-D6）和编录多种风格皆可",
      collab: ["沈谧仁", "亡海", "醉雪", "南风ZJN", "狐小薰er", "邹秋实", "绛曲", "南偿", "早稻叽", "Mukyo木西", "刘照坤", "秋绘", "朵芊", "五色石南叶"]
    },
    {
      id: "luobo",
      name: "萝卜萝卜",
      title: "作词 · 歌手 · rap编排",
      roles: ["作词", "演唱", "rap编排"],
      avatar: "assets/img/luobo/avatar.jpg",
      desc: "全风格可写，舒适区抒情；兼歌手与 rap 编排。",
      collab: ["醉雪", "折原露露", "花跃社", "安徽共青团", "植物大战僵尸2", "晃儿", "小曲儿", "灰白", "幻觉", "阮从青"]
    },
    {
      id: "huaizhu",
      name: "怀竹mio",
      title: "作词",
      roles: ["作词"],
      avatar: "assets/img/huaizhu/avatar.jpg",
      desc: "作词 · 主古风 / 流行，全题材可试；只接原创，排单到 9 月。",
      collab: ["陈张太康", "玫月", "醉雪", "昼夜", "皓月"]
    },
    {
      id: "xuanyun",
      name: "悬云流火",
      title: "作词 · 策划",
      roles: ["作词", "策划"],
      avatar: "assets/img/xuanyun/avatar.jpg",
      desc: "作词 / 策划 · 风格全能，承接全案策划与歌手统筹；排单到 11 月。",
      collab: ["Winky诗", "双笙", "尹昔眠", "兰音Reine", "慕寒", "以冬", "裂天", "老虎欧巴", "绯村柯北", "戾格"]
    }
    // 站内成员：加一条带 id 的，并在对应数据文件里 window.MEMBERS["新id"] = {...}
    // 外部成员：加一条带 url 的（指向对方网站），就会外链跳转
  ]
};
