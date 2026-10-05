(function () {
  var STORE_KEY = 'innomethod-lang';

  var SK = {
    // Navigation, shared
    'Domů': 'Domov',
    'Expedice Karpaty': 'Expedícia Karpaty',
    'Otevřít menu': 'Otvoriť menu',
    'Sdružení měst a obcí Východní Moravy – CHKO Bílé Karpaty': 'Sdružení měst a obcí Východní Moravy – CHKO Biele Karpaty',

    // Expedice page: header and species tiles
    'Expedice Karpaty – karty objevitele': 'Expedícia Karpaty – karty objaviteľa',
    'Deset druhů savců, ptáků, obojživelníků, hmyzu a rostlin CHKO Bílé Karpaty na interaktivních kartách objevitele.':
      'Desať druhov cicavcov, vtákov, obojživelníkov, hmyzu a rastlín CHKO Biele Karpaty na interaktívnych kartách objaviteľa.',
    '🌿 Karty objevitele': '🌿 Karty objaviteľa',
    'Živočichové a rostliny CHKO Bílé Karpaty': 'Živočíchy a rastliny CHKO Biele Karpaty',
    'Vyberte si kartu a poznejte druhy, které žijí a rostou v Chráněné krajinné oblasti Bílé Karpaty.':
      'Vyberte si kartu a spoznajte druhy, ktoré žijú a rastú v Chránenej krajinnej oblasti Biele Karpaty.',
    'Savci': 'Cicavce',
    'Ptáci': 'Vtáky',
    'Obojživelníci': 'Obojživelníky',
    'Rostliny': 'Rastliny',
    'Otevřít kartu': 'Otvoriť kartu',

    // Species names
    'Vlk obecný': 'Vlk dravý',
    'Kočka divoká': 'Mačka divá',
    'Vydra říční': 'Vydra riečna',
    'Vlha pestrá': 'Včelárik zlatý',
    'Mlok skvrnitý': 'Salamandra škvrnitá',
    'Modrásek bahenní': 'Modráčik bahniskový',
    'Roháč obecný': 'Roháč obyčajný',
    'Tesařík alpský': 'Fuzáč alpský',
    'Lilie zlatohlavá': 'Ľalia zlatohlavá',

    // Expedice page: teacher section
    '🧭 Expedice Karpaty · pro učitele': '🧭 Expedícia Karpaty · pre učiteľov',
    'Karty do výuky ke stažení': 'Karty na vyučovanie na stiahnutie',
    'Karty zvířat a rostlin si můžete stáhnout, vytisknout na papír A3, vystřihnout podle obrysu a volně je používat při výuce, školních aktivitách i aktivitách v přírodě.':
      'Karty zvierat a rastlín si môžete stiahnuť, vytlačiť na papier A3, vystrihnúť podľa obrysu a voľne ich používať pri vyučovaní, školských aktivitách aj aktivitách v prírode.',
    'Stáhnout zde': 'Stiahnuť tu',
    'Stáhnout PDF': 'Stiahnuť PDF',
    'Kočka divoká + Vlha pestrá': 'Mačka divá + Včelárik zlatý',
    'Mlok skvrnitý + Vydra říční': 'Salamandra škvrnitá + Vydra riečna',
    'Modrásek bahenní + Roháč obecný': 'Modráčik bahniskový + Roháč obyčajný',
    'Lilie zlatohlavá + Vstavač vojenský': 'Ľalia zlatohlavá + Vstavač vojenský',
    'Náhled karty Vlk obecný': 'Náhľad karty Vlk dravý',
    'Náhled karty Kočka divoká a Vlha pestrá': 'Náhľad karty Mačka divá a Včelárik zlatý',
    'Náhled karty Mlok skvrnitý a Vydra říční': 'Náhľad karty Salamandra škvrnitá a Vydra riečna',
    'Náhled karty Modrásek bahenní a Roháč obecný': 'Náhľad karty Modráčik bahniskový a Roháč obyčajný',
    'Náhled karty Tesařík alpský': 'Náhľad karty Fuzáč alpský',
    'Náhled karty Lilie zlatohlavá a Vstavač vojenský': 'Náhľad karty Ľalia zlatohlavá a Vstavač vojenský',
    'Stáhnout PDF – Vlk obecný': 'Stiahnuť PDF – Vlk dravý',
    'Stáhnout PDF – Kočka divoká a Vlha pestrá': 'Stiahnuť PDF – Mačka divá a Včelárik zlatý',
    'Stáhnout PDF – Mlok skvrnitý a Vydra říční': 'Stiahnuť PDF – Salamandra škvrnitá a Vydra riečna',
    'Stáhnout PDF – Modrásek bahenní a Roháč obecný': 'Stiahnuť PDF – Modráčik bahniskový a Roháč obyčajný',
    'Stáhnout PDF – Tesařík alpský': 'Stiahnuť PDF – Fuzáč alpský',
    'Stáhnout PDF – Lilie zlatohlavá a Vstavač vojenský': 'Stiahnuť PDF – Ľalia zlatohlavá a Vstavač vojenský',
    'Na každé kartě je': 'Na každej karte je',
    '. Po naskenování mobilem nebo tabletem se otevře odpovídající digitální karta druhu na tomto webu – stejné karty najdete výše na této stránce.':
      '. Po naskenovaní mobilom alebo tabletom sa otvorí zodpovedajúca digitálna karta druhu na tomto webe – rovnaké karty nájdete vyššie na tejto stránke.',
    'Jak na to?': 'Ako na to?',
    'Stáhněte': 'Stiahnite',
    'Vyberte karty a stáhněte PDF soubory z nabídky výše.': 'Vyberte karty a stiahnite si súbory PDF z ponuky vyššie.',
    'Vytiskněte na A3': 'Vytlačte na A3',
    'Barevně, ve skutečné velikosti (100 %), aby QR kódy zůstaly dobře čitelné.': 'Farebne, v skutočnej veľkosti (100 %), aby QR kódy zostali dobre čitateľné.',
    'Vystřihněte podle obrysu': 'Vystrihnite podľa obrysu',
    'Stříhejte podél přerušované čáry, kterou označují nůžky.': 'Strihajte pozdĺž prerušovanej čiary, ktorú označujú nožnice.',
    'Používejte karty při výuce a aktivitách': 'Používajte karty pri vyučovaní a aktivitách',
    'Ve třídě, na chodbě, na školní zahradě i v terénu.': 'V triede, na chodbe, v školskej záhrade aj v teréne.',
    'Skenujte QR kódy pro digitální obsah': 'Skenujte QR kódy pre digitálny obsah',
    'Fotoaparát mobilu nebo tabletu otevře kartu druhu na webu.': 'Fotoaparát mobilu alebo tabletu otvorí kartu druhu na webe.',
    '💡 Tip pro učitele': '💡 Tip pre učiteľov',
    'Karty můžete volně využít při nejrůznějších aktivitách – jako poznávačku druhů, stopovací hru v okolí školy, skupinovou práci, nástěnku nebo podklad pro projektový den. Děti mohou karty rozmístit po třídě či venku a pomocí QR kódů o každém druhu zjistit víc.':
      'Karty môžete voľne využiť pri najrôznejších aktivitách – ako poznávačku druhov, stopovaciu hru v okolí školy, skupinovú prácu, nástenku alebo podklad na projektový deň. Deti môžu karty rozmiestniť po triede či vonku a pomocou QR kódov sa o každom druhu dozvedieť viac.',
    'Stáhnout celý návod (PDF)': 'Stiahnuť celý návod (PDF)',
    'Co budete potřebovat': 'Čo budete potrebovať',
    'tiskárnu': 'tlačiareň',
    'papír A3': 'papier A3',
    'nůžky': 'nožnice',
    'mobil nebo tablet': 'mobil alebo tablet',
    'připojení k internetu': 'pripojenie na internet',
    'Vytiskněte. Vystřihněte. Naskenujte. Objevujte.': 'Vytlačte. Vystrihnite. Naskenujte. Objavujte.',

    // Dabble page
    'Dabble – Bílé Karpaty': 'Dabble – Biele Karpaty',
    'Karpaty Dabble – hry na hledání stejných obrázků podle prostředí Bílých Karpat.':
      'Karpaty Dabble – hry na hľadanie rovnakých obrázkov podľa prostredia Bielych Karpát.',
    'Kdo první najde stejný obrázek? Čtyři varianty podle prostředí Bílých Karpat.':
      'Kto prvý nájde rovnaký obrázok? Štyri varianty podľa prostredia Bielych Karpát.',
    'Květinová louka': 'Kvetinová lúka',

    // Species cards: shared labels
    'KARTA OBJEVITELE': 'KARTA OBJAVITEĽA',
    'POSLECHNI SI PŘÍBĚH': 'VYPOČUJ SI PRÍBEH',
    'POZASTAVIT PŘÍBĚH': 'POZASTAVIŤ PRÍBEH',
    'Audiopříběh o tomto druhu.': 'Audiopríbeh o tomto druhu.',
    'Úkol inspirovaný příběhem.': 'Úloha inšpirovaná príbehom.',
    'Vyber si věkovou kategorii:': 'Vyber si vekovú kategóriu:',
    '7–10 let': '7–10 rokov',
    '11–15 let': '11–15 rokov',
    'ZÁKLADNÍ INFORMACE': 'ZÁKLADNÉ INFORMÁCIE',
    'ZAŘAZENÍ': 'ZARADENIE',
    'Délka těla': 'Dĺžka tela',
    'Délka života': 'Dĺžka života',
    'Délka života dospělce': 'Dĺžka života dospelého jedinca',
    'Výška v kohoutku': 'Výška v kohútiku',
    'Hmotnost': 'Hmotnosť',
    'Velikost': 'Veľkosť',
    'Vývoj larev': 'Vývin lariev',
    'Doba páření': 'Obdobie párenia',
    'Období letu': 'Obdobie letu',
    'Rozpětí křídel': 'Rozpätie krídel',
    'Barva křídel': 'Farba krídel',
    'Doba květu': 'Čas kvitnutia',
    'Barva květu': 'Farba kvetu',
    'Oddělení: krytosemenné': 'Oddelenie: krytosemenné',
    'Třída: savci': 'Trieda: cicavce',
    'Třída: ptáci': 'Trieda: vtáky',
    'Třída: obojživelník': 'Trieda: obojživelníky',
    'Třída: hmyz': 'Trieda: hmyz',
    'Třída: jednoděložné': 'Trieda: jednoklíčnolistové',
    'Řád: šelmy': 'Rad: šelmy',
    'Řád: srostloprstí': 'Rad: krakľotvaré',
    'Řád: ocasatí': 'Rad: chvostnatce',
    'Řád: motýli': 'Rad: motýle',
    'Řád: brouci': 'Rad: chrobáky',
    '12–16 let': '12–16 rokov',
    '15-20 let': '15-20 rokov',
    '10-15 let': '10-15 rokov',
    '3-5 let': '3-5 rokov',
    'až 7 let': 'až 7 rokov',
    '2-4 týdny': '2-4 týždne',
    '1–3 dny': '1–3 dni',
    'několik týdnů': 'niekoľko týždňov',
    'pár dní -týden': 'pár dní – týždeň',
    'konec zimy/jaro': 'koniec zimy/jar',
    'konec V-VIII': 'koniec V-VIII',

    // Card: Vlk obecný
    'Vlk obecný – Karta objevitele': 'Vlk dravý – Karta objaviteľa',
    'Ilustrácia druhu Vlk obecný': 'Ilustrácia druhu Vlk dravý',
    'Vlk je největší zástupce psovitých šelem žijící volně v našich lesích. Je plachý a velmi inteligentní.':
      'Vlk je najväčší zástupca psovitých šeliem, ktorý žije voľne v našich lesoch. Je plachý a veľmi inteligentný.',
    'Čeleď: psovití': 'Čeľaď: psovité',
    'Druh: vlk obecný': 'Druh: vlk dravý',
    'CHKO Bílé Karpaty tvoří důležitý migrační koridor vlků mezi slovenskými pohořími a Moravou.':
      'CHKO Biele Karpaty tvorí dôležitý migračný koridor vlkov medzi slovenskými pohoriami a Moravou.',
    'Mapa rozšíření druhu Canis lupus dle záznamů v ND OP': 'Mapa rozšírenia druhu Canis lupus podľa záznamov v ND OP',
    'Mapa rozšíření druhu Canis lupus dle záznamů': 'Mapa rozšírenia druhu Canis lupus podľa záznamov',

    // Card: Kočka divoká
    'Kočka divoká – Karta objevitele': 'Mačka divá – Karta objaviteľa',
    'Ilustrácia druhu Kočka divoká': 'Ilustrácia druhu Mačka divá',
    'Kočka žije skrytě v lesích, je velmi obezřetná a patří mezi vzácné kočkovité šelmy v Evropě.':
      'Mačka divá žije skryto v lesoch, je veľmi obozretná a patrí medzi vzácne mačkovité šelmy v Európe.',
    'Čeleď: kočkovití': 'Čeľaď: mačkovité',
    'Druh: kočka divoká': 'Druh: mačka divá',
    'V CHKO Bílé Karpaty je stabilní v okolí Vlárského průsmyku, PP Kaňúry, oblasti Vršatských Bradel.':
      'V CHKO Biele Karpaty sa stabilne vyskytuje v okolí Vlárskeho priesmyku, PP Kaňúry a v oblasti Vršatských bradiel.',
    'Mapa rozšíření druhu Felis silvestris dle záznamů v ND OP': 'Mapa rozšírenia druhu Felis silvestris podľa záznamov v ND OP',
    'Mapa rozšíření druhu Felis silvestris dle záznamů': 'Mapa rozšírenia druhu Felis silvestris podľa záznamov',

    // Card: Vydra říční
    'Vydra říční – Karta objevitele': 'Vydra riečna – Karta objaviteľa',
    'Ilustrácia druhu Vydra říční': 'Ilustrácia druhu Vydra riečna',
    'Vydra říční je plachá vodní šelma, která žije u čistých řek a potoků a patří k symbolům chráněné přírody.':
      'Vydra riečna je plachá vodná šelma, ktorá žije pri čistých riekach a potokoch a patrí k symbolom chránenej prírody.',
    'Čeleď: lasicovití': 'Čeľaď: lasicovité',
    'Druh: vydra říční': 'Druh: vydra riečna',
    'V CHKO Bílé Karpaty je stálý, pravidelný a plošně rozšířený, obývá všechny významnější vodní toky.':
      'V CHKO Biele Karpaty sa vyskytuje stále, pravidelne a plošne, obýva všetky významnejšie vodné toky.',
    'Mapa rozšíření druhu Lutra lutra dle záznamů v ND OP': 'Mapa rozšírenia druhu Lutra lutra podľa záznamov v ND OP',
    'Mapa rozšíření druhu Lutra lutra dle záznamů': 'Mapa rozšírenia druhu Lutra lutra podľa záznamov',

    // Card: Vlha pestrá
    'Vlha pestrá – Karta objevitele': 'Včelárik zlatý – Karta objaviteľa',
    'Ilustrácia druhu Vlha pestrá': 'Ilustrácia druhu Včelárik zlatý',
    'Vlha je výrazně zbarvený pták žijící v teplé otevřené krajině u vody. Hnízdí v norách ve stěnách a v ČR je chráněná.':
      'Včelárik zlatý je výrazne sfarbený vták, ktorý žije v teplej otvorenej krajine pri vode. Hniezdi v norách v stenách a v Česku je chránený.',
    'Hnízdí v koloniích': 'Hniezdi v kolóniách',
    'klade': 'znáša',
    'Tažný pták': 'Sťahovavý vták',
    'zimuje v Africe, na jaře se vrací k nám': 'zimuje v Afrike, na jar sa k nám vracia',
    'Čeleď: vlhovití': 'Čeľaď: včelárikovité',
    'Druh: vlha pestrá': 'Druh: včelárik zlatý',
    'Obývá nejteplejší oblasti CHKO Bílé Karpaty - Strážnicko, Blatnicko a Hornácko.':
      'Obýva najteplejšie oblasti CHKO Biele Karpaty – Strážnicko, Blatnicko a Hornácko.',
    'Mapa rozšíření druhu Merops apiaster dle záznamů v ND OP': 'Mapa rozšírenia druhu Merops apiaster podľa záznamov v ND OP',
    'Mapa rozšíření druhu Merops apiaster dle záznamů': 'Mapa rozšírenia druhu Merops apiaster podľa záznamov',

    // Card: Mlok skvrnitý
    'Mlok skvrnitý – Karta objevitele': 'Salamandra škvrnitá – Karta objaviteľa',
    'Ilustrácia druhu Mlok skvrnitý': 'Ilustrácia druhu Salamandra škvrnitá',
    'Mlok skvrnitý je žlutočerný obojživelník žijící ve vlhkých listnatých lesích u čistých vodních toků. V ČR je chráněný.':
      'Salamandra škvrnitá je žltočierny obojživelník, ktorý žije vo vlhkých listnatých lesoch pri čistých vodných tokoch. V Česku je chránená.',
    'Čeleď: mlokovití': 'Čeľaď: salamandrovité',
    'Druh: mlok skvrnitý': 'Druh: salamandra škvrnitá',
    'V CHKO Bílé Karpaty v okolí Velké Javořiny, Vlárského průsmyku a Sidonie, okolí PR Vápenky.':
      'V CHKO Biele Karpaty v okolí Veľkej Javoriny, Vlárskeho priesmyku a Sidonie, v okolí PR Vápenky.',
    'Mapa rozšíření druhu Salamandra salamandra dle záznamů v ND OP': 'Mapa rozšírenia druhu Salamandra salamandra podľa záznamov v ND OP',
    'Mapa rozšíření druhu Salamandra salamandra dle záznamů': 'Mapa rozšírenia druhu Salamandra salamandra podľa záznamov',

    // Card: Modrásek bahenní
    'Modrásek bahenní – Karta objevitele': 'Modráčik bahniskový – Karta objaviteľa',
    'Ilustrácia druhu Modrásek bahenní': 'Ilustrácia druhu Modráčik bahniskový',
    'Modrásek bahenní je vzácný chráněný motýl žijící na vlhkých loukách, kde roste krvavec toten.':
      'Modráčik bahniskový je vzácny chránený motýľ, ktorý žije na vlhkých lúkach, kde rastie krvavec lekársky.',
    'tmavě hnědá': 'tmavohnedá',
    'hnědo-modrá': 'hnedo-modrá',
    'Čeleď: modráskovití': 'Čeľaď: modráčikovité',
    'Druh: modrásek bahenní': 'Druh: modráčik bahniskový',
    'V CHKO Bílé Karpaty obývá extenzivně sečené vlhké louky - př. NPP Búrová, vlhké příkopy a lemy cest.':
      'V CHKO Biele Karpaty obýva extenzívne kosené vlhké lúky – napr. NPP Búrová, vlhké priekopy a okraje ciest.',
    'Mapa rozšíření druhu Phengaris nausithous dle záznamů v ND OP': 'Mapa rozšírenia druhu Phengaris nausithous podľa záznamov v ND OP',
    'Mapa rozšíření druhu Phengaris nausithous dle záznamů': 'Mapa rozšírenia druhu Phengaris nausithous podľa záznamov',

    // Card: Roháč obecný
    'Roháč obecný – Karta objevitele': 'Roháč obyčajný – Karta objaviteľa',
    'Ilustrácia druhu Roháč obecný': 'Ilustrácia druhu Roháč obyčajný',
    'Roháč obecný je největší brouk Evropy žijící v listnatých lesích a v Česku patří mezi chráněné druhy.':
      'Roháč obyčajný je najväčší chrobák Európy, ktorý žije v listnatých lesoch, a v Česku patrí medzi chránené druhy.',
    'Čeleď: roháčovití': 'Čeľaď: roháčovité',
    'Druh: roháč obecný': 'Druh: roháč obyčajný',
    'V CHKO Bílé Karpaty obývá místa se starými duby a rozlehlými loukami - př. NPR Čertoryje.':
      'V CHKO Biele Karpaty obýva miesta so starými dubmi a rozľahlými lúkami – napr. NPR Čertoryje.',
    'Mapa rozšíření druhu Lucanus cervus dle záznamů v ND OP': 'Mapa rozšírenia druhu Lucanus cervus podľa záznamov v ND OP',
    'Mapa rozšíření druhu Lucanus cervus dle záznamů': 'Mapa rozšírenia druhu Lucanus cervus podľa záznamov',

    // Card: Tesařík alpský
    'Tesařík alpský – Karta objevitele': 'Fuzáč alpský – Karta objaviteľa',
    'Ilustrácia druhu Tesařík alpský': 'Ilustrácia druhu Fuzáč alpský',
    'Tesařík alpský je vzácný chráněný brouk bukových lesů a u nás patří mezi mimořádně cenné druhy.':
      'Fuzáč alpský je vzácny chránený chrobák bukových lesov a u nás patrí medzi mimoriadne cenné druhy.',
    ', samec má 2x delší tykadla': ', samec má 2x dlhšie tykadlá',
    'Čeleď: tesaříkovití': 'Čeľaď: fuzáčovité',
    'Druh: tesařík alpský': 'Druh: fuzáč alpský',
    'V CHKO Bílé Karpaty obývá zapojené horské bučiny - EVL Vlárský průsmyk, PR Sidonie, NPR Javorina.':
      'V CHKO Biele Karpaty obýva zapojené horské bučiny – EVL Vlárský průsmyk, PR Sidonie, NPR Javorina.',
    'Mapa rozšíření druhu Rosalia alpina dle záznamů v ND OP': 'Mapa rozšírenia druhu Rosalia alpina podľa záznamov v ND OP',
    'Mapa rozšíření druhu Rosalia alpina dle záznamů': 'Mapa rozšírenia druhu Rosalia alpina podľa záznamov',

    // Card: Lilie zlatohlavá
    'Lilie zlatohlavá – Karta objevitele': 'Ľalia zlatohlavá – Karta objaviteľa',
    'Ilustrácia druhu Lilie zlatohlavá': 'Ilustrácia druhu Ľalia zlatohlavá',
    'Lilie zlatohlavá je chráněná vytrvalá rostlina s nápadnými skvrnitými květy, která roste v teplejších světlých lesích.':
      'Ľalia zlatohlavá je chránená trváca rastlina s nápadnými škvrnitými kvetmi, ktorá rastie v teplejších svetlých lesoch.',
    'růžovofialový, skvrnitý, skloněný': 'ružovofialový, škvrnitý, sklonený',
    'Půda humózní, výživná, propustná, vápenitá': 'Pôda humózna, výživná, priepustná, vápenitá',
    'Čeleď: liliovité': 'Čeľaď: ľaliovité',
    'Druh: lilie zlatohlavá': 'Druh: ľalia zlatohlavá',
    'V CHKO Bílé Karpaty roste i na loukách - NPR Jazevčí, PR Dolnoněmčanské louky, okolí Velké Javořiny.':
      'V CHKO Biele Karpaty rastie aj na lúkach – NPR Jazevčí, PR Dolnoněmčanské louky, okolie Veľkej Javoriny.',
    'Mapa rozšíření druhu Lilium martagon dle záznamů v ND OP': 'Mapa rozšírenia druhu Lilium martagon podľa záznamov v ND OP',
    'Mapa rozšíření druhu Lilium martagon dle záznamů': 'Mapa rozšírenia druhu Lilium martagon podľa záznamov',

    // Card: Vstavač vojenský
    'Vstavač vojenský – Karta objevitele': 'Vstavač vojenský – Karta objaviteľa',
    'Vstavač vojenský je vzácná chráněná orchidej s růžovými květy, která roste na suchých vápnitých loukách.':
      'Vstavač vojenský je vzácna chránená orchidea s ružovými kvetmi, ktorá rastie na suchých vápnitých lúkach.',
    'růžová až purpurová': 'ružová až purpurová',
    'Půda nejlépe vápnitá, suché až mírně vlhká, propustná': 'Pôda najlepšie vápnitá, suchá až mierne vlhká, priepustná',
    'Čeleď: vstavačovité': 'Čeľaď: vstavačovité',
    'Roste roztroušeně po celém území CHKO Bílé Karpaty - NPR Jazevčí a Zahrady pod Hájem, PR Hutě.':
      'Rastie roztrúsene na celom území CHKO Biele Karpaty – NPR Jazevčí a Zahrady pod Hájem, PR Hutě.',
    'Mapa rozšíření druhu Orchis militaris dle záznamů v ND OP': 'Mapa rozšírenia druhu Orchis militaris podľa záznamov v ND OP',
    'Mapa rozšíření druhu Orchis militaris dle záznamů': 'Mapa rozšírenia druhu Orchis militaris podľa záznamov'
  };

  var CS = {};
  Object.keys(SK).forEach(function (cs) { CS[SK[cs]] = cs; });

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  function readSaved() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function save(l) {
    try { localStorage.setItem(STORE_KEY, l); } catch (e) {}
  }

  function detect() {
    var m = /[?&]lang=(sk|cs|cz)\b/i.exec(location.search);
    if (m) {
      var fromUrl = m[1].toLowerCase() === 'sk' ? 'sk' : 'cs';
      save(fromUrl);
      return fromUrl;
    }
    var saved = readSaved();
    if (saved === 'sk' || saved === 'cs') return saved;
    var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    for (var i = 0; i < prefs.length; i++) {
      if (/^sk\b/i.test(prefs[i])) return 'sk';
      if (/^cs\b/i.test(prefs[i])) return 'cs';
    }
    return 'cs';
  }

  var lang = detect();

  // Converts a known Czech or Slovak string to the current language; null if unknown.
  function convert(text) {
    var n = norm(text);
    if (!n) return null;
    var cs = Object.prototype.hasOwnProperty.call(SK, n) ? n : (Object.prototype.hasOwnProperty.call(CS, n) ? CS[n] : null);
    if (cs === null) return null;
    return lang === 'sk' ? SK[cs] : cs;
  }

  function t(text) {
    var out = convert(text);
    return out === null ? text : out;
  }

  function translateTextNode(node) {
    var raw = node.nodeValue;
    var target = convert(raw);
    if (target === null || norm(raw) === target) return;
    node.nodeValue = raw.match(/^\s*/)[0] + target + raw.match(/\s*$/)[0];
  }

  var ATTRS = ['alt', 'title', 'aria-label'];

  function translateElement(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var v = el.getAttribute(ATTRS[i]);
      if (v) {
        var out = convert(v);
        if (out !== null && out !== v) el.setAttribute(ATTRS[i], out);
      }
    }
    var skHref = el.getAttribute('data-sk-href');
    if (skHref) {
      if (!el.hasAttribute('data-cs-href')) el.setAttribute('data-cs-href', el.getAttribute('href'));
      el.setAttribute('href', lang === 'sk' ? skHref : el.getAttribute('data-cs-href'));
    }
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === 3) {
      var p = root.parentNode;
      if (p && p.nodeName !== 'SCRIPT' && p.nodeName !== 'STYLE') translateTextNode(root);
      return;
    }
    if (root.nodeType !== 1 || root.nodeName === 'SCRIPT' || root.nodeName === 'STYLE') return;
    translateElement(root);
    var els = root.querySelectorAll('[alt],[title],[aria-label],[data-sk-href]');
    for (var i = 0; i < els.length; i++) translateElement(els[i]);
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var pn = n.parentNode && n.parentNode.nodeName;
        return pn === 'SCRIPT' || pn === 'STYLE' ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateTextNode);
  }

  function translateHead() {
    document.documentElement.setAttribute('lang', lang === 'sk' ? 'sk' : 'cs');
    var title = convert(document.title);
    if (title !== null) document.title = title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      var d = convert(meta.getAttribute('content') || '');
      if (d !== null) meta.setAttribute('content', d);
    }
  }

  function syncSwitches() {
    var btns = document.querySelectorAll('.lang-switch [data-lang]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', String(btns[i].getAttribute('data-lang') === lang));
    }
  }

  function applyAll() {
    translateHead();
    translateTree(document.body);
    syncSwitches();
  }

  function setLang(next) {
    if (next !== 'sk' && next !== 'cs') return;
    lang = next;
    save(next);
    applyAll();
  }

  window.innomethodI18n = { t: t, lang: function () { return lang; }, setLang: setLang };

  translateHead();

  // Translate content as the parser adds it, so Slovak visitors don't see a flash of Czech.
  var observer = null;
  if (lang === 'sk' && 'MutationObserver' in window) {
    observer = new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var added = records[i].addedNodes;
        for (var j = 0; j < added.length; j++) translateTree(added[j]);
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.lang-switch [data-lang]');
    if (!btn) return;
    e.preventDefault();
    setLang(btn.getAttribute('data-lang'));
  });

  document.addEventListener('DOMContentLoaded', function () {
    if (observer) { observer.disconnect(); observer = null; }
    applyAll();
  });
})();
