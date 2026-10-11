// 10 Poin Tata Bahasa Inti HSK 1 (Standar 3.0)

export const GRAMMAR_POINTS = [
  {
    id: 1,
    title: "1. Struktur Dasar Kalimat Mandarin",
    formula: "Subjek + (Waktu) + (Tempat) + Kata Kerja + Objek",
    desc: "Dalam bahasa Mandarin, keterangan WAKTU dan TEMPAT selalu diletakkan SEBELUM kata kerja, bukan di akhir kalimat seperti bahasa Indonesia atau Inggris!",
    contoh: [
      { hz: "我明天在学校学习汉语。", py: "Wǒ míngtiān zài xuéxiào xuéxí hànyǔ.", id: "Saya besok belajar bahasa Mandarin di sekolah." },
      { hz: "他晚上在家里看书。", py: "Tā wǎnshang zài jiā lǐ kàn shū.", id: "Dia malam hari membaca buku di rumah." }
    ],
    tips: "Urutan wajib: SIAPA -> KAPAN -> DI MANA -> BIKIN APA."
  },
  {
    id: 2,
    title: "2. Kalimat Tanya Ya/Tidak dengan '吗' (ma)",
    formula: "Pernyataan Positif + 吗 ？",
    desc: "Cukup tambahkan '吗' di akhir kalimat pernyataan biasa untuk langsung mengubahnya menjadi pertanyaan ya/tidak tanpa mengubah urutan kata.",
    contoh: [
      { hz: "你是学生吗？", py: "Nǐ shì xuésheng ma?", id: "Apakah kamu seorang pelajar?" },
      { hz: "你想喝茶吗？", py: "Nǐ xiǎng hē chá ma?", id: "Apakah kamu ingin minum teh?" }
    ],
    tips: "Jangan gunakan '吗' jika dalam kalimat sudah ada kata tanya seperti 什么, 哪儿, 谁!"
  },
  {
    id: 3,
    title: "3. Penyangkalan: '不' (bù) vs '没' (méi)",
    formula: "不 + Kata Kerja/Sifat (Sekarang/Akan Datang/Kebiasaan)\n没(有) + Kata Kerja/Kata Benda (Lampau / Kepemilikan)",
    desc: "'不' untuk menolak kebiasaan atau masa depan ('tidak mau/bukan'). '没' untuk menyatakan fakta masa lalu yang belum terjadi atau ketiadaan ('belum/tidak ada').",
    contoh: [
      { hz: "我不吃肉。", py: "Wǒ bù chī ròu.", id: "Saya tidak makan daging (kebiasaan/prinsip)." },
      { hz: "我昨天没去学校。", py: "Wǒ zuótiān méi qù xuéxiào.", id: "Kemarin saya tidak pergi ke sekolah (lampau)." },
      { hz: "我没有钱。", py: "Wǒ méiyǒu qián.", id: "Saya tidak punya uang." }
    ],
    tips: "KATA KERJA '有' HANYA BISA DISANGKAL DENGAN '没' (没有), TIDAK PERNAH '不有'!"
  },
  {
    id: 4,
    title: "4. Kepemilikan & Deskripsi dengan '的' (de)",
    formula: "Pemilik / Penjelas + 的 + Benda Inti",
    desc: "'的' berfungsi seperti apostrof 's dalam bahasa Inggris atau kata 'milik/yang' dalam bahasa Indonesia.",
    contoh: [
      { hz: "这是我的手机。", py: "Zhè shì wǒ de shǒujī.", id: "Ini adalah handphone milik saya." },
      { hz: "红色的苹果。", py: "Hóngsè de píngguǒ.", id: "Apel yang berwarna merah." }
    ],
    tips: "Untuk hubungan keluarga sangat dekat (ayah, ibu), '的' boleh dihilangkan: 我爸爸 (Ayah saya)."
  },
  {
    id: 5,
    title: "5. Kalimat Keberadaan dengan '在' (zài) & '有' (yǒu)",
    formula: "Benda + 在 + Tempat (Menunjukkan lokasi benda)\nTempat + 有 + Benda (Menunjukkan ada apa di tempat itu)",
    desc: "'在' fokus pada letak di mana suatu benda berada. '有' fokus pada isi dari suatu lokasi.",
    contoh: [
      { hz: "书在桌子上。", py: "Shū zài zhuōzi shang.", id: "Buku ada di atas meja." },
      { hz: "桌子上有两本书。", py: "Zhuōzi shang yǒu liǎng běn shū.", id: "Di atas meja ada dua buah buku." }
    ],
    tips: "Ingat arah letak: nama tempat + arah (misal: 学校旁边 = samping sekolah)."
  },
  {
    id: 6,
    title: "6. Kata Bantu Bilangan / Satuan (量词 - liàngcí)",
    formula: "Angka + Kata Satuan + Kata Benda",
    desc: "Dalam bahasa Mandarin, kata benda tidak bisa langsung ditempelkan dengan angka! Harus disisipi kata satuan.",
    contoh: [
      { hz: "一个人", py: "yí gè rén", id: "Satu orang (satuan umum 个)" },
      { hz: "三本书", py: "sān běn shū", id: "Tiga buku (satuan buku 本)" },
      { hz: "两杯咖啡", py: "liǎng bēi kāfēi", id: "Dua cangkir kopi (satuan cangkir 杯)" }
    ],
    tips: "Angka 2 di depan kata satuan selalu menggunakan '两' (liǎng), bukan '二' (èr)!"
  },
  {
    id: 7,
    title: "7. Kalimat Sifat Tanpa '是' (shì) dengan '很' (hěn)",
    formula: "Subjek + 很 + Kata Sifat (Bukan Subjek + 是 + Sifat!)",
    desc: "Salah satu kesalahan terbesar pemula adalah berkata '我是高兴'. Dalam Mandarin, kata sifat langsung bertindak sebagai predikat dan dihubungkan oleh '很'.",
    contoh: [
      { hz: "他很高。", py: "Tā hěn gāo.", id: "Dia tinggi. (Bukan: Tā shì gāo)" },
      { hz: "今天天气很好。", py: "Jīntiān tiānqì hěn hǎo.", id: "Cuaca hari ini sangat bagus." }
    ],
    tips: "Kata '很' di sini seringkali hanya berfungsi sebagai jembatan gramatikal alami, tidak selalu berarti 'sangat' berlebihan."
  },
  {
    id: 8,
    title: "8. Partikel '了' (le): Perubahan Situasi & Selesai",
    formula: "Klausa + 了",
    desc: "'了' diletakkan di akhir kalimat untuk menandakan kondisi baru yang baru saja terjadi atau perubahan keadaan.",
    contoh: [
      { hz: "下雨了。", py: "Xiàyǔ le.", id: "Hujan turun! (Tadinya tidak hujan, sekarang jadi hujan)." },
      { hz: "他来了。", py: "Tā lái le.", id: "Dia sudah datang." },
      { hz: "我懂了。", py: "Wǒ dǒng le.", id: "Saya sudah paham." }
    ],
    tips: "Jangan anggap '了' sama persis dengan past tense bahasa Inggris. Inti '了' adalah 'perubahan status'."
  },
  {
    id: 9,
    title: "9. Kalimat Perbandingan dengan '比' (bǐ)",
    formula: "A + 比 + B + Kata Sifat",
    desc: "Untuk membandingkan dua hal di mana A lebih memiliki kualitas tertentu dibanding B.",
    contoh: [
      { hz: "哥哥比我高。", py: "Gēge bǐ wǒ gāo.", id: "Kakak laki-laki lebih tinggi dibanding saya." },
      { hz: "今天比昨天冷。", py: "Jīntiān bǐ zuótiān lěng.", id: "Hari ini lebih dingin dibanding kemarin." }
    ],
    tips: "Jika ingin menambahkan selisih: A 比 B + Sifat + [Selisih], contoh: 哥哥比我大两岁 (Kakak 2 tahun lebih tua dari saya)."
  },
  {
    id: 10,
    title: "10. Kalimat Tanya Balik & Keberadaan dengan '呢' (ne)",
    formula: "Kata Benda / Orang + 呢 ？",
    desc: "Cara instan bertanya 'Bagaimana dengan...?' atau mencari keberadaan 'Di mana...?' tanpa kalimat panjang.",
    contoh: [
      { hz: "我很好，你呢？", py: "Wǒ hěn hǎo, nǐ ne?", id: "Kabar saya baik, bagaimana denganmu?" },
      { hz: "我的手机呢？", py: "Wǒ de shǒujī ne?", id: "HP saya di mana ya?" }
    ],
    tips: "Sangat praktis saat percakapan langsung!"
  }
];
