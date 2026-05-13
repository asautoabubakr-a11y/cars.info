const getLocalImagePaths = (folder, fileNames) => fileNames.map((fileName) => `${folder}/${fileName}`);
const carPlaceholderImage = "assets/placeholder.png";

const chevroletDabbabahEmptyImages = getLocalImagePaths("img/شيفورلية/دبابة/دبابة فاضية2026", [
  "20250619_145309.jpg",
  "20250619_145258.jpg",
  "20250619_145158.jpg",
  "20250619_145153.jpg",
  "20250619_145147.jpg",
  "20250619_145133.jpg",
  "20250619_145126.jpg",
  "20250619_145118.jpg",
  "20250619_145057.jpg",
  "20250619_145044.jpg",
  "20250619_144956.jpg",
  "20250619_144950.jpg",
  "20250619_144945.jpg",
  "20250619_144922.jpg",
  "20250619_144916.jpg",
  "20250619_144821.jpg",
  "20250619_144815.jpg",
  "20250619_144748.jpg",
  "20250619_144726.jpg",
  "20250619_144723.jpg",
  "20250619_144718.jpg",
  "20250619_144713.jpg",
  "20250513_193517.jpg",
  "20250513_193503.jpg",
  "20250513_193430.jpg",
  "20250513_193412.jpg",
  "20250513_193356.jpg",
  "20250513_193351.jpg",
  "20250513_193349.jpg",
  "20250513_193335.jpg",
  "20250513_193328.jpg",
  "20250513_193319.jpg",
  "20250513_193306.jpg",
  "20250513_193302.jpg",
  "20250513_193251.jpg",
  "20250513_193245.jpg"
]);

const chevroletDabbabahFullImages = getLocalImagePaths("img/شيفورلية/دبابة/دبابة 2026 كامله", [
  "20250622_223449.jpg",
  "20250622_223447.jpg",
  "20250622_223422.jpg",
  "20250622_223412.jpg",
  "20250622_223407.jpg",
  "20250622_223356.jpg",
  "20250622_223340.jpg",
  "20250622_223329.jpg",
  "20250622_223311.jpg",
  "20250622_223308.jpg",
  "20250622_223305.jpg",
  "20250622_223300.jpg",
  "20250622_223256.jpg",
  "20250622_223235.jpg",
  "20250622_223213.jpg",
  "20250622_223204.jpg",
  "20250622_223158.jpg",
  "20250622_223142.jpg",
  "20250622_223134.jpg",
  "20250622_223102.jpg",
  "20250622_223100.jpg",
  "20250622_223056.jpg",
  "20250622_223053.jpg",
  "20250622_223044.jpg",
  "20250622_223027.jpg",
  "20250622_223010.jpg",
  "20250622_223007.jpg",
  "20250622_223001.jpg",
  "20250622_222954.jpg",
  "20250622_222947.jpg",
  "20250622_222917.jpg",
  "20250622_222853.jpg",
  "20250622_222828.jpg"
]);

