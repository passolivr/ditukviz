import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    type: 'bank',
    from: 'OTP Bank <security@otp-biztonsag.com>',
    subject: 'SÜRGŐS: Biztonsági frissítés szükséges',
    date: '2024. március 14. 10:30',
    scenario:
      'Tisztelt Ügyfelünk!\n\nBiztonsági okokból azonnal jelentkezzen be az online fiókjába és erősítse meg adatait. Ha nem teszi meg 24 órán belül, a fiókját zárolnunk kell.\n\nKattintson ide: www.otp-biztonsag.com',
    isPhishing: true,
    explanation:
      'Ez csalás! A bank sosem kér ilyen sürgős bejelentkezést, és figyeljen a gyanús domain névre (otp-biztonsag.com). A valódi OTP domain: www.otpbank.hu',
  },
  {
    id: 2,
    type: 'phone',
    from: '+251 912 345 678',
    scenario:
      'Hívás átirata:\n\n"Jó napot kívánok! A Microsoft terméktámogatástól hívom. A számítógépén súlyos vírusfertőzést észleltünk, ami veszélyezteti az adatait. Kérem, kapcsolja be a számítógépét, és engedélyezzen számunkra távoli hozzáférést, hogy eltávolíthassuk a vírust."',
    isPhishing: true,
    explanation:
      'Ez egy gyakori csalás! A Microsoft soha nem hívja fel váratlanul az ügyfeleket, és nem kér távoli hozzáférést a számítógéphez. A külföldi telefonszám (+251) is gyanús.',
  },
  {
    id: 3,
    type: 'facebook',
    page: 'Egészség és Wellness Központ',
    scenario:
      'ÁTTÖRÉS A GYÓGYÍTÁSBAN! 🌟\n\nForradalmi magyar találmány! Ez a különleges kapszula 3 nap alatt megszünteti az ízületi fájdalmakat. A hagyományos gyógyszergyárak nem akarják, hogy megismerje!\n\n✅ 100% természetes összetevők\n✅ Azonnali hatás\n✅ Orvosok is ajánlják\n\nCSAK MA: 70% kedvezmény + ingyen szállítás!',
    isPhishing: true,
    explanation:
      'Az ilyen "csodaszeres" hirdetések általában csalások. A hiteles gyógyszereket csak patikában vagy orvosi rendelvényre lehet beszerezni.',
  },
  {
    id: 4,
    type: 'website',
    from: 'www.netfllx.com',
    subject: 'Netflix fiók frissítés',
    scenario:
      'A fiókját zároltuk fizetési probléma miatt. Kérjük, frissítse bankkártya adatait 24 órán belül a szolgáltatás folytatásához.',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=800',
    isPhishing: true,
    explanation:
      'Ez egy hamis Netflix oldal! Figyeljen a domain névre: "netfllx" (két L-lel). A valódi Netflix oldal: www.netflix.com',
  },
  {
    id: 5,
    type: 'email',
    from: 'nyertes@caribbean-dream-vacations.vip',
    subject: 'Gratulálunk! Ön egy Karibi nyaralást nyert!',
    scenario:
      'Örömmel értesítjük, hogy Ön a szerencsés nyertese egy exkluzív, 7 napos Karibi álomnyaralásnak, amely teljesen ingyenes! A nyeremény átvételéhez mindössze annyit kell tennie, hogy kattint az alábbi linkre, és megadja személyes adatait: www.caribbean-dream-vacations.vip/claim.\n\nSiessen, az ajánlat csak a következő 24 órában érhető el!',
    isPhishing: true,
    explanation:
      'Ez egy csalás! Az ilyen "ingyenes nyaralások" általában adathalász kampányok részei. Figyeljen a gyanús domain nevére (caribbean-dream-vacations.net), és ne adja meg személyes adatait ilyen oldalakon!',
  },
  {
    id: 6,
    type: 'sms',
    from: 'Magyar Posta',
    scenario:
      'Az ön csomagja kézbesítésre vár. A szállítási díj: 490 Ft. A csomag visszaküldésének elkerülése érdekében fizessen itt: www.posta-fizetes.net',
    isPhishing: true,
    explanation:
      'A Magyar Posta hivatalos domainről küld értesítést (www.posta.hu), és általában nem kér közvetlen fizetést SMS-ben.',
  },
  {
    id: 7,
    type: 'sms',
    from: 'OTP Bank',
    scenario:
      'Tisztelt Ügyfelünk! Tájékoztatjuk, hogy bankkártyájával 2024.03.20-án 15:30-kor 250.000 Ft összegű vásárlás történt az Amazonon. Ha nem Ön volt, azonnal hívja az ügyfélszolgálatot: +36-1-366-6666',
    isPhishing: false,
    explanation:
      'Ez egy valódi OTP Bank értesítés. A bank valóban küld SMS-t a nagyobb összegű tranzakciókról, és a megadott telefonszám az OTP Bank hivatalos ügyfélszolgálati száma.',
  },
  {
    id: 8,
    type: 'email',
    from: 'K&H Bank <info@kh.hu>',
    subject: 'Éves adategyeztetés',
    date: '2024. március 15. 09:15',
    scenario:
      'Tisztelt Ügyfelünk!\n\nA pénzmosás és terrorizmus finanszírozása elleni törvény értelmében szükséges az éves adategyeztetés elvégzése. Kérjük, személyesen fáradjon be valamelyik bankfiókunkba személyi igazolványával.\n\nÜdvözlettel,\nK&H Bank',
    isPhishing: false,
    explanation:
      'Ez egy valódi banki kérés. Az éves adategyeztetés törvényi kötelezettség, és a feladó domain is helyes (kh.hu).',
  },
  {
    id: 9,
    type: 'sms',
    from: 'Telekom',
    scenario:
      'SÜRGŐS: Fizetési késedelem miatt szolgáltatását 24 órán belül korlátozzuk! Azonnali befizetés: www.telekom-fizetes.net',
    isPhishing: true,
    explanation:
      'Ez csalás! A Telekom csak a telekom.hu domaint használja, és nem kér sürgős fizetést külső weboldalon keresztül.',
  },
  {
    id: 10,
    type: 'email',
    from: 'Dr. Emmanuel Okoro <emmanuel.okoro@prince-site.ng>',
    subject: 'SÜRGŐS: Önt jelöltük meg örökösként!',
    date: '2024. március 21. 08:45',
    scenario:
      'Tisztelt családtag,\n\nDr. Emmanuel Okoro vagyok, a Nigériai Nemzeti Bank jogásza. Nagy tisztelettel tájékoztatom, hogy egy távoli rokona, a néhai Prince Obinna Okoro jelentős összeget hagyott örökül Önre. Az örökség összege 5,000,000 USD, amelyet azonnal átutalhatunk, amint igazolja személyazonosságát és megadja banki adatait.\n\nKérem, sürgősen válaszoljon erre az e-mailre, hogy elkezdhessük az átutalási folyamatot!\n\nTisztelettel,\nDr. Emmanuel Okoro\nJogász, Royal Nigerian Bank',
    isPhishing: true,
    explanation:
      'Ez egy klasszikus "nigériai herceg" átverés. A valóságban semmilyen örökségről nincs szó, és soha ne adja meg személyes vagy banki adatait ilyen e-mailre válaszolva.',
  },
];
