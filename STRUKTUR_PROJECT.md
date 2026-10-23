# 📂 Struktur Project ML Boost Store

## Overview
```
ml-boost-store/
├── app/                          # Next.js App Router
│   ├── components/               # Komponen React
│   │   └── ScrollToTop.tsx      # Tombol scroll ke atas
│   ├── layout.tsx               # Layout utama & metadata
│   ├── page.tsx                 # Halaman home (MAIN FILE!)
│   └── globals.css              # Global styles & custom CSS
├── public/                       # File statis (gambar, favicon, dll)
│   └── robots.txt               # SEO robots
├── .gitignore                   # File yang diabaikan git
├── .env.example                 # Contoh environment variables
├── next.config.ts               # Konfigurasi Next.js
├── tailwind.config.ts           # Konfigurasi Tailwind CSS
├── tsconfig.json                # Konfigurasi TypeScript
├── package.json                 # Dependencies & scripts
├── README.md                    # Dokumentasi utama
├── QUICKSTART.md                # Panduan cepat mulai
├── KUSTOMISASI.md               # Panduan kustomisasi detail
├── DEPLOY.md                    # Panduan deployment
└── STRUKTUR_PROJECT.md          # File ini
```

## 📄 Penjelasan File Penting

### 🔥 File yang Sering Diubah

#### 1. `app/page.tsx` (PALING PENTING!)
- **Apa itu**: Halaman utama website
- **Isi**:
  - Hero section
  - Daftar paket boosting (array `services`)
  - FAQ
  - Testimoni
  - Kontak
- **Edit untuk**:
  - Ganti nomor WhatsApp
  - Ubah harga paket
  - Tambah/hapus paket
  - Edit konten text

#### 2. `app/layout.tsx`
- **Apa itu**: Wrapper untuk semua halaman
- **Isi**:
  - Metadata (judul, deskripsi, keywords)
  - Font settings
  - HTML structure
- **Edit untuk**:
  - Ubah judul website
  - Ubah deskripsi SEO
  - Ganti font

#### 3. `app/globals.css`
- **Apa itu**: CSS global
- **Isi**:
  - Tailwind imports
  - Custom scrollbar
  - Smooth scrolling
- **Edit untuk**:
  - Custom warna scrollbar
  - Tambah animasi custom
  - Override Tailwind styles

### 🎨 Komponen

#### `app/components/ScrollToTop.tsx`
- Tombol scroll ke atas
- Muncul setelah scroll 300px
- Smooth animation

### ⚙️ Konfigurasi

#### `next.config.ts`
- Konfigurasi Next.js
- Biasanya tidak perlu diubah

#### `tailwind.config.ts`
- Konfigurasi Tailwind CSS
- Custom colors, animations
- Extend default theme

#### `tsconfig.json`
- Konfigurasi TypeScript
- Path aliases
- Compiler options

### 📦 Dependencies

#### `package.json`
**Production Dependencies:**
- `next` - Framework Next.js
- `react` - Library React
- `react-dom` - React DOM renderer

**Dev Dependencies:**
- `typescript` - TypeScript compiler
- `tailwindcss` - CSS framework
- `eslint` - Code linter
- `@types/*` - TypeScript types

## 🎯 Workflow Edit

### Skenario 1: Ubah Harga
```
1. Buka: app/page.tsx
2. Cari: const services = [
3. Edit: price: 'Rp XX.XXX'
4. Save
5. Refresh browser
```

### Skenario 2: Ganti Nomor WA
```
1. Buka: app/page.tsx
2. Cari: 6281234567890
3. Replace All dengan nomor kamu
4. Save
```

### Skenario 3: Ubah Warna
```
1. Buka: app/page.tsx
2. Cari: from-blue-900 via-purple-900 to-black
3. Ganti dengan warna pilihan
4. Save
```

### Skenario 4: Tambah Paket
```
1. Buka: app/page.tsx
2. Cari: const services = [
3. Copy satu paket
4. Paste di bawah
5. Edit id, title, price, dll
6. Save
```

## 📊 Data Flow

```
User klik "Order via WhatsApp"
         ↓
WhatsApp Web terbuka
         ↓
Message otomatis terisi dengan paket yang dipilih
         ↓
User chat langsung dengan seller
```

## 🔄 Development Workflow

```
1. Edit file → Save
2. Browser auto-refresh (Hot Module Replacement)
3. Test perubahan
4. Commit ke git
5. Push ke GitHub
6. Auto deploy di Vercel
```

## 🚀 Build Process

```
npm run dev    → Development (hot reload, debug mode)
npm run build  → Production build (optimized)
npm run start  → Production server (setelah build)
npm run lint   → Check code quality
```

## 📱 Responsive Breakpoints

Tailwind CSS breakpoints yang digunakan:

```
sm:   640px   → Small phones (landscape)
md:   768px   → Tablets
lg:   1024px  → Laptops
xl:   1280px  → Desktops
2xl:  1536px  → Large screens
```

Contoh penggunaan:
```tsx
<div className="text-sm md:text-base lg:text-lg">
  // Ukuran text berubah sesuai screen size
</div>
```

## 🎨 Color Scheme

### Primary Colors
- Blue: `#1e3a8a` (blue-900)
- Purple: `#581c87` (purple-900)
- Black: `#000000`

### Accent Colors
- Blue-500: `#3b82f6`
- Purple-600: `#9333ea`
- Green-500: `#22c55e` (WhatsApp button)

### Text Colors
- White: `#ffffff` (headings)
- Gray-300: `#d1d5db` (body text)
- Gray-400: `#9ca3af` (secondary text)

## 🔧 Scripts yang Tersedia

```bash
npm run dev       # Jalankan development server
npm run build     # Build untuk production
npm run start     # Jalankan production server
npm run lint      # Check code dengan ESLint
```

## 📦 Size & Performance

### Production Build Size (estimated):
- First Load JS: ~90kB
- Static files: minimal
- Total: Sangat ringan!

### Performance Score (target):
- ✅ Performance: 90+
- ✅ Accessibility: 100
- ✅ Best Practices: 100
- ✅ SEO: 100

## 🔐 Environment Variables

File `.env.local` (optional):
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Note**: File `.env*` tidak di-commit ke git (lihat `.gitignore`)

## 📝 Best Practices

1. **Sebelum Edit**: Backup atau commit ke git
2. **After Edit**: Test di browser
3. **Before Deploy**: Run `npm run build` untuk check error
4. **Mobile First**: Always test di mobile view
5. **Performance**: Keep images optimized

## 🆘 Troubleshooting

### Port sudah dipakai:
```bash
npm run dev -- -p 3001
```

### Build error:
```bash
rm -rf .next
npm run build
```

### Dependencies error:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Type error:
```bash
npm run lint
# Fix error yang muncul
```

## 📚 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs

---

**Happy Coding! 🚀**
