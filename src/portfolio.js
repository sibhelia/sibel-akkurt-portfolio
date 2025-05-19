//site ayarları
const settings = {
  isSplash: true, // preloader kullanacak mı?
  useCustomCursor: true, //imleç için özel bir imleç kullanacak mı?
  googleTrackingID: "",
};

// Ana Sayfa Bilgileri
const greeting = {
  title: "Selamlar🌸✨",
  title2: "Sibel Akkurt",
  logo_name: "Sibel.Dev()",
  nickname: "sibhelia",
  full_name: "Sibel Akkurt",
  subTitle: " Teknolojiyle tanıştığım ilk andan beri onunla neler başarabileceğimi keşfetme heyecanı taşıyorum. Yazılımı sadece kod değil, hayatı kolaylaştıran sistemler olarak görüyor; teknik ve yaratıcı becerilerimi birleştirerek gerçek sorunlara çözümler üretiyorum. Öğrenmeye ve üretmeye tutkuyla devam ediyorum.", 
  resumeLink: "https://drive.google.com/file/d/1Il0JIR-8p2vPBbmSZwsxNaMKcV9UJIAV/view?usp=sharing", 
  mail: "mailto:sibelakk23@gmail.com", 
  github: "https://github.com/sibhelia",
  linkedin: "https://www.linkedin.com/in/sibhelia4616", 
};

const socialMediaLinks = {//burada düzeltilmesi gereken şeyler var.
  github: "https://github.com/sibhelia",
   medium: "https://medium.com/@sibelakkurt",
  linkedin: "https://www.linkedin.com/in/sibhelia4616",
  gmail: "sibelakk23@gmail.com",
  facebook: "",
  twitter: "https://x.com/sibhelia",
  instagram: "https://www.instagram.com/sibelaakk_/",
};

