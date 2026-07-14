export const userRolesData = {
  ar: {
    title: "أدوار المستخدمين (User Roles)",
    subtitle: "أدوار المستخدمين على منصتنا",
    introTitle: "قرآن عليم: نظام بيئي رقمي إسلامي شامل",
    introText: "الحمد لله! إن منصتنا ليست مجرد موقع إلكتروني، بل هي عالم رقمي إسلامي متكامل حيث يوجد لكل فرد ومؤسسة مكان ودور محدد. سواء كنت قارئاً عادياً، أو عالماً، أو مؤلفاً، أو مدرسة، أو داعية — فأنتم جميعاً مرحب بكم هنا!",
    categoriesIntro: "هناك 15 نوعاً مختلفاً من أدوار المستخدمين (User Roles) على منصتنا، مقسمة إلى ثلاث فئات رئيسية:",
    tableHeaderNum: "الرقم",
    tableHeaderRole: "الدور",
    tableHeaderDesc: "الوصف",
    categories: [
      {
        title: "🟢 الفئة الأولى: المستخدمون العامون (General Users)",
        subtitle: "هذه هي الأدوار الأساسية المتاحة لكل زائر:",
        roles: [
          { num: "1", role: "👤 ضيف / مستخدم عام (Guest)", desc: "استمتع بتلاوة القرآن الكريم، والترجمة، والتفسير، والاستماع إلى الصوتيات دون الحاجة إلى حساب. هذه هي خطوتك الأولى!" },
          { num: "2", role: "📝 مستخدم مسجل (Registered User)", desc: "أنشئ حساباً مجانياً لحفظ الآيات كإشارات مرجعية، وكتابة ملاحظاتك الشخصية، ومتابعة تقدمك في القراءة، وحفظ إعداداتك المفضلة." }
        ]
      },
      {
        title: "🟡 الفئة الثانية: المبدعون والعلماء (Creators & Scholars)",
        subtitle: "هذه هي الأدوار الجليلة لمشاركة المعرفة مع العالم أجمع:",
        roles: [
          { num: "3", role: "✍️ مؤلف (Author)", desc: "هل ألفت كتاباً إسلامياً؟ ارفع كتبك، ومجلاتك، وأبحاثك العلمية من خلال هذا الدور لتصل إلى القراء في جميع أنحاء العالم." },
          { num: "4", role: "🎙️ قارئ (Reciter)", desc: "سجل تلاوتك العذبة للقرآن الكريم وارفعها على منصتنا. سيستمع المسلمون حول العالم إلى كلام الله بصوتك!" },
          { num: "5", role: "🌐 مترجم (Translator)", desc: "هل ترغب في ترجمة القرآن الكريم إلى أي لغة؟ يوفر لك هذا الدور واجهة ترجمة سهلة ومنظمة لنشر رسالة القرآن بمختلف اللغات العالمية." },
          { num: "6", role: "📚 عالم / مساهم (Scholar/Contributor)", desc: "أرسل تفاسيرك، وشروحاتك، وحواشيك العلمية للقرآن الكريم. سيتم نشر عملك الأكاديمي بعد مراجعته واعتماده من قبل خبرائنا." },
          { num: "7", role: "🏫 معلم / منشئ دورات (Instructor)", desc: "أنشئ دورات تعليمية عبر الإنترنت! علم الطلاب القرآن، أو الحديث، أو الفقه، أو اللغة العربية، أو أي مادة إسلامية أخرى من خلال دورات هادفة وتابع تقدمهم الدراسي." },
          { num: "8", role: "🎤 داعية / خطيب (Preacher)", desc: "هل أنت منخرط في مجالات الوعظ والإرشاد؟ ارفع التسجيلات الصوتية والمرئية لخطبك ومحاضراتك ودروسك. تتوفر أيضاً ميزة البث المباشر (Live Streaming)." }
        ]
      },
      {
        title: "🔵 الفئة الثالثة: المؤسسات والإدارة (Organizations & Management)",
        subtitle: "هذه هي الأدوار التي تحافظ على تنظيم المنصة، ومصداقيتها، وفاعليتها:",
        roles: [
          { num: "9", role: "🏛️ مؤسسة (Organization)", desc: "دور مخصص للمساجد، والمدارس، والجامعات، ودور النشر، والجمعيات الخيرية. سجل مؤسستك، واحصل على التوثيق، وقم بإدارة العديد من المعلمين والمشرفين لنشر موادك التعليمية والدعوية في مكان واحد." },
          { num: "10", role: "✅ مراجع لغوي / مصحح (Proofreader)", desc: "خبراء يضمنون صحة المحتوى العلمي والدعوي. تقوم بمراجعة التراجم والتفاسير والكتب، وتحديد الأخطاء، ومنح وسام 'تمت المراجعة والتصحيح'." },
          { num: "11", role: "🔬 باحث / محلل (Researcher)", desc: "أجرِ بحوثاً عميقة في القرآن الكريم والعلوم الإسلامية. تتوفر لك أدوات متقدمة للدراسة المقارنة، والبحث الموضوعي، وتصدير المراجع." },
          { num: "12", role: "🤝 متطوع (Volunteer)", desc: "ساعدنا في تحسين وتطوير المنصة! شارك في الإبلاغ عن الأخطاء، وتصنيف المحتوى، وإرشاد المجتمع." },
          { num: "13", role: "💰 داعم مالي / متبرع (Donor)", desc: "ادعم هذه المنصة العلمية المجانية مالياً. بفضل دعمك، ننشر رسالة القرآن الكريم في جميع أنحاء العالم دون إعلانات. يتم إضافة وسام 'حامي القرآن' الفخري إلى ملفك الشخصي." },
          { num: "14", role: "🛡️ مشرف (Moderator)", desc: "مسؤول عن اعتماد المحتوى، وإرشاد المستخدمين، والحفاظ على المعايير العلمية للمنصة. مشرفونا هم حراس الأمانة العلمية." },
          { num: "15", role: "👑 مدير النظام (Admin)", desc: "الإدارة الشاملة للمنصة. تحديد أدوار المستخدمين، وضبط إعدادات النظام، والإشراف على جميع الأمور التقنية والإدارية." }
        ]
      }
    ],
    promiseTitle: "✨ عهدنا",
    promiseText: "في منصة قرآن عليم، يُمنح كل دور الاحترام، والصلاحيات، والمسؤوليات بما يتناسب مع أهميته. هدفنا هو إنشاء نظام بيئي متكامل حيث:",
    promiseItems: [
      "🕌 يستطيع كل مسجد إيصال خطبه ومواعظه إلى العالم",
      "📖 يستطيع كل مؤلف إيصال كتابه إلى ملايين القراء",
      "🎓 يستطيع كل معلم تدريس آلاف الطلاب عبر الإنترنت",
      "🌍 يستطيع كل مترجم نقل رسالة القرآن الكريم إلى لغات جديدة",
      "❤️ يستطيع كل مسلم بناء علاقة وطيدة وعميقة مع القرآن الكريم"
    ],
    joinTitle: "🚀 انضم إلينا الآن!",
    joinText: "بغض النظر عن الفئة التي تنتمي إليها، هناك مكان مخصص لك في منصة قرآن عليم.",
    registerBtn: "سجل الآن",
    contactBtn: "اتصل بنا",
    quote: "وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ ۚ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
    quoteRef: "سورة آل عمران، الآية 104"
  },
  en: {
    title: "User Roles",
    subtitle: "Roles of users on our platform",
    introTitle: "Quran Alim: A Comprehensive Islamic Digital Ecosystem",
    introText: "Alhamdulillah! Our platform is not just a website, but a complete digital Islamic world where every individual and institution has a defined place and role. Whether you are a general reader, a scholar, an author, a madrasah, or a preacher — you are all welcome here!",
    categoriesIntro: "There are 15 different types of User Roles on our platform, which are divided into three major categories:",
    tableHeaderNum: "No.",
    tableHeaderRole: "Role",
    tableHeaderDesc: "Description",
    categories: [
      {
        title: "🟢 Category One: General Users",
        subtitle: "These are the basic roles available to every visitor:",
        roles: [
          { num: "1", role: "👤 Guest / General User", desc: "Access Quran recitation, translation, commentary, and audio without any account. This is your first step!" },
          { num: "2", role: "📝 Registered User", desc: "Create a free account to bookmark verses, write personal notes, track your reading progress, and save your favorite settings." }
        ]
      },
      {
        title: "🟡 Category Two: Creators & Scholars",
        subtitle: "These are the noble roles for sharing knowledge with the entire world:",
        roles: [
          { num: "3", role: "✍️ Author", desc: "Have you authored any Islamic book? Upload your books, journals, and research papers through this role and reach readers worldwide." },
          { num: "4", role: "🎙️ Reciter (Qari)", desc: "Record your beautiful Quran recitation and upload it to our platform. Muslims around the world will listen to the Holy Quran in your voice!" },
          { num: "5", role: "🌐 Translator", desc: "Do you want to translate the Holy Quran into any language? This role provides you with an easy and organized translation interface to spread the Quranic message in various languages." },
          { num: "6", role: "📚 Scholar/Contributor", desc: "Submit Quranic commentary, explanations, and scholarly footnotes. Your academic work will be published after verification by our experts." },
          { num: "7", role: "🏫 Instructor / Course Creator", desc: "Create online courses! Teach students Quran, Hadith, Fiqh, Arabic, or any Islamic subject through structured courses and monitor their progress." },
          { num: "8", role: "🎤 Preacher / Speaker", desc: "Are you involved in preaching or public lectures? Upload audio/video of your sermons, lectures, and lessons. Live streaming facility is also available." }
        ]
      },
      {
        title: "🔵 Category Three: Organizations & Management",
        subtitle: "These roles keep the platform organized, authentic, and active:",
        roles: [
          { num: "9", role: "🏛️ Organization", desc: "Specific role for mosques, madrasahs, universities, publishing houses, and welfare organizations. Register your organization, get verified, and manage multiple teachers and admins to publish your educational and dawah material in one place." },
          { num: "10", role: "✅ Proofreader", desc: "Experts who ensure the correctness of scholarly content. You review translations, commentaries, and books, identify errors, and award the 'Verified/Corrected' badge." },
          { num: "11", role: "🔬 Researcher", desc: "Perform deep research on Quran and Islamic sciences. Advanced tools for comparative study, thematic search, and exporting references are available for you." },
          { num: "12", role: "🤝 Volunteer", desc: "Help us improve the platform! Participate in reporting errors, content categorization, and community guidance." },
          { num: "13", role: "💰 Donor / Financial Supporter", desc: "Support this free scholarly platform financially. With your support, we spread the message of the Quran worldwide without advertisements. A 'Quran Supporter' honorary badge is added to your profile." },
          { num: "14", role: "🛡️ Moderator", desc: "Responsible for content approval, user guidance, and maintaining the platform's academic standards. Our moderators are the guardians of scholarly trustworthiness." },
          { num: "15", role: "👑 Admin", desc: "Overall administration of the platform. Manage user roles, system configurations, and oversee all technical and administrative matters." }
        ]
      }
    ],
    promiseTitle: "✨ Our Promise",
    promiseText: "On the Quran Alim platform, every role is given respect, authority, and responsibilities according to its importance. Our goal is to create an ecosystem where:",
    promiseItems: [
      "🕌 Every mosque can deliver its sermons to the world",
      "📖 Every author can reach millions of readers with their books",
      "🎓 Every teacher can teach thousands of students online",
      "🌍 Every translator can translate the Quranic message into new languages",
      "❤️ Every Muslim can establish a deep connection with the Holy Quran"
    ],
    joinTitle: "🚀 Join Us Now!",
    joinText: "No matter which category you fall into, there is a place for you in the Quran Alim platform.",
    registerBtn: "Register Now",
    contactBtn: "Contact Us",
    quote: "And let there be [arising] from you a nation inviting to [all that is] good, enjoining what is right and forbidding what is wrong, and those will be the successful.",
    quoteRef: "Surah Ali 'Imran, Ayah 104"
  }
};