const cars = [
  {
    name: "شيفروليه ربع نقل TFR",
    category: "ربع نقل",
    price: null,
    image: chevroletDabbabahEmptyImages[0],
    specs: {
      "التوكيل": "منصور",
      "المنشأ": "ياباني - تجميع محلي",
      "الموتور": "2500 سي سي",
      "القوة": "79 حصان",
      "الفئات": "2 فئة",
      "الفئة الأولى": "باور - 2 إيرباج - ABS",
      "الفئة الكاملة": "تكييف - زجاج كهرباء - سنترلوك - مفتاح ريموت - فوج لايت - مقابض نيكل"
    }
  },
  {
    name: "دبابة شيفروليه فاضية ربع نقل",
    category: "ربع نقل",
    price: null,
    image: chevroletDabbabahEmptyImages[0],
    images: chevroletDabbabahEmptyImages,
    specs: {
      "التوكيل": "منصور",
      "الموديل": "2026",
      "الفئة": "فاضية",
      "النوع": "دبابة شيفروليه ربع نقل",
      "التجهيزات": "باور - 2 إيرباج - ABS"
    }
  },
  {
    name: "دبابة شيفروليه كاملة ربع نقل",
    category: "ربع نقل",
    price: null,
    image: chevroletDabbabahFullImages[0],
    images: chevroletDabbabahFullImages,
    specs: {
      "التوكيل": "منصور",
      "الموديل": "2026",
      "الفئة": "كاملة",
      "النوع": "دبابة شيفروليه ربع نقل",
      "التجهيزات": "تكييف - زجاج كهرباء - سنترلوك - ريموت - فوج لايت"
    }
  },
  {
    name: "شيفروليه جامبو 7000",
    category: "جامبو",
    price: null,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
    specs: {
      "المسمى": "أكتروس الحيطة",
      "الفئات": "2 فئة",
      "الفئة الأولى": "باور + زجاج كهرباء",
      "الفئة المكيفة": "بها تكييف",
      "الموتور": "4600 سي سي",
      "الطول": "5 متر"
    }
  },
  {
    name: "شيفروليه QMR 5200",
    category: "نصف نقل / ثلث / ثلثين",
    price: null,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
    specs: {
      "المسمى": "QMR",
      "الموتور": "2800 سي سي",
      "التجهيزات": "باور - زجاج كهرباء",
      "الطول": "4 متر"
    }
  },
  {
    name: "شيفروليه NQR 8000",
    category: "نصف نقل شاسيه طويل",
    price: null,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=900&q=80",
    specs: {
      "المسمى": "NQR",
      "الموتور": "4600 سي سي",
      "التجهيزات": "باور + زجاج كهرباء",
      "الطول": "6 متر"
    }
  },
  {
    name: "JMC ربع نقل",
    category: "ربع نقل",
    price: null,
    image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=900&q=80",
    specs: {
      "المسمى": "وحش الأسفلت",
      "المنشأ": "صيني - تجميع محلي",
      "الشركة": "TVD - غبور",
      "الضمان": "3 سنين أو 100 ألف كيلومتر",
      "الموتور": "2800 سي سي",
      "المواصفات الفنية": "باور - شاشة - تكييف - زجاج كهرباء - جنوط سبور"
    }
  },
  {
    name: "JMC Carrying نصف نقل جامبو",
    category: "نصف نقل جامبو",
    price: null,
    image: "https://images.unsplash.com/photo-1506306460327-3164753b74c7?auto=format&fit=crop&w=900&q=80",
    specs: {
      "المنشأ": "صيني - تجميع محلي",
      "الشركة": "TVD - غبور",
      "الضمان": "3 سنين أو 100 ألف كيلومتر",
      "الفئات": "2 فئة",
      "الفئة الأولى": "2.5 طن - عجل فردي خلفي",
      "الفئة الثانية": "4 طن - عجل دوبل خلفي"
    }
  },
  {
    name: "KYC نقل ركاب",
    category: "نقل ركاب",
    price: null,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التوكيل": "بودي جروب",
      "الموتور": "1500 سي سي",
      "التجهيزات": "باور - تكييف - زجاج كهرباء"
    }
  },
  {
    name: "KYC نقل بضائع",
    category: "نقل بضائع",
    price: null,
    image: "https://images.unsplash.com/photo-1605164599901-8b22f1035175?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التوكيل": "بودي جروب",
      "الفئة": "الفئة الثانية",
      "الموتور": "1500 سي سي",
      "التجهيزات": "باور - تكييف - زجاج كهرباء"
    }
  },
  {
    name: "جوي لونج A4 Baseline بنزين",
    category: "ميكروباص",
    price: 1249900,
    image: "assets/placeholder.png",
    specs: {
      "الموديل": "A4",
      "الفئة": "Baseline",
      "سنة الصنع": "2026",
      "المحرك": "2200CC - بنزين",
      "السعر الرسمي": "1,249,900 جنيه"
    }
  },
  {
    name: "جوي لونج A4 Highline بنزين",
    category: "ميكروباص",
    price: 1334900,
    image: "assets/placeholder.png",
    specs: {
      "الموديل": "A4",
      "الفئة": "Highline",
      "سنة الصنع": "2026",
      "المحرك": "2200CC - بنزين",
      "السعر الرسمي": "1,334,900 جنيه"
    }
  },
  {
    name: "جوي لونج A4 Baseline ديزل",
    category: "ميكروباص",
    price: 1479900,
    image: "assets/placeholder.png",
    specs: {
      "الموديل": "A4",
      "الفئة": "Baseline",
      "سنة الصنع": "2026",
      "المحرك": "2500CC تربو - ديزل",
      "السعر الرسمي": "1,479,900 جنيه"
    }
  },
  {
    name: "جوي لونج A4 Highline ديزل",
    category: "ميكروباص",
    price: 1539900,
    image: "assets/placeholder.png",
    specs: {
      "الموديل": "A4",
      "الفئة": "Highline",
      "سنة الصنع": "2026",
      "المحرك": "2500CC تربو - ديزل",
      "السعر الرسمي": "1,539,900 جنيه"
    }
  },
  {
    name: "جوي لونج A5 Highline بنزين",
    category: "ميكروباص",
    price: 1699900,
    image: "assets/placeholder.png",
    specs: {
      "الموديل": "A5",
      "الفئة": "Highline",
      "سنة الصنع": "2026",
      "المحرك": "2400CC - بنزين",
      "السعر الرسمي": "1,699,900 جنيه"
    }
  },
  {
    name: "جوي لونج A5 Topline ديزل 2500",
    category: "ميكروباص",
    price: 1859900,
    image: "assets/placeholder.png",
    specs: {
      "الموديل": "A5",
      "الفئة": "Topline",
      "سنة الصنع": "2026",
      "المحرك": "2500CC تربو - ديزل",
      "السعر الرسمي": "1,859,900 جنيه"
    }
  },
  {
    name: "جوي لونج A5 Baseline ديزل 3000",
    category: "ميكروباص",
    price: 1829900,
    image: "assets/placeholder.png",
    specs: {
      "الموديل": "A5",
      "الفئة": "Baseline",
      "سنة الصنع": "2026",
      "المحرك": "3000CC تربو - ديزل",
      "السعر الرسمي": "1,829,900 جنيه"
    }
  },
  {
    name: "جوي لونج A5 Topline ديزل 3000",
    category: "ميكروباص",
    price: 1929900,
    image: "assets/placeholder.png",
    specs: {
      "الموديل": "A5",
      "الفئة": "Topline",
      "سنة الصنع": "2026",
      "المحرك": "3000CC تربو - ديزل",
      "السعر الرسمي": "1,929,900 جنيه"
    }
  },
  {
    name: "جوي لونج A5 Topline ديزل 3000 إيرباج",
    category: "ميكروباص",
    price: 1959900,
    image: "assets/placeholder.png",
    specs: {
      "الموديل": "A5",
      "الفئة": "Topline",
      "سنة الصنع": "2026",
      "المحرك": "3000CC تربو - ديزل",
      "التجهيزات": "عدد 2 وسائد هوائية",
      "السعر الرسمي": "1,959,900 جنيه"
    }
  },
  {
    name: "جوي لونج EA5 Luxury Edition",
    category: "ميكروباص كهرباء",
    price: 2989900,
    image: "assets/placeholder.png",
    specs: {
      "الموديل": "EA5",
      "الفئة": "Luxury Edition",
      "سنة الصنع": "2026",
      "المحرك": "CCS2 - 102 KW",
      "السعر الرسمي": "2,989,900 جنيه"
    }
  },
  {
    name: "جوي لونج A6 Luxury Edition",
    category: "ميكروباص",
    price: 2499900,
    image: "assets/placeholder.png",
    specs: {
      "الموديل": "A6",
      "الفئة": "Luxury Edition",
      "سنة الصنع": "2026",
      "المحرك": "3000CC تربو - ديزل",
      "التجهيزات": "عدد 2 وسائد هوائية",
      "السعر الرسمي": "2,499,900 جنيه"
    }
  },
  {
    name: "نيسان نافارا شاسيه",
    category: "ربع نقل",
    price: null,
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التوكيل": "نيسان - أوتو إيجيبت",
      "الضمان": "3 سنوات أو 100 ألف كيلومتر",
      "المنشأ": "ياباني - تجميع جنوب أفريقيا",
      "الموتور": "2500 سي سي",
      "القوة": "161 حصان",
      "الفئة": "شاسيه",
      "التجهيزات": "باور - تكييف - زجاج كهرباء - 2 إيرباج - ABS"
    }
  },
  {
    name: "نيسان نافارا صندوق",
    category: "ربع نقل صندوق",
    price: null,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التوكيل": "نيسان - أوتو إيجيبت",
      "الضمان": "3 سنوات أو 100 ألف كيلومتر",
      "المنشأ": "ياباني - تجميع جنوب أفريقيا",
      "الموتور": "2500 سي سي",
      "القوة": "161 حصان",
      "الفئة": "صندوق (علب)",
      "التجهيزات": "باور - تكييف - زجاج كهرباء - 7 إيرباج - ABS"
    }
  },
  {
    name: "نيسان دوبل كابينة 4x4",
    category: "دوبل كابينة",
    price: null,
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التوكيل": "نيسان - أوتو إيجيبت",
      "الضمان": "3 سنوات أو 100 ألف كيلومتر",
      "المنشأ": "ياباني - تجميع جنوب أفريقيا",
      "القوة": "161 حصان",
      "الدفع": "4x4",
      "المواصفات": "باور - تكييف - زجاج كهرباء - 7 إيرباج - ABS - بصمة - ستارت إنجن - جنوط سبور - ديفلوك - سنترلوك"
    }
  },
  {
    name: "سوزوكي فان 7 راكب",
    category: "فان ركاب",
    price: null,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
    specs: {
      "الاسم": "الثمانية",
      "التوكيل": "مودرن موتورز",
      "المنشأ": "ياباني - تجميع محلي",
      "الموتور": "1000 سي سي",
      "التجهيزات": "باور - كاسيت"
    }
  },
  {
    name: "سوزوكي نقل بضائع",
    category: "نقل بضائع",
    price: null,
    image: "https://images.unsplash.com/photo-1605164599901-8b22f1035175?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التوكيل": "مودرن موتورز",
      "المنشأ": "ياباني - تجميع محلي",
      "الموتور": "1000 سي سي",
      "التجهيزات": "باور - كاسيت"
    }
  },
  {
    name: "سوزوكي بيك أب",
    category: "بيك أب",
    price: null,
    image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التوكيل": "مودرن موتورز",
      "المنشأ": "ياباني - تجميع محلي",
      "الموتور": "1000 سي سي",
      "التجهيزات": "باور - كاسيت"
    }
  },
  {
    name: "سوزوكي سوبر كاري",
    category: "بيك أب صندوق",
    price: null,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التجميع": "الهندسية",
      "الاستيراد": "مستوردة",
      "الوصف": "زي البيك أب والصندوق أكبر",
      "الموتور": "1200 سي سي",
      "التجهيزات": "باور - كاسيت - تكييف"
    }
  },
  {
    name: "سوزوكي إيكو",
    category: "نقل بضائع",
    price: null,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التجميع": "الهندسية",
      "الاستيراد": "مستوردة",
      "الموتور": "1200 سي سي",
      "التجهيزات": "باور - كاسيت - تكييف"
    }
  },
  {
    name: "إيسوزو RBC",
    category: "بيك أب مستورد",
    price: null,
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=900&q=80",
    specs: {
      "المنشأ": "ياباني - تجميع تايلاندي / تجميع هندي",
      "الاستيراد": "مستوردة بدون وكيل عن طريق تاجر",
      "الموتور": "1900 سي سي تربو",
      "القوة": "151 حصان",
      "التجميع": "تايلاندي",
      "المواصفات": "باور - تكييف - 2 إيرباج - ABS - زجاج كهرباء - تحكم طارة - مثبت سرعة - وحدة رفع - مرايات ضم كهرباء - مفتاح ريموت - سنترلوك - شاشة - كاميرا خلفية - حساس إطارات - جنوط سبور تايلاندي - عتب جانبي - دعامة أمامية فيبر - كاب فيبر",
      "ملاحظة": "مواصفات خاصة بمعرض الشيخ علي"
    }
  },
  {
    name: "إيسوزو حصيرة 79 حصان",
    category: "حصيرة",
    price: null,
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التجميع": "تايلاندي",
      "الموتور": "2500 سي سي",
      "القوة": "79 حصان",
      "الحالة": "مبقتش تنزل"
    }
  },
  {
    name: "إيسوزو حصيرة 109 حصان",
    category: "حصيرة",
    price: null,
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التجميع": "تايلاندي",
      "الموتور": "2500 سي سي",
      "القوة": "109 حصان",
      "الحالة": "مبقتش تنزل"
    }
  },
  {
    name: "إيسوزو حصيرة 136 حصان تايلاندي",
    category: "حصيرة",
    price: null,
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التجميع": "تايلاندي",
      "الموتور": "2500 سي سي",
      "القوة": "136 حصان",
      "آخر موديل": "2021",
      "ملاحظة": "لا يكون تايلاندي بعد 2021"
    }
  },
  {
    name: "إيسوزو حصيرة 136 حصان هندي ستاندرد",
    category: "حصيرة",
    price: null,
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التجميع": "هندي",
      "أول موديل": "2024",
      "الموتور": "2500 سي سي",
      "القوة": "136 حصان",
      "الفئة": "Standard",
      "المواصفات": "باور - تكييف - 2 إيرباج - ABS - زجاج كهرباء - إفراج عتب ودعامة"
    }
  },
  {
    name: "إيسوزو حصيرة 136 حصان هندي معدلة",
    category: "حصيرة معدلة",
    price: null,
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التجميع": "هندي",
      "أول موديل": "2024",
      "الموتور": "2500 سي سي",
      "القوة": "136 حصان",
      "المواصفات الأساسية": "باور - تكييف - 2 إيرباج - ABS - زجاج كهرباء",
      "الإضافات": "دعامة - عتب - جنوط سبور - وحدة رفع - سنترلوك - مفتاح ريموت"
    }
  },
  {
    name: "إيسوزو حصيرة 1900 ستاندرد",
    category: "حصيرة",
    price: null,
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التجميع": "تايلاندي",
      "الموتور": "1900 سي سي",
      "القوة": "151 حصان",
      "الفئة": "Standard",
      "المواصفات": "باور - تكييف - زجاج كهرباء - 2 إيرباج - ABS - حساس إطارات - شاشة تاتش - تحكم طارة - إفراج عتب ودعامة"
    }
  },
  {
    name: "إيسوزو حصيرة 1900 معدلة",
    category: "حصيرة معدلة",
    price: null,
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
    specs: {
      "التجميع": "تايلاندي",
      "الموتور": "1900 سي سي",
      "القوة": "151 حصان",
      "المواصفات الأساسية": "باور - تكييف - زجاج كهرباء - 2 إيرباج - ABS - حساس إطارات - شاشة تاتش - تحكم طارة",
      "الإضافات": "دعامة - عتب - جنوط سبور - سنترلوك - مفتاح ريموت - وحدة رفع"
    }
  },
  {
    name: "إيسوزو العقرب",
    category: "بيك أب دفع رباعي",
    price: null,
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=900&q=80",
    specs: {
      "الموديل": "2023",
      "الموتور": "1900 سي سي تربو",
      "القوة": "151 حصان",
      "التجميع": "تايلاندي",
      "المواصفات": "نفس مواصفات RBC",
      "الدفع": "دفع رباعي",
      "مقاس الجنط": "18 / 19"
    }
  },
  {
    name: "إيسوزو جامبو مكنة قديمة",
    category: "جامبو",
    price: null,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
    specs: {
      "المسمى": "الحيطة أو البجعة",
      "الفئة": "مكنة قديمة",
      "الموتور": "4600 سي سي",
      "التجهيزات": "باور - تكييف - زجاج كهرباء - سنترلوك"
    }
  },
  {
    name: "إيسوزو جامبو مكنة جديدة",
    category: "جامبو",
    price: null,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
    specs: {
      "المسمى": "الحيطة أو البجعة",
      "الفئة": "مكنة جديدة - حقن كهرباء",
      "الموتور": "3000 سي سي تربو",
      "التجهيزات": "باور - تكييف - زجاج كهرباء - ABS"
    }
  },
  {
    name: "Toyota دفع رباعي وارد عمان",
    category: "دفع رباعي",
    price: null,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    specs: {
      "المنشأ": "ياباني - تجميع تايلاندي",
      "الوارد": "عماني",
      "الموتور": "1700 سي سي",
      "الدفع": "دفع رباعي",
      "المواصفات": "باور - تكييف - زجاج كهرباء - 2 إيرباج - ABS - تحكم طارة - شاشة - كاميرا - ديفلوك - كرسي كهرباء - جنوط سبور - دعامة - عتب - خشب أبانوس",
      "إضافات": "جميع أوبشن RBC"
    }
  },
  {
    name: "Toyota 4x2 سعودي",
    category: "دفع خلفي",
    price: null,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    specs: {
      "الوارد": "سعودي",
      "الدفع": "دفع خلفي - 4x2",
      "الموتور": "2700 سي سي",
      "المواصفات": "باور - تكييف - زجاج كهرباء - شاشة - كاميرا - ABS",
      "إضافات": "جميع مواصفات RBC"
    }
  },
  {
    name: "Toyota دفع رباعي سعودي",
    category: "دفع رباعي",
    price: null,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    specs: {
      "الوارد": "سعودي",
      "الدفع": "دفع رباعي",
      "الوقود": "جاز",
      "الفتيس": "مانيوال",
      "الموتور": "1400 سي سي",
      "المواصفات": "نفس مواصفات RBC"
    }
  },
  {
    name: "Toyota دفع رباعي 1800 جاز",
    category: "دفع رباعي",
    price: null,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    specs: {
      "الدفع": "دفع رباعي",
      "الوقود": "جاز",
      "الموتور": "1800 سي سي",
      "المواصفات": "نفس مواصفات RBC"
    }
  },
  {
    name: "Toyota دوبل كابينة أوتوماتيك",
    category: "دوبل كابينة",
    price: null,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    specs: {
      "الفتيس": "أوتوماتيك",
      "الموتور": "2800 سي سي",
      "المواصفات": "نفس مواصفات RBC"
    }
  }
];

