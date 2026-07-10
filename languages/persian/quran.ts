export const allSurahsPage = {
  allSurahs: "همه سوره‌ها",
  backToReader: "بازگشت به خواننده",
  searchSurahsPlaceholder: "جستجوی سوره‌ها...",
  totalSurahsText: "مرور و انتخاب از بین ۱۱۴ سوره قرآنی",
  noSurahsFound: "هیچ سوره‌ای مطابق با درخواست شما یافت نشد.",
  verses: "آیات",
  rukus: "رکوع",
  juz: "جزء",
  typeMeccan: "مکی",
  typeMedinan: "مدنی"
};

export const mainPage = {
  quranKareem: "القرآن الکریم",
  welcomeSub: "خوش آمدید، پورتال شما برای حکمت الهی",
  browseSurahs: "مرور سوره‌ها",
  verseOfTheDay: "آیه روز",
  lastRead: "آخرین خوانده شده",
  resumeReading: "ادامه خواندن",
  recitedFrequently: "اغلب تلاوت شده",
  tasbihCounter: "شمارنده تسبیح",
  changeDhikr: "تغییر ذکر",
  tapToIncrease: "برای افزایش تعداد روی دایره ضربه بزنید",
  dhikrList: [
    { arabic: "سُبْحَانَ ٱللَّٰهِ", english: "سبحان‌الله", meaning: "منزه است خداوند" },
    { arabic: "ٱلْحَمْدُ لِلهِ", english: "الحمدلله", meaning: "ستایش مخصوص خداوند است" },
    { arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ", english: "لا اله الا الله", meaning: "هیچ معبودی جز خداوند نیست" },
    { arabic: "ٱللَّٰهُ أَكْبَرُ", english: "الله اکبر", meaning: "خداوند بزرگتر است" },
    { arabic: "أَسْتَغْفِرُ ٱللَّٰهَ", english: "استغفرالله", meaning: "از خداوند طلب آمرزش می‌کنم" }
  ],
  dailyVerses: [
    {
      text: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
      translationEn: "پس مرا یاد کنید تا شما را یاد کنم و شکرگزار من باشید و کفران نورزید.",
      reference: "البقره (۲:۱۵۲)"
    },
    {
      text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translationEn: "به راستی که با سختی، آسانی است.",
      reference: "الشرح (۹۴:۶)"
    },
    {
      text: "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
      translationEn: "اگر شکرگزار باشید، حتماً بر [نعمت] شما می‌افزایم.",
      reference: "ابراهیم (۱۴:۷)"
    },
    {
      text: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
      translationEn: "و هنگامی که بندگان من از تو درباره من می‌پرسند - به راستی که من نزدیکم.",
      reference: "البقره (۲:۱۸۶)"
    }
  ]
};

export const quranApp = {
  title: "طرح‌بندی برنامه قرآن"
};

export const useQuranAudio = {
  audioErrorAlert: "هنگام پخش صدا مشکلی رخ داد. لطفاً اتصال اینترنت خود را بررسی کنید."
};

export const useQuranBookmarks = {
  title: "ردیاب نشانک‌ها"
};

export const useQuranVerses = {
  apiLoadError: "بارگیری سوره با شکست مواجه شد. لطفاً اتصال اینترنت خود را بررسی کنید.",
  apiFormatError: "فرمت داده‌های ترجمه دریافتی از API نامعتبر است.",
  offlineEnglish: "حالت آفلاین: ترجمه انگلیسی ذخیره شده بارگیری شد.",
  internetRequiredEnglish: "اتصال به اینترنت مورد نیاز است: این ترجمه سوره نیاز به دسترسی فعال به شبکه دارد.",
  translatorsMap: {
    "ur.khan": "احمد رضا خان بریلوی",
    "ur.maududi": "ابوالاعلی مودودی",
    "ur.jalandhry": "فتح محمد جالندری",
    "en.sahih": "صحیح بین‌المللی",
    "en.yusufali": "یوسف علی",
    "en.pickthall": "پیکتال"
  }
};

export const settingsModal = {
  readingSettings: "تنظیمات خواندن",
  arabicSize: "اندازه عربی",
  translationSize: "اندازه ترجمه",
  previewArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  previewTranslation: "به نام خداوند بخشنده مهربان.",
  close: "بستن"
};

export const sidebar = {
  surahList: "لیست سوره‌ها",
  search: "جستجو",
  searchSurah: "جستجوی نام یا شماره سوره...",
  noSurahsFound: "هیچ سوره‌ای مطابق با درخواست شما یافت نشد.",
  bookmarks: "نشانک‌ها",
  noBookmarks: "هنوز نشانکی ذخیره نشده است",
  ayahNo: "شماره آیه: ",
  load: " (بارگیری)"
};

export const surahHeaderCard = {
  previousSurah: "سوره قبلی",
  nextSurah: "سوره بعدی",
  pauseRecitation: "توقف تلاوت",
  reciteSurah: "تلاوت سوره",
  fontResize: "تغییر اندازه قلم",
  selectTranslator: "انتخاب مترجم",
  search: "جستجو",
  searchVerse: "جستجو در این سوره (مثلاً 'الله' یا شماره آیه)...",
  foundVerses: "{count} آیه یافت شد",
  foundVerse: "{count} آیه یافت شد"
};

export const surahNavigation = {
  previousSurahLabel: "سوره قبلی",
  nextSurahLabel: "سوره بعدی",
  currentSurahLabel: "سوره فعلی",
  verses: "آیات"
};

export const translatorModal = {
  selectTranslator: "انتخاب مترجم",
  subtitle: "مقایسه چندین ترجمه در کنار یکدیگر",
  done: "انجام شد",
  translators: [
    {
      id: "en.sahih",
      name: "صحیح بین‌المللی",
      desc: "ترجمه مدرن استاندارد، بسیار آکادمیک و پرمخاطب"
    },
    {
      id: "en.yusufali",
      name: "یوسف علی",
      desc: "ترجمه کلاسیک با تفسیر گسترده شاعرانه و معنوی"
    },
    {
      id: "en.pickthall",
      name: "مارمادوک پیکتال",
      desc: "ترجمه انگلیسی زیبا و سنتی توسط یک محقق برجسته"
    }
  ]
};

export const verseCard = {
  reciter: "تلاوت",
  reciteThisAyah: "تلاوت این آیه",
  pauseRecitation: "توقف تلاوت",
  bookmarkAyah: "نشانک‌گذاری آیه"
};

export const view = {
  title: "فضای کاری قرآن‌خوان"
};

export const mutarjumMainPage = {
  loading: "در حال بارگیری...",
  loadingMoreVerses: "در حال بارگیری آیات بیشتر...",
  backBtn: "بازگشت",
  noResults: "هیچ نتیجه‌ای یافت نشد"
};

export const quran = {
  surahList: "لیست سوره‌ها",
  surahShort: "لیست سوره‌ها",
  searchSurah: "جستجوی نام یا شماره سوره...",
  searchVerse: "جستجو در این سوره (مثلاً 'الله' یا شماره آیه)...",
  verses: "آیات",
  rukus: "رکوع",
  juz: "جزء",
  typeMeccan: "مکی",
  typeMedinan: "مدنی",
  reciter: "تلاوت",
  offlineMode: "حالت آفلاین: برخی از مترجمان ذخیره نشده‌اند. ترجمه پایه بارگیری شد.",
  internetIssue: "مشکل اینترنت: اینترنت برای دریافت این سوره یا ترجمه مورد نیاز است.",
  noSurahsFound: "هیچ سوره‌ای مطابق با درخواست شما یافت نشد.",
  pauseRecitation: "توقف تلاوت",
  reciteSurah: "تلاوت سوره",
  loadingMoreVerses: "در حال بارگیری آیات بیشتر...",
  ayahNo: "شماره آیه: ",
  load: " (بارگیری)",
  allSurahs: "همه سوره‌ها",
  searchSurahsPlaceholder: "جستجوی سوره‌ها...",
  backToReader: "بازگشت به خواننده",
  previousSurah: "سوره قبلی",
  nextSurah: "سوره بعدی",
  surahs: "سوره‌ها",
};

export const quranEnglishTranslation = {
  allSurahsPage,
  mainPage,
  quranApp,
  useQuranAudio,
  useQuranBookmarks,
  useQuranVerses,
  settingsModal,
  sidebar,
  surahHeaderCard,
  surahNavigation,
  translatorModal,
  verseCard,
  view,
  mutarjumMainPage,
  quran,
};
