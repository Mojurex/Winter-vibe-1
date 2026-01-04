# Vibe Coding - Vercel Deploy

Энэ сайтыг Vercel дээр deploy хийхдээ дараах алхмуудыг дагаарай:

## 1️⃣ Git Repository үүсгэх

```bash
cd /Users/mac/Documents/winter\ vibe-1
git init
git add .
git commit -m "Initial commit - Vibe Coding educational website"
```

## 2️⃣ GitHub дээ upload хийх

```bash
# GitHub дээр шинэ repository үүсгээрэй
# https://github.com/new

# Дараа нь үүнийг ашигла:
git remote add origin https://github.com/yourusername/vibe-coding.git
git branch -M main
git push -u origin main
```

## 3️⃣ Vercel дээ Deploy хийх

### Option A: Vercel Website ашиглаж (Хамгийн хялбар)

1. [Vercel.com](https://vercel.com) нээ
2. GitHub account дээр login хий
3. "New Project" дээ дарна уу
4. GitHub repository сонго: `vibe-coding`
5. Deploy товчлуур дээр дарна уу
6. 1-2 минут жахлаад сайт live болно!

### Option B: Vercel CLI ашиглаж

```bash
# Vercel CLI суулгаж
npm install -g vercel

# Deploy хийх
cd /Users/mac/Documents/winter\ vibe-1
vercel

# Асуултуудад хариул - сайт үүсгэгдэнэ
```

## 📁 Шаардлагатай файлууд

✅ index.html
✅ style.css
✅ script.js
✅ vercel.json
✅ package.json
✅ README.md

## 🌐 Deploy дараа

- Сайтын URL: `https://vibe-coding.vercel.app` (эсвэл өөрийн domain)
- Auto deploy: GitHub-д push хийвэл автоматаар update болно
- Custom domain: Vercel settings-ээс domain нэмэж болно

## 🔗 QR Code URL Update

Deploy дараа QR code URL-ээ update хийхийг санаарай:

`script.js` файлын QR code хэсэгт:
```javascript
const qrUrl = 'https://your-vercel-url.vercel.app';
```

---

✨ Амжилтай Deploy хийгээрэй! ✨
