# 个人音乐作品集

一个纯静态、零依赖、免备案（部署到 GitHub Pages / Vercel）的个人音乐作品展示站。

包含：作品展示（音频试听）· 工种 / 风格筛选 · 报价展示 · 排单进度 · 联系方式。

---

## 一、怎么改内容（只动一个文件）

打开 **`assets/js/data.js`**，按里面的注释改：

| 想改什么 | 改哪里 |
|---|---|
| 名字 / 简介 / 头像 / 接单状态 | `profile` |
| 联系方式（QQ/微信/邮箱…） | `profile.contacts`（留空的自动隐藏） |
| 作品集 | `works` 数组（每个作品一项） |
| 报价 | `services` 数组 |
| 排单进度 | `queue` 数组 |
| 可筛选的工种 / 风格标签 | `taxonomy` |

**放素材：**
- 音频 → `assets/audio/`，然后在作品里写 `audio: "assets/audio/你的文件.mp3"`
- 封面图 → `assets/img/`
- 头像 → `assets/img/avatar.png`

---

## 二、本地预览

直接双击 `index.html` 用浏览器打开即可（数据是 JS 文件，无需本地服务器）。

---

## 三、部署到 GitHub Pages

```bash
# 1. 在项目目录初始化
git init
git add .
git commit -m "init music portfolio"

# 2. 在 GitHub 新建一个仓库（例如 music-portfolio），然后：
git branch -M main
git remote add origin https://github.com/你的用户名/music-portfolio.git
git push -u origin main
```

3. 打开仓库 **Settings → Pages**：
   - Source 选 **Deploy from a branch**
   - Branch 选 **main** / 目录 **/(root)** → Save
4. 等 1–2 分钟，访问 `https://你的用户名.github.io/music-portfolio/` 即可。

> 想用 `你的用户名.github.io` 这种根域名：把仓库名改成 `你的用户名.github.io`。

### 备选：Vercel（更快、可绑自定义域名）
登录 [vercel.com](https://vercel.com) → Import 这个 GitHub 仓库 → 一路默认 → Deploy。

---

## 四、合规说明

本站为**个人作品展示**性质：只展示你自己的作品、你自己的联系方式，不托管他人内容、不撮合交易、不经手资金。
- 用海外托管（GitHub Pages / Vercel）：**无需 ICP 备案**。
- 用国内服务器 + 域名：需办**个人 ICP 备案**（免费）。
