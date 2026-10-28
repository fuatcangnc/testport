export const siteSettings = {
	brandName: "port",
	tagline: "Portfolio · Bold",
	description:
		"Belgesel fotoğrafçı Deniz Aksu'nun portföyü: uzun soluklu projeler, editoryal işler ve saha notları.",
	email: "studio@port.photo",
	location: "İstanbul · Berlin",
	workHours: "Saha: her gün · Stüdyo: randevu ile",
	instagram: "https://instagram.com",
	x: "https://x.com",
	linkedin: "https://linkedin.com",
};

export const navItems: {
	label: string;
	href: string;
	children?: [string, string][];
}[] = [
	{ label: "Projeler", href: "/projeler" },
	{ label: "Hizmetler", href: "/#hizmetler" },
	{ label: "Hakkımda", href: "/hakkinda" },
	{
		label: "Notlar",
		href: "/blog",
		children: [
			["Saha notları", "/blog"],
			["Seçki yöntemi", "/#hizmetler"],
			["Sık sorulanlar", "/#sss"],
		],
	},
	{ label: "İletişim", href: "/iletisim" },
];

export interface Project {
	slug: string;
	number: string;
	title: string;
	type: string;
	location: string;
	year: string;
	summary: string;
	body: string;
	frames: string;
	tone: "blue" | "ink" | "ash";
}

export const projects: Project[] = [
	{
		slug: "gece-vardiyasi",
		number: "01",
		title: "Gece Vardiyası",
		type: "Uzun soluklu belgesel",
		location: "İstanbul",
		year: "2023–2026",
		summary:
			"Şehrin gece çalışanları: limon satıcıları, fırın tezgâhları, gemi söküm işçileri ve triyaj hemşireleri.",
		body:
			"Üç kış boyunca 22:00–06:00 arasında çalışan insanlarla gece vardiyalarında yürüdüm. Proje, gündüz kentinin hiç görmediği bir ekonominin portresi: sesler, ışıklar ve bitmeyen bir yorgunluk. 214 kare çekildi, 28 kare seçildi.",
		frames: "28",
		tone: "blue",
	},
	{
		slug: "tuz-ve-toz",
		number: "02",
		title: "Tuz ve Toz",
		type: "Editoryal seri",
		location: "Anadolu",
		year: "2024",
		summary:
			"Kuruyan tuz göllerinin kenarında kalan köylerde tarım, su ve göç üzerine bir dergi işi.",
		body:
			"Bir dergi siparişi olarak başladı, saha defteriyle büyüdü. Su seviyesinin çekildiği altı köyde çiftçilerle, okul servisi şoförleriyle ve mevsimlik işçilerle çalıştım. Fotoğraflar mekânı değil, ölçüyü anlatıyor.",
		frames: "19",
		tone: "ash",
	},
	{
		slug: "iskele-sesleri",
		number: "03",
		title: "İskele Sesleri",
		type: "Sesli fotoğraf serisi",
		location: "Ege",
		year: "2025",
		summary:
			"Balıkçı iskelelerinde kaybolan meslekler; kareler ve kaydedilmiş saha sesleri bir arada.",
		body:
			"Her karenin bir ses kaydı var. Sergi, fotoğrafı sessiz bir nesne olmaktan çıkarıp sahaya geri bağlıyor: motor sesi, halat, müzayede bağırışları.",
		frames: "32",
		tone: "ink",
	},
	{
		slug: "bos-oda-18",
		number: "04",
		title: "Boş Oda 18",
		type: "Portre & mekân",
		location: "Berlin",
		year: "2025",
		summary:
			"Bir otelde uzun süre kalan insanlar: geçici barınma, bekleme ve eşyaların dili.",
		body:
			"On bir kişi, on bir oda. Hepsi aynı otelde haftalarca kaldı; kimisi iş, kimisi sığınma süreci için. Portreler, odanın ışığı ve kişinin bıraktığı eşyalar üzerinden kuruldu.",
		frames: "24",
		tone: "ink",
	},
	{
		slug: "son-harman",
		number: "05",
		title: "Son Harman",
		type: "Kırsal belgesel",
		location: "Trakya",
		year: "2022",
		summary:
			"Makineleşmeyle birlikte kaybolan ortak harman kültürü üzerine arşiv çalışması.",
		body:
			"Köy arşivlerinden bulunan 1970'ler fotoğraflarıyla bugünü yan yana koydum. Aynı tarla, aynı aileler, farklı bir üretim biçimi. Proje saha çekimleri ve aile albümlerinden oluşuyor.",
		frames: "41",
		tone: "ash",
	},
	{
		slug: "sinir-hatti",
		number: "06",
		title: "Sınır Hattı",
		type: "Basın & rapor",
		location: "Doğu sınırı",
		year: "2023",
		summary:
			"Bir sivil toplum kuruluşu için sınır köylerinde günlük yaşam ve lojistik raporlaması.",
		body:
			"Kurumun saha ekibiyle birlikte iki hafta. Fotoğraflar rapora, sunuma ve bağış kampanyasına aynı anda hizmet edecek biçimde teslim edildi: yatay, dikey ve kare kırpımlarla birlikte.",
		frames: "56",
		tone: "blue",
	},
	{
		slug: "fabrika-ici",
		number: "07",
		title: "Fabrika İçi",
		type: "Kurumsal belgesel",
		location: "Bursa",
		year: "2024",
		summary:
			"Bir üretim tesisinde emeğin ritmi: vardiya değişimleri, mola köşeleri, ustalık.",
		body:
			"Kurumsal yıllık rapor için yapılan ama belgesel yaklaşımla çekilen bir iş. İnsanı reklam objesi yapmadan, üretimin gerçek zamanını göstermek üzerine kuruldu.",
		frames: "37",
		tone: "ash",
	},
	{
		slug: "kayit-defteri",
		number: "08",
		title: "Kayıt Defteri",
		type: "Kişisel arşiv",
		location: "İstanbul",
		year: "2021–2026",
		summary:
			"Her hafta aynı sokakta bir kare; değişimin ve tekrarın yavaş belgeseli.",
		body:
			"Beş yıl, aynı köşe. Yıkılan bina, açılan dükkân, değişen tabelalar. Proje bir bellek kaydı: sabit bir açı ve sabit bir saatle biriken bir arşiv.",
		frames: "240",
		tone: "ink",
	},
];

