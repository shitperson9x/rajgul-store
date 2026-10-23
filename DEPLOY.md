# Panduan Deploy ML Boost Store

## 🚀 Deploy ke Vercel (RECOMMENDED - Gratis & Paling Mudah)

Vercel adalah platform terbaik untuk Next.js karena dibuat oleh tim yang sama.

### Langkah-langkah:

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/ml-boost-store.git
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Klik "Add New Project"
   - Import repository GitHub kamu
   - Klik "Deploy" - SELESAI! 🎉

3. **Custom Domain (Opsional)**
   - Di dashboard Vercel, pilih project kamu
   - Settings → Domains
   - Tambahkan domain kamu (gratis .vercel.app atau custom domain)

### Estimasi Waktu: 5 menit
### Biaya: GRATIS selamanya

---

## 🌐 Deploy ke Netlify

### Langkah-langkah:

1. **Build project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Buka [netlify.com](https://netlify.com)
   - Drag & drop folder project
   - Atau connect dengan GitHub repository

### Estimasi Waktu: 10 menit
### Biaya: GRATIS

---

## 🔥 Deploy ke VPS (Manual)

Jika kamu punya VPS sendiri (DigitalOcean, AWS, dll):

### Requirements:
- Node.js 18+ terinstall
- PM2 untuk process manager

### Langkah-langkah:

1. **Upload code ke server**
   ```bash
   scp -r ml-boost-store user@your-server-ip:/var/www/
   ```

2. **SSH ke server dan setup**
   ```bash
   ssh user@your-server-ip
   cd /var/www/ml-boost-store
   npm install
   npm run build
   ```

3. **Install PM2 dan jalankan**
   ```bash
   npm install -g pm2
   pm2 start npm --name "ml-boost-store" -- start
   pm2 save
   pm2 startup
   ```

4. **Setup Nginx sebagai reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Install SSL (HTTPS)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

### Estimasi Waktu: 30-60 menit
### Biaya: $5-10/bulan (VPS)

---

## ⚙️ Konfigurasi Sebelum Deploy

### 1. Ganti Nomor WhatsApp

Edit `app/page.tsx`:
```typescript
// Cari semua instance 6281234567890 dan ganti dengan nomor kamu
href="https://wa.me/6281234567890?text=..."
```

Atau buat file `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```

### 2. Update Metadata SEO

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "ML Boost Store - Jasa Naikin Rank Mobile Legends",
  description: "Jasa rank boosting...",
  // Tambahkan info lain seperti Open Graph untuk share di social media
};
```

### 3. Analytics (Opsional)

Tambahkan Google Analytics di `app/layout.tsx`:
```typescript
// Install: npm install @next/third-parties
import { GoogleAnalytics } from '@next/third-parties/google'

// Tambahkan di <body>:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

---

## 📊 Monitoring

Setelah deploy, monitor performa website:

- **Vercel**: Built-in analytics
- **Google Analytics**: Traffic & user behavior  
- **Google Search Console**: SEO performance
- **PageSpeed Insights**: Performance score

---

## 🔧 Troubleshooting

### Build Error
```bash
# Clear cache dan rebuild
rm -rf .next
npm run build
```

### Port sudah dipakai
```bash
# Ganti port di package.json
"start": "next start -p 3001"
```

### Website lambat
- Compress images (gunakan WebP format)
- Enable Vercel/Netlify CDN
- Minimize custom fonts

---

## 💡 Tips

1. **Domain Gratis**: Gunakan Freenom atau Vercel subdomain
2. **WhatsApp Business**: Buat akun bisnis untuk kredibilitas
3. **Backup**: Selalu backup database (jika nanti pakai database)
4. **Update**: `npm update` secara berkala

---

## 📞 Need Help?

Jika ada masalah saat deploy, cek:
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

Good luck! 🚀
