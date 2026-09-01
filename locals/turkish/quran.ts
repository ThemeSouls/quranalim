export const allSurahsPage = {
  allSurahs: "Tüm Sureler",
  backToReader: "Okuyucuya Dön",
  searchSurahsPlaceholder: "Sure Ara...",
  totalSurahsText: "114 Kur'an suresinin tamamına göz atın ve seçin",
  noSurahsFound: "Aramanızla eşleşen sure bulunamadı.",
  verses: "Ayet",
  rukus: "Rüku",
  juz: "Cüz",
  typeMeccan: "Mekki",
  typeMedinan: "Medeni",
  gridView: "Izgara Görünümü",
  listView: "Liste Görünümü"
};

export const mainPage = {
  readingView: "Sureler",
  quranKareem: "el-Kur'anü'l-Kerim",
  welcomeSub: "Hoş Geldiniz, İlahi Hikmet ve İlim Portalınız",
  browseSurahs: "Surelere Göz At",
  verseOfTheDay: "Günün Ayeti",
  lastRead: "Son Okunan",
  resumeReading: "Okumaya Devam Et",
  recitedFrequently: "Sık Okunan Sureler",
  tasbihCounter: "Tesbih Sayacı",
  changeDhikr: "Zikri Değiştir",
  tapToIncrease: "Sayıyı artırmak için daireye dokunun",
  dhikrList: [
    { arabic: "سُبْحَانَ ٱللَّٰهِ", english: "Sübhanallah", meaning: "Allah her türlü eksiklikten münezzehtir" },
    { arabic: "ٱلْحَمْدُ لِلهِ", english: "Elhamdülillah", meaning: "Hamd Allah'a mahsustur" },
    { arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ", english: "Lâ ilâhe illallâh", meaning: "Allah'tan başka ilah yoktur" },
    { arabic: "ٱللَّٰهُ أَكْبَرُ", english: "Allahu Ekber", meaning: "Allah en büyüktür" },
    { arabic: "أَسْتَغْفِرُ ٱللَّٰهَ", english: "Estağfirullah", meaning: "Allah'tan bağışlanma dilerim" }
  ],
  dailyVerses: [
    {
      text: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
      translationEn: "Öyleyse siz beni anın ki ben de sizi anayım. Bana şükredin ve nankörlük etmeyin.",
      reference: "el-Bakara (2:152)"
    },
    {
      text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translationEn: "Şüphesiz her zorlukla beraber bir kolaylık vardır.",
      reference: "el-İnşirah (94:6)"
    },
    {
      text: "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
      translationEn: "Andolsun, eğer şükrederseniz elbette size (nimetimi) artırırım.",
      reference: "İbrahim (14:7)"
    },
    {
      text: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
      translationEn: "Kullarım sana beni sorduklarında bilsinler ki şüphesiz ben onlara çok yakınım.",
      reference: "el-Bakara (2:186)"
    }
  ]
};

export const quranApp = {
  title: "Kur'an Uygulaması Düzeni"
};

export const useQuranAudio = {
  audioErrorAlert: "Ses çalınırken bir sorun oluştu. Lütfen internet bağlantınızı kontrol edin."
};

export const useQuranBookmarks = {
  title: "Yer İmleri Takipçisi"
};

export const useQuranVerses = {
  apiLoadError: "Sure yüklenemedi. Lütfen internet bağlantınızı kontrol edin.",
  apiFormatError: "API'den geçersiz meal verisi formatı alındı.",
  offlineEnglish: "Çevrimdışı Mod: Önbelleğe alınmış meal yüklendi.",
  internetRequiredEnglish: "İnternet bağlantısı gerekli: Bu sure meali aktif ağ erişimi gerektirir.",
  translatorsMap: {
    "ur.maududi": "Ebu'l-A'lâ el-Mevdûdî",
    "ur.jalandhry": "Fetih Muhammed Câlendherî",
    "ur.junagarhi": "Muhammed Cûnegadî",
    "ur.khan": "Ahmed Rıza Han",
    "en.sahih": "Sahih International",
    "en.yusufali": "Yusuf Ali",
    "en.pickthall": "Pickthall"
  }
};

export const settingsModal = {
  readingSettings: "Okuma Ayarları",
  arabicSize: "Arapça Boyutu",
  translationSize: "Meal Boyutu",
  previewArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  previewTranslation: "Rahmân ve Rahîm olan Allah'ın adıyla.",
  close: "Kapat"
};

export const sidebar = {
  surahList: "Sure Listesi",
  search: "Ara",
  searchSurah: "Sure adı veya numarası ara...",
  noSurahsFound: "Aramanızla eşleşen sure bulunamadı.",
  bookmarks: "Yer İmleri",
  noBookmarks: "Henüz Kayıtlı Yer İmi Yok",
  ayahNo: "Ayet No: ",
  load: " (Yükle)"
};

export const surahHeaderCard = {
  previousSurah: "Önceki Sure",
  nextSurah: "Sonraki Sure",
  pauseRecitation: "Tilaveti Duraklat",
  reciteSurah: "Sureyi Dinle",
  fontResize: "Yazı Boyutu",
  selectTranslator: "Mütercim Seç",
  search: "Ara",
  searchVerse: "Bu surede ara (ör. 'Allah' veya ayet numarası)...",
  foundVerses: "{count} ayet bulundu",
  foundVerse: "{count} ayet bulundu"
};

export const surahNavigation = {
  previousSurahLabel: "Önceki Sure",
  nextSurahLabel: "Sonraki Sure",
  currentSurahLabel: "Mevcut Sure",
  verses: "Ayet"
};

export const translatorModal = {
  selectTranslator: "Mütercim Seç",
  subtitle: "Birden fazla meali yan yana karşılaştırın",
  done: "Tamamlandı",
  translators: [
    {
      id: "en.sahih",
      name: "Sahih International",
      desc: "Standart, akademik ve yaygın okunan modern meal"
    },
    {
      id: "en.yusufali",
      name: "Yusuf Ali",
      desc: "Kapsamlı edebi ve manevi açıklamalar içeren klasik meal"
    },
    {
      id: "en.pickthall",
      name: "Marmaduke Pickthall",
      desc: "Muteber bir alim tarafından hazırlanmış zarif İngilizce meal"
    }
  ]
};

export const verseCard = {
  reciter: "Dinle",
  reciteThisAyah: "Bu Ayeti Dinle",
  pauseRecitation: "Tilaveti Duraklat",
  bookmarkAyah: "Ayeti Yer İmlerine Ekle"
};

export const view = {
  title: "Kur'an Okuma Çalışma Alanı"
};

export const mutarjumMainPage = {
  loading: "Yükleniyor...",
  loadingMoreVerses: "Daha fazla ayet yükleniyor...",
  backBtn: "Geri",
  noResults: "Sonuç bulunamadı"
};

export const quran = {
  surahList: "Sure Listesi",
  surahShort: "Sure Listesi",
  searchSurah: "Sure adı veya numarası ara...",
  searchVerse: "Bu surede ara (ör. 'Allah' veya ayet numarası)...",
  verses: "Ayet",
  rukus: "Rüku",
  juz: "Cüz",
  typeMeccan: "Mekki",
  typeMedinan: "Medeni",
  reciter: "Dinle",
  offlineMode: "Çevrimdışı Mod: Bazı mealler önbellekte yok. Temel meal yüklendi.",
  internetIssue: "İnternet Sorunu: Bu sureyi veya meali almak için internet gereklidir.",
  noSurahsFound: "Aramanızla eşleşen sure bulunamadı.",
  pauseRecitation: "Tilaveti Duraklat",
  reciteSurah: "Sureyi Dinle",
  loadingMoreVerses: "Daha fazla ayet yükleniyor...",
  ayahNo: "Ayet No: ",
  load: " (Yükle)",
  allSurahs: "Tüm Sureler",
  searchSurahsPlaceholder: "Sure Ara...",
  backToReader: "Okuyucuya Dön",
  previousSurah: "Önceki Sure",
  nextSurah: "Sonraki Sure",
  currentSurah: "Mevcut Sure",
  hideSidebar: "Kenar Çubuğunu Gizle",
  showSidebar: "Kenar Çubuğunu Göster",
  selectFont: "Yazı Tipi Seç",
  changeFontSize: "Yazı Boyutunu Değiştir",
  changeFontFamily: "Yazı Tipi Ailesini Değiştir",
  surahLabel: "Sure",
  surahNumberText: "Sure {number}",
  juzLabel: "Cüz",
  rukusLabel: "Rüku",
  versesLabel: "Ayet",
  typeMeccanLabel: "Mekki",
  typeMedinanLabel: "Medeni",
  foundVersesText: "{count} ayet bulundu",
  foundVerseText: "{count} ayet bulundu",
  surahs: "Sureler",
  allJuz: "Tüm Cüzler",
  searchJuzPlaceholder: "Cüz adına, numarasına veya başlayan sureye göre ara...",
  totalJuzText: "30 Kur'an Cüzünün tamamına göz atın ve seçin",
  noJuzFound: "Aramanızla eşleşen cüz bulunamadı.",
  juzNumberLabel: "Cüz {number}",
  startingSurah: "Başlangıç Suresi",
  startingAyah: "Başlangıç Ayeti",
  backToDashboard: "Panele Dön",
  juzItems: [
    { id: 1, name: "Elif Lam Mim", arabic: "آلم", startSurahId: 1, startAyah: 1, surahName: "el-Fatiha" },
    { id: 2, name: "Seyekûl", arabic: "سيقول", startSurahId: 2, startAyah: 142, surahName: "el-Bakara" },
    { id: 3, name: "Tilke'r-Rusul", arabic: "تلك الرسل", startSurahId: 2, startAyah: 253, surahName: "el-Bakara" },
    { id: 4, name: "Len Tenâlû", arabic: "لن تنالوا", startSurahId: 3, startAyah: 93, surahName: "Âl-i İmrân" },
    { id: 5, name: "Ve'l-Muhsanât", arabic: "والمحصنات", startSurahId: 4, startAyah: 24, surahName: "en-Nisâ" },
    { id: 6, name: "Lâ Yuhıbbu'llâh", arabic: "لا يحب الله", startSurahId: 4, startAyah: 148, surahName: "en-Nisâ" },
    { id: 7, name: "Ve İzâ Semiu", arabic: "وإذا سمعوا", startSurahId: 5, startAyah: 82, surahName: "el-Mâide" },
    { id: 8, name: "Ve Lev Ennenâ", arabic: "ولو أننا", startSurahId: 6, startAyah: 111, surahName: "el-En'âm" },
    { id: 9, name: "Kâle'l-Meleu", arabic: "قال الملأ", startSurahId: 7, startAyah: 88, surahName: "el-A'râf" },
    { id: 10, name: "Va'lemû", arabic: "واعلموا", startSurahId: 8, startAyah: 41, surahName: "el-Enfâl" },
    { id: 11, name: "Ya'tezirûne", arabic: "يعتذرون", startSurahId: 9, startAyah: 93, surahName: "et-Tevbe" },
    { id: 12, name: "Ve Mâ Min Dâbbetin", arabic: "وما من دابة", startSurahId: 11, startAyah: 6, surahName: "Hûd" },
    { id: 13, name: "Ve Mâ Überri'u", arabic: "وما أبرئ", startSurahId: 12, startAyah: 53, surahName: "Yûsuf" },
    { id: 14, name: "Rubemâ", arabic: "ربما", startSurahId: 15, startAyah: 1, surahName: "el-Hicr" },
    { id: 15, name: "Subhânellezî", arabic: "سبحان الذي", startSurahId: 17, startAyah: 1, surahName: "el-İsrâ" },
    { id: 16, name: "Kâle Elem", arabic: "قال ألم", startSurahId: 18, startAyah: 75, surahName: "el-Kehf" },
    { id: 17, name: "İkterabe", arabic: "اقترب", startSurahId: 21, startAyah: 1, surahName: "el-Enbiyâ" },
    { id: 18, name: "Kad Efleha", arabic: "قد أفلح", startSurahId: 23, startAyah: 1, surahName: "el-Mü'minûn" },
    { id: 19, name: "Ve Kâlellezîne", arabic: "وقال الذين", startSurahId: 25, startAyah: 21, surahName: "el-Furkân" },
    { id: 20, name: "Emmen Haleka", arabic: "أمن خلق", startSurahId: 27, startAyah: 56, surahName: "en-Neml" },
    { id: 21, name: "Ütlü Mâ Ûhıye", arabic: "اتل ما أوحي", startSurahId: 29, startAyah: 46, surahName: "el-Ankebût" },
    { id: 22, name: "Ve Men Yaknut", arabic: "ومن يقنت", startSurahId: 33, startAyah: 31, surahName: "el-Ahzâb" },
    { id: 23, name: "Ve Mâ Liye", arabic: "وما لي", startSurahId: 36, startAyah: 28, surahName: "Yâsîn" },
    { id: 24, name: "Fe-men Azlemu", arabic: "فمن أظلم", startSurahId: 39, startAyah: 32, surahName: "ez-Zümer" },
    { id: 25, name: "İleyhi Yüraddü", arabic: "إليه يرد", startSurahId: 41, startAyah: 47, surahName: "Fussilet" },
    { id: 26, name: "Hâ Mîm", arabic: "حم", startSurahId: 46, startAyah: 1, surahName: "el-Ahkâf" },
    { id: 27, name: "Kâle Fe-mâ Hatbukum", arabic: "قال فما خطبكم", startSurahId: 51, startAyah: 31, surahName: "ez-Zâriyât" },
    { id: 28, name: "Kad Semiallahu", arabic: "قد سمع الله", startSurahId: 58, startAyah: 1, surahName: "el-Mücâdele" },
    { id: 29, name: "Tebârekellezî", arabic: "تبارك الذي", startSurahId: 67, startAyah: 1, surahName: "el-Mülk" },
    { id: 30, name: "Amme Yetesâelûn", arabic: "عم يتساءلون", startSurahId: 78, startAyah: 1, surahName: "en-Nebe" }
  ],
  allHizb: "Tüm Hizbler",
  searchHizbPlaceholder: "Hizb adına, numarasına veya başlayan sureye göre ara...",
  totalHizbText: "60 Kur'an Hizbinin tamamına göz atın ve seçin",
  noHizbFound: "Aramanızla eşleşen hizb bulunamadı.",
  hizbNumberLabel: "Hizb {number}",
  hizbItems: [
    { id: 1, name: "Elif Lam Mim", arabic: "آلم", startSurahId: 1, startAyah: 1, surahName: "el-Fatiha" },
    { id: 2, name: "E-fe-tetme'ûn", arabic: "أفتطمعون", startSurahId: 2, startAyah: 75, surahName: "el-Bakara" },
    { id: 3, name: "Seyekûl", arabic: "سيقول", startSurahId: 2, startAyah: 142, surahName: "el-Bakara" },
    { id: 4, name: "Vezkurû", arabic: "واذكروا", startSurahId: 2, startAyah: 203, surahName: "el-Bakara" },
    { id: 5, name: "Tilke'r-Rusul", arabic: "تلك الرسل", startSurahId: 2, startAyah: 253, surahName: "el-Bakara" },
    { id: 6, name: "Kul E-ünebbiüküm", arabic: "قل أؤنبئكم", startSurahId: 3, startAyah: 15, surahName: "Âl-i İmrân" },
    { id: 7, name: "Len Tenâlû", arabic: "لن تنالوا", startSurahId: 3, startAyah: 93, surahName: "Âl-i İmrân" },
    { id: 8, name: "Yestebşirûn", arabic: "يستبشرون", startSurahId: 3, startAyah: 171, surahName: "Âl-i İmrân" },
    { id: 9, name: "Ve'l-Muhsanât", arabic: "والمحصنات", startSurahId: 4, startAyah: 24, surahName: "en-Nisâ" },
    { id: 10, name: "Fe-mâ Leküm", arabic: "فما لكم", startSurahId: 4, startAyah: 88, surahName: "en-Nisâ" },
    { id: 11, name: "Lâ Yuhıbbu'llâh", arabic: "لا يحب الله", startSurahId: 4, startAyah: 148, surahName: "en-Nisâ" },
    { id: 12, name: "Vetlü Aleyhim", arabic: "واتل عليهم", startSurahId: 5, startAyah: 27, surahName: "el-Mâide" },
    { id: 13, name: "Ve İzâ Semiu", arabic: "وإذا سمعوا", startSurahId: 5, startAyah: 82, surahName: "el-Mâide" },
    { id: 14, name: "İnnemâ Yestecîb", arabic: "إنما يستجيب", startSurahId: 6, startAyah: 36, surahName: "el-En'âm" },
    { id: 15, name: "Ve Lev Ennenâ", arabic: "ولو أننا", startSurahId: 6, startAyah: 111, surahName: "el-En'âm" },
    { id: 16, name: "Ve İzâ Surifet", arabic: "وإذا صرفت", startSurahId: 7, startAyah: 47, surahName: "el-A'râf" },
    { id: 17, name: "Kâle'l-Meleu", arabic: "قال الملأ", startSurahId: 7, startAyah: 88, surahName: "el-A'râf" },
    { id: 18, name: "Ve İz Netaknâ", arabic: "وإذ نتقنا", startSurahId: 7, startAyah: 171, surahName: "el-A'râf" },
    { id: 19, name: "Va'lemû", arabic: "واعلموا", startSurahId: 8, startAyah: 41, surahName: "el-Enfâl" },
    { id: 20, name: "Yâ Eyyühellezîne Âmenû", arabic: "يا أيها الذين آمنوا", startSurahId: 9, startAyah: 34, surahName: "et-Tevbe" },
    { id: 21, name: "Ya'tezirûne", arabic: "يعتذرون", startSurahId: 9, startAyah: 93, surahName: "et-Tevbe" },
    { id: 22, name: "Lillezîne Ahsenû", arabic: "للذين أحسنوا", startSurahId: 10, startAyah: 26, surahName: "Yûnus" },
    { id: 23, name: "Ve Mâ Min Dâbbetin", arabic: "وما من دابة", startSurahId: 11, startAyah: 6, surahName: "Hûd" },
    { id: 24, name: "Ve İlâ Medyene", arabic: "وإلى مدين", startSurahId: 11, startAyah: 84, surahName: "Hûd" },
    { id: 25, name: "Ve Mâ Überri'u", arabic: "وما أبرئ", startSurahId: 12, startAyah: 53, surahName: "Yûsuf" },
    { id: 26, name: "E-fe-men Ya'lemü", arabic: "أفمن يعلم", startSurahId: 13, startAyah: 19, surahName: "er-Ra'd" },
    { id: 27, name: "Rubemâ", arabic: "ربما", startSurahId: 15, startAyah: 1, surahName: "el-Hicr" },
    { id: 28, name: "Ve Kâlellâhu", arabic: "وقال الله", startSurahId: 16, startAyah: 51, surahName: "en-Nahl" },
    { id: 29, name: "Subhânellezî", arabic: "سبحان الذي", startSurahId: 17, startAyah: 1, surahName: "el-İsrâ" },
    { id: 30, name: "Kâle Elem", arabic: "قال ألم", startSurahId: 18, startAyah: 75, surahName: "el-Kehf" },
    { id: 31, name: "Tâ-Hâ", arabic: "طه", startSurahId: 20, startAyah: 1, surahName: "Tâhâ" },
    { id: 32, name: "İkterabe", arabic: "اقترب", startSurahId: 21, startAyah: 1, surahName: "el-Enbiyâ" },
    { id: 33, name: "İnnallâhe Yüdâfiu", arabic: "إن الله يدافع", startSurahId: 22, startAyah: 38, surahName: "el-Hac" },
    { id: 34, name: "Kad Efleha", arabic: "قد أفلح", startSurahId: 23, startAyah: 1, surahName: "el-Mü'minûn" },
    { id: 35, name: "Yâ Eyyühellezîne Âmenû Lâ Tettebiû", arabic: "يا أيها الذين آمنوا لا تتبعوا", startSurahId: 24, startAyah: 21, surahName: "en-Nûr" },
    { id: 36, name: "Ve Kâlellezîne", arabic: "وقال الذين", startSurahId: 25, startAyah: 21, surahName: "el-Furkân" },
    { id: 37, name: "Kâlû E-nü'minü Leke", arabic: "قالوا أنؤمن لك", startSurahId: 26, startAyah: 111, surahName: "eş-Şuarâ" },
    { id: 38, name: "Emmen Haleka", arabic: "أمن خلق", startSurahId: 27, startAyah: 56, surahName: "en-Neml" },
    { id: 39, name: "Ütlü Mâ Ûhıye", arabic: "اتل ما أوحي", startSurahId: 29, startAyah: 46, surahName: "el-Ankebût" },
    { id: 40, name: "Münîbîne İleyhi", arabic: "منيبين إليه", startSurahId: 30, startAyah: 31, surahName: "er-Rûm" },
    { id: 41, name: "Ve Men Yaknut", arabic: "ومن يقنت", startSurahId: 33, startAyah: 31, surahName: "el-Ahzâb" },
    { id: 42, name: "Ve Lekad Âteynâ Dâvûde", arabic: "ولقد آتينا داوود", startSurahId: 34, startAyah: 10, surahName: "Sebe'" },
    { id: 43, name: "Ve Mâ Liye", arabic: "وما لي", startSurahId: 36, startAyah: 28, surahName: "Yâsîn" },
    { id: 44, name: "Fe-nebeznâhü Bi'l-Arâi", arabic: "فنبذناه بالعراء", startSurahId: 37, startAyah: 145, surahName: "es-Sâffât" },
    { id: 45, name: "Fe-men Azlemu", arabic: "فمن أظلم", startSurahId: 39, startAyah: 32, surahName: "ez-Zümer" },
    { id: 46, name: "Ve Yâ Kavmi Mâ Lî", arabic: "ويا قوم ما لي", startSurahId: 40, startAyah: 41, surahName: "Mü'min (Gâfir)" },
    { id: 47, name: "İleyhi Yüraddü", arabic: "إليه يرد", startSurahId: 41, startAyah: 47, surahName: "Fussilet" },
    { id: 48, name: "Kul E-ve Lev Ci'tüküm", arabic: "قل أولو جئتكم", startSurahId: 43, startAyah: 24, surahName: "ez-Zuhruf" },
    { id: 49, name: "Hâ Mîm", arabic: "حم", startSurahId: 46, startAyah: 1, surahName: "el-Ahkâf" },
    { id: 50, name: "Lekad Radiyallâhu", arabic: "لقد رضي الله", startSurahId: 48, startAyah: 18, surahName: "el-Fetih" },
    { id: 51, name: "Kâle Fe-mâ Hatbukum", arabic: "قال فما خطبكم", startSurahId: 51, startAyah: 31, surahName: "ez-Zâriyât" },
    { id: 52, name: "İkterabeti's-Sâatü", arabic: "اقتربت الساعة", startSurahId: 54, startAyah: 1, surahName: "el-Kamer" },
    { id: 53, name: "Kad Semiallahu", arabic: "قد سمع الله", startSurahId: 58, startAyah: 1, surahName: "el-Mücâdele" },
    { id: 54, name: "Elem Tera İlellezîne", arabic: "ألم تر إلى الذين", startSurahId: 59, startAyah: 11, surahName: "el-Haşr" },
    { id: 55, name: "Sebbeha Lillâhi", arabic: "سبح لله", startSurahId: 61, startAyah: 1, surahName: "es-Saf" },
    { id: 56, name: "Yâ Eyyühe'n-Nebiyyu", arabic: "يا أيها النبي", startSurahId: 65, startAyah: 1, surahName: "et-Talâk" },
    { id: 57, name: "Tebârekellezî", arabic: "تبارك الذي", startSurahId: 67, startAyah: 1, surahName: "el-Mülk" },
    { id: 58, name: "Kul Ûhıye İleyye", arabic: "قل أوحي إلي", startSurahId: 72, startAyah: 1, surahName: "el-Cin" },
    { id: 59, name: "Amme Yetesâelûn", arabic: "عم يتساءلون", startSurahId: 78, startAyah: 1, surahName: "en-Nebe" },
    { id: 60, name: "Sebbihısme", arabic: "سبح اسم", startSurahId: 87, startAyah: 1, surahName: "el-A'lâ" }
  ],
  allManzil: "Tüm Menziller",
  searchManzilPlaceholder: "Menzil adına, numarasına veya başlayan sureye göre ara...",
  totalManzilText: "7 Kur'an Menzilinin tamamına göz atın ve seçin",
  noManzilFound: "Aramanızla eşleşen menzil bulunamadı.",
  manzilNumberLabel: "Menzil {number}",
  manzilItems: [
    { id: 1, name: "Menzil 1 (Fâtiha - Nisâ)", arabic: "المنزل ١", startSurahId: 1, startAyah: 1, surahName: "el-Fatiha" },
    { id: 2, name: "Menzil 2 (Mâide - Tevbe)", arabic: "المنزل ٢", startSurahId: 5, startAyah: 1, surahName: "el-Mâide" },
    { id: 3, name: "Menzil 3 (Yûnus - Nahl)", arabic: "المنزل ٣", startSurahId: 10, startAyah: 1, surahName: "Yûnus" },
    { id: 4, name: "Menzil 4 (İsrâ - Furkân)", arabic: "المنزل ٤", startSurahId: 17, startAyah: 1, surahName: "el-İsrâ" },
    { id: 5, name: "Menzil 5 (Şuarâ - Yâsîn)", arabic: "المنزل ٥", startSurahId: 26, startAyah: 1, surahName: "eş-Şuarâ" },
    { id: 6, name: "Menzil 6 (Sâffât - Hucurât)", arabic: "المنزل ٦", startSurahId: 37, startAyah: 1, surahName: "es-Sâffât" },
    { id: 7, name: "Menzil 7 (Kâf - Nâs)", arabic: "المنزل ٧", startSurahId: 50, startAyah: 1, surahName: "Kâf" }
  ],
  allRukus: "Tüm Rükular",
  searchRukuPlaceholder: "Numaraya veya sure adına göre rüku ara...",
  totalRukuText: "558 Kur'an Rükusunun tamamına göz atın ve seçin",
  noRukuFound: "Aramanızla eşleşen rüku bulunamadı.",
  rukuNumberLabel: "Rüku {number}",
  rukuLabel: "Rüku",
  rukuInSurah: "{surahName} Suresinin {rukuIndex}. Rükusu",
  browseRukus: "Rükulara Göz At",
  rukusSub: "558 Rüku",
};

export const quranTurkishTranslation拼 = {
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

export const quranTurkishTranslation = quranEnglishTranslation;
