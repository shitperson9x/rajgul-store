# Upload Screenshots

Folder ini untuk menyimpan screenshot review dari customer.

## Format File
- Nama: `screenshot-{timestamp}.{ext}`
- Contoh: `screenshot-1698123456789.png`

## Catatan
- Max size: 2MB per file
- Format: JPG, PNG, WebP
- Auto-generated saat customer submit review

## Management
- File otomatis disimpan saat review di-submit
- Path disimpan di `data/reviews.json` sebagai `/uploads/filename.ext`
- Bisa hapus manual file yang tidak dipakai

## Backup
Pastikan folder ini di-backup saat deploy atau migrasi server!
