# 🇨🇳 HSK Turbo (Standar 3.0) — Aplikasi Belajar & Ujian Resmi Mandarin

Aplikasi web modern berbasis mobile-first untuk menguasai bahasa Mandarin dengan kurikulum **HSK 3.0 terbaru**, dirancang dengan protokol belajar cepat (Sprint 4 Hari untuk 500 kosakata HSK 1) dan roadmap terstruktur menuju **HSK 9 (11.092 kata)**.

---

## 🌟 Fitur Utama

- 🏠 **Beranda & Roadmap HSK 1 – HSK 9**:
  - Pelacak progres kumulatif menuju 11.092 kata HSK 9 (Tingkat Dasar, Menengah, hingga Mahir C2+).
  - Kartu interaktif tiap tingkatan HSK (HSK 1 s/d HSK 9) lengkap dengan filter kategori, target CEFR, jumlah Hanzi, dan durasi sprint.
  - Fitur 1-klik "Kunci 150 Kata" untuk langsung menandai progres awal yang sudah dikuasai.

- 📖 **Study Hub HSK 1 (500 Kosakata Standar 3.0)**:
  - **Sprint 4 Hari**: 125 kosakata/hari terstruktur dengan Pinyin, arti bahasa Indonesia, dan contoh kalimat.
  - **Flashcard Pintar**: Sistem kartu bolak-balik dengan pemisah status Belum / Sedang / Sudah Dikuasai.
  - **Speed Drill 60s**: Latihan kecepatan membaca pinyin dan arti dalam 60 detik.
  - **Tulis Hanzi (Tianzige Canvas)**: Kanvas latihan goresan Hanzi berlatar kotak Tianzige tradisional dengan tombol hapus dan pemandu goresan.
  - **Susun Kalimat (Sentence Builder)**: Latihan tata urutan kata Mandarin interaktif.
  - **Kamus 500 Kosakata**: Pencarian instan kata berdasarkan Hanzi, Pinyin, atau arti Indonesia.

- ✍️ **Tata Bahasa (Grammar)**:
  - 10 kaidah tata bahasa dasar Mandarin HSK 1 esensial dengan penjelasan mendalam, contoh kalimat, dan audio pelafalan.

- 🏆 **Simulasi Ujian Resmi HSK (Standar CTI 汉考国际)**:
  - Format soal menyerupai ujian sungguhan: 10 Soal Menyimak (*Tingli*, 100 poin) + 10 Soal Membaca (*Yuedu*, 100 poin) = Total 200 Poin (Nilai kelulusan: 120 / 60%).
  - Timer ujian otomatis 25 menit.
  - Bank soal dinamis dan teracak tiap kali ujian diulang.
  - **Sertifikat Resmi CTI**: Cetak sertifikat kelulusan berstempel resmi merah 汉考国际 dengan nama peserta dan nomor sertifikat unik.

- 👤 **Akun & Profil**:
  - Kustomisasi nama peserta untuk dicetak pada sertifikat.
  - Brankas riwayat sertifikat yang dapat dibuka dan dicetak ulang kapan saja.
  - Pengaturan kecepatan audio Mandarin (0.85x pelan atau 1.0x normal).

- 🔊 **Pelafalan Audio Instan Tanpa Delay**:
  - Ditenagai Web Speech API `zh-CN` dengan sanitasi teks audio otomatis untuk menghindari lag/delay saat memutar suara di Safari iOS maupun browser desktop.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 8, Tailwind CSS v4
- **Icons**: Lucide React
- **Audio**: Web Speech API (`SpeechSynthesisUtterance`)
- **Canvas**: HTML5 Canvas (Tianzige Hanzi stroke writing)

---

## 🚀 Menjalankan Secara Lokal

```bash
# Clone repository
git clone https://github.com/R4xel29/hsk1-turbo.git

# Masuk ke direktori
cd hsk1-turbo

# Pasang dependensi
npm install

# Jalankan server pengembangan
npm run dev
```

Buka `http://localhost:5173` di browser Anda atau buka alamat IP lokal pada Safari iPhone untuk pengalaman mobile app.

---

## 📄 Lisensi
MIT License
