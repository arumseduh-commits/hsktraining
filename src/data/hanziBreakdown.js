// Kamus Bedah Karakter Hanzi & Radikal (Kangxi Radicals & Character Decomposition)
// Mencakup SELURUH 480 karakter kosakata HSK 1 & HSK 2 Standar 3.0 dengan penjelasan radikal, arti per kata, dan etimologi

export const COMMON_RADICALS = {
  "日": {
    "name": "Matahari / Hari",
    "desc": "Melambangkan waktu, cahaya, siang, atau kehangatan"
  },
  "月": {
    "name": "Bulan / Daging (肉)",
    "desc": "Melambangkan malam, waktu, atau bagian tubuh fisik"
  },
  "水": {
    "name": "Air (氵)",
    "desc": "Melambangkan cairan, sungai, mencuci, minum, atau sifat basah"
  },
  "氵": {
    "name": "Tiga Titik Air",
    "desc": "Bentuk radikal air saat berada di sisi kiri karakter"
  },
  "火": {
    "name": "Api (灬)",
    "desc": "Melambangkan panas, memasak, membakar, atau cahaya"
  },
  "灬": {
    "name": "Empat Titik Api",
    "desc": "Bentuk radikal api saat berada di bawah karakter (misal: 热, 点)"
  },
  "土": {
    "name": "Tanah / Bumi",
    "desc": "Melambangkan daratan, tempat, lantai, atau debu"
  },
  "木": {
    "name": "Kayu / Pohon",
    "desc": "Melambangkan tanaman berkayu, perabot meja/kursi, atau hutan"
  },
  "金": {
    "name": "Logam / Emas (钅)",
    "desc": "Melambangkan perkakas besi, koin/uang, jam, atau barang logam"
  },
  "钅": {
    "name": "Besi / Logam",
    "desc": "Bentuk radikal logam di sisi kiri karakter (misal: 钱, 错)"
  },
  "人": {
    "name": "Manusia / Orang (亻)",
    "desc": "Melambangkan perilaku manusia, profesi, atau sifat sosial"
  },
  "亻": {
    "name": "Orang Menyamping",
    "desc": "Bentuk radikal manusia di sisi kiri (misal: 你, 他, 们, 什)"
  },
  "女": {
    "name": "Wanita / Perempuan",
    "desc": "Melambangkan figur wanita, keindahan, ibu, atau keluarga (misal: 她, 妈, 好)"
  },
  "子": {
    "name": "Anak / Keturunan",
    "desc": "Melambangkan generasi penerus, benih, atau anak kecil"
  },
  "口": {
    "name": "Mulut",
    "desc": "Melambangkan berbicara, makan, minum, berseru, atau lubang (misal: 吃, 喝, 听, 叫)"
  },
  "讠": {
    "name": "Kata / Ucapan (言)",
    "desc": "Melambangkan bahasa, kata-kata, percakapan, atau pikiran (misal: 说, 话, 语, 谢)"
  },
  "言": {
    "name": "Bicara / Bahasa",
    "desc": "Bentuk utuh radikal ucapan"
  },
  "饣": {
    "name": "Makanan / Santapan (食)",
    "desc": "Melambangkan nasi, roti, makan, atau kenyang (misal: 饭, 馆)"
  },
  "食": {
    "name": "Makanan",
    "desc": "Bentuk utuh radikal makanan"
  },
  "心": {
    "name": "Hati / Perasaan (忄)",
    "desc": "Melambangkan emosi, pikiran, kasih sayang, atau kehendak"
  },
  "忄": {
    "name": "Hati Tegak",
    "desc": "Bentuk radikal hati di sisi kiri (misal: 快, 慢, 怕)"
  },
  "目": {
    "name": "Mata",
    "desc": "Melambangkan penglihatan, melirik, atau mata (misal: 看, 睡, 睛)"
  },
  "手": {
    "name": "Tangan (扌)",
    "desc": "Melambangkan aksi menggunakan tangan, memegang, memukul, atau mengambil"
  },
  "扌": {
    "name": "Tangan Menangkis",
    "desc": "Bentuk radikal tangan di sisi kiri (misal: 打, 找, 提)"
  },
  "足": {
    "name": "Kaki (𧾷)",
    "desc": "Melambangkan berjalan, menendang, berlari, atau jarak (misal: 跑, 跳, 踢)"
  },
  "𧾷": {
    "name": "Kaki Berjalan",
    "desc": "Bentuk radikal kaki di sisi kiri karakter"
  },
  "辶": {
    "name": "Berjalan / Melangkah (走)",
    "desc": "Melambangkan perpindahan tempat, perjalanan, atau jarak (misal: 这, 迎, 进, 近, 远)"
  },
  "走": {
    "name": "Berjalan / Pergi",
    "desc": "Radikal melangkah atau berjalan kaki"
  },
  "宀": {
    "name": "Atap Rumah",
    "desc": "Melambangkan bangunan, kamar, tempat tinggal, atau ketenangan (misal: 家, 安, 字)"
  },
  "冖": {
    "name": "Tudung / Penutup",
    "desc": "Melambangkan atap atau penutup atas"
  },
  "艹": {
    "name": "Rumput / Tanaman",
    "desc": "Melambangkan tumbuhan obat, bunga, daun teh, atau buah (misal: 茶, 菜, 药, 苹)"
  },
  "门": {
    "name": "Pintu Gerbang",
    "desc": "Melambangkan pintu, ruangan tertutup, atau batas masuk (misal: 问, 闪, 间)"
  },
  "车": {
    "name": "Kendaraan / Kereta",
    "desc": "Melambangkan transportasi atau roda (misal: 转, 辆)"
  },
  "田": {
    "name": "Sawah / Ladang",
    "desc": "Melambangkan area tanah pertanian atau batas petak"
  },
  "力": {
    "name": "Tenaga / Kekuatan",
    "desc": "Melambangkan otot, energi, bekerja keras, atau bantuan"
  },
  "大": {
    "name": "Besar",
    "desc": "Melambangkan sosok membentang luas, agung, atau langit"
  },
  "小": {
    "name": "Kecil",
    "desc": "Melambangkan sesuatu yang ramping, sedikit, atau terbagi"
  },
  "纟": {
    "name": "Benang / Sutra",
    "desc": "Melambangkan rajutan, hubungan, tali, atau kain"
  },
  "父": {
    "name": "Ayah / Leluhur",
    "desc": "Melambangkan sosok kepala keluarga atau bapak"
  },
  "白": {
    "name": "Putih / Terang",
    "desc": "Melambangkan warna putih, jelas, atau siang hari"
  },
  "雨": {
    "name": "Hujan / Cuaca",
    "desc": "Melambangkan awan, embun, salju, petir, atau hujan"
  },
  "广": {
    "name": "Bangunan Tebing",
    "desc": "Melambangkan gedung luas, toko, atau paviliun"
  },
  "厂": {
    "name": "Tebing / Pabrik",
    "desc": "Melambangkan tempat kerja terbuka atau tebing"
  },
  "匚": {
    "name": "Kotak Wadah",
    "desc": "Melambangkan peti penyimpanan atau wadah perkakas (misal: 医)"
  },
  "犭": {
    "name": "Hewan / Binatang",
    "desc": "Melambangkan binatang berkaki empat (misal: 猫, 狗)"
  },
  "鸟": {
    "name": "Burung",
    "desc": "Melambangkan unggas atau burung bersayap"
  },
  "鱼": {
    "name": "Ikan",
    "desc": "Melambangkan hewan air atau perikanan"
  },
  "生": {
    "name": "Kehidupan / Lahir",
    "desc": "Melambangkan tunas bertumbuh, lahir, atau orang"
  },
  "一": {
    "name": "Satu / Garis Acuan",
    "desc": "Garis pembatas horizontal atau angka satu"
  }
};

