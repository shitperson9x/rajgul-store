# 📸 Cara Upload Foto Player

## Quick Steps

### 1. Simpan Foto
Simpan foto player ke folder:
```
public/team/gant.jpg
```

### 2. Update JSON
Tambahkan field `photo` di `data/employees.json`:
```json
{
  "id": "player-c",
  "name": "GanT",
  "speciality": "Roam / Gold",
  "winRate": 69,
  "totalGames": 231,
  "photo": "/team/gant.jpg"  ← Tambahkan ini
}
```

### 3. Refresh Browser
Foto langsung muncul!

---

## Upload Foto dari Komputer

**Via Terminal:**
```bash
# Copy foto ke folder public/team/
cp /path/to/foto.jpg public/team/gant.jpg
```

**Via File Manager:**
1. Buka folder: `ml-boost-store/public/team/`
2. Copy-paste foto GanT
3. Rename jadi `gant.jpg`

**Via VS Code:**
1. Drag & drop foto ke folder `public/team/`
2. Rename sesuai nama player

---

## Format Foto

**Recommended:**
- Format: JPG or PNG
- Size: 400x400px (square)
- Max file size: 500KB
- Quality: 80-90%

**Optimize:**
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/

---

## Naming Convention

```
public/team/{playername}.jpg
```

Examples:
- `public/team/gant.jpg`
- `public/team/kutu.jpg`
- `public/team/jager.jpg`
- `public/team/zukko.jpg`

**Lowercase & no spaces!**

---

## Update untuk Player Lain

### K U T U:
```json
{
  "id": "player-a",
  "name": "K U T U",
  "photo": "/team/kutu.jpg"
}
```

### Jager:
```json
{
  "id": "player-b",
  "name": "Jager",
  "photo": "/team/jager.jpg"
}
```

### Zukko:
```json
{
  "id": "player-d",
  "name": "Zukko",
  "photo": "/team/zukko.jpg"
}
```

---

## Troubleshooting

**Foto tidak muncul?**
1. Check path: `/team/gant.jpg` (huruf kecil!)
2. Hard refresh: Ctrl+Shift+R
3. Check file exists: `ls public/team/`

**Foto terlalu besar?**
- Compress di TinyPNG
- Atau resize ke 400x400px

**Foto terpotong?**
- Crop jadi square (1:1 ratio)
- Atau adjust CSS: `object-fit: contain`

---

## Tips

✅ **DO:**
- Use square photos (1:1 ratio)
- Compress untuk web
- Professional looking photos
- Consistent style

❌ **DON'T:**
- Use huge file sizes (>1MB)
- Use spaces in filename
- Forget to add .jpg/.png extension

---

## Current Status

**Players with photos:**
- ✅ GanT - `/team/gant.jpg`

**Players without photos:**
- ⭕ K U T U - Initial "K"
- ⭕ Jager - Initial "J"  
- ⭕ Zukko - Initial "Z"

Upload foto untuk player lain dengan cara yang sama!

---

**Need help?** Check this file or ask! 📖
