window.MEMBERS = window.MEMBERS || {};
window.MEMBERS["shiyaoyu"] = {
  profile: {
    name: "时爻彧",
    avatar: "assets/img/shiyaoyu/avatar.jpg",
    bio: "策划 / 统筹 / 监制 / 和编。和编擅长多层厚和声，全风格可做；常规工期 1-3 天，加急 2-4h。",
    commissionStatus: "open",
    roles: ["策划", "统筹", "监制", "和编"],
    platforms: [
      { icon: "B", label: "哔哩哔哩 · 主页", url: "https://b23.tv/i5Z4dti", color: "white" },
      { icon: "♪", label: "网易云音乐 · 主页", url: "http://music.163.com/artist?id=60400956&userid=9248285722", color: "gold" }
    ],
    contacts: {
      qq: "2475469670"
    }
  },

  taxonomy: {
    roles: ["策划", "统筹", "监制", "和编", "歌手统筹", "CV统筹"],
    genres: ["古风 / 国风", "同人", "流行"],
    moods: []
  },

  works: [
    {
      title: "舵江东",
      roles: ["策划"],
      genres: ["同人"],
      desc: "王者孙权同人曲 · 担任策划",
      netease: "3388475514",
      url: "https://163cn.tv/985wpLy"
    },
    {
      title: "莉莉丝的晚餐",
      roles: ["策划"],
      genres: ["流行"],
      desc: "担任策划",
      netease: "3357332158",
      url: "https://163cn.tv/985MWIf"
    },
    {
      title: "巫山海棠",
      roles: ["策划"],
      genres: ["古风 / 国风"],
      desc: "担任策划",
      netease: "3335313869",
      url: "https://163cn.tv/985CC8Z"
    },
    {
      title: "溯洄",
      roles: ["歌手统筹"],
      genres: ["同人"],
      desc: "第五人格 8 周年全角色大合唱 · 担任歌手统筹",
      bilibili: "BV1vHDyBCEQz",
      cover: "https://i2.hdslb.com/bfs/archive/54f2abf2e98cfdda23b49c0baf29b6913f3195e8.jpg",
      url: "https://b23.tv/ynmuc4J"
    },
    {
      title: "再越千山",
      roles: ["CV统筹"],
      genres: ["古风 / 国风"],
      netease: "3376680349",
      coverPos: "center 44%",
      desc: "五四青年节原创曲 · 担任 CV 统筹"
    },
    {
      title: "破晓星途",
      roles: ["和编"],
      genres: ["同人"],
      desc: "崩坏星穹铁道三周年原创同人角色歌 · 担任和编",
      netease: "3376258352",
      url: "https://163cn.tv/9847n39"
    },
    {
      title: "你是人间岁月诗",
      roles: ["和编"],
      genres: ["流行"],
      desc: "担任和编",
      netease: "3368755801",
      url: "https://163cn.tv/9845dLR"
    }
  ],

  priceGroups: [
    {
      category: "策划 / 统筹",
      pinyin: "Planning",
      groups: [
        {
          items: [
            { name: "策划", price: "150/首", desc: "" },
            { name: "监制 / 统筹 / 协策", price: "200/首", desc: "包含邀约，带新人资源共享。" }
          ]
        }
      ]
    },
    {
      category: "和编",
      pinyin: "Harmony Arrangement",
      groups: [
        {
          items: [
            { name: "和编", price: "80/首", desc: "约 2 组左右，1-4 轨；超出一组 +35。" }
          ],
          afterNote: "具体可以根据情况定制。"
        }
      ]
    }
  ],

  freeNote: {
    title: "排单说明",
    desc: "和编排单 7.4 之后，常规 1-3 天出；加急约 2-4h。也可以直接发送接新表沟通。"
  },

  queue: []
};

window.TRACKS = Object.assign(window.TRACKS || {}, {
  "3388475514": {
    name: "舵江东-王者孙权同人",
    cover: "https://p2.music.126.net/xqBHOfMeTlAgtpCKI3w2rQ==/109951173311621264.jpg"
  },
  "3357332158": {
    name: "莉莉丝的晚餐",
    cover: "https://p2.music.126.net/XO8UARd1bZ7wPMMRtfSpUw==/109951172861034002.jpg"
  },
  "3335313869": {
    name: "巫山海棠",
    cover: "https://p2.music.126.net/7lpAsr26FehPahKOVh6TCw==/109951172533320209.jpg"
  },
  "3376258352": {
    name: "破晓星途（崩坏星穹铁道三周年原创同人角色歌）",
    cover: "https://p1.music.126.net/6URUruvOSLLuD2qZgpwiyA==/109951173142821624.jpg"
  },
  "3368755801": {
    name: "你是人间岁月诗",
    cover: "https://p1.music.126.net/tU8bYZ2F_dBPZk4Rg95qtQ==/109951173027413323.jpg"
  }
});