export const featuredProjects = projects.slice(0, 4);

export const stats = [
	{ value: "12", label: "yıl saha", description: "Kesintisiz belgesel pratiği." },
	{ value: "24", label: "yayınlanmış proje", description: "Dergi, kitap ve sergi." },
	{ value: "9", label: "ülke", description: "Uzun soluklu çekimler." },
	{ value: "0", label: "stok kare", description: "Her iş sahadan, siparişe özel." },
];

export interface Service {
	number: string;
	title: string;
	lede: string;
	items: string[];
	meta: string;
	accent?: boolean;
}

export const services: Service[] = [
	{
		number: "01",
		title: "Belgesel seri",
		lede:
			"Uzun soluklu bir hikâyeyi birlikte kurarız: araştırma, saha, seçki ve metin. Altı haftadan bir yıla kadar.",
		items: ["Araştırma & saha planı", "Çoklu ziyaret", "Seçki + kısa metin"],
		meta: "6–52 hafta",
		accent: true,
	},
	{
		number: "02",
		title: "Editoryal & basın",
		lede:
			"Dergi, gazete ve dijital yayınlar için hızlı, net ve kullanılabilir kareler. Yayın kırpımları dahil.",
		items: ["Yarım/günübirlik çekim", "Yatay + dikey kırpım", "Hızlı teslim"],
		meta: "1–5 gün",
	},
	{
		number: "03",
		title: "Kurum & STK",
		lede:
			"Rapor, kampanya ve yıllık sunumlar için insanı merkeze alan görsel anlatı. Reklam diline kaymadan.",
		items: ["Saha erişimi koordinasyonu", "Kurumsal kullanım lisansı", "Caption & arşiv düzeni"],
		meta: "2–6 hafta",
	},
	{
		number: "04",
		title: "Sergi & baskı",
		lede:
			"Projeyi duvara taşımak: kâğıt seçimi, baskı provası, asma düzeni ve sergi metni.",
		items: ["Kâğıt & baskı testi", "Limitli edisyon", "Sergi kurgusu"],
		meta: "3–8 hafta",
	},
];