const banks = [
  {
    name: "بنك المصرف المتحد",
    type: "بنك حكومي",
    interestRate: 14,
    adminFee: 2,
    insuranceRate: 2.5,
    remainingAdminFee: 3,
    minimumDownPayment: 25,
    idOnlyDownPayment: 40,
    maxYears: 7,
    maxFinance: 2000000,
    ratesByYears: {
      1: 12.9,
      2: 13,
      3: 13.25,
      4: 13.5,
      5: 14,
      6: 14.5,
      7: 14.8
    },
    totalRatesByYears: {
      1: 13,
      2: 26,
      3: 40,
      4: 54,
      5: 70,
      6: 87,
      7: 102
    },
    cashDifferenceFees: {
      pickup: 20000,
      hilux: 25000,
      jmc: 15000,
      microbus: 15000,
      jumbo: 25000,
      other: 0
    },
    details: [
      "استعلام منزل فقط / إثبات دخل",
      "أقل مقدم 25%",
      "أقصى مدة تقسيط 7 سنوات",
      "أقصى تمويل للبنك 2 مليون جنيه",
      "مصاريف إدارية من البنك 2% من قيمة التمويل",
      "تأمين إجباري 2.5% من قيمة السيارة",
      "مصاريف إدارية على المبلغ المتبقي 3%",
      "عميل معه صورة البطاقة فقط: مقدم 40%",
      "أصحاب السجلات التجارية",
      "السائق: رخصة مهنية أولى أو ثانية أو ثالثة",
      "رخص سيارات باسم العميل أو أولاده",
      "حيازة زراعية",
      "أي إثبات دخل آخر"
    ]
  },
  {
    name: "البنك الزراعي",
    interestRate: 21.5,
    adminFee: 1.75,
    details: [
      "برامج تقسيط متنوعة",
      "مدة سداد مرنة",
      "الأوراق المطلوبة حسب نوع العميل"
    ]
  },
  {
    name: "شركة درايف",
    type: "نظام تقسيط إسلامي",
    interestRate: 21.5,
    adminFee: 0,
    minimumDownPayment: 20,
    maxYears: 7,
    blockedCarTypes: ["zymex"],
    details: [
      "تقسيط إسلامي",
      "الفاتورة تكون باسم شركة درايف للتجارة السيارات",
      "فاتورة مبدئية",
      "أقل مقدم 20% من قيمة الفاتورة",
      "أقصى مدة تقسيط 7 سنوات",
      "الفائدة ثابتة 21.5%",
      "مثال: لو العربية تكويدة 150 ألف وقيمة الفاتورة 1,065,000 يكون 80% من أصل الفاتورة 852,000 والمقدم 298,000",
      "الأوراق: سجل تجاري + بطاقة ضريبية مع استعلام مبدئي",
      "لو العميل لا يملك سجل تجاري أو بطاقة ضريبية والنشاط قائم يتم عمل استعلام",
      "رخص سيارات",
      "لا تعمل على زيمكس فقط",
      "بعد توقيع الشيكات يستلم العميل أمر توريد + أمر تفويض بالاستلام",
      "الشركة لا ترخص السيارة للعميل"
    ]
  },
  {
    name: "كريدي أجريكول",
    interestRate: 14,
    adminFee: 2.5,
    adminFixedFee: 900,
    insuranceRate: 2.5,
    insuranceBase: "remainingPlus25",
    minimumDownPayment: 40,
    maxYears: 5,
    maxFinance: 800000,
    maxPriceIncrease: 10,
    calculationMode: "flatAnnualSeparateFees",
    allowedCarTypes: ["pickup", "hilux", "jmc", "sevenSeats", "passenger", "other"],
    blockedCarTypes: ["jumbo", "microbus"],
    details: [
      "أقل مقدم 40%",
      "السيارات المتاحة: أي سيارة بيك أب، أي سيارة 7 راكب، أي سيارة ملاكي",
      "غير متاح: جامبو أو ميكروباص",
      "مسموح بزيادة السعر بحد أقصى 10% من السعر الأصلي للسيارة",
      "أقصى مدة 5 سنوات",
      "الفائدة ثابتة 14%",
      "أقصى تمويل 800 ألف جنيه",
      "مسموح بزيادة التمويل عن 800 ألف بشرط كشف حساب 6 شهور",
      "أصحاب السجلات التجارية بشرط وجود نشاط",
      "الموظف: استعلام منزل فقط",
      "بدون استعلام بشرط وجود إفادة من جهة العمل",
      "مصاريف إدارية 2.5% + 900 جنيه",
      "التأمين إجباري: تأمين كلي أو تأمين على المتبقي + 25%"
    ]
  }
];

