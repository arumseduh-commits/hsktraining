// Tata Bahasa Lengkap HSK Standar 3.0 (HSK 1 & HSK 2)
// Lengkap dengan rumus pola, penjelasan bahasa Indonesia, contoh kalimat Hanzi-Pinyin-Arti, dan tips praktis.

import { HSK2_GRAMMAR, HSK2_GRAMMAR_CATEGORIES } from './hsk2Grammar.js';

export const GRAMMAR_CATEGORIES = [
  "Semua",
  "Struktur Dasar",
  "Kata Tanya",
  "Penyangkalan",
  "Kata Satuan",
  "Partikel 的 & 了",
  "Kata Kerja Modal",
  "Waktu & Jumlah",
  "Preposisi & Relasi"
];

export const GRAMMAR_POINTS = [
  // --- KATEGORI 1: STRUKTUR DASAR & PREDIKAT ---
  {
    id: 1,
    category: "Struktur Dasar",
    title: "1. Struktur Dasar Kalimat (S-V-O)",
    formula: "Subjek + Kata Kerja + Objek",
    desc: "Pola dasar kalimat pernyataan dalam bahasa Mandarin mirip dengan bahasa Indonesia: Subjek mendahului Kata Kerja, lalu diikuti Objek.",
    contoh: [
      { hz: "我学习汉语。", py: "Wǒ xuéxí hànyǔ.", id: "Saya belajar bahasa Mandarin." },
      { hz: "他喝茶。", py: "Tā hē chá.", id: "Dia minum teh." }
    ],
    tips: "Urutan inti selalu Subjek -> Kata Kerja -> Objek. Jangan terbalik menaruh objek sebelum kata kerja!"
  },
  {
    id: 2,
    category: "Struktur Dasar",
    title: "2. Keterangan Waktu Sebelum Kata Kerja",
    formula: "Subjek + (Waktu) + Kata Kerja + Objek  ATAU  Waktu + Subjek + Kata Kerja + Objek",
    desc: "Keterangan WAKTU tidak boleh diletakkan di akhir kalimat! Waktu diletakkan sebelum kata kerja, bisa setelah subjek atau di paling depan kalimat.",
    contoh: [
      { hz: "我明天去北京。", py: "Wǒ míngtiān qù Běijīng.", id: "Saya besok pergi ke Beijing." },
      { hz: "晚上我们看电影。", py: "Wǎnshang wǒmen kàn diànyǐng.", id: "Malam hari kami menonton film." }
    ],
    tips: "Salah besar jika berkata 'Wǒ qù Běijīng míngtiān'. Ingat rumus: KAPAN selalu sebelum BIKIN APA."
  },
  {
    id: 3,
    category: "Struktur Dasar",
    title: "3. Keterangan Tempat dengan '在' (zài)",
    formula: "Subjek + 在 + Tempat + Kata Kerja + Objek",
    desc: "Lokasi tempat terjadinya aktivitas selalu diletakkan SEBELUM kata kerja utamanya.",
    contoh: [
      { hz: "他在学校看书。", py: "Tā zài xuéxiào kàn shū.", id: "Dia membaca buku di sekolah." },
      { hz: "我们在饭馆吃饭。", py: "Wǒmen zài fànguǎn chī fàn.", id: "Kami makan nasi di restoran." }
    ],
    tips: "Rumus emas Mandarin: SIAPA + DI MANA (在...) + BIKIN APA."
  },
  {
    id: 4,
    category: "Struktur Dasar",
    title: "4. Kata Kerja Kopula / Identitas '是' (shì)",
    formula: "Subjek + 是 + Kata Benda / Profesi / Identitas",
    desc: "'是' berfungsi seperti kata 'adalah / merupakan' untuk menyamakan dua kata benda atau menyatakan identitas dan profesi.",
    contoh: [
      { hz: "我是老师。", py: "Wǒ shì lǎoshī.", id: "Saya adalah seorang guru." },
      { hz: "他是中国人。", py: "Tā shì Zhōngguó rén.", id: "Dia adalah orang Tiongkok." }
    ],
    tips: "JANGAN gunakan '是' sebelum kata sifat! Mengatakan '我是高兴' itu salah."
  },
  {
    id: 5,
    category: "Struktur Dasar",
    title: "5. Predikat Kata Sifat Menggunakan '很' (hěn)",
    formula: "Subjek + 很 + Kata Sifat",
    desc: "Dalam Mandarin, kata sifat langsung bertindak sebagai predikat tanpa kata '是'. Kata '很' digunakan sebagai jembatan gramatikal alami.",
    contoh: [
      { hz: "他很高。", py: "Tā hěn gāo.", id: "Dia tinggi." },
      { hz: "今天天气很好。", py: "Jīntiān tiānqì hěn hǎo.", id: "Cuaca hari ini sangat bagus." }
    ],
    tips: "'很' di sini seringkali tidak bermakna 'sangat' yang berlebihan, melainkan penyeimbang ritme kalimat."
  },
  {
    id: 6,
    category: "Struktur Dasar",
    title: "6. Kata Sifat dengan Penyangkalan '不' (bù)",
    formula: "Subjek + 不 + Kata Sifat",
    desc: "Saat menyangkal kata sifat, cukup ganti '很' dengan '不'. Jangan tambahkan kata '是'.",
    contoh: [
      { hz: "他不忙。", py: "Tā bù máng.", id: "Dia tidak sibuk." },
      { hz: "这个不大。", py: "Zhè ge bù dà.", id: "Yang ini tidak besar." }
    ],
    tips: "Perhatikan perubahan nada: '不' (bù) berubah menjadi nada 2 (bú) jika bertemu nada 4 (contoh: bú dà)."
  },

  // --- KATEGORI 2: KATA TANYA & INTEROGATIF ---
  {
    id: 7,
    category: "Kata Tanya",
    title: "7. Kalimat Tanya Ya/Tidak dengan '吗' (ma)",
    formula: "Kalimat Pernyataan + 吗 ？",
    desc: "Cukup tempelkan partikel '吗' di ujung kalimat pernyataan untuk mengubahnya menjadi pertanyaan ya/tidak tanpa mengubah susunan kata.",
    contoh: [
      { hz: "你是学生吗？", py: "Nǐ shì xuésheng ma?", id: "Apakah kamu seorang murid?" },
      { hz: "你想喝水吗？", py: "Nǐ xiǎng hē shuǐ ma?", id: "Apakah kamu ingin minum air?" }
    ],
    tips: "Jangan gunakan '吗' jika kalimat sudah memuat kata tanya lain seperti 什么, 谁, 哪儿."
  },
  {
    id: 8,
    category: "Kata Tanya",
    title: "8. Tanya Balik & Cari Lokasi dengan '呢' (ne)",
    formula: "Kata Benda / Orang + 呢 ？",
    desc: "Berfungsi untuk tanya balik singkat ('Bagaimana dengan...?') atau menanyakan letak keberadaan suatu benda/orang ('Di mana...?').",
    contoh: [
      { hz: "我很好，你呢？", py: "Wǒ hěn hǎo, nǐ ne?", id: "Saya baik-baik saja, bagaimana dengan kamu?" },
      { hz: "我的书呢？", py: "Wǒ de shū ne?", id: "Buku saya di mana ya?" }
    ],
    tips: "Bentuk pertanyaan paling singkat dan sangat alami dalam obrolan harian."
  },
  {
    id: 9,
    category: "Kata Tanya",
    title: "9. Menanyakan Benda / Hal dengan '什么' (shénme)",
    formula: "Subjek + Kata Kerja + 什么？  ATAU  什么 + Kata Benda？",
    desc: "'什么' berarti 'apa'. Letaknya menggantikan posisi objek yang ditanyakan.",
    contoh: [
      { hz: "这是什么？", py: "Zhè shì shénme?", id: "Ini apa?" },
      { hz: "你叫什么名字？", py: "Nǐ jiào shénme míngzi?", id: "Siapa namamu? (Nama apa yang kamu sebut?)" }
    ],
    tips: "Susunan kata Mandarin tidak memindahkan kata tanya ke depan seperti bahasa Inggris (Wh-movement)."
  },
  {
    id: 10,
    category: "Kata Tanya",
    title: "10. Menanyakan Orang dengan '谁' (shéi / shuí)",
    formula: "Subjek + 是 + 谁？  ATAU  谁 + Kata Kerja？",
    desc: "'谁' berarti 'siapa', digunakan untuk menanyakan identitas seseorang.",
    contoh: [
      { hz: "他是谁？", py: "Tā shì shéi?", id: "Siapakah dia?" },
      { hz: "谁会说汉语？", py: "Shéi huì shuō hànyǔ?", id: "Siapa yang bisa bicara bahasa Mandarin?" }
    ],
    tips: "Bisa dibaca 'shéi' (umum di lisan utara) maupun 'shuí' (baku)."
  },
  {
    id: 11,
    category: "Kata Tanya",
    title: "11. Menanyakan Lokasi dengan '哪儿 / 哪里' (nǎr / nǎlǐ)",
    formula: "Subjek + 在 + 哪儿 / 哪里？  ATAU  Subjek + 去 + 哪儿？",
    desc: "Digunakan untuk menanyakan tempat atau lokasi keberadaan seseorang atau tujuan pergi.",
    contoh: [
      { hz: "你在哪儿？", py: "Nǐ zài nǎr?", id: "Kamu ada di mana?" },
      { hz: "他去哪里？", py: "Tā qù nǎlǐ?", id: "Dia pergi ke mana?" }
    ],
    tips: "'哪儿' (nǎr) khas dialek Beijing/Utara, sedangkan '哪里' (nǎlǐ) umum di Tiongkok Selatan dan Taiwan."
  },
  {
    id: 12,
    category: "Kata Tanya",
    title: "12. Menanyakan Pilihan dengan '哪' (nǎ + Satuan)",
    formula: "哪 + Kata Satuan + Kata Benda",
    desc: "'哪' berarti 'yang mana'. Wajib diikuti kata satuan sebelum kata bendanya.",
    contoh: [
      { hz: "哪本书是你的？", py: "Nǎ běn shū shì nǐ de?", id: "Buku yang mana yang milikmu?" },
      { hz: "你是哪国人？", py: "Nǐ shì nǎ guó rén?", id: "Kamu orang negara mana?" }
    ],
    tips: "Jangan tertukar: 哪 (nǎ, nada 3 = mana) vs 那 (nà, nada 4 = itu)."
  },
  {
    id: 13,
    category: "Kata Tanya",
    title: "13. Menanyakan Jumlah Kecil (<10) dengan '几' (jǐ)",
    formula: "几 + Kata Satuan + Kata Benda？",
    desc: "'几' digunakan untuk menanyakan jumlah yang diperkirakan kurang dari 10 (misal: jam, tanggal, jumlah anggota keluarga).",
    contoh: [
      { hz: "你有几个苹果？", py: "Nǐ yǒu jǐ gè píngguǒ?", id: "Kamu punya berapa buah apel?" },
      { hz: "现在几点？", py: "Xiànzài jǐ diǎn?", id: "Sekarang jam berapa?" }
    ],
    tips: "'几' hampir selalu harus diikuti kata satuan (jǐ gè, jǐ běn, jǐ diǎn)."
  },
  {
    id: 14,
    category: "Kata Tanya",
    title: "14. Menanyakan Jumlah Bebas / Besar dengan '多少' (duōshao)",
    formula: "多少 + Kata Benda？",
    desc: "'多少' digunakan untuk menanyakan jumlah tanpa batas perkiraan (bisa lebih dari 10) dan kata satuan boleh dihilangkan.",
    contoh: [
      { hz: "你们学校有多少学生？", py: "Nǐmen xuéxiào yǒu duōshao xuésheng?", id: "Ada berapa banyak murid di sekolah kalian?" },
      { hz: "你有多少钱？", py: "Nǐ yǒu duōshao qián?", id: "Berapa banyak uang yang kamu miliki?" }
    ],
    tips: "Kata 'shao' dibaca nada netral (ringan)."
  },
  {
    id: 15,
    category: "Kata Tanya",
    title: "15. Menanyakan Harga dengan '多少钱' (duōshao qián)",
    formula: "Barang / Jasa + 多少钱？",
    desc: "Frasa standar dan paling sering dipakai untuk menanyakan harga saat berbelanja di Tiongkok.",
    contoh: [
      { hz: "这个多少钱？", py: "Zhè ge duōshao qián?", id: "Berapa harga barang ini?" },
      { hz: "苹果一斤多少钱？", py: "Píngguǒ yì jīn duōshao qián?", id: "Apel satu jin (500g) harganya berapa?" }
    ],
    tips: "Untuk menjawab: [Jumlah Angka] + 块 (kuài) / 钱 (qián)."
  },
  {
    id: 16,
    category: "Kata Tanya",
    title: "16. Menanyakan Cara / Tindakan dengan '怎么' (zěnme)",
    formula: "怎么 + Kata Kerja？",
    desc: "'怎么' diletakkan tepat di depan kata kerja untuk menanyakan cara melakukan suatu aksi ('Bagaimana cara...?').",
    contoh: [
      { hz: "这个汉字怎么读？", py: "Zhè ge hànzì zěnme dú?", id: "Bagaimana cara membaca karakter Hanzi ini?" },
      { hz: "去火车站怎么走？", py: "Qù huǒchēzhàn zěnme zǒu?", id: "Bagaimana jalan menuju stasiun kereta api?" }
    ],
    tips: "Rumus: 怎么 + Kata Kerja = cara melakukan kata kerja tersebut."
  },
  {
    id: 17,
    category: "Kata Tanya",
    title: "17. Menanyakan Sebab / Heran dengan '怎么' (zěnme)",
    formula: "Subjek + 怎么 + [Predikat]？",
    desc: "'怎么' juga bisa berarti 'kenapa / kok bisa begini', bernada heran atas suatu situasi.",
    contoh: [
      { hz: "你怎么不吃？", py: "Nǐ zěnme bù chī?", id: "Kenapa kamu kok tidak makan?" },
      { hz: "他今天怎么没来？", py: "Tā jīntiān zěnme méi lái?", id: "Kenapa hari ini dia kok tidak datang?" }
    ],
    tips: "Nuansanya lebih heran dibanding kata tanya formal '为什么' (wèishénme)."
  },
  {
    id: 18,
    category: "Kata Tanya",
    title: "18. Menanyakan Kondisi & Pendapat dengan '怎么样' (zěnmeyàng)",
    formula: "Subjek / Hal + 怎么样？",
    desc: "'怎么样' diletakkan di akhir kalimat untuk menanyakan 'Bagaimana keadaannya?' atau meminta persetujuan/saran.",
    contoh: [
      { hz: "今天天气怎么样？", py: "Jīntiān tiānqì zěnmeyàng?", id: "Bagaimana cuaca hari ini?" },
      { hz: "我们明天去，怎么样？", py: "Wǒmen míngtiān qù, zěnmeyàng?", id: "Kita pergi besok, bagaimana menurutmu?" }
    ],
    tips: "Sangat fleksibel untuk meminta opini teman."
  },
  {
    id: 19,
    category: "Kata Tanya",
    title: "19. Pertanyaan Pilihan Pola Positif-Negatif (A-not-A)",
    formula: "Kata Kerja + 不 + Kata Kerja？  ATAU  Kata Sifat + 不 + Kata Sifat？",
    desc: "Menyandingkan bentuk positif dan negatif berturut-turut untuk membuat pertanyaan alternatif tanpa perlu memakai '吗'.",
    contoh: [
      { hz: "你去不去？", py: "Nǐ qù bu qù?", id: "Kamu pergi atau tidak?" },
      { hz: "这个好看不好看？", py: "Zhè ge hǎokàn bu hǎokàn?", id: "Ini bagus atau tidak?" }
    ],
    tips: "PENTING: Jangan gunakan '吗' di akhir kalimat pola A-not-A!"
  },

  // --- KATEGORI 3: PENYANGKALAN (NEGASI) ---
  {
    id: 20,
    category: "Penyangkalan",
    title: "20. Penyangkalan Rutin & Masa Depan dengan '不' (bù)",
    formula: "不 + Kata Kerja / Kata Sifat",
    desc: "'不' digunakan untuk menyangkal kebiasaan, prinsip kemauan saat ini, atau rencana masa depan ('tidak / tidak mau').",
    contoh: [
      { hz: "我不吃肉。", py: "Wǒ bù chī ròu.", id: "Saya tidak makan daging (kebiasaan/prinsip)." },
      { hz: "我明天不去。", py: "Wǒ míngtiān bú qù.", id: "Besok saya tidak akan pergi." }
    ],
    tips: "'不' menunjukkan kehendak subjektif atau penolakan."
  },
  {
    id: 21,
    category: "Penyangkalan",
    title: "21. Penyangkalan Aksi Lampau dengan '没' (méi)",
    formula: "没(有) + Kata Kerja",
    desc: "'没' digunakan untuk menyatakan bahwa suatu aksi belum terjadi atau tidak terlaksana di masa lalu.",
    contoh: [
      { hz: "我昨天没去学校。", py: "Wǒ zuótiān méi qù xuéxiào.", id: "Kemarin saya tidak pergi ke sekolah." },
      { hz: "他没听懂。", py: "Tā méi tīng dǒng.", id: "Dia tidak/belum paham mendengar tadi." }
    ],
    tips: "Jika sudah ada '没', partikel selesai '了' TIDAK BOLEH dipakai (Bukan: méi qù le ❌)."
  },
  {
    id: 22,
    category: "Penyangkalan",
    title: "22. Penyangkalan Kepemilikan '没有' (méiyǒu)",
    formula: "Subjek + 没有 + Kata Benda",
    desc: "'没有' berarti 'tidak memiliki / tidak ada'. Kata kerja '有' HANYA boleh disangkal dengan '没', tidak pernah '不有'!",
    contoh: [
      { hz: "我没有钱。", py: "Wǒ méiyǒu qián.", id: "Saya tidak punya uang." },
      { hz: "桌子上没有书。", py: "Zhuōzi shang méiyǒu shū.", id: "Di atas meja tidak ada buku." }
    ],
    tips: "Ingat aturan mutlak: Tidak pernah ada 'bù yǒu' dalam bahasa Mandarin."
  },
  {
    id: 23,
    category: "Penyangkalan",
    title: "23. Larangan Sopan dengan '别' (bié)",
    formula: "别 + Kata Kerja + (了)",
    desc: "'别' berarti 'jangan', digunakan untuk meminta atau melarang seseorang melakukan sesuatu.",
    contoh: [
      { hz: "别说话。", py: "Bié shuōhuà.", id: "Jangan berbicara!" },
      { hz: "别哭了。", py: "Bié kū le.", id: "Sudahlah, jangan menangis lagi." }
    ],
    tips: "Bisa dipadukan dengan '客气' -> 别客气 (bié kèqi) = sama-sama / jangan sungkan."
  },

  // --- KATEGORI 4: KATA SATUAN (CLASSIFIER / MEASURE WORDS) ---
  {
    id: 24,
    category: "Kata Satuan",
    title: "24. Kata Satuan Umum '个' (gè)",
    formula: "Angka / Penunjuk + 个 + Kata Benda",
    desc: "'个' adalah kata satuan paling serbaguna dalam bahasa Mandarin, dipakai untuk orang, buah, benda umum, dan konsep abstrak.",
    contoh: [
      { hz: "一个人", py: "yí gè rén", id: "Satu orang" },
      { hz: "三个苹果", py: "sān gè píngguǒ", id: "Tiga buah apel" }
    ],
    tips: "Jika lupa kata satuan spesifik, '个' seringkali dapat dipahami sebagai penyelamat komunikasi."
  },
  {
    id: 25,
    category: "Kata Satuan",
    title: "25. Kata Satuan Buku '本' (běn)",
    formula: "Angka + 本 + Buku / Majalah",
    desc: "'本' khusus digunakan untuk benda yang berbentuk jilid atau buku.",
    contoh: [
      { hz: "我买了一本书。", py: "Wǒ mǎi le yì běn shū.", id: "Saya membeli sebuah buku." },
      { hz: "桌上有两本书。", py: "Zhuō shang yǒu liǎng běn shū.", id: "Di atas meja ada dua buah buku." }
    ],
    tips: "Berasal dari karakter akar pohon, menyimbolkan bundelan jilidan."
  },
  {
    id: 26,
    category: "Kata Satuan",
    title: "26. Kata Satuan Gelas / Cangkir '杯' (bēi)",
    formula: "Angka + 杯 + Minuman",
    desc: "'杯' digunakan untuk minuman atau cairan yang disajikan dalam wadah cangkir/gelas.",
    contoh: [
      { hz: "一杯茶", py: "yì bēi chá", id: "Secangkir teh" },
      { hz: "两杯水", py: "liǎng bēi shuǐ", id: "Dua gelas air" }
    ],
    tips: "Bisa juga berfungsi sebagai kata benda (杯子 = cangkir/gelas)."
  },
  {
    id: 27,
    category: "Kata Satuan",
    title: "27. Kata Satuan Pakaian & Perkara '件' (jiàn)",
    formula: "Angka + 件 + Pakaian / Hal",
    desc: "'件' digunakan untuk baju atasan, jaket, dan juga untuk menyatakan urusan/perkara (事).",
    contoh: [
      { hz: "这件衣服很漂亮。", py: "Zhè jiàn yīfu hěn piàoliang.", id: "Pakaian ini sangat cantik." },
      { hz: "一件事", py: "yí jiàn shì", id: "Satu hal / satu perkara" }
    ],
    tips: "Khusus celana nanti memakai 条 (tiáo), tetapi baju memakai 件 (jiàn)."
  },
  {
    id: 28,
    category: "Kata Satuan",
    title: "28. Kata Satuan Kendaraan '辆' (liàng)",
    formula: "Angka + 辆 + Mobil / Sepeda / Kendaraan Beroda",
    desc: "'辆' digunakan untuk menghitung kendaraan darat beroda seperti mobil, bus, atau sepeda.",
    contoh: [
      { hz: "一辆出租车", py: "yí liàng chūzūchē", id: "Satu unit taksi" },
      { hz: "那辆车是我的。", py: "Nà liàng chē shì wǒ de.", id: "Mobil itu adalah milik saya." }
    ],
    tips: "Memiliki radikal 车 (kendaraan) di sisi kirinya."
  },
  {
    id: 29,
    category: "Kata Satuan",
    title: "29. Kata Satuan Hewan Kecil '只' (zhī)",
    formula: "Angka + 只 + Hewan",
    desc: "'只' digunakan untuk menghitung hewan seperti kucing, burung, anjing kecil, atau satu pasang anggota tubuh.",
    contoh: [
      { hz: "一只猫", py: "yì zhī māo", id: "Seekor kucing" },
      { hz: "我家有两只狗。", py: "Wǒ jiā yǒu liǎng zhī gǒu.", id: "Rumah saya ada dua ekor anjing." }
    ],
    tips: "Bedakan nada: 'zhī' (satuan hewan) vs 'zhǐ' (hanya)."
  },
  {
    id: 30,
    category: "Kata Satuan",
    title: "30. Kata Satuan Orang Hormat '位' (wèi)",
    formula: "Angka + 位 + Guru / Tamu / Pelanggan",
    desc: "'位' adalah kata satuan bentuk sopan untuk menghormati orang (dibanding '个' yang netral).",
    contoh: [
      { hz: "一位老师", py: "yí wèi lǎoshī.", id: "Seorang guru yang terhormat" },
      { hz: "几位客人", py: "jǐ wèi kèrén.", id: "Beberapa orang tamu" }
    ],
    tips: "Sangat umum didengar saat masuk restoran: '几位？' (Berapa orang?)."
  },
  {
    id: 31,
    category: "Kata Satuan",
    title: "31. Aturan '两' (liǎng) vs '二' (èr) di Depan Satuan",
    formula: "两 + Kata Satuan + Kata Benda (BUKAN 二 + Satuan)",
    desc: "Ketika menyebut angka 2 yang langsung diikuti kata satuan atau kuantitas, WAJIB menggunakan '两' (liǎng), bukan '二' (èr).",
    contoh: [
      { hz: "两个人", py: "liǎng gè rén", id: "Dua orang (Bukan: èr gè rén ❌)" },
      { hz: "两点钟", py: "liǎng diǎn zhōng", id: "Pukul dua tepat" }
    ],
    tips: "'二' hanya dipakai untuk berhitung urutan (1, 2, 3), nomor telepon, dan lantai."
  },

  // --- KATEGORI 5: PARTIKEL STRUKTUR & KEPEMILIKAN ---
  {
    id: 32,
    category: "Partikel 的 & 了",
    title: "32. Partikel Kepemilikan '的' (de)",
    formula: "Pemilik + 的 + Benda Milik",
    desc: "'的' menghubungkan pemilik dengan benda yang dimilikinya, sepadan dengan kata 'punya / milik' atau apostrof 's.",
    contoh: [
      { hz: "这是我的书。", py: "Zhè shì wǒ de shū.", id: "Ini adalah buku milik saya." },
      { hz: "老师的电脑", py: "lǎoshī de diànnǎo", id: "Komputer milik guru" }
    ],
    tips: "Struktur: Yang memiliki diletakkan di depan, bendanya di belakang."
  },
  {
    id: 33,
    category: "Partikel 的 & 了",
    title: "33. Peniadaan '的' untuk Hubungan Keluarga Dekat",
    formula: "Kata Ganti + Anggota Keluarga / Institusi Dekat",
    desc: "Untuk anggota keluarga inti (ayah, ibu, kakak) atau tempat berafiliasi dekat (sekolah, negara), '的' sering kali dihilangkan untuk menunjukkan kedekatan emosional.",
    contoh: [
      { hz: "我爸爸很高。", py: "Wǒ bàba hěn gāo.", id: "Ayah saya tinggi (tanpa 的)." },
      { hz: "我们学校很大。", py: "Wǒmen xuéxiào hěn dà.", id: "Sekolah kami sangat besar." }
    ],
    tips: "Mengatakan '我爸爸' terdengar jauh lebih akrab dan alami dibanding '我的爸爸'."
  },
  {
    id: 34,
    category: "Partikel 的 & 了",
    title: "34. Modifikasi Kata Sifat Panjang dengan '的' (de)",
    formula: "Kata Sifat Kompleks + 的 + Kata Benda",
    desc: "Ketika kata sifat terdiri dari dua suku kata atau disertai keterangan derajat ('很'), '的' disisipkan sebelum kata benda inti.",
    contoh: [
      { hz: "漂亮的衣服", py: "piàoliang de yīfu", id: "Pakaian yang cantik" },
      { hz: "很大的房子", py: "hěn dà de fángzi", id: "Rumah yang sangat besar" }
    ],
    tips: "'的' berfungsi seperti kata penghubung 'yang' dalam bahasa Indonesia."
  },
  {
    id: 35,
    category: "Partikel 的 & 了",
    title: "35. Frasa Nominal Substantif dengan '...的'",
    formula: "Kata Sifat / Kata Kerja + 的 (Benda tersirat)",
    desc: "Frasa yang diakhiri '的' bisa langsung berdiri sendiri mewakili suatu benda tanpa perlu mengulang kata bendanya kembali.",
    contoh: [
      { hz: "我要红色的。", py: "Wǒ yào hóngsè de.", id: "Saya mau yang berwarna merah." },
      { hz: "这不是我的。", py: "Zhè bú shì wǒ de.", id: "Ini bukan milik saya." }
    ],
    tips: "Sangat praktis saat memilih barang di toko!"
  },

  // --- KATEGORI 6: PARTIKEL ASPEK '了' (LE) ---
  {
    id: 36,
    category: "Partikel 的 & 了",
    title: "36. Partikel '了' (le) di Akhir: Perubahan Situasi Baru",
    formula: "Klausa + 了",
    desc: "'了' di akhir kalimat menandakan terjadinya perubahan status atau munculnya situasi baru yang sebelumnya tidak terjadi.",
    contoh: [
      { hz: "下雨了。", py: "Xiàyǔ le.", id: "Hujan turun! (Tadinya tidak hujan, sekarang jadi hujan)." },
      { hz: "我知道了。", py: "Wǒ zhīdào le.", id: "Saya sudah tahu sekarang (tadinya belum tahu)." }
    ],
    tips: "Kuncinya adalah 'perubahan kondisi', bukan sekadar bentuk lampau masa lalu."
  },
  {
    id: 37,
    category: "Partikel 的 & 了",
    title: "37. Partikel '了' (le) Setelah Kata Kerja: Aksi Selesai",
    formula: "Subjek + Kata Kerja + 了 + Objek",
    desc: "'了' diletakkan tepat di belakang kata kerja untuk menandakan bahwa tindakan tersebut telah selesai dilakukan.",
    contoh: [
      { hz: "他吃了三个苹果。", py: "Tā chī le sān gè píngguǒ.", id: "Dia sudah memakan tiga buah apel." },
      { hz: "我买了一本书。", py: "Wǒ mǎi le yì běn shū.", id: "Saya sudah membeli sebuah buku." }
    ],
    tips: "Menunjukkan penyelesaian aksi secara spesifik."
  },
  {
    id: 38,
    category: "Partikel 的 & 了",
    title: "38. Pola Derajat Ekstrem '太...了' (tài...le)",
    formula: "太 + Kata Sifat + 了",
    desc: "Digunakan untuk menyatakan sesuatu yang berlebihan ('terlalu...') atau seruan rasa takjub/puas ('sangat... sekali!').",
    contoh: [
      { hz: "太好了！", py: "Tài hǎo le!", id: "Bagus sekali / Mantap sekali!" },
      { hz: "这个太贵了。", py: "Zhè ge tài guì le.", id: "Yang ini terlalu mahal." }
    ],
    tips: "Pola ini berpasangan: jika ada '太', biasanya ditutup dengan '了'."
  },

  // --- KATEGORI 7: KATA KERJA MODAL (AUXILIARY VERBS) ---
  {
    id: 39,
    category: "Kata Kerja Modal",
    title: "39. Kata Kerja Modal '想' (xiǎng - Ingin / Berniat)",
    formula: "Subjek + 想 + Kata Kerja",
    desc: "'想' diletakkan sebelum kata kerja untuk menyatakan keinginan, niat hati, atau rencana seseorang.",
    contoh: [
      { hz: "我想学汉语。", py: "Wǒ xiǎng xué hànyǔ.", id: "Saya ingin belajar bahasa Mandarin." },
      { hz: "你想喝什么？", py: "Nǐ xiǎng hē shénme?", id: "Kamu ingin minum apa?" }
    ],
    tips: "Jika diikuti orang/tempat langsung, '想' bisa berarti 'rindu' (我想你 = aku rindu kamu)."
  },
  {
    id: 40,
    category: "Kata Kerja Modal",
    title: "40. Kata Kerja Modal '会' (huì - Bisa karena Belajar)",
    formula: "Subjek + 会 + Kata Kerja",
    desc: "'会' menyatakan kemampuan atau keahlian yang diperoleh melalui proses belajar atau pelatihan.",
    contoh: [
      { hz: "我会说汉语。", py: "Wǒ huì shuō hànyǔ.", id: "Saya bisa berbicara bahasa Mandarin (karena belajar)." },
      { hz: "他会做中国菜。", py: "Tā huì zuò Zhōngguó cài.", id: "Dia bisa memasak masakan Tiongkok." }
    ],
    tips: "Bentuk penyangkalannya adalah '不会' (bú huì = tidak bisa)."
  },
  {
    id: 41,
    category: "Kata Kerja Modal",
    title: "41. Kata Kerja Modal '能' (néng - Mampu Fisik / Keadaan)",
    formula: "Subjek + 能 + Kata Kerja",
    desc: "'能' menyatakan kemampuan yang dipengaruhi oleh kondisi fisik, kesehatan, atau izin situasi saat ini.",
    contoh: [
      { hz: "我今天能去。", py: "Wǒ jīntiān néng qù.", id: "Saya hari ini bisa pergi (ada waktu/sehat)." },
      { hz: "这里不能吸烟。", py: "Zhèlǐ bù néng xīyān.", id: "Di sini tidak boleh/bisa merokok." }
    ],
    tips: "Bedanya: 会 = bisa karena punya skill; 能 = bisa karena kondisi memungkinkan."
  },
  {
    id: 42,
    category: "Kata Kerja Modal",
    title: "42. Kata Kerja Modal '可以' (kěyǐ - Boleh / Diizinkan)",
    formula: "Subjek + 可以 + Kata Kerja",
    desc: "'可以' digunakan untuk menyatakan izin diperbolehkan melakukan sesuatu atau kelayakan saran.",
    contoh: [
      { hz: "我可以坐这里吗？", py: "Wǒ kěyǐ zuò zhèlǐ ma?", id: "Bolehkah saya duduk di sini?" },
      { hz: "你可以问老师。", py: "Nǐ kěyǐ wèn lǎoshī.", id: "Kamu boleh bertanya kepada guru." }
    ],
    tips: "Penyangkalannya saat melarang biasanya menggunakan '不能' atau '不行'."
  },

  // --- KATEGORI 8: PREPOSISI, WAKTU & KONSTRUKSI KHUSUS ---
  {
    id: 43,
    category: "Preposisi & Relasi",
    title: "43. Kata Kerja Keberadaan '在' (zài - Berada di)",
    formula: "Subjek + 在 + Tempat / Lokasi",
    desc: "Ketika berdiri sendiri tanpa kata kerja lain, '在' berfungsi sebagai kata kerja utama yang berarti 'berada di'.",
    contoh: [
      { hz: "我爸爸在家。", py: "Wǒ bàba zài jiā.", id: "Ayah saya berada di rumah." },
      { hz: "书在桌子上。", py: "Shū zài zhuōzi shang.", id: "Buku ada di atas meja." }
    ],
    tips: "Penyangkalannya adalah '不在' (bú zài = tidak ada di tempat)."
  },
  {
    id: 44,
    category: "Preposisi & Relasi",
    title: "44. Kata Kerja Kepemilikan '有' (yǒu - Ada / Punya)",
    formula: "Subjek + 有 + Benda  ATAU  Tempat + 有 + Benda",
    desc: "'有' menyatakan kepemilikan ('mempunyai') atau keberadaan objek di suatu tempat ('terdapat').",
    contoh: [
      { hz: "我有两个汉语老师。", py: "Wǒ yǒu liǎng gè hànyǔ lǎoshī.", id: "Saya punya dua orang guru bahasa Mandarin." },
      { hz: "桌上有两本书。", py: "Zhuō shang yǒu liǎng běn shū.", id: "Di atas meja ada dua buah buku." }
    ],
    tips: "'在' fokus pada letak benda di mana; '有' fokus pada isi dari suatu tempat."
  },
  {
    id: 45,
    category: "Preposisi & Relasi",
    title: "45. Konjungsi '和' (hé - dan) untuk Kata Benda",
    formula: "Kata Benda A + 和 + Kata Benda B",
    desc: "'和' HANYA digunakan untuk menghubungkan dua kata benda atau kata ganti. JANGAN gunakan '和' untuk menghubungkan dua kalimat atau kata kerja!",
    contoh: [
      { hz: "我和他是朋友。", py: "Wǒ hé tā shì péngyou.", id: "Saya dan dia adalah teman." },
      { hz: "我喜欢吃米饭和面条。", py: "Wǒ xǐhuan chī mǐfàn hé miàntiáo.", id: "Saya suka makan nasi dan mie." }
    ],
    tips: "Untuk menghubungkan dua kalimat, gunakan jeda koma atau kata sambung lain, BUKAN '和'."
  },
  {
    id: 46,
    category: "Preposisi & Relasi",
    title: "46. Konstruksi Kata Kerja Berurutan (去 / 来 + Tempat + Aksi)",
    formula: "Subjek + 去 / 来 + Lokasi + Melakukan Sesuatu",
    desc: "Menyebutkan dua aksi berturut-turut di mana aksi pertama menunjukkan pergerakan menuju tempat, dan aksi kedua adalah tujuan yang dikerjakan di sana.",
    contoh: [
      { hz: "我去商店买苹果。", py: "Wǒ qù shāngdiàn mǎi píngguǒ.", id: "Saya pergi ke toko membeli apel." },
      { hz: "他来我家看电影。", py: "Tā lái wǒ jiā kàn diànyǐng.", id: "Dia datang ke rumah saya menonton film." }
    ],
    tips: "Tidak perlu menambahkan kata sambung seperti 'untuk' atau 'to'."
  },
  {
    id: 47,
    category: "Preposisi & Relasi",
    title: "47. Kalimat Permintaan Sopan dengan '请' (qǐng - Silakan / Tolong)",
    formula: "请 + Kata Kerja + (Objek)",
    desc: "'请' diletakkan di awal kalimat untuk menyampaikan permintaan, undangan, atau instruksi sopan.",
    contoh: [
      { hz: "请坐，请喝茶。", py: "Qǐng zuò, qǐng hē chá.", id: "Silakan duduk, silakan minum teh." },
      { hz: "请进。", py: "Qǐng jìn.", id: "Silakan masuk." }
    ],
    tips: "Bisa juga berarti 'mentraktir' dalam konteks percakapan (我请你 = saya traktir kamu)."
  },
  {
    id: 48,
    category: "Waktu & Jumlah",
    title: "48. Penulisan Waktu, Tanggal & Umur",
    formula: "Tahun (年) -> Bulan (月) -> Hari/Tanggal (号) -> Jam (点) -> Menit (分) | Angka + 岁 (suì)",
    desc: "Aturan urutan waktu dalam bahasa Mandarin selalu bergerak dari UNIT TERBESAR ke UNIT TERKECIL. Untuk umur, gunakan angka + 岁.",
    contoh: [
      { hz: "今天二零二四年五月十号。", py: "Jīntiān èr líng èr sì nián wǔ yuè shí hào.", id: "Hari ini tanggal 10 Mei 2024." },
      { hz: "现在上午九点三十分。", py: "Xiànzài shàngwǔ jiǔ diǎn sānshí fēn.", id: "Sekarang jam 09.30 pagi." },
      { hz: "我弟弟今年十岁。", py: "Wǒ dìdi jīnnián shí suì.", id: "Adik laki-laki saya tahun ini berusia 10 tahun." }
    ],
    tips: "Urutan wajib: TAHUN -> BULAN -> TANGGAL -> JAM -> MENIT. Selalu dari yang paling besar!"
  }
];

export const HSK1_GRAMMAR_POINTS = GRAMMAR_POINTS;
export const HSK1_GRAMMAR_CATEGORIES = GRAMMAR_CATEGORIES;
export const HSK2_GRAMMAR_POINTS = HSK2_GRAMMAR;
export { HSK2_GRAMMAR, HSK2_GRAMMAR_CATEGORIES };

export function getGrammarByLevel(level = 1) {
  return Number(level) === 2 ? HSK2_GRAMMAR : GRAMMAR_POINTS;
}

export function getGrammarCategoriesByLevel(level = 1) {
  return Number(level) === 2 ? HSK2_GRAMMAR_CATEGORIES : GRAMMAR_CATEGORIES;
}

export default GRAMMAR_POINTS;
