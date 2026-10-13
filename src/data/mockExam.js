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

export const HSK1_MOCK_EXAM_QUESTIONS = MOCK_EXAM_QUESTIONS;

export const HSK2_MOCK_EXAM_QUESTIONS = [
  // Bagian 1: Listening Comprehension HSK 2 (听力) - Soal 1 s/d 10
  {
    id: 1,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "我家离学校很近，走路十分钟就到了。",
    prompt: "Dengarkan audio, lalu pilih pernyataan yang BENAR:",
    options: [
      "Rumah berjarak sangat dekat dari sekolah.",
      "Rumah sangat jauh dari sekolah.",
      "Dia naik mobil ke sekolah selama satu jam.",
      "Dia tidak suka pergi ke sekolah."
    ],
    answer: 0,
    explanation: "Audio: 我家离学校很近，走路十分钟就到了 = Rumah saya sangat dekat dari sekolah, jalan kaki 10 menit sudah sampai."
  },
  {
    id: 2,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "虽然今天下雪很冷，但是大家都很开心。",
    prompt: "Dengarkan audio, apakah pernyataan ini BENAR atau SALAH?\n'Semua orang merasa sedih karena cuaca sangat dingin.'",
    options: [
      "Benar (对)",
      "Salah (错)"
    ],
    answer: 1,
    explanation: "Audio: 虽然今天下雪很冷，但是大家都很开心 (Meskipun hari ini salju dingin, tetapi semua orang sangat senang). Maka pernyataan bahwa mereka sedih adalah SALAH (错)."
  },
  {
    id: 3,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "因为今天身体不舒服，所以我没去上班。",
    prompt: "Dengarkan audio, kenapa dia tidak pergi bekerja hari ini?",
    options: [
      "Karena ketinggalan kereta",
      "Karena merasa tidak enak badan",
      "Karena ingin berbelanja",
      "Karena hari libur nasional"
    ],
    answer: 1,
    explanation: "Audio: 因为今天身体不舒服 (karena hari ini tidak enak badan), jadi dia tidak pergi kerja."
  },
  {
    id: 4,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "弟弟比哥哥矮一点儿，但是跑得更快。",
    prompt: "Dengarkan audio, manakah yang benar tentang adik laki-laki (弟弟)?",
    options: [
      "Adik lebih tinggi dan lambat.",
      "Adik sedikit lebih pendek tetapi lari lebih cepat.",
      "Adik sama tingginya dengan kakak.",
      "Adik tidak suka berolahraga lari."
    ],
    answer: 1,
    explanation: "Audio: 弟弟比哥哥矮一点儿，但是跑得更快 = Adik sedikit lebih pendek dari kakak, tetapi berlari lebih cepat."
  },
  {
    id: 5,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "请问这件红色的衣服多少钱？两百块。",
    prompt: "Dengarkan audio, berapa harga baju merah tersebut?",
    options: [
      "20 Yuan (二十块)",
      "100 Yuan (一百块)",
      "200 Yuan (两百块)",
      "500 Yuan (五百块)"
    ],
    answer: 2,
    explanation: "Audio menyebutkan: 两百块 (Liǎng bǎi kuài = 200 Yuan)."
  },
  {
    id: 6,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "电影快要开始了，我们快进去吧。",
    prompt: "Dengarkan audio, apa yang dikatakan pembicara?",
    options: [
      "Filmnya sudah selesai diputar.",
      "Film sebentar lagi akan mulai, ayo cepat masuk.",
      "Bioskop hari ini tutup.",
      "Tiket film sudah habis terjual."
    ],
    answer: 1,
    explanation: "Audio: 电影快要开始了，我们快进去吧 = Film sebentar lagi akan mulai, kita cepat masuk yuk."
  },
  {
    id: 7,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "你去过中国吗？我去过两次北京。",
    prompt: "Dengarkan audio, berapa kali dia pernah mengunjungi Beijing?",
    options: [
      "Belum pernah",
      "Satu kali",
      "Dua kali (两次)",
      "Tiga kali"
    ],
    answer: 2,
    explanation: "Audio: 我去过两次北京 (Wǒ qù guo liǎng cì Běijīng = Saya pernah pergi 2 kali ke Beijing)."
  },
  {
    id: 8,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "你生病发烧了，应该多喝水，多休息。",
    prompt: "Dengarkan audio, saran apa yang diberikan kepada orang yang sakit?",
    options: [
      "Banyak makan es krim",
      "Pergi bekerja seperti biasa",
      "Banyak minum air dan banyak istirahat",
      "Pergi olahraga lari maraton"
    ],
    answer: 2,
    explanation: "Audio: 应该多喝水，多休息 = Seharusnya banyak minum air dan banyak istirahat."
  },
  {
    id: 9,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "一直往前走，在第一个路口向右拐就到了。",
    prompt: "Dengarkan audio petunjuk jalan, ke arah mana harus belok di perempatan pertama?",
    options: [
      "Belok ke kiri (向左拐)",
      "Belok ke kanan (向右拐)",
      "Putar balik ke belakang",
      "Naik tangga ke lantai dua"
    ],
    answer: 1,
    explanation: "Audio: 在第一个路口向右拐 (Di perempatan pertama belok ke kanan)."
  },
  {
    id: 10,
    type: "listening",
    section: "Bagian 1: Mendengarkan (听力)",
    audioText: "我们一边喝茶一边看书，感觉很舒服。",
    prompt: "Dengarkan audio, dua kegiatan apa yang dilakukan secara bersamaan?",
    options: [
      "Minum teh sambil membaca buku",
      "Makan malam sambil menonton film",
      "Mendengarkan musik sambil mencuci baju",
      "Berlari sambil menelpon teman"
    ],
    answer: 0,
    explanation: "Audio: 一边喝茶一边看书 = Sambil minum teh sambil membaca buku."
  },

  // Bagian 2: Reading Comprehension HSK 2 (阅读) - Soal 11 s/d 20
  {
    id: 11,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "这件黑色的衬衫比那件白色的贵五十块钱。",
    prompt: "Berdasarkan kalimat di atas, kemeja manakah yang lebih mahal?",
    options: [
      "Kemeja warna hitam (黑色衬衫)",
      "Kemeja warna putih (白色衬衫)",
      "Kedua kemeja harganya sama persis",
      "Tidak ada yang dijual"
    ],
    answer: 0,
    explanation: "Rumus A 比 B 贵 = A lebih mahal dari B. Maka kemeja hitam (这件黑色的衬衫) lebih mahal 50 yuan dibanding yang putih."
  },
  {
    id: 12,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "A: 你看见我的手机了吗？\nB: 就在桌子上，在电脑旁边。",
    prompt: "Di manakah posisi ponsel berada?",
    options: [
      "Di dalam tas sekolah",
      "Di atas meja, di samping komputer",
      "Di bawah tempat tidur",
      "Di dalam laci lemari"
    ],
    answer: 1,
    explanation: "B menjawab: 就在桌子上，在电脑旁边 = Tepat di atas meja, di samping komputer."
  },
  {
    id: 13,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "今天的生词我都______了，准备得很充分。",
    prompt: "Pilihlah pelengkap hasil yang paling tepat untuk melengkapi kalimat:",
    options: [
      "跑 (pǎo)",
      "记住 (jìzhù)",
      "玩 (wán)",
      "喝 (hē)"
    ],
    answer: 1,
    explanation: "Pelengkap hasil 记住 (jìzhù) berarti mengingat dengan tuntas dan mantap: 生词我都记住了 = Kosakata baru sudah kuingat semuanya."
  },
  {
    id: 14,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "服务员，这道菜______了，请给我们换一份。",
    prompt: "Pilihlah kata yang tepat untuk situasi komplain di restoran:",
    options: [
      "做错 (zuò cuò - salah buat)",
      "太好 (tài hǎo - terlalu bagus)",
      "便宜 (piányi - murah)",
      "高兴 (gāoxìng - senang)"
    ],
    answer: 0,
    explanation: "做错了 = salah dibuat/keliru hidangannya, sehingga meminta pelayan untuk menggantinya (换一份)."
  },
  {
    id: 15,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "他每天早上一边跑步，一边______。",
    prompt: "Aktivitas apa yang paling logis melengkapi pola 'yìbiān... yìbiān...'?",
    options: [
      "睡觉 (shuìjiào)",
      "听音乐 (tīng yīnyuè)",
      "洗澡 (xǐzǎo)",
      "关门 (guānmén)"
    ],
    answer: 1,
    explanation: "Pola simultan: 一边跑步，一边听音乐 = Sambil berlari sambil mendengarkan musik."
  },
  {
    id: 16,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "如果你明天有空，我们______去买新书吧。",
    prompt: "Kata penghubung pasangan dari '如果... (jika)' adalah:",
    options: [
      "就 (jiù)",
      "但是 (dànshì)",
      "虽然 (suīrán)",
      "因为 (yīnwèi)"
    ],
    answer: 0,
    explanation: "Pasangan baku kalimat pengandaian: 如果... 就... (Jika... maka...)."
  },
  {
    id: 17,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "他学习汉语学得非常______，大家都夸他。",
    prompt: "Lengkapilah pelengkap derajat (得 + Sifat):",
    options: [
      "认真 (rènzhēn - rajin/sungguh-sungguh)",
      "迟到 (chídào - terlambat)",
      "铅笔 (qiānbǐ - pensil)",
      "自行车 (zìxíngchē - sepeda)"
    ],
    answer: 0,
    explanation: "学得非常认真 = Belajar dengan sangat sungguh-sungguh."
  },
  {
    id: 18,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "A: 门怎么开着？\nB: 外面太热了，开着门透透气。",
    prompt: "Partikel '着' (zhe) pada kalimat di atas berfungsi untuk menunjukkan:",
    options: [
      "Tindakan masa depan yang belum terjadi",
      "Keberlanjutan kondisi status (pintu dalam keadaan terbuka)",
      "Pertanyaan dengan nada heran",
      "Perbandingan dua benda yang berbeda"
    ],
    answer: 1,
    explanation: "Kata kerja + 着 (开着) menunjukkan kondisi yang sedang bertahan (pintu dalam keadaan terbuka)."
  },
  {
    id: 19,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "从火车站到我们学校，坐地铁需要半个小时。",
    prompt: "Berapa lama waktu perjalanan dari stasiun kereta ke sekolah dengan naik MRT?",
    options: [
      "10 menit",
      "30 menit (半个小时 - setengah jam)",
      "1 jam",
      "2 jam"
    ],
    answer: 1,
    explanation: "半个小时 (Bàn ge xiǎoshí) = 30 menit / setengah jam."
  },
  {
    id: 20,
    type: "reading",
    section: "Bagian 2: Membaca (阅读)",
    text: "医生说多吃蔬菜和水果对身体很有好处。",
    prompt: "Menurut dokter, apa manfaat banyak makan sayur dan buah?",
    options: [
      "Membuat cepat mengantuk",
      "Sangat bermanfaat bagi kesehatan tubuh (对身体很有好处)",
      "Membuat penglihatan kabur",
      "Tidak ada pengaruh apa-apa"
    ],
    answer: 1,
    explanation: "对身体很有好处 = Sangat bermanfaat dan baik bagi kesehatan tubuh."
  }
];

export function getMockExamQuestions(level = 1) {
  return Number(level) === 2 ? HSK2_MOCK_EXAM_QUESTIONS : HSK1_MOCK_EXAM_QUESTIONS;
}

export default MOCK_EXAM_QUESTIONS;