const currencyFormatter = new Intl.NumberFormat("ar-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0
});

const dailyPrices = [
  {
    brand: "شيفروليه",
    items: [
      { name: "دبابة باور أبيض", price: 1125000 },
      { name: "دبابة باور أحمر", price: 1125000 },
      { name: "دبابة باور أخضر", price: 1135000 },
      { name: "جامبو فاضي موديل 2027", price: 1670000 },
      { name: "جامبو مكيف موديل 2027", price: 1760000 },
      { name: "جامبو 8000", price: 2220000 }
    ]
  },
  {
    brand: "إيسوزو",
    items: [
      { name: "كاملة موديل 2026", price: 1925000 },
      { name: "حصيرة موديل 2026", price: 1790000 },
      { name: "حصيرة كاملة موديل 2026", price: 1850000 },
      { name: "حصيرة 136 حصان", price: 1500000, note: "دعامة وعتب" },
      { name: "جامبو مكنة قديمة موديل 2026", price: 2180000 },
      { name: "جامبو حقن", price: 2050000 }
    ]
  },
  {
    brand: "هايلوكس",
    items: [
      { name: "رباعي عماني موديل 2026", price: 2580000, note: "ديفلوك" },
      { name: "دوبل كابينة موديل 2026", price: 3930000 }
    ]
  },
  {
    brand: "KYC",
    items: [
      { name: "فرش جلد", price: 675000 },
      { name: "فرش قماش", price: 670000 }
    ]
  },
  {
    brand: "ميكروباص قصراوي",
    items: [
      { name: "جاز", price: 1225000 },
      { name: "كارب", price: 1100000 },
      { name: "إنجك فاضي", price: 1070000 }
    ]
  },
  {
    brand: "كنج لونج",
    items: [
      { name: "كارب فاضي موديل 2027", price: 1065000 },
      { name: "جاز موديل 2027", price: 1160000 }
    ]
  },
  {
    brand: "زيمكس",
    items: [
      { name: "إنجك فاضي موديل 2027", price: 945000 }
    ]
  },
  {
    brand: "فوتون",
    items: [
      { name: "C2 موديل 2027", price: 1180000 },
      { name: "واندر", price: 565000 }
    ]
  },
  {
    brand: "جوي لونج",
    items: [
      { name: "A4 Baseline بنزين 2200CC", price: 1249900, note: "موديل 2026" },
      { name: "A4 Highline بنزين 2200CC", price: 1334900, note: "موديل 2026" },
      { name: "A4 Baseline ديزل 2500CC تربو", price: 1479900, note: "موديل 2026" },
      { name: "A4 Highline ديزل 2500CC تربو", price: 1539900, note: "موديل 2026" },
      { name: "A5 Highline بنزين 2400CC", price: 1699900, note: "موديل 2026" },
      { name: "A5 Topline ديزل 2500CC تربو", price: 1859900, note: "موديل 2026" },
      { name: "A5 Baseline ديزل 3000CC تربو", price: 1829900, note: "موديل 2026" },
      { name: "A5 Topline ديزل 3000CC تربو", price: 1929900, note: "موديل 2026" },
      { name: "A5 Topline ديزل 3000CC تربو + 2 إيرباج", price: 1959900, note: "موديل 2026" },
      { name: "EA5 Luxury Edition", price: 2989900, note: "CCS2 - 102 KW" },
      { name: "A6 Luxury Edition ديزل 3000CC تربو + 2 إيرباج", price: 2499900, note: "موديل 2026" }
    ]
  },
  {
    brand: "نيسان",
    items: [
      { name: "نافارا صندوق", price: 1335000 }
    ]
  },
  {
    brand: "JMC",
    items: [
      { name: "جامبو", price: 895000 },
      { name: "ربع نقل", price: 730000 }
    ]
  },
  {
    brand: "جاك",
    items: [
      { name: "3 طن", price: 930000 },
      { name: "5.5 طن", price: 1140000 }
    ]
  },
  {
    brand: "سوزوكي",
    items: [
      { name: "فان", price: 560000 }
    ]
  }
];

const todayCarPricesByName = {
  "شيفروليه ربع نقل TFR": 1125000,
  "دبابة شيفروليه فاضية ربع نقل": 1125000,
  "شيفروليه جامبو 7000": 1670000,
  "شيفروليه NQR 8000": 2220000,
  "JMC ربع نقل": 730000,
  "JMC Carrying نصف نقل جامبو": 895000,
  "KYC نقل ركاب": 675000,
  "KYC نقل بضائع": 670000,
  "نيسان نافارا صندوق": 1335000,
  "سوزوكي فان 7 راكب": 560000,
  "إيسوزو RBC": 1925000,
  "إيسوزو حصيرة 79 حصان": 1790000,
  "إيسوزو حصيرة 109 حصان": 1850000,
  "إيسوزو حصيرة 136 حصان تايلاندي": 1500000,
  "إيسوزو حصيرة 136 حصان هندي ستاندرد": 1500000,
  "إيسوزو حصيرة 136 حصان هندي معدلة": 1500000,
  "إيسوزو جامبو مكنة قديمة": 2180000,
  "إيسوزو جامبو مكنة جديدة": 2050000,
  "Toyota دفع رباعي وارد عمان": 2580000,
  "Toyota دوبل كابينة أوتوماتيك": 3930000
};