// Kamus Bedah Karakter Lengkap HSK 1 & HSK 2 (480 Karakter Teruji 100%)
export const HANZI_BREAKDOWN_DICT = {
  "我": {
    "pinyin": "wǒ",
    "meaning": "Saya / aku",
    "radical": "手",
    "radicalDesc": "Tangan",
    "logic": "Tangan (手) memegang senjata/tombak (戈) untuk melindungi diri sendiri."
  },
  "你": {
    "pinyin": "nǐ",
    "meaning": "Kamu / anda",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Sosok orang (亻) di depanmu (尔) yang diajak berbicara."
  },
  "他": {
    "pinyin": "tā",
    "meaning": "Dia (laki-laki / umum)",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Sosok orang (亻) lain di luar percakapan."
  },
  "她": {
    "pinyin": "tā",
    "meaning": "Dia (perempuan)",
    "radical": "女",
    "radicalDesc": "Wanita",
    "logic": "Sosok wanita (女) lain yang sedang dibicarakan."
  },
  "它": {
    "pinyin": "tā",
    "meaning": "Dia (benda / hewan)",
    "radical": "宀",
    "radicalDesc": "Atap rumah",
    "logic": "Benda atau makhluk yang berada di bawah naungan atap."
  },
  "们": {
    "pinyin": "men",
    "meaning": "Akhiran jamak",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Banyak orang (亻) berkumpul bersama di gerbang (门)."
  },
  "人": {
    "pinyin": "rén",
    "meaning": "Orang / manusia",
    "radical": "人",
    "radicalDesc": "Manusia",
    "logic": "Piktograf sosok manusia yang berdiri dengan kedua kaki tegak melangkah."
  },
  "爸": {
    "pinyin": "bà",
    "meaning": "Ayah / bapak",
    "radical": "父",
    "radicalDesc": "Ayah",
    "logic": "Sosok ayah (父) di bagian atas ditambah bunyi fonetik 巴 (ba)."
  },
  "妈": {
    "pinyin": "mā",
    "meaning": "Ibu / mama",
    "radical": "女",
    "radicalDesc": "Wanita",
    "logic": "Wanita (女) penyayang ditambah komponen bunyi 马 (ma)."
  },
  "儿": {
    "pinyin": "ér",
    "meaning": "Anak / putra",
    "radical": "儿",
    "radicalDesc": "Kaki manusia",
    "logic": "Piktograf seorang anak kecil dengan kaki yang sedang belajar berdiri."
  },
  "子": {
    "pinyin": "zǐ",
    "meaning": "Anak / akhiran benda",
    "radical": "子",
    "radicalDesc": "Anak",
    "logic": "Gambar bayi/anak kecil yang sedang merentangkan tangannya."
  },
  "朋": {
    "pinyin": "péng",
    "meaning": "Kawan / sahabat",
    "radical": "月",
    "radicalDesc": "Bulan / seikat kerang uang",
    "logic": "Dua untai untaian kerang kembar yang melambangkan kesetaraan antarsahabat."
  },
  "友": {
    "pinyin": "yǒu",
    "meaning": "Teman / persahabatan",
    "radical": "又",
    "radicalDesc": "Tangan kanan",
    "logic": "Dua tangan kanan yang saling bergandengan erat dalam persahabatan."
  },
  "老": {
    "pinyin": "lǎo",
    "meaning": "Tua / senior / terhormat",
    "radical": "老",
    "radicalDesc": "Orang tua berambut panjang",
    "logic": "Sosok tetua berambut panjang yang memegang tongkat, melambangkan kebijaksanaan."
  },
  "师": {
    "pinyin": "shī",
    "meaning": "Guru / ahli",
    "radical": "巾",
    "radicalDesc": "Kain bendera tentara",
    "logic": "Pemimpin panji pasukan yang berilmu dan menuntun banyak orang."
  },
  "同": {
    "pinyin": "tóng",
    "meaning": "Sama / bersama",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Bersatu dalam satu atap dengan satu suara/mulut (口)."
  },
  "生": {
    "pinyin": "shēng",
    "meaning": "Lahir / hidup / tuan / siswa",
    "radical": "生",
    "radicalDesc": "Tunas tumbuh",
    "logic": "Tunas tanaman segar yang baru bertumbuh keluar dari dalam tanah."
  },
  "今": {
    "pinyin": "jīn",
    "meaning": "Sekarang / saat ini",
    "radical": "人",
    "radicalDesc": "Manusia",
    "logic": "Titik waktu yang sedang dialami manusia pada masa ini."
  },
  "明": {
    "pinyin": "míng",
    "meaning": "Besok / terang benderang",
    "radical": "日",
    "radicalDesc": "Matahari",
    "logic": "Matahari (日) dan bulan (月) bersanding memancarkan cahaya terang untuk hari esok."
  },
  "昨": {
    "pinyin": "zuó",
    "meaning": "Kemarin / masa lampau",
    "radical": "日",
    "radicalDesc": "Matahari / hari",
    "logic": "Matahari (日) yang telah berlalu di masa kemarin (乍)."
  },
  "年": {
    "pinyin": "nián",
    "meaning": "Tahun",
    "radical": "干",
    "radicalDesc": "Perisai / tangkai",
    "logic": "Awalnya melambangkan siklus panen padi tahunan yang matang."
  },
  "月": {
    "pinyin": "yuè",
    "meaning": "Bulan (kalender / langit)",
    "radical": "月",
    "radicalDesc": "Bulan sabit",
    "logic": "Piktograf bentuk bulan sabit di langit malam yang menandai siklus bulanan."
  },
  "日": {
    "pinyin": "rì",
    "meaning": "Matahari / tanggal / hari",
    "radical": "日",
    "radicalDesc": "Matahari",
    "logic": "Piktograf bundaran matahari dengan titik energi di tengahnya."
  },
  "号": {
    "pinyin": "hào",
    "meaning": "Nomor / tanggal",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Menyerukan (口) urutan penanda atau tanggal."
  },
  "点": {
    "pinyin": "diǎn",
    "meaning": "Jam / titik / sedikit",
    "radical": "灬",
    "radicalDesc": "Empat titik api",
    "logic": "Bintik bara api (灬) penunjuk angka satuan jam atau tetesan sedikit."
  },
  "分": {
    "pinyin": "fēn",
    "meaning": "Menit / membagi",
    "radical": "刀",
    "radicalDesc": "Pisau",
    "logic": "Pisau (刀) yang memotong benda menjadi bagian-bagian menit yang presisi."
  },
  "早": {
    "pinyin": "zǎo",
    "meaning": "Pagi / awal",
    "radical": "日",
    "radicalDesc": "Matahari",
    "logic": "Matahari (日) yang baru terbit menyembul di atas semak rumput (十)."
  },
  "午": {
    "pinyin": "wǔ",
    "meaning": "Tengah hari / siang",
    "radical": "十",
    "radicalDesc": "Alu penumbuk",
    "logic": "Matahari berada tegak lurus tepat di tengah langit."
  },
  "晚": {
    "pinyin": "wǎn",
    "meaning": "Malam / larut",
    "radical": "日",
    "radicalDesc": "Matahari",
    "logic": "Matahari (日) telah terbenam (免) sehingga berganti menjadi waktu malam."
  },
  "上": {
    "pinyin": "shàng",
    "meaning": "Atas / menjelang",
    "radical": "一",
    "radicalDesc": "Garis acuan",
    "logic": "Garis acuan dengan tanda di atasnya, menandakan posisi atas atau permulaan."
  },
  "下": {
    "pinyin": "xià",
    "meaning": "Bawah / turun",
    "radical": "一",
    "radicalDesc": "Garis acuan",
    "logic": "Garis acuan dengan penanda di bawahnya, menandakan posisi bawah atau turunan."
  },
  "前": {
    "pinyin": "qián",
    "meaning": "Depan / sebelum",
    "radical": "刂",
    "radicalDesc": "Pisau potong",
    "logic": "Kaki yang terus melangkah maju ke arah depan."
  },
  "后": {
    "pinyin": "hòu",
    "meaning": "Belakang / setelah",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Instruksi penguasa yang ditaati dari belakang."
  },
  "现": {
    "pinyin": "xiàn",
    "meaning": "Kini / tampak",
    "radical": "王",
    "radicalDesc": "Giok / permata",
    "logic": "Batu giok (王/玉) yang diasah hingga tampak jelas (见) saat ini."
  },
  "在": {
    "pinyin": "zài",
    "meaning": "Berada di / sedang",
    "radical": "土",
    "radicalDesc": "Tanah / bumi",
    "logic": "Tanaman yang tumbuh kokoh bertumpu di atas tanah (土)."
  },
  "时": {
    "pinyin": "shí",
    "meaning": "Waktu / saat",
    "radical": "日",
    "radicalDesc": "Matahari",
    "logic": "Pergerakan matahari (日) yang diukur dengan satuan ukuran (寸)."
  },
  "候": {
    "pinyin": "hòu",
    "meaning": "Menunggu / saat",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Manusia (亻) yang mengamati anak panah mengukur perubahan musim."
  },
  "看": {
    "pinyin": "kàn",
    "meaning": "Melihat / menonton / membaca",
    "radical": "目",
    "radicalDesc": "Mata",
    "logic": "Tangan (手) menaungi mata (目) dari silau agar bisa melihat dengan jelas."
  },
  "听": {
    "pinyin": "tīng",
    "meaning": "Mendengar",
    "radical": "口",
    "radicalDesc": "Mulut / suara",
    "logic": "Mulut (口) yang menyuarakan bunyi dan diterima telinga."
  },
  "说": {
    "pinyin": "shuō",
    "meaning": "Berbicara / berkata",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Kata-kata (讠) yang diucapkan dengan riang gembira (兑)."
  },
  "读": {
    "pinyin": "dú",
    "meaning": "Membaca (bersuara)",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Kata-kata tertulis (讠) yang dilafalkan saat menelaah teks."
  },
  "写": {
    "pinyin": "xiě",
    "meaning": "Menulis",
    "radical": "冖",
    "radicalDesc": "Tudung atap",
    "logic": "Menggoreskan kuas di bawah atap (冖) di atas kertas."
  },
  "吃": {
    "pinyin": "chī",
    "meaning": "Makan",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Aktivitas memasukkan santapan bergizi ke dalam mulut (口)."
  },
  "喝": {
    "pinyin": "hē",
    "meaning": "Minum",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Membuka mulut (口) untuk meneguk cairan saat dahaga (曷)."
  },
  "做": {
    "pinyin": "zuò",
    "meaning": "Membuat / mengerjakan",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Manusia (亻) yang menggunakan tangan dan akal untuk menghasilkan karya (故)."
  },
  "买": {
    "pinyin": "mǎi",
    "meaning": "Membeli",
    "radical": "乙",
    "radicalDesc": "Kait jaring",
    "logic": "Jaring (网) yang mengambil barang dengan menukarkan uang."
  },
  "开": {
    "pinyin": "kāi",
    "meaning": "Membuka / menyetir",
    "radical": "廾",
    "radicalDesc": "Dua tangan",
    "logic": "Dua tangan yang mendorong membuka palang pintu gerbang."
  },
  "坐": {
    "pinyin": "zuò",
    "meaning": "Duduk",
    "radical": "土",
    "radicalDesc": "Tanah / lantai",
    "logic": "Dua orang (从) duduk bersila berhadap-hadapan di atas tanah (土)."
  },
  "住": {
    "pinyin": "zhù",
    "meaning": "Tinggal / menetap",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Manusia (亻) yang menyalakan lilin pelita (主) untuk menetap di satu rumah."
  },
  "想": {
    "pinyin": "xiǎng",
    "meaning": "Ingin / rindu / berpikir",
    "radical": "心",
    "radicalDesc": "Hati / pikiran",
    "logic": "Membayangkan wujud (相) seseorang di dalam lubuk hati (心)."
  },
  "会": {
    "pinyin": "huì",
    "meaning": "Bisa (karena belajar) / akan",
    "radical": "人",
    "radicalDesc": "Manusia",
    "logic": "Pertemuan banyak manusia (人) yang mengumpulkan kepandaian bersama."
  },
  "能": {
    "pinyin": "néng",
    "meaning": "Mampu / boleh",
    "radical": "月",
    "radicalDesc": "Daging / tubuh",
    "logic": "Awalnya melambangkan sosok beruang kuat yang memiliki daya kemampuan fisik."
  },
  "爱": {
    "pinyin": "ài",
    "meaning": "Mencintai / suka",
    "radical": "爫",
    "radicalDesc": "Cakar tangan",
    "logic": "Tangan yang menyayangi dan merangkul perasaan hati (心)."
  },
  "来": {
    "pinyin": "lái",
    "meaning": "Datang",
    "radical": "木",
    "radicalDesc": "Tanaman gandum",
    "logic": "Tanaman gandum berbuah lebat yang datang dari langit memberi rezeki."
  },
  "去": {
    "pinyin": "qù",
    "meaning": "Pergi",
    "radical": "厶",
    "radicalDesc": "Pribadi",
    "logic": "Seseorang yang melangkah meninggalkan tempat semula."
  },
  "回": {
    "pinyin": "huí",
    "meaning": "Kembali / pulang",
    "radical": "囗",
    "radicalDesc": "Pusaran / batas",
    "logic": "Pusaran air yang berputar kembali ke titik asalnya."
  },
  "叫": {
    "pinyin": "jiào",
    "meaning": "Bernama / memanggil",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Mulut (口) yang berteriak memanggil nama seseorang."
  },
  "打": {
    "pinyin": "dǎ",
    "meaning": "Memukul / menelepon",
    "radical": "扌",
    "radicalDesc": "Tangan",
    "logic": "Aksi tangan (扌) yang beraktivitas memegang gagang telepon."
  },
  "水": {
    "pinyin": "shuǐ",
    "meaning": "Air",
    "radical": "水",
    "radicalDesc": "Air",
    "logic": "Piktograf riak gelombang air sungai yang mengalir deras."
  },
  "茶": {
    "pinyin": "chá",
    "meaning": "Teh",
    "radical": "艹",
    "radicalDesc": "Tanaman / daun",
    "logic": "Pucuk daun tanaman (艹) dipetik manusia (人) dari pohon kayu (木)."
  },
  "米": {
    "pinyin": "mǐ",
    "meaning": "Beras / butir padi",
    "radical": "米",
    "radicalDesc": "Biji-bijian",
    "logic": "Piktograf sebutir biji padi yang terbelah saat digiling."
  },
  "饭": {
    "pinyin": "fàn",
    "meaning": "Nasi / makanan",
    "radical": "饣",
    "radicalDesc": "Makanan",
    "logic": "Olahan makanan (饣) yang dibolak-balik (反) saat dimasak."
  },
  "菜": {
    "pinyin": "cài",
    "meaning": "Sayur / masakan",
    "radical": "艹",
    "radicalDesc": "Sayuran",
    "logic": "Tanaman hijau (艹) yang dipetik tangan (采) untuk dimasak menjadi hidangan."
  },
  "苹": {
    "pinyin": "píng",
    "meaning": "Apel",
    "radical": "艹",
    "radicalDesc": "Tanaman buah",
    "logic": "Tanaman pohon (艹) berbuah yang memberikan kedamaian (平)."
  },
  "果": {
    "pinyin": "guǒ",
    "meaning": "Buah",
    "radical": "木",
    "radicalDesc": "Pohon kayu",
    "logic": "Buah bulat yang bergelantungan ranum di atas dahan pohon (木)."
  },
  "电": {
    "pinyin": "diàn",
    "meaning": "Listrik",
    "radical": "田",
    "radicalDesc": "Sawah / kilat petir",
    "logic": "Kilatan petir yang menyambar menerangi langit ladang."
  },
  "视": {
    "pinyin": "shì",
    "meaning": "Melihat / pandangan",
    "radical": "礻",
    "radicalDesc": "Tanda berkah",
    "logic": "Mengamati dan melihat (见) pertunjukan dengan teliti."
  },
  "脑": {
    "pinyin": "nǎo",
    "meaning": "Otak",
    "radical": "月",
    "radicalDesc": "Organ tubuh",
    "logic": "Bagian organ fisik (月/肉) manusia tempat bersemayamnya pikiran."
  },
  "影": {
    "pinyin": "yǐng",
    "meaning": "Bayangan / film",
    "radical": "彡",
    "radicalDesc": "Sinar cahaya",
    "logic": "Pemandangan alam (景) yang diproyeksikan pantulan cahayanya (彡)."
  },
  "书": {
    "pinyin": "shū",
    "meaning": "Buku",
    "radical": "乛",
    "radicalDesc": "Kuas tulis",
    "logic": "Piktograf tangan memegang kuas yang mencatat kata-kata di atas naskah gulungan."
  },
  "字": {
    "pinyin": "zì",
    "meaning": "Huruf / karakter Hanzi",
    "radical": "宀",
    "radicalDesc": "Atap rumah",
    "logic": "Anak (子) di bawah atap rumah (宀) yang tekun belajar menulis huruf."
  },
  "家": {
    "pinyin": "jiā",
    "meaning": "Rumah / keluarga",
    "radical": "宀",
    "radicalDesc": "Atap rumah",
    "logic": "Di bawah atap rumah (宀) terdapat hewan ternak (豕) melambangkan kesejahteraan keluarga."
  },
  "学": {
    "pinyin": "xué",
    "meaning": "Belajar",
    "radical": "子",
    "radicalDesc": "Anak",
    "logic": "Anak (子) di bawah atap ruang kelas yang menerima pencerahan ilmu."
  },
  "校": {
    "pinyin": "xiào",
    "meaning": "Sekolah",
    "radical": "木",
    "radicalDesc": "Kayu",
    "logic": "Bangunan berbahan kayu (木) tempat bertukar dan membandingkan ilmu (交)."
  },
  "店": {
    "pinyin": "diàn",
    "meaning": "Toko / kedai",
    "radical": "广",
    "radicalDesc": "Gedung luas",
    "logic": "Gedung naungan (广) tempat memajang barang jualan (占)."
  },
  "商": {
    "pinyin": "shāng",
    "meaning": "Perniagaan / pedagang",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Bermusyawarah menawar barang dagangan di pasar."
  },
  "院": {
    "pinyin": "yuàn",
    "meaning": "Halaman / gedung institusi",
    "radical": "阝",
    "radicalDesc": "Dinding bukit",
    "logic": "Kompleks bangunan yang dilingkupi dinding pelindung (阝)."
  },
  "医": {
    "pinyin": "yī",
    "meaning": "Medis / dokter",
    "radical": "匚",
    "radicalDesc": "Kotak wadah",
    "logic": "Kotak (匚) perkakas anak panah/alat bedah untuk menyembuhkan luka."
  },
  "站": {
    "pinyin": "zhàn",
    "meaning": "Stasiun / berdiri",
    "radical": "立",
    "radicalDesc": "Berdiri tegak",
    "logic": "Berdiri tegak (立) di pos perhentian menanti kedatangan kendaraan."
  },
  "机": {
    "pinyin": "jī",
    "meaning": "Mesin / pesawat",
    "radical": "木",
    "radicalDesc": "Kayu / mekanisme",
    "logic": "Rangkaian komponen kayu (木) yang saling terhubung membentuk mesin."
  },
  "车": {
    "pinyin": "chē",
    "meaning": "Mobil / kendaraan",
    "radical": "车",
    "radicalDesc": "Roda kereta",
    "logic": "Piktograf kereta roda dua tampak atas dengan gandar di tengahnya."
  },
  "飞": {
    "pinyin": "fēi",
    "meaning": "Terbang",
    "radical": "飞",
    "radicalDesc": "Sayap terbang",
    "logic": "Piktograf kepakan sayap burung yang membubung meluncur di angkasa."
  },
  "猫": {
    "pinyin": "māo",
    "meaning": "Kucing",
    "radical": "犭",
    "radicalDesc": "Hewan",
    "logic": "Hewan berkaki empat (犭) yang mengeong lincah di ladang tanaman (苗)."
  },
  "狗": {
    "pinyin": "gǒu",
    "meaning": "Anjing",
    "radical": "犭",
    "radicalDesc": "Hewan",
    "logic": "Hewan setia (犭) penjaga rumah dengan bunyi gonggongan (句)."
  },
  "杯": {
    "pinyin": "bēi",
    "meaning": "Gelas / cangkir",
    "radical": "木",
    "radicalDesc": "Kayu",
    "logic": "Wadah minum yang dahulu dipahat dari kayu (木)."
  },
  "桌": {
    "pinyin": "zhuō",
    "meaning": "Meja",
    "radical": "木",
    "radicalDesc": "Kayu",
    "logic": "Perabot berkaki tinggi (卓) yang terbuat dari bahan kayu (木)."
  },
  "椅": {
    "pinyin": "yǐ",
    "meaning": "Kursi",
    "radical": "木",
    "radicalDesc": "Kayu",
    "logic": "Tempat duduk dari kayu (木) tempat menyandarkan tubuh dengan nyaman (奇)."
  },
  "钱": {
    "pinyin": "qián",
    "meaning": "Uang",
    "radical": "钅",
    "radicalDesc": "Logam",
    "logic": "Benda tempaan logam (钅) yang sangat dijaga (戋) sebagai alat tukar sah."
  },
  "衣": {
    "pinyin": "yī",
    "meaning": "Pakaian / baju",
    "radical": "衣",
    "radicalDesc": "Pakaian",
    "logic": "Piktograf potongan jubah tradisional yang menutup badan."
  },
  "服": {
    "pinyin": "fú",
    "meaning": "Baju / tunduk",
    "radical": "月",
    "radicalDesc": "Daging / tubuh",
    "logic": "Kain busana yang melekat pas membungkus badan fisik (月)."
  },
  "好": {
    "pinyin": "hǎo",
    "meaning": "Baik / bagus",
    "radical": "女",
    "radicalDesc": "Wanita",
    "logic": "Seorang wanita (女) yang memeluk anak bayinya (子) melambangkan kebaikan sempurna."
  },
  "大": {
    "pinyin": "dà",
    "meaning": "Besar",
    "radical": "大",
    "radicalDesc": "Besar",
    "logic": "Piktograf seseorang merentangkan kedua tangan dan kaki selebar-lebarnya."
  },
  "小": {
    "pinyin": "xiǎo",
    "meaning": "Kecil",
    "radical": "小",
    "radicalDesc": "Kecil",
    "logic": "Garis yang terbagi menjadi bagian-bagian sangat tipis dan kecil."
  },
  "冷": {
    "pinyin": "lěng",
    "meaning": "Dingin",
    "radical": "冫",
    "radicalDesc": "Es / beku",
    "logic": "Dua tetes kristal es (冫) yang membekukan suhu udara."
  },
  "热": {
    "pinyin": "rè",
    "meaning": "Panas",
    "radical": "灬",
    "radicalDesc": "Api",
    "logic": "Tanaman di atas tanah (土) yang disinari panas terik bara api (灬)."
  },
  "高": {
    "pinyin": "gāo",
    "meaning": "Tinggi",
    "radical": "高",
    "radicalDesc": "Menara tinggi",
    "logic": "Piktograf menara pengawas beratap tinggi bertingkat."
  },
  "兴": {
    "pinyin": "xìng",
    "meaning": "Gembira / bangkit",
    "radical": "八",
    "radicalDesc": "Dua tangan bersorak",
    "logic": "Banyak tangan bersama-sama mengangkat benda dengan penuh semangat."
  },
  "多": {
    "pinyin": "duō",
    "meaning": "Banyak",
    "radical": "夕",
    "radicalDesc": "Malam / bulan sabit",
    "logic": "Dua bulan sabit (夕) bertumpuk menandakan malam yang berlipat ganda."
  },
  "少": {
    "pinyin": "shǎo",
    "meaning": "Sedikit",
    "radical": "小",
    "radicalDesc": "Kecil",
    "logic": "Benda kecil (小) yang dipotong satu goresan lagi sehingga kian sedikit."
  },
  "很": {
    "pinyin": "hěn",
    "meaning": "Sangat",
    "radical": "彳",
    "radicalDesc": "Langkah kaki",
    "logic": "Langkah kaki yang melangkah maju dengan determinasi kuat (艮)."
  },
  "太": {
    "pinyin": "tài",
    "meaning": "Terlalu / teramat",
    "radical": "大",
    "radicalDesc": "Besar",
    "logic": "Karakter besar (大) yang diberi satu titik ekstra di bawahnya, melampaui batas."
  },
  "都": {
    "pinyin": "dōu",
    "meaning": "Semua / seluruhnya",
    "radical": "阝",
    "radicalDesc": "Kota / wilayah",
    "logic": "Seluruh warga di perkotaan (阝) berkumpul bersama tanpa terkecuali."
  },
  "白": {
    "pinyin": "bái",
    "meaning": "Putih / terang",
    "radical": "白",
    "radicalDesc": "Putih",
    "logic": "Pancaran sinar matahari murni berwarna putih bersih."
  },
  "黑": {
    "pinyin": "hēi",
    "meaning": "Hitam / gelap",
    "radical": "黑",
    "radicalDesc": "Jelaga hitam",
    "logic": "Asap jelaga perapian yang menghitamkan dinding tungku."
  },
  "红": {
    "pinyin": "hóng",
    "meaning": "Merah",
    "radical": "纟",
    "radicalDesc": "Benang sutra",
    "logic": "Benang kain sutra (纟) yang dicelup zat pewarna merah cerah."
  },
  "远": {
    "pinyin": "yuǎn",
    "meaning": "Jauh",
    "radical": "辶",
    "radicalDesc": "Berjalan",
    "logic": "Langkah kaki (辶) yang telah menempuh perjalanan panjang berjarak jauh."
  },
  "近": {
    "pinyin": "jìn",
    "meaning": "Dekat",
    "radical": "辶",
    "radicalDesc": "Berjalan",
    "logic": "Langkah kaki (辶) yang berjarak hanya seukuran satu kapak (斤)."
  },
  "快": {
    "pinyin": "kuài",
    "meaning": "Cepat / gembira",
    "radical": "忄",
    "radicalDesc": "Hati",
    "logic": "Detak perasaan hati (忄) yang berdegup kencang bersemangat."
  },
  "慢": {
    "pinyin": "màn",
    "meaning": "Lambat",
    "radical": "忄",
    "radicalDesc": "Hati",
    "logic": "Suasana hati (忄) yang santai dan perlahan tanpa terburu-buru."
  },
  "这": {
    "pinyin": "zhè",
    "meaning": "Ini",
    "radical": "辶",
    "radicalDesc": "Berjalan",
    "logic": "Sesuatu yang berada persis dekat di samping langkah kaki (辶) kita."
  },
  "那": {
    "pinyin": "nà",
    "meaning": "Itu",
    "radical": "阝",
    "radicalDesc": "Wilayah / kota",
    "logic": "Sesuatu yang berada di seberang sana pada jarak pandang."
  },
  "哪": {
    "pinyin": "nǎ",
    "meaning": "Mana / yang mana",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Membuka mulut (口) menanyakan pilihan lokasi \"itu\" (那)."
  },
  "谁": {
    "pinyin": "shéi",
    "meaning": "Siapa",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Kata pertanyaan (讠) menanyakan identitas burung/orang (隹)."
  },
  "什": {
    "pinyin": "shén",
    "meaning": "Apa",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Karakter pembentuk kata tanya benda atau hal."
  },
  "么": {
    "pinyin": "me",
    "meaning": "Partikel tanya/akhiran",
    "radical": "丿",
    "radicalDesc": "Goresan miring",
    "logic": "Partikel pembantu pembentuk kata tanya seperti 什么, 怎么."
  },
  "几": {
    "pinyin": "jǐ",
    "meaning": "Berapa (jumlah kecil < 10)",
    "radical": "几",
    "radicalDesc": "Meja kecil",
    "logic": "Piktograf meja kecil tempat menghitung sedikit barang."
  },
  "怎": {
    "pinyin": "zěn",
    "meaning": "Bagaimana",
    "radical": "心",
    "radicalDesc": "Hati / pikiran",
    "logic": "Perasaan batin (心) yang bertanya-tanya mencari jalan keluar."
  },
  "样": {
    "pinyin": "yàng",
    "meaning": "Macam / bentuk / rupa",
    "radical": "木",
    "radicalDesc": "Kayu",
    "logic": "Pola kayu (木) yang dibentuk menyerupai rupa domba (羊)."
  },
  "不": {
    "pinyin": "bù",
    "meaning": "Tidak / bukan",
    "radical": "一",
    "radicalDesc": "Satu",
    "logic": "Awalnya melambangkan benih yang belum menembus tanah, bermakna negasi/belum."
  },
  "没": {
    "pinyin": "méi",
    "meaning": "Tidak ada / belum",
    "radical": "氵",
    "radicalDesc": "Air",
    "logic": "Benda yang tenggelam ke dalam air (氵) sehingga tak tampak lagi."
  },
  "谢": {
    "pinyin": "xiè",
    "meaning": "Terima kasih",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Menyampaikan kata-kata tulus (讠) dengan membungkukkan tubuh (身)."
  },
  "对": {
    "pinyin": "duì",
    "meaning": "Benar / tepat / terhadap",
    "radical": "寸",
    "radicalDesc": "Inci / aturan",
    "logic": "Tindakan yang tepat sesuai ukuran standar timbangan (寸)."
  },
  "起": {
    "pinyin": "qǐ",
    "meaning": "Bangun / bangkit",
    "radical": "走",
    "radicalDesc": "Melangkah",
    "logic": "Berdiri melangkah (走) untuk bangkit menuju tujuan (己)."
  },
  "客": {
    "pinyin": "kè",
    "meaning": "Tamu",
    "radical": "宀",
    "radicalDesc": "Atap rumah",
    "logic": "Sosok orang asing yang datang bertamu ke dalam rumah (宀)."
  },
  "气": {
    "pinyin": "qì",
    "meaning": "Udara / gas / suasana",
    "radical": "气",
    "radicalDesc": "Uap udara",
    "logic": "Piktograf hembusan uap awan atau udara yang mengalir di atmosfer."
  },
  "再": {
    "pinyin": "zài",
    "meaning": "Lagi / kembali",
    "radical": "冂",
    "radicalDesc": "Garis batas",
    "logic": "Melakukan tindakan sekali lagi untuk kedua kalinya."
  },
  "见": {
    "pinyin": "jiàn",
    "meaning": "Melihat / bertemu",
    "radical": "见",
    "radicalDesc": "Melihat",
    "logic": "Sosok manusia berjongkok dengan mata besar memandang wajah seseorang."
  },
  "吗": {
    "pinyin": "ma",
    "meaning": "Apakah (partikel tanya)",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Mulut (口) yang berseru mengajukan pertanyaan \"ya atau tidak\"."
  },
  "呢": {
    "pinyin": "ne",
    "meaning": "Bagaimana dengan... / sedang",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Mulut (口) yang menimpali pertanyaan balik bernada santai."
  },
  "吧": {
    "pinyin": "ba",
    "meaning": "Mari / ya kan (saran)",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Mulut (口) yang melontarkan nada ajakan bersahabat."
  },
  "了": {
    "pinyin": "le",
    "meaning": "Sudah (perubahan kondisi)",
    "radical": "乙",
    "radicalDesc": "Garis bengkok",
    "logic": "Piktograf bayi yang telah terbungkus rapi menandakan selesainya proses."
  },
  "一": {
    "pinyin": "yī",
    "meaning": "Satu",
    "radical": "一",
    "radicalDesc": "Garis satu",
    "logic": "Goresan horizontal tunggal melambangkan bilangan satu atau kesatuan dasar alam semesta."
  },
  "二": {
    "pinyin": "èr",
    "meaning": "Dua",
    "radical": "二",
    "radicalDesc": "Dua garis",
    "logic": "Dua goresan sejajar melambangkan bilangan dua (langit dan bumi)."
  },
  "两": {
    "pinyin": "liǎng",
    "meaning": "Dua (jumlah benda/pasang)",
    "radical": "一",
    "radicalDesc": "Garis timbangan",
    "logic": "Piktograf timbangan gantung dengan dua bandul seimbang di kedua sisi."
  },
  "三": {
    "pinyin": "sān",
    "meaning": "Tiga",
    "radical": "一",
    "radicalDesc": "Tiga garis",
    "logic": "Tiga goresan horizontal melambangkan tiga pilar alam: langit, manusia, dan bumi."
  },
  "四": {
    "pinyin": "sì",
    "meaning": "Empat",
    "radical": "囗",
    "radicalDesc": "Kotak pembatas",
    "logic": "Ruang kotak bernapas dengan dua garis di dalamnya, melambangkan empat penjuru mata angin."
  },
  "五": {
    "pinyin": "wǔ",
    "meaning": "Lima",
    "radical": "二",
    "radicalDesc": "Dua garis silang",
    "logic": "Persilangan dua garis di antara langit dan bumi melambangkan lima elemen kehidupan (Wuxing)."
  },
  "六": {
    "pinyin": "liù",
    "meaning": "Enam",
    "radical": "八",
    "radicalDesc": "Delapan / atap pondok",
    "logic": "Bentuk piktograf pondok tenda penanda bilangan enam."
  },
  "七": {
    "pinyin": "qī",
    "meaning": "Tujuh",
    "radical": "一",
    "radicalDesc": "Garis acuan",
    "logic": "Garis mendatar yang dipotong vertikal melambangkan pembagian tujuh."
  },
  "八": {
    "pinyin": "bā",
    "meaning": "Delapan",
    "radical": "八",
    "radicalDesc": "Membagi dua",
    "logic": "Dua goresan yang saling bertolak belakang melambangkan pemisahan genap bilangan delapan."
  },
  "九": {
    "pinyin": "jiǔ",
    "meaning": "Sembilan",
    "radical": "丿",
    "radicalDesc": "Goresan miring",
    "logic": "Lengan manusia yang menekuk bertenaga melambangkan angka tunggal tertinggi."
  },
  "十": {
    "pinyin": "shí",
    "meaning": "Sepuluh",
    "radical": "十",
    "radicalDesc": "Silang sepuluh",
    "logic": "Persilangan horizontal dan vertikal melambangkan angka sepuluh yang lengkap sempurna."
  },
  "百": {
    "pinyin": "bǎi",
    "meaning": "Ratus / seratus",
    "radical": "白",
    "radicalDesc": "Putih",
    "logic": "Angka satu (一) di atas karakter putih (白) melambangkan bilangan seratus."
  },
  "千": {
    "pinyin": "qiān",
    "meaning": "Ribu / seribu",
    "radical": "十",
    "radicalDesc": "Sepuluh",
    "logic": "Angka sepuluh (十) dengan goresan manusia melambangkan seribu orang berbaris."
  },
  "零": {
    "pinyin": "líng",
    "meaning": "Nol / sisa pecahan",
    "radical": "雨",
    "radicalDesc": "Hujan",
    "logic": "Rintik hujan sisa (雨) yang jatuh menetes sedikit demi sedikit."
  },
  "第": {
    "pinyin": "dì",
    "meaning": "Ke- (penanda urutan)",
    "radical": "竹",
    "radicalDesc": "Bambu",
    "logic": "Bilah bambu bernomor (竹) diikat dengan tali (弟) untuk mencatat urutan tingkatan."
  },
  "您": {
    "pinyin": "nín",
    "meaning": "Anda (bentuk hormat)",
    "radical": "心",
    "radicalDesc": "Hati / rasa hormat",
    "logic": "Menempatkan sosok kamu (你) di dalam lubuk hati (心) terdalam sebagai tanda rasa hormat."
  },
  "自": {
    "pinyin": "zì",
    "meaning": "Diri sendiri / dari",
    "radical": "自",
    "radicalDesc": "Hidung",
    "logic": "Piktograf hidung manusia yang menunjuk pada diri pribadi saat berbicara."
  },
  "己": {
    "pinyin": "jǐ",
    "meaning": "Diri pribadi",
    "radical": "己",
    "radicalDesc": "Tali pengikat",
    "logic": "Benang atau tali penanda milik diri sendiri yang tidak tertukar dengan orang lain."
  },
  "别": {
    "pinyin": "bié",
    "meaning": "Jangan / lain / berbeda",
    "radical": "刂",
    "radicalDesc": "Pisau potong",
    "logic": "Pisau (刂) yang memisahkan atau membedakan persendian tulang dari daging."
  },
  "的": {
    "pinyin": "de",
    "meaning": "Punya (kepemilikan) / yang",
    "radical": "白",
    "radicalDesc": "Putih / sasaran",
    "logic": "Sasaran panah putih (白) yang tepat dibidik sendok busur (勺)."
  },
  "有": {
    "pinyin": "yǒu",
    "meaning": "Ada / mempunyai",
    "radical": "月",
    "radicalDesc": "Daging / tangan",
    "logic": "Tangan (又) yang memegang sepotong daging (月/肉) melambangkan kepemilikan rezeki."
  },
  "每": {
    "pinyin": "měi",
    "meaning": "Setiap / masing-masing",
    "radical": "毋",
    "radicalDesc": "Ibu penyayang",
    "logic": "Sosok ibu (毋) dengan hiasan rambut yang menyayangi setiap anak satu per satu."
  },
  "各": {
    "pinyin": "gè",
    "meaning": "Masing-masing / setiap pihak",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Kaki melangkah (夂) menuju pintu gerbang dengan pendapat/mulut (口) masing-masing."
  },
  "里": {
    "pinyin": "lǐ",
    "meaning": "Di dalam / mil (satuan jarak)",
    "radical": "里",
    "radicalDesc": "Desa / perkampungan",
    "logic": "Petak sawah ladang (田) di atas tanah bumi (土) melambangkan bagian dalam kampung halaman."
  },
  "些": {
    "pinyin": "xiē",
    "meaning": "Beberapa / sedikit",
    "radical": "二",
    "radicalDesc": "Dua garis",
    "logic": "Gabungan hal ini (此) dengan dua garis jamak (二) menandakan beberapa benda."
  },
  "个": {
    "pinyin": "gè",
    "meaning": "Buah / butir (satuan umum)",
    "radical": "人",
    "radicalDesc": "Manusia",
    "logic": "Bilah bambu tegak atau sosok manusia melambangkan satu satuan individu."
  },
  "本": {
    "pinyin": "běn",
    "meaning": "Jilid / buku / akar pokok",
    "radical": "木",
    "radicalDesc": "Pohon kayu",
    "logic": "Pohon kayu (木) dengan garis penanda pada akar bawahnya melambangkan asal mula lembaran buku."
  },
  "星": {
    "pinyin": "xīng",
    "meaning": "Bintang / hari / benda langit",
    "radical": "日",
    "radicalDesc": "Matahari / hari",
    "logic": "Matahari (日) yang melahirkan (生) titik-titik cahaya bintang di langit atau penanda siklus hari."
  },
  "期": {
    "pinyin": "qī",
    "meaning": "Periode / siklus / masa / waktu",
    "radical": "月",
    "radicalDesc": "Bulan / waktu",
    "logic": "Siklus waktu peredaran bulan (月) yang dinanti kepastiannya (其)."
  },
  "半": {
    "pinyin": "bàn",
    "meaning": "Setengah / separuh / lewat 30 menit",
    "radical": "十",
    "radicalDesc": "Sepuluh",
    "logic": "Seekor hewan ternak (牛) yang dibelah dua secara simetris menjadi separuh bagian."
  },
  "钟": {
    "pinyin": "zhōng",
    "meaning": "Jam / lonceng waktu",
    "radical": "钅",
    "radicalDesc": "Logam / besi",
    "logic": "Lonceng logam (钅) di menara kota yang berdentang menandakan satuan waktu (中)."
  },
  "天": {
    "pinyin": "tiān",
    "meaning": "Langit / hari / cuaca",
    "radical": "大",
    "radicalDesc": "Besar",
    "logic": "Kubah cakrawala yang membentang luas di atas kepala sosok manusia besar (大)."
  },
  "间": {
    "pinyin": "jiān",
    "meaning": "Antara / sela / ruang kamar",
    "radical": "门",
    "radicalDesc": "Pintu gerbang",
    "logic": "Berkas sinar matahari (日) yang menyelinap masuk melalui celah daun pintu gerbang (门)."
  },
  "中": {
    "pinyin": "zhōng",
    "meaning": "Tengah / pusat / Tiongkok",
    "radical": "丨",
    "radicalDesc": "Garis tegak",
    "logic": "Anak panah tegak lurus yang tepat menembus lingkaran sasaran (口) di posisi tengah."
  },
  "岁": {
    "pinyin": "suì",
    "meaning": "Tahun usia / umur",
    "radical": "山",
    "radicalDesc": "Gunung",
    "logic": "Peredaran bintang Jupiter melewati gunung penanda bertambahnya satu tahun usia."
  },
  "是": {
    "pinyin": "shì",
    "meaning": "Adalah / benar / ya",
    "radical": "日",
    "radicalDesc": "Matahari",
    "logic": "Matahari (日) di atas garis penggaris tegak (疋) melambangkan kebenaran yang pasti dan tegak lurus."
  },
  "走": {
    "pinyin": "zǒu",
    "meaning": "Berjalan / pergi / melangkah",
    "radical": "走",
    "radicalDesc": "Berjalan kaki",
    "logic": "Sosok orang yang mengayunkan kedua lengan dan kakinya melangkah maju ke depan."
  },
  "要": {
    "pinyin": "yào",
    "meaning": "Mau / hendak / butuh / penting",
    "radical": "襾",
    "radicalDesc": "Penutup / tekad",
    "logic": "Wanita (女) yang merapatkan kedua tangan di pinggang menyatakan kemauan dan kehendak kuat."
  },
  "喜": {
    "pinyin": "xǐ",
    "meaning": "Suka / gembira / bahagia",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Mulut tersenyum (口) di bawah alat tabuh musik menandakan suasana pesta sukacita."
  },
  "欢": {
    "pinyin": "huān",
    "meaning": "Senang / riang gembira",
    "radical": "欠",
    "radicalDesc": "Menguap / berseru riang",
    "logic": "Burung elang (又) yang membuka paruh (欠) bersiul riang gembira."
  },
  "可": {
    "pinyin": "kě",
    "meaning": "Dapat / boleh / bisa",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Mulut (口) yang menyatakan persetujuan dan izin secara terbuka."
  },
  "以": {
    "pinyin": "yǐ",
    "meaning": "Dengan / memakai / sehingga",
    "radical": "人",
    "radicalDesc": "Manusia",
    "logic": "Seseorang yang memegang perkakas kerja untuk mencapai tujuan yang direncanakan."
  },
  "认": {
    "pinyin": "rèn",
    "meaning": "Mengenal / mengakui",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Ucapan perkataan (讠) yang tajam memahami karakter seseorang laksana bilah pedang (刃)."
  },
  "识": {
    "pinyin": "shí",
    "meaning": "Mengetahui / mengenali tanda",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Kata-kata (讠) yang terekam jelas sebagai ingatan ilmu dan tanda pengetahuan (只)."
  },
  "请": {
    "pinyin": "qǐng",
    "meaning": "Silakan / tolong / mengundang",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Ucapan sopan (讠) yang jernih dan santun (青) saat mempersilakan atau mengundang tamu."
  },
  "问": {
    "pinyin": "wèn",
    "meaning": "Bertanya",
    "radical": "门",
    "radicalDesc": "Pintu gerbang",
    "logic": "Mulut (口) yang berseru mengajukan pertanyaan di depan pintu gerbang (门)."
  },
  "给": {
    "pinyin": "gěi",
    "meaning": "Memberi / kepada / untuk",
    "radical": "纟",
    "radicalDesc": "Benang sutra",
    "logic": "Untaian kain sutra berharga (纟) yang disatukan (合) untuk dihadiahkan kepada orang lain."
  },
  "找": {
    "pinyin": "zhǎo",
    "meaning": "Mencari / memberi kembalian",
    "radical": "扌",
    "radicalDesc": "Tangan",
    "logic": "Tangan (扌) yang memegang tombak (戈) bergerak aktif mencari barang yang hilang."
  },
  "等": {
    "pinyin": "děng",
    "meaning": "Menunggu / sama derajat",
    "radical": "竹",
    "radicalDesc": "Bambu",
    "logic": "Bilah bambu resmi (竹) di kuil/kantor (寺) tempat orang antre menunggu giliran."
  },
  "到": {
    "pinyin": "dào",
    "meaning": "Tiba / sampai di / mencapai",
    "radical": "刂",
    "radicalDesc": "Pisau / tujuan",
    "logic": "Anak panah yang melesat terbang dan mendarat tepat menancap di tanah sasaran (至)."
  },
  "进": {
    "pinyin": "jìn",
    "meaning": "Masuk / melangkah maju",
    "radical": "辶",
    "radicalDesc": "Berjalan",
    "logic": "Burung kecil (隹) yang melangkah (辶) masuk ke dalam sarang pelindung."
  },
  "出": {
    "pinyin": "chū",
    "meaning": "Keluar / muncul",
    "radical": "凵",
    "radicalDesc": "Wadah terbuka",
    "logic": "Tunas tanaman yang bertumbuh merambat keluar melampaui batas pot wadahnya."
  },
  "关": {
    "pinyin": "guān",
    "meaning": "Menutup / mematikan / perbatasan",
    "radical": "丷",
    "radicalDesc": "Dua titik palang",
    "logic": "Dua palang kayu kokoh yang diselotkan untuk mengunci pintu gerbang benteng."
  },
  "系": {
    "pinyin": "xì",
    "meaning": "Hubungan / kaitan / mengikat",
    "radical": "糸",
    "radicalDesc": "Benang",
    "logic": "Anyaman serat benang sutra yang saling bertaut membentuk ikatan hubungan erat."
  },
  "卖": {
    "pinyin": "mài",
    "meaning": "Menjual",
    "radical": "十",
    "radicalDesc": "Sepuluh",
    "logic": "Mengeluarkan barang belanjaan (买) ke luar pasar untuk ditukarkan dengan uang."
  },
  "父": {
    "pinyin": "fù",
    "meaning": "Ayah / bapak",
    "radical": "父",
    "radicalDesc": "Ayah / kepala keluarga",
    "logic": "Sosok kepala keluarga yang memegang tongkat otoritas dan pelindung rumah tangga."
  },
  "母": {
    "pinyin": "mǔ",
    "meaning": "Ibu / mama",
    "radical": "毋",
    "radicalDesc": "Ibu",
    "logic": "Figur ibu penyayang yang merawat dan menyusui kedua anaknya dengan tulus."
  },
  "哥": {
    "pinyin": "gē",
    "meaning": "Kakak laki-laki / abang",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Dua mulut bernyanyi (口) bertingkat melambangkan abang yang memimpin adik-adiknya."
  },
  "弟": {
    "pinyin": "dì",
    "meaning": "Adik laki-laki",
    "radical": "弓",
    "radicalDesc": "Busur tali",
    "logic": "Seutas tali melilit tiang dari atas ke bawah melambangkan urutan kelahiran yang lebih muda."
  },
  "姐": {
    "pinyin": "jiě",
    "meaning": "Kakak perempuan",
    "radical": "女",
    "radicalDesc": "Wanita",
    "logic": "Figur wanita (女) terhormat di rumah leluhur (且) yang mengayomi adik-adiknya."
  },
  "妹": {
    "pinyin": "mèi",
    "meaning": "Adik perempuan",
    "radical": "女",
    "radicalDesc": "Wanita",
    "logic": "Figur wanita (女) yang masih kecil belia laksana kuncup bunga yang belum mekar (未)."
  },
  "女": {
    "pinyin": "nǚ",
    "meaning": "Perempuan / wanita / putri",
    "radical": "女",
    "radicalDesc": "Wanita",
    "logic": "Piktograf siluet wanita anggun yang menyilangkan kedua tangannya dengan santun."
  },
  "男": {
    "pinyin": "nán",
    "meaning": "Laki-laki / pria",
    "radical": "田",
    "radicalDesc": "Sawah ladang",
    "logic": "Sosok yang mengerahkan segenap tenaga ototnya (力) membajak sawah ladang (田)."
  },
  "孩": {
    "pinyin": "hái",
    "meaning": "Anak kecil / bocah",
    "radical": "子",
    "radicalDesc": "Anak",
    "logic": "Anak kecil (子) yang tersenyum ceria di masa usia balita (亥)."
  },
  "先": {
    "pinyin": "xiān",
    "meaning": "Dulu / sebelum / mendahului",
    "radical": "儿",
    "radicalDesc": "Kaki manusia",
    "logic": "Kaki manusia yang melangkah terdepan di atas tanah mendahului yang lain."
  },
  "事": {
    "pinyin": "shì",
    "meaning": "Urusan / perkara / masalah",
    "radical": "亅",
    "radicalDesc": "Kait tulisan",
    "logic": "Tangan memegang panji atau alat tulis mencatat urutan agenda urusan resmi."
  },
  "护": {
    "pinyin": "hù",
    "meaning": "Melindungi / merawat",
    "radical": "扌",
    "radicalDesc": "Tangan",
    "logic": "Tangan (扌) yang menaungi dan melindungi burung di bawah pintu rumah (户)."
  },
  "士": {
    "pinyin": "shì",
    "meaning": "Sarjana / ahli / prajurit",
    "radical": "士",
    "radicalDesc": "Cendekiawan",
    "logic": "Orang terpelajar yang memahami hitungan dari satu (一) hingga sepuluh (十)."
  },
  "傅": {
    "pinyin": "fù",
    "meaning": "Guru pembimbing / master",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Manusia (亻) berilmu yang mengajar dan menuntun aturan standar (寸) kepada muridnya."
  },
  "咖": {
    "pinyin": "kā",
    "meaning": "Kopi (fonetik ka)",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Minuman kopi aroma pekat yang disesap melalui mulut (口)."
  },
  "啡": {
    "pinyin": "fēi",
    "meaning": "Kopi (fonetik fei)",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Suku kata pelengkap penamaan fonetik minuman kopi (咖啡)."
  },
  "牛": {
    "pinyin": "niú",
    "meaning": "Sapi / lembu",
    "radical": "牛",
    "radicalDesc": "Sapi",
    "logic": "Piktograf kepala sapi lengkap dengan dua tanduk melengkung dan sepasang telinga."
  },
  "奶": {
    "pinyin": "nǎi",
    "meaning": "Susu / nenek",
    "radical": "女",
    "radicalDesc": "Wanita",
    "logic": "Sosok wanita (女) yang memberikan air susu kehidupan kepada anak keturunannya (乃)."
  },
  "汁": {
    "pinyin": "zhī",
    "meaning": "Sari jus / cairan / kuah",
    "radical": "氵",
    "radicalDesc": "Tiga titik air",
    "logic": "Tetesan cairan segar (氵) yang diperas dari aneka buah (十)."
  },
  "面": {
    "pinyin": "miàn",
    "meaning": "Mi / tepung / wajah",
    "radical": "面",
    "radicalDesc": "Wajah / bidang",
    "logic": "Piktograf bentuk bidang wajah atau lembaran adonan mi pipih memanjang."
  },
  "条": {
    "pinyin": "tiáo",
    "meaning": "Helai / untai / lembar (satuan)",
    "radical": "木",
    "radicalDesc": "Pohon kayu",
    "logic": "Ranting pohon ramping (木) menjuntai melambangkan benda panjang seperti mi atau celana."
  },
  "包": {
    "pinyin": "bāo",
    "meaning": "Membungkus / roti bakpao / tas",
    "radical": "勹",
    "radicalDesc": "Bungkusan",
    "logic": "Janin yang terbungkus rapi di dalam rahim ibu, melambangkan pembungkus."
  },
  "饺": {
    "pinyin": "jiǎo",
    "meaning": "Pangsit / jiaozi",
    "radical": "饣",
    "radicalDesc": "Makanan",
    "logic": "Olahan makanan (饣) yang dibentuk dengan melipat silang kedua ujung kulitnya (交)."
  },
  "肉": {
    "pinyin": "ròu",
    "meaning": "Daging",
    "radical": "肉",
    "radicalDesc": "Daging bergaris",
    "logic": "Piktograf irisan serat daging bergaris pada tulang rusuk hewan."
  },
  "鸡": {
    "pinyin": "jī",
    "meaning": "Ayam",
    "radical": "鸟",
    "radicalDesc": "Burung / unggas",
    "logic": "Unggas bersayap (鸟) yang berkokok nyaring di pedesaan (又)."
  },
  "蛋": {
    "pinyin": "dàn",
    "meaning": "Telur",
    "radical": "疋",
    "radicalDesc": "Kaki sarang",
    "logic": "Telur bulat bercangkang yang dierami di sarang bawah semak (虫)."
  },
  "鱼": {
    "pinyin": "yú",
    "meaning": "Ikan",
    "radical": "鱼",
    "radicalDesc": "Ikan bersirip",
    "logic": "Piktograf ikan utuh dengan kepala bersisik dan ekor meliuk berenang di air."
  },
  "香": {
    "pinyin": "xiāng",
    "meaning": "Harum / wangi / sedap",
    "radical": "香",
    "radicalDesc": "Harum biji-bijian",
    "logic": "Tanaman gandum (禾) di bawah sinar matahari (日) yang mengeluarkan aroma harum saat matang."
  },
  "蕉": {
    "pinyin": "jiāo",
    "meaning": "Pisang",
    "radical": "艹",
    "radicalDesc": "Tanaman",
    "logic": "Tanaman herba (艹) berdaun lebar yang menghasilkan tandan buah manis (焦)."
  },
  "西": {
    "pinyin": "xī",
    "meaning": "Barat",
    "radical": "覀",
    "radicalDesc": "Sarang burung",
    "logic": "Burung yang hinggap kembali ke sarangnya saat matahari terbenam di ufuk barat."
  },
  "瓜": {
    "pinyin": "guā",
    "meaning": "Melon / semangka / labu",
    "radical": "瓜",
    "radicalDesc": "Buah labu",
    "logic": "Buah labu bergelantungan pada sulur batang rambat di kebun."
  },
  "糖": {
    "pinyin": "táng",
    "meaning": "Gula / permen",
    "radical": "米",
    "radicalDesc": "Biji-bijian padi",
    "logic": "Olahan manis dari saripati bulir beras (米) yang dimasak kental di kuali (唐)."
  },
  "盐": {
    "pinyin": "yán",
    "meaning": "Garam",
    "radical": "皿",
    "radicalDesc": "Wadah mangkuk",
    "logic": "Kristal garam laut yang dikeringkan dan ditampung di dalam wadah (皿)."
  },
  "碗": {
    "pinyin": "wǎn",
    "meaning": "Mangkuk",
    "radical": "石",
    "radicalDesc": "Batu / keramik",
    "logic": "Wadah makan cekung (宛) yang dipahat kokoh dari bahan batu atau porselen (石)."
  },
  "筷": {
    "pinyin": "kuài",
    "meaning": "Sumpit",
    "radical": "竹",
    "radicalDesc": "Bambu",
    "logic": "Sepasang bilah bambu (竹) yang digerakkan dengan cepat dan tangkas (快) menjepit makanan."
  },
  "瓶": {
    "pinyin": "píng",
    "meaning": "Botol / vas / guci",
    "radical": "瓦",
    "radicalDesc": "Tembikar",
    "logic": "Wadah air leher panjang yang dibuat sejajar (并) dari bahan tanah liat tembikar (瓦)."
  },
  "房": {
    "pinyin": "fáng",
    "meaning": "Kamar / ruangan / rumah",
    "radical": "户",
    "radicalDesc": "Pintu rumah",
    "logic": "Ruangan pelindung di dalam rumah di balik daun pintu (户) tempat beristirahat (方)."
  },
  "厨": {
    "pinyin": "chú",
    "meaning": "Dapur",
    "radical": "厂",
    "radicalDesc": "Atap naungan",
    "logic": "Ruang di bawah naungan (厂) tempat meletakkan lemari perabot masak dan bumbu (豆/寸)."
  },
  "洗": {
    "pinyin": "xǐ",
    "meaning": "Mencuci / membasuh",
    "radical": "氵",
    "radicalDesc": "Tiga titik air",
    "logic": "Menggunakan aliran air bersih (氵) untuk membersihkan kaki dan tubuh terdepan (先)."
  },
  "教": {
    "pinyin": "jiāo",
    "meaning": "Mengajar / mendidik",
    "radical": "攵",
    "radicalDesc": "Arahan disiplin",
    "logic": "Anak (子) dibimbing guru dengan keteladanan (孝) dan arahan disiplin (攵)."
  },
  "室": {
    "pinyin": "shì",
    "meaning": "Ruangan / kamar",
    "radical": "宀",
    "radicalDesc": "Atap rumah",
    "logic": "Ruangan berteduh di bawah atap rumah (宀) tempat anak panah mendarat tiba (至)."
  },
  "图": {
    "pinyin": "tú",
    "meaning": "Gambar / denah / peta",
    "radical": "囗",
    "radicalDesc": "Bingkai kotak",
    "logic": "Kotak berbingkai (囗) berisi lukisan peta atau denah wilayah teratur."
  },
  "馆": {
    "pinyin": "guǎn",
    "meaning": "Gedung / balai / museum / kedai",
    "radical": "饣",
    "radicalDesc": "Makanan / jamuan",
    "logic": "Gedung tempat menyajikan santapan (饣) atau menampung pejabat tamu (官)."
  },
  "餐": {
    "pinyin": "cān",
    "meaning": "Santapan / makanan / hidangan",
    "radical": "食",
    "radicalDesc": "Makanan",
    "logic": "Santapan bergizi (食) yang dinikmati bersama saat sarapan atau makan malam."
  },
  "厅": {
    "pinyin": "tīng",
    "meaning": "Aula / ruang depan / ruang makan",
    "radical": "厂",
    "radicalDesc": "Atap lebar",
    "logic": "Paviliun beratap luas (厂) tempat menerima tamu dan musyawarah keluarga (丁)."
  },
  "超": {
    "pinyin": "chāo",
    "meaning": "Super / melampaui",
    "radical": "走",
    "radicalDesc": "Melangkah",
    "logic": "Melangkah berlari (走) dengan cepat mendahului dan memanggil yang lain (召)."
  },
  "市": {
    "pinyin": "shì",
    "meaning": "Pasar / kota",
    "radical": "巾",
    "radicalDesc": "Kain panji",
    "logic": "Panji bendera kain (巾) yang dipasang di pusat pasar perkotaan tempat berniaga."
  },
  "药": {
    "pinyin": "yào",
    "meaning": "Obat / ramuan",
    "radical": "艹",
    "radicalDesc": "Tanaman herbal",
    "logic": "Tanaman herbal (艹) yang membawa kegembiraan kesembuhan bagi tubuh (乐)."
  },
  "银": {
    "pinyin": "yín",
    "meaning": "Perak / uang perak",
    "radical": "钅",
    "radicalDesc": "Logam",
    "logic": "Kilau logam mulia (钅) berwarna putih perak yang sangat berharga (艮)."
  },
  "行": {
    "pinyin": "háng",
    "meaning": "Bank / deret / profesi (xíng: jalan)",
    "radical": "行",
    "radicalDesc": "Persimpangan jalan",
    "logic": "Piktograf persimpangan jalan empat arah tempat orang lalu-lalang berniaga."
  },
  "场": {
    "pinyin": "chǎng",
    "meaning": "Lapangan / arena / tempat terbuka",
    "radical": "土",
    "radicalDesc": "Tanah / bumi",
    "logic": "Hamparan tanah datar (土) yang disinari terik matahari (昜) untuk kegiatan berkumpul."
  },
  "火": {
    "pinyin": "huǒ",
    "meaning": "Api",
    "radical": "火",
    "radicalDesc": "Api menyala",
    "logic": "Piktograf lidah api yang menyala berkobar ke atas memancarkan panas."
  },
  "地": {
    "pinyin": "dì",
    "meaning": "Bumi / tanah / lantai",
    "radical": "土",
    "radicalDesc": "Tanah",
    "logic": "Hamparan tanah daratan (土) tempat segala makhluk hidup berpijak."
  },
  "铁": {
    "pinyin": "tiě",
    "meaning": "Besi / rel kereta",
    "radical": "钅",
    "radicalDesc": "Logam",
    "logic": "Bahan logam besi hitam (钅) yang ditempa kuat tahan lama."
  },
  "公": {
    "pinyin": "gōng",
    "meaning": "Umum / publik / adil",
    "radical": "八",
    "radicalDesc": "Membagi dua",
    "logic": "Membagi secara terbuka (八) tanpa mementingkan diri pribadi (厶)."
  },
  "共": {
    "pinyin": "gòng",
    "meaning": "Bersama / total",
    "radical": "八",
    "radicalDesc": "Dua tangan",
    "logic": "Dua tangan bersama-sama memegang dan mengangkat persembahan secara gotong royong."
  },
  "汽": {
    "pinyin": "qì",
    "meaning": "Uap / gas kendaraan",
    "radical": "氵",
    "radicalDesc": "Air",
    "logic": "Tetesan air (氵) yang dipanaskan hingga menguap menjadi tenaga uap pendorong mesin (气)."
  },
  "园": {
    "pinyin": "yuán",
    "meaning": "Taman / kebun",
    "radical": "囗",
    "radicalDesc": "Pagar pembatas",
    "logic": "Lahan berpagar (囗) tempat menanam pepohonan indah dan tanaman bunga (元)."
  },
  "司": {
    "pinyin": "sī",
    "meaning": "Mengelola / perusahaan / departemen",
    "radical": "口",
    "radicalDesc": "Mulut arahan",
    "logic": "Memberi komando dan instruksi (口) untuk memimpin suatu urusan kantor."
  },
  "办": {
    "pinyin": "bàn",
    "meaning": "Mengurus / menyelenggarakan / kantor",
    "radical": "力",
    "radicalDesc": "Tenaga otot",
    "logic": "Mengerahkan tenaga (力) di antara dua helai kerja keras untuk menyelesaikan urusan."
  },
  "门": {
    "pinyin": "mén",
    "meaning": "Pintu gerbang / gapura",
    "radical": "门",
    "radicalDesc": "Pintu gerbang",
    "logic": "Piktograf dua daun pintu gerbang tradisional yang berengsel dan saling menutup."
  },
  "口": {
    "pinyin": "kǒu",
    "meaning": "Mulut / pintu masuk / lubang",
    "radical": "口",
    "radicalDesc": "Mulut terbuka",
    "logic": "Piktograf bentuk mulut manusia yang terbuka melambangkan ucapan atau pintu jalan."
  },
  "路": {
    "pinyin": "lù",
    "meaning": "Jalan / rute",
    "radical": "足",
    "radicalDesc": "Kaki melangkah",
    "logic": "Langkah kaki (足) yang menempuh perjalanan mencapai tiap tujuan daerah (各)."
  },
  "国": {
    "pinyin": "guó",
    "meaning": "Negara / bangsa",
    "radical": "囗",
    "radicalDesc": "Benteng perbatasan",
    "logic": "Wilayah yang dilindungi tembok benteng (囗) menjaga batu giok kedaulatan (玉)."
  },
  "北": {
    "pinyin": "běi",
    "meaning": "Utara",
    "radical": "匕",
    "radicalDesc": "Sendok / punggung",
    "logic": "Dua orang berdiri saling memunggungi menghindari terpaan angin dingin kutub utara."
  },
  "京": {
    "pinyin": "jīng",
    "meaning": "Ibu kota / bukit tinggi",
    "radical": "亠",
    "radicalDesc": "Kubah menara",
    "logic": "Piktograf menara istana megah bertingkat di atas bukit pusat ibu kota kekaisaran."
  },
  "方": {
    "pinyin": "fāng",
    "meaning": "Arah / persegi / sisi",
    "radical": "方",
    "radicalDesc": "Dua perahu sejajar",
    "logic": "Dua perahu yang berlayar berdampingan lurus mengarah ke satu penjuru tujuan."
  },
  "外": {
    "pinyin": "wài",
    "meaning": "Luar / di luar",
    "radical": "夕",
    "radicalDesc": "Malam / senja",
    "logic": "Melakukan ramalan di waktu senja (夕) di luar jam resmi rumah."
  },
  "边": {
    "pinyin": "biān",
    "meaning": "Sisi / tepi / pinggir",
    "radical": "辶",
    "radicalDesc": "Melangkah",
    "logic": "Langkah kaki (辶) yang berjalan menyusuri tepian atau batas garis terluar."
  },
  "左": {
    "pinyin": "zuǒ",
    "meaning": "Kiri",
    "radical": "工",
    "radicalDesc": "Pekerjaan / pertukangan",
    "logic": "Tangan kiri yang memegang penggaris siku tukang (工) untuk mengukur."
  },
  "右": {
    "pinyin": "yòu",
    "meaning": "Kanan",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Tangan kanan yang menyuapkan santapan lezat ke dalam mulut (口)."
  },
  "旁": {
    "pinyin": "páng",
    "meaning": "Samping / sebelah",
    "radical": "方",
    "radicalDesc": "Arah / sisi",
    "logic": "Bentangan luas di kedua sisi arah (方) yang berada di samping posisi tengah."
  },
  "东": {
    "pinyin": "dōng",
    "meaning": "Timur",
    "radical": "木",
    "radicalDesc": "Pohon kayu",
    "logic": "Matahari bulat (日) yang baru menyembul terbit di balik celah dahan pepohonan (木) timur."
  },
  "南": {
    "pinyin": "nán",
    "meaning": "Selatan",
    "radical": "十",
    "radicalDesc": "Sepuluh",
    "logic": "Lonceng tembaga tanaman tropis yang tumbuh subur di wilayah iklim selatan yang hangat."
  },
  "裤": {
    "pinyin": "kù",
    "meaning": "Celana",
    "radical": "衤",
    "radicalDesc": "Pakaian",
    "logic": "Kain pakaian (衤) yang dijahit membungkus kaki agar terlindung di dalam gudang (库)."
  },
  "鞋": {
    "pinyin": "xié",
    "meaning": "Sepatu",
    "radical": "革",
    "radicalDesc": "Kulit binatang",
    "logic": "Alas kaki pelindung yang terbuat dari bahan olahan kulit binatang kuat (革)."
  },
  "帽": {
    "pinyin": "mào",
    "meaning": "Topi",
    "radical": "巾",
    "radicalDesc": "Kain penutup",
    "logic": "Kain (巾) penutup kepala yang menaungi mata dari silau terik matahari (冒)."
  },
  "床": {
    "pinyin": "chuáng",
    "meaning": "Tempat tidur / ranjang",
    "radical": "广",
    "radicalDesc": "Naungan atap",
    "logic": "Perabot berbahan kayu (木) yang diletakkan di bawah naungan kamar (广) untuk berbaring."
  },
  "窗": {
    "pinyin": "chuāng",
    "meaning": "Jendela",
    "radical": "穴",
    "radicalDesc": "Lubang / rongga",
    "logic": "Lubang ventilasi beratap (穴) tempat sirkulasi udara dan masuknya cahaya cerobong."
  },
  "户": {
    "pinyin": "hù",
    "meaning": "Pintu rumah / keluarga",
    "radical": "户",
    "radicalDesc": "Pintu satu daun",
    "logic": "Piktograf satu helai daun pintu kayu tradisional pelindung pintu rumah tinggal."
  },
  "灯": {
    "pinyin": "dēng",
    "meaning": "Lampu / pelita",
    "radical": "火",
    "radicalDesc": "Api",
    "logic": "Nyala api (火) di atas wadah paku logam (丁) yang menerangi ruangan gulita."
  },
  "纸": {
    "pinyin": "zhǐ",
    "meaning": "Kertas",
    "radical": "纟",
    "radicalDesc": "Serat sutra",
    "logic": "Anyaman serat tipis (纟) yang diendapkan rata (氏) menjadi lembaran tulis."
  },
  "笔": {
    "pinyin": "bǐ",
    "meaning": "Pena / kuas tulis",
    "radical": "竹",
    "radicalDesc": "Bambu",
    "logic": "Batang bambu silindris (竹) dengan ujung bulu hewan (毛) untuk menulis kaligrafi."
  },
  "汉": {
    "pinyin": "hàn",
    "meaning": "Suku Han / Mandarin",
    "radical": "氵",
    "radicalDesc": "Air sungai",
    "logic": "Aliran sungai Han (氵) tempat peradaban leluhur bangsa Tionghoa bertumbuh."
  },
  "语": {
    "pinyin": "yǔ",
    "meaning": "Bahasa / tutur kata",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Kata-kata (讠) yang diucapkan diri sendiri (吾) untuk berkomunikasi."
  },
  "文": {
    "pinyin": "wén",
    "meaning": "Tulisan / sastra / budaya",
    "radical": "文",
    "radicalDesc": "Goresan pola",
    "logic": "Pola goresan motif tato atau lambang naskah sastra budaya."
  },
  "词": {
    "pinyin": "cí",
    "meaning": "Kosakata / kata",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Rangkaian kata terucap (讠) yang tertata rapi mengelola pesan pikiran (司)."
  },
  "习": {
    "pinyin": "xí",
    "meaning": "Berlatih / mengulang kebiasaan",
    "radical": "乙",
    "radicalDesc": "Bulu sayap",
    "logic": "Kepakan sayap anak burung (羽) yang berulang kali berlatih terbang di sarang."
  },
  "工": {
    "pinyin": "gōng",
    "meaning": "Pekerjaan / tukang / insinyur",
    "radical": "工",
    "radicalDesc": "Penggaris siku pertukangan",
    "logic": "Piktograf alat penggaris siku tukang kayu melambangkan karya teknik dan pekerjaan."
  },
  "作": {
    "pinyin": "zuò",
    "meaning": "Bekerja / membuat karya",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Manusia (亻) yang mulai bangun (乍) melakukan aktivitas karya produktif."
  },
  "睡": {
    "pinyin": "shuì",
    "meaning": "Tidur",
    "radical": "目",
    "radicalDesc": "Mata",
    "logic": "Kelopak mata (目) yang tertunduk terkulai ke bawah (垂) saat terlelap tidur."
  },
  "觉": {
    "pinyin": "jiào",
    "meaning": "Tidur (jué: sadar / merasa)",
    "radical": "见",
    "radicalDesc": "Melihat / sadar",
    "logic": "Mata melihat (见) pencerahan setelah bangun dari tidur pulas."
  },
  "澡": {
    "pinyin": "zǎo",
    "meaning": "Mandi",
    "radical": "氵",
    "radicalDesc": "Air",
    "logic": "Menggunakan air segar (氵) membasuh tubuh laksana burung bersolek di pohon (喿)."
  },
  "刷": {
    "pinyin": "shuā",
    "meaning": "Menyikat / menggosok",
    "radical": "刂",
    "radicalDesc": "Pisau gores",
    "logic": "Bulu sikat kain (巾) yang digosokkan menyapu kotoran dengan pisau pembersih (刂)."
  },
  "牙": {
    "pinyin": "yá",
    "meaning": "Gigi / taring",
    "radical": "牙",
    "radicalDesc": "Gigi geraham",
    "logic": "Piktograf lekukan sepasang gigi geraham atas dan bawah yang saling mengunyah."
  },
  "跑": {
    "pinyin": "pǎo",
    "meaning": "Berlari",
    "radical": "足",
    "radicalDesc": "Kaki",
    "logic": "Langkah kaki (足) yang terbungkus kecepatan kilat memburu langkah ke depan (包)."
  },
  "步": {
    "pinyin": "bù",
    "meaning": "Langkah / berjalan",
    "radical": "止",
    "radicalDesc": "Jejak telapak kaki",
    "logic": "Dua jejak telapak kaki depan dan belakang yang saling bergantian melangkah."
  },
  "运": {
    "pinyin": "yùn",
    "meaning": "Bergerak / mengangkut / olahraga",
    "radical": "辶",
    "radicalDesc": "Melangkah",
    "logic": "Gerakan berpindah tempat (辶) dengan memutar roda tenaga (云)."
  },
  "动": {
    "pinyin": "dòng",
    "meaning": "Bergerak / aksi gerak",
    "radical": "力",
    "radicalDesc": "Tenaga otot",
    "logic": "Mengerahkan tenaga dorong (力) pada benda berat (重) agar berpindah posisi."
  },
  "踢": {
    "pinyin": "tī",
    "meaning": "Menendang",
    "radical": "足",
    "radicalDesc": "Kaki",
    "logic": "Gerakan ayunan kaki (足) yang menendang kuat mengangkat bola tinggi (易)."
  },
  "足": {
    "pinyin": "zú",
    "meaning": "Kaki / cukup",
    "radical": "足",
    "radicalDesc": "Kaki utuh",
    "logic": "Piktograf tungkai lutut hingga telapak kaki manusia melambangkan langkah kokoh."
  },
  "球": {
    "pinyin": "qiú",
    "meaning": "Bola / bulatan",
    "radical": "王",
    "radicalDesc": "Batu giok bulat",
    "logic": "Benda bulat mulus menyerupai butiran giok berharga (王/玉) yang dicari (求)."
  },
  "篮": {
    "pinyin": "lán",
    "meaning": "Keranjang / bola basket",
    "radical": "竹",
    "radicalDesc": "Bambu",
    "logic": "Wadah keranjang anyaman bambu (竹) tempat menampung barang atau bola."
  },
  "游": {
    "pinyin": "yóu",
    "meaning": "Berenang / berpesiar",
    "radical": "氵",
    "radicalDesc": "Air",
    "logic": "Berenang melintasi arus air (氵) sambil mengibarkan panji anak berenang (斿)."
  },
  "泳": {
    "pinyin": "yǒng",
    "meaning": "Menyelam / berenang",
    "radical": "氵",
    "radicalDesc": "Air",
    "logic": "Menyelam bergerak maju di dalam kedalaman air jernih (氵) untuk waktu lama (永)."
  },
  "唱": {
    "pinyin": "chàng",
    "meaning": "Bernyanyi",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Membuka mulut (口) menyuarakan lantunan nada merdu bagai sinar matahari (昌)."
  },
  "歌": {
    "pinyin": "gē",
    "meaning": "Lagu / bersenandung",
    "radical": "欠",
    "radicalDesc": "Menguap / berseru",
    "logic": "Membuka napas rongga dada (欠) melantunkan irama syair bersaudara (哥)."
  },
  "跳": {
    "pinyin": "tiào",
    "meaning": "Melompat / menari",
    "radical": "足",
    "radicalDesc": "Kaki",
    "logic": "Kaki (足) yang menghentak tanah meloncat ke udara laksana pertanda pertanda kilat (兆)."
  },
  "舞": {
    "pinyin": "wǔ",
    "meaning": "Menari / tarian",
    "radical": "夕",
    "radicalDesc": "Kaki melangkah",
    "logic": "Penari memegang selendang di kedua tangannya mengayunkan kaki berputar anggun."
  },
  "旅": {
    "pinyin": "lǚ",
    "meaning": "Bepergian / wisata",
    "radical": "方",
    "radicalDesc": "Panji bendera",
    "logic": "Rombongan orang berkumpul di bawah bendera (方) berangkat mengarungi perjalanan."
  },
  "玩": {
    "pinyin": "wán",
    "meaning": "Bermain / bersenang-senang",
    "radical": "王",
    "radicalDesc": "Batu giok",
    "logic": "Memegang dan mengagumi butiran batu giok indah (王) dengan rasa gembira (元)."
  },
  "休": {
    "pinyin": "xiū",
    "meaning": "Istirahat",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Seorang manusia (亻) yang bersandar santai di bawah keteduhan pohon kayu (木)."
  },
  "息": {
    "pinyin": "xī",
    "meaning": "Bernapas / berhenti istirahat",
    "radical": "心",
    "radicalDesc": "Hati",
    "logic": "Napas keluar dari hidung (自) menenangkan degup perasaan hati (心)."
  },
  "帮": {
    "pinyin": "bāng",
    "meaning": "Membantu / menolong",
    "radical": "巾",
    "radicalDesc": "Kain bendera",
    "logic": "Mengikatkan kain (巾) untuk menopang dan menguatkan bagian yang rapuh."
  },
  "助": {
    "pinyin": "zhù",
    "meaning": "Membantu / sokongan",
    "radical": "力",
    "radicalDesc": "Tenaga",
    "logic": "Menyumbangkan tenaga ekstra (力) untuk meringankan beban orang lain (且)."
  },
  "送": {
    "pinyin": "sòng",
    "meaning": "Mengantar / memberi hadiah",
    "radical": "辶",
    "radicalDesc": "Melangkah",
    "logic": "Melangkah pergi (辶) sambil mengulurkan kedua tangan mempersembahkan hadiah (关)."
  },
  "借": {
    "pinyin": "jiè",
    "meaning": "Meminjam / meminjamkan",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Seseorang (亻) yang mempercayakan barang masa lalu (昔) kepada orang lain."
  },
  "还": {
    "pinyin": "huán",
    "meaning": "Mengembalikan (hái: masih / juga)",
    "radical": "辶",
    "radicalDesc": "Melangkah",
    "logic": "Melangkah (辶) berputar kembali membawa benda bulat (不) ke pemilik asalnya."
  },
  "答": {
    "pinyin": "dá",
    "meaning": "Menjawab / membalas",
    "radical": "竹",
    "radicalDesc": "Bambu",
    "logic": "Menuliskan jawaban di atas bilah bambu surat (竹) yang disepakati bersama (合)."
  },
  "懂": {
    "pinyin": "dǒng",
    "meaning": "Mengerti / paham",
    "radical": "忄",
    "radicalDesc": "Hati",
    "logic": "Pikiran di dalam hati (忄) yang tercerahkan memahami prinsip yang benar (重)."
  },
  "知": {
    "pinyin": "zhī",
    "meaning": "Tahu / mengetahui",
    "radical": "矢",
    "radicalDesc": "Anak panah",
    "logic": "Pengetahuan yang meluncur tepat sasaran secepat lesatan anak panah (矢) lewat mulut (口)."
  },
  "道": {
    "pinyin": "dào",
    "meaning": "Jalan / cara / prinsip / berkata",
    "radical": "辶",
    "radicalDesc": "Melangkah",
    "logic": "Melangkah (辶) dengan akal kepala pikiran (首) menempuh jalan kebenaran."
  },
  "得": {
    "pinyin": "dé",
    "meaning": "Mendapatkan (de: partikel hasil / děi: harus)",
    "radical": "彳",
    "radicalDesc": "Langkah kaki",
    "logic": "Tangan (寸) memungut cangkang kerang berharga di jalan setapak (彳)."
  },
  "告": {
    "pinyin": "gào",
    "meaning": "Memberitahu / menyatakan",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Mulut (口) yang menyuarakan pengumuman resmi di hadapan kepala hewan kurban (牛)."
  },
  "诉": {
    "pinyin": "sù",
    "meaning": "Menyampaikan / mengadu",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Kata-kata (讠) yang disampaikan tegas laksana kapak penegak hukum (斥)."
  },
  "忘": {
    "pinyin": "wàng",
    "meaning": "Lupa",
    "radical": "心",
    "radicalDesc": "Hati / pikiran",
    "logic": "Memori yang hilang lenyap (亡) dari dalam ingatan lubuk hati (心)."
  },
  "记": {
    "pinyin": "jì",
    "meaning": "Mengingat / mencatat",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Kata-kata (讠) yang diikat erat pada diri sendiri (己) agar tidak terlupa."
  },
  "考": {
    "pinyin": "kǎo",
    "meaning": "Ujian / menguji / meneliti",
    "radical": "老",
    "radicalDesc": "Tetua berilmu",
    "logic": "Orang tua bijak (老) yang menguji kemampuan dan ketelitian anak muda."
  },
  "试": {
    "pinyin": "shì",
    "meaning": "Mencoba / tes ujian",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Kata-kata (讠) yang diukur kesesuaiannya dengan standar aturan resmi (式)."
  },
  "块": {
    "pinyin": "kuài",
    "meaning": "Yuan (uang) / bongkah / keping",
    "radical": "土",
    "radicalDesc": "Tanah",
    "logic": "Gumpalan tanah (土) padat atau kepingan perak alat tukar berharga (夬)."
  },
  "元": {
    "pinyin": "yuán",
    "meaning": "Yuan (mata uang) / awal / pertama",
    "radical": "儿",
    "radicalDesc": "Manusia",
    "logic": "Bagian kepala teratas manusia melambangkan unit satuan moneter utama."
  },
  "毛": {
    "pinyin": "máo",
    "meaning": "Mao (0.1 yuan) / bulu",
    "radical": "毛",
    "radicalDesc": "Helai bulu",
    "logic": "Piktograf helai bulu halus melambangkan satuan uang pecahan kecil."
  },
  "角": {
    "pinyin": "jiǎo",
    "meaning": "Jiao (0.1 yuan) / sudut / tanduk",
    "radical": "角",
    "radicalDesc": "Tanduk hewan",
    "logic": "Piktograf tanduk runcing hewan melambangkan pecahan sepersepuluh yuan."
  },
  "贵": {
    "pinyin": "guì",
    "meaning": "Mahal / mulia / berharga",
    "radical": "贝",
    "radicalDesc": "Kerang uang",
    "logic": "Kerang uang (贝) di dalam kotak peti keranjang (中/一) menandakan barang bernilai tinggi."
  },
  "便": {
    "pinyin": "pián",
    "meaning": "Murah (biàn: nyaman/praktis)",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Manusia (亻) yang merasa nyaman dan mudah menjangkau harga barang."
  },
  "宜": {
    "pinyin": "yí",
    "meaning": "Pantas / tepat / cocok",
    "radical": "宀",
    "radicalDesc": "Atap rumah",
    "logic": "Daging kurban di bawah atap rumah (宀) yang tersusun rapi pantas dan serasi."
  },
  "单": {
    "pinyin": "dān",
    "meaning": "Lembar nota / tunggal / daftar",
    "radical": "十",
    "radicalDesc": "Sepuluh",
    "logic": "Selembar daftar perisai pencatat rincian transaksi tunggal."
  },
  "付": {
    "pinyin": "fù",
    "meaning": "Membayar / menyerahkan",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Seseorang (亻) yang menggunakan tangannya (寸) menyerahkan uang pembayaran."
  },
  "金": {
    "pinyin": "jīn",
    "meaning": "Emas / logam / uang",
    "radical": "金",
    "radicalDesc": "Logam emas",
    "logic": "Butiran bijih emas berkilau yang ditambang dari dalam perut bumi."
  },
  "卡": {
    "pinyin": "kǎ",
    "meaning": "Kartu (kredit/identitas)",
    "radical": "丨",
    "radicalDesc": "Tegak",
    "logic": "Tersangkut di antara posisi atas (上) dan bawah (下), bentuk fonetik kartu."
  },
  "袋": {
    "pinyin": "dài",
    "meaning": "Kantong / tas saku",
    "radical": "衣",
    "radicalDesc": "Pakaian",
    "logic": "Kain busana (衣) yang dijahit berongga untuk menampung bekal bawaan (代)."
  },
  "双": {
    "pinyin": "shuāng",
    "meaning": "Sepasang / dobel",
    "radical": "又",
    "radicalDesc": "Tangan",
    "logic": "Dua tangan kanan (又+又) yang berdampingan memegang dua ekor burung."
  },
  "张": {
    "pinyin": "zhāng",
    "meaning": "Lembar (kertas/tiket/meja)",
    "radical": "弓",
    "radicalDesc": "Busur tali",
    "logic": "Merentangkan busur (弓) hingga terbuka lebar seperti lembaran kertas (长)."
  },
  "件": {
    "pinyin": "jiàn",
    "meaning": "Potong / helai / lembar pakaian",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Manusia (亻) yang membagi ternak sapi (牛) menjadi bagian-bagian terpisah."
  },
  "只": {
    "pinyin": "zhī",
    "meaning": "Ekor (satuan hewan) (zhǐ: hanya)",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Piktograf seekor burung kecil yang dipegang di telapak tangan."
  },
  "斤": {
    "pinyin": "jīn",
    "meaning": "Jin (satuan berat 0.5 kg)",
    "radical": "斤",
    "radicalDesc": "Kapak timbang",
    "logic": "Piktograf kapak besi pemotong yang digunakan sebagai bandul timbangan."
  },
  "务": {
    "pinyin": "wù",
    "meaning": "Tugas / urusan / dinas",
    "radical": "力",
    "radicalDesc": "Tenaga",
    "logic": "Mengerahkan tenaga (力) menjalankan tugas tombak keprajuritan."
  },
  "员": {
    "pinyin": "yuán",
    "meaning": "Pegawai / anggota / staf",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Nama orang yang terdaftar (口) di atas catatan gaji kerang harta (贝)."
  },
  "板": {
    "pinyin": "bǎn",
    "meaning": "Papan / bos pemilik kedai",
    "radical": "木",
    "radicalDesc": "Kayu",
    "logic": "Kayu pohon (木) yang dibelah rata pipih menjadi papan meja perniagaan (反)."
  },
  "租": {
    "pinyin": "zū",
    "meaning": "Menyewa / uang sewa",
    "radical": "禾",
    "radicalDesc": "Padi / hasil bumi",
    "logic": "Menyerahkan sebagian panen gandum (禾) kepada pemilik tanah leluhur (且)."
  },
  "交": {
    "pinyin": "jiāo",
    "meaning": "Menyerahkan / bertukar / bergaul",
    "radical": "亠",
    "radicalDesc": "Tutup atas",
    "logic": "Dua kaki yang menyilang melambangkan pertemuan dan pertukaran antarsesama."
  },
  "船": {
    "pinyin": "chuán",
    "meaning": "Perahu / kapal air",
    "radical": "舟",
    "radicalDesc": "Perahu",
    "logic": "Perahu (舟) berlayar menampung delapan penumpang dengan persediaan air (口)."
  },
  "骑": {
    "pinyin": "qí",
    "meaning": "Mengendarai (motor/sepeda/kuda)",
    "radical": "马",
    "radicalDesc": "Kuda",
    "logic": "Duduk mengangkangi punggung kuda gagah (马) melesat dengan tangkas (奇)."
  },
  "票": {
    "pinyin": "piào",
    "meaning": "Tiket / karcis",
    "radical": "示",
    "radicalDesc": "Altar berkah",
    "logic": "Tanda kertas segel berkah persembahan (示) yang dikeluarkan penguasa."
  },
  "离": {
    "pinyin": "lí",
    "meaning": "Berjarak dari / meninggalkan",
    "radical": "隹",
    "radicalDesc": "Burung",
    "logic": "Burung kuning indah (隹) yang terbang meninggalkan sangkar jaring perangkap."
  },
  "往": {
    "pinyin": "wǎng",
    "meaning": "Menuju ke / arah lampau",
    "radical": "彳",
    "radicalDesc": "Langkah kaki",
    "logic": "Langkah kaki (彳) yang melangkah pasti menuju tempat lilin pelita tujuan (主)."
  },
  "拐": {
    "pinyin": "guǎi",
    "meaning": "Belok / memutar arah",
    "radical": "扌",
    "radicalDesc": "Tangan",
    "logic": "Tangan (扌) yang memutar pegangan kemudi untuk berbelok arah sudut."
  },
  "绿": {
    "pinyin": "lǜ",
    "meaning": "Hijau",
    "radical": "纟",
    "radicalDesc": "Benang sutra",
    "logic": "Benang sutra (纟) yang diwarnai sari daun alami menghasilkan warna hijau segar (彖)."
  },
  "过": {
    "pinyin": "guò",
    "meaning": "Melewati / melintas / pernah",
    "radical": "辶",
    "radicalDesc": "Melangkah",
    "logic": "Melangkah (辶) melewati batas ukuran inci masa lalu (寸)."
  },
  "话": {
    "pinyin": "huà",
    "meaning": "Perkataan / ucapan / bicara",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Kata-kata (讠) yang dilafalkan dengan pergerakan lidah (舌) di dalam mulut."
  },
  "码": {
    "pinyin": "mǎ",
    "meaning": "Nomor / kode / yard",
    "radical": "石",
    "radicalDesc": "Batu",
    "logic": "Batu timbangan (石) berukir angka kode penanda berat timbangan (马)."
  },
  "微": {
    "pinyin": "wēi",
    "meaning": "Kecil / mikro / lembut",
    "radical": "彳",
    "radicalDesc": "Langkah pelan",
    "logic": "Langkah kaki perlahan (彳) menyusuri hal-hal detail sangat kecil dan halus."
  },
  "信": {
    "pinyin": "xìn",
    "meaning": "Pesan / surat / percaya",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Perkataan tulus (言) dari seorang manusia (亻) yang layak dipercaya."
  },
  "发": {
    "pinyin": "fā",
    "meaning": "Mengirim / memancarkan / terbit",
    "radical": "又",
    "radicalDesc": "Tangan busur",
    "logic": "Tangan melepaskan anak panah meluncur terbang mengirimkan pesan kilat."
  },
  "网": {
    "pinyin": "wǎng",
    "meaning": "Jaringan / internet / jala",
    "radical": "冂",
    "radicalDesc": "Bingkai jala",
    "logic": "Piktograf jaring jala ikan bersilang yang melambangkan jaringan dunia maya."
  },
  "照": {
    "pinyin": "zhào",
    "meaning": "Memotret / menyinari / foto",
    "radical": "灬",
    "radicalDesc": "Cahaya api",
    "logic": "Cahaya terang (灬) dari matahari (日) yang menyinari wajah untuk direkam."
  },
  "片": {
    "pinyin": "piàn",
    "meaning": "Lembar foto / kepingan tipis",
    "radical": "片",
    "radicalDesc": "Belahan kayu tipis",
    "logic": "Piktograf belahan papan kayu tipis penampung gambar foto."
  },
  "拍": {
    "pinyin": "pāi",
    "meaning": "Memotret / menepuk",
    "radical": "扌",
    "radicalDesc": "Tangan",
    "logic": "Aksi tangan (扌) menekan tombol rana kamera foto berwarna putih terang (白)."
  },
  "音": {
    "pinyin": "yīn",
    "meaning": "Suara / bunyi / musik",
    "radical": "音",
    "radicalDesc": "Suara nada",
    "logic": "Piktograf lidah di dalam mulut menyuarakan getaran nada bunyi merdu."
  },
  "响": {
    "pinyin": "xiǎng",
    "meaning": "Berbunyi / bergema / keras",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Mulut (口) yang menyuarakan bunyi gema merambat luas ke sekeliling arah (向)."
  },
  "频": {
    "pinyin": "pín",
    "meaning": "Frekuensi / video / sering",
    "radical": "页",
    "radicalDesc": "Kepala / halaman",
    "logic": "Langkah kaki menyeberang sungai (步) dengan kepala (页) mengamati perulangan ombak."
  },
  "乐": {
    "pinyin": "lè",
    "meaning": "Gembira / senang (yuè: musik)",
    "radical": "丿",
    "radicalDesc": "Goresan kendang",
    "logic": "Alat musik bertali sutra di atas kayu pembawa kegembiraan sukacita."
  },
  "报": {
    "pinyin": "bào",
    "meaning": "Koran / berita / melapor",
    "radical": "扌",
    "radicalDesc": "Tangan",
    "logic": "Tangan memegang stempel resmi menyampaikan warta berita kepada publik."
  },
  "故": {
    "pinyin": "gù",
    "meaning": "Alasan / masa lampau / cerita",
    "radical": "攵",
    "radicalDesc": "Tindakan",
    "logic": "Kejadian masa lampau (古) yang ditelaah tindakannya (攵) menjadi kisah cerita."
  },
  "邮": {
    "pinyin": "yóu",
    "meaning": "Pos / mengirim surat",
    "radical": "阝",
    "radicalDesc": "Kota / pos kurir",
    "logic": "Petak ladang (由) di perbatasan kota (阝) tempat kuda kurir pos singgah bertukar surat."
  },
  "喂": {
    "pinyin": "wèi",
    "meaning": "Halo (telepon) / menyuapi",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Mulut (口) yang berseru menyapa penelpon di seberang kawat telepon."
  },
  "聊": {
    "pinyin": "liáo",
    "meaning": "Mengobrol / bercengkerama",
    "radical": "耳",
    "radicalDesc": "Telinga",
    "logic": "Memasang telinga (耳) mendengarkan obrolan santai pengisi waktu senggang (卯)."
  },
  "声": {
    "pinyin": "shēng",
    "meaning": "Suara / nada suara",
    "radical": "士",
    "radicalDesc": "Ahli musik",
    "logic": "Batu musik gantung yang dipukul tongkat menghasilkan resonansi suara bening."
  },
  "封": {
    "pinyin": "fēng",
    "meaning": "Amplop surat / menyegel",
    "radical": "寸",
    "radicalDesc": "Inci / tangan cap",
    "logic": "Tanah berbatas pohon (圭) yang dicap segel resmi (寸) dengan amplop tertutup."
  },
  "用": {
    "pinyin": "yòng",
    "meaning": "Menggunakan / memakai",
    "radical": "用",
    "radicalDesc": "Wadah ember",
    "logic": "Piktograf ember kayu yang digunakan menimba air untuk keperluan sehari-hari."
  },
  "把": {
    "pinyin": "bǎ",
    "meaning": "Gagang / memegang / partikel ba",
    "radical": "扌",
    "radicalDesc": "Tangan",
    "logic": "Tangan (扌) yang menggenggam erat gagang tangkai atau memegang benda (巴)."
  },
  "坏": {
    "pinyin": "huài",
    "meaning": "Rusak / jahat / buruk",
    "radical": "土",
    "radicalDesc": "Tanah",
    "logic": "Tembok tanah benteng (土) yang runtuh terbelah (不) kehilangan fungsinya."
  },
  "矮": {
    "pinyin": "ǎi",
    "meaning": "Pendek (tinggi badan)",
    "radical": "矢",
    "radicalDesc": "Anak panah",
    "logic": "Anak panah pendek (矢) yang diukur setinggi tanaman gandum (禾/女)."
  },
  "长": {
    "pinyin": "cháng",
    "meaning": "Panjang (zhǎng: tumbuh/ketua)",
    "radical": "长",
    "radicalDesc": "Rambut panjang",
    "logic": "Piktograf helaian rambut tetua yang terurai panjang melambangkan jarak atau waktu."
  },
  "短": {
    "pinyin": "duǎn",
    "meaning": "Pendek (jarak/panjang benda)",
    "radical": "矢",
    "radicalDesc": "Anak panah",
    "logic": "Anak panah ukuran pendek (矢) diletakkan di samping mangkuk makanan (豆)."
  },
  "新": {
    "pinyin": "xīn",
    "meaning": "Baru / segar",
    "radical": "斤",
    "radicalDesc": "Kapak potong",
    "logic": "Kapak tajam (斤) yang baru memotong kayu pohon segar (亲/木)."
  },
  "旧": {
    "pinyin": "jiù",
    "meaning": "Lama / usang / bekas",
    "radical": "日",
    "radicalDesc": "Matahari",
    "logic": "Benda yang telah terpapar sinar matahari (日) berulang kali hingga memudar warnanya."
  },
  "忙": {
    "pinyin": "máng",
    "meaning": "Sibuk",
    "radical": "忄",
    "radicalDesc": "Hati",
    "logic": "Suasana batin hati (忄) yang terpecah hilang fokus (亡) karena banyak urusan."
  },
  "累": {
    "pinyin": "lèi",
    "meaning": "Lelah / capek",
    "radical": "田",
    "radicalDesc": "Sawah",
    "logic": "Bekerja seharian di petak sawah (田) mengikat tumpukan benang jerami (糸)."
  },
  "饿": {
    "pinyin": "è",
    "meaning": "Lapar",
    "radical": "饣",
    "radicalDesc": "Makanan",
    "logic": "Diri sendiri (我) yang sangat mendambakan asupan makanan santapan (饣)."
  },
  "渴": {
    "pinyin": "kě",
    "meaning": "Haus / dahaga",
    "radical": "氵",
    "radicalDesc": "Air",
    "logic": "Tenggorokan sangat membutuhkan tetesan air segar (氵) saat terpapar panas matahari (曷)."
  },
  "饱": {
    "pinyin": "bǎo",
    "meaning": "Kenyang",
    "radical": "饣",
    "radicalDesc": "Makanan",
    "logic": "Perut yang telah terisi penuh bungkusan makanan bergizi (饣+包)."
  },
  "漂": {
    "pinyin": "piào",
    "meaning": "Cantik / indah (piāo: mengapung)",
    "radical": "氵",
    "radicalDesc": "Air",
    "logic": "Kain sutra yang dicuci bersih mengapung di aliran air jernih (氵) tampak memikat (票)."
  },
  "亮": {
    "pinyin": "liàng",
    "meaning": "Terang / berkilau",
    "radical": "亠",
    "radicalDesc": "Menara tinggi",
    "logic": "Lentera terang di atas paviliun tinggi (高) yang menyinari malam gulita."
  },
  "干": {
    "pinyin": "gān",
    "meaning": "Kering / bersih (gàn: bekerja)",
    "radical": "干",
    "radicalDesc": "Tombak perisai",
    "logic": "Piktograf perisai yang dijemur di bawah matahari terik hingga mengering."
  },
  "净": {
    "pinyin": "jìng",
    "meaning": "Bersih / murni",
    "radical": "冫",
    "radicalDesc": "Kristal es",
    "logic": "Kristal es murni (冫) yang mencair membasuh segala noda pertengkaran (争)."
  },
  "脏": {
    "pinyin": "zāng",
    "meaning": "Kotor (zàng: organ dalam)",
    "radical": "月",
    "radicalDesc": "Daging tubuh",
    "logic": "Tubuh fisik (月) yang terkena debu lumpur saat bersembunyi (庄)."
  },
  "容": {
    "pinyin": "róng",
    "meaning": "Rupa / mudah / memuat",
    "radical": "宀",
    "radicalDesc": "Atap rumah",
    "logic": "Lembah ngarai (谷) di bawah atap (宀) yang luas menampung segala macam hal."
  },
  "易": {
    "pinyin": "yì",
    "meaning": "Mudah / mengubah",
    "radical": "日",
    "radicalDesc": "Matahari",
    "logic": "Bunglon di bawah matahari yang dengan mudah dan luwes mengubah warna kulitnya."
  },
  "难": {
    "pinyin": "nán",
    "meaning": "Sulit / sukar",
    "radical": "隹",
    "radicalDesc": "Burung",
    "logic": "Burung berbulu indah (隹) yang terperangkap dalam semak duri tanah liat (堇)."
  },
  "清": {
    "pinyin": "qīng",
    "meaning": "Jernih / jelas / bersih",
    "radical": "氵",
    "radicalDesc": "Air",
    "logic": "Aliran air sungai (氵) yang berwarna hijau kebiruan jernih alami (青)."
  },
  "楚": {
    "pinyin": "chǔ",
    "meaning": "Jelas / rapi / teratur",
    "radical": "木",
    "radicalDesc": "Pepohonan",
    "logic": "Dua pohon rimbun (林) yang dipangkas rapi dan jelas terlihat batasnya."
  },
  "真": {
    "pinyin": "zhēn",
    "meaning": "Sungguh / benar / nyata",
    "radical": "目",
    "radicalDesc": "Mata",
    "logic": "Mata batin (目) yang melihat hakikat murni tanpa kepalsuan duniawi."
  },
  "最": {
    "pinyin": "zuì",
    "meaning": "Paling / ter-",
    "radical": "日",
    "radicalDesc": "Matahari",
    "logic": "Matahari (日) tertinggi di angkasa yang diraih dengan tangan mantap (取)."
  },
  "特": {
    "pinyin": "tè",
    "meaning": "Khusus / istimewa / sangat",
    "radical": "牛",
    "radicalDesc": "Sapi",
    "logic": "Seekor banteng jantan pilihan (牛) yang luar biasa unggul di kuil suci (寺)."
  },
  "错": {
    "pinyin": "cuò",
    "meaning": "Salah / keliru",
    "radical": "钅",
    "radicalDesc": "Logam",
    "logic": "Ukiran lapisan emas pada logam (钅) yang letaknya bergeser dari pola asli (昔)."
  },
  "心": {
    "pinyin": "xīn",
    "meaning": "Hati / perasaan / pusat",
    "radical": "心",
    "radicalDesc": "Jantung fisik",
    "logic": "Piktograf ruang bilik jantung manusia sumber detak kehidupan dan perasaan."
  },
  "担": {
    "pinyin": "dān",
    "meaning": "Memikul / cemas khawatir",
    "radical": "扌",
    "radicalDesc": "Tangan",
    "logic": "Tangan (扌) yang memikul beban berat di atas pundak saat matahari terbit (旦)."
  },
  "害": {
    "pinyin": "hài",
    "meaning": "Takut / bahaya / merugikan",
    "radical": "宀",
    "radicalDesc": "Atap rumah",
    "logic": "Kata-kata tajam (口) di bawah atap rumah yang melukai keharmonisan keluarga."
  },
  "怕": {
    "pinyin": "pà",
    "meaning": "Takut / cemas",
    "radical": "忄",
    "radicalDesc": "Hati",
    "logic": "Perasaan batin hati (忄) yang memucat putih (白) karena rasa gentar."
  },
  "舒": {
    "pinyin": "shū",
    "meaning": "Nyaman / rileks / santai",
    "radical": "舌",
    "radicalDesc": "Lidah",
    "logic": "Mengulurkan lidah (舌) menikmati hidangan dengan santai tanpa tekanan beban (予)."
  },
  "身": {
    "pinyin": "shēn",
    "meaning": "Tubuh / badan",
    "radical": "身",
    "radicalDesc": "Tubuh manusia",
    "logic": "Piktograf siluet tubuh manusia yang sedang berdiri menampakkan torso dada."
  },
  "体": {
    "pinyin": "tǐ",
    "meaning": "Badan / fisik / bentuk tubuh",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Sosok manusia (亻) yang berlandaskan akar pokok (本) organ fisik."
  },
  "病": {
    "pinyin": "bìng",
    "meaning": "Sakit / penyakit",
    "radical": "疒",
    "radicalDesc": "Penyakit / ranjang sakit",
    "logic": "Seseorang berbaring di ranjang sakit (疒) dengan suhu badan membara (丙)."
  },
  "感": {
    "pinyin": "gǎn",
    "meaning": "Merasa / terharu / emosi",
    "radical": "心",
    "radicalDesc": "Hati",
    "logic": "Perasaan batin hati (心) yang tersentuh mendalam oleh getaran tombak peristiwa (咸)."
  },
  "冒": {
    "pinyin": "mào",
    "meaning": "Terserang flu / menerobos / topi",
    "radical": "冂",
    "radicalDesc": "Tutup kepala",
    "logic": "Menutupi mata dan kepala menerobos hembusan angin dingin musim salju."
  },
  "雨": {
    "pinyin": "yǔ",
    "meaning": "Hujan",
    "radical": "雨",
    "radicalDesc": "Awan tetes air",
    "logic": "Awan langit menaungi bumi dengan tetesan air hujan yang turun membasahi tanah."
  },
  "雪": {
    "pinyin": "xuě",
    "meaning": "Salju",
    "radical": "雨",
    "radicalDesc": "Hujan",
    "logic": "Kristal putih yang turun dari awan langit (雨) dan dapat disapu dengan sapu tangan (彐)."
  },
  "刮": {
    "pinyin": "guā",
    "meaning": "Meniup kencang / mengikis",
    "radical": "刂",
    "radicalDesc": "Pisau",
    "logic": "Hembusan angin tajam yang mengikis permukaan tanah laksana sayatan pisau (刂)."
  },
  "风": {
    "pinyin": "fēng",
    "meaning": "Angin",
    "radical": "风",
    "radicalDesc": "Hembusan angin",
    "logic": "Piktograf pergerakan uap udara yang berhembus menggerakkan dedaunan semak."
  },
  "阳": {
    "pinyin": "yáng",
    "meaning": "Matahari / terang cerah",
    "radical": "阝",
    "radicalDesc": "Bukit",
    "logic": "Lereng bukit (阝) yang bermandikan pancaran sinar terang matahari (日/昜)."
  },
  "山": {
    "pinyin": "shān",
    "meaning": "Gunung",
    "radical": "山",
    "radicalDesc": "Puncak gunung",
    "logic": "Piktograf tiga puncak gunung batu yang menjulang tinggi ke angkasa."
  },
  "树": {
    "pinyin": "shù",
    "meaning": "Pohon kayu",
    "radical": "木",
    "radicalDesc": "Pohon",
    "logic": "Batang kayu (木) berakar kuat yang ditanam tegak lurus di tanah pekarangan (对)."
  },
  "花": {
    "pinyin": "huā",
    "meaning": "Bunga / menghabiskan uang",
    "radical": "艹",
    "radicalDesc": "Tanaman",
    "logic": "Kuncup tanaman herba (艹) yang bertransformasi mekar indah (化)."
  },
  "草": {
    "pinyin": "cǎo",
    "meaning": "Rumput",
    "radical": "艹",
    "radicalDesc": "Tanaman",
    "logic": "Tunas tanaman liar (艹) yang tumbuh menyambut hangatnya matahari pagi (早)."
  },
  "鸟": {
    "pinyin": "niǎo",
    "meaning": "Burung",
    "radical": "鸟",
    "radicalDesc": "Burung berbulu",
    "logic": "Piktograf unggas berkepala paruh, bermata jeli, bersayap, dan berekor indah."
  },
  "马": {
    "pinyin": "mǎ",
    "meaning": "Kuda",
    "radical": "马",
    "radicalDesc": "Kuda",
    "logic": "Piktograf kuda gagah dengan surai rambut berkibar dan empat kaki berlari kencang."
  },
  "羊": {
    "pinyin": "yáng",
    "meaning": "Domba / kambing",
    "radical": "羊",
    "radicalDesc": "Tanduk domba",
    "logic": "Piktograf kepala kambing lengkap dengan sepasang tanduk melengkung yang lembut."
  },
  "和": {
    "pinyin": "hé",
    "meaning": "Dan / bersama / damai",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Bulir padi (禾) yang dinikmati bersama oleh mulut banyak orang (口) menciptakan kedamaian."
  },
  "跟": {
    "pinyin": "gēn",
    "meaning": "Dengan / mengikuti / tumit",
    "radical": "足",
    "radicalDesc": "Kaki",
    "logic": "Langkah kaki (足) yang mengikuti persis jejak tumit orang di depannya (艮)."
  },
  "因": {
    "pinyin": "yīn",
    "meaning": "Karena / sebab",
    "radical": "囗",
    "radicalDesc": "Batas kotak",
    "logic": "Seseorang yang berbaring di atas tikar (囗) merenungkan sebab musabab suatu hal."
  },
  "为": {
    "pinyin": "wèi",
    "meaning": "Demi / untuk / karena",
    "radical": "丶",
    "radicalDesc": "Titik aksi",
    "logic": "Tangan membimbing gajah bekerja keras demi menyelesaikan suatu perbuatan."
  },
  "所": {
    "pinyin": "suǒ",
    "meaning": "Maka / tempat / kepunyaan",
    "radical": "斤",
    "radicalDesc": "Kapak penanda",
    "logic": "Kapak (斤) di depan pintu rumah (户) menandakan batas lokasi kepunyaan tempat."
  },
  "但": {
    "pinyin": "dàn",
    "meaning": "Tetapi / namun / hanya",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Seseorang (亻) yang menyambut fajar matahari pagi (旦) dengan perubahan sudut pandang."
  },
  "虽": {
    "pinyin": "suī",
    "meaning": "Meskipun / walaupun",
    "radical": "虫",
    "radicalDesc": "Serangga",
    "logic": "Ulat serangga (虫) kecil yang tetap gigih merayap meski menghadapi rintangan."
  },
  "然": {
    "pinyin": "rán",
    "meaning": "Demikian / tentu / namun",
    "radical": "灬",
    "radicalDesc": "Api",
    "logic": "Daging hewan (肉/犬) yang dipanggang di atas bara api (灬) matang secara alami."
  },
  "如": {
    "pinyin": "rú",
    "meaning": "Jika / seperti / laksana",
    "radical": "女",
    "radicalDesc": "Wanita",
    "logic": "Mengikuti ucapan perkataan mulut (口) seorang ibu bijak (女) dengan selaras."
  },
  "就": {
    "pinyin": "jiù",
    "meaning": "Maka / langsung / sudah",
    "radical": "尢",
    "radicalDesc": "Kaki melangkah",
    "logic": "Melangkah mendekati menara ibu kota (京) untuk segera mencapai tujuan."
  },
  "才": {
    "pinyin": "cái",
    "meaning": "Baru saja / bakat / kemampuan",
    "radical": "手",
    "radicalDesc": "Tunas keluar",
    "logic": "Tunas baru yang berhasil menembus kerasnya tanah pembatas."
  },
  "又": {
    "pinyin": "yòu",
    "meaning": "Lagi / pula (tindakan berulang)",
    "radical": "又",
    "radicalDesc": "Tangan kanan",
    "logic": "Piktograf tangan kanan yang terulur sekali lagi melakukan tindakan serupa."
  },
  "从": {
    "pinyin": "cóng",
    "meaning": "Dari / mengikuti",
    "radical": "人",
    "radicalDesc": "Manusia",
    "logic": "Dua orang (人+人) yang berjalan beriringan saling mengikuti langkah dari awal."
  },
  "向": {
    "pinyin": "xiàng",
    "meaning": "Menuju ke arah / menghadap",
    "radical": "口",
    "radicalDesc": "Mulut / jendela",
    "logic": "Jendela ventilasi rumah yang menghadap ke arah utara menyerap sirkulasi udara."
  },
  "比": {
    "pinyin": "bǐ",
    "meaning": "Dibandingkan dengan / membandingkan",
    "radical": "比",
    "radicalDesc": "Dua orang berdampingan",
    "logic": "Dua orang berdiri sejajar berdampingan untuk mengukur perbandingan tinggi badan."
  },
  "啊": {
    "pinyin": "a",
    "meaning": "Partikel seru (wah / ya / oh)",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Mulut (口) yang berseru kagum atau menegaskan kehangatan percakapan."
  },
  "着": {
    "pinyin": "zhe",
    "meaning": "Sedang berlangsung (partikel aspek)",
    "radical": "目",
    "radicalDesc": "Mata",
    "logic": "Mata (目) yang terus mengamati tindakan yang sedang berlangsung terus-menerus."
  },
  "越": {
    "pinyin": "yuè",
    "meaning": "Semakin / melompati batas",
    "radical": "走",
    "radicalDesc": "Berjalan",
    "logic": "Langkah kaki berlari (走) dengan kapak perang (戉) menerobos melompati rintangan."
  },
  "次": {
    "pinyin": "cì",
    "meaning": "Kali (frekuensi) / urutan kedua",
    "radical": "欠",
    "radicalDesc": "Menguap / urutan",
    "logic": "Dua goresan es (冫) penanda perulangan kesempatan kedua."
  },
  "遍": {
    "pinyin": "biàn",
    "meaning": "Kali (dari awal s/d tuntas)",
    "radical": "辶",
    "radicalDesc": "Melangkah",
    "logic": "Melangkah (辶) mengarungi seluruh penjuru buku dari halaman pertama hingga tuntas (扁)."
  },
  "位": {
    "pinyin": "wèi",
    "meaning": "Orang (satuan hormat) / posisi",
    "radical": "亻",
    "radicalDesc": "Manusia",
    "logic": "Seseorang (亻) yang berdiri tegak terhormat di posisinya (立)."
  },
  "辆": {
    "pinyin": "liàng",
    "meaning": "Unit mobil / kendaraan (satuan)",
    "radical": "车",
    "radicalDesc": "Kereta roda",
    "logic": "Kereta beroda dua (车) yang berpasangan seimbang melaju di jalan (两)."
  },
  "首": {
    "pinyin": "shǒu",
    "meaning": "Bait lagu / puisi (satuan) / kepala",
    "radical": "首",
    "radicalDesc": "Kepala berambut",
    "logic": "Piktograf kepala manusia lengkap dengan mata dan helaian rambut utama."
  },
  "题": {
    "pinyin": "tí",
    "meaning": "Soal ujian / judul / topik",
    "radical": "页",
    "radicalDesc": "Kepala / halaman",
    "logic": "Tulisan yang terpampang jelas di bagian kepala halaman dahi lembaran soal (是)."
  },
  "意": {
    "pinyin": "yì",
    "meaning": "Arti / maksud / niat",
    "radical": "心",
    "radicalDesc": "Hati",
    "logic": "Suara bisikan (音) yang bersumber dari dalam lubuk perasaan hati (心)."
  },
  "思": {
    "pinyin": "sī",
    "meaning": "Pikiran / rindu / berpikir",
    "radical": "心",
    "radicalDesc": "Hati",
    "logic": "Ladang benih akal pikiran (田) yang berakar di dalam lubuk hati (心)."
  },
  "情": {
    "pinyin": "qíng",
    "meaning": "Perasaan / emosi / situasi",
    "radical": "忄",
    "radicalDesc": "Hati",
    "logic": "Perasaan batin hati (忄) yang murni dan tulus jernih laksana warna alam (青)."
  },
  "颜": {
    "pinyin": "yán",
    "meaning": "Wajah / paras / warna",
    "radical": "页",
    "radicalDesc": "Wajah kepala",
    "logic": "Rona paras muka yang memancarkan kecerahan warna rupa seseorang."
  },
  "色": {
    "pinyin": "sè",
    "meaning": "Warna / ekspresi wajah",
    "radical": "色",
    "radicalDesc": "Warna roman",
    "logic": "Ekspresi rona emosi yang terpancar pada roman muka manusia."
  },
  "蓝": {
    "pinyin": "lán",
    "meaning": "Biru",
    "radical": "艹",
    "radicalDesc": "Tanaman herbal",
    "logic": "Tanaman herba indigo (艹) yang diekstrak di wadah bejana (监) menghasilkan warna biru laut."
  },
  "黄": {
    "pinyin": "huáng",
    "meaning": "Kuning",
    "radical": "黄",
    "radicalDesc": "Tanah kuning bumi",
    "logic": "Warna tanah liat subur bumi peradaban sungai Tiongkok."
  },
  "橙": {
    "pinyin": "chéng",
    "meaning": "Oranye / jeruk manis",
    "radical": "木",
    "radicalDesc": "Pohon kayu",
    "logic": "Pohon buah (木) yang menghasilkan jeruk segar berwarna jingga ranum (登)."
  },
  "安": {
    "pinyin": "ān",
    "meaning": "Tenang / aman / selamat",
    "radical": "宀",
    "radicalDesc": "Atap rumah",
    "logic": "Seorang wanita (女) yang duduk damai di bawah keteduhan atap rumah (宀)."
  },
  "迎": {
    "pinyin": "yíng",
    "meaning": "Menyambut / menyongsong",
    "radical": "辶",
    "radicalDesc": "Melangkah",
    "logic": "Melangkah maju menyongsong kedatangan tamu yang dinanti (卬)."
  },
  "成": {
    "pinyin": "chéng",
    "meaning": "Menjadi / berhasil / sukses",
    "radical": "戈",
    "radicalDesc": "Tombak senjata",
    "logic": "Mengayunkan tombak menjaga perdamaian hingga tujuan tercapai utuh."
  },
  "功": {
    "pinyin": "gōng",
    "meaning": "Prestasi / keberhasilan / usaha",
    "radical": "力",
    "radicalDesc": "Tenaga",
    "logic": "Mengerahkan seluruh tenaga usaha (力) menuntaskan karya pekerjaan (工)."
  },
  "平": {
    "pinyin": "píng",
    "meaning": "Datar / tenang / damai",
    "radical": "干",
    "radicalDesc": "Timbangan datar",
    "logic": "Timbangan datar rata yang membagi keadilan secara seimbang di kedua sisi."
  },
  "总": {
    "pinyin": "zǒng",
    "meaning": "Selalu / total / umum",
    "radical": "心",
    "radicalDesc": "Hati",
    "logic": "Mengikat seluruh berkas ikatan menjadi satu kesatuan di dalam hati (心)."
  },
  "直": {
    "pinyin": "zhí",
    "meaning": "Lurus / terus menerus",
    "radical": "目",
    "radicalDesc": "Mata",
    "logic": "Pandangan mata (目) yang menatap lurus ke depan tanpa berbelok sedikit pun."
  },
  "签": {
    "pinyin": "qiān",
    "meaning": "Menandatangani / visa",
    "radical": "竹",
    "radicalDesc": "Bambu",
    "logic": "Bilah bambu bertulis (竹) yang disepakati bersama oleh semua pihak (佥)."
  },
  "证": {
    "pinyin": "zhèng",
    "meaning": "Bukti / sertifikat / kartu izin",
    "radical": "讠",
    "radicalDesc": "Kata / ucapan",
    "logic": "Kata-kata pembuktian sah (讠) yang tegak lurus dan benar (正)."
  },
  "辣": {
    "pinyin": "là",
    "meaning": "Pedas",
    "radical": "辛",
    "radicalDesc": "Rasa pedas menyengat",
    "logic": "Rasa pedas menyengat tajam (辛) yang membakar laksana ikatan berkas duri (束)."
  },
  "注": {
    "pinyin": "zhù",
    "meaning": "Menuang / memperhatikan / fokus",
    "radical": "氵",
    "radicalDesc": "Air",
    "logic": "Menuangkan air (氵) terarah laksana sumbu lilin menyala tegak (主)."
  },
  "刚": {
    "pinyin": "gāng",
    "meaning": "Baru saja / kokoh keras",
    "radical": "刂",
    "radicalDesc": "Pisau tajam",
    "logic": "Bilah pisau baja kokoh (刂) yang baru saja memotong benda padat."
  },
  "经": {
    "pinyin": "jīng",
    "meaning": "Sering / melewati / naskah klasik",
    "radical": "纟",
    "radicalDesc": "Benang sutra",
    "logic": "Untaian benang membujur pada alat tenun yang menuntun arah rajutan kain."
  },
  "常": {
    "pinyin": "cháng",
    "meaning": "Sering / biasa / rutin",
    "radical": "巾",
    "radicalDesc": "Kain busana",
    "logic": "Kain pakaian (巾) di bawah atap rumah yang dikenakan setiap hari secara rutin."
  },
  "准": {
    "pinyin": "zhǔn",
    "meaning": "Tepat / standar / mengizinkan",
    "radical": "冫",
    "radicalDesc": "Tetesan es",
    "logic": "Menakar kerataan permukaan air dengan standar presisi burung air (隹)."
  },
  "迟": {
    "pinyin": "chí",
    "meaning": "Terlambat / lamban",
    "radical": "辶",
    "radicalDesc": "Melangkah",
    "logic": "Melangkah lambat (辶) laksana domba bertanduk yang berjalan santai di belakang."
  },
  "附": {
    "pinyin": "fù",
    "meaning": "Dekat / melampirkan",
    "radical": "阝",
    "radicalDesc": "Bukit",
    "logic": "Tanah bukit pelindung (阝) yang menempel berdampingan dekat dengan perumahan."
  },
  "弯": {
    "pinyin": "wān",
    "meaning": "Tikungan / membungkuk",
    "radical": "弓",
    "radicalDesc": "Busur melengkung",
    "logic": "Lengkungan elastis busur panah (弓) yang membengkok lentur."
  },
  "迷": {
    "pinyin": "mí",
    "meaning": "Tersesat / penggemar berat",
    "radical": "辶",
    "radicalDesc": "Melangkah",
    "logic": "Melangkah (辶) di antara labirin bulir padi (米) hingga kehilangan arah."
  },
  "育": {
    "pinyin": "yù",
    "meaning": "Pendidikan jasmani / membesarkan",
    "radical": "月",
    "radicalDesc": "Daging tubuh",
    "logic": "Membimbing anak bayi bertumbuh kembang sehat jasmani dan rohani."
  },
  "李": {
    "pinyin": "lǐ",
    "meaning": "Marga Li / buah plum",
    "radical": "木",
    "radicalDesc": "Pohon kayu",
    "logic": "Pohon kayu (木) berbuah lebat yang dinaungi banyak anak generasi penerus (子)."
  },
  "味": {
    "pinyin": "wèi",
    "meaning": "Rasa / aroma bumbu",
    "radical": "口",
    "radicalDesc": "Mulut kecap",
    "logic": "Mulut (口) yang mengecap cita rasa kuncup dahan segar tanaman (未)."
  },
  "鲜": {
    "pinyin": "xiān",
    "meaning": "Segar / sedap gurih",
    "radical": "鱼",
    "radicalDesc": "Ikan",
    "logic": "Perpaduan gurih alami antara daging ikan segar (鱼) dan daging domba (羊)."
  },
  "甜": {
    "pinyin": "tián",
    "meaning": "Manis",
    "radical": "甘",
    "radicalDesc": "Manis",
    "logic": "Mengecap zat manis di lidah (舌) yang menenangkan rongga mulut (甘)."
  },
  "酸": {
    "pinyin": "suān",
    "meaning": "Asam / pegal linu",
    "radical": "酉",
    "radicalDesc": "Guci fermentasi",
    "logic": "Guci arak (酉) yang terfermentasi menghasilkan aroma rasa asam menyengat."
  },
  "咸": {
    "pinyin": "xián",
    "meaning": "Asin / semua",
    "radical": "口",
    "radicalDesc": "Mulut",
    "logic": "Mulut (口) yang merasakan gurihnya taburan garam pada daging kurban."
  },
  "盘": {
    "pinyin": "pán",
    "meaning": "Piring hidangan / baki",
    "radical": "皿",
    "radicalDesc": "Wadah bejana",
    "logic": "Wadah piring datar (皿) yang diputar melingkar menampung hidangan lezat."
  },
  "量": {
    "pinyin": "liàng",
    "meaning": "Kuantitas / menakar (liáng: mengukur)",
    "radical": "里",
    "radicalDesc": "Desa ukuran",
    "logic": "Matahari terbit (旦) menakar timbangan karung hasil panen perkampungan (里)."
  },
  "笑": {
    "pinyin": "xiào",
    "meaning": "Tersenyum / tertawa",
    "radical": "竹",
    "radicalDesc": "Bambu",
    "logic": "Dedaunan bambu (竹) yang meliuk berdesir tertiup angin laksana senyuman riang manusia (夭)."
  },
  "互": {
    "pinyin": "hù",
    "meaning": "Saling / timbal balik",
    "radical": "二",
    "radicalDesc": "Dua garis",
    "logic": "Kumparan tali penarik air yang saling bertaut timbal balik satu sama lain."
  },
  "相": {
    "pinyin": "xiāng",
    "meaning": "Saling (xiàng: rupa penampilan)",
    "radical": "目",
    "radicalDesc": "Mata",
    "logic": "Mata (目) yang memandang dahan pohon kayu (木) berhadap-hadapan."
  },
  "顾": {
    "pinyin": "gù",
    "meaning": "Menoleh / merawat / pelanggan",
    "radical": "页",
    "radicalDesc": "Kepala menoleh",
    "logic": "Menolehkan kepala (页) dengan penuh perhatian menjaga keselamatan anak burung (雇)."
  },
  "放": {
    "pinyin": "fàng",
    "meaning": "Meletakkan / melepas / libur",
    "radical": "攵",
    "radicalDesc": "Aksi tangan",
    "logic": "Tangan (攵) yang melepaskan ikatan rakit perahu (方) berlayar bebas di sungai."
  },
  "手": {
    "pinyin": "shǒu",
    "meaning": "Tangan",
    "radical": "手",
    "radicalDesc": "Tangan",
    "logic": "Piktograf telapak tangan dengan jari-jemari terentang melambangkan kemampuan menggenggam dan bekerja."
  },
  "也": {
    "pinyin": "yě",
    "meaning": "Juga / pula",
    "radical": "乙",
    "radicalDesc": "Garis bengkok",
    "logic": "Piktograf bejana air tradisional penampung tambahan melambangkan pengulangan atau penambahan kondisi serupa."
  }
};

