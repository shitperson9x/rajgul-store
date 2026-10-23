# Panduan Kustomisasi ML Boost Store

Panduan lengkap untuk mengkustomisasi website sesuai kebutuhan bisnis kamu.

## 📱 1. Ganti Nomor WhatsApp

### Cara Cepat (Manual Edit)
Buka file `app/page.tsx` dan cari-ganti semua nomor `6281234567890` dengan nomor WhatsApp kamu:

```typescript
href="https://wa.me/6281234567890?text=..."
// Ganti jadi:
href="https://wa.me/628123456789?text=..."
```

Format nomor: 62 + nomor (tanpa 0 di awal)
Contoh: 0812-3456-7890 → 6281234567890

### Cara Profesional (Environment Variable)
1. Buat file `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```

2. Update `app/page.tsx`:
```typescript
const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';
href={`https://wa.me/${waNumber}?text=...`}
```

---

## 💰 2. Ubah Harga Paket

Edit array `services` di `app/page.tsx`:

```typescript
const services = [
  {
    id: 1,
    title: 'Classic Rank',
    fromRank: 'Warrior',
    toRank: 'Master',
    price: 'Rp 50.000', // ← Ubah di sini
    duration: '1-3 hari',  // ← Dan di sini
    features: ['Win rate tinggi', 'Pro player', 'Garansi bintang']
  },
  // ... paket lainnya
]
```

---

## 🎨 3. Ganti Warna Theme

Edit `app/globals.css` untuk custom warna:

```css
/* Background gradient */
.bg-gradient-to-br {
  background: linear-gradient(to bottom right, 
    #1e3a8a,  /* Biru tua → Ganti ini */
    #581c87,  /* Ungu tua */
    #000000   /* Hitam */
  );
}

/* Tombol gradient */
.bg-gradient-to-r {
  background: linear-gradient(to right, 
    #3b82f6,  /* Biru → Ganti ini */
    #9333ea   /* Ungu → Ganti ini */
  );
}
```

### Preset Warna Populer:

**Gaming Red-Black:**
```css
from-red-900 via-gray-900 to-black
```

**Cyber Blue:**
```css
from-cyan-900 via-blue-900 to-black
```

**Gold Luxury:**
```css
from-yellow-900 via-orange-900 to-black
```

---

## 🏷️ 4. Tambah/Hapus Paket

### Tambah Paket Baru:
```typescript
{
  id: 7, // ID harus unik
  title: 'Paket Custom',
  fromRank: 'Any Rank',
  toRank: 'Target Rank',
  price: 'Rp XX.XXX',
  duration: 'X hari',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ]
}
```

### Hapus Paket:
Hapus object paket dari array `services`.

---

## 📝 5. Edit Konten Text

### Ubah Judul Website:
File: `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: "Judul Website Kamu", // ← Ubah ini
  description: "Deskripsi website kamu", // ← Dan ini
};
```

### Ubah Hero Section:
File: `app/page.tsx`
```tsx
<h2 className="text-5xl font-bold text-white mb-4">
  Judul Hero Kamu Di Sini
</h2>
<p className="text-xl text-gray-300 mb-8">
  Tagline atau deskripsi singkat
</p>
```

---

## 🎯 6. Tambah Fitur Baru

### Tambah Live Chat (WhatsApp Floating Button):

1. Buat file `app/components/WhatsAppFloat.tsx`:
```typescript
'use client';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6281234567890"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  );
}
```

2. Import di `app/page.tsx`:
```typescript
import WhatsAppFloat from './components/WhatsAppFloat';

// Tambahkan sebelum </div> terakhir:
<WhatsAppFloat />
```

### Tambah Google Analytics:

1. Install package:
```bash
npm install @next/third-parties
```

2. Update `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

---

## 🖼️ 7. Tambah Logo/Gambar

### Logo di Header:
1. Simpan logo di folder `public/logo.png`
2. Update header di `app/page.tsx`:
```typescript
import Image from 'next/image';

<div className="flex items-center">
  <Image src="/logo.png" alt="Logo" width={40} height={40} />
  <h1 className="ml-2 text-2xl font-bold">ML Boost Store</h1>
</div>
```

### Background Image:
```typescript
<div style={{ backgroundImage: "url('/bg.jpg')" }}>
  {/* Konten */}
</div>
```

---

## 🔧 8. Optimasi Performance

### Compress Images:
Gunakan format WebP untuk gambar yang lebih kecil:
- Tools: TinyPNG, Squoosh
- Next.js otomatis optimize gambar dengan `<Image />`

### Lazy Loading:
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

---

## 📊 9. Tambah Halaman Baru

### Buat halaman `/tentang`:
1. Buat folder `app/tentang/page.tsx`:
```typescript
export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black p-8">
      <h1 className="text-4xl font-bold text-white">Tentang Kami</h1>
      <p className="text-gray-300 mt-4">Konten tentang...</p>
    </div>
  );
}
```

2. Tambah link di menu:
```typescript
<Link href="/tentang">Tentang</Link>
```

---

## 🎨 10. Custom Font

### Gunakan Font Lain:
File: `app/layout.tsx`
```typescript
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700']
});

// Ganti di <body className={poppins.className}>
```

### Font Populer:
- Poppins (modern, clean)
- Montserrat (bold, gaming)
- Roboto (simple, readable)

---

## 📱 11. Responsif Mobile

Tailwind CSS sudah responsif by default. Prefix untuk breakpoints:
- `sm:` - Small (640px)
- `md:` - Medium (768px)
- `lg:` - Large (1024px)
- `xl:` - Extra Large (1280px)

Contoh:
```typescript
<div className="text-sm md:text-lg lg:text-xl">
  Teks ini ukurannya berubah di berbagai screen size
</div>
```

---

## 💡 Tips Pro

1. **Test di Mobile**: Gunakan Chrome DevTools (F12) → Device Toolbar
2. **Speed Test**: Cek di PageSpeed Insights setelah deploy
3. **SEO**: Tambahkan meta description yang menarik
4. **A/B Testing**: Coba variasi harga dan copywriting
5. **Backup**: Selalu commit ke Git sebelum ubah banyak hal

---

## ❓ Butuh Bantuan?

Jika ada yang bingung:
1. Baca dokumentasi Next.js: https://nextjs.org/docs
2. Tanya di komunitas: Reddit r/nextjs, Discord Next.js
3. ChatGPT/AI assistant untuk debug

Happy customizing! 🚀
