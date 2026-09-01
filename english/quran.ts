export const allSurahsPage = {
  allSurahs: "All Surahs",
  backToReader: "Back to Reader",
  searchSurahsPlaceholder: "Search Surahs...",
  totalSurahsText: "Browse and select from all 114 Quranic chapters",
  noSurahsFound: "No Surahs match your query.",
  verses: "Verses",
  rukus: "Rukus",
  juz: "Juz",
  typeMeccan: "Meccan",
  typeMedinan: "Medinan",
  gridView: "Grid View",
  listView: "List View"
};

export const mainPage = {
  readingView: "Surahs",
  quranKareem: "Al-Quran Al-Kareem",
  welcomeSub: "Welcome, Your Portal for Divine Wisdom",
  browseSurahs: "Browse Surahs",
  verseOfTheDay: "Verse of the Day",
  lastRead: "Last Read",
  resumeReading: "Resume Reading",
  recitedFrequently: "Recited Frequently",
  tasbihCounter: "Tasbih Counter",
  changeDhikr: "Change Dhikr",
  tapToIncrease: "Tap on the circle to increase count",
  dhikrList: [
    { arabic: "سُبْحَانَ ٱللَّٰهِ", english: "SubhanAllah", meaning: "Glory be to Allah" },
    { arabic: "ٱلْحَمْدُ لِلهِ", english: "Alhamdulillah", meaning: "Praise be to Allah" },
    { arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ", english: "La ilaha illallah", meaning: "There is no deity but Allah" },
    { arabic: "ٱللَّٰهُ أَكْبَرُ", english: "Allahu Akbar", meaning: "Allah is the Greatest" },
    { arabic: "أَسْتَغْفِرُ ٱللَّٰهَ", english: "Astaghfirullah", meaning: "I seek forgiveness from Allah" }
  ],
  dailyVerses: [
    {
      text: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
      translationEn: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
      reference: "Al-Baqarah (2:152)"
    },
    {
      text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translationEn: "Indeed, with hardship [will be] ease.",
      reference: "Ash-Sharh (94:6)"
    },
    {
      text: "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
      translationEn: "If you are grateful, I will surely increase you [in favor].",
      reference: "Ibrahim (14:7)"
    },
    {
      text: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
      translationEn: "And when My servants ask you, [O Muhammad], concerning Me - indeed I am near.",
      reference: "Al-Baqarah (2:186)"
    }
  ]
};

export const quranApp = {
  title: "Quran App Layout"
};

export const useQuranAudio = {
  audioErrorAlert: "An issue occurred while playing audio. Please check your internet connection."
};

export const useQuranBookmarks = {
  title: "Bookmarks Tracker"
};

export const useQuranVerses = {
  apiLoadError: "Failed to load Surah. Please check your internet connection.",
  apiFormatError: "Invalid translation data format received from api.",
  offlineEnglish: "Offline Mode: Cached English translation loaded.",
  internetRequiredEnglish: "Internet connection required: This Surah translation needs active network access.",
  translatorsMap: {
    "ur.maududi": "Abul Ala Maududi",
    "ur.jalandhry": "Fateh Muhammad Jalandhri",
    "ur.junagarhi": "Muhammad Junagarhi",
    "ur.khan": "Ahmad Raza Khan",
    "en.sahih": "Sahih International",
    "en.yusufali": "Yusuf Ali",
    "en.pickthall": "Pickthall"
  }
};

export const settingsModal = {
  readingSettings: "Reading Settings",
  arabicSize: "Arabic Size",
  translationSize: "Translation Size",
  previewArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  previewTranslation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
  close: "Close"
};

export const sidebar = {
  surahList: "Surah List",
  search: "Search",
  searchSurah: "Search surah name or number...",
  noSurahsFound: "No Surahs match your query.",
  bookmarks: "Bookmarks",
  noBookmarks: "No Bookmarks Saved Yet",
  ayahNo: "Ayah No: ",
  load: " (Load)"
};

export const surahHeaderCard = {
  previousSurah: "Previous Surah",
  nextSurah: "Next Surah",
  pauseRecitation: "Pause Recitation",
  reciteSurah: "Recite Surah",
  fontResize: "Font Resize",
  selectTranslator: "Select Translator",
  search: "Search",
  searchVerse: "Search in this Surah (e.g. 'Allah' or verse number)...",
  foundVerses: "Found {count} verses",
  foundVerse: "Found {count} verse"
};

export const surahNavigation = {
  previousSurahLabel: "Previous Surah",
  nextSurahLabel: "Next Surah",
  currentSurahLabel: "Current Surah",
  verses: "Verses"
};

export const translatorModal = {
  selectTranslator: "Select Translator",
  subtitle: "Compare multiple translations side-by-side",
  done: "Done",
  translators: [
    {
      id: "en.sahih",
      name: "Sahih International",
      desc: "Standard, highly academic and widely read modern translation"
    },
    {
      id: "en.yusufali",
      name: "Yusuf Ali",
      desc: "Classic translation with extensive poetic and spiritual commentary"
    },
    {
      id: "en.pickthall",
      name: "Marmaduke Pickthall",
      desc: "Elegant, traditional English translation by a noted scholar"
    }
  ]
};

export const verseCard = {
  reciter: "Recite",
  reciteThisAyah: "Recite This Ayah",
  pauseRecitation: "Pause Recitation",
  bookmarkAyah: "Bookmark Ayah"
};

export const view = {
  title: "Quran Reader Workspace"
};

export const mutarjumMainPage = {
  loading: "Loading...",
  loadingMoreVerses: "Loading more verses...",
  backBtn: "Back",
  noResults: "No results found"
};

export const quran = {
  surahList: "Surah List",
  surahShort: "Surah List",
  searchSurah: "Search surah name or number...",
  searchVerse: "Search in this Surah (e.g. 'Allah' or verse number)...",
  verses: "Verses",
  rukus: "Rukus",
  juz: "Juz",
  typeMeccan: "Meccan",
  typeMedinan: "Medinan",
  reciter: "Recite",
  offlineMode: "Offline Mode: Some translators are not cached. Basic translation loaded.",
  internetIssue: "Internet Issue: Internet is required to fetch this Surah or translation.",
  noSurahsFound: "No Surahs match your query.",
  pauseRecitation: "Pause Recitation",
  reciteSurah: "Recite Surah",
  loadingMoreVerses: "Loading more verses...",
  ayahNo: "Ayah No: ",
  load: " (Load)",
  allSurahs: "All Surahs",
  searchSurahsPlaceholder: "Search Surahs...",
  backToReader: "Back to Reader",
  previousSurah: "Previous Surah",
  nextSurah: "Next Surah",
  currentSurah: "Current Surah",
  hideSidebar: "Hide Sidebar",
  showSidebar: "Show Sidebar",
  selectFont: "Select Font",
  changeFontSize: "Change Font Size",
  changeFontFamily: "Change Font Family",
  surahLabel: "Surah",
  surahNumberText: "Surah {number}",
  juzLabel: "Juz",
  rukusLabel: "Rukus",
  versesLabel: "Verses",
  typeMeccanLabel: "Meccan",
  typeMedinanLabel: "Medinan",
  foundVersesText: "Found {count} verses",
  foundVerseText: "Found {count} verse",
  surahs: "Surahs",
  allJuz: "All Juz",
  searchJuzPlaceholder: "Search Juz by name, number or starting surah...",
  totalJuzText: "Browse and select from all 30 Quranic Juz (Parts)",
  noJuzFound: "No Juz matches your search.",
  juzNumberLabel: "Juz {number}",
  startingSurah: "Starting Surah",
  startingAyah: "Starting Ayah",
  backToDashboard: "Back to Dashboard",
  juzItems: [
    { id: 1, name: "Alif Lam Meem", arabic: "آلم", startSurahId: 1, startAyah: 1, surahName: "Al-Fatihah" },
    { id: 2, name: "Sayaqool", arabic: "سيقول", startSurahId: 2, startAyah: 142, surahName: "Al-Baqarah" },
    { id: 3, name: "Tilka al-Rusul", arabic: "تلك الرسل", startSurahId: 2, startAyah: 253, surahName: "Al-Baqarah" },
    { id: 4, name: "Lan Tanalu", arabic: "لن تنالوا", startSurahId: 3, startAyah: 93, surahName: "Al-Imran" },
    { id: 5, name: "Wal-Muhsanat", arabic: "والمحصنات", startSurahId: 4, startAyah: 24, surahName: "An-Nisa" },
    { id: 6, name: "La Yuhibbu-Allah", arabic: "لا يحب الله", startSurahId: 4, startAyah: 148, surahName: "An-Nisa" },
    { id: 7, name: "Wa-Iza Sami'oo", arabic: "وإذا سمعوا", startSurahId: 5, startAyah: 82, surahName: "Al-Ma'idah" },
    { id: 8, name: "Wa-Law Annana", arabic: "ولو أننا", startSurahId: 6, startAyah: 111, surahName: "Al-An'am" },
    { id: 9, name: "Qal al-Mala'u", arabic: "قال الملأ", startSurahId: 7, startAyah: 88, surahName: "Al-A'raf" },
    { id: 10, name: "Wa-A'lamoo", arabic: "واعلموا", startSurahId: 8, startAyah: 41, surahName: "Al-Anfal" },
    { id: 11, name: "Ya'taziroon", arabic: "يعتذرون", startSurahId: 9, startAyah: 93, surahName: "At-Tawbah" },
    { id: 12, name: "Wa-Ma Min Dabbatin", arabic: "وما من دابة", startSurahId: 11, startAyah: 6, surahName: "Hud" },
    { id: 13, name: "Wa-Ma Ubarri'u", arabic: "وما أبرئ", startSurahId: 12, startAyah: 53, surahName: "Yusuf" },
    { id: 14, name: "Rubama", arabic: "ربما", startSurahId: 15, startAyah: 1, surahName: "Al-Hijr" },
    { id: 15, name: "Subhana-Allazi", arabic: "سبحان الذي", startSurahId: 17, startAyah: 1, surahName: "Al-Isra" },
    { id: 16, name: "Qal Alam", arabic: "قال ألم", startSurahId: 18, startAyah: 75, surahName: "Al-Kahf" },
    { id: 17, name: "Iqtaraba", arabic: "اقترب", startSurahId: 21, startAyah: 1, surahName: "Al-Anbiya" },
    { id: 18, name: "Qad Aflaha", arabic: "قد أفلح", startSurahId: 23, startAyah: 1, surahName: "Al-Mu'minun" },
    { id: 19, name: "Wa-Qal allazina", arabic: "وقال الذين", startSurahId: 25, startAyah: 21, surahName: "Al-Furqan" },
    { id: 20, name: "Amman Khalaqa", arabic: "أمن خلق", startSurahId: 27, startAyah: 56, surahName: "An-Naml" },
    { id: 21, name: "Utlu Ma Oohiya", arabic: "اتل ما أوحي", startSurahId: 29, startAyah: 46, surahName: "Al-Ankabut" },
    { id: 22, name: "Wa-man Yaqnut", arabic: "ومن يقنت", startSurahId: 33, startAyah: 31, surahName: "Al-Ahzab" },
    { id: 23, name: "Wa-Maliya", arabic: "وما لي", startSurahId: 36, startAyah: 28, surahName: "Ya-Sin" },
    { id: 24, name: "Faman Azlamu", arabic: "فمن أظلم", startSurahId: 39, startAyah: 32, surahName: "Az-Zumar" },
    { id: 25, name: "Ilayhi Yuraddu", arabic: "إليه يرد", startSurahId: 41, startAyah: 47, surahName: "Fussilat" },
    { id: 26, name: "Ha Meem", arabic: "حم", startSurahId: 46, startAyah: 1, surahName: "Al-Ahqaf" },
    { id: 27, name: "Qala Fama Khatbukum", arabic: "قال فما خطبكم", startSurahId: 51, startAyah: 31, surahName: "Az-Zariyat" },
    { id: 28, name: "Qad Sami'a-Allahu", arabic: "قد سمع الله", startSurahId: 58, startAyah: 1, surahName: "Al-Mujadilah" },
    { id: 29, name: "Tabaraka-Allazi", arabic: "تبارك الذي", startSurahId: 67, startAyah: 1, surahName: "Al-Mulk" },
    { id: 30, name: "Amma Yatasa'aloon", arabic: "عم يتساءلون", startSurahId: 78, startAyah: 1, surahName: "An-Naba" }
  ],
  allHizb: "All Hizb",
  searchHizbPlaceholder: "Search Hizb by name, number or starting surah...",
  totalHizbText: "Browse and select from all 60 Quranic Hizbs (Parts)",
  noHizbFound: "No Hizb matches your search.",
  hizbNumberLabel: "Hizb {number}",
  hizbItems: [
    { id: 1, name: "Alif Lam Meem", arabic: "آلم", startSurahId: 1, startAyah: 1, surahName: "Al-Fatihah" },
    { id: 2, name: "A-fa-tatma'oon", arabic: "أفتطمعون", startSurahId: 2, startAyah: 75, surahName: "Al-Baqarah" },
    { id: 3, name: "Sayaqool", arabic: "سيقول", startSurahId: 2, startAyah: 142, surahName: "Al-Baqarah" },
    { id: 4, name: "Wa-zkuroo", arabic: "واذكروا", startSurahId: 2, startAyah: 203, surahName: "Al-Baqarah" },
    { id: 5, name: "Tilka al-Rusul", arabic: "تلك الرسل", startSurahId: 2, startAyah: 253, surahName: "Al-Baqarah" },
    { id: 6, name: "Qul A-unabbi'ukum", arabic: "قل أؤنبئكم", startSurahId: 3, startAyah: 15, surahName: "Al-Imran" },
    { id: 7, name: "Lan Tanalu", arabic: "لن تنالوا", startSurahId: 3, startAyah: 93, surahName: "Al-Imran" },
    { id: 8, name: "Yastabshiroon", arabic: "يستبشرون", startSurahId: 3, startAyah: 171, surahName: "Al-Imran" },
    { id: 9, name: "Wal-Muhsanat", arabic: "والمحصنات", startSurahId: 4, startAyah: 24, surahName: "An-Nisa" },
    { id: 10, name: "Fa-ma Lakum", arabic: "فما لكم", startSurahId: 4, startAyah: 88, surahName: "An-Nisa" },
    { id: 11, name: "La Yuhibbu-Allah", arabic: "لا يحب الله", startSurahId: 4, startAyah: 148, surahName: "An-Nisa" },
    { id: 12, name: "Watlu Alayhim", arabic: "واتل عليهم", startSurahId: 5, startAyah: 27, surahName: "Al-Ma'idah" },
    { id: 13, name: "Wa-Iza Sami'oo", arabic: "وإذا سمعوا", startSurahId: 5, startAyah: 82, surahName: "Al-Ma'idah" },
    { id: 14, name: "Innama Yastajeeb", arabic: "إنما يستجيب", startSurahId: 6, startAyah: 36, surahName: "Al-An'am" },
    { id: 15, name: "Wa-Law Annana", arabic: "ولو أننا", startSurahId: 6, startAyah: 111, surahName: "Al-An'am" },
    { id: 16, name: "Wa-Iza Suringfat", arabic: "وإذا صرفت", startSurahId: 7, startAyah: 47, surahName: "Al-A'raf" },
    { id: 17, name: "Qal al-Mala'u", arabic: "قال الملأ", startSurahId: 7, startAyah: 88, surahName: "Al-A'raf" },
    { id: 18, name: "Wa-Izh Nataqna", arabic: "وإذ نتقنا", startSurahId: 7, startAyah: 171, surahName: "Al-A'raf" },
    { id: 19, name: "Wa-A'lamoo", arabic: "واعلموا", startSurahId: 8, startAyah: 41, surahName: "Al-Anfal" },
    { id: 20, name: "Ya-Ayyuhallazina Amanu", arabic: "يا أيها الذين آمنوا", startSurahId: 9, startAyah: 34, surahName: "At-Tawbah" },
    { id: 21, name: "Ya'taziroon", arabic: "يعتذرون", startSurahId: 9, startAyah: 93, surahName: "At-Tawbah" },
    { id: 22, name: "Lillazina Ahsanu", arabic: "للذين أحسنوا", startSurahId: 10, startAyah: 26, surahName: "Yunus" },
    { id: 23, name: "Wa-Ma Min Dabbatin", arabic: "وما من دابة", startSurahId: 11, startAyah: 6, surahName: "Hud" },
    { id: 24, name: "Wa-Ila Madyana", arabic: "وإلى مدين", startSurahId: 11, startAyah: 84, surahName: "Hud" },
    { id: 25, name: "Wa-Ma Ubarri'u", arabic: "وما أبرئ", startSurahId: 12, startAyah: 53, surahName: "Yusuf" },
    { id: 26, name: "A-fa-man Ya'lamu", arabic: "أفمن يعلم", startSurahId: 13, startAyah: 19, surahName: "Ar-Ra'd" },
    { id: 27, name: "Rubama", arabic: "ربما", startSurahId: 15, startAyah: 1, surahName: "Al-Hijr" },
    { id: 28, name: "Wa-Qala-Allahu", arabic: "وقال الله", startSurahId: 16, startAyah: 51, surahName: "An-Nahl" },
    { id: 29, name: "Subhana-Allazi", arabic: "سبحان الذي", startSurahId: 17, startAyah: 1, surahName: "Al-Isra" },
    { id: 30, name: "Qal Alam", arabic: "قال ألم", startSurahId: 18, startAyah: 75, surahName: "Al-Kahf" },
    { id: 31, name: "Ta-Ha", arabic: "طه", startSurahId: 20, startAyah: 1, surahName: "Ta-Ha" },
    { id: 32, name: "Iqtaraba", arabic: "اقترب", startSurahId: 21, startAyah: 1, surahName: "Al-Anbiya" },
    { id: 33, name: "Innallaha Yuda-fi'u", arabic: "إن الله يدافع", startSurahId: 22, startAyah: 38, surahName: "Al-Hajj" },
    { id: 34, name: "Qad Aflaha", arabic: "قد أفلح", startSurahId: 23, startAyah: 1, surahName: "Al-Mu'minun" },
    { id: 35, name: "Ya-Ayyuhallazina Amanu La Tattabi'oo", arabic: "يا أيها الذين آمنوا لا تتبعوا", startSurahId: 24, startAyah: 21, surahName: "An-Nur" },
    { id: 36, name: "Wa-Qal allazina", arabic: "وقال الذين", startSurahId: 25, startAyah: 21, surahName: "Al-Furqan" },
    { id: 37, name: "Qaloo Anoo'minu Laka", arabic: "قالوا أنؤمن لك", startSurahId: 26, startAyah: 111, surahName: "Ash-Shu'ara" },
    { id: 38, name: "Amman Khalaqa", arabic: "أمن خلق", startSurahId: 27, startAyah: 56, surahName: "An-Naml" },
    { id: 39, name: "Utlu Ma Oohiya", arabic: "اتل ما أوحي", startSurahId: 29, startAyah: 46, surahName: "Al-Ankabut" },
    { id: 40, name: "Muneebina Ilayhi", arabic: "منيبين إليه", startSurahId: 30, startAyah: 31, surahName: "Ar-Rum" },
    { id: 41, name: "Wa-man Yaqnut", arabic: "ومن يقنت", startSurahId: 33, startAyah: 31, surahName: "Al-Ahzab" },
    { id: 42, name: "Wa-Laqad Atayna Dawooda", arabic: "ولقد آتينا داوود", startSurahId: 34, startAyah: 10, surahName: "Saba" },
    { id: 43, name: "Wa-Maliya", arabic: "وما لي", startSurahId: 36, startAyah: 28, surahName: "Ya-Sin" },
    { id: 44, name: "Fa-nabaznahu Bil-Arae", arabic: "فنبذناه بالعراء", startSurahId: 37, startAyah: 145, surahName: "As-Saffat" },
    { id: 45, name: "Faman Azlamu", arabic: "فمن أظلم", startSurahId: 39, startAyah: 32, surahName: "Az-Zumar" },
    { id: 46, name: "Wa-Ya-Qawmi Mali", arabic: "ويا قوم ما لي", startSurahId: 40, startAyah: 41, surahName: "Ghafir" },
    { id: 47, name: "Ilayhi Yuraddu", arabic: "إليه يرد", startSurahId: 41, startAyah: 47, surahName: "Fussilat" },
    { id: 48, name: "Qul A-walo Jin'tukum", arabic: "قل أولو جئتكم", startSurahId: 43, startAyah: 24, surahName: "Az-Zukhruf" },
    { id: 49, name: "Ha Meem", arabic: "حم", startSurahId: 46, startAyah: 1, surahName: "Al-Ahqaf" },
    { id: 50, name: "Laqad Raziya-Allahu", arabic: "لقد رضي الله", startSurahId: 48, startAyah: 18, surahName: "Al-Fath" },
    { id: 51, name: "Qala Fama Khatbukum", arabic: "قال فما خطبكم", startSurahId: 51, startAyah: 31, surahName: "Az-Zariyat" },
    { id: 52, name: "Iqtarabati-Sa'atu", arabic: "اقتربت الساعة", startSurahId: 54, startAyah: 1, surahName: "Al-Qamar" },
    { id: 53, name: "Qad Sami'a-Allahu", arabic: "قد سمع الله", startSurahId: 58, startAyah: 1, surahName: "Al-Mujadilah" },
    { id: 54, name: "Alam Tara Ilallazina", arabic: "ألم تر إلى الذين", startSurahId: 59, startAyah: 11, surahName: "Al-Hashr" },
    { id: 55, name: "Sabbaha Lillahi", arabic: "سبح لله", startSurahId: 61, startAyah: 1, surahName: "As-Saff" },
    { id: 56, name: "Ya-Ayyuhan-Nabiyyu", arabic: "يا أيها النبي", startSurahId: 65, startAyah: 1, surahName: "At-Talaq" },
    { id: 57, name: "Tabaraka-Allazi", arabic: "تبارك الذي", startSurahId: 67, startAyah: 1, surahName: "Al-Mulk" },
    { id: 58, name: "Qul Oo-hiya Ilayya", arabic: "قل أوحي إلي", startSurahId: 72, startAyah: 1, surahName: "Al-Jinn" },
    { id: 59, name: "Amma Yatasa'aloon", arabic: "عم يتساءلون", startSurahId: 78, startAyah: 1, surahName: "An-Naba" },
    { id: 60, name: "Sabbih-Isma", arabic: "سبح اسم", startSurahId: 87, startAyah: 1, surahName: "Al-A'la" }
  ],
  allManzil: "All Manzil",
  searchManzilPlaceholder: "Search Manzil by name, number or starting surah...",
  totalManzilText: "Browse and select from all 7 Quranic Manzils",
  noManzilFound: "No Manzil matches your search.",
  manzilNumberLabel: "Manzil {number}",
  manzilItems: [
    { id: 1, name: "Manzil 1 (Fatihah - Nisa)", arabic: "المنزل ١", startSurahId: 1, startAyah: 1, surahName: "Al-Fatihah" },
    { id: 2, name: "Manzil 2 (Ma'idah - Tawbah)", arabic: "المنزل ٢", startSurahId: 5, startAyah: 1, surahName: "Al-Ma'idah" },
    { id: 3, name: "Manzil 3 (Yunus - Nahl)", arabic: "المنزل ٣", startSurahId: 10, startAyah: 1, surahName: "Yunus" },
    { id: 4, name: "Manzil 4 (Isra - Furqan)", arabic: "المنزل ٤", startSurahId: 17, startAyah: 1, surahName: "Al-Isra" },
    { id: 5, name: "Manzil 5 (Shu'ara - Ya-Sin)", arabic: "المنزل ٥", startSurahId: 26, startAyah: 1, surahName: "Ash-Shu'ara" },
    { id: 6, name: "Manzil 6 (Saffat - Hujurat)", arabic: "المنزل ٦", startSurahId: 37, startAyah: 1, surahName: "As-Saffat" },
    { id: 7, name: "Manzil 7 (Qaf - Nas)", arabic: "المنزل ٧", startSurahId: 50, startAyah: 1, surahName: "Qaf" }
  ],
  allRukus: "All Rukus",
  searchRukuPlaceholder: "Search Ruku by number or surah name...",
  totalRukuText: "Browse and select from all 558 Quranic Rukus",
  noRukuFound: "No Ruku matches your search.",
  rukuNumberLabel: "Ruku {number}",
  rukuLabel: "Ruku",
  rukuInSurah: "Ruku {rukuIndex} of {surahName}",
  browseRukus: "Browse Rukus",
  rukusSub: "558 Rukus",
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
