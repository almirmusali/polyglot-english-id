import type { Lesson } from "./types";

export const lessons: Lesson[] = [
  // ============================================================
  // PELAJARAN 1
  // ============================================================
  {
    id: 1,
    slug: "bentuk-dasar-kata-kerja",
    title: "Pelajaran 1 — Bentuk Dasar Kata Kerja",
    subtitle: "Tiga waktu, tiga jenis kalimat — kerangka bahasa Inggris",
    goal: "Menguasai struktur paling fundamental bahasa Inggris: bagaimana satu kata kerja berubah di tiga waktu sederhana (sekarang, lampau, akan datang) dan bagaimana membentuk tiga jenis kalimat — positif, negatif, dan pertanyaan.",
    intro:
      "Pelajaran pertama ini adalah kerangka utama bahasa Inggris. Setelah Anda menguasainya, sekitar 70% percakapan sehari-hari sudah ada dalam jangkauan Anda. Kita akan belajar bagaimana satu kata kerja berubah di tiga waktu, dan di setiap waktu kita membuat tiga bentuk kalimat: positif, negatif, dan pertanyaan. Dalam bahasa Indonesia kata kerja tidak berubah (\"saya cinta\", \"saya akan cinta\", \"saya sudah cinta\") — tetapi dalam bahasa Inggris bentuk kata kerja dan kata bantunya berubah. Itulah yang akan kita kuasai sekarang.",
    grammar: [
      {
        heading: "Kata ganti orang — referensi cepat",
        explanation:
          "Sebelum mulai, ingat kata ganti subjek bahasa Inggris. Anda akan melihatnya di setiap tabel di bawah ini. Hal penting yang harus diingat: di waktu sekarang, jika subjeknya he / she / it — kata kerja mendapat tambahan -s.",
        table: {
          caption: "Kata Ganti Subjek",
          columns: ["English", "Bahasa Indonesia"],
          rows: [
            ["I", "saya / aku"],
            ["you", "kamu / Anda / kalian"],
            ["he", "dia (laki-laki)"],
            ["she", "dia (perempuan)"],
            ["it", "ia / itu (benda, hewan)"],
            ["we", "kami / kita"],
            ["they", "mereka"],
          ],
        },
      },
      {
        heading: "1. Waktu Sekarang (Present Simple)",
        explanation:
          "Kalimat positif dibentuk seperti dalam bahasa Indonesia: subjek + kata kerja. Tetapi jika subjeknya he / she / it, tambahkan -s di akhir kata kerja. Kalimat negatif menggunakan kata bantu do / does + not. Pertanyaan dibentuk dengan meletakkan Do / Does di awal kalimat. Perhatikan: setelah doesn't, akhiran -s di kata kerja hilang — kata kerja kembali ke bentuk dasar.",
        conjugation: {
          verb: "to love (mencintai)",
          tense: "Sekarang — Present Simple",
          columns: ["Positif", "Negatif", "Pertanyaan"],
          hint: "Singkatan: do not = don't, does not = doesn't",
          groups: [
            {
              pronouns: ["I", "you", "we", "they"],
              cells: ["love", "don't love", "Do ... love?"],
            },
            {
              pronouns: ["he", "she", "it"],
              cells: ["loves", "doesn't love", "Does ... love?"],
            },
          ],
        },
        examples: [
          { en: "I love coffee.", id: "Saya suka kopi." },
          { en: "She loves music.", id: "Dia suka musik." },
          { en: "We don't love noise.", id: "Kami tidak suka kebisingan." },
          { en: "Does he love football?", id: "Apakah dia suka sepak bola?" },
        ],
        note:
          "Kesalahan paling umum: lupa -s untuk dia (he/she/it). Aturan emas — periksa subjek sebelum menulis kata kerja.",
      },
      {
        heading: "2. Waktu Lampau (Past Simple)",
        explanation:
          "Untuk kata kerja beraturan, bentuk lampau dibuat dengan menambahkan -ed. Yang menyenangkan: bentuknya sama untuk SEMUA subjek — tidak perlu pikirkan -s lagi. Kalimat negatif dan pertanyaan menggunakan kata bantu did (untuk semua subjek), dan kata kerja kembali ke bentuk dasar.",
        conjugation: {
          verb: "to love → loved",
          tense: "Lampau — Past Simple",
          columns: ["Positif", "Negatif", "Pertanyaan"],
          hint: "Singkatan: did not = didn't",
          groups: [
            {
              pronouns: ["I", "you", "he", "she", "it", "we", "they"],
              cells: ["loved", "didn't love", "Did ... love?"],
            },
          ],
        },
        examples: [
          { en: "I worked yesterday.", id: "Saya bekerja kemarin." },
          { en: "She didn't call me.", id: "Dia tidak meneleponku." },
          { en: "Did you study last night?", id: "Apakah kamu belajar tadi malam?" },
          { en: "They played football on Sunday.", id: "Mereka bermain sepak bola hari Minggu." },
        ],
        note:
          "Untuk kata kerja tidak beraturan (go → went, see → saw), bentuknya tidak menambah -ed — kita akan pelajari di Pelajaran 9. Tetapi pola DID + bentuk dasar untuk pertanyaan dan negasi tetap sama.",
      },
      {
        heading: "3. Waktu Akan Datang (Future Simple)",
        explanation:
          "Bentuk masa depan paling sederhana: tambahkan kata bantu will sebelum kata kerja dasar. Bentuknya sama untuk semua subjek. Negasi: will + not = won't. Pertanyaan: pindahkan will ke awal kalimat.",
        conjugation: {
          verb: "to love",
          tense: "Akan datang — Future Simple",
          columns: ["Positif", "Negatif", "Pertanyaan"],
          hint: "Singkatan: will not = won't, I will = I'll",
          groups: [
            {
              pronouns: ["I", "you", "he", "she", "it", "we", "they"],
              cells: ["will love", "won't love", "Will ... love?"],
            },
          ],
        },
        examples: [
          { en: "I will help you tomorrow.", id: "Saya akan membantumu besok." },
          { en: "She won't come tonight.", id: "Dia tidak akan datang malam ini." },
          { en: "Will they arrive on time?", id: "Apakah mereka akan tiba tepat waktu?" },
        ],
      },
      {
        heading: "Ringkasan — pola di tiga waktu",
        explanation:
          "Lihat satu kata kerja menyatu di seluruh waktu. Inilah kerangka yang Anda akan terapkan ke ribuan kata kerja lain.",
        table: {
          caption: "Pola umum — \"to work\" (bekerja)",
          columns: ["Waktu", "Positif", "Negatif", "Pertanyaan"],
          rows: [
            ["Sekarang (I/you/we/they)", "I work", "I don't work", "Do I work?"],
            ["Sekarang (he/she/it)", "He works", "He doesn't work", "Does he work?"],
            ["Lampau", "I worked", "I didn't work", "Did I work?"],
            ["Akan datang", "I will work", "I won't work", "Will I work?"],
          ],
        },
        note:
          "Perhatikan pola kata bantu: sekarang → do/does, lampau → did, akan datang → will. Setiap kata bantu \"menangani\" negasi dan pertanyaan. Setelah kata bantu, kata kerja SELALU dalam bentuk dasar.",
      },
      {
        heading: "Beberapa kata kerja untuk latihan",
        explanation:
          "Coba terapkan pola yang sama ke kata kerja lain. Cukup dengan beberapa kata kerja ini, Anda sudah bisa membuat ratusan kalimat.",
        table: {
          caption: "Kata kerja beraturan yang sering",
          columns: ["Dasar (V1)", "Lampau (V2)", "Arti"],
          rows: [
            ["work", "worked", "bekerja"],
            ["play", "played", "bermain"],
            ["study", "studied", "belajar"],
            ["like", "liked", "menyukai"],
            ["want", "wanted", "ingin"],
            ["live", "lived", "tinggal"],
            ["talk", "talked", "berbicara"],
            ["help", "helped", "menolong"],
            ["watch", "watched", "menonton"],
            ["listen", "listened", "mendengarkan"],
          ],
        },
      },
    ],
    vocabulary: [
      { en: "to love", id: "mencintai / menyukai", pron: "tu lav" },
      { en: "to work", id: "bekerja", pron: "tu werk" },
      { en: "to play", id: "bermain", pron: "tu plei" },
      { en: "to study", id: "belajar", pron: "tu sta-di" },
      { en: "to like", id: "menyukai", pron: "tu laik" },
      { en: "to want", id: "ingin", pron: "tu wont" },
      { en: "to live", id: "tinggal / hidup", pron: "tu liv" },
      { en: "to help", id: "menolong", pron: "tu help" },
      { en: "to watch", id: "menonton", pron: "tu wotc" },
      { en: "to listen", id: "mendengarkan", pron: "tu li-sen" },
      { en: "yesterday", id: "kemarin", pron: "yes-ter-dei" },
      { en: "today", id: "hari ini", pron: "tu-dei" },
      { en: "tomorrow", id: "besok", pron: "tu-mor-ou" },
      { en: "now", id: "sekarang", pron: "nau" },
    ],
    phrases: [
      { en: "I love you.", id: "Aku mencintaimu." },
      { en: "She works in Jakarta.", id: "Dia bekerja di Jakarta." },
      { en: "Do you like coffee?", id: "Apakah kamu suka kopi?" },
      { en: "He doesn't watch TV.", id: "Dia tidak menonton TV." },
      { en: "We played football yesterday.", id: "Kami bermain sepak bola kemarin." },
      { en: "I didn't study last night.", id: "Saya tidak belajar tadi malam." },
      { en: "Did they help you?", id: "Apakah mereka menolongmu?" },
      { en: "I will call you tomorrow.", id: "Saya akan meneleponmu besok." },
      { en: "She won't come tonight.", id: "Dia tidak akan datang malam ini." },
      { en: "Will you help me?", id: "Maukah kamu membantuku?" },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Isi bentuk kata kerja yang benar (Present Simple).",
        question: "She ___ (love) music.",
        answer: "loves",
      },
      {
        type: "fill",
        prompt: "Buat ke bentuk negatif (Present Simple).",
        question: "He ___ (not / like) coffee.",
        answer: "doesn't like",
      },
      {
        type: "fill",
        prompt: "Buat ke bentuk lampau.",
        question: "We ___ (work) yesterday.",
        answer: "worked",
      },
      {
        type: "fill",
        prompt: "Buat pertanyaan di waktu lampau.",
        question: "___ you (study) last night?",
        answer: "Did you study",
      },
      {
        type: "fill",
        prompt: "Buat ke bentuk masa depan.",
        question: "I ___ (call) you tomorrow.",
        answer: "will call",
      },
      {
        type: "translate",
        prompt: "Terjemahkan ke bahasa Inggris.",
        question: "Dia tidak menonton TV.",
        answer: "He doesn't watch TV.",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Apakah kamu akan datang besok?",
        answer: "Will you come tomorrow?",
      },
      {
        type: "choose",
        prompt: "Pilih kata bantu yang benar.",
        question: "___ she like Indonesian food?",
        answer: "Does",
        options: ["Do", "Does", "Did", "Is"],
      },
      {
        type: "choose",
        prompt: "Pilih bentuk yang benar.",
        question: "They ___ football last Sunday.",
        answer: "played",
        options: ["play", "plays", "played", "will play"],
      },
    ],
  },

  // ============================================================
  // PELAJARAN 2
  // ============================================================
  {
    id: 2,
    slug: "tiga-bentuk-waktu",
    title: "Pelajaran 2 — Tiga Bentuk Waktu (Piramida)",
    subtitle: "Saat ini, dulu, nanti — fondasi semua kalimat",
    goal: "Memahami konsep utama bahasa Inggris: setiap kata kerja punya tiga bentuk waktu — sekarang, lampau, dan akan datang.",
    intro:
      "Dalam bahasa Indonesia kita menambahkan kata seperti \"sudah\", \"sedang\", \"akan\" — kata kerjanya sendiri tidak berubah. Dalam bahasa Inggris, bentuk kata kerja itu sendiri berubah, atau kita menambahkan kata bantu. Mari kita pelajari piramida sederhana.",
    grammar: [
      {
        heading: "Piramida tiga bentuk waktu",
        explanation:
          "Bayangkan piramida dengan tiga sisi: Sekarang (Present), Lampau (Past), dan Masa Depan (Future). Setiap kalimat berada di salah satu sisi.",
        table: {
          caption: "Tiga bentuk waktu — contoh \"to work\" (bekerja)",
          columns: ["Waktu", "Bentuk", "Arti"],
          rows: [
            ["Present (sekarang)", "I work", "Saya bekerja"],
            ["Past (lampau)", "I worked", "Saya bekerja (kemarin)"],
            ["Future (akan datang)", "I will work", "Saya akan bekerja"],
          ],
        },
      },
      {
        heading: "Pola untuk semua kata ganti — Present Simple",
        explanation:
          "Untuk \"saya, kamu, kami, mereka\" — gunakan bentuk dasar. Untuk \"dia (he/she/it)\" — tambahkan -s di akhir.",
        table: {
          caption: "Present Simple — \"to work\"",
          columns: ["Subjek", "Bentuk", "Contoh"],
          rows: [
            ["I", "work", "I work in Jakarta."],
            ["You", "work", "You work hard."],
            ["He", "works", "He works at home."],
            ["She", "works", "She works in a bank."],
            ["It", "works", "It works well. (alat ini bekerja dengan baik)"],
            ["We", "work", "We work together."],
            ["They", "work", "They work every day."],
          ],
        },
        note:
          "Aturan -s untuk he/she/it adalah salah satu kesalahan paling umum. Selalu periksa: jika subjeknya dia → tambahkan -s.",
      },
      {
        heading: "Past Simple — bentuk lampau",
        explanation:
          "Untuk kata kerja beraturan (regular verbs), tambahkan -ed. Bentuknya sama untuk semua subjek.",
        table: {
          caption: "Past Simple — \"to work\"",
          columns: ["Subjek", "Bentuk", "Contoh"],
          rows: [
            ["I / You / He / She / It / We / They", "worked", "I worked yesterday."],
          ],
        },
        examples: [
          { en: "She worked late last night.", id: "Dia bekerja sampai larut malam tadi malam." },
          { en: "We talked on the phone.", id: "Kami berbicara di telepon." },
          { en: "They lived in Bandung.", id: "Mereka tinggal di Bandung." },
        ],
      },
      {
        heading: "Future Simple — bentuk akan datang",
        explanation:
          "Tambahkan kata bantu \"will\" sebelum kata kerja. Bentuknya sama untuk semua subjek. Bentuk singkat: I'll, you'll, he'll, she'll, we'll, they'll.",
        examples: [
          { en: "I will call you tomorrow.", id: "Saya akan meneleponmu besok." },
          { en: "She will study English.", id: "Dia akan belajar bahasa Inggris." },
          { en: "We will travel to Bali.", id: "Kami akan bepergian ke Bali." },
        ],
      },
    ],
    vocabulary: [
      { en: "to work", id: "bekerja", pron: "tu werk" },
      { en: "to live", id: "tinggal / hidup", pron: "tu liv" },
      { en: "to study", id: "belajar", pron: "tu sta-di" },
      { en: "to speak", id: "berbicara", pron: "tu spik" },
      { en: "to want", id: "ingin", pron: "tu wont" },
      { en: "to like", id: "suka", pron: "tu laik" },
      { en: "to know", id: "tahu / kenal", pron: "tu nou" },
      { en: "to think", id: "berpikir", pron: "tu thingk" },
      { en: "yesterday", id: "kemarin", pron: "yes-ter-dei" },
      { en: "today", id: "hari ini", pron: "tu-dei" },
      { en: "tomorrow", id: "besok", pron: "tu-mor-ou" },
      { en: "now", id: "sekarang", pron: "nau" },
      { en: "later", id: "nanti", pron: "lei-ter" },
      { en: "every day", id: "setiap hari", pron: "ev-ri dei" },
    ],
    phrases: [
      { en: "I work in an office.", id: "Saya bekerja di kantor." },
      { en: "She lives in Surabaya.", id: "Dia tinggal di Surabaya." },
      { en: "We studied English last year.", id: "Kami belajar bahasa Inggris tahun lalu." },
      { en: "He will arrive tomorrow.", id: "Dia akan tiba besok." },
      { en: "They liked the movie.", id: "Mereka menyukai film itu." },
      { en: "I want to learn fast.", id: "Saya ingin belajar dengan cepat." },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Isi bentuk kata kerja yang benar (Present Simple).",
        question: "He ___ (work) every day.",
        answer: "works",
      },
      {
        type: "fill",
        prompt: "Isi bentuk Past Simple.",
        question: "We ___ (live) in Bali last year.",
        answer: "lived",
      },
      {
        type: "translate",
        prompt: "Terjemahkan ke bahasa Inggris.",
        question: "Saya akan belajar besok.",
        answer: "I will study tomorrow.",
      },
      {
        type: "choose",
        prompt: "Pilih bentuk yang benar.",
        question: "She ___ English every morning.",
        answer: "studies",
        options: ["study", "studies", "studied", "will study"],
      },
    ],
  },

  // ============================================================
  // PELAJARAN 3
  // ============================================================
  {
    id: 3,
    slug: "pertanyaan-dan-negasi",
    title: "Pelajaran 3 — Pertanyaan & Negasi dengan do/does/did",
    subtitle: "Bagaimana bertanya dan mengatakan \"tidak\"",
    goal: "Mempelajari kata bantu do, does, did, will untuk membuat pertanyaan dan kalimat negatif.",
    intro:
      "Dalam bahasa Indonesia kita tinggal menambahkan \"apakah\" atau \"tidak\". Dalam bahasa Inggris kita butuh kata bantu khusus: do (saya/kamu/kami/mereka), does (dia), did (lampau), will (masa depan).",
    grammar: [
      {
        heading: "Kata bantu (Auxiliary verbs)",
        explanation:
          "Kata bantu adalah \"penolong\" yang membantu membentuk pertanyaan dan negasi. Setelah kata bantu, kata kerja kembali ke bentuk dasar.",
        table: {
          caption: "Kata bantu",
          columns: ["Waktu", "Subjek", "Kata bantu"],
          rows: [
            ["Present", "I, you, we, they", "do"],
            ["Present", "he, she, it", "does"],
            ["Past", "semua subjek", "did"],
            ["Future", "semua subjek", "will"],
          ],
        },
      },
      {
        heading: "Negasi",
        explanation:
          "Rumus: subjek + kata bantu + not + kata kerja dasar. Perhatikan: kata kerja kembali ke bentuk asli, tanpa -s dan tanpa -ed.",
        table: {
          caption: "Negasi",
          columns: ["Kalimat positif", "Negasi", "Bentuk singkat"],
          rows: [
            ["I work.", "I do not work.", "I don't work."],
            ["She works.", "She does not work.", "She doesn't work."],
            ["They worked.", "They did not work.", "They didn't work."],
            ["We will work.", "We will not work.", "We won't work."],
          ],
        },
        note: "Perhatikan: \"She doesn't works\" — SALAH. Yang benar: \"She doesn't work.\"",
      },
      {
        heading: "Pertanyaan (Yes/No)",
        explanation:
          "Rumus: kata bantu + subjek + kata kerja dasar + ...?",
        table: {
          caption: "Pertanyaan ya/tidak",
          columns: ["Pernyataan", "Pertanyaan"],
          rows: [
            ["You speak English.", "Do you speak English?"],
            ["He lives here.", "Does he live here?"],
            ["They came yesterday.", "Did they come yesterday?"],
            ["She will help me.", "Will she help me?"],
          ],
        },
      },
      {
        heading: "Kata tanya WH-",
        explanation:
          "Untuk pertanyaan terbuka, mulai dengan kata tanya, lalu ikuti pola pertanyaan biasa.",
        table: {
          caption: "Kata tanya utama",
          columns: ["English", "Bahasa Indonesia"],
          rows: [
            ["What", "apa"],
            ["Who", "siapa"],
            ["Where", "di mana"],
            ["When", "kapan"],
            ["Why", "mengapa"],
            ["How", "bagaimana"],
            ["Which", "yang mana"],
            ["How much / How many", "berapa banyak"],
          ],
        },
        examples: [
          { en: "Where do you live?", id: "Di mana kamu tinggal?" },
          { en: "What does she want?", id: "Apa yang dia inginkan?" },
          { en: "Why did they leave?", id: "Mengapa mereka pergi?" },
          { en: "When will you come?", id: "Kapan kamu akan datang?" },
        ],
      },
    ],
    vocabulary: [
      { en: "to come", id: "datang", pron: "tu kam" },
      { en: "to go", id: "pergi", pron: "tu gou" },
      { en: "to help", id: "membantu", pron: "tu help" },
      { en: "to ask", id: "bertanya / minta", pron: "tu ask" },
      { en: "to answer", id: "menjawab", pron: "tu an-ser" },
      { en: "to understand", id: "mengerti", pron: "tu an-der-stend" },
      { en: "to remember", id: "ingat", pron: "tu ri-mem-ber" },
      { en: "to forget", id: "lupa", pron: "tu for-get" },
      { en: "why", id: "mengapa", pron: "wai" },
      { en: "where", id: "di mana", pron: "wer" },
      { en: "when", id: "kapan", pron: "wen" },
      { en: "how", id: "bagaimana", pron: "hau" },
    ],
    phrases: [
      { en: "Do you speak English?", id: "Apakah kamu bisa berbahasa Inggris?" },
      { en: "I don't understand.", id: "Saya tidak mengerti." },
      { en: "Where do you live?", id: "Di mana kamu tinggal?" },
      { en: "When did you arrive?", id: "Kapan kamu tiba?" },
      { en: "Why didn't you call me?", id: "Mengapa kamu tidak meneleponku?" },
      { en: "Will you help me?", id: "Maukah kamu membantuku?" },
      { en: "How much does it cost?", id: "Berapa harganya?" },
    ],
    exercises: [
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Apakah dia tinggal di sini?",
        answer: "Does he live here?",
      },
      {
        type: "translate",
        prompt: "Terjemahkan ke bentuk negatif.",
        question: "Saya tidak tahu.",
        answer: "I don't know.",
      },
      {
        type: "fill",
        prompt: "Isi dengan do / does / did.",
        question: "___ she speak English?",
        answer: "Does",
      },
      {
        type: "fill",
        prompt: "Isi dengan kata kerja bantu yang benar.",
        question: "They ___ not come yesterday.",
        answer: "did",
      },
      {
        type: "choose",
        prompt: "Pilih yang benar.",
        question: "Why ___ you leave so early?",
        answer: "did",
        options: ["do", "does", "did", "are"],
      },
    ],
  },

  // ============================================================
  // PELAJARAN 4
  // ============================================================
  {
    id: 4,
    slug: "kata-kepemilikan-to-have",
    title: "Pelajaran 4 — Kata Ganti Kepemilikan & \"to have\"",
    subtitle: "Milik saya, milikmu, miliknya — dan kata kerja \"punya\"",
    goal: "Mempelajari kata ganti kepemilikan (my, your, his …) dan kata kerja \"to have\" (mempunyai).",
    intro:
      "Setelah Anda menguasai \"to be\", langkah kedua adalah \"to have\" (mempunyai). Ditambah kata-kata kepemilikan, Anda bisa berbicara tentang keluarga, barang, dan kehidupan.",
    grammar: [
      {
        heading: "Kata ganti kepemilikan",
        explanation:
          "Ini menggantikan kata seperti \"saya\" → \"milik saya\" dan diletakkan SEBELUM kata benda.",
        table: {
          caption: "Possessive Adjectives",
          columns: ["Subjek", "Kepemilikan", "Contoh"],
          rows: [
            ["I", "my (saya/-ku)", "my book — buku saya"],
            ["You", "your (kamu/-mu)", "your name — namamu"],
            ["He", "his (-nya laki-laki)", "his car — mobilnya"],
            ["She", "her (-nya perempuan)", "her bag — tasnya"],
            ["It", "its (-nya benda)", "its color — warnanya"],
            ["We", "our (kami/kita)", "our house — rumah kami"],
            ["They", "their (mereka)", "their children — anak-anak mereka"],
          ],
        },
        note:
          "Jangan bingung: its (kepemilikan) ≠ it's (singkatan \"it is\").",
      },
      {
        heading: "Kata kerja \"to have\"",
        explanation:
          "Berarti \"mempunyai\" / \"memiliki\". Untuk he/she/it gunakan \"has\".",
        table: {
          caption: "Konjugasi \"to have\" — Present Simple",
          columns: ["Subjek", "Bentuk", "Contoh"],
          rows: [
            ["I / You / We / They", "have", "I have a brother. (Saya punya saudara laki-laki.)"],
            ["He / She / It", "has", "She has two cats. (Dia punya dua kucing.)"],
          ],
        },
      },
      {
        heading: "Negasi dan pertanyaan dengan \"have\"",
        explanation:
          "Gunakan kata bantu do/does seperti kata kerja biasa.",
        examples: [
          { en: "I don't have a car.", id: "Saya tidak punya mobil." },
          { en: "Does she have a brother?", id: "Apakah dia punya saudara laki-laki?" },
          { en: "They didn't have money.", id: "Mereka tidak punya uang." },
        ],
        note:
          "Bentuk lampau: had (untuk semua subjek). \"I had a dream.\" — Saya bermimpi.",
      },
      {
        heading: "Bentuk lain — possessive 's",
        explanation:
          "Untuk menyatakan \"milik seseorang\", tambahkan 's pada nama atau kata benda.",
        examples: [
          { en: "Andi's car", id: "mobil Andi" },
          { en: "my mother's name", id: "nama ibu saya" },
          { en: "the teacher's book", id: "buku guru itu" },
        ],
      },
    ],
    vocabulary: [
      { en: "family", id: "keluarga", pron: "fem-i-li" },
      { en: "mother", id: "ibu", pron: "ma-ther" },
      { en: "father", id: "ayah", pron: "fa-ther" },
      { en: "brother", id: "saudara laki-laki", pron: "bra-ther" },
      { en: "sister", id: "saudara perempuan", pron: "sis-ter" },
      { en: "child / children", id: "anak / anak-anak", pron: "caild / cil-dren" },
      { en: "wife", id: "istri", pron: "waif" },
      { en: "husband", id: "suami", pron: "haz-bend" },
      { en: "house", id: "rumah", pron: "haus" },
      { en: "car", id: "mobil", pron: "kar" },
      { en: "money", id: "uang", pron: "ma-ni" },
      { en: "job", id: "pekerjaan", pron: "djob" },
      { en: "phone", id: "telepon", pron: "foun" },
    ],
    phrases: [
      { en: "I have two brothers.", id: "Saya punya dua saudara laki-laki." },
      { en: "What is your name?", id: "Siapa namamu?" },
      { en: "My name is Budi.", id: "Nama saya Budi." },
      { en: "She has a new job.", id: "Dia punya pekerjaan baru." },
      { en: "Their house is big.", id: "Rumah mereka besar." },
      { en: "Do you have a phone number?", id: "Apakah kamu punya nomor telepon?" },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Isi dengan have atau has.",
        question: "She ___ three children.",
        answer: "has",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Ini adalah mobil saya.",
        answer: "This is my car.",
      },
      {
        type: "fill",
        prompt: "Pilih kata kepemilikan yang benar.",
        question: "He loves ___ family. (his/her)",
        answer: "his",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Apakah mereka punya rumah?",
        answer: "Do they have a house?",
      },
    ],
  },

  // ============================================================
  // PELAJARAN 5
  // ============================================================
  {
    id: 5,
    slug: "artikel-dan-jamak",
    title: "Pelajaran 5 — Artikel (a/an/the) & Bentuk Jamak",
    subtitle: "Kata kecil yang mengubah segalanya",
    goal: "Memahami artikel a, an, the — dan cara membuat kata benda jamak.",
    intro:
      "Dalam bahasa Indonesia tidak ada artikel — kita bilang \"saya beli buku\". Dalam bahasa Inggris hampir selalu ada \"the book\" atau \"a book\". Ini adalah salah satu hal paling sulit bagi orang Indonesia. Mari kita pelajari pelan-pelan.",
    grammar: [
      {
        heading: "A / An — artikel tak tentu",
        explanation:
          "Digunakan untuk kata benda tunggal yang belum spesifik. Artinya seperti \"sebuah / sebatang / seorang\".",
        table: {
          caption: "Kapan a, kapan an?",
          columns: ["Aturan", "Contoh"],
          rows: [
            ["a + konsonan", "a book, a car, a teacher"],
            ["an + vokal (a, e, i, o, u)", "an apple, an idea, an hour"],
          ],
        },
        note:
          "Yang penting adalah BUNYI, bukan huruf. \"An hour\" karena \"h\" tidak diucapkan. \"A university\" karena dibaca \"yu-ni-ver-si-ti\".",
      },
      {
        heading: "The — artikel tentu",
        explanation:
          "Digunakan ketika pembicara dan pendengar tahu benda mana yang dimaksud. Bisa untuk tunggal maupun jamak.",
        examples: [
          { en: "I bought a book. The book is interesting.", id: "Saya membeli sebuah buku. Buku itu menarik. (sudah jelas mana)" },
          { en: "The sun is hot.", id: "Matahari panas. (hanya ada satu)" },
          { en: "Open the door, please.", id: "Buka pintunya, tolong." },
        ],
      },
      {
        heading: "Kapan TIDAK pakai artikel",
        explanation:
          "Beberapa kasus tidak menggunakan artikel sama sekali.",
        examples: [
          { en: "I like music.", id: "Saya suka musik. (umum)" },
          { en: "She speaks English.", id: "Dia berbicara bahasa Inggris. (nama bahasa)" },
          { en: "We go to school by bus.", id: "Kami ke sekolah dengan bus. (ungkapan tetap)" },
        ],
      },
      {
        heading: "Bentuk jamak",
        explanation:
          "Tambahkan -s pada kata benda. Ada beberapa pengecualian.",
        table: {
          caption: "Aturan bentuk jamak",
          columns: ["Aturan", "Tunggal", "Jamak"],
          rows: [
            ["Tambah -s biasa", "book", "books"],
            ["Akhiran -s, -sh, -ch, -x → -es", "box", "boxes"],
            ["Akhiran konsonan + y → -ies", "city", "cities"],
            ["Akhiran -f, -fe → -ves", "knife", "knives"],
            ["Tidak beraturan", "child", "children"],
            ["Tidak beraturan", "man", "men"],
            ["Tidak beraturan", "woman", "women"],
            ["Tidak beraturan", "foot", "feet"],
          ],
        },
      },
    ],
    vocabulary: [
      { en: "apple", id: "apel", pron: "e-pol" },
      { en: "door", id: "pintu", pron: "dor" },
      { en: "window", id: "jendela", pron: "win-dou" },
      { en: "table", id: "meja", pron: "tei-bol" },
      { en: "chair", id: "kursi", pron: "cer" },
      { en: "city", id: "kota", pron: "si-ti" },
      { en: "country", id: "negara", pron: "kan-tri" },
      { en: "language", id: "bahasa", pron: "leng-guej" },
      { en: "music", id: "musik", pron: "miu-zik" },
      { en: "man / men", id: "pria / para pria", pron: "men / men" },
      { en: "woman / women", id: "wanita / para wanita", pron: "wu-men / wi-men" },
      { en: "knife / knives", id: "pisau / pisau-pisau", pron: "naif / naivz" },
    ],
    phrases: [
      { en: "I have an idea.", id: "Saya punya ide." },
      { en: "Open the window, please.", id: "Buka jendelanya, tolong." },
      { en: "She is a teacher.", id: "Dia seorang guru." },
      { en: "The children are playing.", id: "Anak-anak sedang bermain." },
      { en: "I love music.", id: "Saya suka musik." },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Isi dengan a, an, atau the (atau kosongkan jika tidak perlu).",
        question: "I bought ___ umbrella yesterday.",
        answer: "an",
      },
      {
        type: "fill",
        prompt: "Isi dengan a, an, the.",
        question: "Please close ___ door.",
        answer: "the",
      },
      {
        type: "fill",
        prompt: "Tuliskan bentuk jamak dari: child.",
        question: "child →",
        answer: "children",
      },
      {
        type: "fill",
        prompt: "Tuliskan bentuk jamak dari: city.",
        question: "city →",
        answer: "cities",
      },
      {
        type: "choose",
        prompt: "Pilih yang benar.",
        question: "She is ___ honest person.",
        answer: "an",
        options: ["a", "an", "the", "—"],
      },
    ],
  },

  // ============================================================
  // PELAJARAN 6
  // ============================================================
  {
    id: 6,
    slug: "preposisi",
    title: "Pelajaran 6 — Preposisi (in, on, at, to …)",
    subtitle: "Kata penghubung tempat dan waktu",
    goal: "Mempelajari preposisi paling penting dan cara menggunakannya untuk tempat dan waktu.",
    intro:
      "Preposisi adalah kata kecil yang menghubungkan kata-kata. Mereka sering tidak diterjemahkan langsung dari bahasa Indonesia, jadi perlu dihafal.",
    grammar: [
      {
        heading: "Preposisi tempat",
        explanation:
          "Tiga yang paling penting: in (di dalam), on (di atas/melekat), at (di titik tertentu).",
        table: {
          caption: "Preposisi tempat",
          columns: ["Preposisi", "Arti", "Contoh"],
          rows: [
            ["in", "di dalam (ruang, kota, negara)", "in Jakarta, in the room, in Indonesia"],
            ["on", "di atas, menempel di permukaan", "on the table, on the wall, on the bus"],
            ["at", "di titik tertentu", "at home, at school, at the door"],
            ["under", "di bawah", "under the table"],
            ["next to", "di samping", "next to the bank"],
            ["between", "di antara (dua)", "between A and B"],
            ["behind", "di belakang", "behind the house"],
            ["in front of", "di depan", "in front of the school"],
          ],
        },
      },
      {
        heading: "Preposisi waktu",
        explanation:
          "Sama tiga utama — in, on, at — tetapi untuk waktu.",
        table: {
          caption: "Preposisi waktu",
          columns: ["Preposisi", "Digunakan untuk", "Contoh"],
          rows: [
            ["in", "bulan, tahun, abad, bagian hari", "in May, in 2025, in the morning"],
            ["on", "hari, tanggal", "on Monday, on July 5th"],
            ["at", "jam, malam, tengah malam", "at 7 o'clock, at night, at noon"],
          ],
        },
      },
      {
        heading: "Preposisi arah",
        explanation:
          "Untuk menunjukkan gerakan atau arah.",
        table: {
          caption: "Preposisi arah",
          columns: ["Preposisi", "Arti", "Contoh"],
          rows: [
            ["to", "ke", "I go to school."],
            ["from", "dari", "She came from Bali."],
            ["into", "masuk ke dalam", "He went into the room."],
            ["out of", "keluar dari", "She came out of the house."],
            ["through", "melalui / menembus", "We walked through the park."],
            ["across", "menyeberangi", "across the street"],
          ],
        },
      },
      {
        heading: "Preposisi lain yang sering",
        explanation:
          "Wajib dihafal — sangat sering muncul.",
        examples: [
          { en: "with friends", id: "dengan teman-teman" },
          { en: "without sugar", id: "tanpa gula" },
          { en: "for you", id: "untukmu" },
          { en: "about love", id: "tentang cinta" },
          { en: "by car", id: "dengan mobil" },
          { en: "of paper", id: "dari kertas" },
        ],
      },
    ],
    vocabulary: [
      { en: "room", id: "kamar / ruangan", pron: "rum" },
      { en: "office", id: "kantor", pron: "of-is" },
      { en: "school", id: "sekolah", pron: "skul" },
      { en: "park", id: "taman", pron: "park" },
      { en: "street", id: "jalan", pron: "strit" },
      { en: "morning", id: "pagi", pron: "mor-ning" },
      { en: "afternoon", id: "sore", pron: "af-ter-nun" },
      { en: "evening", id: "malam (sore)", pron: "iv-ning" },
      { en: "night", id: "malam", pron: "nait" },
      { en: "weekend", id: "akhir pekan", pron: "wik-end" },
      { en: "Monday", id: "Senin", pron: "man-dei" },
      { en: "Sunday", id: "Minggu", pron: "san-dei" },
    ],
    phrases: [
      { en: "I live in Jakarta.", id: "Saya tinggal di Jakarta." },
      { en: "She is at home.", id: "Dia di rumah." },
      { en: "We met on Monday.", id: "Kami bertemu hari Senin." },
      { en: "The meeting is at 3 o'clock.", id: "Rapatnya jam 3." },
      { en: "He goes to work by motorbike.", id: "Dia pergi kerja dengan sepeda motor." },
      { en: "The book is on the table.", id: "Bukunya ada di atas meja." },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Isi dengan in, on, atau at.",
        question: "I was born ___ 1995.",
        answer: "in",
      },
      {
        type: "fill",
        prompt: "Isi dengan in, on, atau at.",
        question: "We will meet ___ Monday.",
        answer: "on",
      },
      {
        type: "fill",
        prompt: "Isi dengan in, on, atau at.",
        question: "The party starts ___ 8 o'clock.",
        answer: "at",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Dia bekerja di kantor.",
        answer: "She works in an office.",
      },
      {
        type: "choose",
        prompt: "Pilih yang benar.",
        question: "The cat is ___ the table.",
        answer: "under",
        options: ["under", "into", "between", "out of"],
      },
    ],
  },

  // ============================================================
  // PELAJARAN 7
  // ============================================================
  {
    id: 7,
    slug: "kata-kerja-modal",
    title: "Pelajaran 7 — Kata Kerja Modal (can, must, should …)",
    subtitle: "Bisa, harus, sebaiknya, mungkin",
    goal: "Mempelajari kata kerja modal yang menambah makna seperti kemampuan, kewajiban, izin, dan kemungkinan.",
    intro:
      "Kata kerja modal selalu diikuti kata kerja dasar tanpa \"to\". Bentuknya tidak berubah — sama untuk semua subjek (TIDAK pakai -s untuk dia).",
    grammar: [
      {
        heading: "Kata kerja modal utama",
        explanation:
          "Hafalkan tabel ini — sangat penting untuk percakapan sehari-hari.",
        table: {
          caption: "Modal verbs",
          columns: ["Modal", "Arti", "Contoh"],
          rows: [
            ["can", "bisa / dapat", "I can swim. (Saya bisa berenang.)"],
            ["could", "bisa (lampau / sopan)", "Could you help me? (Bisakah Anda membantu saya?)"],
            ["must", "harus (wajib)", "You must study. (Kamu harus belajar.)"],
            ["have to", "harus (terpaksa)", "I have to go now."],
            ["should", "sebaiknya", "You should sleep more."],
            ["may", "boleh / mungkin", "May I come in?"],
            ["might", "mungkin (kecil kemungkinan)", "It might rain."],
            ["will", "akan / mau", "I will help you."],
            ["would", "akan / mau (sopan/seandainya)", "Would you like coffee?"],
          ],
        },
      },
      {
        heading: "Aturan utama",
        explanation:
          "Tiga aturan penting tentang modal verbs:",
        examples: [
          { en: "She can dance.", id: "BUKAN \"She cans dance\" — tidak ada -s untuk modal." },
          { en: "I must go.", id: "BUKAN \"I must to go\" — tidak ada \"to\" setelah modal." },
          { en: "He cannot swim.", id: "Negasi: tambah \"not\". Singkatan: can't, won't, shouldn't, mustn't." },
        ],
      },
      {
        heading: "Pertanyaan dengan modal",
        explanation:
          "Balik posisi: modal + subjek + kata kerja dasar.",
        examples: [
          { en: "Can you help me?", id: "Bisakah kamu membantuku?" },
          { en: "Should I call her?", id: "Apakah saya sebaiknya meneleponnya?" },
          { en: "Must we go now?", id: "Haruskah kami pergi sekarang?" },
          { en: "Would you like some tea?", id: "Maukah Anda secangkir teh?" },
        ],
      },
    ],
    vocabulary: [
      { en: "to swim", id: "berenang", pron: "tu swim" },
      { en: "to drive", id: "menyetir", pron: "tu draiv" },
      { en: "to dance", id: "menari", pron: "tu dens" },
      { en: "to sing", id: "menyanyi", pron: "tu sing" },
      { en: "to cook", id: "memasak", pron: "tu kuk" },
      { en: "to sleep", id: "tidur", pron: "tu slip" },
      { en: "to wait", id: "menunggu", pron: "tu weit" },
      { en: "to try", id: "mencoba", pron: "tu trai" },
      { en: "coffee", id: "kopi", pron: "ko-fi" },
      { en: "tea", id: "teh", pron: "ti" },
      { en: "water", id: "air", pron: "wo-ter" },
      { en: "rain", id: "hujan", pron: "rein" },
    ],
    phrases: [
      { en: "Can you help me, please?", id: "Bisakah Anda membantu saya?" },
      { en: "I can speak a little English.", id: "Saya bisa berbahasa Inggris sedikit." },
      { en: "You should rest.", id: "Kamu sebaiknya istirahat." },
      { en: "We must hurry.", id: "Kami harus bergegas." },
      { en: "May I ask a question?", id: "Bolehkah saya bertanya?" },
      { en: "Would you like a coffee?", id: "Mau secangkir kopi?" },
      { en: "I would love to.", id: "Saya akan dengan senang hati." },
    ],
    exercises: [
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Saya bisa berbicara bahasa Inggris.",
        answer: "I can speak English.",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Kamu harus belajar setiap hari.",
        answer: "You must study every day.",
      },
      {
        type: "fill",
        prompt: "Pilih modal yang tepat.",
        question: "It ___ rain tomorrow. (mungkin hujan)",
        answer: "might",
      },
      {
        type: "choose",
        prompt: "Pilih yang benar.",
        question: "She ___ drive a car.",
        answer: "can",
        options: ["can", "cans", "to can", "is can"],
      },
    ],
  },

  // ============================================================
  // PELAJARAN 8
  // ============================================================
  {
    id: 8,
    slug: "present-continuous",
    title: "Pelajaran 8 — Present Continuous (sedang berlangsung)",
    subtitle: "Saya sedang ... — am/is/are + V-ing",
    goal: "Mempelajari cara mengatakan apa yang sedang terjadi sekarang juga.",
    intro:
      "Tense ini menjelaskan tindakan yang sedang berlangsung pada saat berbicara. Dalam bahasa Indonesia kita menggunakan \"sedang\". Rumusnya sederhana: bentuk to be + kata kerja -ing.",
    grammar: [
      {
        heading: "Rumus Present Continuous",
        explanation:
          "Subjek + am/is/are + kata kerja-ing + ...",
        table: {
          caption: "Konjugasi — \"to read\" (membaca)",
          columns: ["Subjek", "Bentuk", "Contoh"],
          rows: [
            ["I", "am reading", "I am reading a book."],
            ["You / We / They", "are reading", "They are reading."],
            ["He / She / It", "is reading", "She is reading now."],
          ],
        },
      },
      {
        heading: "Aturan menambahkan -ing",
        explanation:
          "Biasanya tinggal tambahkan -ing, tapi ada beberapa aturan ejaan.",
        table: {
          caption: "Aturan -ing",
          columns: ["Aturan", "Dasar", "+ -ing"],
          rows: [
            ["Biasa", "read", "reading"],
            ["Akhiran -e → buang -e", "make", "making"],
            ["Konsonan + vokal + konsonan → gandakan", "run", "running"],
            ["Akhiran -ie → -ying", "lie", "lying"],
          ],
        },
      },
      {
        heading: "Kapan digunakan Present Continuous",
        explanation:
          "Tiga situasi utama:",
        examples: [
          { en: "I am studying right now.", id: "Sekarang juga: Saya sedang belajar saat ini." },
          { en: "She is working on a new project this month.", id: "Periode sementara: Dia sedang mengerjakan proyek baru bulan ini." },
          { en: "We are meeting tomorrow at 5.", id: "Rencana masa depan yang sudah pasti: Kami akan bertemu besok jam 5." },
        ],
      },
      {
        heading: "Negasi dan pertanyaan",
        explanation:
          "Sama dengan \"to be\" — tambah not, atau balik posisi.",
        examples: [
          { en: "He is not sleeping.", id: "Dia tidak sedang tidur." },
          { en: "Are you listening to me?", id: "Apakah kamu mendengarkanku?" },
          { en: "What is she doing?", id: "Apa yang sedang dia lakukan?" },
        ],
        note:
          "Kata kerja \"state\" (perasaan, pemikiran) biasanya TIDAK pakai -ing: love, know, want, understand. \"I love you\" — BUKAN \"I am loving you\".",
      },
    ],
    vocabulary: [
      { en: "to read", id: "membaca", pron: "tu rid" },
      { en: "to write", id: "menulis", pron: "tu rait" },
      { en: "to eat", id: "makan", pron: "tu it" },
      { en: "to drink", id: "minum", pron: "tu drink" },
      { en: "to listen", id: "mendengarkan", pron: "tu lis-en" },
      { en: "to watch", id: "menonton", pron: "tu wotc" },
      { en: "to play", id: "bermain", pron: "tu plei" },
      { en: "to run", id: "berlari", pron: "tu ran" },
      { en: "to wait", id: "menunggu", pron: "tu weit" },
      { en: "right now", id: "sekarang juga", pron: "rait nau" },
      { en: "at the moment", id: "saat ini", pron: "et de mou-ment" },
    ],
    phrases: [
      { en: "I am studying English.", id: "Saya sedang belajar bahasa Inggris." },
      { en: "What are you doing?", id: "Sedang apa kamu?" },
      { en: "She is sleeping now.", id: "Dia sedang tidur sekarang." },
      { en: "We are having dinner.", id: "Kami sedang makan malam." },
      { en: "He is not working today.", id: "Dia tidak bekerja hari ini." },
      { en: "It is raining.", id: "Sedang hujan." },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Buat ke bentuk Present Continuous.",
        question: "She ___ (eat) lunch right now.",
        answer: "is eating",
      },
      {
        type: "fill",
        prompt: "Lengkapi.",
        question: "They ___ (play) football in the park.",
        answer: "are playing",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Saya sedang membaca buku.",
        answer: "I am reading a book.",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Apa yang sedang dia lakukan?",
        answer: "What is he doing?",
      },
    ],
  },

  // ============================================================
  // PELAJARAN 9
  // ============================================================
  {
    id: 9,
    slug: "past-simple-tidak-beraturan",
    title: "Pelajaran 9 — Past Simple: Kata Kerja Tidak Beraturan",
    subtitle: "Yang harus dihafal — tetapi sangat penting",
    goal: "Menguasai kata kerja tidak beraturan paling sering (irregular verbs) dalam bentuk lampau.",
    intro:
      "Banyak kata kerja paling umum bahasa Inggris memiliki bentuk lampau yang tidak beraturan. Tidak ada aturan — harus dihafal. Tapi karena ini kata-kata yang Anda akan gunakan setiap hari, pengulangan akan menghafalkannya untuk Anda.",
    grammar: [
      {
        heading: "Daftar 30 kata kerja tidak beraturan paling penting",
        explanation:
          "Bentuk: V1 (dasar) — V2 (lampau) — V3 (past participle, untuk Perfect dan Passive nanti).",
        table: {
          caption: "Irregular Verbs",
          columns: ["V1", "V2 (Past)", "V3", "Arti"],
          rows: [
            ["be", "was/were", "been", "adalah"],
            ["have", "had", "had", "punya"],
            ["do", "did", "done", "melakukan"],
            ["go", "went", "gone", "pergi"],
            ["come", "came", "come", "datang"],
            ["see", "saw", "seen", "melihat"],
            ["say", "said", "said", "mengatakan"],
            ["get", "got", "got/gotten", "mendapat"],
            ["make", "made", "made", "membuat"],
            ["know", "knew", "known", "tahu"],
            ["think", "thought", "thought", "berpikir"],
            ["take", "took", "taken", "mengambil"],
            ["give", "gave", "given", "memberi"],
            ["find", "found", "found", "menemukan"],
            ["tell", "told", "told", "memberitahu"],
            ["become", "became", "become", "menjadi"],
            ["leave", "left", "left", "pergi/meninggalkan"],
            ["feel", "felt", "felt", "merasa"],
            ["bring", "brought", "brought", "membawa"],
            ["begin", "began", "begun", "memulai"],
            ["keep", "kept", "kept", "menyimpan"],
            ["hold", "held", "held", "memegang"],
            ["write", "wrote", "written", "menulis"],
            ["stand", "stood", "stood", "berdiri"],
            ["hear", "heard", "heard", "mendengar"],
            ["let", "let", "let", "membiarkan"],
            ["mean", "meant", "meant", "berarti"],
            ["set", "set", "set", "meletakkan"],
            ["meet", "met", "met", "bertemu"],
            ["pay", "paid", "paid", "membayar"],
          ],
        },
      },
      {
        heading: "Pertanyaan dan negasi tetap dengan did",
        explanation:
          "Ingat: meskipun kata kerjanya tidak beraturan, dalam pertanyaan dan negasi gunakan \"did\" dan kembali ke V1.",
        examples: [
          { en: "I went to the market. → Did you go to the market?", id: "Saya pergi ke pasar. → Apakah kamu pergi ke pasar?" },
          { en: "She saw him. → She didn't see him.", id: "Dia melihatnya. → Dia tidak melihatnya." },
          { en: "We had dinner. → Did you have dinner?", id: "Kami makan malam. → Apakah kalian sudah makan malam?" },
        ],
      },
      {
        heading: "Penanda waktu lampau",
        explanation:
          "Kata-kata ini sering muncul bersama Past Simple.",
        examples: [
          { en: "yesterday", id: "kemarin" },
          { en: "last week / last month / last year", id: "minggu lalu / bulan lalu / tahun lalu" },
          { en: "two days ago", id: "dua hari yang lalu" },
          { en: "in 2020", id: "pada tahun 2020" },
        ],
      },
    ],
    vocabulary: [
      { en: "yesterday", id: "kemarin", pron: "yes-ter-dei" },
      { en: "last week", id: "minggu lalu", pron: "last wik" },
      { en: "ago", id: "yang lalu", pron: "e-gou" },
      { en: "before", id: "sebelum", pron: "bi-for" },
      { en: "after", id: "setelah", pron: "af-ter" },
      { en: "market", id: "pasar", pron: "mar-ket" },
      { en: "shop", id: "toko", pron: "syop" },
      { en: "restaurant", id: "restoran", pron: "res-to-rant" },
      { en: "dinner", id: "makan malam", pron: "din-er" },
      { en: "lunch", id: "makan siang", pron: "lanc" },
      { en: "breakfast", id: "sarapan", pron: "brek-fast" },
    ],
    phrases: [
      { en: "I went to Bali last summer.", id: "Saya pergi ke Bali musim panas lalu." },
      { en: "She told me the truth.", id: "Dia memberitahuku yang sebenarnya." },
      { en: "We had a great time.", id: "Kami bersenang-senang." },
      { en: "He didn't come yesterday.", id: "Dia tidak datang kemarin." },
      { en: "Did you see the movie?", id: "Apakah kamu sudah menonton filmnya?" },
      { en: "I bought new shoes.", id: "Saya membeli sepatu baru." },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Tulis bentuk Past Simple.",
        question: "go →",
        answer: "went",
      },
      {
        type: "fill",
        prompt: "Tulis bentuk Past Simple.",
        question: "see →",
        answer: "saw",
      },
      {
        type: "fill",
        prompt: "Lengkapi dengan bentuk lampau.",
        question: "Yesterday I ___ (eat) at a new restaurant.",
        answer: "ate",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Saya bertemu dia minggu lalu.",
        answer: "I met him last week.",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Apakah kamu mengatakannya kepadanya?",
        answer: "Did you tell him?",
      },
    ],
  },

  // ============================================================
  // PELAJARAN 10
  // ============================================================
  {
    id: 10,
    slug: "bentuk-masa-depan",
    title: "Pelajaran 10 — Bentuk Masa Depan (will & going to)",
    subtitle: "Dua cara berbicara tentang masa depan",
    goal: "Memahami perbedaan antara will dan be going to, plus cara mengekspresikan rencana masa depan.",
    intro:
      "Bahasa Inggris memiliki beberapa cara untuk berbicara tentang masa depan. Dua yang paling penting adalah \"will\" dan \"be going to\". Mereka mirip tetapi tidak sama.",
    grammar: [
      {
        heading: "will — keputusan spontan, janji, ramalan",
        explanation:
          "Gunakan \"will\" untuk: keputusan yang baru diambil, janji, ramalan tanpa bukti.",
        examples: [
          { en: "I will help you. (Saya akan membantumu — janji)", id: "" },
          { en: "It will rain tomorrow. (ramalan)", id: "" },
          { en: "Don't worry, I'll do it. (keputusan langsung)", id: "" },
        ],
      },
      {
        heading: "be going to — rencana, niat, bukti yang terlihat",
        explanation:
          "Gunakan \"be going to\" untuk: rencana yang sudah dipikirkan sebelumnya, atau prediksi berdasarkan bukti.",
        table: {
          caption: "Rumus be going to",
          columns: ["Subjek", "Bentuk", "Contoh"],
          rows: [
            ["I", "am going to", "I am going to study."],
            ["You/We/They", "are going to", "They are going to travel."],
            ["He/She/It", "is going to", "She is going to buy a car."],
          ],
        },
        examples: [
          { en: "I am going to visit my parents this weekend. (rencana)", id: "" },
          { en: "Look at those clouds! It's going to rain. (bukti)", id: "" },
        ],
      },
      {
        heading: "Present Continuous untuk masa depan",
        explanation:
          "Untuk janji temu yang sudah pasti (sudah ada jadwal), gunakan Present Continuous + keterangan waktu.",
        examples: [
          { en: "I am meeting my friend tomorrow at 6.", id: "Saya akan bertemu teman saya besok jam 6." },
          { en: "We are flying to Bali next week.", id: "Kami akan terbang ke Bali minggu depan." },
        ],
      },
      {
        heading: "Negasi dan pertanyaan",
        explanation:
          "will → will not / won't. be going to → seperti to be.",
        examples: [
          { en: "I won't be late.", id: "Saya tidak akan terlambat." },
          { en: "Will you come?", id: "Apakah kamu akan datang?" },
          { en: "Are you going to study?", id: "Apakah kamu akan belajar?" },
          { en: "She isn't going to come.", id: "Dia tidak akan datang." },
        ],
      },
    ],
    vocabulary: [
      { en: "tomorrow", id: "besok", pron: "tu-mor-ou" },
      { en: "next week", id: "minggu depan", pron: "nekst wik" },
      { en: "next year", id: "tahun depan", pron: "nekst yir" },
      { en: "soon", id: "segera", pron: "sun" },
      { en: "later", id: "nanti", pron: "lei-ter" },
      { en: "to visit", id: "mengunjungi", pron: "tu vi-zit" },
      { en: "to travel", id: "bepergian", pron: "tu tre-vol" },
      { en: "to call", id: "menelepon", pron: "tu kol" },
      { en: "to buy", id: "membeli", pron: "tu bai" },
      { en: "to sell", id: "menjual", pron: "tu sel" },
      { en: "plan", id: "rencana", pron: "plen" },
    ],
    phrases: [
      { en: "I'll call you later.", id: "Saya akan meneleponmu nanti." },
      { en: "What are you going to do this weekend?", id: "Apa rencanamu akhir pekan ini?" },
      { en: "She is going to start a new job.", id: "Dia akan memulai pekerjaan baru." },
      { en: "It's going to be a great day.", id: "Akan menjadi hari yang menyenangkan." },
      { en: "I won't forget.", id: "Saya tidak akan lupa." },
      { en: "We're flying to Singapore tomorrow.", id: "Kami akan terbang ke Singapura besok." },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Pilih: will atau be going to (sesuai konteks).",
        question: "Look at the sky! It ___ rain.",
        answer: "is going to",
      },
      {
        type: "fill",
        prompt: "Pilih: will atau be going to.",
        question: "I promise I ___ help you.",
        answer: "will",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Saya akan bepergian ke Jepang tahun depan.",
        answer: "I am going to travel to Japan next year.",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Saya akan meneleponmu nanti.",
        answer: "I'll call you later.",
      },
    ],
  },

  // ============================================================
  // PELAJARAN 11
  // ============================================================
  {
    id: 11,
    slug: "present-perfect",
    title: "Pelajaran 11 — Present Perfect (have/has + V3)",
    subtitle: "Sudah pernah, sudah selesai, baru saja",
    goal: "Memahami tense yang menghubungkan masa lalu dengan masa sekarang.",
    intro:
      "Present Perfect adalah salah satu tense paling sulit untuk orang Indonesia karena tidak ada padanannya langsung. Tetapi konsepnya sederhana: tindakan dimulai di masa lalu, tetapi relevan/berhubungan dengan sekarang.",
    grammar: [
      {
        heading: "Rumus",
        explanation:
          "Subjek + have/has + V3 (past participle).",
        table: {
          caption: "Present Perfect",
          columns: ["Subjek", "Bentuk", "Contoh"],
          rows: [
            ["I / You / We / They", "have + V3", "I have seen this film."],
            ["He / She / It", "has + V3", "She has finished her work."],
          ],
        },
        note:
          "Singkatan: I've, you've, he's, she's, we've, they've.",
      },
      {
        heading: "Kapan menggunakan Present Perfect",
        explanation:
          "Empat situasi utama:",
        examples: [
          { en: "I have been to Bali. (pengalaman seumur hidup)", id: "Saya pernah ke Bali. (tidak penting kapan)" },
          { en: "She has just left. (baru saja terjadi)", id: "Dia baru saja pergi." },
          { en: "We have lived here for 5 years. (mulai dulu, masih sekarang)", id: "Kami tinggal di sini selama 5 tahun." },
          { en: "I have already eaten. (sudah)", id: "Saya sudah makan." },
        ],
      },
      {
        heading: "Kata penanda waktu",
        explanation:
          "Kata-kata ini sering muncul dengan Present Perfect.",
        table: {
          caption: "Penanda waktu",
          columns: ["English", "Bahasa Indonesia"],
          rows: [
            ["ever", "pernah (dalam pertanyaan)"],
            ["never", "tidak pernah"],
            ["just", "baru saja"],
            ["already", "sudah"],
            ["yet", "belum / sudah (pertanyaan)"],
            ["for + durasi", "selama"],
            ["since + titik waktu", "sejak"],
            ["recently / lately", "baru-baru ini"],
          ],
        },
      },
      {
        heading: "Pertanyaan dan negasi",
        explanation:
          "Have/has dipindah ke depan untuk pertanyaan.",
        examples: [
          { en: "Have you ever been to Japan?", id: "Apakah kamu pernah ke Jepang?" },
          { en: "I have never tried sushi.", id: "Saya tidak pernah mencoba sushi." },
          { en: "She hasn't finished yet.", id: "Dia belum selesai." },
          { en: "Has he called you?", id: "Apakah dia sudah meneleponmu?" },
        ],
      },
      {
        heading: "Past Simple vs Present Perfect",
        explanation:
          "Aturan emas: jika ada waktu spesifik (yesterday, in 2020, last week) → gunakan Past Simple. Jika tidak ada waktu spesifik atau relevan dengan sekarang → Present Perfect.",
        examples: [
          { en: "I saw him yesterday. (waktu spesifik → Past)", id: "" },
          { en: "I have seen him. (kapanpun → Perfect)", id: "" },
        ],
      },
    ],
    vocabulary: [
      { en: "ever", id: "pernah", pron: "ev-er" },
      { en: "never", id: "tidak pernah", pron: "nev-er" },
      { en: "already", id: "sudah", pron: "ol-redi" },
      { en: "yet", id: "belum / sudah", pron: "yet" },
      { en: "just", id: "baru saja", pron: "djast" },
      { en: "since", id: "sejak", pron: "sins" },
      { en: "for", id: "selama", pron: "for" },
      { en: "to finish", id: "menyelesaikan", pron: "tu fin-isy" },
      { en: "to try", id: "mencoba", pron: "tu trai" },
      { en: "to travel", id: "bepergian", pron: "tu tre-vol" },
    ],
    phrases: [
      { en: "I have never been abroad.", id: "Saya belum pernah ke luar negeri." },
      { en: "Have you ever tried Indonesian food?", id: "Pernahkah Anda mencoba makanan Indonesia?" },
      { en: "She has just arrived.", id: "Dia baru saja tiba." },
      { en: "We have lived here for 10 years.", id: "Kami sudah tinggal di sini selama 10 tahun." },
      { en: "I haven't seen him since Monday.", id: "Saya belum melihatnya sejak Senin." },
      { en: "I've finished my homework.", id: "Saya sudah selesai mengerjakan PR." },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Lengkapi dengan Present Perfect.",
        question: "She ___ (live) in Jakarta for 5 years.",
        answer: "has lived",
      },
      {
        type: "fill",
        prompt: "Lengkapi.",
        question: "I ___ (never / be) to Europe.",
        answer: "have never been",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Apakah kamu pernah ke Bali?",
        answer: "Have you ever been to Bali?",
      },
      {
        type: "choose",
        prompt: "Pilih waktu yang benar.",
        question: "I ___ him yesterday.",
        answer: "saw",
        options: ["saw", "have seen", "see", "seeing"],
      },
    ],
  },

  // ============================================================
  // PELAJARAN 12
  // ============================================================
  {
    id: 12,
    slug: "perbandingan",
    title: "Pelajaran 12 — Perbandingan (Comparatives & Superlatives)",
    subtitle: "Lebih, paling, sama",
    goal: "Membuat perbandingan antara dua hal atau lebih.",
    intro:
      "Dalam bahasa Indonesia kita pakai \"lebih\" dan \"paling\". Dalam bahasa Inggris kita mengubah kata sifat itu sendiri — dengan -er atau more, dan -est atau most.",
    grammar: [
      {
        heading: "Aturan kata sifat pendek (1-2 suku kata)",
        explanation:
          "Tambahkan -er (perbandingan) atau -est (paling).",
        table: {
          caption: "Kata sifat pendek",
          columns: ["Asli", "Comparative (lebih)", "Superlative (paling)"],
          rows: [
            ["big", "bigger", "the biggest"],
            ["small", "smaller", "the smallest"],
            ["fast", "faster", "the fastest"],
            ["nice", "nicer", "the nicest"],
            ["easy", "easier", "the easiest"],
            ["happy", "happier", "the happiest"],
            ["hot", "hotter", "the hottest"],
          ],
        },
        note:
          "Akhiran -y → -ier/-iest. Konsonan-vokal-konsonan → gandakan: big → bigger.",
      },
      {
        heading: "Kata sifat panjang (3+ suku kata)",
        explanation:
          "Gunakan more / most di depan kata sifat. Bentuk aslinya tidak berubah.",
        table: {
          caption: "Kata sifat panjang",
          columns: ["Asli", "Comparative", "Superlative"],
          rows: [
            ["beautiful", "more beautiful", "the most beautiful"],
            ["expensive", "more expensive", "the most expensive"],
            ["interesting", "more interesting", "the most interesting"],
            ["important", "more important", "the most important"],
          ],
        },
      },
      {
        heading: "Bentuk tidak beraturan",
        explanation:
          "Harus dihafal — sangat sering muncul.",
        table: {
          caption: "Irregular Comparison",
          columns: ["Asli", "Comparative", "Superlative", "Arti"],
          rows: [
            ["good", "better", "the best", "baik"],
            ["bad", "worse", "the worst", "buruk"],
            ["far", "farther/further", "the farthest/furthest", "jauh"],
            ["little", "less", "the least", "sedikit"],
            ["much/many", "more", "the most", "banyak"],
          ],
        },
      },
      {
        heading: "Struktur perbandingan",
        explanation:
          "Bandingkan dengan \"than\". Untuk sama, gunakan \"as ... as\".",
        examples: [
          { en: "He is taller than me.", id: "Dia lebih tinggi dari saya." },
          { en: "This is the best restaurant in town.", id: "Ini restoran terbaik di kota." },
          { en: "She is as smart as her brother.", id: "Dia sama pintarnya dengan kakaknya." },
          { en: "Today is not as hot as yesterday.", id: "Hari ini tidak sepanas kemarin." },
        ],
      },
    ],
    vocabulary: [
      { en: "big", id: "besar", pron: "big" },
      { en: "small", id: "kecil", pron: "smol" },
      { en: "tall", id: "tinggi", pron: "tol" },
      { en: "short", id: "pendek", pron: "syort" },
      { en: "fast", id: "cepat", pron: "fast" },
      { en: "slow", id: "lambat", pron: "slou" },
      { en: "easy", id: "mudah", pron: "i-zi" },
      { en: "difficult", id: "sulit", pron: "di-fi-kalt" },
      { en: "cheap", id: "murah", pron: "cip" },
      { en: "expensive", id: "mahal", pron: "iks-pen-siv" },
      { en: "good", id: "baik", pron: "gud" },
      { en: "bad", id: "buruk", pron: "bed" },
      { en: "beautiful", id: "indah / cantik", pron: "biu-ti-ful" },
    ],
    phrases: [
      { en: "Jakarta is bigger than Bali.", id: "Jakarta lebih besar dari Bali." },
      { en: "This is the best coffee in the world.", id: "Ini kopi terbaik di dunia." },
      { en: "She is more beautiful than her sister.", id: "Dia lebih cantik dari saudarinya." },
      { en: "I am as tired as you.", id: "Saya sama lelahnya denganmu." },
      { en: "It's getting hotter.", id: "Semakin panas." },
      { en: "Which is cheaper?", id: "Mana yang lebih murah?" },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Tulis bentuk comparative.",
        question: "happy →",
        answer: "happier",
      },
      {
        type: "fill",
        prompt: "Tulis bentuk superlative.",
        question: "good →",
        answer: "the best",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Bali lebih indah dari Bandung.",
        answer: "Bali is more beautiful than Bandung.",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Dia adalah pelajar terpintar di kelas.",
        answer: "She is the smartest student in the class.",
      },
    ],
  },

  // ============================================================
  // PELAJARAN 13
  // ============================================================
  {
    id: 13,
    slug: "kalimat-pengandaian",
    title: "Pelajaran 13 — Kalimat Pengandaian (Conditionals)",
    subtitle: "Jika ... maka ...",
    goal: "Mempelajari empat jenis kalimat \"if\" — dari kenyataan sampai pengandaian tidak nyata.",
    intro:
      "Kalimat pengandaian terdiri dari dua bagian: bagian \"if\" (kondisi) dan bagian utama (hasil). Bahasa Inggris memiliki empat tipe utama, tergantung tingkat realitasnya.",
    grammar: [
      {
        heading: "Zero Conditional — kenyataan umum / hukum alam",
        explanation:
          "If + Present Simple, Present Simple. Untuk hal yang selalu benar.",
        examples: [
          { en: "If you heat water, it boils.", id: "Jika kamu memanaskan air, ia mendidih." },
          { en: "If it rains, the ground gets wet.", id: "Jika hujan, tanah menjadi basah." },
        ],
      },
      {
        heading: "First Conditional — kemungkinan nyata di masa depan",
        explanation:
          "If + Present Simple, will + verb.",
        examples: [
          { en: "If it rains, I will stay home.", id: "Kalau hujan, saya akan di rumah." },
          { en: "If you study, you will pass the exam.", id: "Kalau kamu belajar, kamu akan lulus ujian." },
          { en: "I will call you if I have time.", id: "Saya akan meneleponmu kalau saya punya waktu." },
        ],
      },
      {
        heading: "Second Conditional — pengandaian tidak nyata di masa sekarang",
        explanation:
          "If + Past Simple, would + verb. Untuk situasi yang tidak nyata atau hipotetis.",
        examples: [
          { en: "If I had a million dollars, I would travel the world.", id: "Kalau saya punya satu juta dolar, saya akan keliling dunia." },
          { en: "If I were you, I would accept the offer.", id: "Kalau saya jadi kamu, saya akan menerima tawaran itu." },
        ],
        note:
          "Untuk semua subjek di bagian \"if\" dengan \"to be\", gunakan \"were\" (bukan was) dalam bahasa formal: \"If I were rich…\".",
      },
      {
        heading: "Third Conditional — pengandaian tentang masa lalu",
        explanation:
          "If + Past Perfect (had + V3), would have + V3. Untuk hal yang sudah lewat dan tidak bisa diubah.",
        examples: [
          { en: "If I had studied harder, I would have passed.", id: "Kalau saya belajar lebih keras, saya akan lulus (tapi saya tidak)." },
          { en: "If we had left earlier, we would have caught the bus.", id: "Kalau kami pergi lebih awal, kami akan menyusul busnya." },
        ],
      },
    ],
    vocabulary: [
      { en: "if", id: "jika / kalau", pron: "if" },
      { en: "would", id: "akan (pengandaian)", pron: "wud" },
      { en: "could", id: "bisa (pengandaian)", pron: "kud" },
      { en: "exam", id: "ujian", pron: "ig-zem" },
      { en: "to pass", id: "lulus / lewat", pron: "tu pas" },
      { en: "to fail", id: "gagal", pron: "tu feil" },
      { en: "to win", id: "menang", pron: "tu win" },
      { en: "to lose", id: "kalah / kehilangan", pron: "tu luz" },
      { en: "rich", id: "kaya", pron: "ric" },
      { en: "poor", id: "miskin", pron: "pur" },
    ],
    phrases: [
      { en: "If you need help, just ask.", id: "Kalau butuh bantuan, tinggal minta." },
      { en: "If I were rich, I would buy a house in Bali.", id: "Kalau saya kaya, saya akan beli rumah di Bali." },
      { en: "What would you do if you won the lottery?", id: "Apa yang akan kamu lakukan kalau menang lotere?" },
      { en: "If I had known, I would have helped.", id: "Kalau saya tahu, saya akan membantu." },
      { en: "If you don't hurry, you'll be late.", id: "Kalau tidak buru-buru, kamu akan terlambat." },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Lengkapi (First Conditional).",
        question: "If it ___ (rain), I will stay home.",
        answer: "rains",
      },
      {
        type: "fill",
        prompt: "Lengkapi (Second Conditional).",
        question: "If I ___ (be) you, I would call him.",
        answer: "were",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Kalau saya punya uang, saya akan pergi ke Eropa.",
        answer: "If I had money, I would go to Europe.",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Kalau kamu belajar, kamu akan lulus.",
        answer: "If you study, you will pass.",
      },
    ],
  },

  // ============================================================
  // PELAJARAN 14
  // ============================================================
  {
    id: 14,
    slug: "kalimat-pasif",
    title: "Pelajaran 14 — Kalimat Pasif (Passive Voice)",
    subtitle: "Ketika fokusnya pada apa yang terjadi, bukan siapa pelakunya",
    goal: "Mempelajari cara membentuk dan menggunakan kalimat pasif di semua tense utama.",
    intro:
      "Pasif digunakan ketika kita ingin menekankan tindakan atau hasilnya, bukan pelakunya. Dalam bahasa Indonesia kita pakai awalan \"di-\". Dalam bahasa Inggris: to be + V3.",
    grammar: [
      {
        heading: "Rumus dasar",
        explanation:
          "Subjek (yang menerima tindakan) + to be (dalam tense yang sesuai) + V3 (past participle).",
        table: {
          caption: "Pasif di berbagai tense",
          columns: ["Tense", "Bentuk", "Contoh"],
          rows: [
            ["Present Simple", "am/is/are + V3", "The book is read by many people."],
            ["Past Simple", "was/were + V3", "The letter was written yesterday."],
            ["Future Simple", "will be + V3", "The work will be done tomorrow."],
            ["Present Continuous", "am/is/are being + V3", "The house is being built."],
            ["Present Perfect", "have/has been + V3", "The job has been finished."],
            ["Modal + passive", "modal + be + V3", "It can be done easily."],
          ],
        },
      },
      {
        heading: "Aktif vs Pasif",
        explanation:
          "Aktif: subjek melakukan. Pasif: subjek menerima tindakan.",
        examples: [
          { en: "Active: Andi wrote the letter.", id: "Aktif: Andi menulis surat itu." },
          { en: "Passive: The letter was written by Andi.", id: "Pasif: Surat itu ditulis oleh Andi." },
          { en: "Active: They build houses.", id: "Aktif: Mereka membangun rumah." },
          { en: "Passive: Houses are built (by them).", id: "Pasif: Rumah-rumah dibangun (oleh mereka)." },
        ],
        note:
          "\"by + pelaku\" boleh dihilangkan jika tidak penting atau tidak diketahui.",
      },
      {
        heading: "Kapan menggunakan pasif",
        explanation:
          "Beberapa situasi umum:",
        examples: [
          { en: "Pelaku tidak diketahui: My phone was stolen.", id: "Ponsel saya dicuri." },
          { en: "Pelaku tidak penting: English is spoken here.", id: "Bahasa Inggris digunakan di sini." },
          { en: "Fokus pada hasil: The new bridge will be opened next month.", id: "Jembatan baru akan dibuka bulan depan." },
        ],
      },
    ],
    vocabulary: [
      { en: "to build", id: "membangun", pron: "tu bild" },
      { en: "to break", id: "memecahkan", pron: "tu breik" },
      { en: "to steal", id: "mencuri", pron: "tu stil" },
      { en: "to fix", id: "memperbaiki", pron: "tu fiks" },
      { en: "to send", id: "mengirim", pron: "tu send" },
      { en: "to invite", id: "mengundang", pron: "tu in-vait" },
      { en: "to use", id: "menggunakan", pron: "tu yuz" },
      { en: "letter", id: "surat", pron: "le-ter" },
      { en: "bridge", id: "jembatan", pron: "bridj" },
      { en: "factory", id: "pabrik", pron: "fek-to-ri" },
    ],
    phrases: [
      { en: "English is spoken in many countries.", id: "Bahasa Inggris digunakan di banyak negara." },
      { en: "My wallet was stolen.", id: "Dompet saya dicuri." },
      { en: "The book was written by a famous author.", id: "Buku itu ditulis oleh penulis terkenal." },
      { en: "Dinner will be served at 7.", id: "Makan malam akan disajikan jam 7." },
      { en: "This room is being cleaned.", id: "Ruangan ini sedang dibersihkan." },
      { en: "The work has been done.", id: "Pekerjaannya sudah diselesaikan." },
    ],
    exercises: [
      {
        type: "translate",
        prompt: "Terjemahkan ke pasif.",
        question: "Andi menulis surat itu. → Surat itu ___ (write) by Andi.",
        answer: "was written",
      },
      {
        type: "fill",
        prompt: "Buat ke bentuk pasif Present Simple.",
        question: "English ___ (speak) here.",
        answer: "is spoken",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Mobil saya sedang diperbaiki.",
        answer: "My car is being fixed.",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Rumah ini dibangun pada tahun 2000.",
        answer: "This house was built in 2000.",
      },
    ],
  },

  // ============================================================
  // PELAJARAN 15
  // ============================================================
  {
    id: 15,
    slug: "kalimat-tidak-langsung",
    title: "Pelajaran 15 — Kalimat Tidak Langsung (Reported Speech)",
    subtitle: "Menceritakan apa yang orang lain katakan",
    goal: "Memahami cara menyampaikan ulang perkataan orang lain dalam bahasa Inggris.",
    intro:
      "Ketika kita melaporkan apa yang seseorang katakan, biasanya kita perlu menggeser tense satu langkah ke belakang. Aturan ini disebut \"backshift\".",
    grammar: [
      {
        heading: "Pergeseran tense (backshift)",
        explanation:
          "Tense dari ucapan asli digeser satu langkah ke lampau.",
        table: {
          caption: "Pergeseran tense",
          columns: ["Ucapan langsung", "Tidak langsung"],
          rows: [
            ["Present Simple → ", "Past Simple"],
            ["Present Continuous → ", "Past Continuous"],
            ["Present Perfect → ", "Past Perfect"],
            ["Past Simple → ", "Past Perfect"],
            ["will → ", "would"],
            ["can → ", "could"],
            ["must → ", "had to"],
          ],
        },
      },
      {
        heading: "Contoh-contoh",
        explanation:
          "Perhatikan juga perubahan kata ganti dan keterangan waktu.",
        examples: [
          { en: "She said, \"I am tired.\" → She said (that) she was tired.", id: "Dia berkata, \"Saya lelah.\" → Dia berkata bahwa dia lelah." },
          { en: "He said, \"I will call you.\" → He said he would call me.", id: "Dia berkata, \"Saya akan meneleponmu.\" → Dia berkata akan meneleponku." },
          { en: "They said, \"We have finished.\" → They said they had finished.", id: "Mereka berkata, \"Kami sudah selesai.\" → Mereka berkata mereka sudah selesai." },
        ],
      },
      {
        heading: "Melaporkan pertanyaan",
        explanation:
          "Pertanyaan diubah jadi pernyataan (urutan subjek-kata kerja kembali normal). Pertanyaan ya/tidak pakai \"if\" atau \"whether\".",
        examples: [
          { en: "He asked, \"Where do you live?\" → He asked where I lived.", id: "Dia bertanya, \"Di mana kamu tinggal?\" → Dia bertanya di mana saya tinggal." },
          { en: "She asked, \"Do you like coffee?\" → She asked if I liked coffee.", id: "Dia bertanya, \"Kamu suka kopi?\" → Dia bertanya apakah saya suka kopi." },
        ],
      },
      {
        heading: "Melaporkan perintah",
        explanation:
          "Gunakan: tell/ask someone to do something.",
        examples: [
          { en: "She said, \"Close the door!\" → She told me to close the door.", id: "Dia berkata, \"Tutup pintunya!\" → Dia menyuruh saya menutup pintu." },
          { en: "He said, \"Don't be late.\" → He told me not to be late.", id: "Dia berkata, \"Jangan terlambat.\" → Dia memintaku agar tidak terlambat." },
        ],
      },
      {
        heading: "Perubahan keterangan waktu/tempat",
        explanation:
          "Beberapa kata juga ikut berubah.",
        table: {
          caption: "Pergeseran keterangan",
          columns: ["Langsung", "Tidak langsung"],
          rows: [
            ["now", "then"],
            ["today", "that day"],
            ["tomorrow", "the next day"],
            ["yesterday", "the day before"],
            ["here", "there"],
            ["this", "that"],
          ],
        },
      },
    ],
    vocabulary: [
      { en: "to say", id: "berkata", pron: "tu sei" },
      { en: "to tell", id: "memberitahu", pron: "tu tel" },
      { en: "to ask", id: "bertanya", pron: "tu ask" },
      { en: "to answer", id: "menjawab", pron: "tu an-ser" },
      { en: "to explain", id: "menjelaskan", pron: "tu iks-plein" },
      { en: "to promise", id: "berjanji", pron: "tu pro-mis" },
      { en: "to suggest", id: "menyarankan", pron: "tu sa-djest" },
      { en: "story", id: "cerita", pron: "stor-i" },
      { en: "truth", id: "kebenaran", pron: "truth" },
      { en: "lie", id: "kebohongan", pron: "lai" },
    ],
    phrases: [
      { en: "She said (that) she was busy.", id: "Dia berkata dia sibuk." },
      { en: "He told me he would come.", id: "Dia memberitahuku dia akan datang." },
      { en: "I asked her where she lived.", id: "Saya bertanya kepadanya di mana dia tinggal." },
      { en: "They told us to wait.", id: "Mereka menyuruh kami menunggu." },
      { en: "He said he had finished his homework.", id: "Dia berkata sudah menyelesaikan PR-nya." },
    ],
    exercises: [
      {
        type: "fill",
        prompt: "Ubah ke reported speech.",
        question: "She said, \"I am happy.\" → She said she ___ happy.",
        answer: "was",
      },
      {
        type: "fill",
        prompt: "Lengkapi.",
        question: "He said, \"I will help you.\" → He said he ___ help me.",
        answer: "would",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Dia bertanya di mana saya tinggal.",
        answer: "He asked where I lived.",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Mereka menyuruh saya menunggu.",
        answer: "They told me to wait.",
      },
    ],
  },

  // ============================================================
  // PELAJARAN 16
  // ============================================================
  {
    id: 16,
    slug: "rangkuman-percakapan",
    title: "Pelajaran 16 — Rangkuman & Percakapan",
    subtitle: "Menyatukan semua yang sudah dipelajari",
    goal: "Menggabungkan seluruh struktur ke dalam percakapan nyata, idiom, dan frasa-frasa fungsional sehari-hari.",
    intro:
      "Selamat! Anda telah mempelajari kerangka utama bahasa Inggris. Pelajaran terakhir ini bukan tentang aturan baru — ini tentang menggunakan semua yang sudah Anda tahu dalam situasi nyata. Hafalkan frasa-frasa di bawah dan latih dengan suara keras.",
    grammar: [
      {
        heading: "Memperkenalkan diri",
        explanation:
          "Versi dasar yang siap pakai.",
        examples: [
          { en: "Hi, my name is Andi.", id: "Hai, nama saya Andi." },
          { en: "I am from Indonesia.", id: "Saya dari Indonesia." },
          { en: "I am 28 years old.", id: "Saya berumur 28 tahun." },
          { en: "I work as a software engineer.", id: "Saya bekerja sebagai insinyur perangkat lunak." },
          { en: "I have been learning English for 3 months.", id: "Saya sudah belajar bahasa Inggris selama 3 bulan." },
          { en: "I would like to improve my speaking.", id: "Saya ingin meningkatkan kemampuan berbicara saya." },
        ],
      },
      {
        heading: "Frasa fungsional sehari-hari",
        explanation:
          "Hafalkan ini seperti satu unit utuh.",
        table: {
          caption: "Frasa wajib",
          columns: ["English", "Bahasa Indonesia"],
          rows: [
            ["Excuse me", "Permisi"],
            ["I'm sorry", "Saya minta maaf"],
            ["Thank you very much", "Terima kasih banyak"],
            ["You're welcome", "Sama-sama"],
            ["No problem", "Tidak masalah"],
            ["Could you repeat that?", "Bisakah Anda mengulanginya?"],
            ["I don't understand", "Saya tidak mengerti"],
            ["Please speak slowly", "Tolong berbicara pelan"],
            ["How do you say ... in English?", "Bagaimana cara mengatakan ... dalam bahasa Inggris?"],
            ["What does ... mean?", "Apa arti ...?"],
            ["I'll think about it", "Saya akan memikirkannya"],
            ["It depends", "Tergantung"],
            ["Actually", "Sebenarnya"],
            ["By the way", "Omong-omong"],
            ["In my opinion", "Menurut saya"],
          ],
        },
      },
      {
        heading: "Membuat permintaan & undangan",
        explanation:
          "Pakai modal sopan: would, could, may.",
        examples: [
          { en: "Could you help me, please?", id: "Bisakah Anda membantu saya?" },
          { en: "Would you like to have dinner with me?", id: "Maukah Anda makan malam dengan saya?" },
          { en: "May I borrow your pen?", id: "Bolehkah saya pinjam pena Anda?" },
          { en: "Would you mind if I open the window?", id: "Apakah Anda keberatan jika saya membuka jendela?" },
        ],
      },
      {
        heading: "Mengekspresikan pendapat",
        explanation:
          "Ungkapan-ungkapan natural untuk diskusi.",
        examples: [
          { en: "I think that ...", id: "Saya pikir bahwa ..." },
          { en: "I believe that ...", id: "Saya percaya bahwa ..." },
          { en: "It seems to me that ...", id: "Menurut saya tampaknya ..." },
          { en: "I agree with you.", id: "Saya setuju denganmu." },
          { en: "I'm not sure about that.", id: "Saya tidak yakin tentang itu." },
          { en: "On the other hand, ...", id: "Di sisi lain, ..." },
        ],
      },
      {
        heading: "10 idiom bahasa Inggris yang sering",
        explanation:
          "Idiom membuat bahasa Inggris Anda terdengar natural.",
        table: {
          caption: "Idioms populer",
          columns: ["Idiom", "Arti"],
          rows: [
            ["a piece of cake", "sangat mudah"],
            ["break a leg", "semoga sukses"],
            ["hit the books", "mulai belajar serius"],
            ["under the weather", "kurang sehat"],
            ["once in a blue moon", "sangat jarang"],
            ["it's raining cats and dogs", "hujan deras sekali"],
            ["cost an arm and a leg", "sangat mahal"],
            ["call it a day", "selesai untuk hari ini"],
            ["pull someone's leg", "menggoda / bercanda"],
            ["the ball is in your court", "giliranmu untuk bertindak"],
          ],
        },
      },
      {
        heading: "Langkah selanjutnya",
        explanation:
          "Anda sudah punya kerangkanya. Sekarang isi dengan latihan terus-menerus: tonton film dengan subtitle bahasa Inggris, baca artikel, bicaralah dengan diri sendiri di cermin, gunakan aplikasi seperti Anki untuk kosakata. Konsistensi 20 menit setiap hari mengalahkan 5 jam sekali seminggu.",
        examples: [
          { en: "Practice every day, even just for 15 minutes.", id: "Berlatihlah setiap hari, bahkan hanya 15 menit." },
          { en: "Don't be afraid to make mistakes.", id: "Jangan takut membuat kesalahan." },
          { en: "Speak English out loud.", id: "Bicaralah bahasa Inggris dengan suara keras." },
        ],
      },
    ],
    vocabulary: [
      { en: "to introduce", id: "memperkenalkan", pron: "tu in-tro-djus" },
      { en: "to improve", id: "meningkatkan", pron: "tu im-pruv" },
      { en: "to practice", id: "berlatih", pron: "tu prek-tis" },
      { en: "to learn", id: "belajar", pron: "tu lern" },
      { en: "to enjoy", id: "menikmati", pron: "tu en-djoi" },
      { en: "to mean", id: "berarti", pron: "tu min" },
      { en: "mistake", id: "kesalahan", pron: "mis-teik" },
      { en: "opinion", id: "pendapat", pron: "o-pi-ni-on" },
      { en: "advice", id: "saran", pron: "ed-vais" },
      { en: "experience", id: "pengalaman", pron: "iks-pi-ri-ens" },
    ],
    phrases: [
      { en: "Nice to meet you. Where are you from?", id: "Senang bertemu Anda. Anda dari mana?" },
      { en: "How long have you been learning English?", id: "Sudah berapa lama Anda belajar bahasa Inggris?" },
      { en: "What do you do for a living?", id: "Apa pekerjaan Anda?" },
      { en: "Could you give me your phone number?", id: "Bisakah Anda memberikan nomor telepon Anda?" },
      { en: "Let's keep in touch.", id: "Mari tetap berhubungan." },
      { en: "Have a nice day!", id: "Selamat berhari menyenangkan!" },
      { en: "See you later.", id: "Sampai jumpa nanti." },
      { en: "Take care.", id: "Hati-hati / jaga diri." },
    ],
    exercises: [
      {
        type: "translate",
        prompt: "Perkenalkan diri.",
        question: "Hai, nama saya [nama Anda]. Saya dari Indonesia.",
        answer: "Hi, my name is [your name]. I am from Indonesia.",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Sudah berapa lama kamu belajar bahasa Inggris?",
        answer: "How long have you been learning English?",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Bisakah Anda mengulanginya, tolong?",
        answer: "Could you repeat that, please?",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Saya rasa itu ide yang bagus.",
        answer: "I think that is a good idea.",
      },
      {
        type: "translate",
        prompt: "Terjemahkan.",
        question: "Sampai jumpa lagi, jaga dirimu.",
        answer: "See you again, take care.",
      },
    ],
  },
];

export function getLessonById(id: number) {
  return lessons.find((l) => l.id === id);
}

export function getLessonSlugs() {
  return lessons.map((l) => l.id.toString());
}