// Fungsi pendeteksi dekomposisi per karakter & radikal
export function getHanziBreakdown(hanziString) {
  if (!hanziString) return [];
  const hanziChars = hanziString.match(/[\u4e00-\u9fa5]/g) || [];
  if (hanziChars.length === 0) return [];

  // Deduplikasi karakter berturut-turut agar tidak dobel (misal 妈妈 -> 妈)
  const uniqueChars = Array.from(new Set(hanziChars));

  return uniqueChars.map(ch => {
    if (HANZI_BREAKDOWN_DICT[ch]) {
      const item = HANZI_BREAKDOWN_DICT[ch];
      return {
        char: ch,
        pinyin: item.pinyin || '',
        meaning: item.meaning || 'Karakter Hanzi',
        radical: item.radical || '一',
        radicalMeaning: item.radicalDesc || COMMON_RADICALS[item.radical]?.name || 'Bagian Pembentuk',
        explanation: item.logic || ''
      };
    }

    // Fallback cerdas jika karakter di luar database
    let foundRad = '一';
    let radDesc = 'Garis dasar pembentuk';

    for (const [rad, info] of Object.entries(COMMON_RADICALS)) {
      if (ch.includes(rad) && rad !== '一') {
        foundRad = rad;
        radDesc = info.name;
        break;
      }
    }

    return {
      char: ch,
      pinyin: '',
      meaning: 'Karakter Hanzi dasar',
      radical: foundRad,
      radicalMeaning: radDesc,
      explanation: `Mengandung unsur radikal ${foundRad} (${radDesc}).`
    };
  });
}

// Helper untuk menghasilkan rumus gabungan arti kata (misal: 星 (Bintang) + 期 (Periode) ➔ 星期 (Minggu / Pekan))
export function getWordBreakdownInfo(wordObj) {
  if (!wordObj || !wordObj.hanzi) return null;
  const breakdown = getHanziBreakdown(wordObj.hanzi);
  if (!breakdown || breakdown.length === 0) return null;

  const isCompound = breakdown.length > 1;
  let formula = '';

  if (isCompound) {
    const parts = breakdown.map(item => {
      // Ambil arti ringkas karakter (maksimal 2 kata pertama sebelum '/')
      const shortMeaning = (item.meaning || '').split('/')[0].trim();
      return `${item.char} (${shortMeaning})`;
    }).join(' + ');

    const wordMeaning = (wordObj.arti || '').split('/')[0].trim();
    formula = `${parts} ➔ ${wordObj.hanzi} (${wordMeaning})`;
  }

  return {
    chars: breakdown,
    isCompound,
    formula
  };
}

export default getHanziBreakdown;
