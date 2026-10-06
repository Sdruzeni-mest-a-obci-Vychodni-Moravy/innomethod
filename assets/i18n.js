(function () {
  var MANUAL_KEY = 'innomethod-lang-manual';
  var SESSION_KEY = 'innomethod-lang-session';
  var LEGACY_KEY = 'innomethod-lang';

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

    // Homepage
    'Bílé Karpaty – Poznej krajinu, druhy i kvíz': 'Biele Karpaty – Spoznaj krajinu, druhy aj kvíz',
    'Objevte Chráněnou krajinnou oblast Bílé Karpaty: karty druhů, život krajiny a interaktivní kvíz Poznej Bílé Karpaty.':
      'Objavte Chránenú krajinnú oblasť Biele Karpaty: karty druhov, život krajiny a interaktívny kvíz Spoznaj Biele Karpaty.',
    'Bílé Karpaty': 'Biele Karpaty',
    '🌿 Projekt INNOMETHOD · CHKO Bílé Karpaty': '🌿 Projekt INNOMETHOD · CHKO Biele Karpaty',
    'Chráníme biodiverzitu Bílých Karpat — s vámi': 'Chránime biodiverzitu Bielych Karpát — s vami',
    'Bílé Karpaty jsou domovem světově unikátních květnatých luk i vzácných druhů rostlin a živočichů. Projekt INNOMETHOD spojuje moderní technologie, terénní výzkum a osvětu, aby pomohl tuto krajinu chránit — a přiblížil ji vám. Poznávejte, objevujte a zapojte se do ochrany přírody, která to potřebuje.':
      'Biele Karpaty sú domovom svetovo unikátnych kvetnatých lúk aj vzácnych druhov rastlín a živočíchov. Projekt INNOMETHOD spája moderné technológie, terénny výskum a osvetu, aby pomohol túto krajinu chrániť — a priblížil ju vám. Spoznávajte, objavujte a zapojte sa do ochrany prírody, ktorá to potrebuje.',
    'Objevit druhy': 'Objaviť druhy',
    'Spustit kvíz': 'Spustiť kvíz',
    'Moderní technologie': 'Moderné technológie',
    '3D mapování, DNA analýzy a digitální nástroje pro ochranu přírody.': '3D mapovanie, analýzy DNA a digitálne nástroje na ochranu prírody.',
    'Pro školy i veřejnost': 'Pre školy aj verejnosť',
    'Karty objevitele, kvíz i komunitní mapování druhů pro každého.': 'Karty objaviteľa, kvíz aj komunitné mapovanie druhov pre každého.',
    'Hřeben Bílých Karpat při východu slunce': 'Hrebeň Bielych Karpát pri východe slnka',
    'druhů rostlin na jedné louce': 'druhov rastlín na jednej lúke',
    'Louky Bílých Karpat patří k nejbohatším na druhy rostlin v Evropě.': 'Lúky Bielych Karpát patria k najbohatším na druhy rastlín v Európe.',
    'O projektu INNOMETHOD': 'O projekte INNOMETHOD',
    'Krajina, kterou chráníme společně': 'Krajina, ktorú chránime spoločne',
    'INNOMETHOD je přeshraniční projekt zaměřený na ochranu biodiverzity v Bílých/Bielych Karpatech. Propojuje digitální technologie s terénním výzkumem a zapojuje místní odborníky, vědecké instituce i veřejnost. Na kartách objevitele poznáte druhy, které v Bílých Karpatech skutečně žijí, v kvízu si ověříte své znalosti a díky komunitnímu mapování na iNaturalist můžete sami přispět k ochraně této jedinečné krajiny.':
      'INNOMETHOD je cezhraničný projekt zameraný na ochranu biodiverzity v Bielych/Bílých Karpatoch. Prepája digitálne technológie s terénnym výskumom a zapája miestnych odborníkov, vedecké inštitúcie aj verejnosť. Na kartách objaviteľa spoznáte druhy, ktoré v Bielych Karpatoch skutočne žijú, v kvíze si overíte svoje vedomosti a vďaka komunitnému mapovaniu na iNaturalist môžete sami prispieť k ochrane tejto jedinečnej krajiny.',
    'Karty objevitele': 'Karty objaviteľa',
    'Deset druhů zpracovaných do přehledných interaktivních karet.': 'Desať druhov spracovaných do prehľadných interaktívnych kariet.',
    'Zobrazit karty': 'Zobraziť karty',
    'Zobrazit druhy': 'Zobraziť druhy',
    'Savci, ptáci, hmyz i rostliny': 'Cicavce, vtáky, hmyz aj rastliny',
    'Od vydry říční po vstavač vojenský — poznejte pestrost regionu.': 'Od vydry riečnej po vstavač vojenský — spoznajte pestrosť regiónu.',
    '🌾 Světově unikátní louky': '🌾 Svetovo unikátne lúky',
    'Louky, které stojí za ochranu': 'Lúky, ktoré stoja za ochranu',
    'Bílé/Biele Karpaty hostí několik z nejcennějších lučních rezervací v Evropě. Pět z nich představujeme blíže.':
      'Biele/Bílé Karpaty hostia niekoľko z najcennejších lúčnych rezervácií v Európe. Päť z nich vám predstavíme bližšie.',
    'Louka v NPR Čertoryje': 'Lúka v NPR Čertoryje',
    'Louka v NPR Zahrady pod Hájem': 'Lúka v NPR Zahrady pod Hájem',
    'Louka v NPR Jazevčí': 'Lúka v NPR Jazevčí',
    'Pohled na louky v NPR Porážky': 'Pohľad na lúky v NPR Porážky',
    'Krajina Holubyho kopanic': 'Krajina Holubyho kopaníc',
    'Čertoryje a její Orchidejová naučná stezka patří k nejvýznamnějším lučním lokalitám českých Bílých Karpat. Rozkvétá tu mimořádné množství vstavačovitých rostlin – od vstavače vojenského po prstnatce a vemeníky. Tato pestrost není náhoda: louky jsou po staletí šetrně koseny a spásány. Procházet se smí jen po značených cestách, přesná místa vzácných rostlin se veřejně nesdílí.':
      'Čertoryje a jej Orchideový náučný chodník patria k najvýznamnejším lúčnym lokalitám českých Bielych Karpát. Rozkvitá tu mimoriadne množstvo vstavačovitých rastlín – od vstavača vojenského po vstavačovce a vemenníky. Táto pestrosť nie je náhoda: lúky sú po stáročia šetrne kosené a spásané. Prechádzať sa smie len po značených chodníkoch, presné miesta vzácnych rastlín sa verejne nezdieľajú.',
    'Rozsáhlá druhově bohatá louka na Horňácku, propojená s tradiční krajinou a lidovou kulturou regionu. Její pestrá mozaika vznikla dlouhodobým šetrným hospodařením – kosením a pastvou, které místní generace praktikují po staletí. Zahrady pod Hájem jsou důkazem, že příroda a tradiční obhospodařování krajiny se nevylučují – naopak, jedno bez druhého by tahle krása nevznikla.':
      'Rozsiahla druhovo bohatá lúka na Horňácku, prepojená s tradičnou krajinou a ľudovou kultúrou regiónu. Jej pestrá mozaika vznikla dlhodobým šetrným hospodárením – kosením a pasením, ktoré miestne generácie praktizujú po stáročia. Zahrady pod Hájem sú dôkazom, že príroda a tradičné obhospodarovanie krajiny sa nevylučujú – naopak, jedno bez druhého by táto krása nevznikla.',
    'Národní přírodní rezervace Jazevčí patří mezi nejhodnotnější luční lokality v jižní části českých Bílých Karpat. Je domovem řady vzácných a citlivých druhů rostlin i hmyzu, jejichž přežití závisí na opatrném managementu. Návštěvníci jsou vítáni, ale přesná místa výskytu nejvzácnějších druhů se nezveřejňují – ochrana křehké rovnováhy má přednost před masovou turistikou.':
      'Národná prírodná rezervácia Jazevčí patrí medzi najhodnotnejšie lúčne lokality v južnej časti českých Bielych Karpát. Je domovom mnohých vzácnych a citlivých druhov rastlín aj hmyzu, ktorých prežitie závisí od opatrného manažmentu. Návštevníci sú vítaní, ale presné miesta výskytu najvzácnejších druhov sa nezverejňujú – ochrana krehkej rovnováhy má prednosť pred masovým turizmom.',
    'Nedaleko Jazevčí najdeme další cennou rezervaci – Porážky. Společně s Jazevčím a přírodní rezervací Machová tvoří soubor mimořádně hodnotných lučních biotopů jižních Bílých Karpat, patřících k nejbohatším na počet druhů rostlin na jednotku plochy ve střední Evropě. Křehká rovnováha mezi kosením, pastvou a ochranou vzácných druhů je tu klíčová.':
      'Neďaleko Jazevčí nájdeme ďalšiu cennú rezerváciu – Porážky. Spolu s Jazevčím a prírodnou rezerváciou Machová tvorí súbor mimoriadne hodnotných lúčnych biotopov južných Bielych Karpát, ktoré patria k najbohatším na počet druhov rastlín na jednotku plochy v strednej Európe. Krehká rovnováha medzi kosením, pasením a ochranou vzácnych druhov je tu kľúčová.',
    'Na slovenské straně pohoří se rozkládá Území evropského významu Holubyho kopanice, pojmenované po botaniku Jozefu Ľudovítu Holubym. Rozptýlená kopaničiarska krajina spojuje louky, sady, prameniště a lesy do jedinečné mozaiky biotopů sítě Natura 2000. Generace lidí tu hospodařily v souladu s krajinou – a právě toto soužití vytvořilo prostředí bohaté na druhy.':
      'Na slovenskej strane pohoria sa rozprestiera Územie európskeho významu Holubyho kopanice, pomenované po botanikovi Jozefovi Ľudovítovi Holubym. Rozptýlená kopaničiarska krajina spája lúky, sady, prameniská a lesy do jedinečnej mozaiky biotopov sústavy Natura 2000. Generácie ľudí tu hospodárili v súlade s krajinou – a práve toto spolužitie vytvorilo prostredie bohaté na druhy.',
    '🗺️ Mapová prohlížečka': '🗺️ Mapový prehliadač',
    'Prozkoumejte krajinu na interaktivní mapě': 'Preskúmajte krajinu na interaktívnej mape',
    'Podívejte se na mapové vrstvy a lokality projektu přímo zde na stránce.': 'Pozrite si mapové vrstvy a lokality projektu priamo tu na stránke.',
    'Mapová prohlížečka RRAVM': 'Mapový prehliadač RRAVM',
    'Otevřít mapu v novém okně →': 'Otvoriť mapu v novom okne →',
    'Objevování': 'Objavovanie',
    'Příroda': 'Príroda',
    'Poznání': 'Poznanie',
    '📱 Zapojte se': '📱 Zapojte sa',
    'Mapujte biodiverzitu s námi na iNaturalist': 'Mapujte biodiverzitu s nami na iNaturalist',
    'Staňte se součástí komunitního mapování druhů v Bílých Karpatech. Každá vaše fotografie rostliny, motýla nebo stopy pomáhá vědcům i ochráncům přírody lépe porozumět tomu, co se v krajině děje.':
      'Staňte sa súčasťou komunitného mapovania druhov v Bielych Karpatoch. Každá vaša fotografia rastliny, motýľa alebo stopy pomáha vedcom aj ochrancom prírody lepšie pochopiť, čo sa v krajine deje.',
    'Získat na Google Play': 'Získať na Google Play',
    'ZÍSKAT NA': 'ZÍSKAJTE NA',
    'Stáhnout v App Store': 'Stiahnuť v App Store',
    'STÁHNOUT V': 'STIAHNUŤ V',
    'Bílé Karpaty na Instagramu': 'Biele Karpaty na Instagrame',
    'Sledujte aktuality z terénu, nové druhy i zákulisí projektu INNOMETHOD.': 'Sledujte novinky z terénu, nové druhy aj zákulisie projektu INNOMETHOD.',
    'Vyberte si, kam vyrazíte dál': 'Vyberte si, kam sa vyberiete ďalej',
    'Prohlédněte si druhy Bílých Karpat, nebo si otestujte své znalosti v interaktivním kvízu.':
      'Pozrite si druhy Bielych Karpát alebo si otestujte svoje vedomosti v interaktívnom kvíze.',
    'Kvíz – Objevuj Bílé Karpaty': 'Kvíz – Objavuj Biele Karpaty',
    'Projekt podporují': 'Projekt podporujú',
    'Realizátoři': 'Realizátori',
    'Partneři': 'Partneri',
    'Projekt INNOMETHOD je spolufinancován Evropskou unií v rámci programu Interreg Slovensko – Česko.':
      'Projekt INNOMETHOD je spolufinancovaný Európskou úniou v rámci programu Interreg Slovensko – Česko.',

    // Kvíz page: launch card, exit dialog
    'Kvíz – Poznej Bílé Karpaty': 'Kvíz – Spoznaj Biele Karpaty',
    'Interaktivní kvíz Poznej Bílé Karpaty – 12 terénních výzev o přírodě CHKO Bílé Karpaty.':
      'Interaktívny kvíz Spoznaj Biele Karpaty – 12 terénnych výziev o prírode CHKO Biele Karpaty.',
    'Kvíz Poznej Bílé Karpaty': 'Kvíz Spoznaj Biele Karpaty',
    '🌿 Poznej Bílé Karpaty': '🌿 Spoznaj Biele Karpaty',
    'Mise: staň se objevitelem Bílých Karpat': 'Misia: staň sa objaviteľom Bielych Karpát',
    'Interaktivní kvíz s 12 terénními výzvami o přírodě CHKO Bílé Karpaty. Kvíz se otevře přes celou obrazovku.':
      'Interaktívny kvíz s 12 terénnymi výzvami o prírode CHKO Biele Karpaty. Kvíz sa otvorí na celú obrazovku.',
    '12 výzev': '12 výziev',
    'Časový limit u každé výzvy': 'Časový limit pri každej výzve',
    'Na konci zjistíš, jak dobře znáš Bílé Karpaty': 'Na konci zistíš, ako dobre poznáš Biele Karpaty',
    'Spustit kvíz →': 'Spustiť kvíz →',
    'Krajina Bílých Karpat': 'Krajina Bielych Karpát',
    'Ukončit kvíz?': 'Ukončiť kvíz?',
    'Tvůj postup se neuloží a kvíz začne příště od začátku.': 'Tvoj postup sa neuloží a kvíz začne nabudúce od začiatku.',
    'Ukončit kvíz': 'Ukončiť kvíz',
    'Pokračovat v kvízu': 'Pokračovať v kvíze',

    // Kvíz: questions and answers
    'Čeká tě 12 výzev.': 'Čaká ťa 12 výziev.',
    'Odpovědi zapisuj do své kartičky.': 'Odpovede si zapisuj do svojej kartičky.',
    'Za každou správnou odpověď získáš 1 bod.': 'Za každú správnu odpoveď získaš 1 bod.',
    'Přemýšlej, pozoruj a bav se.': 'Premýšľaj, pozoruj a zabav sa.',
    'Na konci zjistíš, jak dobře znáš Bílé Karpaty.': 'Na konci zistíš, ako dobre poznáš Biele Karpaty.',
    'Kde leží Bílé Karpaty?': 'Kde ležia Biele Karpaty?',
    'Vyber správné místo na mapě.': 'Vyber správne miesto na mape.',
    'Znáš orchidej?': 'Poznáš orchideu?',
    'Pouze jedna fotografie zobrazuje orchidej.': 'Iba jedna fotografia zobrazuje orchideu.',
    'Pravda nebo mýtus?': 'Pravda alebo mýtus?',
    'V Bílých Karpatech roste více než 40 druhů orchidejí.': 'V Bielych Karpatoch rastie viac ako 40 druhov orchideí.',
    'Kdo nežije v Bílých Karpatech?': 'Kto nežije v Bielych Karpatoch?',
    '🐺 Vlk obecný': '🐺 Vlk dravý',
    '🐃 Zubr evropský': '🐃 Zubor hrivnatý',
    '🦊 Liška obecná': '🦊 Líška hrdzavá',
    '🦌 Jelen evropský': '🦌 Jeleň lesný',
    'Které zvíře zanechalo tuto stopu?': 'Ktoré zviera zanechalo túto stopu?',
    'Pes domácí': 'Pes domáci',
    'Liška obecná': 'Líška hrdzavá',
    'Jak se jmenuje nejvyšší vrchol Bílých Karpat?': 'Ako sa volá najvyšší vrch Bielych Karpát?',
    'Velká Javořina': 'Veľká Javorina',
    'Velký Javorník': 'Veľký Javorník',
    'Co pomáhá zachovat druhově pestré louky?': 'Čo pomáha zachovať druhovo pestré lúky?',
    'Vyber dvě správné odpovědi.': 'Vyber dve správne odpovede.',
    'Šetrné kosení luk': 'Šetrné kosenie lúk',
    'Hnojení luk chemickými hnojivy': 'Hnojenie lúk chemickými hnojivami',
    'Pastva hospodářských zvířat': 'Pasenie hospodárskych zvierat',
    'Rozorání louky': 'Rozoranie lúky',
    'Najdi rozdíl': 'Nájdi rozdiel',
    '👉 Co je špatně a proč?': '👉 Čo je zle a prečo?',
    'Vzácné květiny se netrhají.': 'Vzácne kvety sa netrhajú.',
    'Zapamatuj si obrázek': 'Zapamätaj si obrázok',
    'Za chvíli tě čeká otázka — dobře se dívej!': 'O chvíľu ťa čaká otázka — dobre sa pozeraj!',
    'Kolik motýlů bylo na obrázku?': 'Koľko motýľov bolo na obrázku?',
    'Byly to můry, ne motýli': 'Boli to mory, nie motýle',
    'Více než 3': 'Viac ako 3',
    'Poznáš zvíře?': 'Poznáš zviera?',
    'Kalous ušatý': 'Myšiarka ušatá',
    'Puštík obecný': 'Sova obyčajná',
    'Co bys udělal?': 'Čo by si urobil?',
    'Našel jsi rostlinu, která vypadá jako vzácná…': 'Našiel si rastlinu, ktorá vyzerá ako vzácna…',
    'Utrhnu ji, abych zjistil, co to bylo.': 'Odtrhnem ju, aby som zistil, čo to bolo.',
    'Vyfotím ji a zkusím ji určit pomocí iNaturalistu.': 'Odfotím ju a skúsim ju určiť pomocou iNaturalistu.',
    'Přesadím ji doma do květináče.': 'Presadím ju doma do kvetináča.',
    'Kteří živočichové jsou pro Bílé Karpaty typičtí?': 'Ktoré živočíchy sú typické pre Biele Karpaty?',
    'Vyber 6 — každé správné zvíře = 1 bonusový bod.': 'Vyber 6 — každé správne zviera = 1 bonusový bod.',
    '🦋 Jasoň dymnivkový': '🦋 Jasoň chochlačkový',
    '🐞 Páchník hnědý': '🐞 Pižmovec hnedý',
    '🦋 Otakárek ovocný': '🦋 Vidlochvost ovocný',
    '🦎 Ještěrka zelená': '🦎 Jašterica zelená',
    '🦅 Orel mořský': '🦅 Orliak morský',
    '🐈 Kočka divoká': '🐈 Mačka divá',
    '🦅 Včelojed lesní': '🦅 Včelár lesný',
    'Vyhodnocení': 'Vyhodnotenie',
    'Jak jsi dopadl?': 'Ako si dopadol?',
    '🌿 Děkujeme': '🌿 Ďakujeme',
    'Děkujeme za účast!': 'Ďakujeme za účasť!',
    'Ukaž svou kartičku organizátorovi a získej razítko do své sběratelské karty!': 'Ukáž svoju kartičku organizátorovi a získaj pečiatku do svojej zberateľskej karty!',
    'Pozorovatel': 'Pozorovateľ',
    'Badatel': 'Bádateľ',
    'Objevitel': 'Objaviteľ',
    'Právě jsi začal objevovat přírodu Bílých Karpat.': 'Práve si začal objavovať prírodu Bielych Karpát.',
    'Přírodu Bílých Karpat už znáš opravdu dobře.': 'Prírodu Bielych Karpát už poznáš naozaj dobre.',
    'Gratulujeme! Získal jsi titul Objevitele Bílých Karpat.': 'Gratulujeme! Získal si titul Objaviteľa Bielych Karpát.',

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
    'Ilustrace druhu Vlk obecný': 'Ilustrácia druhu Vlk dravý',
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
    'Ilustrace druhu Kočka divoká': 'Ilustrácia druhu Mačka divá',
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
    'Ilustrace druhu Vydra říční': 'Ilustrácia druhu Vydra riečna',
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
    'Ilustrace druhu Vlha pestrá': 'Ilustrácia druhu Včelárik zlatý',
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
    'Ilustrace druhu Mlok skvrnitý': 'Ilustrácia druhu Salamandra škvrnitá',
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
    'Ilustrace druhu Modrásek bahenní': 'Ilustrácia druhu Modráčik bahniskový',
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
    'Ilustrace druhu Roháč obecný': 'Ilustrácia druhu Roháč obyčajný',
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
    'Ilustrace druhu Tesařík alpský': 'Ilustrácia druhu Fuzáč alpský',
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
    'Ilustrace druhu Lilie zlatohlavá': 'Ilustrácia druhu Ľalia zlatohlavá',
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
    'Ilustrace druhu Vstavač vojenský': 'Ilustrácia druhu Vstavač vojenský',
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

  function valid(l) { return l === 'sk' || l === 'cs' ? l : null; }

  function readStore(store, key) {
    try { return valid(window[store].getItem(key)); } catch (e) { return null; }
  }
  function writeStore(store, key, value) {
    try { window[store].setItem(key, value); } catch (e) {}
  }

  try { localStorage.removeItem(LEGACY_KEY); } catch (e) {}

  function localeLang() {
    var primary = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    return /^sk\b/i.test(primary) ? 'sk' : 'cs';
  }

  // Manual choice wins, then a ?lang= link (for this visit only), then the device locale.
  function detect() {
    var manual = readStore('localStorage', MANUAL_KEY);
    if (manual) return manual;
    var m = /[?&]lang=(sk|cs|cz)\b/i.exec(location.search);
    if (m) {
      var fromUrl = m[1].toLowerCase() === 'sk' ? 'sk' : 'cs';
      writeStore('sessionStorage', SESSION_KEY, fromUrl);
      return fromUrl;
    }
    return readStore('sessionStorage', SESSION_KEY) || localeLang();
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
    // Slovak audio is set as the element's src; removing it falls back to the original Czech <source>.
    var skSrc = el.getAttribute('data-sk-src');
    if (skSrc && el.nodeName === 'AUDIO') {
      var want = lang === 'sk' ? skSrc : null;
      if (el.getAttribute('src') !== want) {
        var wasPlaying = !el.paused;
        if (wasPlaying) el.pause();
        if (want) el.setAttribute('src', want); else el.removeAttribute('src');
        el.load();
        // load() drops the queued pause event, so notify the card's play button directly.
        if (wasPlaying) el.dispatchEvent(new Event('pause'));
      }
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
    var els = root.querySelectorAll('[alt],[title],[aria-label],[data-sk-href],[data-sk-src]');
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
    writeStore('localStorage', MANUAL_KEY, next);
    applyAll();
    document.dispatchEvent(new CustomEvent('innomethod:langchange', { detail: { lang: next } }));
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