cars.forEach((car) => {
  if (todayCarPricesByName[car.name]) {
    car.price = todayCarPricesByName[car.name];
  }

  car.image = carPlaceholderImage;
  car.images = [carPlaceholderImage];
});

const carsGrid = document.querySelector("#carsGrid");
const dailyPricesGrid = document.querySelector("#dailyPricesGrid");
const banksGrid = document.querySelector("#banksGrid");
const bankPolicyPage = document.querySelector("#bankPolicy");
const carDetailPage = document.querySelector("#carDetail");
const installmentReceipt = document.querySelector("#installmentReceipt");
const bankSelect = document.querySelector("#bankSelect");
const carTypeSelect = document.querySelector("#carTypeSelect");
const carPrice = document.querySelector("#carPrice");
const downPayment = document.querySelector("#downPayment");
const years = document.querySelector("#years");
const interestRate = document.querySelector("#interestRate");
const adminFee = document.querySelector("#adminFee");
const form = document.querySelector("#installmentForm");

const monthlyPayment = document.querySelector("#monthlyPayment");
const loanAmount = document.querySelector("#loanAmount");
const totalInterest = document.querySelector("#totalInterest");
const adminFeeAmount = document.querySelector("#adminFeeAmount");
const insuranceAmount = document.querySelector("#insuranceAmount");
const remainingAdminAmount = document.querySelector("#remainingAdminAmount");
const cashDifferenceAmount = document.querySelector("#cashDifferenceAmount");
const upfrontTotalAmount = document.querySelector("#upfrontTotalAmount");
const totalPayment = document.querySelector("#totalPayment");
const bankEligibilityNote = document.querySelector("#bankEligibilityNote");
const downloadMainInstallment = document.querySelector("#downloadMainInstallment");
const themeButtons = document.querySelectorAll("[data-theme-button]");
const mainSections = document.querySelectorAll("main > section:not(#bankPolicy):not(#carDetail):not(#installmentReceipt)");
const defaultDocumentTitle = document.title;
const fallbackCarTypeOptions = [
  { value: "pickup", text: "بيك أب / ربع نقل" },
  { value: "hilux", text: "هايلوكس" },
  { value: "jmc", text: "JMC" },
  { value: "microbus", text: "ميكروباص" },
  { value: "jumbo", text: "جامبو" },
  { value: "sevenSeats", text: "7 راكب" },
  { value: "passenger", text: "ملاكي" },
  { value: "zymex", text: "زيمكس" },
  { value: "other", text: "أخرى" }
];

function formatCurrency(value) {
  return currencyFormatter.format(Math.max(0, Math.round(value)));
}

const carBrandGroups = [
  { title: "Chevrolet", matcher: /شيفروليه|شيفرولية|Chevrolet/i },
  { title: "JMC", matcher: /JMC/i },
  { title: "Nissan", matcher: /نيسان|Nissan/i },
  { title: "Suzuki", matcher: /سوزوكي|سوزوكى|Suzuki/i },
  { title: "Isuzu", matcher: /إيسوزو|ايسوزو|Isuzu/i },
  { title: "Toyota", matcher: /تويوتا|Toyota/i },
  { title: "Joylong", matcher: /جوي لونج|Joylong/i }
];

function getCarBrandGroup(car) {
  const text = `${car.name} ${car.category}`;
  return carBrandGroups.find((group) => group.matcher.test(text))?.title || "ماركات أخرى";
}

