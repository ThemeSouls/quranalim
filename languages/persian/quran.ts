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
  typeMedinan: "مدنی",
  gridView: "نمای شبکه‌ای",
  listView: "نمای فهرستی"
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
  allJuz: "همه جزءها",
  searchJuzPlaceholder: "جستجوی جزء بر اساس نام، شماره یا سوره شروع...",
  totalJuzText: "مرور و انتخاب از بین تمامی ۳۰ جزء قرآن کریم",
  noJuzFound: "هیچ جزئی مطابق با جستجوی شما یافت نشد.",
  juzNumberLabel: "جزء {number}",
  startingSurah: "سوره شروع",
  startingAyah: "آیه شروع",
  backToDashboard: "بازگشت به داشبورد",
  juzItems: [
    { id: 1, name: "الم", arabic: "آلم", startSurahId: 1, startAyah: 1, surahName: "الفاتحه" },
    { id: 2, name: "سیقول", arabic: "سيقول", startSurahId: 2, startAyah: 142, surahName: "البقره" },
    { id: 3, name: "تلک الرسل", arabic: "تلك الرسل", startSurahId: 2, startAyah: 253, surahName: "البقره" },
    { id: 4, name: "لن تنالوا", arabic: "لن تنالوا", startSurahId: 3, startAyah: 93, surahName: "آل عمران" },
    { id: 5, name: "والمحصنات", arabic: "والمحصنات", startSurahId: 4, startAyah: 24, surahName: "النساء" },
    { id: 6, name: "لا یحب الله", arabic: "لا يحب الله", startSurahId: 4, startAyah: 148, surahName: "النساء" },
    { id: 7, name: "وإذا سمعوا", arabic: "وإذا سمعوا", startSurahId: 5, startAyah: 82, surahName: "المائده" },
    { id: 8, name: "ولو أننا", arabic: "ولو أننا", startSurahId: 6, startAyah: 111, surahName: "الأنعام" },
    { id: 9, name: "قال الملأ", arabic: "قال الملأ", startSurahId: 7, startAyah: 88, surahName: "الأعراف" },
    { id: 10, name: "واعلموا", arabic: "واعلموا", startSurahId: 8, startAyah: 41, surahName: "الأنفال" },
    { id: 11, name: "یعتذرون", arabic: "يعتذرون", startSurahId: 9, startAyah: 93, surahName: "التوبه" },
    { id: 12, name: "وما من دابۃ", arabic: "وما من دابة", startSurahId: 11, startAyah: 6, surahName: "هود" },
    { id: 13, name: "وما أبرئ", arabic: "وما أبرئ", startSurahId: 12, startAyah: 53, surahName: "یوسف" },
    { id: 14, name: "ربما", arabic: "ربما", startSurahId: 15, startAyah: 1, surahName: "الحجر" },
    { id: 15, name: "سبحان الذی", arabic: "سبحان الذي", startSurahId: 17, startAyah: 1, surahName: "الإسراء" },
    { id: 16, name: "قال ألم", arabic: "قال ألم", startSurahId: 18, startAyah: 75, surahName: "الکهف" },
    { id: 17, name: "اقترب", arabic: "اقترب", startSurahId: 21, startAyah: 1, surahName: "الأنبیاء" },
    { id: 18, name: "قد أفلح", arabic: "قد أفلح", startSurahId: 23, startAyah: 1, surahName: "المؤمنون" },
    { id: 19, name: "وقال الذین", arabic: "وقال الذين", startSurahId: 25, startAyah: 21, surahName: "الفرقان" },
    { id: 20, name: "أمن خلق", arabic: "أمن خلق", startSurahId: 27, startAyah: 56, surahName: "النمل" },
    { id: 21, name: "اتل ما أوحی", arabic: "اتل ما أوحي", startSurahId: 29, startAyah: 46, surahName: "العنکبوت" },
    { id: 22, name: "ومن یقنت", arabic: "ومن يقنت", startSurahId: 33, startAyah: 31, surahName: "الأحزاب" },
    { id: 23, name: "وما لی", arabic: "وما لي", startSurahId: 36, startAyah: 28, surahName: "یس" },
    { id: 24, name: "فمن أظلم", arabic: "فمن أظلم", startSurahId: 39, startAyah: 32, surahName: "الزمر" },
    { id: 25, name: "إلیه يرد", arabic: "إليه يرد", startSurahId: 41, startAyah: 47, surahName: "فصلت" },
    { id: 26, name: "حم", arabic: "حم", startSurahId: 46, startAyah: 1, surahName: "الأحقاف" },
    { id: 27, name: "قال فما خطبکم", arabic: "قال فما خطبكم", startSurahId: 51, startAyah: 31, surahName: "الذاریات" },
    { id: 28, name: "قد سمع الله", arabic: "قد سمع الله", startSurahId: 58, startAyah: 1, surahName: "المجادلة" },
    { id: 29, name: "تبارک الذی", arabic: "تبارك الذي", startSurahId: 67, startAyah: 1, surahName: "الملک" },
    { id: 30, name: "عم يتساءلون", arabic: "عم يتساءلون", startSurahId: 78, startAyah: 1, surahName: "النبأ" }
  ],
  allHizb: "همه حزب‌ها",
  searchHizbPlaceholder: "جستجوی حزب بر اساس نام، شماره یا سوره شروع...",
  totalHizbText: "مرور و انتخاب از بین تمامی ۶۰ حزب قرآنی",
  noHizbFound: "هیچ حزبی مطابق با جستجوی شما یافت نشد.",
  hizbNumberLabel: "حزب {number}",
  hizbItems: [
    { id: 1, name: "الم", arabic: "آلم", startSurahId: 1, startAyah: 1, surahName: "الفاتحه" },
    { id: 2, name: "أفتطمعون", arabic: "أفتطمعون", startSurahId: 2, startAyah: 75, surahName: "البقره" },
    { id: 3, name: "سیقول", arabic: "سيقول", startSurahId: 2, startAyah: 142, surahName: "البقره" },
    { id: 4, name: "واذكروا", arabic: "واذكروا", startSurahId: 2, startAyah: 203, surahName: "البقره" },
    { id: 5, name: "تلک الرسل", arabic: "تلك الرسل", startSurahId: 2, startAyah: 253, surahName: "البقره" },
    { id: 6, name: "قل أؤنبئکم", arabic: "قل أؤنبئكم", startSurahId: 3, startAyah: 15, surahName: "آل عمران" },
    { id: 7, name: "لن تنالوا", arabic: "لن تنالوا", startSurahId: 3, startAyah: 93, surahName: "آل عمران" },
    { id: 8, name: "یستبشرون", arabic: "يستبشرون", startSurahId: 3, startAyah: 171, surahName: "آل عمران" },
    { id: 9, name: "والمحصنات", arabic: "والمحصنات", startSurahId: 4, startAyah: 24, surahName: "النساء" },
    { id: 10, name: "فما لکم", arabic: "فما لكم", startSurahId: 4, startAyah: 88, surahName: "النساء" },
    { id: 11, name: "لا یحب الله", arabic: "لا يحب الله", startSurahId: 4, startAyah: 148, surahName: "النساء" },
    { id: 12, name: "واتل علیهم", arabic: "واتل عليهم", startSurahId: 5, startAyah: 27, surahName: "المائده" },
    { id: 13, name: "وإذا سمعوا", arabic: "وإذا سمعوا", startSurahId: 5, startAyah: 82, surahName: "المائده" },
    { id: 14, name: "إنما يستجيب", arabic: "إنما يستجيب", startSurahId: 6, startAyah: 36, surahName: "الأنعام" },
    { id: 15, name: "ولو أننا", arabic: "ولو أننا", startSurahId: 6, startAyah: 111, surahName: "الأنعام" },
    { id: 16, name: "وإذا صرفت", arabic: "وإذا صرفت", startSurahId: 7, startAyah: 47, surahName: "الأعراف" },
    { id: 17, name: "قال الملأ", arabic: "قال الملأ", startSurahId: 7, startAyah: 88, surahName: "الأعراف" },
    { id: 18, name: "وإذ نتقنا", arabic: "وإذ نتقنا", startSurahId: 7, startAyah: 171, surahName: "الأعراف" },
    { id: 19, name: "واعلموا", arabic: "واعلموا", startSurahId: 8, startAyah: 41, surahName: "الأنفال" },
    { id: 20, name: "یا أیها الذین آمنوا", arabic: "يا أيها الذين آمنوا", startSurahId: 9, startAyah: 34, surahName: "التوبه" },
    { id: 21, name: "یعتذرون", arabic: "يعتذرون", startSurahId: 9, startAyah: 93, surahName: "التوبه" },
    { id: 22, name: "للذین أحسنوا", arabic: "للذين أحسنوا", startSurahId: 10, startAyah: 26, surahName: "یونس" },
    { id: 23, name: "وما من دابۃ", arabic: "وما من دابة", startSurahId: 11, startAyah: 6, surahName: "هود" },
    { id: 24, name: "وإلى مدين", arabic: "وإلى مدين", startSurahId: 11, startAyah: 84, surahName: "هود" },
    { id: 25, name: "وما أبرئ", arabic: "وما أبرئ", startSurahId: 12, startAyah: 53, surahName: "یوسف" },
    { id: 26, name: "أفمن يعلم", arabic: "أفمن يعلم", startSurahId: 13, startAyah: 19, surahName: "الرعد" },
    { id: 27, name: "ربما", arabic: "ربما", startSurahId: 15, startAyah: 1, surahName: "الحجر" },
    { id: 28, name: "وقال الله", arabic: "وقال الله", startSurahId: 16, startAyah: 51, surahName: "النحل" },
    { id: 29, name: "سبحان الذی", arabic: "سبحان الذي", startSurahId: 17, startAyah: 1, surahName: "الإسراء" },
    { id: 30, name: "قال ألم", arabic: "قال ألم", startSurahId: 18, startAyah: 75, surahName: "الکهف" },
    { id: 31, name: "طه", arabic: "طه", startSurahId: 20, startAyah: 1, surahName: "طه" },
    { id: 32, name: "اقترب", arabic: "اقترب", startSurahId: 21, startAyah: 1, surahName: "الأنبیاء" },
    { id: 33, name: "إن الله يدافع", arabic: "إن الله يدافع", startSurahId: 22, startAyah: 38, surahName: "الحج" },
    { id: 34, name: "قد أفلح", arabic: "قد أفلح", startSurahId: 23, startAyah: 1, surahName: "المؤمنون" },
    { id: 35, name: "یا أیها الذین آمنوا لا تتبعوا", arabic: "يا أيها الذين آمنوا لا تتبعوا", startSurahId: 24, startAyah: 21, surahName: "النور" },
    { id: 36, name: "وقال الذین", arabic: "وقال الذين", startSurahId: 25, startAyah: 21, surahName: "الفرقان" },
    { id: 37, name: "قالوا أنؤمن لک", arabic: "قالوا أنؤمن لك", startSurahId: 26, startAyah: 111, surahName: "الشعراء" },
    { id: 38, name: "أمن خلق", arabic: "أمن خلق", startSurahId: 27, startAyah: 56, surahName: "النمل" },
    { id: 39, name: "اتل ما أوحی", arabic: "اتل ما أوحي", startSurahId: 29, startAyah: 46, surahName: "العنکبوت" },
    { id: 40, name: "منیببین إلیه", arabic: "منيبين إليه", startSurahId: 30, startAyah: 31, surahName: "الروم" },
    { id: 41, name: "ومن یقنت", arabic: "ومن يقنت", startSurahId: 33, startAyah: 31, surahName: "الأحزاب" },
    { id: 42, name: "ولقد آتینا داوود", arabic: "ولقد آتينا داوود", startSurahId: 34, startAyah: 10, surahName: "سبأ" },
    { id: 43, name: "وما لی", arabic: "وما لی", startSurahId: 36, startAyah: 28, surahName: "یس" },
    { id: 44, name: "فنبذناه بالعراء", arabic: "فنبذناه بالعراء", startSurahId: 37, startAyah: 145, surahName: "الصافات" },
    { id: 45, name: "فمن أظلم", arabic: "فمن أظلم", startSurahId: 39, startAyah: 32, surahName: "الزمر" },
    { id: 46, name: "ویا قوم ما لی", arabic: "ويا قوم ما لي", startSurahId: 40, startAyah: 41, surahName: "غافر" },
    { id: 47, name: "إلیه يرد", arabic: "إليه يرد", startSurahId: 41, startAyah: 47, surahName: "فصلت" },
    { id: 48, name: "قل أولو جئتکم", arabic: "قل أولو جئتكم", startSurahId: 43, startAyah: 24, surahName: "الزخرف" },
    { id: 49, name: "حم", arabic: "حم", startSurahId: 46, startAyah: 1, surahName: "الأحقاف" },
    { id: 50, name: "لقد رضی الله", arabic: "لقد رضي الله", startSurahId: 48, startAyah: 18, surahName: "الفتح" },
    { id: 51, name: "قال فما خطبکم", arabic: "قال فما خطبكم", startSurahId: 51, startAyah: 31, surahName: "الذاریات" },
    { id: 52, name: "اقتربت الساعة", arabic: "اقتربت الساعة", startSurahId: 54, startAyah: 1, surahName: "القمر" },
    { id: 53, name: "قد سمع الله", arabic: "قد سمع الله", startSurahId: 58, startAyah: 1, surahName: "المجادلة" },
    { id: 54, name: "ألم تر إلى الذين", arabic: "ألم تر إلى الذين", startSurahId: 59, startAyah: 11, surahName: "الحشر" },
    { id: 55, name: "سبح لله", arabic: "سبح لله", startSurahId: 61, startAyah: 1, surahName: "الصف" },
    { id: 56, name: "یا أیها النبی", arabic: "يا أيها النبي", startSurahId: 65, startAyah: 1, surahName: "الطلاق" },
    { id: 57, name: "تبارک الذی", arabic: "تبارك الذي", startSurahId: 67, startAyah: 1, surahName: "الملک" },
    { id: 58, name: "قل أوحی إلی", arabic: "قل أوحي إلي", startSurahId: 72, startAyah: 1, surahName: "الجن" },
    { id: 59, name: "عم يتساءلون", arabic: "عم يتساءلون", startSurahId: 78, startAyah: 1, surahName: "النبأ" },
    { id: 60, name: "سبح اسم", arabic: "سبح اسم", startSurahId: 87, startAyah: 1, surahName: "الأعْلَى" }
  ],
  allManzil: "همه منزل‌ها",
  searchManzilPlaceholder: "جستجوی منزل بر اساس نام، شماره یا سوره شروع...",
  totalManzilText: "مرور و انتخاب از بین تمامی ۷ منزل قرآنی",
  noManzilFound: "هیچ منزلی مطابق با جستجوی شما یافت نشد.",
  manzilNumberLabel: "منزل {number}",
  manzilItems: [
    { id: 1, name: "منزل ۱ (فاتحه - نساء)", arabic: "المنزل ١", startSurahId: 1, startAyah: 1, surahName: "الفاتحه" },
    { id: 2, name: "منزل ۲ (مائده - توبه)", arabic: "المنزل ٢", startSurahId: 5, startAyah: 1, surahName: "المائده" },
    { id: 3, name: "منزل ۳ (یونس - نحل)", arabic: "المنزل ٣", startSurahId: 10, startAyah: 1, surahName: "یونس" },
    { id: 4, name: "منزل ۴ (اسراء - فرقان)", arabic: "المنزل ٤", startSurahId: 17, startAyah: 1, surahName: "الإسراء" },
    { id: 5, name: "منزل ۵ (شعراء - یس)", arabic: "المنزل ٥", startSurahId: 26, startAyah: 1, surahName: "الشعراء" },
    { id: 6, name: "منزل ۶ (صافات - حجرات)", arabic: "المنزل ٦", startSurahId: 37, startAyah: 1, surahName: "الصافات" },
    { id: 7, name: "منزل ۷ (ق - ناس)", arabic: "المنزل ٧", startSurahId: 50, startAyah: 1, surahName: "ق" }
  ],
  allRukus: "همه رکوع‌ها",
  searchRukuPlaceholder: "جستجوی رکوع بر اساس شماره یا نام سوره...",
  totalRukuText: "مرور و انتخاب از بین تمامی ۵۵۸ رکوع قرآنی",
  noRukuFound: "هیچ رکوعی مطابق با جستجوی شما یافت نشد.",
  rukuNumberLabel: "رکوع {number}",
  rukuLabel: "رکوع",
  rukuInSurah: "رکوع {rukuIndex} از سوره {surahName}",
  browseRukus: "مرور رکوع‌ها",
  rukusSub: "۵۵۸ رکوع",
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
