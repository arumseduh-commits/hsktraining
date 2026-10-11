// Simulasi Ujian HSK 1 (Standar 3.0)
// Format 20 Soal Terintegrasi (Listening & Reading)

export const MOCK_EXAM_QUESTIONS = [
  // Bagian 1: Listening Comprehension (Mendengarkan) - Soal 1 s/d 10
  {
    id: 1,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "我想喝一杯水。",
    prompt: "Dengarkan audio, lalu pilih arti yang tepat:",
    options: [
      "Saya ingin minum segelas air.",
      "Saya ingin makan semangkuk nasi.",
      "Saya ingin membeli sebuah buku.",
      "Saya ingin pergi ke stasiun kereta."
    ],
    answer: 0,
    explanation: "Kalimat di audio: 我想喝一杯水 (Wǒ xiǎng hē yì bēi shuǐ) = Saya ingin minum segelas air."
  },
  {
    id: 2,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "他不是老师，他是医生。",
    prompt: "Dengarkan audio, apakah pernyataan ini BENAR atau SALAH?\n'Orang tersebut adalah seorang dokter.'",
    options: [
      "Benar (对)",
      "Salah (错)"
    ],
    answer: 0,
    explanation: "Audio: 他不是老师，他是医生 (Tā bú shì lǎoshī, tā shì yīshēng) = Dia bukan guru, dia adalah dokter."
  },
  {
    id: 3,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "现在几点？现在三点半。",
    prompt: "Dengarkan audio, jam berapa sekarang?",
    options: [
      "Jam 02:30",
      "Jam 03:00",
      "Jam 03:30",
      "Jam 04:30"
    ],
    answer: 2,
    explanation: "Audio menyebutkan: 现在三点半 (Xiànzài sān diǎn bàn) = Sekarang jam 3 lewat 30 (03:30)."
  },
  {
    id: 4,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "昨天星期日，他在家看电视。",
    prompt: "Dengarkan audio, apa yang dia lakukan kemarin di rumah?",
    options: [
      "Membaca buku",
      "Menonton televisi",
      "Memasak makanan",
      "Tidur"
    ],
    answer: 1,
    explanation: "Audio: 看电视 (kàn diànshì) = Menonton televisi."
  },
  {
    id: 5,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "这个苹果多少钱？五块钱一斤。",
    prompt: "Dengarkan audio, berapa harga apel per jin (500g)?",
    options: [
      "3 Yuan",
      "4 Yuan",
      "5 Yuan",
      "15 Yuan"
    ],
    answer: 2,
    explanation: "Audio: 五块钱一斤 (Wǔ kuài qián yì jīn) = Lima yuan satu jin."
  },
  {
    id: 6,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "桌子下面有一只小猫。",
    prompt: "Dengarkan audio, di mana anak kucing itu berada?",
    options: [
      "Di atas meja",
      "Di bawah meja",
      "Di samping kursi",
      "Di luar pintu"
    ],
    answer: 1,
    explanation: "Audio: 桌子下面 (zhuōzi xiàmiàn) = Di bawah meja."
  },
  {
    id: 7,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "我们坐出租车去火车站吧。",
    prompt: "Dengarkan audio, kendaraan apa yang disarankan untuk pergi ke stasiun?",
    options: [
      "Bus umum (公交车)",
      "Sepeda (自行车)",
      "Taksi (出租车)",
      "Kereta bawah tanah (地铁)"
    ],
    answer: 2,
    explanation: "Audio: 坐出租车 (zuò chūzūchē) = Naik taksi."
  },
  {
    id: 8,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "对不起，我不会说汉语。",
    prompt: "Dengarkan audio, apa arti kalimat tersebut?",
    options: [
      "Maaf, saya tidak bisa berbicara bahasa Mandarin.",
      "Halo, saya sedang belajar bahasa Mandarin.",
      "Terima kasih, bahasa Mandarin Anda sangat bagus.",
      "Permisi, apakah Anda guru bahasa Mandarin?"
    ],
    answer: 0,
    explanation: "对不起，我不会说汉语 = Maaf, saya tidak bisa berbicara bahasa Mandarin."
  },
  {
    id: 9,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "外面下雨了，天很冷。",
    prompt: "Dengarkan audio, bagaimana kondisi cuaca saat ini?",
    options: [
      "Cerah dan panas",
      "Turun hujan dan dingin",
      "Angin bertiup sepoi-sepoi",
      "Turun salju tebal"
    ],
    answer: 1,
    explanation: "Audio: 下雨 (xiàyǔ = hujan), 天很冷 (tiān hěn lěng = cuaca sangat dingin)."
  },
  {
    id: 10,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "很高兴认识你！明天见！",
    prompt: "Dengarkan audio, kapan mereka akan bertemu kembali?",
    options: [
      "Hari ini",
      "Besok",
      "Minggu depan",
      "Tahun depan"
    ],
    answer: 1,
    explanation: "Audio: 明天见 (Míngtiān jiàn) = Sampai jumpa besok."
  },

  // Bagian 2: Reading & Grammar (Membaca & Tata Bahasa) - Soal 11 s/d 20
  {
    id: 11,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "李老师在学校工作，她是我们的汉语老师。",
    prompt: "Berdasarkan kalimat di atas, di mana Guru Li bekerja?",
    options: [
      "医院 (Rumah sakit)",
      "学校 (Sekolah)",
      "饭店 (Restoran)",
      "银行 (Bank)"
    ],
    answer: 1,
    explanation: "Dalam teks tertulis jelas: 李老师在学校工作 (Guru Li bekerja di sekolah)."
  },
  {
    id: 12,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "A: 你去哪儿？\nB: 我去超市买_____。",
    prompt: "Pilihlah kata yang paling tepat untuk melengkapi kalimat rumpang:",
    options: [
      "东西 (dōngxi - barang)",
      "名字 (míngzi - nama)",
      "时候 (shíhou - waktu)",
      "汉语 (hànyǔ - bahasa Mandarin)"
    ],
    answer: 0,
    explanation: "Frasa paling logis di supermarket: 买东西 (mǎi dōngxi = membeli barang belanjaan)."
  },
  {
    id: 13,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "我有一_____汉语书和两_____铅笔。",
    prompt: "Pilihlah pasangan kata satuan (量词) yang benar untuk buku dan pensil:",
    options: [
      "个 / 只",
      "本 / 支",
      "张 / 条",
      "块 / 杯"
    ],
    answer: 1,
    explanation: "Satuan untuk buku adalah 本 (běn), satuan pensil/pena adalah 支 (zhī)."
  },
  {
    id: 14,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "A: 谢谢你帮助我！\nB: _______________。",
    prompt: "Pilihlah respon jawaban yang paling santun dan tepat:",
    options: [
      "对不起 (Duìbuqǐ)",
      "没关系 (Méi guānxi)",
      "不客气 (Bú kèqi)",
      "很漂亮 (Hěn piàoliang)"
    ],
    answer: 2,
    explanation: "Jawaban resmi dan sopan untuk '谢谢' (Terima kasih) adalah '不客气' (Sama-sama)."
  },
  {
    id: 15,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "哥哥今年20岁，弟弟今年16岁。",
    prompt: "Pernyataan mana yang benar menurut rumus perbandingan '比'?",
    options: [
      "弟弟比哥哥大。",
      "哥哥比弟弟大。",
      "哥哥比弟弟矮。",
      "弟弟和哥哥一样大。"
    ],
    answer: 1,
    explanation: "Kakak berumur 20 tahun, adik 16 tahun. Maka 哥哥比弟弟大 (Kakak lebih tua dibanding adik)."
  },
  {
    id: 16,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "这件衣服太贵了，可以_____一点儿吗？",
    prompt: "Lengkapilah percakapan tawar-menawar belanja tersebut:",
    options: [
      "高兴 (gāoxìng - senang)",
      "便宜 (piányi - murah)",
      "远 (yuǎn - jauh)",
      "大 (dà - besar)"
    ],
    answer: 1,
    explanation: "Jika baju terlalu mahal (太贵), pembeli meminta lebih murah: 便宜一点儿吗？"
  },
  {
    id: 17,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "我_____没有去学校，因为我生病了。",
    prompt: "Pilihlah kata keterangan waktu yang sesuai konteks lampau:",
    options: [
      "明天 (míngtiān - besok)",
      "昨天 (zuótiān - kemarin)",
      "后天 (hòutiān - lusa)",
      "明年 (míngnián - tahun depan)"
    ],
    answer: 1,
    explanation: "Ada partikel lampau '没' dan '了' yang menandakan waktu yang sudah berlalu (昨天 = kemarin)."
  },
  {
    id: 18,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "Susunlah kata-kata acak ini menjadi kalimat yang benar:\n[ 喜欢 / 他 / 喝 / 不 / 咖啡 ]",
    prompt: "Susunan struktur kalimat Mandarin yang benar adalah:",
    options: [
      "他不喜欢喝咖啡。",
      "他不喝喜欢咖啡。",
      "咖啡他喜欢不喝。",
      "喝咖啡他不喜。"
    ],
    answer: 0,
    explanation: "Struktur: Subjek (他) + Kata Negasi (不) + Kata Kerja (喜欢) + Objek Tindakan (喝咖啡)."
  },
  {
    id: 19,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "Manakah pasangan karakter Hanzi dengan Pinyin nada yang TEPAT?",
    prompt: "Pilih pasangan yang benar:",
    options: [
      "买 = mài (menjual)",
      "买 = mǎi (membeli)",
      "喝 = hè (minum)",
      "看 = kǎn (melihat)"
    ],
    answer: 1,
    explanation: "买 adalah mǎi (nada 3, membeli). Sedangkan 卖 adalah mài (nada 4, menjual)."
  },
  {
    id: 20,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "A: 你好，请问洗手间在哪里？\nB: 洗手间在前面的商店旁边。",
    prompt: "Di mana letak toilet (洗手间) berada?",
    options: [
      "Di dalam stasiun kereta api",
      "Di samping toko di depan",
      "Di belakang rumah sakit",
      "Di lantai dua restoran"
    ],
    answer: 1,
    explanation: "Dalam kalimat: 洗手间在前面的商店旁边 = Toilet berada di samping toko yang ada di depan."
  }
];
