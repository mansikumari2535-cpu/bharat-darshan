
/* ==========================================
   BHARAT DARSHAN - SCRIPT.JS
   Bilingual Indian Culture Explorer
   ========================================== */

"use strict";

/* ---------- 1. WEBSITE DATA ---------- */

const regions = [
  {
    name: "Andhra Pradesh",
    hi: "आंध्र प्रदेश",
    type: "state",
    capital: "Amaravati",
    capitalHi: "अमरावती",
    languages: "Telugu, Urdu",
    languagesHi: "तेलुगु, उर्दू",
    history: "Known for the Satavahana, Eastern Chalukya and Vijayanagara heritage.",
    historyHi: "सातवाहन, पूर्वी चालुक्य और विजयनगर साम्राज्य की ऐतिहासिक विरासत।",
    dances: "Kuchipudi, Veeranatyam, Dhimsa",
    dancesHi: "कुचिपुड़ी, वीरनाट्यम, धीमसा",
    music: "Carnatic music, Burrakatha",
    musicHi: "कर्नाटक संगीत, बुर्रकथा",
    clothes: "Dharmavaram and Mangalagiri sarees",
    clothesHi: "धर्मावरम और मंगलगिरी साड़ियाँ",
    festivals: "Ugadi, Sankranti, Tirupati Brahmotsavam",
    festivalsHi: "उगादी, संक्रांति, तिरुपति ब्रह्मोत्सव",
    food: "Pulihora, Gongura Pachadi, Pootharekulu",
    foodHi: "पुलिहोरा, गोंगुरा पचड़ी, पूठरेकुलु",
    arts: "Kalamkari, Kondapalli toys, Etikoppaka toys",
    artsHi: "कलमकारी, कोंडापल्ली खिलौने, एटिकोप्पका खिलौने",
    places: "Tirupati, Amaravati, Araku Valley, Lepakshi",
    placesHi: "तिरुपति, अमरावती, अराकू घाटी, लेपाक्षी",
    nature: "Eastern Ghats, Krishna and Godavari rivers",
    natureHi: "पूर्वी घाट, कृष्णा और गोदावरी नदियाँ",
    speciality: "Kuchipudi dance and Kalamkari art",
    specialityHi: "कुचिपुड़ी नृत्य और कलमकारी कला"
  },
  {
    name: "Arunachal Pradesh",
    hi: "अरुणाचल प्रदेश",
    type: "state",
    capital: "Itanagar",
    capitalHi: "ईटानगर",
    languages: "Nyishi, Adi, Monpa, Hindi, English",
    languagesHi: "न्यीशी, आदि, मोनपा, हिंदी, अंग्रेज़ी",
    history: "Home to diverse indigenous communities and ancient monasteries.",
    historyHi: "विभिन्न आदिवासी समुदायों और प्राचीन मठों की भूमि।",
    dances: "Ponung, Bardo Chham, Aji Lamu",
    dancesHi: "पोनुंग, बार्डो छम, अजी लामू",
    music: "Traditional tribal songs and drums",
    musicHi: "पारंपरिक जनजातीय गीत और ढोल",
    clothes: "Handwoven tribal textiles",
    clothesHi: "हाथ से बुने जनजातीय वस्त्र",
    festivals: "Losar, Solung, Nyokum, Dree",
    festivalsHi: "लोसर, सोलुंग, न्योकुम, द्री",
    food: "Thukpa, Zan, Apong",
    foodHi: "थुकपा, ज़ान, अपोंग",
    arts: "Wood carving, bamboo and cane crafts",
    artsHi: "लकड़ी की नक्काशी, बाँस और बेंत के शिल्प",
    places: "Tawang Monastery, Ziro Valley, Sela Pass",
    placesHi: "तवांग मठ, ज़ीरो घाटी, सेला दर्रा",
    nature: "Eastern Himalayas, forests and rivers",
    natureHi: "पूर्वी हिमालय, जंगल और नदियाँ",
    speciality: "Indigenous cultures and mountain monasteries",
    specialityHi: "जनजातीय संस्कृतियाँ और पहाड़ी मठ"
  },
  {
    name: "Assam",
    hi: "असम",
    type: "state",
    capital: "Dispur",
    capitalHi: "दिसपुर",
    languages: "Assamese, Bodo, Bengali",
    languagesHi: "असमिया, बोडो, बंगाली",
    history: "Known for the Ahom Kingdom and ancient Kamrup heritage.",
    historyHi: "अहोम साम्राज्य और प्राचीन कामरूप की विरासत।",
    dances: "Bihu, Sattriya, Bagurumba",
    dancesHi: "बिहू, सत्रिया, बागुरुम्बा",
    music: "Bihu songs, Borgeet",
    musicHi: "बिहू गीत, बोरगीत",
    clothes: "Mekhela Chador, Muga silk",
    clothesHi: "मेखेला चादर, मूगा रेशम",
    festivals: "Rongali Bihu, Bhogali Bihu, Ambubachi Mela",
    festivalsHi: "रोंगाली बिहू, भोगाली बिहू, अंबुबाची मेला",
    food: "Khar, Masor Tenga, Pitha",
    foodHi: "खार, माछोर टेंगा, पीठा",
    arts: "Muga silk weaving, bamboo crafts",
    artsHi: "मूगा रेशम बुनाई, बाँस के शिल्प",
    places: "Kaziranga, Majuli, Kamakhya Temple",
    placesHi: "काजीरंगा, माजुली, कामाख्या मंदिर",
    nature: "Brahmaputra River, tea gardens, wetlands",
    natureHi: "ब्रह्मपुत्र नदी, चाय बागान, आर्द्रभूमियाँ",
    speciality: "Tea, Bihu and one-horned rhinoceros",
    specialityHi: "चाय, बिहू और एक सींग वाला गैंडा"
  },
  {
    name: "Bihar",
    hi: "बिहार",
    type: "state",
    capital: "Patna",
    capitalHi: "पटना",
    languages: "Hindi, Urdu, Maithili, Bhojpuri, Magahi, Angika",
    languagesHi: "हिंदी, उर्दू, मैथिली, भोजपुरी, मगही, अंगिका",
    history: "Ancient Magadha, Maurya and Gupta empires; birthplace of Buddhism and Jainism.",
    historyHi: "प्राचीन मगध, मौर्य और गुप्त साम्राज्य; बौद्ध और जैन धर्म की महत्वपूर्ण भूमि।",
    dances: "Jat-Jatin, Bidesia, Jhijhiya",
    dancesHi: "जट-जटिन, बिदेसिया, झिझिया",
    music: "Bhojpuri folk songs, Sohar, Chaita",
    musicHi: "भोजपुरी लोकगीत, सोहर, चैता",
    clothes: "Bhagalpuri silk, traditional dhoti and saree",
    clothesHi: "भागलपुरी रेशम, पारंपरिक धोती और साड़ी",
    festivals: "Chhath Puja, Sonepur Mela, Sama-Chakeva",
    festivalsHi: "छठ पूजा, सोनपुर मेला, सामा-चकेवा",
    food: "Litti Chokha, Thekua, Khaja, Sattu",
    foodHi: "लिट्टी चोखा, ठेकुआ, खाजा, सत्तू",
    arts: "Madhubani painting, Sujni embroidery, Manjusha art",
    artsHi: "मधुबनी चित्रकला, सुजनी कढ़ाई, मंजूषा कला",
    places: "Bodh Gaya, Nalanda, Rajgir, Vaishali, Patna Sahib",
    placesHi: "बोधगया, नालंदा, राजगीर, वैशाली, पटना साहिब",
    nature: "Ganga River, Valmiki Tiger Reserve, Kaimur hills",
    natureHi: "गंगा नदी, वाल्मीकि टाइगर रिजर्व, कैमूर पहाड़ियाँ",
    speciality: "Madhubani art, Chhath Puja and ancient universities",
    specialityHi: "मधुबनी कला, छठ पूजा और प्राचीन विश्वविद्यालय"
  },
  {
    name: "Chhattisgarh",
    hi: "छत्तीसगढ़",
    type: "state",
    capital: "Raipur",
    capitalHi: "रायपुर",
    languages: "Hindi, Chhattisgarhi, Gondi, Halbi",
    languagesHi: "हिंदी, छत्तीसगढ़ी, गोंडी, हल्बी",
    history: "Known for Dakshin Kosala and rich tribal heritage.",
    historyHi: "दक्षिण कोसल और समृद्ध जनजातीय विरासत के लिए प्रसिद्ध।",
    dances: "Panthi, Raut Nacha, Sua, Karma",
    dancesHi: "पंथी, राउत नाचा, सुआ, करमा",
    music: "Pandwani, folk songs",
    musicHi: "पंडवानी, लोकगीत",
    clothes: "Kosa silk sarees and traditional tribal attire",
    clothesHi: "कोसा रेशम की साड़ियाँ और जनजातीय वस्त्र",
    festivals: "Bastar Dussehra, Hareli, Madai",
    festivalsHi: "बस्तर दशहरा, हरेली, मड़ई",
    food: "Chila, Faraa, Bafauri",
    foodHi: "चीला, फरा, बफौरी",
    arts: "Bastar Dhokra, wooden crafts, bell metal work",
    artsHi: "बस्तर ढोकरा, लकड़ी के शिल्प, घंटी धातु कला",
    places: "Chitrakote Falls, Sirpur, Bastar",
    placesHi: "चित्रकोट जलप्रपात, सिरपुर, बस्तर",
    nature: "Waterfalls, forests, Indravati River",
    natureHi: "जलप्रपात, जंगल, इंद्रावती नदी",
    speciality: "Bastar Dussehra and tribal crafts",
    specialityHi: "बस्तर दशहरा और जनजातीय शिल्प"
  },
  {
    name: "Goa",
    hi: "गोवा",
    type: "state",
    capital: "Panaji",
    capitalHi: "पणजी",
    languages: "Konkani, Marathi, English",
    languagesHi: "कोंकणी, मराठी, अंग्रेज़ी",
    history: "Known for Kadamba heritage and Portuguese colonial history.",
    historyHi: "कदंब विरासत और पुर्तगाली औपनिवेशिक इतिहास।",
    dances: "Fugdi, Dhalo, Dekhni, Kunbi",
    dancesHi: "फुगड़ी, धालो, देखनी, कुणबी",
    music: "Mando, Dulpod",
    musicHi: "मांडो, दुलपोद",
    clothes: "Kunbi saree and traditional coastal attire",
    clothesHi: "कुणबी साड़ी और पारंपरिक तटीय वस्त्र",
    festivals: "Goa Carnival, Shigmo, Sao Joao",
    festivalsHi: "गोवा कार्निवल, शिगमो, साओ जोआओ",
    food: "Fish Curry Rice, Bebinca, Xacuti",
    foodHi: "फिश करी राइस, बेबिंका, शाकुती",
    arts: "Azulejos tiles, coconut crafts",
    artsHi: "अज़ुलेजो टाइल कला, नारियल के शिल्प",
    places: "Basilica of Bom Jesus, Fort Aguada, beaches",
    placesHi: "बोम जीसस बेसिलिका, अगुआड़ा किला, समुद्र तट",
    nature: "Western Ghats, beaches, mangroves",
    natureHi: "पश्चिमी घाट, समुद्र तट, मैंग्रोव",
    speciality: "Coastal culture, Carnival and seafood cuisine",
    specialityHi: "तटीय संस्कृति, कार्निवल और समुद्री भोजन"
  },
  {
    name: "Gujarat",
    hi: "गुजरात",
    type: "state",
    capital: "Gandhinagar",
    capitalHi: "गांधीनगर",
    languages: "Gujarati, Kutchi, Hindi",
    languagesHi: "गुजराती, कच्छी, हिंदी",
    history: "Home to the Indus Valley site of Lothal and historic trading ports.",
    historyHi: "लोथल जैसे सिंधु घाटी स्थल और ऐतिहासिक व्यापारिक बंदरगाहों की भूमि।",
    dances: "Garba, Dandiya Raas, Tippani",
    dancesHi: "गरबा, डांडिया रास, टिपणी",
    music: "Dayro, Bhavai songs",
    musicHi: "डायरो, भवई गीत",
    clothes: "Chaniya Choli, Bandhani, Patola",
    clothesHi: "चनिया चोली, बांधनी, पटोला",
    festivals: "Navratri, Uttarayan, Rann Utsav",
    festivalsHi: "नवरात्रि, उत्तरायण, रण उत्सव",
    food: "Dhokla, Thepla, Undhiyu, Fafda",
    foodHi: "ढोकला, थेपला, उंधियू, फाफड़ा",
    arts: "Rogan art, Patola weaving, Bandhani",
    artsHi: "रोगन कला, पटोला बुनाई, बांधनी",
    places: "Somnath, Dwarka, Rann of Kutch, Statue of Unity",
    placesHi: "सोमनाथ, द्वारका, कच्छ का रण, स्टैच्यू ऑफ यूनिटी",
    nature: "Gir Forest, Rann of Kutch, Narmada River",
    natureHi: "गिर वन, कच्छ का रण, नर्मदा नदी",
    speciality: "Garba, Patola textiles and white desert",
    specialityHi: "गरबा, पटोला वस्त्र और सफेद रेगिस्तान"
  },
  {
    name: "Haryana",
    hi: "हरियाणा",
    type: "state",
    capital: "Chandigarh",
    capitalHi: "चंडीगढ़",
    languages: "Hindi, Haryanvi, Punjabi",
    languagesHi: "हिंदी, हरियाणवी, पंजाबी",
    history: "Associated with the ancient Kurukshetra region and Vedic traditions.",
    historyHi: "प्राचीन कुरुक्षेत्र क्षेत्र और वैदिक परंपराओं से जुड़ा प्रदेश।",
    dances: "Phag, Dhamal, Khoria, Loor",
    dancesHi: "फाग, धमाल, खोरिया, लूर",
    music: "Ragini, Saang",
    musicHi: "रागिनी, सांग",
    clothes: "Ghagra, Odhni, traditional dhoti",
    clothesHi: "घाघरा, ओढ़नी, पारंपरिक धोती",
    festivals: "Teej, Surajkund Mela, Gita Jayanti",
    festivalsHi: "तीज, सूरजकुंड मेला, गीता जयंती",
    food: "Bajra Khichdi, Bajra Roti, Churma",
    foodHi: "बाजरे की खिचड़ी, बाजरे की रोटी, चूरमा",
    arts: "Phulkari, pottery, handloom",
    artsHi: "फुलकारी, मिट्टी के बर्तन, हथकरघा",
    places: "Kurukshetra, Pinjore Gardens, Sultanpur National Park",
    placesHi: "कुरुक्षेत्र, पिंजौर गार्डन, सुल्तानपुर राष्ट्रीय उद्यान",
    nature: "Aravalli hills, agricultural plains",
    natureHi: "अरावली पहाड़ियाँ, कृषि मैदान",
    speciality: "Traditional wrestling, folk theatre and agriculture",
    specialityHi: "पारंपरिक कुश्ती, लोकनाट्य और कृषि"
  },
  {
    name: "Himachal Pradesh",
    hi: "हिमाचल प्रदेश",
    type: "state",
    capital: "Shimla (Summer), Dharamshala (Winter)",
    capitalHi: "शिमला (ग्रीष्मकालीन), धर्मशाला (शीतकालीन)",
    languages: "Hindi, Pahari languages, Kangri, Kinnauri",
    languagesHi: "हिंदी, पहाड़ी भाषाएँ, कांगड़ी, किन्नौरी",
    history: "Known for ancient hill kingdoms and Himalayan traditions.",
    historyHi: "प्राचीन पहाड़ी रियासतों और हिमालयी परंपराओं के लिए प्रसिद्ध।",
    dances: "Nati, Chham, Kayang",
    dancesHi: "नाटी, छम, कयांग",
    music: "Jhoori, traditional folk songs",
    musicHi: "झूरी, पारंपरिक लोकगीत",
    clothes: "Kullu caps, woollen shawls, Pattu",
    clothesHi: "कुल्लू टोपी, ऊनी शॉल, पट्टू",
    festivals: "Kullu Dussehra, Minjar Fair, Losar",
    festivalsHi: "कुल्लू दशहरा, मिंजर मेला, लोसर",
    food: "Dham, Siddu, Madra",
    foodHi: "धाम, सिड्डू, मदरा",
    arts: "Kullu shawls, Chamba rumal, Kangra painting",
    artsHi: "कुल्लू शॉल, चंबा रुमाल, कांगड़ा चित्रकला",
    places: "Shimla, Manali, Dharamshala, Spiti",
    placesHi: "शिमला, मनाली, धर्मशाला, स्पीति",
    nature: "Himalayas, Beas River, mountain forests",
    natureHi: "हिमालय, ब्यास नदी, पहाड़ी जंगल",
    speciality: "Mountain culture, wool crafts and Nati dance",
    specialityHi: "पहाड़ी संस्कृति, ऊनी शिल्प और नाटी नृत्य"
  },
  {
    name: "Jharkhand",
    hi: "झारखंड",
    type: "state",
    capital: "Ranchi",
    capitalHi: "राँची",
    languages: "Hindi, Santali, Mundari, Ho, Kurukh, Nagpuri",
    languagesHi: "हिंदी, संताली, मुंडारी, हो, कुड़ुख, नागपुरी",
    history: "Rich in tribal history, forest traditions and mineral heritage.",
    historyHi: "जनजातीय इतिहास, वन परंपराओं और खनिज संपदा की भूमि।",
    dances: "Chhau, Jhumair, Paika, Santhali dance",
    dancesHi: "छऊ, झूमर, पाइका, संथाली नृत्य",
    music: "Domkach songs, Jhumair songs",
    musicHi: "डोमकच गीत, झूमर गीत",
    clothes: "Panchi-Parhan, tribal ornaments",
    clothesHi: "पंची-परहन, जनजातीय आभूषण",
    festivals: "Sarhul, Karma, Sohrai, Tusu",
    festivalsHi: "सरहुल, करमा, सोहराय, टुसू",
    food: "Dhuska, Chilka Roti, Rugra",
    foodHi: "धुस्का, चिलका रोटी, रुगड़ा",
    arts: "Sohrai painting, tribal wood crafts",
    artsHi: "सोहराय चित्रकला, जनजातीय लकड़ी के शिल्प",
    places: "Hundru Falls, Betla National Park, Deoghar",
    placesHi: "हुंडरू जलप्रपात, बेतला राष्ट्रीय उद्यान, देवघर",
    nature: "Chota Nagpur Plateau, forests, waterfalls",
    natureHi: "छोटानागपुर पठार, जंगल, जलप्रपात",
    speciality: "Tribal festivals and Sohrai art",
    specialityHi: "जनजातीय त्योहार और सोहराय कला"
  },
  {
    name: "Karnataka",
    hi: "कर्नाटक",
    type: "state",
    capital: "Bengaluru",
    capitalHi: "बेंगलुरु",
    languages: "Kannada, Tulu, Konkani, Kodava",
    languagesHi: "कन्नड़, तुलु, कोंकणी, कोडवा",
    history: "Known for the Chalukya, Hoysala, Vijayanagara and Mysore kingdoms.",
    historyHi: "चालुक्य, होयसला, विजयनगर और मैसूर साम्राज्यों की विरासत।",
    dances: "Yakshagana, Dollu Kunitha, Veeragase",
    dancesHi: "यक्षगान, डोल्लू कुनिथा, वीरगासे",
    music: "Carnatic music, Gamaka",
    musicHi: "कर्नाटक संगीत, गमक",
    clothes: "Mysore silk saree, Ilkal saree",
    clothesHi: "मैसूर रेशम साड़ी, इलकल साड़ी",
    festivals: "Mysuru Dasara, Ugadi, Karaga",
    festivalsHi: "मैसूर दशहरा, उगादी, करगा",
    food: "Bisi Bele Bath, Mysore Pak, Ragi Mudde",
    foodHi: "बिसी बेले भात, मैसूर पाक, रागी मुद्दे",
    arts: "Mysore painting, sandalwood carving",
    artsHi: "मैसूर चित्रकला, चंदन की नक्काशी",
    places: "Hampi, Mysore Palace, Badami, Belur",
    placesHi: "हम्पी, मैसूर महल, बादामी, बेलूर",
    nature: "Western Ghats, Jog Falls, Cauvery River",
    natureHi: "पश्चिमी घाट, जोग जलप्रपात, कावेरी नदी",
    speciality: "Hampi heritage, Yakshagana and Mysore silk",
    specialityHi: "हम्पी विरासत, यक्षगान और मैसूर रेशम"
  },
  {
    name: "Kerala",
    hi: "केरल",
    type: "state",
    capital: "Thiruvananthapuram",
    capitalHi: "तिरुवनंतपुरम",
    languages: "Malayalam, Tamil",
    languagesHi: "मलयालम, तमिल",
    history: "Known for Chera heritage, maritime trade and spice routes.",
    historyHi: "चेर वंश, समुद्री व्यापार और मसालों के पुराने मार्गों की विरासत।",
    dances: "Kathakali, Mohiniyattam, Theyyam, Thiruvathira",
    dancesHi: "कथकली, मोहिनीअट्टम, थेय्यम, तिरुवातिरा",
    music: "Sopana Sangeetham, traditional percussion",
    musicHi: "सोपान संगीत, पारंपरिक ताल वाद्य",
    clothes: "Kasavu saree, Mundu",
    clothesHi: "कसावु साड़ी, मुंडु",
    festivals: "Onam, Vishu, Thrissur Pooram",
    festivalsHi: "ओणम, विषु, त्रिशूर पूरम",
    food: "Appam, Puttu, Kerala Sadya",
    foodHi: "अप्पम, पुट्टु, केरल सद्या",
    arts: "Coir crafts, mural painting, wood carving",
    artsHi: "नारियल रेशा शिल्प, भित्तिचित्र, लकड़ी की नक्काशी",
    places: "Alleppey, Munnar, Fort Kochi, Sabarimala",
    placesHi: "अलप्पुझा, मुन्नार, फोर्ट कोच्चि, सबरीमाला",
    nature: "Backwaters, Western Ghats, Periyar forests",
    natureHi: "बैकवाटर, पश्चिमी घाट, पेरियार के जंगल",
    speciality: "Backwaters, Kathakali and Ayurveda heritage",
    specialityHi: "बैकवाटर, कथकली और आयुर्वेदिक विरासत"
  },
  {
    name: "Madhya Pradesh",
    hi: "मध्य प्रदेश",
    type: "state",
    capital: "Bhopal",
    capitalHi: "भोपाल",
    languages: "Hindi, Bundeli, Malvi, Bagheli, Nimadi",
    languagesHi: "हिंदी, बुंदेली, मालवी, बघेली, निमाड़ी",
    history: "Home to ancient Avanti, Paramara and Chandela heritage.",
    historyHi: "प्राचीन अवंति, परमार और चंदेल विरासत की भूमि।",
    dances: "Matki, Rai, Grida, Bhagoria",
    dancesHi: "मटकी, राई, ग्रिडा, भगोरिया",
    music: "Bundeli folk songs, Alha",
    musicHi: "बुंदेली लोकगीत, आल्हा",
    clothes: "Chanderi and Maheshwari sarees",
    clothesHi: "चंदेरी और महेश्वरी साड़ियाँ",
    festivals: "Khajuraho Dance Festival, Bhagoria, Tansen Samaroh",
    festivalsHi: "खजुराहो नृत्य महोत्सव, भगोरिया, तानसेन समारोह",
    food: "Poha, Bhutte ka Kees, Dal Bafla",
    foodHi: "पोहा, भुट्टे का कीस, दाल बाफला",
    arts: "Gond painting, Bagh print, Chanderi weaving",
    artsHi: "गोंड चित्रकला, बाघ प्रिंट, चंदेरी बुनाई",
    places: "Khajuraho, Sanchi, Bhimbetka, Orchha",
    placesHi: "खजुराहो, साँची, भीमबेटका, ओरछा",
    nature: "Narmada River, Satpura, Kanha and Bandhavgarh",
    natureHi: "नर्मदा नदी, सतपुड़ा, कान्हा और बांधवगढ़",
    speciality: "Khajuraho temples, Gond art and tiger reserves",
    specialityHi: "खजुराहो मंदिर, गोंड कला और बाघ अभयारण्य"
  },
  {
    name: "Maharashtra",
    hi: "महाराष्ट्र",
    type: "state",
    capital: "Mumbai",
    capitalHi: "मुंबई",
    languages: "Marathi, Hindi, Konkani",
    languagesHi: "मराठी, हिंदी, कोंकणी",
    history: "Known for the Maratha Empire and Chhatrapati Shivaji Maharaj.",
    historyHi: "मराठा साम्राज्य और छत्रपति शिवाजी महाराज की विरासत।",
    dances: "Lavani, Koli, Lezim, Tamasha",
    dancesHi: "लावणी, कोली, लेज़िम, तमाशा",
    music: "Powada, Bharud, Abhang",
    musicHi: "पोवाड़ा, भारुड, अभंग",
    clothes: "Nauvari saree, Paithani, pheta",
    clothesHi: "नौवारी साड़ी, पैठणी, फेटा",
    festivals: "Ganesh Chaturthi, Gudi Padwa, Pandharpur Wari",
    festivalsHi: "गणेश चतुर्थी, गुड़ी पड़वा, पंढरपुर वारी",
    food: "Vada Pav, Misal Pav, Puran Poli",
    foodHi: "वड़ा पाव, मिसल पाव, पुरण पोली",
    arts: "Warli painting, Paithani weaving",
    artsHi: "वारली चित्रकला, पैठणी बुनाई",
    places: "Ajanta, Ellora, Gateway of India, Raigad",
    placesHi: "अजंता, एलोरा, गेटवे ऑफ इंडिया, रायगढ़",
    nature: "Sahyadri mountains, Konkan coast, Tadoba",
    natureHi: "सह्याद्रि पर्वत, कोंकण तट, ताडोबा",
    speciality: "Maratha forts, Lavani and Warli art",
    specialityHi: "मराठा किले, लावणी और वारली कला"
  },
  {
    name: "Manipur",
    hi: "मणिपुर",
    type: "state",
    capital: "Imphal",
    capitalHi: "इंफाल",
    languages: "Meitei (Manipuri), English, tribal languages",
    languagesHi: "मैतेई (मणिपुरी), अंग्रेज़ी, जनजातीय भाषाएँ",
    history: "Known for the ancient Kangleipak kingdom and Vaishnav traditions.",
    historyHi: "प्राचीन कांगलेइपाक राज्य और वैष्णव परंपराओं की विरासत।",
    dances: "Manipuri Raas Leela, Pung Cholom, Thang-Ta",
    dancesHi: "मणिपुरी रासलीला, पुंग चोलोम, थांग-टा",
    music: "Nata Sankirtana, Pena music",
    musicHi: "नाटा संकीर्तन, पेना संगीत",
    clothes: "Phanek, Innaphi",
    clothesHi: "फानेक, इन्नाफी",
    festivals: "Yaoshang, Lai Haraoba, Ningol Chakouba",
    festivalsHi: "याओशांग, लाई हराओबा, निंगोल चाकौबा",
    food: "Eromba, Chamthong, Singju",
    foodHi: "एरोम्बा, चामथोंग, सिंग्जू",
    arts: "Kauna reed crafts, handloom weaving",
    artsHi: "कौना घास शिल्प, हथकरघा बुनाई",
    places: "Loktak Lake, Kangla Fort, Ima Market",
    placesHi: "लोकटक झील, कांगला किला, इमा मार्केट",
    nature: "Loktak Lake, floating phumdis, hills",
    natureHi: "लोकटक झील, तैरते फुमदी, पहाड़ियाँ",
    speciality: "Raas Leela and floating Loktak ecosystem",
    specialityHi: "रासलीला और लोकटक का तैरता पारिस्थितिकी तंत्र"
  },
  {
    name: "Meghalaya",
    hi: "मेघालय",
    type: "state",
    capital: "Shillong",
    capitalHi: "शिलांग",
    languages: "Khasi, Garo, Pnar, English",
    languagesHi: "खासी, गारो, प्नार, अंग्रेज़ी",
    history: "Home to Khasi, Garo and Jaintia traditional kingdoms.",
    historyHi: "खासी, गारो और जयंतिया पारंपरिक समुदायों की भूमि।",
    dances: "Wangala, Shad Suk Mynsiem, Nongkrem",
    dancesHi: "वांगला, शाद सुक मिंसिएम, नोंगक्रेम",
    music: "Traditional Khasi and Garo songs",
    musicHi: "पारंपरिक खासी और गारो गीत",
    clothes: "Jainsem, Dakmanda",
    clothesHi: "जैनसेम, दकमांडा",
    festivals: "Wangala, Shad Suk Mynsiem, Behdienkhlam",
    festivalsHi: "वांगला, शाद सुक मिंसिएम, बेहदिएंखलाम",
    food: "Jadoh, Dohneiiong, Tungrymbai",
    foodHi: "जादोह, दोहनेइयोंग, तुंगरिमबाई",
    arts: "Bamboo crafts, cane weaving",
    artsHi: "बाँस के शिल्प, बेंत की बुनाई",
    places: "Cherrapunji, Dawki, Mawlynnong",
    placesHi: "चेरापूंजी, दावकी, मावलिननॉन्ग",
    nature: "Living root bridges, waterfalls, caves",
    natureHi: "जीवित जड़ पुल, जलप्रपात, गुफाएँ",
    speciality: "Living root bridges and heavy monsoon landscapes",
    specialityHi: "जीवित जड़ पुल और वर्षा से भरपूर प्राकृतिक दृश्य"
  },
  {
    name: "Mizoram",
    hi: "मिज़ोरम",
    type: "state",
    capital: "Aizawl",
    capitalHi: "आइजोल",
    languages: "Mizo, English, Hmar, Lai",
    languagesHi: "मिज़ो, अंग्रेज़ी, हमर, लाई",
    history: "Known for Mizo community traditions and hill settlements.",
    historyHi: "मिज़ो समुदाय की परंपराओं और पहाड़ी बस्तियों की विरासत।",
    dances: "Cheraw, Khuallam, Chheihlam",
    dancesHi: "चेराव, खुआल्लम, छेइहलाम",
    music: "Mizo folk songs",
    musicHi: "मिज़ो लोकगीत",
    clothes: "Puanchei, traditional puan",
    clothesHi: "पुआनचेई, पारंपरिक पुआन",
    festivals: "Chapchar Kut, Mim Kut, Pawl Kut",
    festivalsHi: "चपचार कुट, मिम कुट, पावल कुट",
    food: "Bai, Sawhchiar",
    foodHi: "बाई, सावचियार",
    arts: "Handloom weaving, bamboo crafts",
    artsHi: "हथकरघा बुनाई, बाँस के शिल्प",
    places: "Aizawl, Reiek, Vantawng Falls",
    placesHi: "आइजोल, रेइक, वंतावंग जलप्रपात",
    nature: "Blue Mountain, forests and hills",
    natureHi: "ब्लू माउंटेन, जंगल और पहाड़ियाँ",
    speciality: "Cheraw bamboo dance and handwoven textiles",
    specialityHi: "चेराव बाँस नृत्य और हाथ से बुने वस्त्र"
  },
  {
    name: "Nagaland",
    hi: "नागालैंड",
    type: "state",
    capital: "Kohima",
    capitalHi: "कोहिमा",
    languages: "English, Nagamese, Ao, Angami, Sumi",
    languagesHi: "अंग्रेज़ी, नागामीज़, आओ, अंगामी, सूमी",
    history: "Known for diverse Naga communities and village traditions.",
    historyHi: "विभिन्न नागा समुदायों और गाँवों की परंपराओं के लिए प्रसिद्ध।",
    dances: "Chang Lo, Zeliang, warrior dances",
    dancesHi: "चांग लो, जेलियांग, योद्धा नृत्य",
    music: "Naga folk songs and choral traditions",
    musicHi: "नागा लोकगीत और सामूहिक गायन परंपराएँ",
    clothes: "Naga shawls and traditional ornaments",
    clothesHi: "नागा शॉल और पारंपरिक आभूषण",
    festivals: "Hornbill Festival, Moatsu, Sekrenyi",
    festivalsHi: "हॉर्नबिल महोत्सव, मोआत्सु, सेक्रेनी",
    food: "Smoked pork, bamboo shoot dishes, Axone",
    foodHi: "स्मोक्ड पोर्क, बाँस की कोपलों के व्यंजन, अक्षोने",
    arts: "Wood carving, beadwork, bamboo crafts",
    artsHi: "लकड़ी की नक्काशी, मनके का काम, बाँस के शिल्प",
    places: "Kohima War Cemetery, Dzukou Valley, Kisama",
    placesHi: "कोहिमा युद्ध स्मारक, जुकू घाटी, किसामा",
    nature: "Patkai Range, Dzukou Valley, forests",
    natureHi: "पटकोई पर्वत श्रृंखला, जुकू घाटी, जंगल",
    speciality: "Hornbill Festival and Naga shawl designs",
    specialityHi: "हॉर्नबिल महोत्सव और नागा शॉल की डिज़ाइन"
  },
  {
    name: "Odisha",
    hi: "ओडिशा",
    type: "state",
    capital: "Bhubaneswar",
    capitalHi: "भुवनेश्वर",
    languages: "Odia, Sambalpuri, Kui, Santali",
    languagesHi: "ओड़िया, संबलपुरी, कुई, संताली",
    history: "Known for Kalinga, ancient maritime trade and temple architecture.",
    historyHi: "कलिंग, प्राचीन समुद्री व्यापार और मंदिर स्थापत्य की विरासत।",
    dances: "Odissi, Gotipua, Chhau, Ghumura",
    dancesHi: "ओडिसी, गोटीपुआ, छऊ, घुमुरा",
    music: "Odissi music, Pala",
    musicHi: "ओडिसी संगीत, पाला",
    clothes: "Sambalpuri, Bomkai and Kotpad sarees",
    clothesHi: "संबलपुरी, बोमकाई और कोटपाड़ साड़ियाँ",
    festivals: "Rath Yatra, Raja Parba, Bali Jatra",
    festivalsHi: "रथ यात्रा, राजा पर्व, बाली यात्रा",
    food: "Pakhala Bhata, Chhena Poda, Dalma",
    foodHi: "पखाला भात, छेना पोड़ा, दालमा",
    arts: "Pattachitra, applique work, stone carving",
    artsHi: "पट्टचित्र, एप्लिक कला, पत्थर की नक्काशी",
    places: "Konark Sun Temple, Puri, Chilika Lake",
    placesHi: "कोणार्क सूर्य मंदिर, पुरी, चिलिका झील",
    nature: "Chilika Lake, Similipal, Mahanadi River",
    natureHi: "चिलिका झील, सिमिलिपाल, महानदी नदी",
    speciality: "Odissi dance, Jagannath culture and Pattachitra",
    specialityHi: "ओडिसी नृत्य, जगन्नाथ संस्कृति और पट्टचित्र"
  },
  {
    name: "Punjab",
    hi: "पंजाब",
    type: "state",
    capital: "Chandigarh",
    capitalHi: "चंडीगढ़",
    languages: "Punjabi, Hindi",
    languagesHi: "पंजाबी, हिंदी",
    history: "Known for the Sikh Gurus, Sikh Empire and rich agricultural history.",
    historyHi: "सिख गुरुओं, सिख साम्राज्य और कृषि परंपरा की भूमि।",
    dances: "Bhangra, Giddha, Jhumar, Sammi",
    dancesHi: "भांगड़ा, गिद्धा, झूमर, सम्मी",
    music: "Gurbani Kirtan, Tumbi folk music",
    musicHi: "गुरबानी कीर्तन, तुम्बी लोक संगीत",
    clothes: "Salwar Kameez, Phulkari, turban",
    clothesHi: "सलवार कमीज़, फुलकारी, पगड़ी",
    festivals: "Baisakhi, Lohri, Hola Mohalla",
    festivalsHi: "बैसाखी, लोहड़ी, होला मोहल्ला",
    food: "Sarson da Saag, Makki di Roti, Amritsari Kulcha",
    foodHi: "सरसों का साग, मक्की की रोटी, अमृतसरी कुलचा",
    arts: "Phulkari embroidery, woodwork",
    artsHi: "फुलकारी कढ़ाई, लकड़ी का काम",
    places: "Golden Temple, Jallianwala Bagh, Anandpur Sahib",
    placesHi: "स्वर्ण मंदिर, जलियाँवाला बाग, आनंदपुर साहिब",
    nature: "Five river plains, Harike Wetland",
    natureHi: "पाँच नदियों का मैदान, हरिके आर्द्रभूमि",
    speciality: "Bhangra, Phulkari and Sikh heritage",
    specialityHi: "भांगड़ा, फुलकारी और सिख विरासत"
  },
  {
    name: "Rajasthan",
    hi: "राजस्थान",
    type: "state",
    capital: "Jaipur",
    capitalHi: "जयपुर",
    languages: "Hindi, Rajasthani varieties, Marwari, Mewari, Dhundhari",
    languagesHi: "हिंदी, राजस्थानी भाषिक रूप, मारवाड़ी, मेवाड़ी, ढूंढाड़ी",
    history: "Known for Rajput kingdoms, forts and desert trade routes.",
    historyHi: "राजपूत रियासतों, किलों और रेगिस्तानी व्यापार मार्गों की विरासत।",
    dances: "Ghoomar, Kalbelia, Bhavai, Chari",
    dancesHi: "घूमर, कालबेलिया, भवई, चरी",
    music: "Maand, Panihari songs, Manganiyar music",
    musicHi: "मांड, पनिहारी गीत, मांगणियार संगीत",
    clothes: "Bandhani, Leheriya, Ghagra Choli, Safa",
    clothesHi: "बंधेज, लहरिया, घाघरा चोली, साफा",
    festivals: "Gangaur, Teej, Pushkar Fair, Desert Festival",
    festivalsHi: "गणगौर, तीज, पुष्कर मेला, मरु महोत्सव",
    food: "Dal Baati Churma, Gatte ki Sabzi, Ghewar",
    foodHi: "दाल बाटी चूरमा, गट्टे की सब्ज़ी, घेवर",
    arts: "Blue pottery, miniature painting, block printing",
    artsHi: "ब्लू पॉटरी, लघु चित्रकला, ब्लॉक प्रिंटिंग",
    places: "Jaipur, Udaipur, Jaisalmer, Jodhpur, Chittorgarh",
    placesHi: "जयपुर, उदयपुर, जैसलमेर, जोधपुर, चित्तौड़गढ़",
    nature: "Thar Desert, Aravalli Range, Keoladeo National Park",
    natureHi: "थार रेगिस्तान, अरावली पर्वतमाला, केवलादेव राष्ट्रीय उद्यान",
    speciality: "Forts, desert culture, folk music and colourful crafts",
    specialityHi: "किले, रेगिस्तानी संस्कृति, लोक संगीत और रंगीन शिल्प"
  },
  {
    name: "Sikkim",
    hi: "सिक्किम",
    type: "state",
    capital: "Gangtok",
    capitalHi: "गंगटोक",
    languages: "Nepali, Sikkimese, Lepcha, English",
    languagesHi: "नेपाली, सिक्किमी, लेपचा, अंग्रेज़ी",
    history: "Former Himalayan kingdom with Buddhist and Lepcha heritage.",
    historyHi: "बौद्ध और लेपचा विरासत वाला पूर्व हिमालयी राज्य।",
    dances: "Singhi Chham, Maruni, Yak dance",
    dancesHi: "सिंघी छम, मारुनी, याक नृत्य",
    music: "Traditional Lepcha and Bhutia songs",
    musicHi: "पारंपरिक लेपचा और भूटिया गीत",
    clothes: "Bakhu, Kho, Pharia",
    clothesHi: "बाखू, खो, फरिया",
    festivals: "Losar, Losoong, Saga Dawa, Pang Lhabsol",
    festivalsHi: "लोसर, लोसूंग, सागा दावा, पांग ल्हाबसोल",
    food: "Momos, Thukpa, Gundruk",
    foodHi: "मोमोज, थुकपा, गुंद्रुक",
    arts: "Thangka painting, carpet weaving",
    artsHi: "थंका चित्रकला, कालीन बुनाई",
    places: "Tsomgo Lake, Nathula Pass, Rumtek Monastery",
    placesHi: "छांगू झील, नाथू ला दर्रा, रुमटेक मठ",
    nature: "Kangchenjunga, glaciers, alpine forests",
    natureHi: "कंचनजंघा, हिमनद, अल्पाइन जंगल",
    speciality: "Himalayan biodiversity and Buddhist monasteries",
    specialityHi: "हिमालयी जैव विविधता और बौद्ध मठ"
  },
  {
    name: "Tamil Nadu",
    hi: "तमिलनाडु",
    type: "state",
    capital: "Chennai",
    capitalHi: "चेन्नई",
    languages: "Tamil, Telugu, Kannada, Urdu",
    languagesHi: "तमिल, तेलुगु, कन्नड़, उर्दू",
    history: "Known for Chola, Chera and Pandya dynasties.",
    historyHi: "चोल, चेर और पांड्य राजवंशों की विरासत।",
    dances: "Bharatanatyam, Karagattam, Kavadi Attam",
    dancesHi: "भरतनाट्यम, करगट्टम, कावड़ी अट्टम",
    music: "Carnatic music, Tamil folk music",
    musicHi: "कर्नाटक संगीत, तमिल लोक संगीत",
    clothes: "Kanchipuram silk saree, Veshti",
    clothesHi: "कांचीपुरम रेशम साड़ी, वेष्टी",
    festivals: "Pongal, Tamil New Year, Thaipusam",
    festivalsHi: "पोंगल, तमिल नववर्ष, थाईपूसम",
    food: "Idli, Dosa, Pongal, Chettinad cuisine",
    foodHi: "इडली, डोसा, पोंगल, चेट्टीनाड व्यंजन",
    arts: "Tanjore painting, bronze casting, stone carving",
    artsHi: "तंजावुर चित्रकला, कांस्य ढलाई, पत्थर की नक्काशी",
    places: "Mahabalipuram, Madurai, Thanjavur, Rameswaram",
    placesHi: "महाबलीपुरम, मदुरै, तंजावुर, रामेश्वरम",
    nature: "Nilgiri Hills, Marina Beach, Cauvery Delta",
    natureHi: "नीलगिरि पहाड़ियाँ, मरीना बीच, कावेरी डेल्टा",
    speciality: "Dravidian temples, Bharatanatyam and classical music",
    specialityHi: "द्रविड़ मंदिर, भरतनाट्यम और शास्त्रीय संगीत"
  },
  {
    name: "Telangana",
    hi: "तेलंगाना",
    type: "state",
    capital: "Hyderabad",
    capitalHi: "हैदराबाद",
    languages: "Telugu, Urdu, Lambadi",
    languagesHi: "तेलुगु, उर्दू, लंबाड़ी",
    history: "Known for Kakatiya, Qutb Shahi and Asaf Jahi heritage.",
    historyHi: "काकतीय, कुतुबशाही और आसफ जाही विरासत की भूमि।",
    dances: "Perini Shivatandavam, Lambadi, Gussadi",
    dancesHi: "पेरीनी शिवतांडवम, लंबाड़ी, गुस्साड़ी",
    music: "Oggu Katha, folk ballads",
    musicHi: "ओग्गु कथा, लोक गाथाएँ",
    clothes: "Pochampally ikat, Gadwal sarees",
    clothesHi: "पोचमपल्ली इकत, गडवाल साड़ियाँ",
    festivals: "Bathukamma, Bonalu, Sammakka Saralamma Jatara",
    festivalsHi: "बथुकम्मा, बोनालु, सम्मक्का सरलम्मा जातरा",
    food: "Hyderabadi Biryani, Sarva Pindi, Sakinalu",
    foodHi: "हैदराबादी बिरयानी, सर्वपिंडी, सकिनालु",
    arts: "Cheriyal scroll painting, Nirmal painting",
    artsHi: "चेरियाल स्क्रॉल चित्रकला, निर्मल चित्रकला",
    places: "Charminar, Golconda Fort, Ramappa Temple",
    placesHi: "चारमीनार, गोलकुंडा किला, रामप्पा मंदिर",
    nature: "Godavari and Krishna rivers, Deccan Plateau",
    natureHi: "गोदावरी और कृष्णा नदियाँ, दक्कन का पठार",
    speciality: "Bathukamma, Hyderabadi cuisine and historic forts",
    specialityHi: "बथुकम्मा, हैदराबादी भोजन और ऐतिहासिक किले"
  },
  {
    name: "Tripura",
    hi: "त्रिपुरा",
    type: "state",
    capital: "Agartala",
    capitalHi: "अगरतला",
    languages: "Bengali, Kokborok, Manipuri",
    languagesHi: "बंगाली, कोकबोरोक, मणिपुरी",
    history: "Known for the Manikya dynasty and indigenous communities.",
    historyHi: "माणिक्य राजवंश और मूल निवासी समुदायों की विरासत।",
    dances: "Hojagiri, Garia, Lebang Boomani",
    dancesHi: "होजागिरी, गारिया, लेबांग बूमानी",
    music: "Traditional Kokborok folk songs",
    musicHi: "पारंपरिक कोकबोरोक लोकगीत",
    clothes: "Rignai, Risa, Rikutu",
    clothesHi: "रिगनाई, रिसा, रिकुटु",
    festivals: "Kharchi Puja, Garia Puja, Ker Puja",
    festivalsHi: "खारची पूजा, गारिया पूजा, केर पूजा",
    food: "Mui Borok, Chakhwi, Wahan Mosdeng",
    foodHi: "मुई बोरोख, चाखवी, वाहन मोसदेंग",
    arts: "Bamboo and cane crafts, handloom",
    artsHi: "बाँस और बेंत के शिल्प, हथकरघा",
    places: "Ujjayanta Palace, Neermahal, Unakoti",
    placesHi: "उज्जयंता महल, नीरमहल, उनाकोटी",
    nature: "Jampui Hills, Gumti River, forests",
    natureHi: "जंपुई पहाड़ियाँ, गुमटी नदी, जंगल",
    speciality: "Hojagiri dance and bamboo crafts",
    specialityHi: "होजागिरी नृत्य और बाँस के शिल्प"
  },
  {
    name: "Uttar Pradesh",
    hi: "उत्तर प्रदेश",
    type: "state",
    capital: "Lucknow",
    capitalHi: "लखनऊ",
    languages: "Hindi, Urdu, Awadhi, Braj, Bhojpuri, Bundeli",
    languagesHi: "हिंदी, उर्दू, अवधी, ब्रज, भोजपुरी, बुंदेली",
    history: "Associated with ancient Kosala, Kashi, the Mughal era and the 1857 uprising.",
    historyHi: "प्राचीन कोसल, काशी, मुगल काल और 1857 के विद्रोह से जुड़ा इतिहास।",
    dances: "Kathak, Raslila, Charkula, Nautanki",
    dancesHi: "कथक, रासलीला, चरकुला, नौटंकी",
    music: "Hindustani classical music, Qawwali, Thumri",
    musicHi: "हिंदुस्तानी शास्त्रीय संगीत, कव्वाली, ठुमरी",
    clothes: "Banarasi saree, Chikankari, traditional kurta",
    clothesHi: "बनारसी साड़ी, चिकनकारी, पारंपरिक कुर्ता",
    festivals: "Holi, Diwali, Kumbh Mela, Dev Deepawali",
    festivalsHi: "होली, दीपावली, कुंभ मेला, देव दीपावली",
    food: "Awadhi kebabs, Petha, Bedai, Banarasi chaat",
    foodHi: "अवधी कबाब, पेठा, बेड़ई, बनारसी चाट",
    arts: "Chikankari, Zardozi, Banarasi brocade",
    artsHi: "चिकनकारी, ज़रदोज़ी, बनारसी ब्रोकेड",
    places: "Taj Mahal, Varanasi, Ayodhya, Fatehpur Sikri",
    placesHi: "ताजमहल, वाराणसी, अयोध्या, फतेहपुर सीकरी",
    nature: "Ganga and Yamuna rivers, Dudhwa National Park",
    natureHi: "गंगा और यमुना नदियाँ, दुधवा राष्ट्रीय उद्यान",
    speciality: "Taj Mahal, Kathak and Banarasi textiles",
    specialityHi: "ताजमहल, कथक और बनारसी वस्त्र"
  },
  {
    name: "Uttarakhand",
    hi: "उत्तराखंड",
    type: "state",
    capital: "Dehradun (Winter), Gairsain (Summer)",
    capitalHi: "देहरादून (शीतकालीन), गैरसैंण (ग्रीष्मकालीन)",
    languages: "Hindi, Garhwali, Kumaoni, Jaunsari",
    languagesHi: "हिंदी, गढ़वाली, कुमाऊँनी, जौनसारी",
    history: "Known for Garhwal and Kumaon kingdoms and Himalayan pilgrimage traditions.",
    historyHi: "गढ़वाल और कुमाऊँ रियासतों तथा हिमालयी तीर्थ परंपराओं की विरासत।",
    dances: "Chholiya, Jhora, Langvir Nritya",
    dancesHi: "छोलिया, झोड़ा, लांगवीर नृत्य",
    music: "Jagar, Mangal songs",
    musicHi: "जागर, मंगल गीत",
    clothes: "Ghagra, Pichora, woollen garments",
    clothesHi: "घाघरा, पिछौड़ा, ऊनी वस्त्र",
    festivals: "Harela, Nanda Devi Raj Jat, Phool Dei",
    festivalsHi: "हरेला, नंदा देवी राजजात, फूलदेई",
    food: "Kafuli, Aloo ke Gutke, Bal Mithai",
    foodHi: "काफुली, आलू के गुटके, बाल मिठाई",
    arts: "Aipan art, ringal bamboo crafts",
    artsHi: "ऐपण कला, रिंगाल बाँस के शिल्प",
    places: "Kedarnath, Badrinath, Rishikesh, Valley of Flowers",
    placesHi: "केदारनाथ, बद्रीनाथ, ऋषिकेश, फूलों की घाटी",
    nature: "Himalayas, Ganga, Yamuna, alpine meadows",
    natureHi: "हिमालय, गंगा, यमुना, बुग्याल",
    speciality: "Himalayan pilgrimage routes and Aipan art",
    specialityHi: "हिमालयी तीर्थ मार्ग और ऐपण कला"
  },
  {
    name: "West Bengal",
    hi: "पश्चिम बंगाल",
    type: "state",
    capital: "Kolkata",
    capitalHi: "कोलकाता",
    languages: "Bengali, Nepali, Hindi, Santali",
    languagesHi: "बंगाली, नेपाली, हिंदी, संताली",
    history: "Known for Bengal Renaissance, Pala heritage and colonial-era history.",
    historyHi: "बंगाल पुनर्जागरण, पाल विरासत और औपनिवेशिक काल के इतिहास के लिए प्रसिद्ध।",
    dances: "Chhau, Gambhira, Purulia Chhau",
    dancesHi: "छऊ, गंभीर, पुरुलिया छऊ",
    music: "Baul, Rabindra Sangeet, Nazrul Geeti",
    musicHi: "बाउल, रवींद्र संगीत, नजरुल गीति",
    clothes: "Tant saree, Baluchari, Dhoti",
    clothesHi: "तांत साड़ी, बालूचरी, धोती",
    festivals: "Durga Puja, Kali Puja, Poila Boishakh",
    festivalsHi: "दुर्गा पूजा, काली पूजा, पोइला बोइशाख",
    food: "Macher Jhol, Rosogolla, Sandesh",
    foodHi: "माछेर झोल, रसगुल्ला, संदेश",
    arts: "Kalighat painting, Kantha embroidery, terracotta",
    artsHi: "कालीघाट चित्रकला, कांथा कढ़ाई, टेराकोटा",
    places: "Victoria Memorial, Sundarbans, Darjeeling, Bishnupur",
    placesHi: "विक्टोरिया मेमोरियल, सुंदरबन, दार्जिलिंग, बिष्णुपुर",
    nature: "Sundarbans, Darjeeling Himalayas, Hooghly River",
    natureHi: "सुंदरबन, दार्जिलिंग हिमालय, हुगली नदी",
    speciality: "Durga Puja, Baul music and Bengali sweets",
    specialityHi: "दुर्गा पूजा, बाउल संगीत और बंगाली मिठाइयाँ"
  },

  /* ---------- UNION TERRITORIES ---------- */

  {
    name: "Andaman and Nicobar Islands",
    hi: "अंडमान और निकोबार द्वीपसमूह",
    type: "ut",
    capital: "Sri Vijaya Puram (formerly Port Blair)",
    capitalHi: "श्री विजयपुरम (पूर्व नाम पोर्ट ब्लेयर)",
    languages: "Hindi, Bengali, Tamil, Telugu, Nicobarese",
    languagesHi: "हिंदी, बंगाली, तमिल, तेलुगु, निकोबारी",
    history: "Known for indigenous island communities and the Cellular Jail.",
    historyHi: "मूल द्वीपवासी समुदायों और सेल्युलर जेल के लिए प्रसिद्ध।",
    dances: "Nicobari dances, island folk dances",
    dancesHi: "निकोबारी नृत्य, द्वीपीय लोकनृत्य",
    music: "Traditional island songs",
    musicHi: "पारंपरिक द्वीपीय गीत",
    clothes: "Island community traditional attire",
    clothesHi: "द्वीपीय समुदायों के पारंपरिक वस्त्र",
    festivals: "Island Tourism Festival, local community festivals",
    festivalsHi: "द्वीप पर्यटन महोत्सव, स्थानीय सामुदायिक उत्सव",
    food: "Seafood, coconut-based dishes",
    foodHi: "समुद्री भोजन, नारियल आधारित व्यंजन",
    arts: "Shell crafts, coconut crafts",
    artsHi: "सीप के शिल्प, नारियल के शिल्प",
    places: "Cellular Jail, Havelock Island, Ross Island",
    placesHi: "सेल्युलर जेल, हैवलॉक द्वीप, रॉस द्वीप",
    nature: "Coral reefs, tropical forests, marine life",
    natureHi: "प्रवाल भित्तियाँ, उष्णकटिबंधीय जंगल, समुद्री जीवन",
    speciality: "Coral islands and marine biodiversity",
    specialityHi: "प्रवाल द्वीप और समुद्री जैव विविधता"
  },
  {
    name: "Chandigarh",
    hi: "चंडीगढ़",
    type: "ut",
    capital: "Chandigarh",
    capitalHi: "चंडीगढ़",
    languages: "Hindi, Punjabi, English",
    languagesHi: "हिंदी, पंजाबी, अंग्रेज़ी",
    history: "A planned city designed after India's independence.",
    historyHi: "भारत की स्वतंत्रता के बाद योजनाबद्ध तरीके से बसाया गया शहर।",
    dances: "Bhangra, Giddha",
    dancesHi: "भांगड़ा, गिद्धा",
    music: "Punjabi folk music",
    musicHi: "पंजाबी लोक संगीत",
    clothes: "Punjabi traditional attire",
    clothesHi: "पंजाबी पारंपरिक वस्त्र",
    festivals: "Baisakhi, Rose Festival",
    festivalsHi: "बैसाखी, रोज़ फेस्टिवल",
    food: "Chole Bhature, Punjabi cuisine",
    foodHi: "छोले भटूरे, पंजाबी भोजन",
    arts: "Modern architecture, Rock Garden sculptures",
    artsHi: "आधुनिक स्थापत्य, रॉक गार्डन मूर्तियाँ",
    places: "Rock Garden, Sukhna Lake, Capitol Complex",
    placesHi: "रॉक गार्डन, सुखना झील, कैपिटल कॉम्प्लेक्स",
    nature: "Sukhna Lake, green gardens",
    natureHi: "सुखना झील, हरे-भरे उद्यान",
    speciality: "Le Corbusier architecture and Rock Garden",
    specialityHi: "ले कोर्बुज़िए स्थापत्य और रॉक गार्डन"
  },
  {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    hi: "दादरा और नगर हवेली तथा दमन और दीव",
    type: "ut",
    capital: "Daman",
    capitalHi: "दमन",
    languages: "Gujarati, Hindi, Marathi, tribal languages",
    languagesHi: "गुजराती, हिंदी, मराठी, जनजातीय भाषाएँ",
    history: "Known for Portuguese-era coastal settlements and tribal heritage.",
    historyHi: "पुर्तगाली काल की तटीय बस्तियों और जनजातीय विरासत के लिए प्रसिद्ध।",
    dances: "Tarpa, Bhavada, tribal folk dances",
    dancesHi: "तारपा, भावड़ा, जनजातीय लोकनृत्य",
    music: "Tribal folk music",
    musicHi: "जनजातीय लोक संगीत",
    clothes: "Traditional Gujarati and tribal attire",
    clothesHi: "पारंपरिक गुजराती और जनजातीय वस्त्र",
    festivals: "Nariyal Poornima, local tribal festivals",
    festivalsHi: "नारियल पूर्णिमा, स्थानीय जनजातीय त्योहार",
    food: "Gujarati cuisine, seafood",
    foodHi: "गुजराती भोजन, समुद्री व्यंजन",
    arts: "Warli-inspired tribal art, bamboo crafts",
    artsHi: "वारली शैली की जनजातीय कला, बाँस के शिल्प",
    places: "Diu Fort, Daman beaches, Silvassa",
    placesHi: "दीव किला, दमन समुद्र तट, सिलवासा",
    nature: "Arabian Sea coast, forests",
    natureHi: "अरब सागर का तट, जंगल",
    speciality: "Portuguese architecture and tribal culture",
    specialityHi: "पुर्तगाली स्थापत्य और जनजातीय संस्कृति"
  },
  {
    name: "Delhi",
    hi: "दिल्ली",
    type: "ut",
    capital: "New Delhi",
    capitalHi: "नई दिल्ली",
    languages: "Hindi, Punjabi, Urdu, English",
    languagesHi: "हिंदी, पंजाबी, उर्दू, अंग्रेज़ी",
    history: "Historic capital region associated with several dynasties and the Mughal Empire.",
    historyHi: "कई राजवंशों और मुगल साम्राज्य से जुड़ा ऐतिहासिक राजधानी क्षेत्र।",
    dances: "Kathak, Bhangra, Giddha",
    dancesHi: "कथक, भांगड़ा, गिद्धा",
    music: "Hindustani classical music, Qawwali",
    musicHi: "हिंदुस्तानी शास्त्रीय संगीत, कव्वाली",
    clothes: "Salwar Kameez, traditional North Indian attire",
    clothesHi: "सलवार कमीज़, पारंपरिक उत्तर भारतीय वस्त्र",
    festivals: "Diwali, Eid, Phool Walon Ki Sair",
    festivalsHi: "दीपावली, ईद, फूल वालों की सैर",
    food: "Chaat, Chole Bhature, Parathas",
    foodHi: "चाट, छोले भटूरे, पराठे",
    arts: "Mughal architecture, miniature painting",
    artsHi: "मुगल स्थापत्य, लघु चित्रकला",
    places: "Red Fort, Qutub Minar, Humayun's Tomb, India Gate",
    placesHi: "लाल किला, कुतुब मीनार, हुमायूँ का मकबरा, इंडिया गेट",
    nature: "Yamuna River, Ridge forest",
    natureHi: "यमुना नदी, रिज वन",
    speciality: "Historic monuments and diverse street food",
    specialityHi: "ऐतिहासिक स्मारक और विविध स्ट्रीट फूड"
  },
  {
    name: "Jammu and Kashmir",
    hi: "जम्मू और कश्मीर",
    type: "ut",
    capital: "Srinagar (Summer), Jammu (Winter)",
    capitalHi: "श्रीनगर (ग्रीष्मकालीन), जम्मू (शीतकालीन)",
    languages: "Kashmiri, Dogri, Urdu, Hindi, Gojri",
    languagesHi: "कश्मीरी, डोगरी, उर्दू, हिंदी, गोजरी",
    history: "Known for Kashmir's cultural traditions, Dogra history and Himalayan heritage.",
    historyHi: "कश्मीरी सांस्कृतिक परंपराओं, डोगरा इतिहास और हिमालयी विरासत के लिए प्रसिद्ध।",
    dances: "Rouf, Dumhal, Kud",
    dancesHi: "रौफ, डुमहाल, कुड",
    music: "Sufiana Kalam, Chakri",
    musicHi: "सूफियाना कलाम, चकरी",
    clothes: "Pheran, Pashmina shawls",
    clothesHi: "फिरन, पश्मीना शॉल",
    festivals: "Eid, Navreh, Tulip Festival",
    festivalsHi: "ईद, नवरेह, ट्यूलिप महोत्सव",
    food: "Rogan Josh, Dum Aloo, Kahwa",
    foodHi: "रोगन जोश, दम आलू, कहवा",
    arts: "Pashmina weaving, papier-mâché, walnut wood carving",
    artsHi: "पश्मीना बुनाई, पेपर माशे, अखरोट की लकड़ी की नक्काशी",
    places: "Dal Lake, Gulmarg, Vaishno Devi, Pahalgam",
    placesHi: "डल झील, गुलमर्ग, वैष्णो देवी, पहलगाम",
    nature: "Himalayas, Chenab River, alpine valleys",
    natureHi: "हिमालय, चिनाब नदी, ऊँची पर्वतीय घाटियाँ",
    speciality: "Pashmina, Kashmiri crafts and mountain landscapes",
    specialityHi: "पश्मीना, कश्मीरी शिल्प और पहाड़ी दृश्य"
  },
  {
    name: "Ladakh",
    hi: "लद्दाख",
    type: "ut",
    capital: "Leh",
    capitalHi: "लेह",
    languages: "Ladakhi, Purgi, Balti, Hindi",
    languagesHi: "लद्दाखी, पुर्गी, बाल्टी, हिंदी",
    history: "Known for Himalayan Buddhist kingdoms and ancient trade routes.",
    historyHi: "हिमालयी बौद्ध राज्यों और प्राचीन व्यापार मार्गों की विरासत।",
    dances: "Cham, Jabro, Shondol",
    dancesHi: "छम, जब्रो, शोंडोल",
    music: "Traditional Buddhist chants and folk songs",
    musicHi: "पारंपरिक बौद्ध मंत्र और लोकगीत",
    clothes: "Goncha, traditional woollen clothing",
    clothesHi: "गोंचा, पारंपरिक ऊनी वस्त्र",
    festivals: "Hemis Festival, Losar, Dosmoche",
    festivalsHi: "हेमिस महोत्सव, लोसर, दोसमोचे",
    food: "Thukpa, Skyu, Chhutagi",
    foodHi: "थुकपा, स्क्यू, छुतागी",
    arts: "Thangka painting, metal crafts",
    artsHi: "थंका चित्रकला, धातु शिल्प",
    places: "Pangong Lake, Nubra Valley, Hemis Monastery",
    placesHi: "पैंगोंग झील, नुब्रा घाटी, हेमिस मठ",
    nature: "Karakoram, Indus River, high-altitude lakes",
    natureHi: "काराकोरम, सिंधु नदी, ऊँचाई वाली झीलें",
    speciality: "High-altitude desert and Buddhist monasteries",
    specialityHi: "ऊँचाई वाला ठंडा रेगिस्तान और बौद्ध मठ"
  },
  {
    name: "Lakshadweep",
    hi: "लक्षद्वीप",
    type: "ut",
    capital: "Kavaratti",
    capitalHi: "कवरत्ती",
    languages: "Malayalam, Jeseri, Mahl",
    languagesHi: "मलयालम, जेसरी, महल",
    history: "Island communities shaped by maritime trade and coastal traditions.",
    historyHi: "समुद्री व्यापार और तटीय परंपराओं से विकसित द्वीपीय समुदाय।",
    dances: "Lava, Kolkali, Parichakali",
    dancesHi: "लावा, कोलकली, परिचकली",
    music: "Mappila songs, island folk music",
    musicHi: "माप्पिला गीत, द्वीपीय लोक संगीत",
    clothes: "Traditional island attire",
    clothesHi: "पारंपरिक द्वीपीय वस्त्र",
    festivals: "Eid, Milad-un-Nabi, local island festivals",
    festivalsHi: "ईद, मिलाद-उन-नबी, स्थानीय द्वीपीय त्योहार",
    food: "Tuna dishes, coconut rice, seafood",
    foodHi: "टूना व्यंजन, नारियल चावल, समुद्री भोजन",
    arts: "Coir crafts, coconut crafts",
    artsHi: "नारियल रेशा शिल्प, नारियल के शिल्प",
    places: "Agatti, Bangaram, Kavaratti",
    placesHi: "अगत्ती, बंगाराम, कवरत्ती",
    nature: "Coral atolls, lagoons, marine life",
    natureHi: "प्रवाल द्वीप, लैगून, समुद्री जीवन",
    speciality: "Coral atolls and clear lagoons",
    specialityHi: "प्रवाल द्वीप और साफ लैगून"
  },
  {
    name: "Puducherry",
    hi: "पुदुचेरी",
    type: "ut",
    capital: "Puducherry",
    capitalHi: "पुदुचेरी",
    languages: "Tamil, Telugu, Malayalam, English",
    languagesHi: "तमिल, तेलुगु, मलयालम, अंग्रेज़ी",
    history: "Known for French colonial heritage and Tamil coastal culture.",
    historyHi: "फ्रांसीसी औपनिवेशिक विरासत और तमिल तटीय संस्कृति के लिए प्रसिद्ध।",
    dances: "Bharatanatyam, Garadi",
    dancesHi: "भरतनाट्यम, गरडी",
    music: "Carnatic music, Tamil folk music",
    musicHi: "कर्नाटक संगीत, तमिल लोक संगीत",
    clothes: "Traditional Tamil attire",
    clothesHi: "पारंपरिक तमिल वस्त्र",
    festivals: "Pongal, Bastille Day celebrations, Masi Magam",
    festivalsHi: "पोंगल, बैस्टिल दिवस समारोह, मासी मगम",
    food: "Tamil cuisine, French-influenced dishes",
    foodHi: "तमिल भोजन, फ्रांसीसी प्रभाव वाले व्यंजन",
    arts: "Kolam, pottery, handmade crafts",
    artsHi: "कोलम, मिट्टी के बर्तन, हस्तशिल्प",
    places: "Promenade Beach, Auroville, French Quarter",
    placesHi: "प्रोमेनेड बीच, ऑरोविल, फ्रेंच क्वार्टर",
    nature: "Coromandel Coast, beaches",
    natureHi: "कोरोमंडल तट, समुद्र तट",
    speciality: "French architecture and Tamil coastal heritage",
    specialityHi: "फ्रांसीसी स्थापत्य और तमिल तटीय विरासत"
  }
];


