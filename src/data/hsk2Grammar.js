// 72 Tata Bahasa Lengkap HSK 2 (Standar 3.0 Kurikulum Resmi GF 0025-2021 MOE / CTI 汉考国际)
// Mencakup seluruh 81 kompetensi tata bahasa HSK 2:
// - Tiga Partikel 'De' (的, 得, 地)
// - Pola Perbandingan (比, 没有, 一样, 不比)
// - Preposisi & Arah (从到, 离, 往/向, 对, 为了, 方位词)
// - Kata Kerja Bantu / Modal (可以, 应该, 得, 愿意, 敢, 觉得)
// - Aspek & Aksi (过, 着, 快要...了, 正在...呢)
// - Pelengkap Kalimat (Hasil: 完/好/懂/错/到, Arah Majemuk: 起来/出来/回去, Derajat: 得, Durasi & Frekuensi: 次/遍)
// - Kalimat Majemuk (因为所以, 虽然但是, 如果就, 又又, 一就, 或者 vs 还是)
// - Pola Khusus (是...的, 让/叫/请 兼语句, 别/不要, 多/几 Perkiraan, V不V, Satuan 件/条/张/辆).

export const HSK2_GRAMMAR_CATEGORIES = [
  "Semua",
  "Kata Ganti & Penunjuk",
  "Preposisi & Arah",
  "Perbandingan",
  "Kata Kerja Bantu (Modal)",
  "Kata Keterangan & Derajat",
  "Waktu & Urutan",
  "Partikel Aspek & Tiga 'De'",
  "Pelengkap Kalimat (Komplemen)",
  "Kalimat Majemuk & Logika",
  "Pola Khusus & Komunikasi"
];