function renderDailyPrices() {
  if (!dailyPricesGrid) {
    return;
  }

  dailyPricesGrid.innerHTML = dailyPrices.map((group) => `
    <article class="daily-price-card">
      <h3>${group.brand}</h3>
      <div class="daily-price-list">
        ${group.items.map((item) => `
          <div class="daily-price-item">
            <span>${item.name}</span>
            <b>${item.price ? formatCurrency(item.price) : item.note || "حسب الرسمي"}</b>
            ${item.price && item.note ? `<p class="daily-price-note">${item.note}</p>` : ""}
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderCars() {
  if (!carsGrid) {
    return;
  }

  const groupedCars = cars.reduce((groups, car, index) => {
    const groupName = getCarBrandGroup(car);
    groups[groupName] = groups[groupName] || [];
    groups[groupName].push({ car, index });
    return groups;
  }, {});
  const orderedGroups = [...carBrandGroups.map((group) => group.title), "ماركات أخرى"]
    .filter((groupName) => groupedCars[groupName]?.length);

  carsGrid.innerHTML = orderedGroups.map((groupName, groupIndex) => `
    <details class="cars-dropdown" ${groupIndex === 0 ? "open" : ""}>
      <summary>
        <span>${groupName}</span>
        <b>${groupedCars[groupName].length} سيارة</b>
      </summary>
      <div class="cars-dropdown-list">
        ${groupedCars[groupName].map(({ car, index }) => `
          <a class="card car-link compact-car-card" href="#car-detail-${index}" aria-label="عرض تفاصيل ${car.name}">
            <img class="car-image" src="${car.image}" alt="${car.name}">
            <div class="card-body">
              <h3>${car.name}</h3>
              <p class="meta">${car.category}</p>
              <div class="price">${car.price ? formatCurrency(car.price) : "السعر يضاف لاحقا"}</div>
              <span class="car-card-action">عرض التفاصيل</span>
            </div>
          </a>
        `).join("")}
      </div>
    </details>
  `).join("");
}

function renderBanks() {
  if (banksGrid) {
    banksGrid.innerHTML = banks.map((bank, index) => `
      <a class="card bank-card bank-link" href="#bank-policy-${index}" aria-label="عرض سياسة ${bank.name}">
        <h3>${bank.name}</h3>
        <span class="bank-card-action">عرض السياسة</span>
      </a>
    `).join("");
  }

  if (bankSelect) {
    bankSelect.innerHTML = banks.map((bank, index) => `
      <option value="${index}">${bank.name}</option>
    `).join("");
  }
}

function getBankSummaryItems(bank) {
  return [
    ["نوع الجهة", bank.type || "تمويل سيارات"],
    ["الفائدة", bank.totalRatesByYears ? "حسب مدة التقسيط" : `${bank.interestRate}%`],
    ["المصاريف الإدارية", `${bank.adminFee}%${bank.adminFixedFee ? ` + ${formatCurrency(bank.adminFixedFee)}` : ""}`],
    ["أقل مقدم", bank.minimumDownPayment ? `${bank.minimumDownPayment}%` : "حسب سياسة الجهة"],
    ["أقصى مدة", bank.maxYears ? `${bank.maxYears} سنوات` : "حسب الموافقة"],
    ["أقصى تمويل", bank.maxFinance ? formatCurrency(bank.maxFinance) : "حسب الموافقة"]
  ];
}

function getCarTypeOptionsMarkup(selectedValue = carTypeSelect?.value || "pickup") {
  const options = carTypeSelect ? Array.from(carTypeSelect.options).map((option) => ({
    value: option.value,
    text: option.textContent
  })) : fallbackCarTypeOptions;

  return options.map((option) => `
    <option value="${option.value}"${option.value === selectedValue ? " selected" : ""}>${option.text}</option>
  `).join("");
}

function getBankOptionsMarkup(selectedIndex = 0) {
  return banks.map((bank, index) => `
    <option value="${index}"${index === selectedIndex ? " selected" : ""}>${bank.name}</option>
  `).join("");
}

function guessCarType(car) {
  const text = `${car.name} ${car.category}`;

  if (/JMC/i.test(text)) return "jmc";
  if (/جوي لونج|Joylong|A4|A5|A6|EA5/i.test(text)) return "microbus";
  if (/ط¬ط§ظ…ط¨ظˆ|جامبو/.test(text)) return "jumbo";
  if (/ظ…ظٹظƒط±ظˆ|ميكرو/.test(text)) return "microbus";
  if (/7|سبعة|راكب|ط±ط§ظƒط¨/.test(text)) return "sevenSeats";
  if (/Toyota|Hilux|هايلوكس|ظ‡ط§ظٹظ„ظˆظƒط³/i.test(text)) return "hilux";
  if (/بيك|ط¨ظٹظƒ|ربع|ط±ط¨ط¹|pickup/i.test(text)) return "pickup";
  if (/ملاكي|ظ…ظ„ط§ظƒظٹ/.test(text)) return "passenger";

  return "other";
}

function getAvailableCarsMarkup() {
  return cars.map((car) => `
    <article class="policy-car-item">
      <img src="${car.image}" alt="${car.name}">
      <div>
        <h4>${car.name}</h4>
        <p>${car.category}</p>
      </div>
    </article>
  `).join("");
}

function getCarImages(car) {
  return car.images?.length ? car.images : [car.image];
}

function computeInstallment(bank, values) {
  const price = Number(values.price) || 0;
  const down = Number(values.downPayment) || 0;
  const durationYears = Math.max(1, Number(values.years) || 1);
  const carType = values.carType || "other";
  const blockedForBank = bank.blockedCarTypes?.includes(carType);
  const rate = bank.totalRatesByYears?.[durationYears] || bank.ratesByYears?.[durationYears] || Number(values.interestRate) || bank.interestRate || 0;
  const feeRate = Number(values.adminFee) || 0;
  const requestedPrincipal = Math.max(0, price - down);
  const principal = bank.maxFinance ? Math.min(requestedPrincipal, bank.maxFinance) : requestedPrincipal;
  const months = durationYears * 12;
  const interest = bank.totalRatesByYears ? principal * (rate / 100) : principal * (rate / 100) * durationYears;
  const fee = principal * (feeRate / 100) + (bank.adminFixedFee || 0);
  const insuranceBase = bank.insuranceBase === "remainingPlus25" ? principal * 1.25 : price;
  const insurance = insuranceBase * ((bank.insuranceRate || 0) / 100);
  const remainingAdmin = principal * ((bank.remainingAdminFee || 0) / 100);
  const cashDifference = bank.cashDifferenceFees?.[carType] || 0;
  const financedTotal = principal + interest;
  const total = financedTotal + fee + insurance + remainingAdmin + cashDifference;
  const upfrontTotal = down + fee + insurance + remainingAdmin + cashDifference;
  const monthlyBase = bank.calculationMode === "flatAnnualSeparateFees" ? financedTotal : total;
  const monthly = months > 0 ? monthlyBase / months : 0;

  return {
    rate,
    principal,
    interest,
    fee,
    insurance,
    remainingAdmin,
    cashDifference,
    upfrontTotal,
    total,
    monthly,
    blockedForBank
  };
}

function getInstallmentResultItems(result) {
  return [
    ["القسط الشهري التقريبي", result.monthly],
    ["قيمة التمويل", result.principal],
    ["إجمالي الفوائد", result.interest],
    ["المصاريف الإدارية", result.fee],
    ["تأمين إجباري", result.insurance],
    ["مصاريف على المتبقي", result.remainingAdmin],
    ["ضريبة فرق الكاش", result.cashDifference],
    ["إجمالي المقدم التقريبي", result.upfrontTotal],
    ["إجمالي السداد", result.total]
  ];
}

function printInstallmentPdf({ bankName, title, result }) {
  if (!installmentReceipt || !result) {
    return;
  }

  installmentReceipt.innerHTML = `
    <article class="receipt-card">
      <p class="receipt-label">نتيجة حاسبة القسط</p>
      <h1>${bankName}</h1>
      <h2>${title}</h2>
      <div class="receipt-monthly">
        <span>القسط الشهري التقريبي</span>
        <strong>${formatCurrency(result.monthly)}</strong>
      </div>
      <div class="receipt-details">
        ${getInstallmentResultItems(result).slice(1).map(([label, value]) => `
          <p><span>${label}</span><b>${formatCurrency(value)}</b></p>
        `).join("")}
      </div>
      <p class="receipt-note">الأرقام تقريبية، والموافقة النهائية حسب سياسة البنك أو الشركة.</p>
    </article>
  `;
  installmentReceipt.hidden = false;
  document.body.classList.add("print-installment");
  document.title = `${bankName} - القسط الشهري`;
  window.print();
}

function renderBankPolicy(index) {
  const bank = banks[index];

  if (!bank) {
    window.location.hash = "banks";
    return;
  }

  if (!bankPolicyPage) {
    return;
  }

  const summaryItems = getBankSummaryItems(bank)
    .map(([label, value]) => `<li><span>${label}</span><b>${value}</b></li>`)
    .join("");
  const rates = bank.totalRatesByYears || bank.ratesByYears;
  const ratesMarkup = rates ? `
    <div class="policy-block">
      <h3>نسب القسط حسب المدة</h3>
      <ul class="policy-rates">
        ${Object.entries(rates).map(([year, rate]) => `<li><span>${year} سنة</span><b>${rate}%</b></li>`).join("")}
      </ul>
    </div>
  ` : "";
  const defaultYears = Math.min(bank.maxYears || 5, 5);
  const defaultRate = bank.totalRatesByYears?.[defaultYears] || bank.ratesByYears?.[defaultYears] || bank.interestRate || 0;

  bankPolicyPage.innerHTML = `
    <div class="policy-header">
      <a class="button secondary" href="#banks">رجوع للبنوك</a>
      <button class="button primary" type="button" data-policy-print>تحميل PDF</button>
    </div>
    <article class="policy-card">
      <p class="eyebrow">سياسة التمويل</p>
      <h2>${bank.name}</h2>
      <p class="policy-intro">${bank.type || "تفاصيل التمويل والتقسيط"}.</p>
      <ul class="policy-summary">${summaryItems}</ul>
      <div class="policy-block">
        <h3>الشروط والمستندات</h3>
        <ul class="policy-list">
          ${bank.details.map((detail) => `<li>${detail}</li>`).join("")}
        </ul>
      </div>
      ${ratesMarkup}
      <div class="policy-block">
        <h3>حاسبة القسط</h3>
        <div class="policy-calculator-layout">
          <form class="calculator policy-calculator" data-policy-calculator autocomplete="off">
            <label>
              نوع السيارة
              <select name="carType">${getCarTypeOptionsMarkup()}</select>
            </label>
            <label>
              سعر السيارة
              <input name="price" type="number" min="0" step="1000" placeholder="مثال: 900000">
            </label>
            <label>
              المقدم
              <input name="downPayment" type="number" min="0" step="1000" placeholder="مثال: 250000">
            </label>
            <div class="fields-row">
              <label>
                عدد السنوات
                <input name="years" type="number" min="1" max="${bank.maxYears || 10}" step="1" value="${defaultYears}">
              </label>
              <label>
                نسبة القسط %
                <input name="interestRate" type="number" min="0" step="0.1" value="${defaultRate}">
              </label>
            </div>
            <label>
              مصاريف إدارية %
              <input name="adminFee" type="number" min="0" step="0.1" value="${bank.adminFee}">
            </label>
            <button class="button primary full" type="submit">احسب القسط</button>
            <p class="form-note" data-policy-note></p>
          </form>
          <aside class="result-panel policy-result-panel">
            <span class="result-label">القسط الشهري التقريبي</span>
            <strong data-policy-result="monthly">0 جنيه</strong>
            <div class="result-details">
              <p><span>قيمة التمويل</span><b data-policy-result="principal">0 جنيه</b></p>
              <p><span>إجمالي الفوائد</span><b data-policy-result="interest">0 جنيه</b></p>
              <p><span>المصاريف الإدارية</span><b data-policy-result="fee">0 جنيه</b></p>
              <p><span>تأمين إجباري</span><b data-policy-result="insurance">0 جنيه</b></p>
              <p><span>مصاريف على المتبقي</span><b data-policy-result="remainingAdmin">0 جنيه</b></p>
              <p><span>ضريبة فرق الكاش</span><b data-policy-result="cashDifference">0 جنيه</b></p>
              <p><span>إجمالي المقدم التقريبي</span><b data-policy-result="upfrontTotal">0 جنيه</b></p>
              <p><span>إجمالي السداد</span><b data-policy-result="total">0 جنيه</b></p>
            </div>
            <button class="button secondary full result-download" type="button" data-policy-installment-pdf>تحميل القسط PDF</button>
          </aside>
        </div>
      </div>
      <div class="policy-block">
        <h3>أنواع السيارات عندنا</h3>
        <div class="policy-cars-grid">
          ${getAvailableCarsMarkup()}
        </div>
      </div>
    </article>
  `;

  setupPolicyPageActions(index);
}

function updatePolicyCalculator(index) {
  const bank = banks[index];
  const formElement = bankPolicyPage?.querySelector("[data-policy-calculator]");
  if (!bank || !formElement) {
    return null;
  }

  const values = {
    price: formElement.elements.price.value,
    downPayment: formElement.elements.downPayment.value,
    years: formElement.elements.years.value,
    interestRate: formElement.elements.interestRate.value,
    adminFee: formElement.elements.adminFee.value,
    carType: formElement.elements.carType.value
  };
  const result = computeInstallment(bank, values);

  if (bank.totalRatesByYears?.[Number(values.years)] || bank.ratesByYears?.[Number(values.years)]) {
    formElement.elements.interestRate.value = result.rate;
  }

  const resultMap = {
    monthly: result.monthly,
    principal: result.principal,
    interest: result.interest,
    fee: result.fee,
    insurance: result.insurance,
    remainingAdmin: result.remainingAdmin,
    cashDifference: result.cashDifference,
    upfrontTotal: result.upfrontTotal,
    total: result.total
  };

  Object.entries(resultMap).forEach(([key, value]) => {
    const output = bankPolicyPage.querySelector(`[data-policy-result="${key}"]`);
    if (output) {
      output.textContent = formatCurrency(value);
    }
  });

  const note = bankPolicyPage.querySelector("[data-policy-note]");
  if (note) {
    note.textContent = result.blockedForBank
      ? "هذا النوع غير متاح للتمويل مع البنك المختار."
      : "";
  }

  return result;
}

function setupPolicyPageActions(index) {
  const formElement = bankPolicyPage?.querySelector("[data-policy-calculator]");
  const printButton = bankPolicyPage?.querySelector("[data-policy-print]");
  const installmentButton = bankPolicyPage?.querySelector("[data-policy-installment-pdf]");

  if (formElement) {
    formElement.addEventListener("input", () => updatePolicyCalculator(index));
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      updatePolicyCalculator(index);
    });
    updatePolicyCalculator(index);
  }

  if (printButton) {
    printButton.addEventListener("click", () => {
      document.body.classList.add("print-policy");
      document.title = `${banks[index].name} - سياسة التمويل`;
      window.print();
    });
  }

  if (installmentButton) {
    installmentButton.addEventListener("click", () => {
      const result = updatePolicyCalculator(index);
      printInstallmentPdf({
        bankName: banks[index].name,
        title: "القسط الشهري",
        result
      });
    });
  }
}