/* ---------- 2. LANGUAGE LABELS ---------- */

const labels = {
  en: {
    states: "Explore Indian States",
    uts: "Union Territories",
    capital: "Capital",
    history: "History",
    languages: "Languages",
    dances: "Famous Dances",
    music: "Music",
    clothes: "Traditional Clothing",
    festivals: "Festivals",
    food: "Famous Food",
    arts: "Art & Crafts",
    places: "Famous Places",
    nature: "Nature & Geography",
    speciality: "Speciality",
    search: "Search states, dances, food, festivals...",
    noResults: "No matching results found.",
    state: "State",
    ut: "Union Territory",
    back: "← Back to all regions",
    explore: "Explore"
  },
  hi: {
    states: "भारत के राज्यों की खोज करें",
    uts: "केंद्रशासित प्रदेश",
    capital: "राजधानी",
    history: "इतिहास",
    languages: "भाषाएँ",
    dances: "प्रसिद्ध नृत्य",
    music: "संगीत",
    clothes: "पारंपरिक पहनावा",
    festivals: "त्योहार",
    food: "प्रसिद्ध भोजन",
    arts: "कला और शिल्प",
    places: "प्रसिद्ध स्थान",
    nature: "प्रकृति और भूगोल",
    speciality: "विशेष पहचान",
    search: "राज्य, नृत्य, भोजन, त्योहार खोजें...",
    noResults: "कोई परिणाम नहीं मिला।",
    state: "राज्य",
    ut: "केंद्रशासित प्रदेश",
    back: "← सभी क्षेत्रों पर वापस जाएँ",
    explore: "जानें"
  }
};