export const HSK2_GRAMMAR = [
  // 1. KATA GANTI & PENUNJUK (代词)
  {
    id: 101,
    title: "1. Menanyakan Alasan: 为什么 (Wèishénme)",
    category: "Kata Ganti & Penunjuk",
    formula: "Subjek + 为什么 + Predikat / Kata Kerja + ?",
    desc: "Digunakan untuk menanyakan alasan atau sebab ('Kenapa / Mengapa'). Dijawab dengan 因为 (karena).",
    contoh: [
      { hz: "你为什么不喝咖啡？", py: "Nǐ wèishénme bù hē kāfēi?", id: "Kenapa kamu tidak minum kopi?" },
      { hz: "他今天为什么没来上班？", py: "Tā jīntiān wèishénme méi lái shàngbān?", id: "Kenapa hari ini dia tidak datang bekerja?" }
    ]
  },
  {
    id: 102,
    title: "2. Menanyakan Cara / Sebab: 怎么 (Zěnme) + V",
    category: "Kata Ganti & Penunjuk",
    formula: "怎么 + Kata Kerja / Predikat",
    desc: "Menanyakan cara melakukan sesuatu ('Bagaimana cara...') atau menanyakan penyebab dengan nada terkejut ('Kok bisa...').",
    contoh: [
      { hz: "请问这个字怎么读？", py: "Qǐngwèn zhège zì zěnme dú?", id: "Permisi, bagaimana cara membaca karakter ini?" },
      { hz: "你怎么还没吃早饭？", py: "Nǐ zěnme hái méi chī zǎofàn?", id: "Kok kamu masih belum sarapan?" }
    ]
  },
  {
    id: 103,
    title: "3. Penunjuk Derajat: 这么 / 那么 (Zhème / Nàme)",
    category: "Kata Ganti & Penunjuk",
    formula: "这么 / 那么 + Kata Sifat / Kata Kerja Perasaan",
    desc: "Menyatakan derajat kualitas atau intensitas yang luar biasa ('Sebegitu / Begitu / Sedemikian'). 这么 untuk hal dekat, 那么 untuk hal jauh.",
    contoh: [
      { hz: "今天天气怎么这么冷？", py: "Jīntiān tiānqì zěnme zhème lěng?", id: "Kenapa cuaca hari ini sebegitu dingin?" },
      { hz: "那本书没有那么贵。", py: "Nà běn shū méiyǒu nàme guì.", id: "Buku itu tidak semahal itu." }
    ]
  },
  {
    id: 104,
    title: "4. Merujuk Semua Orang: 大家 (Dàjiā)",
    category: "Kata Ganti & Penunjuk",
    formula: "大家 + (都) + Predikat",
    desc: "Kata ganti orang yang berarti 'semua orang' atau 'hadirin sekalian'. Sering berpasangan dengan 都 (semuanya).",
    contoh: [
      { hz: "大家都准备好了吗？", py: "Dàjiā dōu zhǔnbèi hǎo le ma?", id: "Apakah semua orang sudah siap?" },
      { hz: "请大家坐下。", py: "Qǐng dàjiā zuò xià.", id: "Silakan hadirin sekalian duduk." }
    ]
  },
  {
    id: 105,
    title: "5. Merujuk Orang Lain: 别人 (Biérén)",
    category: "Kata Ganti & Penunjuk",
    formula: "Subjek / Objek = 别人",
    desc: "Menyatakan orang lain di luar penutur dan lawan bicara ('orang lain / pihak lain').",
    contoh: [
      { hz: "不要笑话别人。", py: "Bú yào xiàohuà biérén.", id: "Jangan menertawakan orang lain." },
      { hz: "这本字典是别人的。", py: "Zhè běn zìdiǎn shì biérén de.", id: "Kamus ini adalah milik orang lain." }
    ]
  },
  {
    id: 106,
    title: "6. Diri Sendiri / Mandiri: 自己 (Zìjǐ)",
    category: "Kata Ganti & Penunjuk",
    formula: "Kata Ganti / Nama + 自己 (+ Kata Kerja)",
    desc: "Menekankan diri sendiri atau melakukan sesuatu secara mandiri tanpa bantuan orang lain.",
    contoh: [
      { hz: "我自己去做这件事。", py: "Wǒ zìjǐ qù zuò zhè jiàn shì.", id: "Saya sendiri yang akan mengerjakan hal ini." },
      { hz: "照顾好你自己。", py: "Zhàogù hǎo nǐ zìjǐ.", id: "Jaga dirimu sendiri baik-baik." }
    ]
  },
  {
    id: 107,
    title: "7. Penyelarasan Menyeluruh: 每...都... (Měi... dōu...)",
    category: "Kata Ganti & Penunjuk",
    formula: "每 + Satuan + Benda + 都 + Predikat",
    desc: "Pola baku HSK 2 untuk menyatakan setiap individu/elemen tanpa terkecuali ('Setiap... selalu/semuanya...').",
    contoh: [
      { hz: "他每天都去跑步。", py: "Tā měitiān dōu qù pǎobù.", id: "Dia setiap hari selalu pergi lari." },
      { hz: "每个苹果都很甜。", py: "Měi ge píngguǒ dōu hěn tián.", id: "Setiap apel semuanya sangat manis." }
    ]
  },

  // 2. PREPOSISI & ARAH (介词与方位词)
  {
    id: 108,
    title: "8. Rentang Tempat / Waktu: 从...到... (Cóng... dào...)",
    category: "Preposisi & Arah",
    formula: "从 + Titik Awal + 到 + Titik Akhir",
    desc: "Menyatakan cakupan ruang dari satu titik ke titik lain, atau kurun waktu awal hingga akhir ('Dari... sampai/ke...').",
    contoh: [
      { hz: "从北京到上海坐高铁很快。", py: "Cóng Běijīng dào Shànghǎi zuò gāotiě hěn kuài.", id: "Dari Beijing ke Shanghai naik kereta cepat sangat cepat." },
      { hz: "我们从早上八点学到下午四点。", py: "Wǒmen cóng zǎoshang bā diǎn xué dào xiàwǔ sì diǎn.", id: "Kami belajar dari jam 8 pagi sampai jam 4 sore." }
    ]
  },
  {
    id: 109,
    title: "9. Mengukur Jarak: A 离 B (Lí)",
    category: "Preposisi & Arah",
    formula: "Tempat A + 离 + Tempat B + 很远 / 很近 / Jarak",
    desc: "Preposisi penentu jarak antara dua tempat ('A berjarak dari B sejauh...').",
    contoh: [
      { hz: "我家离学校很近。", py: "Wǒ jiā lí xuéxiào hěn jìn.", id: "Rumah saya berjarak sangat dekat dari sekolah." },
      { hz: "医院离这里不远。", py: "Yīyuàn lí zhèlǐ bù yuǎn.", id: "Rumah sakit tidak jauh dari sini." }
    ]
  },
  {
    id: 110,
    title: "10. Orientasi Arah Gerakan: 往 / 向 (Wǎng / Xiàng)",
    category: "Preposisi & Arah",
    formula: "往 / 向 + Arah + Kata Kerja Gerak",
    desc: "Menunjukkan orientasi ke mana gerakan ditujukan ('Ke arah / Menuju...'). Sering dipakai saat petunjuk jalan.",
    contoh: [
      { hz: "一直往前走，然后往右拐。", py: "Yìzhí wǎng qián zǒu, ránhòu wǎng yòu guǎi.", id: "Jalan lurus terus ke depan, kemudian belok ke kanan." },
      { hz: "请向左看。", py: "Qǐng xiàng zuǒ kàn.", id: "Silakan menoleh ke arah kiri." }
    ]
  },
  {
    id: 111,
    title: "11. Efek / Sasaran Sikap: 对 (Duì)",
    category: "Preposisi & Arah",
    formula: "Subjek + 对 + Objek + Kata Sifat / Kata Kerja",
    desc: "Menunjukkan sasaran perlakuan, kegunaan, atau efek terhadap seseorang/sesuatu ('Terhadap / Bagi...').",
    contoh: [
      { hz: "多吃水果对身体很好。", py: "Duō chī shuǐguǒ duì shēntǐ hěn hǎo.", id: "Banyak makan buah sangat baik bagi kesehatan tubuh." },
      { hz: "老师对学生非常热情。", py: "Lǎoshī duì xuésheng fēicháng rèqíng.", id: "Guru sangat ramah dan peduli terhadap murid." }
    ]
  },
  {
    id: 112,
    title: "12. Tujuan Aksi: 为 / 为了 (Wèi / Wèile)",
    category: "Preposisi & Arah",
    formula: "为(了) + Tujuan / Orang + Aksi",
    desc: "Menyatakan maksud, tujuan yang hendak dicapai, atau tindakan demi seseorang ('Demi / Untuk...').",
    contoh: [
      { hz: "为了学好汉语，他每天都练习。", py: "Wèile xué hǎo Hànyǔ, tā měitiān dōu liànxí.", id: "Demi menguasai bahasa Mandarin dengan baik, dia setiap hari berlatih." },
      { hz: "妈妈为我们准备了丰盛的晚饭。", py: "Māma wèi wǒmen zhǔnbèi le fēngshèng de wǎnfàn.", id: "Ibu menyiapkan makan malam yang berlimpah untuk kami." }
    ]
  },
  {
    id: 113,
    title: "13. Posisi Samping & Arah: 旁边 / 左边 / 右边",
    category: "Preposisi & Arah",
    formula: "Benda + 旁边 / 左边 / 右边",
    desc: "Kata penunjuk posisi ruang HSK 2: 旁边 (samping), 左边 (sebelah kiri), 右边 (sebelah kanan).",
    contoh: [
      { hz: "超市就在银行旁边。", py: "Chāoshì jiù zài yínháng pángbiān.", id: "Supermarket tepat berada di samping bank." },
      { hz: "坐在我左边的人是我的同桌。", py: "Zuò zài wǒ zuǒbiān de rén shì wǒ de tóngzhuō.", id: "Orang yang duduk di sebelah kiri saya adalah teman sebangku saya." }
    ]
  },
  {
    id: 114,
    title: "14. Posisi Luar & Dalam: 外面 (Wàimiàn) vs 里面 (Lǐmiàn)",
    category: "Preposisi & Arah",
    formula: "Tempat / Wadah + 外面 (luar) / 里面 (dalam)",
    desc: "Menunjukkan letak benda atau lokasi di sisi luar atau di sisi dalam.",
    contoh: [
      { hz: "外面在下大雪，快进房间里吧。", py: "Wàimiàn zài xià dàxuě, kuài jìn fángjiān lǐ ba.", id: "Di luar sedang turun salju lebat, cepat masuklah ke dalam kamar." },
      { hz: "书包里面有三本书和两支笔。", py: "Shūbāo lǐmiàn yǒu sān běn shū hé liǎng zhī bǐ.", id: "Di dalam tas ransel ada tiga buku dan dua pena." }
    ]
  },

  // 3. PERBANDINGAN (比较句)
  {
    id: 115,
    title: "15. Pola Komparatif Dasar: A 比 B + Adjektiva",
    category: "Perbandingan",
    formula: "Subjek A + 比 + Subjek B + Kata Sifat",
    desc: "Struktur perbandingan utama bahasa Mandarin ('A lebih [sifat] daripada B'). Jangan tambahkan 很 (hěn).",
    contoh: [
      { hz: "哥哥比弟弟高。", py: "Gēge bǐ dìdi gāo.", id: "Kakak laki-laki lebih tinggi daripada adik laki-laki." },
      { hz: "今天的西瓜比昨天的甜。", py: "Jīntiān de xīguā bǐ zuótiān de tián.", id: "Semangka hari ini lebih manis daripada yang kemarin." }
    ]
  },
  {
    id: 116,
    title: "16. Perbandingan dengan Selisih Kuantitas: 比 + 一点儿 / 多了",
    category: "Perbandingan",
    formula: "A + 比 + B + Kata Sifat + 一点儿 / 得多 / 多了",
    desc: "Menyatakan selisih perbandingan secara spesifik: 一点儿 (sedikit lebih...), 得多 / 多了 (jauh lebih...).",
    contoh: [
      { hz: "这件衣服比那件便宜一点儿。", py: "Zhè jiàn yīfu bǐ nà jiàn piányi yìdiǎnr.", id: "Baju ini sedikit lebih murah daripada yang itu." },
      { hz: "现在的天气比上个月暖和多了。", py: "Xiànzài de tiānqì bǐ shàng ge yuè nuǎnhuo duō le.", id: "Cuaca sekarang jauh lebih hangat dibanding bulan lalu." }
    ]
  },
  {
    id: 117,
    title: "17. Perbandingan Negatif: A 没有 B (那么) + Adj",
    category: "Perbandingan",
    formula: "A + 没有 + B + (那么/这么) + Kata Sifat",
    desc: "Bentuk menyangkal kesetaraan sifat ('A tidak se-[sifat] B'). Menunjukkan B lebih unggul.",
    contoh: [
      { hz: "我没有他那么高。", py: "Wǒ méiyǒu tā nàme gāo.", id: "Saya tidak setinggi dia." },
      { hz: "坐公共汽车没有坐地铁快。", py: "Zuò gōnggòng qìchē méiyǒu zuò dìtiě kuài.", id: "Naik bus tidak secepat naik MRT / kereta bawah tanah." }
    ]
  },
  {
    id: 118,
    title: "18. Menyatakan Kesetaraan Sama: A 跟/和 B 一样",
    category: "Perbandingan",
    formula: "A + 跟 / 和 + B + 一样 (+ Kata Sifat)",
    desc: "Menyatakan dua subjek adalah sama persis, atau sama dalam hal tingkat sifat tertentu ('A sama seperti B').",
    contoh: [
      { hz: "他的爱好跟我一样。", py: "Tā de àihào gēn wǒ yíyàng.", id: "Hobinya sama dengan hobi saya." },
      { hz: "妹妹长得跟姐姐一样漂亮。", py: "Mèimei zhǎng de gēn jiějie yíyàng piàoliang.", id: "Adik perempuan berparas sama cantiknya dengan kakak perempuan." }
    ]
  },
  {
    id: 119,
    title: "19. Menyatakan Perbedaan: A 跟/和 B 不一样",
    category: "Perbandingan",
    formula: "A + 跟 / 和 + B + 不一样 (+ Kata Sifat)",
    desc: "Menyatakan dua subjek memiliki sifat atau identitas yang berbeda satu sama lain ('A tidak sama dengan B').",
    contoh: [
      { hz: "中国的天气跟印尼不一样。", py: "Zhōngguó de tiānqì gēn Yìnní bù yíyàng.", id: "Cuaca di Tiongkok berbeda dengan di Indonesia." },
      { hz: "这两件衬衫的颜色不一样。", py: "Zhè liǎng jiàn chènshān de yánsè bù yíyàng.", id: "Warna kedua kemeja ini berbeda." }
    ]
  },
  {
    id: 120,
    title: "20. Penolakan Inferioritas: 不比 (Bù bǐ) + Sifat",
    category: "Perbandingan",
    formula: "A + 不比 + B + Kata Sifat",
    desc: "Menolak anggapan bahwa A kalah dibanding B ('A tidak kalah [sifat] dibanding B / setidaknya sama').",
    contoh: [
      { hz: "我的汉语不比他差。", py: "Wǒ de Hànyǔ bù bǐ tā chà.", id: "Bahasa Mandarin saya tidak kalah jelek dibanding dia (setara)." },
      { hz: "坐公交车不比打车慢。", py: "Zuò gōngjiāochē bù bǐ dǎchē màn.", id: "Naik bus umum tidak kalah lambat dibanding naik taksi." }
    ]
  },

  // 4. KATA KERJA BANTU / MODAL (能愿动词)
  {
    id: 121,
    title: "21. Izin & Kelayakan: 可以 (Kěyǐ)",
    category: "Kata Kerja Bantu (Modal)",
    formula: "Subjek + 可以 + Kata Kerja",
    desc: "Menyatakan izin ('boleh') atau menyarankan solusi yang layak dilakukan ('bisa / dapat'). Negasinya 不可以 atau 不能.",
    contoh: [
      { hz: "我可以用一下你的手机吗？", py: "Wǒ kěyǐ yòng yíxià nǐ de shǒujī ma?", id: "Bolehkah saya memakai sebentar ponselmu?" },
      { hz: "周末我们可以去公园散步。", py: "Zhōumò wǒmen kěyǐ qù gōngyuán sànbù.", id: "Akhir pekan kita bisa pergi jalan-jalan ke taman." }
    ]
  },
  {
    id: 122,
    title: "22. Keharusan / Saran Moral: 应该 (Yīnggāi)",
    category: "Kata Kerja Bantu (Modal)",
    formula: "Subjek + 应该 + Kata Kerja",
    desc: "Menyatakan anjuran moral, kewajaran, atau hal yang semestinya dilakukan ('Seharusnya / Semestinya').",
    contoh: [
      { hz: "生病了就应该多喝水休息。", py: "Shēngbìng le jiù yīnggāi duō hē shuǐ xiūxi.", id: "Kalau sakit seharusnya banyak minum air dan istirahat." },
      { hz: "你不应该上课迟到。", py: "Nǐ bù yīnggāi shàngkè chídào.", id: "Kamu tidak seharusnya terlambat masuk kelas." }
    ]
  },
  {
    id: 123,
    title: "23. Keharusan Kuat Lisan: 得 (Děi)",
    category: "Kata Kerja Bantu (Modal)",
    formula: "Subjek + 得 + Kata Kerja (dibaca: děi)",
    desc: "Menyatakan keharusan mendesak yang tak terhindarkan dalam ragam lisan ('Harus / Mesti'). Lawannya 不用 (tidak perlu).",
    contoh: [
      { hz: "时间不早了，我得走了。", py: "Shíjiān bù zǎo le, wǒ děi zǒu le.", id: "Sudah tidak pagi lagi, saya harus segera pergi." },
      { hz: "明天有考试，今晚得复习。", py: "Míngtiān yǒu kǎoshì, jīnwǎn děi fùxí.", id: "Besok ada ujian, malam ini harus mengulang pelajaran." }
    ]
  },
  {
    id: 124,
    title: "24. Kesediaan Hati: 愿意 (Yuànyì)",
    category: "Kata Kerja Bantu (Modal)",
    formula: "Subjek + 愿意 + Kata Kerja",
    desc: "Menyatakan kerelaan, keikhlasan, atau persetujuan tulus dari lubuk hati ('Bersedia / Sudi / Mau').",
    contoh: [
      { hz: "你愿意和我一起去旅行吗？", py: "Nǐ yuànyì hé wǒ yìqǐ qù lǚxíng ma?", id: "Maukah kamu pergi berlibur bersama saya?" },
      { hz: "他很愿意帮助新同学。", py: "Tā hěn yuànyì bāngzhù xīn tóngxué.", id: "Dia sangat bersedia membantu teman sekelas baru." }
    ]
  },
  {
    id: 125,
    title: "25. Keberanian Mental / Fisik: 敢 (Gǎn)",
    category: "Kata Kerja Bantu (Modal)",
    formula: "Subjek + (不)敢 + Kata Kerja",
    desc: "Menyatakan keberanian untuk mengambil tindakan ('Berani'). Bentuk negatif 不敢 sering dipakai untuk rasa takut/sungkan.",
    contoh: [
      { hz: "他不敢在大家面前唱歌。", py: "Tā bù gǎn zài dàjiā miànqián chànggē.", id: "Dia tidak berani bernyanyi di hadapan semua orang." },
      { hz: "你敢一个人走夜路吗？", py: "Nǐ gǎn yí ge rén zǒu yèlù ma?", id: "Apakah kamu berani berjalan di jalan malam seorang diri?" }
    ]
  },
  {
    id: 126,
    title: "26. Opini & Perasaan Subjektif: 觉得 (Juéde)",
    category: "Kata Kerja Bantu (Modal)",
    formula: "Subjek + 觉得 + Pendapat / Klausa",
    desc: "Menyatakan pandangan pribadi, impresi, atau sensasi fisik seseorang ('Merasa / Menurut saya / Berpendapat').",
    contoh: [
      { hz: "我觉得今天的天气非常舒服。", py: "Wǒ juéde jīntiān de tiānqì fēicháng shūfu.", id: "Menurut saya cuaca hari ini sangat nyaman." },
      { hz: "你觉得这件衣服好看吗？", py: "Nǐ juéde zhè jiàn yīfu hǎokàn ma?", id: "Apakah menurutmu baju ini bagus?" }
    ]
  },

  // 5. KATA KETERANGAN & DERAJAT (副词与程度)
  {
    id: 127,
    title: "27. Superlatif Puncak: 最 (Zuì) + Kata Sifat",
    category: "Kata Keterangan & Derajat",
    formula: "最 + Kata Sifat / Kata Kerja Perasaan",
    desc: "Menyatakan tingkat tertinggi atau paling mutlak dalam kelompoknya ('Paling / Ter-').",
    contoh: [
      { hz: "我最喜欢吃妈妈做的菜。", py: "Wǒ zuì xǐhuan chī māma zuò de cài.", id: "Saya paling suka makan masakan buatan ibu." },
      { hz: "他是我们班里最高的学生。", py: "Tā shì wǒmen bān lǐ zuì gāo de xuésheng.", id: "Dia adalah murid paling tinggi di kelas kami." }
    ]
  },
  {
    id: 128,
    title: "28. Tingkat Bertambah Lebih: 更 (Gèng)",
    category: "Kata Keterangan & Derajat",
    formula: "更 + Kata Sifat / Kata Kerja Mental",
    desc: "Menyatakan pertambahan derajat yang lebih tinggi dibanding taraf sebelumnya ('Lebih / Makin...').",
    contoh: [
      { hz: "这本小说更有意思。", py: "Zhè běn xiǎoshuō gèng yǒu yìsi.", id: "Novel yang ini lebih menarik." },
      { hz: "多运动会让身体更健康。", py: "Duō yùndòng huì ràng shēntǐ gèng jiànkāng.", id: "Banyak berolahraga akan membuat tubuh makin sehat." }
    ]
  },
  {
    id: 129,
    title: "29. Tingkat Ekstrem Tinggi: 非常 (Fēicháng)",
    category: "Kata Keterangan & Derajat",
    formula: "非常 + Kata Sifat / Kata Kerja Emosi",
    desc: "Menyatakan derajat yang luar biasa tinggi, tingkatannya lebih kuat dan formal dibandingkan 很 ('Amat sangat / Luar biasa').",
    contoh: [
      { hz: "这道中国菜味道非常香。", py: "Zhè dào Zhōngguó cài wèidao fēicháng xiāng.", id: "Hidangan masakan Tiongkok ini aromanya sangat wangi." },
      { hz: "听到这个好消息，大家非常高兴。", py: "Tīngdào zhège hǎo xiāoxi, dàjiā fēicháng gāoxìng.", id: "Mendengar kabar baik ini, semua orang sangat bergembira." }
    ]
  },
  {
    id: 130,
    title: "30. Penegasan Nada Sungguh: 真 (Zhēn) + Kata Sifat",
    category: "Kata Keterangan & Derajat",
    formula: "真 + Kata Sifat (+ 啊 / 了)",
    desc: "Menyatakan perasaan kagum, keheranan, atau pengakuan yang tulus spontan ('Sungguh / Benar-benar...').",
    contoh: [
      { hz: "你写的汉字真好看！", py: "Nǐ xiě de Hànzì zhēn hǎokàn!", id: "Karakter Hanzi yang kamu tulis sungguh bagus!" },
      { hz: "今天时间过得真快。", py: "Jīntiān shíjiān guò de zhēn kuài.", id: "Hari ini waktu berlalu benar-benar cepat." }
    ]
  },
  {
    id: 131,
    title: "31. Kepastian & Komitmen: 一定 (Yídìng)",
    category: "Kata Keterangan & Derajat",
    formula: "Subjek + 一定 + (要/会) + Predikat",
    desc: "Menunjukkan kepastian mutlak ('pasti') atau tekad bulat pantang menyerah ('harus/bertekad').",
    contoh: [
      { hz: "明天有时间我一定会来。", py: "Míngtiān yǒu shíjiān wǒ yídìng huì lái.", id: "Besok kalau ada waktu saya pasti akan datang." },
      { hz: "我们一定要学好汉语。", py: "Wǒmen yídìng yào xué hǎo Hànyǔ.", id: "Kita harus bertekad menguasai bahasa Mandarin dengan baik." }
    ]
  },
  {
    id: 132,
    title: "32. Mengungkap Fakta: 其实 (Qíshí)",
    category: "Kata Keterangan & Derajat",
    formula: "其实 + Kalimat Penjelas",
    desc: "Mengoreksi asumsi yang keliru dan membeberkan kenyataan sesungguhnya ('Sebenarnya / Faktanya').",
    contoh: [
      { hz: "其实学汉语并没有那么难。", py: "Qíshí xué Hànyǔ bìng méiyǒu nàme nán.", id: "Sebenarnya belajar bahasa Mandarin tidaklah sesulit itu." },
      { hz: "他看着年轻，其实已经四十岁了。", py: "Tā kàn zhe niánqīng, qíshí yǐjīng sìshí suì le.", id: "Dia terlihat muda, padahal sebenarnya sudah berusia empat puluh tahun." }
    ]
  },
  {
    id: 133,
    title: "33. Intensitas Ekstrem: 太……了 (Tài... le)",
    category: "Kata Keterangan & Derajat",
    formula: "太 + Kata Sifat + 了",
    desc: "Menyatakan sifat yang sudah mencapai batas maksimal, baik konotasi positif takjub maupun negatif ('Terlalu / Amat sangat...').",
    contoh: [
      { hz: "这道菜太好吃了！", py: "Zhè dào cài tài hǎochī le!", id: "Masakan ini enak sekali!" },
      { hz: "今天的工作太累了。", py: "Jīntiān de gōngzuò tài lèi le.", id: "Pekerjaan hari ini terlalu melelahkan." }
    ]
  },
  {
    id: 134,
    title: "34. Sedikit Kurang Enak: 有点儿 (Yǒudiǎnr) + Sifat",
    category: "Kata Keterangan & Derajat",
    formula: "有点儿 + Kata Sifat (berkonotasi negatif/kurang puas)",
    desc: "Menyatakan derajat sedikit pada hal yang kurang disukai atau mengganggu ('Agak / Sedikit...'). Berbeda dengan 一点儿.",
    contoh: [
      { hz: "今天天气有点儿冷，多穿件衣服吧。", py: "Jīntiān tiānqì yǒudiǎnr lěng, duō chuān jiàn yīfu ba.", id: "Hari ini cuaca agak dingin, pakailah baju lebih tebal." },
      { hz: "这双鞋有点儿小。", py: "Zhè shuāng xié yǒudiǎnr xiǎo.", id: "Sepatu ini agak sempit/kekecilan." }
    ]
  },
  {
    id: 135,
    title: "35. Sedikit Kuantitas / Selisih: (一)点儿 ((Yì)diǎnr)",
    category: "Kata Keterangan & Derajat",
    formula: "Kata Kerja + 一点儿 + Benda | Sifat + 一点儿",
    desc: "Menyatakan jumlah kuantitas benda sedikit ('sedikit air/uang') atau selisih sedikit dalam perbandingan ('sedikit lebih besar').",
    contoh: [
      { hz: "我想喝一点儿水。", py: "Wǒ xiǎng hē yìdiǎnr shuǐ.", id: "Saya ingin minum sedikit air." },
      { hz: "请您走快一点儿。", py: "Qǐng nín zǒu kuài yìdiǎnr.", id: "Tolong Anda jalan sedikit lebih cepat." }
    ]
  },

  // 6. WAKTU, KRONOLOGI & ASPEK (时间与时序)
  {
    id: 136,
    title: "36. Aksi Telah Selesai: 已经...了 (Yǐjīng... le)",
    category: "Waktu & Urutan",
    formula: "Subjek + 已经 + Kata Kerja / Frasa + 了",
    desc: "Menandakan suatu peristiwa atau kondisi sudah rampung terwujud ('Sudah / Telah...').",
    contoh: [
      { hz: "电影已经开始了，快进场吧。", py: "Diànyǐng yǐjīng kāishǐ le, kuài jìn chǎng ba.", id: "Filmnya sudah mulai, ayo cepat masuk ruangan." },
      { hz: "他们已经学完第二课了。", py: "Tāmen yǐjīng xué wán dì-èr kè le.", id: "Mereka sudah selesai mempelajari bab kedua." }
    ]
  },
  {
    id: 137,
    title: "37. Cepat vs Terlambat: 就 (Jiù) vs 才 (Cái)",
    category: "Waktu & Urutan",
    formula: "Waktu + 就 (cepat/awal) vs Waktu + 才 (terlambat/lambat)",
    desc: "就 menandakan aksi terjadi lebih awal, mudah, atau cepat. 才 menandakan aksi memakan waktu lama, sulit, atau terlambat.",
    contoh: [
      { hz: "他早上六点就起床了。", py: "Tā zǎoshang liù diǎn jiù qǐchuáng le.", id: "Dia jam enam pagi sudah langsung bangun (dianggap awal)." },
      { hz: "他晚上十点才下班回家。", py: "Tā wǎnshang shí diǎn cái xiàbān huíjiā.", id: "Dia jam sepuluh malam baru selesai kerja dan pulang (dianggap larut)." }
    ]
  },
  {
    id: 138,
    title: "38. Masih Berlanjut: 还 (Hái)",
    category: "Waktu & Urutan",
    formula: "Subjek + 还 + Kata Kerja / Kata Sifat",
    desc: "Menunjukkan keadaan atau tindakan yang masih terus berlangsung tanpa henti ('Masih / Belum juga').",
    contoh: [
      { hz: "现在外面还在下雨。", py: "Xiànzài wàimiàn hái zài xià yǔ.", id: "Sekarang di luar masih turun hujan." },
      { hz: "你还想喝一杯水吗？", py: "Nǐ hái xiǎng hē yì bēi shuǐ ma?", id: "Apakah kamu masih ingin minum segelas air lagi?" }
    ]
  },
  {
    id: 139,
    title: "39. Pengulangan di Masa Depan: 再 (Zài)",
    category: "Waktu & Urutan",
    formula: "再 + Kata Kerja",
    desc: "Menyatakan pengulangan aksi yang belum terjadi atau akan dilakukan di waktu mendatang ('Lagi / Nanti... lagi').",
    contoh: [
      { hz: "请您再说一遍，我没听懂。", py: "Qǐng nín zài shuō yí biàn, wǒ méi tīngdǒng.", id: "Tolong Anda ucapkan sekali lagi, saya belum paham." },
      { hz: "我们明天再聊吧。", py: "Wǒmen míngtiān zài liáo ba.", id: "Besok kita mengobrol lagi ya." }
    ]
  },
  {
    id: 140,
    title: "40. Pengulangan Masa Lampau: 又 (Yòu)",
    category: "Waktu & Urutan",
    formula: "又 + Kata Kerja + 了",
    desc: "Menyatakan tindakan yang berulang kembali di masa lampau atau di luar harapan ('Lagi-lagi / Kembali...').",
    contoh: [
      { hz: "他今天上班又迟到了。", py: "Tā jīntiān shàngbān yòu chídào le.", id: "Hari ini dia berangkat kerja terlambat lagi." },
      { hz: "这道题我又做错了。", py: "Zhè dào tí wǒ yòu zuò cuò le.", id: "Soal yang ini saya salah kerjakan lagi." }
    ]
  },
  {
    id: 141,
    title: "41. Dua Aksi Bersamaan: 一边...一边... (Yìbiān... yìbiān...)",
    category: "Waktu & Urutan",
    formula: "Subjek + 一边 + Aksi 1 + 一边 + Aksi 2",
    desc: "Menyatakan dua tindakan yang dilakukan secara simultan/serempak dalam satu waktu ('Sambil... sambil...').",
    contoh: [
      { hz: "妈妈喜欢一边做饭一边听音乐。", py: "Māma xǐhuan yìbiān zuòfàn yìbiān tīng yīnyuè.", id: "Ibu suka sambil memasak sambil mendengarkan musik." },
      { hz: "我们一边喝咖啡一边聊天吧。", py: "Wǒmen yìbiān hē kāfēi yìbiān liáotiān ba.", id: "Mari kita sambil minum kopi sambil mengobrol." }
    ]
  },
  {
    id: 142,
    title: "42. Urutan Kronologis: 先...然后... (Xiān... ránhòu...)",
    category: "Waktu & Urutan",
    formula: "先 + Aksi 1 + 然后 + Aksi 2",
    desc: "Menyusun tahapan kronologis kegiatan ('Pertama-tama... kemudian/setelah itu...').",
    contoh: [
      { hz: "你先洗手，然后吃晚饭。", py: "Nǐ xiān xǐ shǒu, ránhòu chī wǎnfàn.", id: "Kamu cuci tangan dulu, setelah itu baru makan malam." },
      { hz: "我们先去买票，然后进火车站。", py: "Wǒmen xiān qù mǎi piào, ránhòu jìn huǒchēzhàn.", id: "Kita pertama-tama pergi beli tiket, kemudian masuk ke stasiun kereta." }
    ]
  },
  {
    id: 143,
    title: "43. Titik Waktu Lampau / Sebelumnya: ……以前 (Yǐqián)",
    category: "Waktu & Urutan",
    formula: "Titik Waktu / Aksi + 以前",
    desc: "Menyatakan sebelum kurun waktu atau sebelum aksi tertentu terjadi ('Sebelum / Dahulu kala').",
    contoh: [
      { hz: "吃饭以前一定要洗手。", py: "Chīfàn yǐqián yídìng yào xǐ shǒu.", id: "Sebelum makan harus mencuci tangan." },
      { hz: "三年以前我住在上海。", py: "Sān nián yǐqián wǒ zhù zài Shànghǎi.", id: "Tiga tahun yang lalu saya tinggal di Shanghai." }
    ]
  },
  {
    id: 144,
    title: "44. Titik Waktu Mendatang / Sesudahnya: ……以后 (Yǐhòu)",
    category: "Waktu & Urutan",
    formula: "Titik Waktu / Aksi + 以后",
    desc: "Menyatakan sesudah kejadian atau di masa yang akan datang ('Setelah / Kelak / Nanti').",
    contoh: [
      { hz: "下课以后我们一起去打篮球吧。", py: "Xiàkè yǐhòu wǒmen yìqǐ qù dǎ lánqiú ba.", id: "Setelah selesai kelas mari kita pergi bermain bola basket." },
      { hz: "半个小时以后火车就开了。", py: "Bàn ge xiǎoshí yǐhòu huǒchē jiù kāi le.", id: "Setengah jam lagi kereta akan berangkat." }
    ]
  },
  {
    id: 145,
    title: "45. Peristiwa Segera Terjadi: 快要...了 / 就要...了",
    category: "Waktu & Urutan",
    formula: "快要 / 就要 / 快 + Predikat + 了",
    desc: "Menyatakan peristiwa yang akan segera terjadi dalam waktu sangat dekat ('Sebentar lagi akan / Segera...').",
    contoh: [
      { hz: "火车快要开了，大家准备上车。", py: "Huǒchē kuàiyào kāi le, dàjiā zhǔnbèi shàng chē.", id: "Kereta sebentar lagi akan berangkat, semua bersiap naik kereta." },
      { hz: "新年就要到了。", py: "Xīnnián jiù yào dào le.", id: "Tahun Baru sebentar lagi akan tiba." }
    ]
  },
  {
    id: 146,
    title: "46. Sedang Berlangsung: 正在……呢 (Zhèngzài... ne)",
    category: "Waktu & Urutan",
    formula: "Subjek + (正)在 + Kata Kerja + (呢)",
    desc: "Menegaskan suatu aksi yang detik ini sedang giat berlangsung di depan mata ('Sedang / Tengah melakukan...').",
    contoh: [
      { hz: "弟弟正在房间里写作业呢。", py: "Dìdi zhèngzài fángjiān lǐ xiě zuòyè ne.", id: "Adik laki-laki sedang mengerjakan PR di dalam kamar." },
      { hz: "外面在下着大雨呢。", py: "Wàimiàn zài xià zhe dàyǔ ne.", id: "Di luar sedang turun hujan lebat." }
    ]
  },

  // 7. PARTIKEL ASPEK & TIGA 'DE' (助词)
  {
    id: 147,
    title: "47. Pengalaman Pernah Terjadi: Kata Kerja + 过 (Guo)",
    category: "Partikel Aspek & Tiga 'De'",
    formula: "Subjek + Kata Kerja + 过 + Objek",
    desc: "Menunjukkan pengalaman yang pernah dialami di masa lalu ('Pernah...'). Negasinya memakai 没(有) + V + 过.",
    contoh: [
      { hz: "我去过一次北京。", py: "Wǒ qù guo yí cì Běijīng.", id: "Saya pernah pergi satu kali ke Beijing." },
      { hz: "你吃过北京烤鸭吗？我没吃过。", py: "Nǐ chī guo Běijīng kǎoyā ma? Wǒ méi chī guo.", id: "Apakah kamu pernah makan bebek panggang Beijing? Saya belum pernah." }
    ]
  },
  {
    id: 148,
    title: "48. Status Kondisi Berkelanjutan: Kata Kerja + 着 (Zhe)",
    category: "Partikel Aspek & Tiga 'De'",
    formula: "Subjek / Tempat + Kata Kerja + 着 + Objek",
    desc: "Menandakan kondisi atau postur status yang sedang bertahan/berlangsung ('Dalam keadaan... / Sedang ter-...').",
    contoh: [
      { hz: "房间的门开着呢。", py: "Fángjiān de mén kāi zhe ne.", id: "Pintu kamar dalam keadaan terbuka." },
      { hz: "他穿着一件黑色的衣服。", py: "Tā chuān zhe yí jiàn hēisè de yīfu.", id: "Dia sedang mengenakan sehelai pakaian berwarna hitam." }
    ]
  },
  {
    id: 149,
    title: "49. Partikel Adverbial Cara: Kata Sifat + 地 (De) + Kata Kerja",
    category: "Partikel Aspek & Tiga 'De'",
    formula: "Kata Sifat + 地 (dibaca: de) + Kata Kerja",
    desc: "Partikel kedua dari 'Tiga De'. Berfungsi mengubah kata sifat menjadi keterangan cara perbuatan ('Dengan/secara [sifat] melakukan...').",
    contoh: [
      { hz: "大家高兴地跳了起来。", py: "Dàjiā gāoxìng de tiào le qǐlái.", id: "Semua orang melompat dengan gembira." },
      { hz: "老师认真地看着每一份作业。", py: "Lǎoshī rènzhēn de kàn zhe měi yí fèn zuòyè.", id: "Guru dengan sungguh-sungguh memeriksa setiap lembar tugas." }
    ]
  },
  {
    id: 150,
    title: "50. Partikel Derajat Tindakan: Kata Kerja + 得 (De) + Sifat",
    category: "Partikel Aspek & Tiga 'De'",
    formula: "Kata Kerja + 得 (dibaca: de) + 很 / 非常 + Kata Sifat",
    desc: "Partikel ketiga dari 'Tiga De'. Berfungsi menilai kualitas, kecepatan, atau cara aksi ('Melakukan tindakan dengan hasil/derajat [sifat]').",
    contoh: [
      { hz: "他汉语说得非常流利。", py: "Tā Hànyǔ shuō de fēicháng liúlì.", id: "Dia berbicara bahasa Mandarin dengan sangat fasih." },
      { hz: "弟弟跑得很快。", py: "Dìdi pǎo de hěn kuài.", id: "Adik laki-laki berlari dengan sangat cepat." }
    ]
  },
  {
    id: 151,
    title: "51. Frasa Nomina Pembendaan: ……的 (De-Phrase)",
    category: "Partikel Aspek & Tiga 'De'",
    formula: "Kata Sifat / Frasa Kerja + 的 (menggantikan kata benda)",
    desc: "Menghilangkan kata benda di belakang 的 ketika konteks sudah jelas ('Yang berwarna merah', 'Yang dibeli kemarin').",
    contoh: [
      { hz: "这件红的是我的，那件白的是姐姐的。", py: "Zhè jiàn hóng de shì wǒ de, nà jiàn bái de shì jiějie de.", id: "Yang merah ini punyaku, yang putih itu milik kakak perempuan." },
      { hz: "买新的还是买旧的？", py: "Mǎi xīn de háishi mǎi jiù de?", id: "Membeli yang baru atau membeli yang bekas?" }
    ]
  },
  {
    id: 152,
    title: "52. Partikel Saran & Pelunak Nada: 吧 (Ba)",
    category: "Partikel Aspek & Tiga 'De'",
    formula: "Kalimat Ajakan / Tebakan + 吧",
    desc: "Digunakan di akhir kalimat untuk mengajak secara santun ('Mari/ayo...'), atau mengonfirmasi dugaan yang hampir pasti ('...kan?').",
    contoh: [
      { hz: "时间不早了，我们走吧。", py: "Shíjiān bù zǎo le, wǒmen zǒu ba.", id: "Sudah tidak pagi lagi, mari kita berangkat yuk." },
      { hz: "你就是新来的王老师吧？", py: "Nǐ jiù shì xīn lái de Wáng lǎoshī ba?", id: "Kamu pasti Pak Guru Wang yang baru datang kan?" }
    ]
  },

  // 8. PELENGKAP KALIMAT (补语 - COMPLEMENTS)
  {
    id: 153,
    title: "53. Pelengkap Hasil Selesai: V + 完 (Wán)",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Kata Kerja + 完 (+ Objek) + 了",
    desc: "Menunjukkan tindakan telah selesai tuntas tanpa sisa ('Selesai melakukan...').",
    contoh: [
      { hz: "今天的作业我已经做完了。", py: "Jīntiān de zuòyè wǒ yǐjīng zuò wán le.", id: "Tugas hari ini sudah selesai saya kerjakan." },
      { hz: "这本书你读完了吗？", py: "Zhè běn shū nǐ dú wán le ma?", id: "Apakah buku ini sudah selesai kamu baca?" }
    ]
  },
  {
    id: 154,
    title: "54. Pelengkap Hasil Sempurna: V + 好 (Hǎo)",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Kata Kerja + 好 (+ 了)",
    desc: "Menunjukkan tindakan selesai dengan kualitas baik, memuaskan, atau siap dipakai ('Selesai dengan baik / Sudah beres').",
    contoh: [
      { hz: "晚饭妈妈已经做好了。", py: "Wǎnfàn māma yǐjīng zuò hǎo le.", id: "Makan malam sudah selesai dimasak dengan baik oleh ibu." },
      { hz: "旅行的东西我都准备好了。", py: "Lǚxíng de dōngxi wǒ dōu zhǔnbèi hǎo le.", id: "Barang-barang untuk wisata sudah siap semua saya persiapkan." }
    ]
  },
  {
    id: 155,
    title: "55. Pelengkap Hasil Paham / Tepat: V + 懂 / 错",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "听 / 看 + 懂 (paham) vs 做 / 说 + 错 (salah)",
    desc: "Pelengkap hasil persepsi kognitif: 听懂 (mendengar dan paham), 看懂 (membaca dan paham), 说错 (salah bicara).",
    contoh: [
      { hz: "这个语法点你听懂了吗？", py: "Zhège yǔfǎ diǎn nǐ tīngdǒng le ma?", id: "Apakah poin tata bahasa ini sudah kamu pahami dari mendengar penjelasan?" },
      { hz: "对不起，我记错你的名字了。", py: "Duìbuqǐ, wǒ jì cuò nǐ de míngzi le.", id: "Maaf, saya salah mengingat namamu." }
    ]
  },
  {
    id: 156,
    title: "56. Pelengkap Hasil Tercapai: V + 到 / 见",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Kata Kerja + 到 / 见 (+ Objek)",
    desc: "Menunjukkan tujuan aksi tercapai atau tertangkap panca indra: 买到 (berhasil membeli), 找到 (menemukan), 看见 (melihat).",
    contoh: [
      { hz: "我终于买到了回家的车票。", py: "Wǒ zhōngyú mǎi dào le huí jiā de chēpiào.", id: "Saya akhirnya berhasil membeli tiket pulang ke rumah." },
      { hz: "你看见我的钥匙了吗？", py: "Nǐ kànjiàn wǒ de yàoshi le ma?", id: "Apakah kamu melihat kunci saya?" }
    ]
  },
  {
    id: 157,
    title: "57. Pelengkap Arah Sederhana: V + 来 / 去",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Kata Kerja + 来 (ke arah penutur) / 去 (menjauhi penutur)",
    desc: "Menunjukkan arah fisik gerakan: 进来 (masuk ke sini), 出去 (keluar ke sana), 回来 (pulang kembali ke sini).",
    contoh: [
      { hz: "外边冷，快进来吧。", py: "Wàibiān lěng, kuài jìnlái ba.", id: "Di luar dingin, cepatlah masuk ke dalam sini." },
      { hz: "他已经跑出去了。", py: "Tā yǐjīng pǎo chūqù le.", id: "Dia sudah berlari keluar ke sana." }
    ]
  },
  {
    id: 158,
    title: "58. Pelengkap Arah Majemuk: V + 起来 / 出来 / 下去",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Kata Kerja + 起来 (gerakan bangkit / mulai) | 出来 (muncul)",
    desc: "Menyatakan gerakan gabungan arah atau awal dimulainya aksi: 站起来 (berdiri tegak), 唱起来 (mulai bernyanyi).",
    contoh: [
      { hz: "请大家站起来。", py: "Qǐng dàjiā zhàn qǐlai.", id: "Silakan hadirin sekalian berdiri." },
      { hz: "你能看出来这是什么字吗？", py: "Nǐ néng kàn chūlái zhè shì shénme zì ma?", id: "Apakah kamu bisa mengenali/melihat keluar ini karakter apa?" }
    ]
  },
  {
    id: 159,
    title: "59. Pelengkap Durasi Waktu: S + V + Durasi Waktu",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Subjek + Kata Kerja + (了) + Durasi Waktu (+ 的 + Objek)",
    desc: "Menyatakan berapa lama suatu kegiatan berlangsung ('Selama ... jam / hari / tahun').",
    contoh: [
      { hz: "我学了一年汉语。", py: "Wǒ xué le yì nián Hànyǔ.", id: "Saya telah belajar bahasa Mandarin selama satu tahun." },
      { hz: "昨天晚上他睡了八个小时。", py: "Zuótiān wǎnshang tā shuì le bā ge xiǎoshí.", id: "Tadi malam dia tidur selama delapan jam." }
    ]
  },
  {
    id: 160,
    title: "60. Pelengkap Frekuensi: V + Angka + 次 / 遍",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Kata Kerja + (过) + Angka + 次 (cì) / 遍 (biàn)",
    desc: "Menunjukkan berapa kali suatu perbuatan berulang: 次 (kali umum), 遍 (kali dari awal sampai tuntas).",
    contoh: [
      { hz: "这部中国电影我看过三次。", py: "Zhè bù Zhōngguó diànyǐng wǒ kàn guo sān cì.", id: "Film Tiongkok ini pernah saya tonton tiga kali." },
      { hz: "请把生词读两遍。", py: "Qǐng bǎ shēngcí dú liǎng biàn.", id: "Silakan baca kosakata baru ini sebanyak dua kali (dari awal sampai selesai)." }
    ]
  },

  // 9. KALIMAT MAJEMUK & LOGIKA (复句连接词)
  {
    id: 161,
    title: "61. Kausalitas Sebab-Akibat: 因为...所以... (Yīnwèi... suǒyǐ...)",
    category: "Kalimat Majemuk & Logika",
    formula: "因为 + Sebab / Alasan, 所以 + Akibat / Hasil",
    desc: "Menghubungkan dua klausa sebab-akibat ('Karena... oleh sebab itu...').",
    contoh: [
      { hz: "因为今天下大雨，所以我们没去踢足球。", py: "Yīnwèi jīntiān xià dàyǔ, suǒyǐ wǒmen méi qù tī zúqiú.", id: "Karena hari ini hujan lebat, oleh sebab itu kami tidak pergi main sepak bola." },
      { hz: "因为他天天努力学习，所以考试成绩很好。", py: "Yīnwèi tā tiāntiān nǔlì xuéxí, suǒyǐ kǎoshì chéngjì hěn hǎo.", id: "Karena dia setiap hari rajin belajar, nilai ujiannya sangat memuaskan." }
    ]
  },
  {
    id: 162,
    title: "62. Pertentangan Konsesif: 虽然...但是... (Suīrán... dànshì...)",
    category: "Kalimat Majemuk & Logika",
    formula: "虽然 + Pernyataan Mengalah, 但是 + Pernyataan Utama",
    desc: "Menyatakan kontras atau pertentangan konsesif ('Meskipun / Walaupun... tetapi...').",
    contoh: [
      { hz: "虽然汉语汉字很多，但是很有意思。", py: "Suīrán Hànyǔ Hànzì hěn duō, dànshì hěn yǒu yìsi.", id: "Meskipun karakter Hanzi sangat banyak, tetapi sangat menarik." },
      { hz: "虽然外面很冷，但是房间里很暖和。", py: "Suīrán wàimiàn hěn lěng, dànshì fángjiān lǐ hěn nuǎnhuo.", id: "Meskipun di luar sangat dingin, tetapi di dalam kamar sangat hangat." }
    ]
  },
  {
    id: 163,
    title: "63. Kalimat Pengandaian: 如果 / 要是...就... (Rúguǒ... jiù...)",
    category: "Kalimat Majemuk & Logika",
    formula: "如果 / 要是 + Syarat Pengandaian, (Subjek) + 就 + Konsekuensi",
    desc: "Menyatakan syarat hipotetis dan hasil yang menyertainya ('Jika / Seandainya... maka...').",
    contoh: [
      { hz: "如果明天下雨，我们就不去爬山了。", py: "Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù páshān le.", id: "Jika besok turun hujan, maka kita tidak akan pergi mendaki gunung." },
      { hz: "要是你觉得累，就早点休息吧。", py: "Yàoshi nǐ juéde lèi, jiù zǎodiǎn xiūxi ba.", id: "Seandainya kamu merasa lelah, istirahatlah lebih awal." }
    ]
  },
  {
    id: 164,
    title: "64. Dua Sifat Sekaligus: 又... 又... (Yòu... yòu...)",
    category: "Kalimat Majemuk & Logika",
    formula: "Subjek + 又 + Sifat / Aksi 1 + 又 + Sifat / Aksi 2",
    desc: "Menyatakan dua karakteristik atau kondisi yang sama-sama hadir sekaligus ('Sekaligus... dan juga... / Baik... maupun...').",
    contoh: [
      { hz: "这里的苹果又大又甜。", py: "Zhèlǐ de píngguǒ yòu dà yòu tián.", id: "Apel di sini sekaligus besar dan juga manis." },
      { hz: "这件毛衣又好看又便宜。", py: "Zhè jiàn máoyī yòu hǎokàn yòu piányi.", id: "Baju hangat ini sekaligus bagus dan juga murah." }
    ]
  },
  {
    id: 165,
    title: "65. Begitu Terjadi Langsung: 一... 就... (Yī... jiù...)",
    category: "Kalimat Majemuk & Logika",
    formula: "Subjek + 一 + Aksi 1 + 就 + Aksi 2",
    desc: "Menyatakan aksi kedua langsung menyusul seketika aksi pertama tuntas ('Begitu... langsung...').",
    contoh: [
      { hz: "他一回家就做作业。", py: "Tā yì huí jiā jiù zuò zuòyè.", id: "Dia begitu sampai di rumah langsung mengerjakan tugas." },
      { hz: "我一听这首歌就想到了我的朋友。", py: "Wǒ yì tīng zhè shǒu gē jiù xiǎngdào le wǒ de péngyou.", id: "Saya begitu mendengar lagu ini langsung teringat teman saya." }
    ]
  },
  {
    id: 166,
    title: "66. Pilihan: 或者 (Huòzhě) vs 还是 (Háishi)",
    category: "Kalimat Majemuk & Logika",
    formula: "Pernyataan: A 或者 B | Pertanyaan: A 还是 B？",
    desc: "Kaidah krusial HSK 2: 或者 hanya dipakai pada kalimat berita/pernyataan ('atau'), sedangkan 还是 dipakai pada kalimat tanya.",
    contoh: [
      { hz: "你喝茶还是喝咖啡？", py: "Nǐ hē chá háishi hē kāfēi?", id: "Apakah kamu minum teh atau kopi? (Kalimat tanya)" },
      { hz: "星期六或者星期日我都有空。", py: "Xīngqīliù huòzhě xīngqīrì wǒ dōu yǒu kòng.", id: "Hari Sabtu atau Minggu saya selalu ada waktu luang. (Pernyataan)" }
    ]
  },

  // 10. POLA KHUSUS & KOMUNIKASI (特殊句式与实用表达)
  {
    id: 167,
    title: "67. Kalimat Penugasan / Meminta: 让 / 叫 / 请 (Ràng / Jiào / Qǐng)",
    category: "Pola Khusus & Komunikasi",
    formula: "Subjek + 让 / 叫 / 请 + Orang + Kata Kerja",
    desc: "Kalimat berpredikat ganda (兼语句) untuk menyuruh (让/叫) atau memohon secara sopan (请) orang lain berbuat sesuatu.",
    contoh: [
      { hz: "妈妈让我去买两斤苹果。", py: "Māma ràng wǒ qù mǎi liǎng jīn píngguǒ.", id: "Ibu menyuruh saya pergi membeli satu kilogram apel." },
      { hz: "老师请大家回答这个问题。", py: "Lǎoshī qǐng dàjiā huídá zhège wèntí.", id: "Guru meminta hadirin sekalian menjawab pertanyaan ini." }
    ]
  },
  {
    id: 168,
    title: "68. Larangan & Peringatan: 别 (Bié) / 不要 (Bú yào)",
    category: "Pola Khusus & Komunikasi",
    formula: "别 / 不要 + Kata Kerja (+ 了)",
    desc: "Digunakan untuk melarang atau memperingatkan seseorang agar tidak melakukan suatu hal ('Jangan / Dilarang...').",
    contoh: [
      { hz: "别说话，图书馆里要安静。", py: "Bié shuōhuà, túshūguǎn lǐ yào ānjìng.", id: "Jangan berbicara, di dalam perpustakaan harus tenang." },
      { hz: "上班不要迟到了。", py: "Shàngbān bú yào chídào le.", id: "Berangkat kerja jangan terlambat lagi." }
    ]
  },
  {
    id: 169,
    title: "69. Penekanan Kejadian Lampau: 是……的 (Shì... de)",
    category: "Pola Khusus & Komunikasi",
    formula: "Subjek + 是 + [Waktu / Tempat / Cara / Pelaku] + Kata Kerja + 的",
    desc: "Digunakan bila tindakan SUDAH PASTI terjadi di masa lampau, dan penutur ingin MENITIKBERATKAN rincian waktu, lokasi, atau caranya.",
    contoh: [
      { hz: "我是坐飞机来北京的。", py: "Wǒ shì zuò fēijī lái Běijīng de.", id: "Saya datang ke Beijing adalah dengan NAIK PESAWAT (penekanan cara)." },
      { hz: "这本书是他昨天买的。", py: "Zhè běn shū shì tā zuótiān mǎi de.", id: "Buku ini adalah dibeli KEMARIN oleh dia (penekanan waktu)." }
    ]
  },
  {
    id: 170,
    title: "70. Perkiraan Kuantitas: 多 (Duō) & 几 (Jǐ)",
    category: "Pola Khusus & Komunikasi",
    formula: "Angka puluhan + 多 + Satuan | 几 + Satuan + Benda",
    desc: "Menyatakan estimasi taksiran jumlah yang tidak pasti: 十多个人 (sepuluh orang lebih), 三十多岁 (tiga puluh tahun lebih), 几个星期 (beberapa minggu).",
    contoh: [
      { hz: "他学汉语学了三年多了。", py: "Tā xué Hànyǔ xué le sān nián duō le.", id: "Dia belajar bahasa Mandarin sudah tiga tahun lebih." },
      { hz: "桌子上有几本书。", py: "Zhuōzi shàng yǒu jǐ běn shū.", id: "Di atas meja ada beberapa buku." }
    ]
  },
  {
    id: 171,
    title: "71. Pertanyaan Konfirmasi: 是不是 (Shì bu shì) & V-不-V",
    category: "Pola Khusus & Komunikasi",
    formula: "Subjek + 是不是 + Predikat？ | Kata Kerja + 不 + Kata Kerja？",
    desc: "Pola pertanyaan afirmatif-negatif untuk meminta kejelasan atau konfirmasi ('Apakah benar...', 'Mau atau tidak...').",
    contoh: [
      { hz: "你是不是中国人？", py: "Nǐ shì bu shì Zhōngguó rén?", id: "Apakah kamu orang Tiongkok?" },
      { hz: "明天的电影你想不想看？", py: "Míngtiān de diànyǐng nǐ xiǎng bu xiǎng kàn?", id: "Film besok apakah kamu ingin nonton atau tidak?" }
    ]
  },
  {
    id: 172,
    title: "72. Kata Satuan Khusus HSK 2: 件 (Jiàn), 条 (Tiáo), 张 (Zhāng), 辆 (Liàng)",
    category: "Pola Khusus & Komunikasi",
    formula: "Angka + 件 / 条 / 张 / 辆 + Kata Benda",
    desc: "Kata bantu bilangan penting HSK 2: 件 (pakaian/urusan), 条 (celana/jalan/ikan), 张 (kertas/tiket/meja), 辆 (kendaraan bermobil/bersepeda).",
    contoh: [
      { hz: "我想买一件新衬衫和一条裤子。", py: "Wǒ xiǎng mǎi yí jiàn xīn chènshān hé yì tiáo kùzi.", id: "Saya ingin membeli sehelai kemeja baru dan sehelai celana panjang." },
      { hz: "请给我一张去上海的高铁票。", py: "Qǐng gěi wǒ yì zhāng qù Shànghǎi de gāotiě piào.", id: "Tolong beri saya selembar tiket kereta cepat ke Shanghai." }
    ]
  }
];

export default HSK2_GRAMMAR;
