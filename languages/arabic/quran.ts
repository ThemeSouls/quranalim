export const allSurahsPage = {
  allSurahs: "جميع السور",
  backToReader: "العودة إلى القارئ",
  searchSurahsPlaceholder: "البحث عن السور...",
  totalSurahsText: "تصفح واختر من جميع سور القرآن البالغ عددها 114",
  noSurahsFound: "لا توجد سور تطابق بحثك.",
  verses: "آيات",
  rukus: "ركوع",
  juz: "جزء",
  typeMeccan: "مكية",
  typeMedinan: "مدنية"
};

export const mainPage = {
  quranKareem: "القرآن الكريم",
  welcomeSub: "مرحبًا بك، بوابتك للحكمة الإلهية",
  browseSurahs: "تصفح السور",
  verseOfTheDay: "آية اليوم",
  lastRead: "آخر ما قُرئ",
  resumeReading: "مواصلة القراءة",
  recitedFrequently: "تُتلى بشكل متكرر",
  tasbihCounter: "عداد التسبيح",
  changeDhikr: "تغيير الذكر",
  tapToIncrease: "اضغط على الدائرة لزيادة العدد",
  dhikrList: [
    { arabic: "سُبْحَانَ ٱللَّٰهِ", english: "سبحان الله", meaning: "سبحان الله" },
    { arabic: "ٱلْحَمْدُ لِلهِ", english: "الحمد لله", meaning: "الحمد لله" },
    { arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ", english: "لا إله إلا الله", meaning: "لا معبود بحق إلا الله" },
    { arabic: "ٱللَّٰهُ أَكْبَرُ", english: "الله أكبر", meaning: "الله أكبر" },
    { arabic: "أَسْتَغْفِرُ ٱللَّٰهَ", english: "أستغفر الله", meaning: "أطلب المغفرة من الله" }
  ],
  dailyVerses: [
    {
      text: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
      translationEn: "فاذكروني أذكركم واشكروا لي ولا تكفرون.",
      reference: "البقرة (2:152)"
    },
    {
      text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translationEn: "إن مع العسر يسرا.",
      reference: "الشرح (94:6)"
    },
    {
      text: "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
      translationEn: "لئن شكرتم لأزيدنكم.",
      reference: "إبراهيم (14:7)"
    },
    {
      text: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
      translationEn: "وإذا سألك عبادي عني فإني قريب.",
      reference: "البقرة (2:186)"
    }
  ]
};

export const quranApp = {
  title: "تخطيط تطبيق القرآن"
};

export const useQuranAudio = {
  audioErrorAlert: "حدثت مشكلة أثناء تشغيل الصوت. يرجى التحقق من اتصالك بالإنترنت."
};

export const useQuranBookmarks = {
  title: "متتبع العلامات المرجعية"
};

export const useQuranVerses = {
  apiLoadError: "فشل في تحميل السورة. يرجى التحقق من اتصالك بالإنترنت.",
  apiFormatError: "تنسيق بيانات الترجمة المستلمة من الواجهة البرمجية غير صالح.",
  offlineEnglish: "وضع عدم الاتصال: تم تحميل الترجمة العربية المخزنة مؤقتًا.",
  internetRequiredEnglish: "يلزم الاتصال بالإنترنت: تتطلب ترجمة هذه السورة وصولاً نشطًا للشبكة.",
  translatorsMap: {
    "ur.khan": "أحمد رضا خان بریلوی",
    "ur.maududi": "أبو الأعلى المودودي",
    "ur.jalandhry": "فتح محمد جالندھری",
    "en.sahih": "صحيح إنترناشونال",
    "en.yusufali": "يوسف علي",
    "en.pickthall": "بيكتثال"
  }
};

export const settingsModal = {
  readingSettings: "إعدادات القراءة",
  arabicSize: "حجم الخط العربي",
  translationSize: "حجم الترجمة",
  previewArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  previewTranslation: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  close: "إغلاق"
};

export const sidebar = {
  surahList: "قائمة السور",
  search: "بحث",
  searchSurah: "البحث عن اسم السورة أو رقمها...",
  noSurahsFound: "لا توجد سور تطابق بحثك.",
  bookmarks: "العلامات المرجعية",
  noBookmarks: "لم يتم حفظ أي علامات مرجعية بعد",
  ayahNo: "رقم الآية: ",
  load: " (تحميل)"
};

export const surahHeaderCard = {
  previousSurah: "السورة السابقة",
  nextSurah: "السورة التالية",
  pauseRecitation: "إيقاف التلاوة مؤقتًا",
  reciteSurah: "تلاوة السورة",
  fontResize: "تغيير حجم الخط",
  selectTranslator: "اختر المترجم",
  search: "بحث",
  searchVerse: "ابحث في هذه السورة (مثل 'الله' أو رقم الآية)...",
  foundVerses: "تم العثور على {count} آيات",
  foundVerse: "تم العثور على {count} آية"
};

export const surahNavigation = {
  previousSurahLabel: "السورة السابقة",
  nextSurahLabel: "السورة التالية",
  currentSurahLabel: "السورة الحالية",
  verses: "آيات"
};

export const translatorModal = {
  selectTranslator: "اختر المترجم",
  subtitle: "قارن ترجمات متعددة جنبًا إلى جنب",
  done: "تم",
  translators: [
    {
      id: "en.sahih",
      name: "صحيح إنترناشونال",
      desc: "ترجمة حديثة قياسية وأكاديمية للغاية ومقروءة على نطاق واسع"
    },
    {
      id: "en.yusufali",
      name: "يوسف علي",
      desc: "ترجمة كلاسيكية مع تعليق شعري وروحي مكثف"
    },
    {
      id: "en.pickthall",
      name: "بيكتثال",
      desc: "ترجمة إنجليزية تقليدية وأنيقة لعالم بارز"
    }
  ]
};

export const verseCard = {
  reciter: "تلاوة",
  reciteThisAyah: "تلاوة هذه الآية",
  pauseRecitation: "إيقاف التلاوة مؤقتًا",
  bookmarkAyah: "وضع علامة مرجعية على الآية"
};

export const view = {
  title: "مساحة عمل قارئ القرآن"
};

export const mutarjumMainPage = {
  loading: "جاري التحميل...",
  loadingMoreVerses: "جاري تحميل المزيد من الآيات...",
  backBtn: "رجوع",
  noResults: "لا توجد نتائج"
};

export const quran = {
  surahList: "قائمة السور",
  surahShort: "قائمة السور",
  searchSurah: "البحث عن اسم السورة أو رقمها...",
  searchVerse: "ابحث في هذه السورة (مثل 'الله' أو رقم الآية)...",
  verses: "آيات",
  rukus: "ركوع",
  juz: "جزء",
  typeMeccan: "مكية",
  typeMedinan: "مدنية",
  reciter: "تلاوة",
  offlineMode: "وضع عدم الاتصال: بعض المترجمين غير مخزنين مؤقتًا. تم تحميل الترجمة الأساسية.",
  internetIssue: "مشكلة في الإنترنت: الإنترنت مطلوب لجلب هذه السورة أو الترجمة.",
  noSurahsFound: "لا توجد سور تطابق بحثك.",
  pauseRecitation: "إيقاف التلاوة مؤقتًا",
  reciteSurah: "تلاوة السورة",
  loadingMoreVerses: "جاري تحميل المزيد من الآيات...",
  ayahNo: "رقم الآية: ",
  load: " (تحميل)",
  allSurahs: "جميع السور",
  searchSurahsPlaceholder: "البحث عن السور...",
  backToReader: "العودة إلى القارئ",
  previousSurah: "السورة السابقة",
  nextSurah: "السورة التالية",
  surahs: "السور",
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
