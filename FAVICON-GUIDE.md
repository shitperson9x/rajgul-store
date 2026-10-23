# 🎨 Favicon Guide

## Current Favicon

Website sekarang menggunakan **custom SVG favicon** dengan tema Mobile Legends:
- Shield shape (bentuk perisai)
- Gradient purple/blue
- Star & sword motif
- ML-inspired design

**File**: `app/icon.svg`

---

## 🔄 Cara Ganti Favicon

### Option 1: Pakai Logo ML Official (Recommended)

1. **Download ML logo** dari official source
2. **Convert ke format yang dibutuhkan**:
   - `icon.svg` (vector, untuk modern browsers)
   - `icon-192.png` (192x192px, untuk Android)
   - `icon-512.png` (512x512px, untuk PWA)

3. **Replace files**:
```bash
# Copy ke folder yang benar
app/icon.svg          # Main favicon
public/icon-192.png   # Android icon
public/icon-512.png   # PWA icon
```

4. **Rebuild**:
```bash
npm run build
```

---

### Option 2: Generate dari Image

Jika punya image ML (PNG/JPG):

1. **Go to**: https://realfavicongenerator.net/
2. **Upload image ML**
3. **Download package**
4. **Extract & copy files**:
   - `icon.svg` → `app/icon.svg`
   - `apple-touch-icon.png` → `public/apple-touch-icon.png`
   - `favicon.ico` → `public/favicon.ico`

---

### Option 3: Custom SVG (Current)

Edit `app/icon.svg` langsung:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <!-- Edit shapes, colors, etc -->
</svg>
```

---

## 📱 PWA Support

Website sudah support PWA (Progressive Web App)!

### Files:
- `public/manifest.json` - PWA config
- `app/icon.svg` - Main icon
- `app/layout.tsx` - Metadata config

### Features:
- ✅ Add to Home Screen (mobile)
- ✅ Offline capability (if service worker added)
- ✅ App-like experience
- ✅ Custom splash screen

---

## 🎨 Icon Specifications

### Favicon (Browser Tab)
- **Format**: SVG (preferred) or ICO
- **Size**: 16x16, 32x32, 48x48px
- **File**: `app/icon.svg` or `public/favicon.ico`

### Apple Touch Icon (iOS)
- **Format**: PNG
- **Size**: 180x180px
- **File**: `public/apple-touch-icon.png`

### Android Icons
- **Format**: PNG
- **Sizes**: 192x192px, 512x512px
- **Files**: 
  - `public/icon-192.png`
  - `public/icon-512.png`

### Open Graph (Social Share)
- **Format**: PNG or JPG
- **Size**: 1200x630px
- **File**: `public/og-image.png`

---

## 🖼️ Recommended Tools

### Free Tools:
- **Favicon Generator**: https://realfavicongenerator.net/
- **SVG Editor**: https://editor.method.ac/
- **Image Resize**: https://www.iloveimg.com/resize-image

### Design Tools:
- **Figma** (free online)
- **Canva** (simple design)
- **Inkscape** (free SVG editor)

---

## 🎯 Best Practices

### DO:
- ✅ Use simple, recognizable shapes
- ✅ High contrast colors
- ✅ Test in different themes (light/dark)
- ✅ Optimize file size (<10KB)
- ✅ Use vector (SVG) when possible

### DON'T:
- ❌ Use complex details (not visible at 16x16)
- ❌ Use too many colors
- ❌ Forget to test mobile
- ❌ Use copyrighted logos without permission

---

## 🔍 Testing

### Browser Tab:
```
1. Open website
2. Check browser tab
3. Favicon visible next to title
```

### Mobile (Add to Home):
```
1. Open on mobile
2. Menu → "Add to Home Screen"
3. Icon appears on home screen
4. Open → App-like experience
```

### Dark Mode:
```
1. Switch OS to dark mode
2. Check if favicon still visible
3. Adjust colors if needed
```

---

## 📝 Current Theme

**Colors**:
- Primary: #667eea (Purple)
- Secondary: #764ba2 (Dark Purple)
- Accent: #FFD700 (Gold - for star/sword)

**Shape**: Shield with star (ML theme)

**Style**: Gradient modern

---

## 🚀 Future Improvements

1. **Real ML Logo** (if get permission)
2. **Animated favicon** (for special events)
3. **Multiple variants** (for different pages)
4. **Custom splash screen** (PWA)
5. **App store icons** (if make mobile app)

---

## 📞 Need Help?

**Issues**:
- Favicon not showing → Hard refresh (Ctrl+Shift+F5)
- Wrong icon → Check file names & paths
- Blurry → Use larger size PNG or vector SVG

**Resources**:
- Next.js Metadata: https://nextjs.org/docs/app/api-reference/file-conventions/metadata
- PWA Guide: https://web.dev/progressive-web-apps/

---

**Current Status**: ✅ Custom SVG favicon active!