const skills = {
  data: [
    {
      title: "Full Stack Web Geliştirme",
      fileName: "FullStackImg",
      skills: [
        "✨ HTML, CSS ve JavaScript ile kullanıcı dostu,duyarlı arayüzler geliştiriyor; kullanıcı deneyimi, erişilebilirlik ve performansa önem veriyorum.",
        "✨ ReactJS ile modern ve dinamik web uygulamaları oluşturuyorken Node.js ve Express.js ile arka uç geliştirme yapabiliyorum.",
        "✨ WordPress ile içerik yönetimi ve kurumsal site kurulumu yapıyorum.",
        "✨ .NET (C#) kullanarak güçlü ve güvenli web uygulamaları geliştiriyor, RESTful API'ler ile veri alışverişi yapabiliyor ve uygulamalar arasında entegrasyon sağlıyorum.",
  
       
      ],
      softwareSkills: [     {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: { color: "#7952B3" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#FFFFFF", color: "#F7DF1E" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#000000" },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "fa-wordpress",
          style: { color: "#21759b" },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: { color: "#512BD4" },
        },
       ],
    },
   {
  title: "Masaüstü Uygulama Geliştirme",
  fileName: "DesktopImg",
  skills: [
    "✨ Python ve C++ ile PyQt ve Qt framework'leri kullanarak çapraz platform masaüstü uygulamaları geliştiriyorum.",
    "✨ Electron.js ile platformlar arası modern masaüstü uygulamalar tasarlıyorum.",
    "✨ .NET teknolojileri (C#) ile Windows tabanlı GUI uygulamalarını profesyonel şekilde oluşturabiliyorum.",
    "✨ Firebase ile kullanıcı kimlik doğrulama ve veri yönetimi sağlayabiliyorum."
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "simple-icons:python",
      style: { color: "#3776AB" },
    },
   {
      skillName: "C/C++",
      fontAwesomeClassname: "simple-icons:cplusplus",
      style: { color: "#00599C" },
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "simple-icons:csharp",
      style: { color: "#239120" },
    },
    {
      skillName: "ElectronJS",
      fontAwesomeClassname: "simple-icons:electron",
      style: { color: "#47848F" },
    },
     {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
    {
      skillName: ".NET",
      fontAwesomeClassname: "simple-icons:dotnet",
      style: { color: "#512BD4" },
    },
  ],
}
,
  {
  title: "Gömülü Sistem Geliştirme",
  fileName: "EmbeddedImg",
  skills: [
    "✨ Arduino,Raspberry Pi, ESP32 ve STM32 tabanlı IoT projeleri geliştiriyorum.",
    "✨ C ve C++ dilleri ile gömülü sistemlerde düşük seviyeli programlama yapıyorum.",
    "✨ Sensör entegrasyonu ve gerçek zamanlı veri işleme sistemleri tasarlıyorum.",
    "✨ STM32 mikrodenetleyiciler üzerinde gömülü sistem tasarımı ve programlama konusunda deneyimliyim."
  ],
  softwareSkills: [
    {
      skillName: "Arduino",
      fontAwesomeClassname: "simple-icons:arduino",
      style: { color: "#00979D" },
    },
    {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "simple-icons:raspberrypi",
          style: { color: "#C51A4A" },
        },
    {
      skillName: "ESP32",
      fontAwesomeClassname: "simple-icons:espressif",
      style: { color: "#2C2D72" }, // ESP32 ikon rengi için uygun bir ton
    },
    {
      skillName: "STM32",
      fontAwesomeClassname: "simple-icons:stmicroelectronics",
      style: { color: "#009639" },
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "simple-icons:cplusplus",
      style: { color: "#00599C" },
    },
  ],
}
,
    {
      title: "Teknik Yetkinlikler",
      fileName: "SkillSectionImg",
      skills: [
        "✨ Git ve GitHub ile versiyon kontrolü ve takım içinde uyumlu çalışma yürütüyorum.",
        "✨ SQL ve MySQL ile ilişkisel veritabanları üzerinde sorgular yazabiliyor ve veri yönetimi yapabiliyorum.",
        "✨ OOP prensipleriyle sürdürülebilir ve modüler yazılım geliştirme anlayışına sahibim.",
        "✨ Yazılım yaşam döngüsü, test süreçleri ve sorumluluk alma konularında deneyim sahibiyim."
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#E94E32" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
         {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "Nesne Yönelimli Programlama",
          fontAwesomeClassname: "simple-icons:codio",
          style: { color: "#0066cc" },
        },
       {
        skillName: "Algoritmalar ve Veri Yapıları",
        fontAwesomeClassname: "mdi:chart-tree",  // veya başka uygun bir ikon konulabilir.
        style: { color: "#ff6600" },
      },
      
      ],
    },
  ],
};

//öğrenim bilgileri
const degrees = {
  degrees: [
    {
      title: "Balıkesir Üniversitesi",
      subtitle: "Lisans Derecesi, Bilgisayar Mühendisliği",
      logo_path: "baun.png",
      alt_name: "BAUN",
      duration: "2022 - 2026",
     descriptions: [
  "📚 Bilgisayar Mühendisliği lisansım süresince Makine Öğrenmesi, Bilgisayarla Görü, Web Geliştirme ve Gömülü Sistemler gibi alanlarda sağlam bir altyapı edindim.",
  "📚 Python, C, C++, C#, Java, JavaScript gibi dillerle projeler geliştirerek yazılım ve algoritma becerilerimi pekiştirdim.",
  "📚 HTML5, CSS, React.js, Node.js ve Microsoft SQL Server ile tam kapsamlı web geliştirme deneyimi kazandım.",
  "📚 UI/UX tasarımı, veri yapıları, web scraping gibi konularda uygulamalı çalışmalarla yetkinliğimi artırdım.",
  "📚 EBST Topluluğu'ndaki görevimle teknik becerilerimin yanı sıra zaman yönetimi, ekip çalışması ve iletişim alanlarında da gelişim sağladım."
]
, website_link: "https://balikesir.edu.tr/",
    },
   
  ],
};
//aldığım sertifikalar
const certifications = {
  certifications: [
    {
      title: "INSPIRING W-STORIES: W-SHARE",
      subtitle: "İş hayatında kadının rolü, toplumsal cinsiyet eşitliği ve kadınların başarı hikayeleri üzerine düzenlenen seminere katılarak bu alandaki farkındalığımı artırdım ve sertifika almaya hak kazandım.",
      logo_path: "anbean.png",//anabean logosu yüklicen
      certificate_link:
        "https://anbeankampus.co/sertifika/f01adebb-92fe-4c7b",
      alt_name: "Anbean Kampüs",
      // color_code: "#2AAFED",
      color_code: "#E2405F",
    },
    {
      title: "Uygulamalarla SQL Öğreniyorum",
      subtitle: "Microsoft SQL Server üzerine aldığım eğitimle veri tabanı yönetimi, sorgu yazma ve veri analizi konularında temel ve ileri düzey beceriler kazandım.",
      logo_path: "udemy.png",//udemy 
      certificate_link: "https://udemy.com/certificate/UC-fc7a2040-e0e6-4067-962c-0a55500525fb/",
      alt_name: "Udemy",
      color_code: "#E2405F",
    },
    {
      title: "VESTEL:Mobilitenin Yol Haritası",
      subtitle: "VESTEL tarafından düzenlenen ‘Mobilitenin Yol Haritası’ etkinliğine katılarak, mobilite teknolojileri ve sektör trendleri hakkında güncel bilgiler edindim.",
      logo_path: "coderspace.png",//coderspace
      certificate_link:
        "https://coderspace.io/sertifikalar/fe9fdd2e-a02b-422d-bd7b-0469b43b27da",
      alt_name: "Coderspace",
      color_code: "#E2405F",
    },
    {
      title: "Audit Day",
      subtitle: "Denetim süreçleri, iç kontrol sistemleri ve kurumsal şeffaflık konularının ele alındığı Audit Day etkinliğine katılarak bu alandaki farkındalığımı artırdım.",
      logo_path: "anbean.png",//anbean 
      certificate_link:
        "https://anbeankampus.co/sertifika/6e85edcd-60ac-4f86",
      alt_name: "Anbean Kampüs",
      color_code: "#E2405F",
    },
    {
      title: "Engineering Week",
      subtitle: "Mühendislik alanındaki güncel gelişmeler, sektör deneyimleri ve teknolojik yeniliklerin paylaşıldığı Engineering Week etkinliğine katılarak teknik ve mesleki bakış açımı genişlettim.",
      logo_path: "anbean.png",//anbean
      certificate_link:
        "https://anbeankampus.co/sertifika/e1339e15-401d-40d0",
      alt_name: "Anbean Kampüs",
      color_code: "#E2405F",
    },
    {
      title: "Generative AI Ile Kodlama 101",
      subtitle: "Yapay zekâ destekli yazılım geliştirme süreçlerine giriş niteliğinde olan ‘Generative AI ile Kodlama 101’ eğitimine katılarak, üretici yapay zekânın yazılım alanındaki uygulamaları hakkında temel bilgi edindim.",
      logo_path: "workintech.png",//workintech
      certificate_link:
        "https://akbank-genclik-akademisi.verified.cv/en/verify/00263958984466?ref=email",
      alt_name: "Workintech",
      color_code: "#E2405F",
    },
    {
      title: "Teknolojide Fırsat Eşitliği Başarı Sertifikası ",
      subtitle: "Teknolojide Fırsat Eşitliği programını başarıyla tamamlayarak, teknoloji sektöründe daha kapsayıcı bir gelecek için farkındalık ve yetkinlik kazandığımı belgeledim.",
      logo_path: "bau.png",//BAU
      certificate_link:
        "https://www.turkiye.gov.tr/bahcesehir-universitesi-sertifika-sorgulama?sertifika=detay&index=0",
      alt_name: "Bahçeşehir Üniversitesi",
      color_code: "#E2405F",
    },
    {
      title: "Teknolojide Fırsat Eşitliği Katılım Belgesi ",
      subtitle: "Teknolojide Fırsat Eşitliği programı kapsamında düzenlenen eğitimlere katılarak dijital okuryazarlık, kariyer planlama, toplumsal cinsiyet eşitliği ve teknoloji sektöründeki fırsatlar hakkında kapsamlı bilgi edindim.",
      logo_path: "bau.png",//BAU
      certificate_link:
        "https://baugo.online/certificate/verify/8412fd7f308d39cc478d34958312c3da",
      alt_name: "Bahçeşehir Üniversitesi",
      color_code: "#E2405F",
    },
    {
      title: "Git ve Github Eğitimi Katılım Sertifikası ",
      subtitle: "Versiyon kontrol sistemleri üzerine düzenlenen Git ve GitHub eğitimine katılarak, yazılım projelerinde sürüm takibi, iş birliği ve kaynak yönetimi konularında temel bilgi ve beceriler edindim.",
      logo_path: "techcareer.png",//techcareer
      certificate_link:
        "https://certificates.techcareer.net/tr/verify/26257744815719?ref=email",
      alt_name: "TechCareer.net",
      color_code: "#E2405F",
    },
    {
      title: "Ege Bilişim Zirvesi ",
      subtitle: "Ege Bilişim Zirvesi seminerine katılarak yazılım, siber güvenlik ve yapay zekâ gibi alanlarda düzenlenen oturumları dinledim; sektör profesyonelleriyle tanışarak değerli bağlantılar kurma ve ağ oluşturma fırsatı yakaladım.",
      logo_path: "cbu.png",//mcbü
      certificate_link:
        "https://verified.sertifier.com/tr/verify/44144474357329/?ref=email",
      alt_name: "Manisa Celal Bayar Üniversitesi",
      color_code: "#E2405F",
    },
  ],
};

// Experience Page
const experience = {
  title: "Deneyim",
  subtitle: "İş, Staj ve Gönüllü Deneyimlerim",
  description:
    "Web geliştirme alanına olan ilgim doğrultusunda HTML, CSS, JavaScript, React.js ve Node.js gibi teknolojilerle çeşitli projeler geliştirdim. Gerçek kullanıcı ihtiyaçlarına yönelik arayüzler tasarlayıp işlevsel yapılar kurarak hem ön yüz hem de arka yüz tarafında tecrübeler edindim. Gönüllü olarak dahil olduğum topluluk çalışmalarıyla iletişim, organizasyon ve ekip çalışması gibi becerilerimi de pekiştirdim. Kendimi sürekli geliştirerek daha güçlü projeler üretmeye odaklanıyorum.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "İş Deneyimi",
      experiences: [
        {
          title: "Yazılım Geliştirici",
          company: "Madra Yüksek İrtifa Roket Takımı",
          company_url: "https://www.crestinfosystems.com/",//link koy linkedin
          logo_path: "madra.png",//logo
          duration: "Ocak 2025 - Halen",
          location: "Balıkesir,Türkiye",
          description:"Arduino tabanlı mikrodenetleyici platformlarında çalışıyorum; IMU, barometre, sıcaklık ve GPS gibi sensörleri entegre ederek I2C, SPI ve UART protokolleriyle veri topluyorum. Telemetri sisteminde RF modülleri kullanarak gerçek zamanlı veri iletimi sağlıyorum. Uçuş verilerini alıyor, filtreliyor (örneğin Kalman filtresi), paketleyip yer istasyonuna iletiyorum. Kontrol sistemi simülasyonları ve PID tabanlı yönlendirme algoritmalarının geliştirilmesinde görev alıyorum. Sistem doğrulama, test ve hata analizlerinde teknik sorumluluk üstleniyorum. Donanım ve yazılım senkronizasyonu ile test planlamasında mühendis ekibiyle iş birliği yapıyorum.",
          color: "#0071C5",
        },
        {
          title: "Yazılım Geliştirme Stajyeri",
          company: "İLTAWEB Tasarım Yazılım Ltd. Şti.",
          company_url: "http://nightowls.company/",//iltanın siteyi koy
          logo_path: "iltaweb.png",//logo
          duration: "Eylül 2024 - Ocak 2025",
          location: "Balıkesir,Türkiye",
          description:" İltaweb adlı web tasarım firmasında gönüllü stajyer olarak, kurumsal hayatın dinamik dünyasına ve web tasarımının yaratıcı alanına dahil olma fırsatı buldum. Bu deneyim süresince zaman yönetimi ve ekip çalışması becerilerimi geliştirdim, aynı zamanda HTML5, CSS, JavaScript, UI/UX tasarımı, duyarlı web tasarımı ve SEO konularında teknik yetkinliklerimi ilerlettim. Photoshop ve Canva kullanarak görsel içerik tasarımında yaratıcılığımı artırdım, yazılım geliştirme ve nesne yönelimli programlama alanlarındaki bilgimi derinleştirdim. İşime olan tutkum ve ekibimle kurduğum güçlü iş birliği, bu süreci profesyonel gelişimimde ilham verici ve dönüştürücü bir yolculuk haline getirdi.",
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Gönüllü Deneyim",
      experiences: [
        {
          title: "Network Operation Director",
          company: "BAUN Elektrik ve Bilgisayar Sistemleri Topluluğu",
          company_url: "https://balikesir.edu.tr/",
          logo_path: "baun.png",//baun logosu koyulacak  
          duration: "Eylül 2024 - Mart 2025",
          location: "Balıkesir,Türkiye",
          description:
            "Elektrik ve Bilgisayar Sistemleri Topluluğu’nda Network Operasyon Koordinatörü olarak, topluluğun ağ altyapısının kurulumu, yönetimi ve teknik desteğinin sağlanmasında aktif görev aldım; etkinliklerde kesintisiz bağlantı ve sorunsuz iletişim için ağ kaynaklarını takip edip optimize ettim, güncel teknolojileri takip ederek çözümler sundum ve ekipler arası koordinasyonu sağlayarak bilgi akışının verimli olmasına katkıda bulundum.",
          color: "#FBBD18",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projelerim",
  description:
   "Çeşitli teknolojileri kullanarak projeler geliştirmeye çalışıyorum. Genellikle Node.js ile basit backend uygulamaları, Python scriptleri ve React projeleri üzerinde çalıştım. Aşağıda bazı örnek projelerimi bulabilirsiniz. Hepsi henüz GitHub’da yer almıyor ama zamanla eklemeye devam ediyorum.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Benimle İletişime Geçin",
    profile_image_path: "sibel.png",
    description:
      "Bana aşağıda paylaştığım iletişim kanallarından ulaşabilirsin. En kısa sürede mutlaka geri dönüş yapmaya çalışacağım!",
  },
  blogSection: {
    title: "Blog Yazılarım",
    subtitle:
      "Sık sık blog yazmıyorum ama harika bir şey yaptığımda bunu başkalarına faydalı olması için mutlaka Medium’da paylaşıyorum.",
    link: "https://medium.com/@sibelakkurt",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Diary App",
      description:
        "Diary App, kullanıcıların günlüklerini masaüstünde güvenle tutmasını sağlayan bir uygulamadır. React, Electron.js, Node.js ve Firebase ile geliştirilen proje; sade, kullanıcı dostu bir arayüz sunar.",
      languages: [
  {
    name: "HTML5",
    iconifyClass: "logos-html-5",
  },
  {
    name: "CSS3",
    iconifyClass: "logos-css-3",
  },
  {
    name: "React",
    iconifyClass: "logos-react",
  },
  {
    name: "NodeJs",
    iconifyClass: "logos-nodejs",
  },
  {
    name: "Firebase",
    iconifyClass: "logos-firebase",
  },
  {
    name: "Electron",
    iconifyClass: "logos-electron",
  },
],

      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
  
      ],
    },
    {
      id: "1",
      name: "Meeting App",
      description:
        ".NET teknolojilerini kullanarak geliştirdiğim bu basit uygulama, kullanıcıların çevrim içi toplantı yapmasına olanak tanır. Projede temel seviyede toplantı oluşturma, katılma ve görüntülü görüşme özellikleri yer almaktadır. Bu süreçte .NET ile gerçek zamanlı iletişim ve kullanıcı yönetimi konularında deneyim kazandım.",
      languages: [
  {
    name: ".NET",
    iconifyClass: "logos-dotnet",
  },
  {
    name: "C#",
    iconifyClass: "logos-c-sharp",
  },
  {
    name: "HTML5",
    iconifyClass: "logos-html-5",
  },
  {
    name: "CSS3",
    iconifyClass: "logos-css-3",
  },
  {
    name: "JavaScript",
    iconifyClass: "logos-javascript",
  },
 
],

      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
      
      ],
    },
    {
      id: "2",
      name: "Öğrenci Bilgi Sistemi",
      description:
        "OBS Clone projemde Python, PyQt5, Qt Designer ve MySQL kullanarak üniversitem için masaüstü öğrenci bilgi sistemi geliştirdim. Uygulama, öğrenci ve öğretim üyesi girişleri, ders kayıtları, not görüntüleme ve yönetici paneli gibi temel işlevleri içeriyor. Kullanıcı dostu arayüzle pratik ve işlevsel bir deneyim sunuyor.",
     languages: [
  {
    name: "Python",
    iconifyClass: "logos:python",
  },
  {
    name: "Qt Designer",
    iconifyClass: "mdi:application",
  },
  {
    name: "MySQL",
    iconifyClass: "logos:mysql",
  },
],
      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "3",
      name: "TechnoRadar",
      description:
        "Web scraping ile çeşitli haber sitelerinden teknoloji haberlerini toplayan ve tek platformda sunan bir web uygulaması geliştirdik. Python, Selenium, Flask, matplotlib ile HTML, CSS ve JavaScript kullandığımız projede, güncel haberleri düzenli ve görsel olarak kullanıcıya sunmayı amaçladık.",
    languages: [
  {
    name: "Python",
    iconifyClass: "logos-python",
  },
  {
    name: "Flask",
    iconifyClass: "logos-flask",
  },
  {
    name: "Selenium",
    iconifyClass: "logos-selenium",
  },
  {
    name: "HTML5",
    iconifyClass: "logos-html-5",
  },
  {
    name: "CSS3",
    iconifyClass: "logos-css-3",
  },
  {
    name: "JavaScript",
    iconifyClass: "logos-javascript",
  },
],

      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "4",
      name: "Madra Roket Takımı Site",
      description:
        "Roket takımımız için HTML, CSS ve JavaScript kullanarak responsive, kullanıcı dostu bir kurumsal web sitesi tasarladım. Photoshop ile görselleri hazırlayıp, sitenin tüm cihazlarda sorunsuz çalışmasını sağladım. Site, takımın projelerini ve ekibini profesyonel şekilde tanıtıyor.",
    languages: [
  {
    name: "HTML5",
    iconifyClass: "logos-html-5",
  },
  {
    name: "CSS3",
    iconifyClass: "logos-css-3",
  },
  {
    name: "JavaScript",
    iconifyClass: "logos-javascript",
  },
  {
    name: "Photoshop",
    iconifyClass: "logos-adobe-photoshop",
  },
  {
    name: "Figma",
    iconifyClass: "logos-figma",
  },
],
      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "5",
      name: "Madra Roket Takımı Yer İstasyonu",
      description:
        "Roket takımımız için C# kullanarak geliştirilen bu masaüstü arayüz uygulaması, yer istasyonunda roketten gelen verilerin takip edilmesini sağlıyor. Sensör verileri, uçuş bilgileri ve sistem durumları gerçek zamanlı olarak bu arayüzde görüntüleniyor. Böylece takımımız, görev sürecinde anlık durumu kolayca izleyip hızlı kararlar alabiliyor.",
     languages: [
  {
    name: "C#",
    iconifyClass: "logos-c-sharp",
  },
  {
    name: ".NET",
    iconifyClass: "logos-dotnet",
  },
 
],
      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "6",
      name: "BT10 Bilgi Teknolojileri ve Danışmanlık Ltd. Şti. Site",
      description:
        "BT10 Bilgi Teknolojileri ve Danışmanlık Ltd. Şti. için WordPress ile sade, kullanıcı dostu ve mobil uyumlu bir kurumsal site tasarladım. Şirketin hizmetlerini ve vizyonunu yansıtan, kolay yönetilebilir bir yapıyla hızlı ve güvenilir bir deneyim sağladı.",
      languages: [
  {
    name: "HTML5",
    iconifyClass: "vscode-icons:file-type-html",
  },
  {
    name: "CSS3",
    iconifyClass: "vscode-icons:file-type-css",
  },
  {
    name: "JavaScript",
    iconifyClass: "logos-javascript",
  },
  {
    name: "WordPress",
    iconifyClass: "logos:wordpress-icon",
  },
  {
    name: "PHP",
    iconifyClass: "logos:php",
  },
],

      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
     
      ],
    },
    {
      id: "7",
      name: "Task Scheduler Desktop App",
      description:
        "C++ ve Qt (Qt Creator & Designer) kullanarak, SQLite veritabanı destekli, otomatik görev zamanlayıcı masaüstü uygulaması geliştirdim. Uygulama, kullanıcı tarafından belirlenen görevleri zamanında otomatik olarak çalıştırıyor ve kullanıcı dostu arayüzüyle etkin kullanım sağlıyor.",
      languages: [
  {
    name: "C++",
    iconifyClass: "logos-c-plusplus",
  },
  {
    name: "Qt",
    iconifyClass: "logos-qt",
  },
  {
    name: "SQLite",
    iconifyClass: "logos-sqlite",
  },
],

      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "8",
      name: "Personal Portfolio",
      description:
        "React, Node.js, HTML, CSS ve JavaScript kullanarak kişisel portföy sitesi geliştirdim. Projede, görselliği artırmak için SVG dosyaları için hazır illüstrasyonlar da entegre ettim. Kullanıcı dostu ve modern tasarımla, projelerimi ve yeteneklerimi etkili şekilde sergilemeyi amaçladım.",
      languages: [
  {
    name: "ReactJS",
    iconifyClass: "logos-react",
  },
  {
    name: "NodeJS",
    iconifyClass: "logos-nodejs",
  },
  {
    name: "HTML5",
    iconifyClass: "vscode-icons:file-type-html",
  },
  {
    name: "CSS3",
    iconifyClass: "vscode-icons:file-type-css",
  },
  {
    name: "JavaScript",
    iconifyClass: "logos-javascript",
  },
],

      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
  
  
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
