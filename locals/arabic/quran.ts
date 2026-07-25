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
  typeMedinan: "مدنية",
  gridView: "عرض الشبكة",
  listView: "عرض القائمة"
};

export const mainPage = {
  readingView: "السور",
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
    "ur.maududi": "أبو الأعلى المودودي",
    "ur.jalandhry": "فتح محمد جالندھری",
    "ur.junagarhi": "محمد جوناغري",
    "ur.khan": "أحمد رضا خان",
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
  currentSurah: "السورة الحالية",
  hideSidebar: "إخفاء الشريط الجانبي",
  showSidebar: "إظهار الشريط الجانبي",
  selectFont: "اختر الخط",
  changeFontSize: "تغيير حجم الخط",
  changeFontFamily: "تغيير نوع الخط",
  surahLabel: "السورة",
  surahNumberText: "سورة {number}",
  juzLabel: "الجزء",
  rukusLabel: "الركوعات",
  versesLabel: "الآيات",
  typeMeccanLabel: "مكية",
  typeMedinanLabel: "مدنية",
  foundVersesText: "تم العثور على {count} آيات",
  foundVerseText: "تم العثور على آية واحدة",
  surahs: "السور",
  allJuz: "جميع الأجزاء",
  searchJuzPlaceholder: "ابحث عن الجزء بالاسم أو الرقم أو سورة البداية...",
  totalJuzText: "تصفح واختر من بين جميع أجزاء القرآن الثلاثين",
  noJuzFound: "لم يتم العثور على أي جزء يطابق بحثك.",
  juzNumberLabel: "الجزء {number}",
  startingSurah: "سورة البداية",
  startingAyah: "آية البداية",
  backToDashboard: "العودة إلى لوحة القيادة",
  juzItems: [
    { id: 1, name: "الم", arabic: "آلم", startSurahId: 1, startAyah: 1, surahName: "الفاتحة" },
    { id: 2, name: "سيقول", arabic: "سيقول", startSurahId: 2, startAyah: 142, surahName: "البقرة" },
    { id: 3, name: "تلك الرسل", arabic: "تلك الرسل", startSurahId: 2, startAyah: 253, surahName: "البقرة" },
    { id: 4, name: "لن تنالوا", arabic: "لن تنالوا", startSurahId: 3, startAyah: 93, surahName: "آل عمران" },
    { id: 5, name: "والمحصنات", arabic: "والمحصنات", startSurahId: 4, startAyah: 24, surahName: "النساء" },
    { id: 6, name: "لا يحب الله", arabic: "لا يحب الله", startSurahId: 4, startAyah: 148, surahName: "النساء" },
    { id: 7, name: "وإذا سمعوا", arabic: "وإذا سمعوا", startSurahId: 5, startAyah: 82, surahName: "المائدة" },
    { id: 8, name: "ولو أننا", arabic: "ولو أننا", startSurahId: 6, startAyah: 111, surahName: "الأنعام" },
    { id: 9, name: "قال الملأ", arabic: "قال الملأ", startSurahId: 7, startAyah: 88, surahName: "الأعراف" },
    { id: 10, name: "واعلموا", arabic: "واعلموا", startSurahId: 8, startAyah: 41, surahName: "الأنفال" },
    { id: 11, name: "يعتذرون", arabic: "يعتذرون", startSurahId: 9, startAyah: 93, surahName: "التوبة" },
    { id: 12, name: "وما من دابة", arabic: "وما من دابة", startSurahId: 11, startAyah: 6, surahName: "هود" },
    { id: 13, name: "وما أبرئ", arabic: "وما أبرئ", startSurahId: 12, startAyah: 53, surahName: "يوسف" },
    { id: 14, name: "ربما", arabic: "ربما", startSurahId: 15, startAyah: 1, surahName: "الحجر" },
    { id: 15, name: "سبحان الذي", arabic: "سبحان الذي", startSurahId: 17, startAyah: 1, surahName: "الإسراء" },
    { id: 16, name: "قال ألم", arabic: "قال ألم", startSurahId: 18, startAyah: 75, surahName: "الكهف" },
    { id: 17, name: "اقترب", arabic: "اقترب", startSurahId: 21, startAyah: 1, surahName: "الأنبياء" },
    { id: 18, name: "قد أفلح", arabic: "قد أفلح", startSurahId: 23, startAyah: 1, surahName: "المؤمنون" },
    { id: 19, name: "وقال الذين", arabic: "وقال الذين", startSurahId: 25, startAyah: 21, surahName: "الفرقان" },
    { id: 20, name: "أمن خلق", arabic: "أمن خلق", startSurahId: 27, startAyah: 56, surahName: "النمل" },
    { id: 21, name: "اتل ما أوحي", arabic: "اتل ما أوحي", startSurahId: 29, startAyah: 46, surahName: "العنكبوت" },
    { id: 22, name: "ومن يقنت", arabic: "ومن يقنت", startSurahId: 33, startAyah: 31, surahName: "الأحزاب" },
    { id: 23, name: "وما لي", arabic: "وما لي", startSurahId: 36, startAyah: 28, surahName: "يس" },
    { id: 24, name: "فمن أظلم", arabic: "فمن أظلم", startSurahId: 39, startAyah: 32, surahName: "الزمر" },
    { id: 25, name: "إليه يرد", arabic: "إليه يرد", startSurahId: 41, startAyah: 47, surahName: "فصلت" },
    { id: 26, name: "حم", arabic: "حم", startSurahId: 46, startAyah: 1, surahName: "الأحقاف" },
    { id: 27, name: "قال فما خطبكم", arabic: "قال فما خطبكم", startSurahId: 51, startAyah: 31, surahName: "الذاريات" },
    { id: 28, name: "قد سمع الله", arabic: "قد سمع الله", startSurahId: 58, startAyah: 1, surahName: "المجادلة" },
    { id: 29, name: "تبارك الذي", arabic: "تبارك الذي", startSurahId: 67, startAyah: 1, surahName: "الملك" },
    { id: 30, name: "عم يتساءلون", arabic: "عم يتساءلون", startSurahId: 78, startAyah: 1, surahName: "النبأ" }
  ],
  allHizb: "جميع الأحزاب",
  searchHizbPlaceholder: "ابحث عن الحزب بالاسم أو الرقم أو سورة البداية...",
  totalHizbText: "تصفح واختر من بين جميع أحزاب القرآن الستين",
  noHizbFound: "لم يتم العثور على أي حزب يطابق بحثك.",
  hizbNumberLabel: "الحزب {number}",
  hizbItems: [
    { id: 1, name: "الم", arabic: "آلم", startSurahId: 1, startAyah: 1, surahName: "الفاتحة" },
    { id: 2, name: "أفتطمعون", arabic: "أفتطمعون", startSurahId: 2, startAyah: 75, surahName: "البقرة" },
    { id: 3, name: "سيقول", arabic: "سيقول", startSurahId: 2, startAyah: 142, surahName: "البقرة" },
    { id: 4, name: "واذكروا", arabic: "واذكروا", startSurahId: 2, startAyah: 203, surahName: "البقرة" },
    { id: 5, name: "تلك الرسل", arabic: "تلك الرسل", startSurahId: 2, startAyah: 253, surahName: "البقرة" },
    { id: 6, name: "قل أؤنبئكم", arabic: "قل أؤنبئكم", startSurahId: 3, startAyah: 15, surahName: "آل عمران" },
    { id: 7, name: "لن تنالوا", arabic: "لن تنالوا", startSurahId: 3, startAyah: 93, surahName: "آل عمران" },
    { id: 8, name: "يستبشرون", arabic: "يستبشرون", startSurahId: 3, startAyah: 171, surahName: "آل عمران" },
    { id: 9, name: "والمحصنات", arabic: "والمحصنات", startSurahId: 4, startAyah: 24, surahName: "النساء" },
    { id: 10, name: "فما لكم", arabic: "فما لكم", startSurahId: 4, startAyah: 88, surahName: "النساء" },
    { id: 11, name: "لا يحب الله", arabic: "لا يحب الله", startSurahId: 4, startAyah: 148, surahName: "النساء" },
    { id: 12, name: "واتل عليهم", arabic: "واتل عليهم", startSurahId: 5, startAyah: 27, surahName: "المائدة" },
    { id: 13, name: "وإذا سمعوا", arabic: "وإذا سمعوا", startSurahId: 5, startAyah: 82, surahName: "المائدة" },
    { id: 14, name: "إنما يستجيب", arabic: "إنما يستجيب", startSurahId: 6, startAyah: 36, surahName: "الأنعام" },
    { id: 15, name: "ولو أننا", arabic: "ولو أننا", startSurahId: 6, startAyah: 111, surahName: "الأنعام" },
    { id: 16, name: "وإذا صرفت", arabic: "وإذا صرفت", startSurahId: 7, startAyah: 47, surahName: "الأعراف" },
    { id: 17, name: "قال الملأ", arabic: "قال الملأ", startSurahId: 7, startAyah: 88, surahName: "الأعراف" },
    { id: 18, name: "وإذ نتقنا", arabic: "وإذ نتقنا", startSurahId: 7, startAyah: 171, surahName: "الأعراف" },
    { id: 19, name: "واعلموا", arabic: "واعلموا", startSurahId: 8, startAyah: 41, surahName: "الأنفال" },
    { id: 20, name: "يا أيها الذين آمنوا", arabic: "يا أيها الذين آمنوا", startSurahId: 9, startAyah: 34, surahName: "التوبة" },
    { id: 21, name: "يعتذرون", arabic: "يعتذرون", startSurahId: 9, startAyah: 93, surahName: "التوبة" },
    { id: 22, name: "للذين أحسنوا", arabic: "للذين أحسنوا", startSurahId: 10, startAyah: 26, surahName: "يونس" },
    { id: 23, name: "وما من دابة", arabic: "وما من دابة", startSurahId: 11, startAyah: 6, surahName: "هود" },
    { id: 24, name: "وإلى مدين", arabic: "وإلى مدين", startSurahId: 11, startAyah: 84, surahName: "هود" },
    { id: 25, name: "وما أبرئ", arabic: "وما أبرئ", startSurahId: 12, startAyah: 53, surahName: "يوسف" },
    { id: 26, name: "أفمن يعلم", arabic: "أفمن يعلم", startSurahId: 13, startAyah: 19, surahName: "الرعد" },
    { id: 27, name: "ربما", arabic: "ربما", startSurahId: 15, startAyah: 1, surahName: "الحجر" },
    { id: 28, name: "وقال الله", arabic: "وقال الله", startSurahId: 16, startAyah: 51, surahName: "النحل" },
    { id: 29, name: "سبحان الذي", arabic: "سبحان الذي", startSurahId: 17, startAyah: 1, surahName: "الإسراء" },
    { id: 30, name: "قال ألم", arabic: "قال ألم", startSurahId: 18, startAyah: 75, surahName: "الكهف" },
    { id: 31, name: "طه", arabic: "طه", startSurahId: 20, startAyah: 1, surahName: "طه" },
    { id: 32, name: "اقترب", arabic: "اقترب", startSurahId: 21, startAyah: 1, surahName: "الأنبياء" },
    { id: 33, name: "إن الله يدافع", arabic: "إن الله يدافع", startSurahId: 22, startAyah: 38, surahName: "الحج" },
    { id: 34, name: "قد أفلح", arabic: "قد أفلح", startSurahId: 23, startAyah: 1, surahName: "المؤمنون" },
    { id: 35, name: "يا أيها الذين آمنوا لا تتبعوا", arabic: "يا أيها الذين آمنوا لا تتبعوا", startSurahId: 24, startAyah: 21, surahName: "النور" },
    { id: 36, name: "وقال الذين", arabic: "وقال الذين", startSurahId: 25, startAyah: 21, surahName: "الفرقان" },
    { id: 37, name: "قالوا أنؤمن لك", arabic: "قالوا أنؤمن لك", startSurahId: 26, startAyah: 111, surahName: "الشعراء" },
    { id: 38, name: "أمن خلق", arabic: "أمن خلق", startSurahId: 27, startAyah: 56, surahName: "النمل" },
    { id: 39, name: "اتل ما أوحي", arabic: "اتل ما أوحي", startSurahId: 29, startAyah: 46, surahName: "العنكبوت" },
    { id: 40, name: "منيبين إليه", arabic: "منيبين إليه", startSurahId: 30, startAyah: 31, surahName: "الروم" },
    { id: 41, name: "ومن يقنت", arabic: "ومن يقنت", startSurahId: 33, startAyah: 31, surahName: "الأحزاب" },
    { id: 42, name: "ولقد آتينا داوود", arabic: "ولقد آتينا داوود", startSurahId: 34, startAyah: 10, surahName: "سبأ" },
    { id: 43, name: "وما لي", arabic: "وما لي", startSurahId: 36, startAyah: 28, surahName: "يس" },
    { id: 44, name: "فنَبَذناه بالعراء", arabic: "فنبذناه بالعراء", startSurahId: 37, startAyah: 145, surahName: "الصافات" },
    { id: 45, name: "فمن أظلم", arabic: "فمن أظلم", startSurahId: 39, startAyah: 32, surahName: "الزمر" },
    { id: 46, name: "ويا قوم ما لي", arabic: "ويا قوم ما لي", startSurahId: 40, startAyah: 41, surahName: "غافر" },
    { id: 47, name: "إليه يرد", arabic: "إليه يرد", startSurahId: 41, startAyah: 47, surahName: "فصلت" },
    { id: 48, name: "قل أولو جئتكم", arabic: "قل أولو جئتكم", startSurahId: 43, startAyah: 24, surahName: "الزخرف" },
    { id: 49, name: "حم", arabic: "حم", startSurahId: 46, startAyah: 1, surahName: "الأحقاف" },
    { id: 50, name: "لقد رضي الله", arabic: "لقد رضي الله", startSurahId: 48, startAyah: 18, surahName: "الفتح" },
    { id: 51, name: "قال فما خطبكم", arabic: "قال فما خطبكم", startSurahId: 51, startAyah: 31, surahName: "الذاريات" },
    { id: 52, name: "اقتربت الساعة", arabic: "اقتربت الساعة", startSurahId: 54, startAyah: 1, surahName: "القمر" },
    { id: 53, name: "قد سمع الله", arabic: "قد سمع الله", startSurahId: 58, startAyah: 1, surahName: "المجادلة" },
    { id: 54, name: "ألم تر إلى الذين", arabic: "ألم تر إلى الذين", startSurahId: 59, startAyah: 11, surahName: "الحشر" },
    { id: 55, name: "سبح لله", arabic: "سبح لله", startSurahId: 61, startAyah: 1, surahName: "الصف" },
    { id: 56, name: "يا أيها النبي", arabic: "يا أيها النبي", startSurahId: 65, startAyah: 1, surahName: "الطلاق" },
    { id: 57, name: "تبارك الذي", arabic: "تبارك الذي", startSurahId: 67, startAyah: 1, surahName: "الملك" },
    { id: 58, name: "قل أوحي إلي", arabic: "قل أوحي إلي", startSurahId: 72, startAyah: 1, surahName: "الجن" },
    { id: 59, name: "عم يتساءلون", arabic: "عم يتساءلون", startSurahId: 78, startAyah: 1, surahName: "النبأ" },
    { id: 60, name: "سبح اسم", arabic: "سبح اسم", startSurahId: 87, startAyah: 1, surahName: "الأعلى" }
  ],
  allManzil: "جميع المنازل",
  searchManzilPlaceholder: "ابحث عن المنزل بالاسم أو الرقم أو سورة البداية...",
  totalManzilText: "تصفح واختر من بين جميع منازل القرآن السبعة",
  noManzilFound: "لم يتم العثور على أي منزل يطابق بحثك.",
  manzilNumberLabel: "المنزل {number}",
  manzilItems: [
    { id: 1, name: "المنزل 1 (الفاتحة - النساء)", arabic: "المنزل ١", startSurahId: 1, startAyah: 1, surahName: "الفاتحة" },
    { id: 2, name: "المنزل 2 (المائدة - التوبة)", arabic: "المنزل ٢", startSurahId: 5, startAyah: 1, surahName: "المائدة" },
    { id: 3, name: "المنزل 3 (يونس - النحل)", arabic: "المنزل ٣", startSurahId: 10, startAyah: 1, surahName: "يونس" },
    { id: 4, name: "المنزل 4 (الإسراء - الفرقان)", arabic: "المنزل ٤", startSurahId: 17, startAyah: 1, surahName: "الإسراء" },
    { id: 5, name: "المنزل 5 (الشعراء - يس)", arabic: "المنزل ٥", startSurahId: 26, startAyah: 1, surahName: "الشعراء" },
    { id: 6, name: "المنزل 6 (الصافات - الحجرات)", arabic: "المنزل ٦", startSurahId: 37, startAyah: 1, surahName: "الصافات" },
    { id: 7, name: "المنزل 7 (ق - الناس)", arabic: "المنزل ٧", startSurahId: 50, startAyah: 1, surahName: "ق" }
  ],
  allRukus: "جميع الركوعات",
  searchRukuPlaceholder: "ابحث عن الركوع بالرقم أو اسم السورة...",
  totalRukuText: "تصفح واختر من بين جميع الركوعات القرآنية البالغ عددها 558",
  noRukuFound: "لم يتم العثور على ركوع يطابق بحثك.",
  rukuNumberLabel: "الركوع {number}",
  rukuLabel: "ركوع",
  rukuInSurah: "الركوع {rukuIndex} من سورة {surahName}",
  browseRukus: "تصفح الركوعات",
  rukusSub: "558 ركوع",
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
