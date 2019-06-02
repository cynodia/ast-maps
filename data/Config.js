const mmConfigurations = {

    'tungvekter': {
        title: 'Tungvekteren',
        /**
         * The main configuration for this trail-cluster
         * mainHeaderMobile: The main page-header on the mobile version(should be short)
         * mainHeaderDesktop: The main page-header on the desktop version
         * infoText: The infomation text that is shown on desktop front-page and when pressing 'i' on mobile
         *           a generic mtbmaps.net text will be appended to this text.
         * levelColors: color-mappings for trail levels
         */
        main: {
            mainHeaderMobile: "Tungvekteren",
            mainHeaderDesktop: "Arendal Singletrack - Tungvekteren",
            infoText: "<h2>Tungvekter</h2>Tungvekteren er et stinettverk i Arendal bymark som er tilrettelagt og merket for stisykling. Som navnet på stien indikerer (Tungvekteren), så er dette et stinettverk som skal kunne gi deg noen skikkelig utfordringer. Stiene er er tilrettelagt slik at man skal kunne ha det like gøy oppover som nedover. Det skal være mulig å sykle de aller fleste stiene uten fotisett. Gjør deg godt kjent med stiene før du prøver deg på de mest tekniske partiene og vis respekt for alle brukere av stiene. Tungvekteren er bygget på dugnad av stisykkelklubben Arendal Singletrack med midler fra Gjensidigestiftelsen. Det er merket med pilskilt, refleksmerker og hvitmaling på trær.<br><br>" +
                    "På denne siden Kan du finne detaljert informasjon om de fleste kjente stier i området, samt forslag til ruter du kan ta.<h2>Adkomst</h2>Om du ankommer med bil er parkeringsplassen på Dråbelia, markert med <img height=\"25\" width=\"25\" src=\"data/imgs/marker_parking.png\">, et naturlig utgangspunkt. Om du sykler inn kan løypenettet nås fra alle kanter." +
                    "<h2>Arendal Singletrack</h2>Arendal Singletrack(AST) er en stisykkelklubb med ca. 100 medlemmer. Mer info på <a href='https://www.arendalsingletrack.com/'>arendalsingletrack.com</a>",
            levelColors: {
                1: '#090',
                2: '#66f',
                3: '#f00'
            },
            center: { lat: 58.48290466461497, lng: 8.786959648132326 }
        },

        /**
         * Markers you want on the map
         * title: Helptext displayed when hovering the marker
         * icon: The marker icon use
         * position: marker position
         */
        markers: {
            "parking_drabelia": {
                title: 'Parkering - Dråbelia',
                icon: 'data/imgs/marker_parking.png',
                position: {lat: 58.478971, lng: 8.794247}
            },
            "parking_tennisbanen": {
                title: 'Parkering - Tennisbanen',
                icon: 'data/imgs/marker_parking.png',
                position: {lat: 58.471307, lng: 8.779526 }
            },
            "parking_ribbervann": {
                title: 'Parkering - Ribbervann',
                icon: 'data/imgs/marker_parking.png',
                position: {lat: 58.478306, lng: 8.780056}
            },
            "sykkelparken": {
                title: 'Sykkelparken',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.485566, lng: 8.796820}
            },
            "kremtoppen": {
                title: 'Kremtoppen',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.485446, lng: 8.788034}
            },
            "varden": {
                title: 'Varden',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.481962, lng: 8.783006}
            },
            "sinsenkrysset": {
                title: 'Sinsenkrysset',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.48524334, lng: 8.792927563}
            }
        },

        /**
         * The trails you wish to display
         *
         * url: the URL for the GPX file
         * title: Trail title
         * level: difficulty level(1 = easy, 2 = medium, 3 = hard)
         * findStartText: Textual descrition of how to find the trail start-point
         * bidirectionl: can be ridden in both directions
         * infoText: General info text displayed about trail
         * images.trailStart: URL to image displaying the trail start point
         */
        trails: [
            {
                url: 'data/trails/tungvekter/lysloypa.gpx',
                title: 'Lysløypa',
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "Lysløypa i Birkenlund. De fleste stiene har en kobling til denne. Mye fotgjengere og joggere her, vær oppmerksom!",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/songebakken.gpx',
                title: 'Songebakken',
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "Grusveg som går fra Sinsenkrysset ned mot Songe. Sykkelparken ligger ved denne vegen.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/halvfire.gpx',
                title: 'Halv Fire',
                level: 2,
                bidirectional: false,
                findStartText: "Stien er skiltet inn fra Sinsenkrysset",
                infoText: "Glad i hopp og sprett? Da er dette runden for deg! En artig rundløype med en nedkjøring som inneholder flere friske hopp og doserte svinger.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/kunto.gpx',
                title: 'Kun To',
                level: 2,
                bidirectional: false,
                findStartText: "Starter fra sinsenkrysset",
                infoText: "Kun to fikk navnet sitt basert på antallet stibyggere som dukket opp på dugnad da stien be påbegynt. Etter har stien blitt bygd om grunnet skogsarbeide og har blitt en flott sti med flere hopp, broer og doserte svinger.",
                images: {
                    trailStart: 'tungvekter/trails/11.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/hundetoppen.gpx',
                title: 'Hundetoppen',
                level: 3,
                bidirectional: false,
                findStartText: "Inngangen til denne stien er litt skjult. Se etter en liten haug med singel langs lysløypa.",
                infoText: "En teknisk utfordrende sti med litt av alt. Første halvdel er en krevende oppforkjøring med hårnålssvinger, steiner og røtter. Fra toppen er det en nedforkjøring med bratte partier og et par hopp mot slutten. Det største hoppet her et lite gap, om du ønsker å kjøre forbi er det bare å følge stien rett frem(oppet ligger på venstre hånd).",
                images: {
                    trailStart: 'tungvekter/trails/12.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/vestbredden.gpx',
                title: 'Vestbredden',
                level: 3,
                bidirectional: true,
                findStartText: "En kan starte sørfra fra den lille gress/strand-området på vestsiden av vannet. Nordfra kan en kjøre på via <i>Sigaren</i> eller vi egen innkjøring fra lysløypa.",
                infoText: "Vestbredden går langs store ribbervann på omtsatt side som <i>Østbredden</i>. Stien er teknisk krevende med flere bratte partier og crux. Kan kjøres begge veger og bør kombineres med <i>Sigaren</i>.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/ostbredden.gpx',
                title: 'Østbredden',
                level: 2,
                bidirectional: true,
                findStartText: "I nordenden finner du stien ut fra lysløypa der hvor løypa passerer mellom store og lille Ribbervann. I sørenden starter løypa i bunnen av den bratte bakken som starter i sørenden av Store Ribbervann i Lysløypa.",
                infoText: "Har du kun sett ett bilde fra Tungvekteren så er sjansen stor for at det er fra <i>Østbredden</i>! Dette er en perle av en sti som går langsmed Store Ribbervann tilrettelagt med vakre og spennende broer og med et par små og store hindringer som kan gi de fleste en liten utfordring. Et absolutt MUST for førstegangsreisende!",
                images: {
                    trailStart: 'tungvekter/trails/17.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/xkjerringene.gpx',
                title: 'X-Kjærringene',
                level: 2,
                bidirectional: false,
                findStartText: "Stien starter rett ut fra parkeringa på Dråbelia, opp ved infoskiltet.",
                infoText: "En naturlig start på turen. Her er det rett på sak med et klatreparti opp mot første lille topp. Så bærer det utfor med mulighet for god fart! Stien går i parallell med den originale <i>Kjerringene</i> jerrevegen, og flere steder går den også via kjerrevegen.",
                images: {
                    trailStart: 'tungvekter/trails/1.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/ribberdalen.gpx',
                title: 'Ribberdalen',
                level: 2,
                bidirectional: true,
                findStartText: "Stien starter rett nord langs med tennisbanen fra parkeringen.",
                infoText: "En flott start på turen om du kommer inn sørfra på sykkel, eller evt velger å parkere ved tennisbanen på Løvoldsveien. Stien tar deg inn til knutepunktet en sørenden av Store Ribbervann.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sigaren.gpx',
                title: 'Sigaren',
                level: 3,
                bidirectional: true,
                findStartText: "Inngangen nordfra finner en fra lysløypa like vest for Store og Lille Ribbervann. Sørfra kjører en på fra <i>Vestbredden</i>",
                infoText: "En fin liten sti som forbinder <i>Vestbredden</i> med nordenden av Store Ribbervann.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/diagonalen.gpx',
                title: 'Diagonalen',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/eventyrskogen.gpx',
                title: 'Eventyrskogen',
                level: 1,
                bidirectional: true,
                findStartText: "Du finner et piknikbord langs lysløypa. Her går det en sti paralellt med lysløypa inn like ved bordet.",
                infoText: "Dette er en relativt enkel sti som starter ut med en nedoverbakke som ender i en krapp høyresving. Så skal en over en liten bro før stien fortsetter i en vakker furuskog.",
                images: {
                    trailStart: 'tungvekter/trails/10.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/eventyrrunde.gpx',
                title: 'Eventyrskogen runde',
                level: 2,
                bidirectional: true,
                findStartText: "",
                infoText: "En fin liten rundsti på myk et mykt furunålsteppe. Litt opp og ned, men ganske snilt.",
                images: {
                    trailStart: 'tungvekter/trails/5.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/lilleribbervann.gpx',
                title: 'Lille Ribbervann',
                level: 1,
                bidirectional: true,
                findStartText: "",
                infoText: "Fin tur langs østbredden av Lille Ribbervann. Litt røtter her og der og et kloppeparti i sørenden.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/ribberveggen.gpx',
                title: 'Ribberveggen',
                level: 3,
                bidirectional: true,
                findStartText: "Følg <i>Rallarvegen</i> til vegen deler deg ved et steingjerde. Her holder du mot venstre.",
                infoText: "En fantastisk flott tilrettelagt sti som går langs ribberåsen. Her er det lagt ned mye arbeide og du vil kjøre over stenpartier hvor en bare må beundre håndverket i steinleggingen! Denne er ikke noe for deg med høydeskrekk!",
                images: {
                    trailStart: 'tungvekter/trails/12.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/inniskauen.gpx',
                title: 'Skauen',
                level: 1,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/s-works.gpx',
                title: 'S-Works',
                level: 2,
                bidirectional: false,
                findStartText: "Stien starter like ved slutten av <i>X-Kjærringene</i> og er en naturlig vei videre på turen.",
                infoText: "En kort sti som består av klarting gjennom en del hårnålssvinger. Teknisk utfordrende!",
                images: {
                    trailStart: 'tungvekter/trails/18.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/froskedammen.gpx',
                title: 'Froskedammen',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti2.gpx',
                title: 'Muldvarpen',
                level: 3,
                bidirectional: false,
                findStartText: "Stien starter ved en bro de <i>Froskedammen</i> og <i>Kila</i> slutter.",
                infoText: "Flott sti som starter med et lite klartreparti for så å gå over i en seksjon med diverse små utfordringer av stein og tre før den ender i en nedkjøring med hopp og doserte svinger!",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti3.gpx',
                title: 'Uten navn',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti4.gpx',
                title: 'Opp til parkeringa',
                level: 2,
                bidirectional: true,
                findStartText: "Stien starter østover rett ut fra lysløypa ved nordenden av Heitjenn.",
                infoText: "En heftig avslutning på sykkelturen! Denne klatreetappen opp mot parkeringsplassen byr på et par turer langs tømmerstokker og over diverse hindringer. Har du noen krefter igjen har du muligheten til å bruke dem opp her!",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/rallarvegen.gpx',
                title: 'Rallarvegen',
                level: 3,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: 'tungvekter/trails/12.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/asylet.gpx',
                title: '3D/Asylet',
                level: 3,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/langsveien.gpx',
                title: 'Heitjenn',
                level: 2,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/kvartoverhalvfire.gpx',
                title: 'Kvart på halv fire',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/langemyrdownhill.gpx',
                title: 'Langemyr Downhill',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/langemyrskauen.gpx',
                title: 'Langemyr-skauen',
                bidirectional: true,
                level: 2,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti8.gpx',
                title: 'Langemyrskauen runde',
                bidirectional: false,
                level: 2,
                findStartText: "Ca midt i <i>Langemyrskauen</i> deler stien seg i to. Følg mot venstre for denne lille akstra runden.",
                infoText: "Artig liten sti som starter med litt klarting for så å gå nedover mot nedkjøringa til <i>Hundremeterskogen</i>.",
                images: {
                    trailStart: 'tungvekter/trails/12.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/haldors.gpx',
                title: 'Haldors gullrekke',
                level: 2,
                bidirectional: true,
                findStartText: "Denne stien starter i østlig retning fra <i>100-meterskogen</i>.",
                infoText: "Stien starter med et flott klatreparti med fine hårnålssvinger. Når en kommer et stykke opp hvner en i furuskog mens stien fortsetter å stige over steiner og røtter. Du kan kommer helt opp til <i>Kremtoppen</i> via denne.",
                images: {
                    trailStart: 'tungvekter/trails/8.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/sti5.gpx',
                title: 'Korketrekkeren',
                level: 3,
                bidirectional: false,
                findStartText: "Følg <i>Haldors Gullrekke</i> til topps. Like før du kommer over til <i>Downhillen</i> deler stien seg og du skal holde mot venstre.",
                infoText: "En smårøff nedkjøring. En kan velge å start helt fra toppen av knausen nedkjøringen går fra. Her finner en en ekstra utfordrende seksjon. Eventuelt kan en begynne bak denne knabben for en litt enklere start.",
                images: {
                    trailStart: 'tungvekter/trails/8.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/langemyrtilvegen.gpx',
                title: 'Puddingen',
                bidirectional: false,
                level: 2,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/forbidammen.gpx',
                title: 'Forbi dammen',
                level: 1,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/elgdriden.gpx',
                title: 'Elgdriden',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/opptilvegen.gpx',
                title: 'Opp til vegen',
                level: 1,
                bidirectional: true,
                findStartText: "Stien starter rett ut mpt øst fra lysløypa ved sørenden av Heitjenn.",
                infoText: "Her kan du klatre deg ut av lysløypa og opp til parkeringsplassen på Dråbelia. Tyn ut de siste kreftene i denne sluttspurten!",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/downhillen.gpx',
                title: 'Downhillen',
                level: 3,
                bidirectional: false,
                findStartText: "Downhillen starter fra Kremtoppen. Hit er det flere veier en kan ta. En er via Haldors gullrekke en annen er å følge stien opp paralelt med Kamelen fra Flatan.",
                infoText: "Som navnet sier er dette en bratt utforkjøring. Ganske tidlig i stien kommer en til en smal bro som ligger rett bak en bakketopp. Følg godt med her.<br>Som alltid er det en fordel å ta det litt rolig første gangen en kjører ned en ny sti, selv om den er tilpasset høyt tempo!",
                images: {
                    trailStart: 'tungvekter/trails/16.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/balplassentilveggen.gpx',
                title: 'Bålplassen til the wall',
                level: 1,
                bidirectional: true,
                findStartText: "Fra bålplassen er det flere veier å ta for å komme inn på denne stien. En kan dra over cruxet mot den himmelske freds plass - herfra skal en opp en utfordrene start mot høyre fra plassen. Alternativt kan en holdr til høyre for cruxet fra bålplassen og komme rett inn på stien.",
                infoText: "Denne stien kan gjøres til en utfordring i starten ved å ta via den himmelske freds plass. På slutten ender stien i <i>The wall</i> som er et crux en trenger god fart inn i for å forsere. Evt tar du til venstre rett før <i>The Wall</i> og kjører en liten omvei.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/flatan.gpx',
                title: 'Flatan',
                level: 1,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/uphillen.gpx',
                title: 'Uphillen',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/innfragraen.gpx',
                title: 'Inn fra Gråen',
                level: 1,
                bidirectional: true,
                findStartText: "Starter ut fra bussholdeplassen i Mauråsvegen.",
                infoText: "En grei inngang inn til stinettverket fra nordvest-siden. Når en sykler innover ender denne opp like ved starten på <i>Vestbredden</i>.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/toppentildiagonalen.gpx',
                title: 'Toppen til diagonalen',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/hftilskauen.gpx',
                title: null,
                level: 0,
                bidirectional: true,
                findStartText: null,
                infoText: null,
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/eventyrsnarvei.gpx',
                title: null,
                level: 0,
                bidirectional: true,
                findStartText: null,
                infoText: null,
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/skauenut.gpx',
                title: 'Ut fra skauen',
                level: 1,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/saeden.gpx',
                title: 'Sæden',
                level: 1,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/philip.gpx',
                title: 'Fillip',
                level: 2,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/langslangemyr.gpx',
                title: 'Ørretdammen',
                level: 2,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/kamelen.gpx',
                title: 'Kamelen',
                level: 3,
                bidirectional: false,
                findStartText: "",
                infoText: "Røff utforkjøring som bør prøvekjøres i roligere tempo første gangen. Går via sti og svaberg med mulighet for luft under hjula et par steder.",
                images: {
                    trailStart: 'tungvekter/trails/9.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/gubbenoggamla.gpx',
                title: 'Gubben og gamla',
                level: 3,
                bidirectional: false,
                findStartText: "",
                infoText: "Stien starter i toppen av <i>Muldvarpen</i> hvor det går en nedkjøring ned til et parti som går paralellt med <i>Froskedammen</i> før den fotsetter mot Songe paralellt med grusvegen et stykke. Så krysser du en kjerreveg før du kommer inn på det siste partiet. Dette er en teknisk utfordrende bit som starter med et relativt høyt drop(kan kjøre til høyre for dette) og følges opp av et hopp og en litt vrang venstresving før stien fortsetter ned til grusvegen og du er like ved Sykkelparken.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/einball.gpx',
                title: 'Einball',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "En frisk sti som tar deg ned til starten av <i>Gubben og Gamla</i>. Her er det potensiale for god fart med en del utfordrende partier underveis. Stien krysser/går via andre stier et par steder, så vær oppmerksom!",
                images: {
                    trailStart: 'tungvekter/trails/3.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/walltillangemyr.gpx',
                title: 'Wall til Langemyr',
                bidirectional: true,
                level: 1,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/snarveien.gpx',
                title: 'Kila',
                bidirectional: false,
                level: 3,
                findStartText: "Fra toppen av S-works, snu sørover.",
                infoText: "Artig liten sti som starter ut med et dropp og følger på med et par hopp. Forbinder S-works med Muldvarpen som et alternativ til Froskedammen.",
                images: {
                    trailStart: 'tungvekter/trails/18.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/sti6.gpx',
                title: '100-meterskogen',
                level: 1,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/motsaeden.gpx',
                title: 'Opp mot Sæden',
                level: 1,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/nedfraribberaasen.gpx',
                title: 'Ribberåsen ned',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: 'tungvekter/trails/12.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/pikniktoppen.gpx',
                title: 'Pikniktoppen',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/tilbjornebo.gpx',
                title: 'Til Bjørnebo',
                level: 1,
                bidirectional: true,
                findStartText: "Følg stien/kjerrevegen innover jordet fra piknikbordet langs lysløypa.",
                infoText: "Bjørnebo er en gård som eies av Arendal kommune og disponeres av KFUK/KFUM spederen. Enkelte søndager er det åpent med servering av vafler og varme drikker.<br>Videre nordover fra Bjørnebo finner en flere flotte stier i skogområdene.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti7.gpx',
                title: 'Snarvei',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/juvet.gpx',
                title: 'Juvet',
                level: 3,
                bidirectional: false,
                findStartText: "Stien starter fra første toppen i <i>X-kjærringene</i>. Ta til venstre ned mot kjerrevegen(Kjerringene) og fortsett over denne.",
                infoText: "Spennende liten sti med et dropp midt i. Kan være litt vanskelig å få fart inn mot droppet, så pass på.",
                images: {
                    trailStart: 'tungvekter/trails/8.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/frajovannsveien.gpx',
                title: 'Mauråsveien',
                level: 2,
                bidirectional: true,
                findStartText: "Stien starter nesten i hagen til Krokstien 10. Følg det tydelige stisporet ned mot skogen fra innkjørselen.",
                infoText: "Artig liten sti som danner en grei inngang til lysløypa fra Jovannsveien/Krokstien. Relativt humpete og fartsylt nedover samt utfordrende å kjøre opp.",
                images: {
                    trailStart: null
                }
            }
        ]
    },

    'asbie': {
        title: 'Åsbieskogen',
        main: {
            mainHeaderMobile: "Åsbieskogen",
            mainHeaderDesktop: "Åsbieskogen",
            infoText: "<h2>Åsbieskogen</h2>Åsbieskogen er et turområde som brukes mye av mange, og det er derfor stier på kryss og tvers. Det er knapt mulig å kjøre seg bort her, så det er bare å utforske. Men ta hensyn til andre du måtte møte på din vei." +
                    "<h2>Adkomst</h2>Et godt utgangspunkt er parkeringsplassen på Industritoppen. Ta av fra E-18 ved skiltet avkjøring til FV-42, men kjør i motsatt retning (mot syd) rundt brannstasjon og nytt politihus og opp til toppen.<br>" +
                    "Det er også mulig å parkere på Bjønnes og sykle inn til Biejordene derfra.",
            levelColors: {
                1: '#090',
                2: '#66f',
                3: '#f00'
            },
            center: { lat: 58.45574888827977, lng: 8.731384277343752 }
        },


        markers: {
            "parking_stoa": {
                title: 'Parkering - Stoa',
                icon: 'data/imgs/marker_parking.png',
                position: {lat: 58.457065, lng: 8.722429}
            },
            "parkering_bjonnes": {
                title: 'Parkering - Bjønnes',
                icon: 'data/imgs/marker_parking.png',
                position: {lat: 58.461755, lng: 8.743530}
            },
            "collsdroppet": {
                title: 'Collsdroppet',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.450178, lng: 8.733563}
            },
            "rytterspranget": {
                title: 'Rytterspranget',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.452628, lng: 8.735032}
            },
            "krysset": {
                title: 'Krysset',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.458194, lng: 8.729518}
            },
            "hogstfelttoppen": {
                title: 'Hogstfelttoppen',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.459054, lng: 8.732818}
            },
            "doppedalen": {
                title: 'Doppedalen',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.4556230, lng: 8.7320650}
            }

        },

        trails: [
            {
                url: 'data/trails/asbie/grusvegen.gpx',
                title: 'Grusvegen - hovedstien',
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "Hovedstien rundt Åsbieskogen",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/asbie/grus_doppedalen.gpx',
                title: 'Grusvegen til Doppedalen',
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "Hovedstien inn til Doppedalen",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/asbie/jordvepsen.gpx',
                title: 'Jordvepsen',
                level: 3,
                bidirectional: false,
                findStartText: "Denne starter på høyeste punkt på østsiden av hovedgrusvegen. Her er det et område med et gammel piknikbord. Kjør inn her så ser du stien til høyre for bordet.",
                infoText: "Dette er en fantastisk nedkjøring med masse fart og spenning! Det er en relativt røff sti som starter med et godt dropp - kjør til venstre om du ønsker å unngå dette. Det kommer også et crux i det en skal ned på <i>Langekjerr</i> helt på slutten.",
                images: {
                    trailStart: 'asbie/IMG_20190508_202126_7885.JPG'
                }
            },
            {
                url: 'data/trails/asbie/padda_kantarellen.gpx',
                title: 'Padda-Kantarellen',
                level: 3,
                bidirectional: false,
                findStartText: "Padda starter inn mot høyre fra grusvegen mot Doppedalen, like bortenfor den sørlige starten på Langekjerr.",
                infoText: "Disse to stiene kan kombineres med <i>Jordvepsen</i> for en fartsfylt og røff opplevelse! Her er det flere bratte seksjoner og et flytparti mot midten hvor en virkelig kan dra på. <br> Pass på å ta til høyre ned mot Biejordene på toppen etter nedkjøringene i Padda.",
                images: {
                    trailStart: 'asbie/IMG_20190508_201914_7883.JPG'
                }
            },
            {
                url: 'data/trails/asbie/hoppene.gpx',
                title: 'Hoppene',
                level: 3,
                bidirectional: false,
                findStartText: "Denne stien starter med en nedoverbakke til venstre et lite stykke opp i <i>Opp Vedlaget</i> om en kjører mot Stoa. Det finnes også en alternativ sti opp fra Langekjerr, men denne ender i dumpa etter den første nedoverbakken.",
                infoText: "En relativt kort sti som ineholder en del hopp og dropp. Avsluttes inn i Langekjerr med det flotte oppbygde hoppet der! Det kanskje mest utfordrende hoppet kommer i bakken ned mot Langekjerr, dette kan en fint unngå ved å holde til venstre.",
                images: {
                    trailStart: 'asbie/IMG_20190508_201118_7878.JPG'
                }
            },
            {
                url: 'data/trails/asbie/opp_speiderleir.gpx',
                title: 'Opp til speiderleiren',
                level: 2,
                bidirectional: false,
                findStartText: "Denne kommer litt brått på fra stien langs biebekken. ca 20-30 meter fra der en krysser bekken nedenfor speiderleiren gå stien rett opp skråningen.",
                infoText: "En artig liten sikk-sakk-klatring opp fra Biebekken til speiderleiren. Teknisk utfordrende med hårnålssvinger.",
                images: {
                    trailStart: 'asbie/IMG_20190505_204453_7837.JPG'
                }
            },
            {
                url: 'data/trails/asbie/hogstfeltet_duppedalen.gpx',
                title: 'Hogstfeltet til Doppedalen',
                level: 3,
                bidirectional: false,
                findStartText: "Ta deg opp til Hogstfeltet via <i>Krysset til Hogstfeltet</i>. I krysset hvor en kan kjøre opp til Hogstfelttoppen og starten på <i>Hogstfeltet dwonhill 1/2</i> følger du på rett frem. Ta også rett frem i nedste kryss(<i>Hogstfeltet Downhill 3</i>).",
                infoText: "En flott kobling fra hogstfeltet og ned til Doppedalen som gir mulighet for kombinasjon med mange andre stier! Denner har et crux ca 1/3 inn. Her kan en enten kjøre rett ned, finne et spor litt til høyre i ura eller velge å kjøre lengre inn til høyre, ned gjennom skauen.",
                images: {
                    trailStart: 'asbie/IMG_20190508_200429_7875.JPG'
                }
            },
            {
                url: 'data/trails/asbie/duppedalen_jordet.gpx',
                title: 'Doppedalen til Jordet',
                level: 3,
                bidirectional: false,
                findStartText: "Følg en av stiene som ender i, eller går via Doppedalen. Du kan også følge grusvegen inn til Doppedalen, denne er skiltet. Kommer du inn fra grusvegen starter selve stien videre forbi lavoen og mot venstre. Ta så første mulige veg til høre på toppen av oppoverbakken og pass på å holde mot høyre i bunnen av dumpa som følger.",
                infoText: "En fin nedkjøring fra Doppedalen ned til Biejordene. en starter ut med nedkjøring fra Doppedalen over til steingjerdet, pass på å ta over steingjerdet(venstre) og følg stien videre nedover. Mot slutten passerer en Speiderleiren og ender opp i en bratt nedkjøring ned mot bekken. Finn et godt spor her og hold det!",
                images: {
                    trailStart: 'asbie/IMG_20190508_200740_7876.JPG'
                }
            },
            {
                url: 'data/trails/asbie/syretoppen.gpx',
                title: 'Syretoppen',
                level: 3,
                bidirectional: false,
                findStartText: "Følg <i>Store skogvei</i> og videre <i>Steingjerdet til stien</i>. På toppen av den bratte klatringen i <i>Steingjerdet til stien</i> går det en sti inn mot høyre. Dette er starten på Syretoppen. Alternativt kan en ta av rett inn til mot den bratte klatringen fra grusvegen.",
                infoText: "Når en først har karret seg opp til startpunktet for denne stien kjenner en det allerede i beina - men her er det bare å gønne på videre opp, opp, opp. Når du først kommer til toppen venter en morsom nedkjøring med litt tekniske utfordringer som ender opp i nedkjøringen mot stien ved Biefeltet, evt Collsdroppet.",
                images: {
                    trailStart: 'asbie/IMG_20190508_204437_7891.JPG'
                }
            },
            {
                url: 'data/trails/asbie/krakefot.gpx',
                title: 'Kråkefotstien',
                level: 3,
                bidirectional: false,
                findStartText: "Fra pumpehuset i bunnen av grusvegen inn fra Myrene følger du vegen oppover rundt høyresvingen og videre innover. Følg så den bratte stien til venstre opp mot Solbergvannet. Like etter broen i starten av vannet tar du mot venstre og følger opp mot et rødt hus. Stien starter inn mot skogen til høyre i enden av innkjørselen. Ha respekt for beboerene.",
                infoText: "En fartsfylt sti som starter på flotte furuskogs-stier og etter hvert går over i et litt røffere parti før stien krysser inn på samme sport som <i>Hogstfeltet Downhill 1</i>. Den siste biten er fartsfylt med et lite hopp og noen flotte broer. Ned mot jordene holder du mot venstre og krysser til sist over mot høyre hvor en stein utgjør et naturlig siste hopp før en er ute på jordet. NB - PASS PÅ mot slutten da dette er et område hvor det ferdes mye folk(og hunder) til fots!",
                images: {
                    trailStart: 'asbie/IMG_20190508_200112_7873.JPG'
                }
            },
            {
                url: 'data/trails/asbie/gruvestien.gpx',
                title: 'Gruvestien',
                level: 2,
                bidirectional: false,
                findStartText: "Omtrent midt i <i>Vedlaget opp</i> går det en sti inn i skauen mot høyre om du kjører mot Stoa.",
                infoText: "En spennende liten sti som binder sammen stien fra vedlaget over til en av stiene opp mot hogstfeltet. Her kan en se rester etter gammel gruvedrift! Mot slutten kommer et bratt klatreparti - her er det en fordel med litt fart inn!",
                images: {
                    trailStart: 'asbie/IMG_20190508_201207_7879.JPG'
                }
            },
            {
                url: 'data/trails/asbie/langekjerr_stikk.gpx',
                title: 'Snarvei',
                level: 1,
                bidirectional: true,
                findStartText: "En liten sti som forbinder <i>Langekjerr</i> med <i>Flykræsjet</i>.",
                infoText: "Om du kjører <i>Langekjerr</i> oppover mot Stoa så kommer denne på venstre hånd ca 3/4 på vei. Kjører du <i>Flykræsjet mot Stoa går stien inn mot høyre ca. 2/3 av vegen.</i>",
                images: {
                    trailStart: 'asbie/IMG_20190508_201448_7880.JPG'
                }
            },
            {
                url: 'data/trails/asbie/paralellen.gpx',
                title: 'Paralellen',
                level: 3,
                bidirectional: true,
                findStartText: "Kjører du <i>Langekjerr</i> ned mot Biejordene så kommer inngangen til <i>Paralellen</i> på venstre hånd ca 100 meter etter hoppet med trepallene. Stien går bratt rett opp i skråninga.",
                infoText: "En artig sti som er et alternativ til, den ofte sølefylte, starten på <i>Langekjerr</i>. Er mest spennende i retning nedover(mot Biejordene) - men kan fint kjøres begge veier. Kjører du mot Biejordene er det et lite dropp på toppen av første bakke med alternativ sti på venstresiden.",
                images: {
                    trailStart: 'asbie/IMG_20190508_201753_7882.JPG'
                }
            },
            {
                url: 'data/trails/asbie/engelundveien.gpx',
                title: 'Ned fra Engelundveien',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "En gøyal start på turen om du kommer inn fra Maxis. En kort liten sti med steiner og humper som tar deg ned til grusveien ved Biejordene.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/asbie/langs_bekken.gpx',
                title: 'Langs bekken',
                level: 1,
                bidirectional: true,
                findStartText: "På østsiden starter stien like bak den lille bua i bunnen av bakken opp mot fra jordene mot biefeltet. På vestsiden starter stien inn over broa etter første jordet.",
                infoText: "Alle nedkjøringene som ender opp mot Biejordene ender ut i denne stien. Men den er ikke kun en exit fra nedkjøringne, den er et flott alternativ til sykling på grusvegen langs Biejordene! En veldig god start på turen som også er veldig nybegynnervennlig!",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/asbie/besseggen.gpx',
                title: 'Besseggen',
                level: 3,
                bidirectional: false,
                findStartText: "Starten på denne kommer brått på midt i <i>Langekjerr til Vedlaget</i>. Se etter en sti inn til høyre.",
                infoText: "En spennende og utfordrende sti som inneholder et parti over en steinegg. Ender opp i Langekjerr og kan naturlig kobles sammen med Paralellen.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/asbie/opp_til_hogstfeltet.gpx',
                title: 'Opp til hogstfeltet',
                level: 3,
                bidirectional: false,
                findStartText: "Starter i enden av <i>Krysset til Hogstfeltet</i>.",
                infoText: "En liten sti som går opp mot startpunktet for to av downhillene fra Hogstfeltet. Teknisk krevende med et crux ganske tidlig.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/asbie/langekjerr_vedlaget.gpx',
                title: 'Langekjerr til vedlaget',
                level: 1,
                bidirectional: false,
                findStartText: "",
                infoText: "Fin kobling fra krysset i i Langekjerr hvor hoppløypa og Krempartiet kommer inn, over til vedlaget med en eventuell exit mot Besseggen.",
                images: {
                    trailStart: 'asbie/IMG_20190508_201612_7881.JPG'
                }
            },
            {
                url: 'data/trails/asbie/politistien.gpx',
                title: 'Politistien',
                level: 1,
                bidirectional: true,
                findStartText: "Følg grusvegen lang med Solborgvannet videre mot Stoa. Etter en del oppover ender du på en høyde hvor stien går over i en nedoverbakke mot Stoa. Her går det en sti inn i skogen mot venstre.",
                infoText: "Et veldig godt innganspunkt mot alle de flotte nedkjøringene fra hogstfeltet eller for å følge stien ned til Doppedalen. Bør kombineres med en runde rundt Polititoppen!",
                images: {
                    trailStart: 'asbie/IMG_20190505_203148_7826.JPG'
                }
            },
            {
                url: 'data/trails/asbie/krempartiet.gpx',
                title: 'Krempartiet',
                level: 3,
                bidirectional: false,
                findStartText: "Følg grusvegen fra Biefeltet opp mot Stoa. Når du kommer til toppen av bakkene er det en liten åpning med et gammelt piknikbord på høyre hånd. Stien går inn til høyre rett etter denne toppen.",
                infoText: "En fartsylt og kupert sti fra grusvegen og over til Langekjerr. Ender i en bratt nedkjøring inn i Langekjerr med en naturlig overgang tidere til stien mot Vedlaget(evt Besseggen).",
                images: {
                    trailStart: 'asbie/IMG_20190508_202146_7886.JPG'
                }
            },
            {
                url: 'data/trails/asbie/krysset_duppedalen.gpx',
                title: 'Krysset til doppedalen',
                level: 2,
                bidirectional: true,
                findStartText: "Stien starter i krysset i slutten av <i>Politistien</i>. Her tar du til høyre.",
                infoText: "En fin sti nedover fra Politistien mot grusvegen ved Doppedalen. Her er det også mulighet for å at av mot Åsbieflyt.",
                images: {
                    trailStart: 'asbie/IMG_20190505_203356_7830.JPG'
                }
            },
            {
                url: 'data/trails/asbie/krysset_hogstfeltet.gpx',
                title: 'Krysset til hogstfeltet',
                level: 2,
                bidirectional: true,
                findStartText: "Stien starter i krysset i slutten av <i>Politistien</i>. Her tar du til venstre.",
                infoText: "Om en tar til venstre i enden av Politistien ender en på denne stien mot hogstfeltet. Men dette er ikke bare en transportetappe, men inneholder artige nedkjøringer og steinete seksjoner som byr på utfordringer.",
                images: {
                    trailStart: 'asbie/IMG_20190505_203344_7829.JPG'
                }
            },
            {
                url: 'data/trails/asbie/flykraesjet.gpx',
                title: 'Flykræsjet',
                level: 1,
                bidirectional: true,
                findStartText: "Om du følger grusvegen opp fra Biefeltet mot stoa, så går denne inn til høyre ca 100 meter etter toppen med piknikbordet som vist på bildet.<br> Fra Stoa finner du stien ved å følge hovedrunden fra Parkeringsplassen østover ca 50 meter.",
                infoText: "En trivelig sti som er et spennende alternativ til grusvegen ned fra parkeringen ved Stoa. Ca midt i stien er det et område hvor et fly styrtet på 50-tallet. Det er et avstikk til langekjerr og et mot Krempartiet. En flott start om en kommer fra parkeringen på Stoa.",
                images: {
                    trailStart: 'asbie/IMG_20190505_202727_7824.JPG',
                    trailStop: 'asbie/IMG_20190508_202215_7887.JPG'
                }
            },
            {
                url: 'data/trails/asbie/langekjerr.gpx',
                title: 'Langekjerr',
                level: 1,
                bidirectional: true,
                findStartText: "Denne er ikke vanskelig å finne! Om du følger grusvegen opp fra Biefeltet så deler den seg i to hvor veien til høyre går mot Doppedalen. Følg denne veien 10 meter så ser du stien går ut mot venstre i paralell med hovedvegen.<br> Fra Stoa finner du stien ved å følge hovedrunden fra Parkeringsplassen østover ca 100 meter.",
                infoText: "En av hovedfartsårene i Åsbieskogen foruten grusvegen. En flott sti hvor flere andre stier kobles til. Stien byr på et par utfordringer, særlig om den kjøres nordover.",
                images: {
                    trailStart: 'asbie/IMG_20190508_201930_7884.JPG'
                }
            },
            {
                url: 'data/trails/asbie/fly_stikk.gpx',
                title: 'Fly til kremparti',
                level: 3,
                bidirectional: false,
                findStartText: "Om du kjører <i>Flykræsjet</i> mot Stoa, så går denne stien rett frem og opp i lia i det <i>Flykræsjet</i> tar en venstresving etter ca 100 meter.",
                infoText: "Et avstikk fra Flykræsjet som starter med er bratt oppoverparti og byr på et par små dropp før det ender opp i slutten av Krempartiet.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/asbie/fly_stikk2.gpx',
                title: 'Fly til kremparti 2',
                level: 2,
                bidirectional: true,
                findStartText: "Fra <i>Krempartiet</i> kan du ta mot høyre 20 meter før den bratte bakken som avslutter stien ned mot <i>Langekjerr</i>.",
                infoText: "Denne stien binder sammen <i>Kermpartiet</i> og <i>Flykræsjet</i> og kan kjøres begge veger.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/asbie/vibeveien.gpx',
                title: 'Vibeveien downhill',
                level: 3,
                bidirectional: false,
                findStartText: "Fra krysset ved barnehagen følger du ærfuglvegen til krysset mot Vibevegen. Fortsett rett frem over gresset mellom garasjonene og huset. Du kommer ned på en parkeringsplass hvor du tar til høyre gjennom hekken over til en annen parkeringsplass. Hold til venstre ned på stien.",
                infoText: "Starter du turen fra Gåsåsen så er denne obligatorisk! En heftig nedkjøring med mye steiner og ganske god høyde ut på høyresiden. Her går det fort, så pass på for gående!",
                images: {
                    trailStart: 'asbie/IMG_20190505_200623_7822.JPG'
                }
            },
            {
                url: 'data/trails/asbie/hogstfeltet1.gpx',
                title: 'Hogstfeltet Downhill 1',
                bidirectional: false,
                level: 3,
                findStartText: "Ta deg opp til Hogstfeltet enten via <i>Krysset til Hogstfeltet</i> eller evt ved å kjøre opp <i>Hogstfeltet Downhill 3</i>. Følg stien opp mot Hogstfelttoppen og start nedkjøringen herfra! Har du dårlig tid så kan nedkjøringen startes direkte fra krysset opp mot Hogstfelttoppen.",
                infoText: "En fantastisk nedkjøring fra Hogstfeletet til Biejordene. Denne går via den flotte seksjonen i starten med dumper og doserte svinger. Når du kommer ned til en steinete seksjon som ender i et krys så hold mot venstre over bakketoppen og ta så mot høyre inn i Kråkefotstien. Siste biten ned mot jordene holder du mot venstre og krysser til sist over mot høyre hvor en stein utgjør et naturlig siste hopp før en er ute på jordet. NP - PASS PÅ mot slutten da dette er et område hvor det ferdes mye folk(og hunder) til fots!",
                images: {
                    trailStart: 'asbie/IMG_20190505_205145_7838.JPG'
                }
            },
            {
                url: 'data/trails/asbie/mariaasen_dh1.gpx',
                title: 'Mariåsen Downhill 1',
                bidirectional: false,
                level: 3,
                findStartText: "Finn blokkene på Mariåsen. Kjør til inngangene og ta mot høyre over gresset. Her starter stien.",
                infoText: "En flott start på turen om du kommer inn fra Strømmen. En skikkelig bratt nedkjøring med et dropp gjennom et steingjerde mot slutten.",
                images: {
                    trailStart: 'asbie/IMG_20190505_201913_7823.JPG'
                }
            },
            {
                url: 'data/trails/asbie/mariaasen_dh2.gpx',
                title: 'Mariåsen Downhill 2',
                bidirectional: false,
                level: 3,
                findStartText: "Finn blokkene på Mariåsen. Kjør nedenfor blokkene ved et bolighus ut på stien foran blokkene.",
                infoText: "En spennende start på turen om du kommer inn fra Strømmen. Her skal du over et parti og ned en nedkjøring med et relativt høyt stup ned mot venstre side. Tunga rett i munnen!",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/asbie/steingjerdet_tempelet.gpx',
                title: 'Steingjerdet til tempelet',
                bidirectional: false,
                level: 3,
                findStartText: "Følg <i>Store skogvei til steingjerdet. Ta så videre over steingjerdet.</i>",
                infoText: "Alternativ slutt på skogsløpypa i østkanten. En spennende nedkjøring som desverre ender i et område uten noen gode koblinger videre mot andre stier. Kjører du elektrisk så freser du bare opp igjen :-)",
                images: {
                    trailStart: 'asbie/IMG_20190508_204311_7890.JPG'
                }
            },
            {
                url: 'data/trails/asbie/scott1.gpx',
                title: 'Scottløypa del1',
                bidirectional: true,
                level: 1,
                findStartText: "Starten på denne går rett over grusvegen fra Parkeringen på Stoa.",
                infoText: "En trivelig liten sti som kan være en flott start på turen om du kommer inn fra parkeringen på Stoa. Kan f.eks. kobles opp mot Sotre skogveg.",
                images: {
                    trailStart: 'asbie/IMG_20190505_203006_7825.JPG'
                }
            },
            {
                url: 'data/trails/asbie/vedlaget.gpx',
                title: 'Opp vedlaget',
                bidirectional: true,
                level: 2,
                findStartText: "Inngangen i sørenden finner du fra grusvegen inn mot Doppedalen. Kjører du mot Doppedalen starter stien på toppen av den bratteste bakken. Det går to stier her, den til venstre er utgangen av <i>Langekjerr til vedlaget</i>. Stien til høyre er <i>Opp Vedlaget</i>.<br>I nordenden starter stien nesten helt i toppen av <i>Langekjerr</i>.",
                infoText: "En spennende sti som går fra grusvegen mot Doppedalen opp til nordenden av Langekjerr. Her er det utfordernde partier både oppover og nedover. Det er også mulig å ta av mot Hoppløypa eller Gruvestien.",
                images: {
                    trailStart: 'asbie/IMG_20190508_200911_7877.JPG'
                }
            },
            {
                url: 'data/trails/asbie/polititoppen.gpx',
                title: 'Polititoppen',
                bidirectional: false,
                level: 2,
                findStartText: "Følg <i>Politistien</i> ca 10-15 meter inn og ta til venstre.",
                infoText: "En artig rundløype som byr på tekniske utfordringer både oppover og nedover.",
                images: {
                    trailStart: 'asbie/IMG_20190505_203214_7827.JPG'
                }
            },
            {
                url: 'data/trails/asbie/aasbieflyt.gpx',
                title: 'Åsbieflyt',
                bidirectional: false,
                level: 3,
                findStartText: "Ca midt i stien, i en liten topp, i <i>Krysset til Doppedalen</i> går det en bratt sti opp til venstre om en kjører i retning Doppedalen.",
                infoText: "En <b>fantastisk</b> flytsti som går via Doppedalen ned til Rytterspranget. Denne er fartsfylt og en kan flyte gjennom de mange bratte oppoverbakkene om en utnytter terrenget. Ender opp i Åsbiesogens drøyeste nedover som igjen utgjør tilløpet til Rytterspranget.",
                images: {
                    trailStart: 'asbie/IMG_20190505_203444_7831.JPG'
                }
            },
            {
                url: 'data/trails/asbie/steingjerdet_stien.gpx',
                title: 'Steingjerdet til stien',
                bidirectional: false,
                level: 3,
                findStartText: "Følg <i>Store Skogvei</i> til du når toppen med steingjerdet. Ikke ta over steingjerdet, men følg stien mot venstre.",
                infoText: "En naturlig og fartsfylt avslutning på Store skogveg. Denne starter med en flott utforkjøring med flere hopp tekniske godbiter. Så kommer et klatreparti opp mot starten på Syretoppen. Om en vil føge stien videre holder en rett frem. en ender opp i nedkjøringen mot grusvegen ved Biefeltet, her kan en alternativt gå for Colls-droppet om en føler det er dagen for det!",
                images: {
                    trailStart: 'asbie/IMG_20190508_204305_7889.JPG'
                }
            },
            {
                url: 'data/trails/asbie/hogstfeltet2.gpx',
                title: 'Hogstfeltet downhill 2',
                bidirectional: false,
                level: 3,
                findStartText: "Ta deg opp til Hogstfeltet enten via <i>Krysset til Hogstfeltet</i> eller evt ved å kjøre opp <i>Hogstfeltet Downhill 3</i>. Følg stien opp mot Hogstfelttoppen og start nedkjøringen herfra! Har du dårlig tid så kan nedkjøringen startes direkte fra krysset opp mot Hogstfelttoppen.",
                infoText: "En alternativ nedkjøring fra Hogstfeltet til Biejordene. En føger samme flotte, parti ned mot krysset etter den steinete seksjonen. Her holder en mot høyre og følger en flott flytsti, med mye røtter og stein, nedover mot Speiderleiren. Stien ender opp i en bratt nedkjøring ned mot bekken. Finn et godt spor her og hold det!",
                images: {
                    trailStart: 'asbie/IMG_20190505_205145_7838.JPG'
                }
            },
            {
                url: 'data/trails/asbie/hogstfeltet3.gpx',
                title: 'Hogstfeltet downhill 3',
                bidirectional: false,
                level: 3,
                findStartText: "Følg <i>Krysset til Hogstfeltet</i> og fortsett rett frem i krysset hvor en tar av opp mot Hogstfelttoppen. Ta så første sti mot venstre lengre oppe. Alternativt kan en kjøre denne stien opp fra Biejordene - men det fordrer at en kjenner stien.",
                infoText: "En tredje sti ned fra Hogstfeltet til Biejordene. Denne starter ikke på samme sted som de to andre og følger en egen sti i starten før den kommer inn på stien ned mot speiderleiren. Stien ender opp i en bratt nedkjøring ned mot bekken. Finn et godt spor her og hold det!",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/asbie/frosken.gpx',
                title: 'Frosken',
                bidirectional: false,
                level: 2,
                findStartText: "Følg grusvegen fra Biefeltet opp bakkene. På toppen av bakken, før krysset inn mot Doppedalen, går stien inn mot høyre.",
                infoText: "Stien er stort sett en nedoverbakke som ender opp i en steinete passering gjennom en bekk.", images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/asbie/storeskogvei.gpx',
                title: 'Store skogvei',
                level: 2,
                bidirectional: true,
                findStartText: "Om du kjører mot Stoa på grusvegen opp fra Biefeltet, så vil du se en sti som går krapt inn mot venstre et like stykke før du når krysset mot veien langs Stoa. NB: Det går mange stier in mot venstre fra vegen, men dette er den siste!",
                infoText: "Et <i>must</i> når en besøker Åsbieskogen. Dette er en flott sti gjennom skogspartiet øst i Åsbieskogen. Denne byr på flere teknisker utfordringer, og litt over halvveis finner du en liten rundløype som ender opp i et dropp over en trestokk. Her kan du også fortsette ned mot grusvegen over et par hopp. Stien går så videre opp mot høyre gjenom flere spennende seksjoner før den ender opp på en topp ved et steigjerde. Her kan en enten følge den fantastiske nedkjøringen mot stien(evt via Syretoppen), eller en kan fortsette over steingjerdet mot Tempelet.",
                images: {
                    trailStart: 'asbie/IMG_20190508_202327_7888.JPG'
                }
            }
        ]
    },
    'hisoy': {
        title: 'Hisøy',
        main: {
            mainHeaderMobile: "Hisøy",
            mainHeaderDesktop: "Hisøy",
            infoText: "<h2>Hisøy</h2>Kart for Hisøy er <i>Work in Progress</i>" +
                    "<h2>Adkomst</h2>TODO",
            levelColors: {
                1: '#090',
                2: '#66f',
                3: '#f00'
            },
            center: { lat: 58.43692953244933,lng: 8.762798309326174 }
        },

        markers: {

        },

        trails: [
            {
                url: 'data/trails/hisoy/jokerbakken.gpx',
                title: 'Grusveg - Jokerbakken',
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/grusveg2.gpx',
                title: 'Grusveg',
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/svarteport.gpx',
                title: 'Grusveg - Svarteport',
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/marineveien.gpx',
                title: 'Marineveien',
                level: 1,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti1.gpx',
                title: 'Sti 1',
                level: 2,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti2.gpx',
                title: 'Sti 2',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti3.gpx',
                title: 'Sti 3',
                level: 3,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti4.gpx',
                title: 'Sti 4',
                level: 2,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti5.gpx',
                title: 'Sti 5',
                level: 3,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti6.gpx',
                title: 'Sti 6',
                level: 2,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti7.gpx',
                title: 'Sti 7',
                level: 3,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti8.gpx',
                title: 'Sti 8',
                level: 3,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti9.gpx',
                title: 'Sti 9',
                level: 2,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti10.gpx',
                title: 'Sti 10',
                level: 3,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti11.gpx',
                title: 'Sti 11',
                level: 3,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/hisoy/sti12.gpx',
                title: 'Sti 12',
                level: 2,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            }
        ]
    }
};
