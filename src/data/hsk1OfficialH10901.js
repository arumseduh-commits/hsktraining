// Paket Soal Ujian Resmi HSK 1 (Kode Ujian: H10901)
// Berdasarkan Ujian Standar CTI (汉考国际 / Chinese Testing International)
// Lengkap dengan 40 soal resmi (20 Listening + 20 Reading), 25 soal bergambar, dan file audio resmi

export const HSK1_OFFICIAL_H10901 = {
  examId: "H10901",
  title: "Simulasi Ujian Resmi HSK 1 (Set H10901)",
  level: 1,
  totalQuestions: 40,
  maxScore: 200,
  passScore: 120,
  durationMinutes: 35,
  audioUrl: "/exams/h10901/H10901.mp3",
  
  listeningQuestions: [
    // PART 1 (Soal 1 - 5): True / False Berdasarkan Gambar
    {
      id: 1,
      part: "Part I (听力第一部分 - Benar / Salah Bergambar)",
      type: "image_tf",
      image: "/exams/h10901/H1_1.png",
      audioText: "打电话",
      audioPinyin: "Dǎ diànhuà",
      audioArti: "Menelepon",
      prompt: "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      options: ["Benar (对 / √)", "Salah (错 / ×)"],
      answer: 0,
      points: 5,
      explanation: "Audio berbunyi '打电话' (dǎ diànhuà = menelepon). Gambar menunjukkan seseorang sedang menelepon, maka pernyataan BENAR (对)."
    },
    {
      id: 2,
      part: "Part I (听力第一部分 - Benar / Salah Bergambar)",
      type: "image_tf",
      image: "/exams/h10901/H1_2.png",
      audioText: "我和儿子",
      audioPinyin: "Wǒ hé érzi",
      audioArti: "Saya dan anak laki-laki saya",
      prompt: "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      options: ["Benar (对 / √)", "Salah (错 / ×)"],
      answer: 1,
      points: 5,
      explanation: "Audio berbunyi '我和儿子' (wǒ hé érzi = saya dan anak laki-laki). Gambar memperlihatkan dua orang wanita lansia, maka pernyataan SALAH (错)."
    },
    {
      id: 3,
      part: "Part I (听力第一部分 - Benar / Salah Bergambar)",
      type: "image_tf",
      image: "/exams/h10901/H1_3.png",
      audioText: "开车",
      audioPinyin: "Kāi chē",
      audioArti: "Menyetir mobil",
      prompt: "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      options: ["Benar (对 / √)", "Salah (错 / ×)"],
      answer: 1,
      points: 5,
      explanation: "Audio berbunyi '开车' (kāi chē = menyetir mobil). Gambar memperlihatkan pesawat terbang (飞机), maka pernyataan SALAH (错)."
    },
    {
      id: 4,
      part: "Part I (听力第一部分 - Benar / Salah Bergambar)",
      type: "image_tf",
      image: "/exams/h10901/H1_4.png",
      audioText: "吃米饭",
      audioPinyin: "Chī mǐfàn",
      audioArti: "Makan nasi",
      prompt: "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      options: ["Benar (对 / √)", "Salah (错 / ×)"],
      answer: 1,
      points: 5,
      explanation: "Audio berbunyi '吃米饭' (chī mǐfàn = makan nasi). Gambar memperlihatkan orang sedang makan mie (面条), maka pernyataan SALAH (错)."
    },
    {
      id: 5,
      part: "Part I (听力第一部分 - Benar / Salah Bergambar)",
      type: "image_tf",
      image: "/exams/h10901/H1_5.png",
      audioText: "下雨了",
      audioPinyin: "Xià yǔ le",
      audioArti: "Hujan turun",
      prompt: "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      options: ["Benar (对 / √)", "Salah (错 / ×)"],
      answer: 0,
      points: 5,
      explanation: "Audio berbunyi '下雨了' (xià yǔ le = hujan turun). Gambar memperlihatkan orang memegang payung di tengah hujan, maka pernyataan BENAR (对)."
    },

    // PART 2 (Soal 6 - 10): Pilihan Gambar A, B, atau C
    {
      id: 6,
      part: "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      type: "image_abc",
      image: "/exams/h10901/H1_6.png",
      audioText: "今天天气很冷。",
      audioPinyin: "Jīntiān tiānqì hěn lěng.",
      audioArti: "Cuaca hari ini sangat dingin.",
      prompt: "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      options: ["Gambar A", "Gambar B", "Gambar C"],
      answer: 0,
      points: 5,
      explanation: "Audio menyebutkan '今天天气很冷' (cuaca sangat dingin). Gambar A menunjukkan orang berpakaian hangat kedinginan."
    },
    {
      id: 7,
      part: "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      type: "image_abc",
      image: "/exams/h10901/H1_7.jpg",
      audioText: "现在是十点十分。",
      audioPinyin: "Xiànzài shì shí diǎn shí fēn.",
      audioArti: "Sekarang jam sepuluh lewat sepuluh menit.",
      prompt: "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      options: ["Gambar A", "Gambar B", "Gambar C"],
      answer: 0,
      points: 5,
      explanation: "Audio menyebutkan '十点十分' (jam 10.10). Gambar A memperlihatkan jam dinding yang menunjuk tepat pukul 10:10."
    },
    {
      id: 8,
      part: "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      type: "image_abc",
      image: "/exams/h10901/H1_8.jpg",
      audioText: "她后面有几个人？",
      audioPinyin: "Tā hòumiàn yǒu jǐ gè rén?",
      audioArti: "Ada berapa orang di belakang dia?",
      prompt: "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      options: ["Gambar A", "Gambar B", "Gambar C"],
      answer: 2,
      points: 5,
      explanation: "Audio menanyakan '她后面有几个人？' (ada berapa orang di belakangnya). Gambar C menampilkan orang berdiri berurutan ke belakang."
    },
    {
      id: 9,
      part: "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      type: "image_abc",
      image: "/exams/h10901/H1_9.jpg",
      audioText: "我今年12岁了。",
      audioPinyin: "Wǒ jīnnián shí'èr suì le.",
      audioArti: "Tahun ini saya berusia 12 tahun.",
      prompt: "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      options: ["Gambar A", "Gambar B", "Gambar C"],
      answer: 0,
      points: 5,
      explanation: "Audio menyebutkan '12岁' (berusia 12 tahun). Gambar A menunjukkan kue ulang tahun dengan lilin angka 12."
    },
    {
      id: 10,
      part: "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      type: "image_abc",
      image: "/exams/h10901/H1_10.jpg",
      audioText: "他一个人去中国。",
      audioPinyin: "Tā yí ge rén qù Zhōngguó.",
      audioArti: "Dia pergi ke Tiongkok seorang diri.",
      prompt: "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      options: ["Gambar A", "Gambar B", "Gambar C"],
      answer: 2,
      points: 5,
      explanation: "Audio menyatakan '他一个人去中国' (dia sendirian ke China). Gambar C memperlihatkan pria membawa koper seorang diri menuju Tiongkok."
    },

    // PART 3 (Soal 11 - 15): Mencocokkan Dialog dengan Gambar Kisi A-F
    {
      id: 11,
      part: "Part III (听力第三部分 - Mencocokkan Dialog Gambar A–F)",
      type: "image_grid_match",
      gridImage: "/exams/h10901/H1_part3.jpg",
      audioText: "男：你看见我的小猫了吗？\n女：在那儿，在椅子下面。",
      audioPinyin: "Nán: Nǐ kànjiàn wǒ de xiǎo māo le ma?\nNǚ: Zài nàr, zài yǐzi xiàmiàn.",
      audioArti: "Pria: Apakah kamu melihat anak kucing saya?\nWanita: Di sana, di bawah kursi.",
      dialogSnippet: "男：你看见我的小猫了吗？\n女：在那儿，在椅子下面。",
      prompt: "Perhatikan kisi gambar A–F di atas. Dengarkan dialog dan pilih huruf gambar yang cocok:",
      options: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E", "Gambar F"],
      answer: 3,
      points: 5,
      explanation: "Dialog membicarakan kucing kecil di bawah kursi (小猫在椅子下面). Gambar D menampilkan kucing di bawah kursi."
    },
    {
      id: 12,
      part: "Part III (听力第三部分 - Mencocokkan Dialog Gambar A–F)",
      type: "image_grid_match",
      gridImage: "/exams/h10901/H1_part3.jpg",
      audioText: "女：我们中午去买衣服，好吗？\n男：你看，我没钱了。",
      audioPinyin: "Nǚ: Wǒmen zhōngwǔ qù mǎi yīfu, hǎo ma?\nNán: Nǐ kàn, wǒ méi qián le.",
      audioArti: "Wanita: Kita siang nanti pergi beli baju, bagaimana?\nPria: Lihat, saya sudah tidak punya uang.",
      dialogSnippet: "女：我们中午去买衣服，好吗？\n男：你看，我没钱了。",
      prompt: "Perhatikan kisi gambar A–F di atas. Dengarkan dialog dan pilih huruf gambar yang cocok:",
      options: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E", "Gambar F"],
      answer: 1,
      points: 5,
      explanation: "Pria mengatakan '我没钱了' (saya tidak punya uang lagi). Gambar B memperlihatkan dompet kosong tanpa uang."
    },
    {
      id: 13,
      part: "Part III (听力第三部分 - Mencocokkan Dialog Gambar A–F)",
      type: "image_grid_match",
      gridImage: "/exams/h10901/H1_part3.jpg",
      audioText: "男：你住在哪儿？\n女：我和妈妈都住在一零二。",
      audioPinyin: "Nán: Nǐ zhù zài nǎr?\nNǚ: Wǒ hé māma dōu zhù zài yī líng èr.",
      audioArti: "Pria: Kamu tinggal di mana?\nWanita: Saya dan ibu tinggal di nomor 102.",
      dialogSnippet: "男：你住在哪儿？\n女：我和妈妈都住在一零二。",
      prompt: "Perhatikan kisi gambar A–F di atas. Dengarkan dialog dan pilih huruf gambar yang cocok:",
      options: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E", "Gambar F"],
      answer: 0,
      points: 5,
      explanation: "Wanita menjawab '住在一零二' (tinggal di nomor 102). Gambar A menunjukkan pintu kamar bernomor 102."
    },
    {
      id: 14,
      part: "Part III (听力第三部分 - Mencocokkan Dialog Gambar A–F)",
      type: "image_grid_match",
      gridImage: "/exams/h10901/H1_part3.jpg",
      audioText: "女：这个汉字怎么读？\n男：对不起，我不会。",
      audioPinyin: "Nǚ: Zhè ge hànzì zěnme dú?\nNán: Duìbuqǐ, wǒ bú huì.",
      audioArti: "Wanita: Karakter Hanzi ini dibaca bagaimana?\nPria: Maaf, saya tidak bisa.",
      dialogSnippet: "女：这个汉字怎么读？\n女：对不起，我不会。",
      prompt: "Perhatikan kisi gambar A–F di atas. Dengarkan dialog dan pilih huruf gambar yang cocok:",
      options: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E", "Gambar F"],
      answer: 4,
      points: 5,
      explanation: "Wanita bertanya tentang cara membaca karakter Hanzi (这个汉字怎么读). Gambar E menunjukkan buku karakter Hanzi."
    },
    {
      id: 15,
      part: "Part III (听力第三部分 - Mencocokkan Dialog Gambar A–F)",
      type: "image_grid_match",
      gridImage: "/exams/h10901/H1_part3.jpg",
      audioText: "男：谢谢你们！\n女：不客气，再见！",
      audioPinyin: "Nán: Xièxie nǐmen!\nNǚ: Bú kèqi, zàijiàn!",
      audioArti: "Pria: Terima kasih kalian semua!\nWanita: Sama-sama, selamat tinggal!",
      dialogSnippet: "男：谢谢你们！\n女：不客气，再见！",
      prompt: "Perhatikan kisi gambar A–F di atas. Dengarkan dialog dan pilih huruf gambar yang cocok:",
      options: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E", "Gambar F"],
      answer: 5,
      points: 5,
      explanation: "Dialog perpisahan sopan '不客气，再见' (sama-sama, sampai jumpa). Gambar F memperlihatkan orang melambaikan tangan berpamitan."
    },

    // PART 4 (Soal 16 - 20): Tanya Jawab Dialog Pendek
    {
      id: 16,
      part: "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      type: "audio_dialog_mc",
      audioText: "我的电脑在他的桌子上。问：那是谁的电脑？",
      audioPinyin: "Wǒ de diànnǎo zài tā de zhuōzi shang. Wèn: Nà shì shéi de diànnǎo?",
      audioArti: "Komputer saya ada di atas mejanya. Tanya: Itu komputer milik siapa?",
      text: "录音：我的电脑在他的桌子上。\n问：那是谁的电脑？",
      prompt: "Dengarkan pernyataan dan pertanyaan audio, lalu pilih jawaban yang tepat:",
      options: ["A. 他的 (tā de - miliknya)", "B. 我的 (wǒ de - milik saya)", "C. 同学的 (tóngxué de - milik teman)"],
      answer: 1,
      points: 5,
      explanation: "Pernyataan menyebut '我的电脑' (komputer saya), maka jawaban yang tepat adalah B (我的)."
    },
    {
      id: 17,
      part: "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      type: "audio_dialog_mc",
      audioText: "今天星期四，我们明天去看电影。问：我们什么时候去看电影？",
      audioPinyin: "Jīntiān xīngqīsì, wǒmen míngtiān qù kàn diànyǐng. Wèn: Wǒmen shénme shíhou qù kàn diànyǐng?",
      audioArti: "Hari ini hari Kamis, kita besok pergi menonton film. Tanya: Kapan kita pergi menonton film?",
      text: "录音：今天星期四，我们明天去看电影。\n问：我们什么时候去看电影？",
      prompt: "Dengarkan pernyataan dan pertanyaan audio, lalu pilih hari yang tepat:",
      options: ["A. 星期三 (xīngqīsān - Rabu)", "B. 星期五 (xīngqīwǔ - Jumat)", "C. 星期六 (xīngqīliù - Sabtu)"],
      answer: 1,
      points: 5,
      explanation: "Hari ini Kamis (星期四), besok (明天) adalah hari Jumat (星期五), maka jawaban adalah B."
    },
    {
      id: 18,
      part: "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      type: "audio_dialog_mc",
      audioText: "他是老师，他有50个学生。问：他有多少个学生？",
      audioPinyin: "Tā shì lǎoshī, tā yǒu wǔshí gè xuésheng. Wèn: Tā yǒu duōshao gè xuésheng?",
      audioArti: "Dia adalah seorang guru, dia punya 50 murid. Tanya: Berapa banyak murid yang dia miliki?",
      text: "录音：他是老师，他有50个学生。\n问：他有多少个学生？",
      prompt: "Dengarkan pernyataan dan pertanyaan audio, lalu pilih jumlah yang benar:",
      options: ["A. 5 (wǔ)", "B. 15 (shíwǔ)", "C. 50 (wǔshí)"],
      answer: 2,
      points: 5,
      explanation: "Audio menyatakan '他有50个学生' (50 orang murid), maka jawaban adalah C (50)."
    },
    {
      id: 19,
      part: "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      type: "audio_dialog_mc",
      audioText: "小姐，你好，你这儿有杯子吗？问：他想买什么？",
      audioPinyin: "Xiǎojiě, nǐ hǎo, nǐ zhèr yǒu bēizi ma? Wèn: Tā xiǎng mǎi shénme?",
      audioArti: "Nona, halo, apakah di tempat Anda ada cangkir/gelas? Tanya: Apa yang ingin dia beli?",
      text: "录音：小姐，你好，你这儿有杯子吗？\n问：他想买什么？",
      prompt: "Dengarkan pernyataan dan pertanyaan audio, lalu pilih benda yang ingin dibeli:",
      options: ["A. 茶 (chá - teh)", "B. 苹果 (píngguǒ - apel)", "C. 杯子 (bēizi - cangkir/gelas)"],
      answer: 2,
      points: 5,
      explanation: "Pembicara menanyakan ketersediaan '杯子' (cangkir/gelas), maka jawaban adalah C (杯子)."
    },
    {
      id: 20,
      part: "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      type: "audio_dialog_mc",
      audioText: "这是你的朋友吗？很漂亮。问：朋友怎么样？",
      audioPinyin: "Zhè shì nǐ de péngyou ma? Hěn piàoliang. Wèn: Péngyou zěnmeyàng?",
      audioArti: "Apakah ini temanmu? Sangat cantik. Tanya: Bagaimana temannya?",
      text: "录音：这是你的朋友吗？很漂亮。\n问：朋友怎么样？",
      prompt: "Dengarkan pernyataan dan pertanyaan audio, lalu pilih deskripsi yang sesuai:",
      options: ["A. 爱学习 (ài xuéxí - rajin belajar)", "B. 很漂亮 (hěn piàoliang - sangat cantik)", "C. 想回家 (xiǎng huí jiā - ingin pulang)"],
      answer: 1,
      points: 5,
      explanation: "Pembicara memuji temannya dengan kata '很漂亮' (sangat cantik), maka jawaban adalah B."
    }
  ],

  readingQuestions: [
    // PART 1 (Soal 21 - 25): Menentukan Kesesuaian Kata Hanzi & Gambar
    {
      id: 21,
      part: "Part I (阅读第一部分 - Kesesuaian Kata & Gambar)",
      type: "reading_image_tf",
      image: "/exams/h10901/H1_21.jpg",
      statementText: "看电视 (kàn diànshì)",
      pinyin: "kàn diànshì",
      arti: "Menonton televisi",
      prompt: "Perhatikan gambar dan teks di bawah ini. Apakah artinya SESUAI (√) atau TIDAK SESUAI (×)?",
      options: ["Benar (对 / √)", "Salah (错 / ×)"],
      answer: 0,
      points: 5,
      explanation: "Teks '看电视' berarti menonton televisi. Gambar memperlihatkan orang sedang menonton TV bersama, maka BENAR (√)."
    },
    {
      id: 22,
      part: "Part I (阅读第一部分 - Kesesuaian Kata & Gambar)",
      type: "reading_image_tf",
      image: "/exams/h10901/H1_22.jpg",
      statementText: "苹果 (píngguǒ)",
      pinyin: "píngguǒ",
      arti: "Apel",
      prompt: "Perhatikan gambar dan teks di bawah ini. Apakah artinya SESUAI (√) atau TIDAK SESUAI (×)?",
      options: ["Benar (对 / √)", "Salah (错 / ×)"],
      answer: 0,
      points: 5,
      explanation: "Teks '苹果' berarti buah apel. Gambar memperlihatkan buah apel segar, maka BENAR (√)."
    },
    {
      id: 23,
      part: "Part I (阅读第一部分 - Kesesuaian Kata & Gambar)",
      type: "reading_image_tf",
      image: "/exams/h10901/H1_23.jpg",
      statementText: "飞机 (fēijī)",
      pinyin: "fēijī",
      arti: "Pesawat terbang",
      prompt: "Perhatikan gambar dan teks di bawah ini. Apakah artinya SESUAI (√) atau TIDAK SESUAI (×)?",
      options: ["Benar (对 / √)", "Salah (错 / ×)"],
      answer: 1,
      points: 5,
      explanation: "Teks '飞机' berarti pesawat terbang. Namun gambar memperlihatkan hewan peliharaan (anjing), bukan pesawat, maka SALAH (×)."
    },
    {
      id: 24,
      part: "Part I (阅读第一部分 - Kesesuaian Kata & Gambar)",
      type: "reading_image_tf",
      image: "/exams/h10901/H1_24.jpg",
      statementText: "老师 (lǎoshī)",
      pinyin: "lǎoshī",
      arti: "Guru",
      prompt: "Perhatikan gambar dan teks di bawah ini. Apakah artinya SESUAI (√) atau TIDAK SESUAI (×)?",
      options: ["Benar (对 / √)", "Salah (错 / ×)"],
      answer: 1,
      points: 5,
      explanation: "Teks '老师' berarti guru. Gambar memperlihatkan seekor kucing (猫), bukan sosok guru, maka SALAH (×)."
    },
    {
      id: 25,
      part: "Part I (阅读第一部分 - Kesesuaian Kata & Gambar)",
      type: "reading_image_tf",
      image: "/exams/h10901/H1_25.jpg",
      statementText: "听 (tīng)",
      pinyin: "tīng",
      arti: "Mendengarkan",
      prompt: "Perhatikan gambar dan teks di bawah ini. Apakah artinya SESUAI (√) atau TIDAK SESUAI (×)?",
      options: ["Benar (对 / √)", "Salah (错 / ×)"],
      answer: 0,
      points: 5,
      explanation: "Teks '听' berarti mendengarkan. Gambar memperlihatkan seseorang sedang mendengarkan dengan seksama di telepon, maka BENAR (√)."
    },

    // PART 2 (Soal 26 - 30): Mencocokkan Kalimat dengan Gambar Kisi A-F
    {
      id: 26,
      part: "Part II (阅读第二部分 - Mencocokkan Kalimat Gambar A–F)",
      type: "reading_grid_match",
      gridImage: "/exams/h10901/H1_part6.jpg",
      text: "你好，我能吃一块儿吗？\n(Nǐ hǎo, wǒ néng chī yí kuàir ma?)",
      prompt: "Perhatikan kisi gambar A–F di atas. Pilih gambar yang cocok dengan kalimat:",
      options: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E", "Gambar F"],
      answer: 3,
      points: 5,
      explanation: "Kalimat meminta izin memakan sepotong makanan '我能吃一块儿吗？'. Gambar D memperlihatkan potongan kue makanan lezat."
    },
    {
      id: 27,
      part: "Part II (阅读第二部分 - Mencocokkan Kalimat Gambar A–F)",
      type: "reading_grid_match",
      gridImage: "/exams/h10901/H1_part6.jpg",
      text: "他们在买衣服呢。\n(Tāmen zài mǎi yīfu ne.)",
      prompt: "Perhatikan kisi gambar A–F di atas. Pilih gambar yang cocok dengan kalimat:",
      options: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E", "Gambar F"],
      answer: 5,
      points: 5,
      explanation: "Kalimat menyatakan '他们在买衣服呢' (mereka sedang membeli baju). Gambar F memperlihatkan orang sedang berbelanja pakaian di toko."
    },
    {
      id: 28,
      part: "Part II (阅读第二部分 - Mencocokkan Kalimat Gambar A–F)",
      type: "reading_grid_match",
      gridImage: "/exams/h10901/H1_part6.jpg",
      text: "天气太热了，多吃些水果。\n(Tiānqì tài rè le, duō chī xiē shuǐguǒ.)",
      prompt: "Perhatikan kisi gambar A–F di atas. Pilih gambar yang cocok dengan kalimat:",
      options: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E", "Gambar F"],
      answer: 2,
      points: 5,
      explanation: "Kalimat menyatakan cuaca panas dan anjuran makan banyak buah (天气太热，多吃水果). Gambar C memperlihatkan matahari terik dan buah semangka segar."
    },
    {
      id: 29,
      part: "Part II (阅读第二部分 - Mencocokkan Kalimat Gambar A–F)",
      type: "reading_grid_match",
      gridImage: "/exams/h10901/H1_part6.jpg",
      text: "来，我们看里面是什么东西。\n(Lái, wǒmen kànkan lǐmiàn shì shénme dōngxi.)",
      prompt: "Perhatikan kisi gambar A–F di atas. Pilih gambar yang cocok dengan kalimat:",
      options: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E", "Gambar F"],
      answer: 0,
      points: 5,
      explanation: "Kalimat mengajak melihat isi di dalam suatu benda (看里面是什么东西). Gambar A memperlihatkan orang membuka kotak dan melihat ke dalamnya."
    },
    {
      id: 30,
      part: "Part II (阅读第二部分 - Mencocokkan Kalimat Gambar A–F)",
      type: "reading_grid_match",
      gridImage: "/exams/h10901/H1_part6.jpg",
      text: "喂，你睡觉了吗？\n(Wéi, nǐ shuìjiào le ma?)",
      prompt: "Perhatikan kisi gambar A–F di atas. Pilih gambar yang cocok dengan kalimat:",
      options: ["Gambar A", "Gambar B", "Gambar C", "Gambar D", "Gambar E", "Gambar F"],
      answer: 1,
      points: 5,
      explanation: "Kalimat menanyakan apakah lawan bicara sudah tidur melalui telepon (你睡觉了吗？). Gambar B memperlihatkan orang sedang berbaring tidur di ranjang memegang telepon."
    },

    // PART 3 (Soal 31 - 35): Menjodohkan Tanya Jawab Kalimat
    {
      id: 31,
      part: "Part III (阅读第三部分 - Menjodohkan Tanya Jawab)",
      type: "reading_dialogue_match",
      text: "那个人是谁？\n(Nàge rén shì shéi?)",
      prompt: "Pilih jawaban yang paling tepat untuk pertanyaan di atas:",
      options: [
        "A. 医院 (Yīyuàn - Rumah sakit)",
        "B. 下雨了 (Xià yǔ le - Turun hujan)",
        "C. 我不认识她 (Wǒ bú rènshi tā - Saya tidak kenal dia)",
        "D. 7岁 (7 suì - 7 tahun)",
        "E. 下个月 (Xià ge yuè - Bulan depan)"
      ],
      answer: 2,
      points: 5,
      explanation: "Pertanyaan menanyakan siapa orang tersebut (那个人是谁？). Jawaban yang logis adalah C: '我不认识她' (Saya tidak kenal dia)."
    },
    {
      id: 32,
      part: "Part III (阅读第三部分 - Menjodohkan Tanya Jawab)",
      type: "reading_dialogue_match",
      text: "他女儿多大了？\n(Tā nǚ'ér duō dà le?)",
      prompt: "Pilih jawaban yang paling tepat untuk pertanyaan usia di atas:",
      options: [
        "A. 医院 (Yīyuàn - Rumah sakit)",
        "B. 下雨了 (Xià yǔ le - Turun hujan)",
        "C. 我不认识她 (Wǒ bú rènshi tā - Saya tidak kenal dia)",
        "D. 7岁 (7 suì - 7 tahun)",
        "E. 下个月 (Xià ge yuè - Bulan depan)"
      ],
      answer: 3,
      points: 5,
      explanation: "Pertanyaan menanyakan usia anak perempuan (多大了？). Jawaban yang tepat menunjukkan usia adalah D: '7岁' (7 tahun)."
    },
    {
      id: 33,
      part: "Part III (阅读第三部分 - Menjodohkan Tanya Jawab)",
      type: "reading_dialogue_match",
      text: "你的同学在哪儿工作？\n(Nǐ de tóngxué zài nǎr gōngzuò?)",
      prompt: "Pilih jawaban tempat kerja yang tepat untuk pertanyaan di atas:",
      options: [
        "A. 医院 (Yīyuàn - Rumah sakit)",
        "B. 下雨了 (Xià yǔ le - Turun hujan)",
        "C. 我不认识她 (Wǒ bú rènshi tā - Saya tidak kenal dia)",
        "D. 7岁 (7 suì - 7 tahun)",
        "E. 下个月 (Xià ge yuè - Bulan depan)"
      ],
      answer: 0,
      points: 5,
      explanation: "Pertanyaan menanyakan lokasi tempat bekerja (在哪儿工作？). Jawaban yang menyatakan lokasi tempat adalah A: '医院' (Rumah sakit)."
    },
    {
      id: 34,
      part: "Part III (阅读第三部分 - Menjodohkan Tanya Jawab)",
      type: "reading_dialogue_match",
      text: "昨天上午天气怎么样？\n(Zuótiān shàngwǔ tiānqì zěnmeyàng?)",
      prompt: "Pilih kondisi cuaca yang tepat untuk pertanyaan di atas:",
      options: [
        "A. 医院 (Yīyuàn - Rumah sakit)",
        "B. 下雨了 (Xià yǔ le - Turun hujan)",
        "C. 我不认识她 (Wǒ bú rènshi tā - Saya tidak kenal dia)",
        "D. 7岁 (7 suì - 7 tahun)",
        "E. 下个月 (Xià ge yuè - Bulan depan)"
      ],
      answer: 1,
      points: 5,
      explanation: "Pertanyaan menanyakan keadaan cuaca (天气怎么样？). Jawaban yang berkaitan dengan cuaca adalah B: '下雨了' (Turun hujan)."
    },
    {
      id: 35,
      part: "Part III (阅读第三部分 - Menjodohkan Tanya Jawab)",
      type: "reading_dialogue_match",
      text: "爸爸什么时候来北京呢？\n(Bàba shénme shíhou lái Běijīng ne?)",
      prompt: "Pilih keterangan waktu yang tepat untuk pertanyaan di atas:",
      options: [
        "A. 医院 (Yīyuàn - Rumah sakit)",
        "B. 下雨了 (Xià yǔ le - Turun hujan)",
        "C. 我不认识她 (Wǒ bú rènshi tā - Saya tidak kenal dia)",
        "D. 7岁 (7 suì - 7 tahun)",
        "E. 下个月 (Xià ge yuè - Bulan depan)"
      ],
      answer: 4,
      points: 5,
      explanation: "Pertanyaan menanyakan kapan waktu kedatangan ayah (什么时候来？). Jawaban yang menyatakan waktu adalah E: '下个月' (Bulan depan)."
    },

    // PART 4 (Soal 36 - 40): Melengkapi Kalimat Rumpang (Cloze)
    {
      id: 36,
      part: "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      type: "reading_cloze",
      text: "昨天是 8 (    ) 19日。\n(Zuótiān shì 8 (    ) 19 rì.)",
      prompt: "Pilih kata yang paling tepat untuk mengisi bagian rumpang di atas:",
      options: [
        "A. 坐 (zuò - duduk)",
        "B. 前面 (qiánmiàn - depan)",
        "C. 没关系 (méi guānxi - tidak apa-apa)",
        "D. 汉语 (Hànyǔ - bahasa Mandarin)",
        "E. 月 (yuè - bulan)"
      ],
      answer: 4,
      points: 5,
      explanation: "Pola penulisan tanggal dalam bahasa Mandarin adalah [Bulan]月 [Tanggal]日/号. Maka 8 (月) 19日, jawaban tepat adalah E (月)."
    },
    {
      id: 37,
      part: "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      type: "reading_cloze",
      text: "那个饭馆儿在火车站 (    )。\n(Nàge fànguǎnr zài huǒchēzhàn (    ).)",
      prompt: "Pilih kata penunjuk posisi yang paling tepat:",
      options: [
        "A. 坐 (zuò - duduk)",
        "B. 前面 (qiánmiàn - depan)",
        "C. 没关系 (méi guānxi - tidak apa-apa)",
        "D. 汉语 (Hànyǔ - bahasa Mandarin)",
        "E. 月 (yuè - bulan)"
      ],
      answer: 1,
      points: 5,
      explanation: "Kalimat menunjukkan posisi lokasi restoran terhadap stasiun kereta (火车站前面 = di depan stasiun), jawaban tepat adalah B (前面)."
    },
    {
      id: 38,
      part: "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      type: "reading_cloze",
      text: "你会说 (    ) 吗？\n(Nǐ huì shuō (    ) ma?)",
      prompt: "Pilih kata objek bahasa yang paling tepat:",
      options: [
        "A. 坐 (zuò - duduk)",
        "B. 前面 (qiánmiàn - depan)",
        "C. 没关系 (méi guānxi - tidak apa-apa)",
        "D. 汉语 (Hànyǔ - bahasa Mandarin)",
        "E. 月 (yuè - bulan)"
      ],
      answer: 3,
      points: 5,
      explanation: "Kata kerja '说' (berbicara) membutuhkan objek bahasa, yaitu '汉语' (bahasa Mandarin). Maka jawaban tepat adalah D (汉语)."
    },
    {
      id: 39,
      part: "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      type: "reading_cloze",
      text: "男：你好，王先生在吗？\n女：在，请 (    )，我去叫他。\n(Zài, qǐng (    ), wǒ qù jiào tā.)",
      prompt: "Pilih kata sopan santun yang paling tepat:",
      options: [
        "A. 坐 (zuò - duduk)",
        "B. 前面 (qiánmiàn - depan)",
        "C. 没关系 (méi guānxi - tidak apa-apa)",
        "D. 汉语 (Hànyǔ - bahasa Mandarin)",
        "E. 月 (yuè - bulan)"
      ],
      answer: 0,
      points: 5,
      explanation: "Ungkapan sopan mempersilakan tamu duduk adalah '请坐' (qǐng zuò = silakan duduk), maka jawaban tepat adalah A (坐)."
    },
    {
      id: 40,
      part: "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      type: "reading_cloze",
      text: "女：对不起，我不会做饭。\n男：(    )，我会。\n( (    ), wǒ huì.)",
      prompt: "Pilih ungkapan balasan maaf yang paling tepat:",
      options: [
        "A. 坐 (zuò - duduk)",
        "B. 前面 (qiánmiàn - depan)",
        "C. 没关系 (méi guānxi - tidak apa-apa)",
        "D. 汉语 (Hànyǔ - bahasa Mandarin)",
        "E. 月 (yuè - bulan)"
      ],
      answer: 2,
      points: 5,
      explanation: "Balasan baku terhadap permintaan maaf '对不起' (maaf) adalah '没关系' (tidak apa-apa), maka jawaban tepat adalah C (没关系)."
    }
  ]
};

// Gabungkan seluruh 40 soal dalam satu array berurutan
HSK1_OFFICIAL_H10901.allQuestions = [
  ...HSK1_OFFICIAL_H10901.listeningQuestions,
  ...HSK1_OFFICIAL_H10901.readingQuestions
];

export default HSK1_OFFICIAL_H10901;