export const processSteps = [
	{
		number: "01",
		title: "Brief & araştırma",
		description:
			"Konu, erişim ve takvim netleşir. Saha öncesi kiminle, nerede, hangi saatlerde çalışacağımızı yazarız.",
	},
	{
		number: "02",
		title: "Saha çekimi",
		description:
			"Çekim listesi değil, çekim süresi. Günler içinde tekrar eden ziyaretlerle gerçek zaman yakalanır.",
	},
	{
		number: "03",
		title: "Seçki & edit",
		description:
			"Kareler birlikte elenir; ritim, sıra ve kırpım üzerinde çalışılır. Yayın için alternatif kırpımlar hazırlanır.",
	},
	{
		number: "04",
		title: "Teslim & lisans",
		description:
			"Yüksek çözünürlük, web boyu ve arşiv dosyaları; kullanım lisansı ve caption dosyasıyla birlikte.",
	},
];

export const aboutHighlights = [
	{
		title: "Sahada uzun kalırım",
		description:
			"Bir hikâye bir günde anlatılmaz. Aynı yere dönmek, insanların fotoğrafa alışmasını ve gerçek anların görünmesini sağlar.",
	},
	{
		title: "Metinle birlikte çalışırım",
		description:
			"Her teslimatta caption, yer ve tarih bilgisi bulunur. Fotoğraf tek başına değil, doğru bilgiyle anlatır.",
	},
	{
		title: "Etik sınırlar nettir",
		description:
			"İzin, mahremiyet ve temsil üzerine konuşuruz. Zor sahnelerde fotoğrafın kime hizmet ettiği her zaman sorulur.",
	},
];

export const equipment = [
	["Gövde", "35mm dijital · yedek gövde"],
	["Optik", "28mm · 35mm · 50mm sabit"],
	["Işık", "Doğal ışık · taşınabilir flaş"],
	["Ses", "Saha kaydı (projeye bağlı)"],
];

export const clients = [
	"Aylık Dosya",
	"Sınır Hafızası Derneği",
	"Kuzey Yayınları",
	"Metro Kültür",
	"Studio Hâl",
	"Tuz Sergi Alanı",
];

export const exhibitions = [
	{ year: "2026", title: "Gece Vardiyası", place: "Depo İstanbul", note: "Kişisel sergi" },
	{ year: "2025", title: "İskele Sesleri", place: "Kordon Sanat", note: "Sesli yerleştirme" },
	{ year: "2024", title: "Tuz ve Toz", place: "Ankara Fotoğraf Günleri", note: "Grup sergisi" },
	{ year: "2023", title: "Kayıt Defteri", place: "Bağımsız Yayın, sayı 14", note: "Kitap seçkisi" },
];

export const faqs: [string, string][] = [
	[
		"Bir çekim ne kadar sürer?",
		"Editoryal işler genellikle bir ile beş gün arasında. Belgesel seriler en az altı hafta, çoğunlukla aylar sürer. Takvim, ilk görüşmede saha erişimine göre netleşir.",
	],
	[
		"Fotoğrafların kullanım hakkı nasıl işliyor?",
		"Her iş için yazılı bir kullanım lisansı yapılır: mecra, süre ve bölge belirtilir. Süresiz ve sınırsız kullanım için ayrı bir lisans bedeli vardır.",
	],
	[
		"Teslimde ne alıyorum?",
		"Yüksek çözünürlüklü dosyalar (TIFF/JPEG), web boyu sürümler, seçkiyle eşleşen caption dosyası ve küçük bir PDF iletişim sayfası.",
	],
	[
		"Yurt dışında çekim yapıyor musunuz?",
		"Evet. Ulaşım ve konaklama brief'e eklenir; vize ve saha izinleri için önceden planlama yapılır.",
	],
	[
		"Projeye müdahale eder misiniz?",
		"Kurguya dahil olurum: hangi karenin hangi sırayla okunacağı anlatının parçası. Edit ortak bir çalışma olarak yürür.",
	],
	[
		"Sergi baskısı yapıyor musunuz?",
		"Evet. Kâğıt seçimi, baskı provası ve asma düzenini birlikte yürütürüz. Limitli edisyonlar imzalı teslim edilir.",
	],
	[
		"Arşiv kullanımı mümkün mü?",
		"Seçili projelerden kareler arşivden lisanslanabilir. Yayınlanmış işler için ayrıca kullanım geçmişi kontrol edilir.",
	],
	[
		"Ne kadar önceden haber vermeliyim?",
		"Editoryal işler için 1–2 hafta yeterli. Belgesel ve kurumsal işlerde 4–6 hafta öncesinden yazmak saha planlamasını kolaylaştırır.",
	],
];
