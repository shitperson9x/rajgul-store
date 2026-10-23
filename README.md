# epos*rajgul store - Jasa Naikin Rank Mobile Legends

Website toko jasa rank boosting Mobile Legends yang ringan dan modern, dibuat dengan Next.js 15 dan Tailwind CSS.

## Fitur

- ✨ Desain modern dengan gradient dan glassmorphism
- 📱 Responsive untuk semua device
- ⚡ Performance optimal dengan Next.js App Router
- 🎨 Styling dengan Tailwind CSS (sangat ringan)
- 💬 Integrasi WhatsApp untuk order langsung
- 🎮 7 paket: 6 boosting rank + 1 Mabar VIP
- 🤝 Fitur Mabar VIP - Main bareng pro player!
- ⭐ Review system dengan screenshot upload
- 👥 Tim pro player display dengan stats

## Cara Menjalankan

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser dan akses [http://localhost:3000](http://localhost:3000)

## Cara Deploy

### Deploy ke Vercel (Gratis & Mudah)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Klik deploy - selesai!

### Deploy ke Netlify

1. Build project:
```bash
npm run build
```

2. Upload folder `.next` ke Netlify

## Kustomisasi

### Ganti Nomor WhatsApp

Edit file `app/page.tsx` dan ganti nomor di bagian atas:

```typescript
const waNumber = '6281235014075'; // Sudah diset!
```

Nomor saat ini: **+62 812-3501-4075**

### Ubah Harga Paket

Edit array `services` di file `app/page.tsx`:

```typescript
const services = [
  {
    title: 'Classic Rank',
    price: 'Rp 50.000', // Ubah harga di sini
    // ...
  }
]
```

### Tambah/Kurangi Paket

Tambah atau hapus object di array `services` sesuai kebutuhan.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel / Netlify

## Performance

Website ini dioptimalkan untuk:
- ⚡ Fast loading time
- 📱 Mobile-first approach
- 🔍 SEO friendly
- ♿ Accessible

## License

Free to use untuk keperluan komersial maupun personal.

---

Dibuat dengan ❤️ untuk para joki ML
