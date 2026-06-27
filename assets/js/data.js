/* ===================================================================
 *  全站内容数据  ——  你平时只需要改这个文件
 * ===================================================================*/
window.SITE_DATA = {

  /* ---------- 1. 个人信息 ---------- */
  profile: {
    name: "月紫夕",
    pinyin: "YUE ZI XI",
    tagline: "作曲 · 编曲 · 词作 —— 古风原创",
    avatar: "assets/img/avatar.jpg",          // 头像图：assets/img/avatar.jpg
    bio: "古风原创音乐人，主营作曲 / 编曲 / 词作 / 策划 / 和声。承接常规古风、流行约稿，优质原创可商。",
    // "open"=接新中  "limited"=少量名额  "closed"=暂停接单
    commissionStatus: "open",
    roles: ["作曲", "作词", "策划", "和声编写", "虚拟歌姬调音"],

    // 音乐平台主页（显示在「接新」状态下方，点击新标签页跳转）
    platforms: [
      { icon: "B", label: "哔哩哔哩 · 主页",   url: "https://space.bilibili.com/393182896",         color: "white" },
      { icon: "♪", label: "网易云音乐 · 主页", url: "https://music.163.com/#/artist?id=33871576", color: "gold"  }
    ],

    // 联系方式（换成你自己的；留空的自动隐藏）
    contacts: {
      qq: "1621250296",
      wechat: "",
      email: "",
      bilibili: "",                            // B站主页链接
      netease: ""                              // 网易云主页链接
    }
  },

  /* ---------- 2. 分类标签体系（作品筛选用） ---------- */
  taxonomy: {
    roles:  ["作曲", "作词", "策划"],
    genres: ["古风 / 国风"],
    moods:  []
  },

  /* ---------- 3. 作品集 ---------- */
  // 播放：填了 netease(歌曲ID) / bilibili(BV号) 就会出现对应播放器；
  // 两个都填 → 默认网易云 + 可一键切到 B站视频。链接留空 = 显示「链接待补充」。
  works: [
    {
      title: "再越千山",
      roles: ["策划", "作曲"],
      genres: ["古风 / 国风"],
      netease: "3376680349",
      bilibili: "",            // ← B站视频 BV 号填这里，填了会出现「网易云/B站」切换
      coverPos: "center 15%",  // 封面往上截，露出歌名题字
      vocal: "裂天、小坠、小曲儿、少年霜",
      desc: "五四青年节原创曲。"
    },
    {
      title: "于山",
      roles: ["作曲"],
      genres: ["古风 / 国风"],
      netease: "2723680037",
      bilibili: "",
      vocal: "兰音Reine",
      desc: ""
    },
    {
      title: "非我",
      roles: ["策划", "作曲"],
      genres: ["古风 / 国风"],
      netease: "3315967708",
      bilibili: "",
      vocal: "南偿、解忧草",
      desc: ""
    },
    {
      title: "别去沧海再识君",
      roles: ["作曲"],
      genres: ["古风 / 国风"],
      netease: "3331143354",
      bilibili: "",
      vocal: "诺言Jason、流浪的蛙蛙、刷牙、Braska",
      desc: "记秦汉四将军。"
    },
    {
      title: "远山衔落日",
      roles: ["策划", "作词", "作曲"],
      genres: ["古风 / 国风"],
      netease: "2714946039",
      bilibili: "",
      vocal: "南风ZJN、南偿",
      desc: ""
    }
  ],

  /* ---------- 4. 接新详情 / 报价（按你价目表结构化） ---------- */
  priceGroups: [
    {
      category: "作曲", pinyin: "Composition",
      groups: [
        {
          label: "特价",
          items: [
            { name: "特价 ①", price: "¥150", desc: "不可修改、不可退换（需全款），仅乐器 demo。可加购：midi +30r / 虚拟歌姬 +30r / 词格 +10r。推荐常规古风、流行。" },
            { name: "特价 ②", price: "¥200", desc: "无大改，含两次小改机会，额外修改需加购（需全款），仅乐器 demo。可加购：midi +30r / 虚拟歌姬 demo +30r / 词格 +10r。推荐常规古风、流行。" }
          ]
        },
        {
          label: "精品",
          note: "可写多声部；约三次赠送一首，定尾。均提供词格，正常含一次大改 + 3 次小改。定金一半，第一次试听不满意退一半定金。",
          items: [
            { name: "精品 ①", price: "¥300", desc: "乐器旋律 + midi + 虚拟歌姬 demo。" },
            { name: "精品 ②", price: "¥340", desc: "乐器旋律 + midi + 虚拟歌姬 + 和声编写一轨。" },
            { name: "精品 ③", price: "¥400", desc: "乐器旋律 + midi + 虚拟歌姬 + 和声编写 3-5 轨。" }
          ]
        },
        {
          label: "商业",
          items: [
            { name: "商业作曲", price: "600 起", desc: "商业用途（绑定 / 发行 / 盈利等）请联系详谈。" }
          ]
        }
      ],
      extra: [
        "修改：大改 100/次，小改 50/次（很小的修改即赠送，以工作量和判断为准）"
      ]
    },

    {
      category: "策划", pinyin: "Planning",
      groups: [
        {
          items: [
            { name: "填翻", price: "50+",  desc: "仅策划费，不含其他制作费用。" },
            { name: "原创", price: "100+", desc: "仅策划费，不含其他制作费用。特别优质的无偿，但不包制作费。" },
            { name: "商业", price: "另议",  desc: "" }
          ]
        }
      ]
    },

    {
      category: "词作", pinyin: "Lyrics",
      groups: [
        {
          items: [
            { name: "全词", price: "50+ 起", desc: "短歌 50r+，复杂词格 100r+。" },
            { name: "连词", price: "无偿",   desc: "特别优质的无偿，不含制作费用。" },
            { name: "商业", price: "另议",   desc: "" }
          ]
        }
      ]
    },

    {
      category: "其他", pinyin: "Others",
      groups: [
        {
          items: [
            { name: "乐器 / 人声扒 midi", price: "¥50",   desc: "简单或复杂可上下浮动。" },
            { name: "虚拟歌姬 demo",      price: "¥30",   desc: "包对轨伴奏。" },
            { name: "和声编写",           price: "50 起", desc: "1 轨 50 / 2 轨 80 / 3 轨 130 / 4 轨 170；优质原创无偿，好的歌手可带 sc 来定；5 轨及以上另议。" },
            { name: "题字",               price: "1r/字", desc: "非商原创歌封无偿，需近发歌且主动返图，损稿需补 1r/字。" },
            { name: "歌封海报",           price: "¥15/张", desc: "主接常规题材，优质原创无偿；不可用于且不接 pv 底图。" }
          ]
        }
      ]
    }
  ],

  /* 非商无偿 */
  freeNote: {
    title: "非商无偿",
    desc: "范围包括但不限于：绑定、部分组织（工作室 / 社团）、亲友、流量歌手、带高质量 pv 的原创歌曲、非常喜欢的题材。"
  },

  /* ---------- 5. 排单 / 接单队列 ---------- */
  queue: []
};
