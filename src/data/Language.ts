export type Language = 'en' | 'id';

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      work: "Work",
      blog: "Blog",
      lab: "Lab",
      contact: "Contact"
    },
    home: {
      hi: "Hi, I'm",
      words: ["I Build Systems.", "I Think in Architecture.", "I Solve Real Problems."],
      description: "A visionary thinker and system architect in the making. I don't just write code; I design digital ecosystems that bridge the gap between complex problems and elegant solutions.",
      viewWork: "View My Work",
      talk: "Let's Talk",
      systemOnline: "System: Online",
      globalImpact: "Global Impact",
      whyTitle: "Why I Build",
      whyQuote: "\"Building isn't just about assembly; it's about understanding the soul of a system. I see the world as a series of interconnected nodes, and my mission is to optimize the pathways that connect them. Every line of code is a brick in a digital universe designed to serve humanity.\"",
      traits: [
        { title: "System Thinker", desc: "I analyze the macro to optimize the micro. Architecture is my language." },
        { title: "Builder Mentality", desc: "Execution is everything. I turn abstract concepts into tangible reality." },
        { title: "Vision & Leadership", desc: "Organizing teams and ideas to achieve what seems impossible." }
      ]
    },
    about: {
      title: "The Journey.",
      intro: "I don't see problems as obstacles; I see them as systems waiting to be optimized. My journey hasn't been a straight line—it's been a recursive loop of learning, building, and refining.",
      timeline: [
        { year: "2020", title: "The Spark", desc: "Started as a curious student, dismantling software to understand the 'how'." },
        { year: "2022", title: "The Organizer", desc: "Led tech communities and organized hackathons, learning the power of collective execution." },
        { year: "2024", title: "The Developer", desc: "Mastered the full-stack, building products that solved real-world friction." },
        { year: "2026", title: "System Builder", desc: "Now architecting complex digital ecosystems with a focus on scalability and human-centric design." }
      ],
      leadership: {
        title: "Leadership Mindset",
        desc: "Leadership isn't about being in charge. It's about creating a system where everyone can perform at their peak. I focus on removing bottlenecks—both technical and human."
      },
      learning: {
        title: "Continuous Learning",
        desc: "I approach learning like a compiler. I ingest raw information, parse it into mental models, and execute it through real-world projects. If I haven't built it, I don't know it."
      },
      skillsTitle: "My Tools."
    },
    work: {
      title: "What I’ve Built.",
      subtitle: "A collection of systems designed to solve real-world friction.",
      complexity: "Complexity",
      problem: "The Problem",
      solution: "The System Solution",
      stack: "Tech Stack",
      lesson: "Key Lesson Learned",
      demo: "Live Demo",
      source: "Source Code",
      back: "Back to Work",
      expTitle: "Leadership & Execution.",
      expSubtitle: "My professional journey is defined by the impact I create and the systems I leave behind.",
      orgTitle: "Organizations & Leadership",
      orgSubtitle: "Where I've contributed my vision and energy beyond code.",
      stats: [
        { label: "Systems Built", value: 12 },
        { label: "Projects Shipped", value: 24 },
        { label: "People Impacted", value: "5K+" }
      ]
    },
    blog: {
      title: "What I Think About.",
      subtitle: "Reflections on technology, systems, and the journey of building a meaningful digital future.",
      readTime: "min",
      back: "Back to Blog",
      categories: ["All", "Philosophy", "UX Design", "Tech", "Engineering"]
    },
    lab: {
      title: "Gen Z Lab.",
      subtitle: "An experimental playground where I test ideas and build mini-tools for the future.",
      career: {
        title: "Career Path Generator",
        desc: "Not sure where you're headed? Let the lab decide your future role.",
        btn: "Generate Path",
        paths: ["AI System Architect", "Ethical Hacker for Good", "Digital Nomad Product Lead", "Web3 Infrastructure Builder", "Human-Centric UX Researcher"]
      },
      hustle: {
        title: "Side Hustle Idea Generator",
        desc: "Need a weekend project? Here's a high-potential idea for you.",
        btn: "Generate Idea",
        ideas: ["AI-Powered Resume Optimizer", "Micro-SaaS for Local Farmers", "Curated Tech Stack Newsletter", "Custom Mechanical Keyboard Shop", "Digital Garden as a Service"]
      }
    },
    contact: {
      title: "Let’s Build.",
      subtitle: "If you're building something meaningful, or just want to talk about systems and the future, my digital door is always open.",
      email: "Email Me",
      discord: "Discord",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        placeholderName: "John Doe",
        placeholderEmail: "john@example.com",
        placeholderMsg: "Tell me about your vision...",
        btn: "Send Message",
        subjects: ["General Inquiry", "Project Collaboration", "System Consultation", "Just Saying Hi"]
      }
    }
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      work: "Karya",
      blog: "Blog",
      lab: "Lab",
      contact: "Kontak"
    },
    home: {
      hi: "Halo, Saya",
      words: ["Saya Membangun Sistem.", "Saya Berpikir dalam Arsitektur.", "Saya Menyelesaikan Masalah Nyata."],
      description: "Seorang pemikir visioner dan calon arsitek sistem. Saya tidak hanya menulis kode; saya merancang ekosistem digital yang menjembatani kesenjangan antara masalah kompleks dan solusi elegan.",
      viewWork: "Lihat Karya Saya",
      talk: "Mari Berdiskusi",
      systemOnline: "Sistem: Aktif",
      globalImpact: "Dampak Global",
      whyTitle: "Mengapa Saya Membangun",
      whyQuote: "\"Membangun bukan sekadar merakit; ini tentang memahami jiwa sebuah sistem. Saya melihat dunia sebagai serangkaian simpul yang saling terhubung, dan misi saya adalah mengoptimalkan jalur yang menghubungkannya. Setiap baris kode adalah batu bata dalam alam semesta digital yang dirancang untuk melayani kemanusiaan.\"",
      traits: [
        { title: "Pemikir Sistem", desc: "Saya menganalisis makro untuk mengoptimalkan mikro. Arsitektur adalah bahasa saya." },
        { title: "Mentalitas Pembangun", desc: "Eksekusi adalah segalanya. Saya mengubah konsep abstrak menjadi kenyataan nyata." },
        { title: "Visi & Kepemimpinan", desc: "Mengorganisir tim dan ide untuk mencapai apa yang tampak mustahil." }
      ]
    },
    about: {
      title: "Perjalanan.",
      intro: "Saya tidak melihat masalah sebagai hambatan; saya melihatnya sebagai sistem yang menunggu untuk dioptimalkan. Perjalanan saya bukanlah garis lurus—melainkan putaran rekursif dari belajar, membangun, dan menyempurnakan.",
      timeline: [
        { year: "2020", title: "Percikan Awal", desc: "Dimulai sebagai siswa yang penasaran, membongkar perangkat lunak untuk memahami 'bagaimana' cara kerjanya." },
        { year: "2022", title: "Sang Pengorganisir", desc: "Memimpin komunitas teknologi dan menyelenggarakan hackathon, mempelajari kekuatan eksekusi kolektif." },
        { year: "2024", title: "Sang Pengembang", desc: "Menguasai full-stack, membangun produk yang menyelesaikan hambatan dunia nyata." },
        { year: "2026", title: "Pembangun Sistem", desc: "Sekarang merancang ekosistem digital kompleks dengan fokus pada skalabilitas dan desain yang berpusat pada manusia." }
      ],
      leadership: {
        title: "Pola Pikir Kepemimpinan",
        desc: "Kepemimpinan bukan tentang menjadi atasan. Ini tentang menciptakan sistem di mana setiap orang dapat tampil maksimal. Saya fokus pada menghilangkan hambatan—baik teknis maupun manusia."
      },
      learning: {
        title: "Belajar Berkelanjutan",
        desc: "Saya mendekati pembelajaran seperti kompilator. Saya menyerap informasi mentah, menguraikannya menjadi model mental, dan mengeksekusinya melalui proyek dunia nyata. Jika saya belum membangunnya, saya belum mengetahuinya."
      },
      skillsTitle: "Peralatan Saya."
    },
    work: {
      title: "Apa yang Telah Saya Bangun.",
      subtitle: "Kumpulan sistem yang dirancang untuk menyelesaikan hambatan dunia nyata.",
      complexity: "Kompleksitas",
      problem: "Masalah",
      solution: "Solusi Sistem",
      stack: "Teknologi",
      lesson: "Pelajaran Utama",
      demo: "Demo Langsung",
      source: "Kode Sumber",
      back: "Kembali ke Karya",
      expTitle: "Kepemimpinan & Eksekusi.",
      expSubtitle: "Perjalanan profesional saya ditentukan oleh dampak yang saya ciptakan dan sistem yang saya tinggalkan.",
      orgTitle: "Organisasi & Kepemimpinan",
      orgSubtitle: "Di mana saya menyumbangkan visi dan energi saya di luar kode.",
      stats: [
        { label: "Sistem Dibangun", value: 12 },
        { label: "Proyek Dikirim", value: 24 },
        { label: "Orang Terdampak", value: "5K+" }
      ]
    },
    blog: {
      title: "Apa yang Saya Pikirkan.",
      subtitle: "Refleksi tentang teknologi, sistem, dan perjalanan membangun masa depan digital yang bermakna.",
      readTime: "menit",
      back: "Kembali ke Blog",
      categories: ["Semua", "Filosofi", "Desain UX", "Teknologi", "Rekayasa"]
    },
    lab: {
      title: "Lab Gen Z.",
      subtitle: "Taman bermain eksperimental tempat saya menguji ide dan membangun alat mini untuk masa depan.",
      career: {
        title: "Generator Jalur Karir",
        desc: "Bingung mau ke mana? Biarkan lab menentukan peran masa depanmu.",
        btn: "Hasilkan Jalur",
        paths: ["Arsitek Sistem AI", "Hacker Etis untuk Kebaikan", "Pemimpin Produk Digital Nomad", "Pembangun Infrastruktur Web3", "Peneliti UX Berpusat pada Manusia"]
      },
      hustle: {
        title: "Generator Ide Sampingan",
        desc: "Butuh proyek akhir pekan? Ini ide potensial tinggi untukmu.",
        btn: "Hasilkan Ide",
        ideas: ["Pengoptimalkan Resume Berbasis AI", "Micro-SaaS untuk Petani Lokal", "Newsletter Stack Teknologi Terkurasi", "Toko Keyboard Mekanik Kustom", "Digital Garden sebagai Layanan"]
      }
    },
    contact: {
      title: "Mari Membangun.",
      subtitle: "Jika Anda sedang membangun sesuatu yang bermakna, atau hanya ingin berbicara tentang sistem dan masa depan, pintu digital saya selalu terbuka.",
      email: "Email Saya",
      discord: "Discord",
      form: {
        name: "Nama",
        email: "Email",
        subject: "Subjek",
        message: "Pesan",
        placeholderName: "John Doe",
        placeholderEmail: "john@example.com",
        placeholderMsg: "Ceritakan tentang visi Anda...",
        btn: "Kirim Pesan",
        subjects: ["Pertanyaan Umum", "Kolaborasi Proyek", "Konsultasi Sistem", "Hanya Menyapa"]
      }
    }
  }
};