let currentLanguage = "en";
let currentProfile = null;


/* ---------- 3. HELPER FUNCTIONS ---------- */

function getText(region, field) {
  if (currentLanguage === "hi") {
    return region[field + "Hi"] || region[field] || "";
  }
  return region[field] || "";
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function getRegionName(region) {
  return currentLanguage === "hi" ? region.hi : region.name;
}

function getAllSearchText(region) {
  return Object.values(region)
    .filter(value => typeof value === "string")
    .join(" ")
    .toLowerCase();
}


/* ---------- 4. RENDER REGION CARDS ---------- */

function createCard(region) {
  const category = region.type === "state"
    ? labels[currentLanguage].state
    : labels[currentLanguage].ut;

  return `
    <article class="state-card">
      <div class="state-card-content">
        <span class="state-type">${category}</span>
        <h3>${escapeHTML(getRegionName(region))}</h3>
        <p><strong>${labels[currentLanguage].capital}:</strong>
          ${escapeHTML(getText(region, "capital"))}</p>
        <p>${escapeHTML(getText(region, "speciality"))}</p>
        <button
          class="explore-btn"
          type="button"
          data-region="${escapeHTML(region.name)}">
          ${labels[currentLanguage].explore}
        </button>
      </div>
    </article>
  `;
}

function renderDirectory(type, query = "") {
  const grid = document.getElementById(
    type === "state" ? "stateGrid" : "utGrid"
  );

  if (!grid) return;

  const filtered = regions
    .filter(region => region.type === type)
    .filter(region => !query || getAllSearchText(region).includes(query))
    .sort((a, b) => getRegionName(a).localeCompare(
      getRegionName(b),
      currentLanguage === "hi" ? "hi" : "en"
    ));

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="no-results">${labels[currentLanguage].noResults}</p>`;
    return;
  }

  grid.innerHTML = filtered.map(createCard).join("");
}

function renderAllDirectories(query = "") {
  renderDirectory("state", query);
  renderDirectory("ut", query);
}


/* ---------- 5. REGION PROFILE ---------- */

function showProfile(regionName) {
  const region = regions.find(item => item.name === regionName);
  const profile = document.getElementById("stateProfile");

  if (!region || !profile) return;

  currentProfile = regionName;

  const fields = [
    ["capital", "capital"],
    ["history", "history"],
    ["languages", "languages"],
    ["dances", "dances"],
    ["music", "music"],
    ["clothes", "clothes"],
    ["festivals", "festivals"],
    ["food", "food"],
    ["arts", "arts"],
    ["places", "places"],
    ["nature", "nature"],
    ["speciality", "speciality"]
  ];

  const sections = fields.map(([key, field]) => `
    <section class="profile-info">
      <h3>${labels[currentLanguage][key]}</h3>
      <p>${escapeHTML(getText(region, field))}</p>
    </section>
  `).join("");

  profile.innerHTML = `
    <div class="profile-header">
      <button class="back-btn" id="backToDirectory" type="button">
        ${labels[currentLanguage].back}
      </button>
      <span class="state-type">
        ${region.type === "state"
          ? labels[currentLanguage].state
          : labels[currentLanguage].ut}
      </span>
      <h2>${escapeHTML(getRegionName(region))}</h2>
      <p>${escapeHTML(getText(region, "speciality"))}</p>
    </div>
    <div class="profile-grid">${sections}</div>
  `;

  profile.hidden = false;
  profile.scrollIntoView({ behavior: "smooth", block: "start" });

  document.getElementById("backToDirectory")?.addEventListener("click", () => {
    profile.hidden = true;
    currentProfile = null;
    document.getElementById("searchInput")?.focus();
  });
}


/* ---------- 6. SEARCH ---------- */

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.getElementById("searchForm");

  if (!searchInput) return;

  searchInput.placeholder = labels[currentLanguage].search;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    renderAllDirectories(query);

    const profile = document.getElementById("stateProfile");
    if (profile && query) {
      profile.hidden = true;
      currentProfile = null;
    }
  });

  searchForm?.addEventListener("submit", event => {
    event.preventDefault();

    const query = searchInput.value.trim().toLowerCase();
    const match = regions.find(region =>
      getAllSearchText(region).includes(query)
    );

    if (match && query) {
      showProfile(match.name);
    }
  });
}


/* ---------- 7. LANGUAGE SWITCH ---------- */

function changeLanguage(language) {
  currentLanguage = language === "hi" ? "hi" : "en";

  const stateHeading = document.getElementById("statesHeading");
  const utHeading = document.getElementById("utsHeading");

  if (stateHeading) {
    stateHeading.textContent = labels[currentLanguage].states;
  }

  if (utHeading) {
    utHeading.textContent = labels[currentLanguage].uts;
  }

  renderAllDirectories();

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.placeholder = labels[currentLanguage].search;
  }

  if (currentProfile) {
    showProfile(currentProfile);
  }

  const searchHint = document.getElementById("searchHint");
  if (searchHint) {
    searchHint.textContent = currentLanguage === "hi"
      ? "किसी भी राज्य, भाषा, नृत्य, त्योहार या भोजन को खोजें।"
      : "Search for any state, language, dance, festival or food.";
  }
}


/* ---------- 8. MENU ---------- */

function setupMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


/* ---------- 9. CARD CLICK EVENTS ---------- */

function setupCardClicks() {
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-region]");
    if (!button) return;

    showProfile(button.dataset.region);
  });
}


/* ---------- 10. INITIALIZE WEBSITE ---------- */

function initializeBharatDarshan() {
  const languageSelect = document.getElementById("languageSelect");

  if (languageSelect) {
    currentLanguage = languageSelect.value === "hi" ? "hi" : "en";

    languageSelect.addEventListener("change", event => {
      changeLanguage(event.target.value);
    });
  }

  renderAllDirectories();
  setupSearch();
  setupMenu();
  setupCardClicks();

  const currentYear = document.getElementById("currentYear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  changeLanguage(currentLanguage);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeBharatDarshan);
} else {
  initializeBharatDarshan();
}