function renderCarDetail(index) {
  const car = cars[index];

  if (!car) {
    window.location.hash = "cars";
    return;
  }

  if (!carDetailPage) {
    return;
  }

  const specs = Object.entries(car.specs)
    .map(([label, value]) => `<li><span>${label}</span><b>${value}</b></li>`)
    .join("");
  const selectedCarType = guessCarType(car);
  const carPriceValue = car.price || "";
  const carImages = getCarImages(car);
  const carGallery = `
    <div class="car-detail-gallery">
      <img class="car-detail-image" src="${carImages[0]}" alt="${car.name}">
      ${carImages.length > 1 ? `
        <div class="car-gallery-thumbs" aria-label="صور ${car.name}">
          ${carImages.map((image, imageIndex) => `
            <a href="${image}" target="_blank" rel="noopener" aria-label="فتح صورة ${imageIndex + 1} من ${car.name}">
              <img src="${image}" alt="${car.name} - صورة ${imageIndex + 1}">
            </a>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;

  carDetailPage.innerHTML = `
    <div class="policy-header">
      <a class="button secondary" href="#cars">رجوع للسيارات</a>
    </div>
    <article class="policy-card car-detail-card">
      <div class="car-detail-hero">
        ${carGallery}
        <div class="car-detail-info">
          <p class="eyebrow">تفاصيل السيارة</p>
          <h2>${car.name}</h2>
          <p class="policy-intro">${car.category}</p>
          <div class="price car-detail-price">${car.price ? formatCurrency(car.price) : "السعر يضاف لاحقا"}</div>
        </div>
      </div>

      <div class="policy-block">
        <h3>المواصفات</h3>
        <ul class="policy-summary car-detail-specs">${specs}</ul>
      </div>

      <div class="policy-block">
        <h3>حاسبة القسط</h3>
        <div class="policy-calculator-layout">
          <form class="calculator car-calculator" data-car-calculator autocomplete="off">
            <label>
              البنك أو الشركة
              <select name="bank">${getBankOptionsMarkup()}</select>
            </label>
            <label>
              نوع السيارة
              <select name="carType">${getCarTypeOptionsMarkup(selectedCarType)}</select>
            </label>
            <label>
              سعر السيارة
              <input name="price" type="number" min="0" step="1000" value="${carPriceValue}" placeholder="اكتب سعر السيارة">
            </label>
            <label>
              المقدم
              <input name="downPayment" type="number" min="0" step="1000" placeholder="مثال: 250000">
            </label>
            <div class="fields-row">
              <label>
                عدد السنوات
                <input name="years" type="number" min="1" max="${banks[0].maxYears || 10}" step="1" value="${Math.min(banks[0].maxYears || 5, 5)}">
              </label>
              <label>
                نسبة القسط %
                <input name="interestRate" type="number" min="0" step="0.1">
              </label>
            </div>
            <label>
              مصاريف إدارية %
              <input name="adminFee" type="number" min="0" step="0.1">
            </label>
            <button class="button primary full" type="submit">احسب القسط</button>
            <p class="form-note" data-car-note></p>
          </form>
          <aside class="result-panel policy-result-panel">
            <span class="result-label">القسط الشهري التقريبي</span>
            <strong data-car-result="monthly">0 جنيه</strong>
            <div class="result-details">
              <p><span>قيمة التمويل</span><b data-car-result="principal">0 جنيه</b></p>
              <p><span>إجمالي الفوائد</span><b data-car-result="interest">0 جنيه</b></p>
              <p><span>المصاريف الإدارية</span><b data-car-result="fee">0 جنيه</b></p>
              <p><span>تأمين إجباري</span><b data-car-result="insurance">0 جنيه</b></p>
              <p><span>مصاريف على المتبقي</span><b data-car-result="remainingAdmin">0 جنيه</b></p>
              <p><span>ضريبة فرق الكاش</span><b data-car-result="cashDifference">0 جنيه</b></p>
              <p><span>إجمالي المقدم التقريبي</span><b data-car-result="upfrontTotal">0 جنيه</b></p>
              <p><span>إجمالي السداد</span><b data-car-result="total">0 جنيه</b></p>
            </div>
            <button class="button secondary full result-download" type="button" data-car-installment-pdf>تحميل القسط PDF</button>
          </aside>
        </div>
      </div>
    </article>
  `;

  setupCarDetailActions(index);
}

function applyCarCalculatorBankRates(formElement) {
  const selectedBank = banks[Number(formElement.elements.bank.value)] || banks[0];
  const yearsInput = formElement.elements.years;
  yearsInput.max = selectedBank.maxYears || 10;

  if (selectedBank.maxYears && Number(yearsInput.value) > selectedBank.maxYears) {
    yearsInput.value = selectedBank.maxYears;
  }

  const durationYears = Math.max(1, Number(yearsInput.value) || 1);
  const selectedRate = selectedBank.totalRatesByYears?.[durationYears] || selectedBank.ratesByYears?.[durationYears] || selectedBank.interestRate || 0;
  formElement.elements.interestRate.value = selectedRate;
  formElement.elements.adminFee.value = selectedBank.adminFee;
}

function updateCarCalculator() {
  const formElement = carDetailPage?.querySelector("[data-car-calculator]");
  if (!formElement) {
    return null;
  }

  const selectedBank = banks[Number(formElement.elements.bank.value)] || banks[0];
  const result = computeInstallment(selectedBank, {
    price: formElement.elements.price.value,
    downPayment: formElement.elements.downPayment.value,
    years: formElement.elements.years.value,
    interestRate: formElement.elements.interestRate.value,
    adminFee: formElement.elements.adminFee.value,
    carType: formElement.elements.carType.value
  });

  if (selectedBank.totalRatesByYears?.[Number(formElement.elements.years.value)] || selectedBank.ratesByYears?.[Number(formElement.elements.years.value)]) {
    formElement.elements.interestRate.value = result.rate;
  }

  const resultMap = {
    monthly: result.monthly,
    principal: result.principal,
    interest: result.interest,
    fee: result.fee,
    insurance: result.insurance,
    remainingAdmin: result.remainingAdmin,
    cashDifference: result.cashDifference,
    upfrontTotal: result.upfrontTotal,
    total: result.total
  };

  Object.entries(resultMap).forEach(([key, value]) => {
    const output = carDetailPage.querySelector(`[data-car-result="${key}"]`);
    if (output) {
      output.textContent = formatCurrency(value);
    }
  });

  const note = carDetailPage.querySelector("[data-car-note]");
  if (note) {
    note.textContent = result.blockedForBank
      ? "هذا النوع غير متاح للتمويل مع البنك المختار."
      : "";
  }

  return result;
}

function setupCarDetailActions() {
  const formElement = carDetailPage?.querySelector("[data-car-calculator]");
  const installmentButton = carDetailPage?.querySelector("[data-car-installment-pdf]");
  if (!formElement) {
    return;
  }

  applyCarCalculatorBankRates(formElement);
  updateCarCalculator();

  formElement.elements.bank.addEventListener("change", () => {
    applyCarCalculatorBankRates(formElement);
    updateCarCalculator();
  });
  formElement.elements.years.addEventListener("input", () => {
    applyCarCalculatorBankRates(formElement);
    updateCarCalculator();
  });
  formElement.addEventListener("input", updateCarCalculator);
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    updateCarCalculator();
  });

  if (installmentButton) {
    installmentButton.addEventListener("click", () => {
      const result = updateCarCalculator();
      const selectedBank = banks[Number(formElement.elements.bank.value)] || banks[0];
      printInstallmentPdf({
        bankName: selectedBank.name,
        title: "القسط الشهري",
        result
      });
    });
  }
}

function showBankPolicy(index) {
  if (!bankPolicyPage || !carDetailPage) {
    return;
  }

  renderBankPolicy(index);
  mainSections.forEach((section) => {
    section.hidden = true;
  });
  bankPolicyPage.hidden = false;
  carDetailPage.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCarDetail(index) {
  if (!bankPolicyPage || !carDetailPage) {
    return;
  }

  renderCarDetail(index);
  mainSections.forEach((section) => {
    section.hidden = true;
  });
  bankPolicyPage.hidden = true;
  carDetailPage.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMainSections() {
  mainSections.forEach((section) => {
    section.hidden = false;
  });
  if (bankPolicyPage) {
    bankPolicyPage.hidden = true;
  }
  if (carDetailPage) {
    carDetailPage.hidden = true;
  }

  const targetId = window.location.hash.replace("#", "");
  const targetSection = targetId ? document.getElementById(targetId) : null;
  if (targetSection) {
    requestAnimationFrame(() => {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function handleRoute() {
  const bankMatch = window.location.hash.match(/^#bank-policy-(\d+)$/);
  const carMatch = window.location.hash.match(/^#car-detail-(\d+)$/);

  if (bankMatch) {
    showBankPolicy(Number(bankMatch[1]));
    return;
  }

  if (carMatch) {
    showCarDetail(Number(carMatch[1]));
    return;
  }

  showMainSections();
}

function applyBankRates() {
  if (!bankSelect || !years || !interestRate || !adminFee) {
    return;
  }

  const selectedBank = banks[Number(bankSelect.value)] || banks[0];
  years.max = selectedBank.maxYears || 10;
  if (selectedBank.maxYears && Number(years.value) > selectedBank.maxYears) {
    years.value = selectedBank.maxYears;
  }
  const durationYears = Math.max(1, Number(years.value) || 1);
  const selectedRate = selectedBank.totalRatesByYears?.[durationYears] || selectedBank.ratesByYears?.[durationYears] || selectedBank.interestRate;
  interestRate.value = selectedRate;
  adminFee.value = selectedBank.adminFee;
}

function calculateInstallment() {
  if (!bankSelect || !carPrice || !downPayment || !years || !interestRate || !adminFee || !carTypeSelect) {
    return null;
  }

  const selectedBank = banks[Number(bankSelect.value)] || banks[0];
  const result = computeInstallment(selectedBank, {
    price: carPrice.value,
    downPayment: downPayment.value,
    years: years.value,
    interestRate: interestRate.value,
    adminFee: adminFee.value,
    carType: carTypeSelect.value
  });

  if (selectedBank.totalRatesByYears?.[Number(years.value)] || selectedBank.ratesByYears?.[Number(years.value)]) {
    interestRate.value = result.rate;
  }

  monthlyPayment.textContent = formatCurrency(result.monthly);
  loanAmount.textContent = formatCurrency(result.principal);
  totalInterest.textContent = formatCurrency(result.interest);
  adminFeeAmount.textContent = formatCurrency(result.fee);
  insuranceAmount.textContent = formatCurrency(result.insurance);
  remainingAdminAmount.textContent = formatCurrency(result.remainingAdmin);
  cashDifferenceAmount.textContent = formatCurrency(result.cashDifference);
  upfrontTotalAmount.textContent = formatCurrency(result.upfrontTotal);
  totalPayment.textContent = formatCurrency(result.total);

  bankEligibilityNote.textContent = result.blockedForBank
    ? "هذا النوع غير متاح للتمويل مع البنك المختار."
    : "";

  return result;
}

function setTheme(themeName) {
  document.body.dataset.theme = themeName;
  localStorage.setItem("siteTheme", themeName);
  themeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.themeButton === themeName);
  });
}

renderDailyPrices();
renderCars();
renderBanks();
applyBankRates();
calculateInstallment();
setTheme(localStorage.getItem("siteTheme") || "night");
handleRoute();

if (bankSelect) {
  bankSelect.addEventListener("change", () => {
    applyBankRates();
    calculateInstallment();
  });
}

if (years) {
  years.addEventListener("input", applyBankRates);
}
if (carTypeSelect) {
  carTypeSelect.addEventListener("change", calculateInstallment);
}
if (form) {
  form.addEventListener("input", calculateInstallment);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateInstallment();
  });
}

if (downloadMainInstallment) {
  downloadMainInstallment.addEventListener("click", () => {
    const selectedBank = banks[Number(bankSelect.value)] || banks[0];
    const result = calculateInstallment();
    printInstallmentPdf({
      bankName: selectedBank.name,
      title: "القسط الشهري",
      result
    });
  });
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(button.dataset.themeButton);
  });
});

window.addEventListener("hashchange", handleRoute);
window.addEventListener("afterprint", () => {
  document.body.classList.remove("print-policy");
  document.body.classList.remove("print-installment");
  if (installmentReceipt) {
    installmentReceipt.hidden = true;
  }
  document.title = defaultDocumentTitle;
});

const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
