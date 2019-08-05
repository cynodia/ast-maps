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
                position: {lat: 58.485002, lng: 8.797742}
            },
            "kremtoppen": {
                title: 'Kremtoppen',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.485446, lng: 8.788034}
            },
            "baalplassen": {
                title: 'Bålplassen',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.482499, lng: 8.791263}
            },
            "varden": {
                title: 'Varden',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.481962, lng: 8.783006}
            },
            "sinsenkrysset": {
                title: 'Sinsenkrysset',
                icon: 'data/imgs/marker_star.png',
                position: {lat: 58.485243, lng: 8.792927}
            }
        },

        routes: [
            {
                title: 'Tøff tur fra Dråbelia',
                description: 'Denne turen starter og ender ved parkeringen på Dråbelia. Det er en god økt som er innom alt fra flotte furubunnsstier til heftige nedkjøringer og viser mye av variasjonen i Tungvekteren.',
                segments: [
                    {
                        text: 'Start i Dråbelia og følg [X-kjærringene], [S-works], [Størevelta], [Froskedammen], [Kranglefanten] og [Muldvarpen] ned til Sinsenkrysset.',
                        start: 0,
                        stop: 142
                    },
                    {
                        text: 'Ta en runde i [Halv Fire], skiltet inn fra Sinsenkrysset.',
                        start: 142,
                        stop: 200
                    },
                    {
                        text: 'Når du kommer tilbake ut i Sinsenkrysset krysser du vegen inn i [Kun To].',
                        start: 200,
                        stop: 250
                    },
                    {
                        text: 'Ved utgangen av [Kun To] fortsetter du rett over lysløypa og inn i [Paralellen]. Denne følger du til du kommer til bålplassen ved Lille Heitjenn.',
                        start: 250,
                        stop: 268
                    },
                    {
                        text: 'Følg så [The Wall] og videre på kryss av [3-kilometeren] og inn i [Aleèn]. Fortsett gjennom hele [Flatan] til den ender midt i [Gullrekka til Haldor].',
                        start: 268,
                        stop: 351
                    },
                    {
                        text: 'Kjør gullrekka til topps og ta over i [Korketrekkeren]. Ta ut til venstre tilbake til Lysløypa i bunnen av [Korketrekkeren].',
                        start: 351,
                        stop: 407
                    },
                    {
                        text: 'Kryss så Lysløypa igjen og du står i starten på [Hundetoppen]. Ved piknikkbordet i enden av [Hundetoppen] Forsetter du inn i [Eventyrskogen].',
                        start: 407,
                        stop: 450
                    },
                    {
                        text: 'Etter å ha kjørt gjennom [Eventyrskogen] finner du inngangen til [Lille Ribbervann]. Følg denne helt til endes og kryss atter en gang Lysløypa.',
                        start: 450,
                        stop: 510
                    },
                    {
                        text: 'Nå står du i starten av den fantastiske [Østbredden]. Kjør langs hele Store Ribbervann til du kommer ut på Lysløypa igjen. Ta mot venstre og etter 20 meter står du ved starten av [Ribberveggen].',
                        start: 510,
                        stop: 542
                    },
                    {
                        text: 'Følg [Ribbervegen] til stien deler seg og du holder til venstre mot [Rallarvegen]. Følg rallarvegen helt til topps.',
                        start: 542,
                        stop: 586
                    },
                    {
                        text: 'Akkurat da du trodde du var ferdig med klatringen skal du ta rett opp til høyre i krysset på toppen av [Rallarvegen]! Følg den flotte utsiktsstien her og ta mot høyre i første kryss. Nå ender du opp i toppen av [Ribberveggen] og kan finne Varden litt innover på toppen.',
                        start: 586,
                        stop: 615
                    },
                    {
                        text: 'Fra Varden kjører du [Ribberåsen ned] og følger på med [Langemyrskauen] helt inn i [100-meterskogen].',
                        start: 615,
                        stop: 643
                    },
                    {
                        text: 'Ta til høyre mot [Gullrekka til Haldor] og kjør igjen til topps.',
                        start: 643,
                        stop: 676
                    },
                    {
                        text: 'Denne gangen tar du ikke av mot Korketrekkeren, men følger stien opp til Kremtoppen. Fra Kremtoppen kjører du ned [Kamelen] og ender opp i [3-kilometeren].',
                        start: 676,
                        stop: 701
                    },
                    {
                        text: 'Ta til venstre inn mot den mindre stien når du kommer til slutten av [Kamaelen] dvs. [3-kilometeren]. Følg [3-kilometeren] ut til lysløypa og ta til høyre.',
                        start: 701,
                        stop: 723
                    },
                    {
                        text: 'Følg lysløypa gjennom sinsenkrysset og over noen bakketopper helt til du nærmer deg Store Heitjenn på høyre hånd. Her finner du inngangen til [Opp til parkeringa] på venstre hånd. Følg stien over et par stokker og videre oppover klatringa til du ender opp på Dråbelia.<br><b>Takk for turen :-)</b>',
                        start: 723,
                        stop: 772
                    }
                ],
                level: 3,
                url: 'data/routes/tungvekter/route1.gpx',
            }
        ],

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
                title: null,
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
                title: null,
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
                findStartText: "En kan starte sørfra fra den lille gress/strand-området på vestsiden av vannet. Nordfra kan en kjøre på via [Sigaren] eller vi egen innkjøring fra lysløypa.",
                infoText: "Vestbredden går langs store ribbervann på omtsatt side som [Østbredden]. Stien er teknisk krevende med flere bratte partier og crux. Kan kjøres begge veger og bør kombineres med [Sigaren].",
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
                infoText: "Har du kun sett ett bilde fra Tungvekteren så er sjansen stor for at det er fra [Østbredden]! Dette er en perle av en sti som går langsmed Store Ribbervann tilrettelagt med vakre og spennende broer og med et par små og store hindringer som kan gi de fleste en liten utfordring. Et absolutt MUST for førstegangsreisende!",
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
                infoText: "En naturlig start på turen. Her er det rett på sak med et klatreparti opp mot første lille topp. Så bærer det utfor med mulighet for god fart! Stien går i parallell med den originale [Kjerringene] jerrevegen, og flere steder går den også via kjerrevegen.",
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
                infoText: "En flott start på turen om du kommer inn sørfra på sykkel, eller evt velger å parkere ved tennisbanen på Løvoldsveien. Stien tar deg inn til knutepunktet i sørenden av Store Ribbervann.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sigaren.gpx',
                title: 'Sigaren',
                level: 3,
                bidirectional: true,
                findStartText: "Inngangen nordfra finner en fra lysløypa like vest for Store og Lille Ribbervann. Sørfra kjører en på fra [Vestbredden]",
                infoText: "En fin liten sti som forbinder [Vestbredden] med nordenden av Store Ribbervann.",
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
                findStartText: "Stien starter i bunnen av bakken ved Songe i lysløypa. Rett inn ved skiltet.",
                infoText: "En bratt og utfordrende klatresti som tar deg helt opp til toppen av Ribberåsen! Ca 50m inn kommer en til et fantastisk parti med bro og hårnålssvinger - både teknisk utfordrende og fantastisk flott opparbeidet!",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/inniskauen.gpx',
                title: 'Paralellen',
                level: 1,
                bidirectional: true,
                findStartText: "Stien starter inn til venstre fra lysløypa ca 150m nordover fra Sinsenkrysset.",
                infoText: "Fin skogssti som for det meste går over furubunn og klopper. Ender opp ved bålplassen ved Lille Heitjenn.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/snarveibaal.gpx',
                title: null,
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti9.gpx',
                title: null,
                level: 0,
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
                findStartText: "Stien starter like ved slutten av [X-Kjærringene] og er en naturlig vei videre på turen.",
                infoText: "En kort sti som består av klarting gjennom en del hårnålssvinger. Teknisk utfordrende!",
                images: {
                    trailStart: 'tungvekter/trails/18.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/storevelta.gpx',
                title: 'Størevelta',
                level: 2,
                bidirectional: false,
                findStartText: "Stien starter på toppen av [S-Works].",
                infoText: "En flott sti med et par hhopp og doserte svinger fra [S-works] ned til [Froskedammen].",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/froskedammen.gpx',
                title: 'Froskedammen',
                level: 2,
                bidirectional: false,
                findStartText: "Stien starter på toppen av [S-Works].",
                infoText: "En flott sti med en utfordring i midten! STarter med en litt bratt nedkjøring - du finner en enklere rute til venstre. Litt over midten kommer du til Froskedammen og her skal det kjøres på bro! Denne kanskje mest en utfordring mentalt - hold farten og hold blikket fremover :-)",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/muldvarpen.gpx',
                title: 'Muldvarpen',
                level: 3,
                bidirectional: false,
                findStartText: "Stien starter på toppen av [Kranglefanten].",
                infoText: "Fartsfylt sti som ender i en nedkjøring med hopp og doserte svinger!",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/kranglefanten.gpx',
                title: 'Kranglefanten',
                level: 2,
                bidirectional: false,
                findStartText: "Stien starter ved broen i slutten av [Froskedammen] og [Kila].",
                infoText: "Flott sti som starter med et lite klartreparti med hårnålssvinger og vortsetter oppover mot [Tredje Januar], [Gubben og Gamla] og [Muldvarpen]",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/tredjejanuar.gpx',
                title: 'Tredje Januar',
                level: 2,
                bidirectional: false,
                findStartText: "Stien starter og slutter i [Kranglefanten]",
                infoText: "En kort nedkjøring med et par hopp. Du kjører opp igjen via [Kranglefanten].",
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
                findStartText: "Følg [Ribberveggen] til stien deler deg ved et steingjerde. Her holder du mot venstre.",
                infoText: "En fantastisk flott tilrettelagt sti som går langs ribberåsen. Her er det lagt ned mye arbeide og du vil kjøre over stenpartier hvor en bare må beundre håndverket i steinleggingen! Denne er ikke noe for deg med høydeskrekk!<br>Tar deg til [Diagonalen] eller videre opp mot Varden og [Ribberåsen ned]/[Ribberveggen].",
                images: {
                    trailStart: 'tungvekter/trails/14.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/asylet.gpx',
                title: '3D/Asylet',
                level: 2,
                bidirectional: true,
                findStartText: "Kjører du sørover på [Vestbredden] så kommer du ca 2/3 på vegen, til et punkt hvor stien deler seg. [Vestbredden] fortsetter over en liten steinbro, mens denne stien går videre rett frem.",
                infoText: "Sti som kobler [Vestbredden] sammen med [Rallarvegen] på en sømløs måte. Litt klatring og lit teknisk med en del svinger.",
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
                title: 'Tre til halv fire',
                level: 2,
                bidirectional: false,
                findStartText: "Stien starter ut mot venstre på toppen av [Halv fire].",
                infoText: "Fin sti som tar deg fra [Halv fire] ned til Lysløypa ved Store Heitjenn.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti2.gpx',
                title: null,
                level: 0,
                bidirectional: true,
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
                findStartText: "Ca midt i [Langemyrskauen] deler stien seg i to. Følg mot venstre for denne lille akstra runden.",
                infoText: "Artig liten sti som starter med litt klarting for så å gå nedover mot nedkjøringa til [Hundremeterskogen].",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/haldors.gpx',
                title: 'Gullrekka til Haldor',
                level: 2,
                bidirectional: true,
                findStartText: "Denne stien starter i østlig retning fra [100-meterskogen].",
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
                findStartText: "Følg [Gullrekka til Haldor] til topps. Like før du kommer over til [Downhillen] deler stien seg og du skal holde mot venstre.",
                infoText: "En smårøff nedkjøring. En kan velge å start helt fra toppen av knausen nedkjøringen går fra. Her finner en en ekstra utfordrende seksjon. Eventuelt kan en begynne bak denne knabben for en litt enklere start.",
                images: {
                    trailStart: 'tungvekter/trails/6.jpg'
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
                findStartText: "Starter i starten av [Downhillen] like ned fra Kremtoppen. Når du kommer til et kryss hvor Downhillen fortsetter mot venstre og det går en sti til høyre mot [Gullrekka til Haldor], så holder du rett frem.",
                infoText: "Stien starter med et litt krevende segment hvor en skal over litt hindringer og klatre enda litt. Etter ca 150m begynner nedkjøringen - her er det både bratt og svingete med et par hopp mot slutten før en ender opp helt nede i løysløpa!",
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
                findStartText: "Downhillen starter fra Kremtoppen. Hit er det flere veier en kan ta. En er via Gullrekka til Haldor en annen er å følge stien opp paralelt med Kamelen fra Flatan.",
                infoText: "Som navnet sier er dette en bratt utforkjøring. Ganske tidlig i stien kommer en til en smal bro som ligger rett bak en bakketopp. Følg godt med her.<br>Som alltid er det en fordel å ta det litt rolig første gangen en kjører ned en ny sti, selv om den er tilpasset høyt tempo!",
                images: {
                    trailStart: 'tungvekter/trails/16.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/balplassentilveggen.gpx',
                title: 'The Wall',
                level: 3,
                bidirectional: true,
                findStartText: "Stien starter fra Bålplassen.",
                infoText: "Stien går via et crux fra bålplassen til Den Himmelske Fredsplass. Videre opp fra Fredsplassen er det et nytt crux. Om disse blir for heftige finnes det en snarvei inn til høyre før det første cruxet som tar deg rett over til The Wall som er en liten naturlig wallride. Stien ender opp i enda et crux før den ender inn i [3-kilometeren].",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti7.gpx',
                title: null,
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti10.gpx',
                title: null,
                level: 0,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/flatan.gpx',
                title: 'Flatan',
                level: 2,
                bidirectional: true,
                findStartText: "Stien starter i fortsettelse av [Aleèn] evt motsatt retning fra toppen av hårnålssvingene i [Gullrekka til Haldor].",
                infoText: "Et langt stisegment som går gjennom flott furuskog med noen småhindringer i starten. Etter hvert passerer du [Korketrekkeren] og det blir litt humpete.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/aleen.gpx',
                title: 'Aleèn',
                level: 1,
                bidirectional: true,
                findStartText: "Starter fra krysset hvor [The Wall] kommer inn på [3-kilometeren]",
                infoText: "Stien går gjennom flott furuskog med noen småhindringer i starten. Ender i en naturlig overgang til [Flatan], eller opp mot Kremtoppen via [Uphillen].",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/skog1.gpx',
                title: null,
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/skog2.gpx',
                title: null,
                level: 0,
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
                findStartText: "Følg [Aleèn] nordover til den deler seg og blir til [Flatan]. Hold til venstre.",
                infoText: "Bratt klatresti som tar deg til Kremtoppen.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/ostforlille.gpx',
                title: null,
                level: 0,
                bidirectional: true,
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
                infoText: "En grei inngang inn til stinettverket fra nordvest-siden. Når en sykler innover ender denne opp like ved starten på [Vestbredden].",
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
                title: null,
                level: 0,
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
                findStartText: "Følg Muldvarpen til høyeste punkt. Her deler stien seg og du skal holde mot høyre.",
                infoText: "Stien starter i toppen av [Muldvarpen] hvor det går en nedkjøring ned til et parti som går paralellt med [Froskedammen]/[Størevelta] før den fotsetter mot Songe paralellt med grusvegen et stykke. Så krysser du en kjerreveg før du kommer inn på det siste partiet. Dette er en teknisk utfordrende bit som starter med et relativt høyt drop(kan kjøre til høyre for dette) og følges opp av et hopp og en litt vrang venstresving før stien fortsetter ned til grusvegen og du er like ved Sykkelparken.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/einball.gpx',
                title: 'Einball',
                level: 2,
                bidirectional: false,
                findStartText: "Stien starter til høyre ut fra [X-kjærringene] ca midtveis.",
                infoText: "En frisk sti som tar deg ned til siste partiet av [Gubben og Gamla] eller evt rett ut til Sykkelparken. Her er det potensiale for god fart med en del utfordrende partier underveis. Stien krysser/går via andre stier et par steder, så vær oppmerksom!",
                images: {
                    trailStart: 'tungvekter/trails/3.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/3kilometeren.gpx',
                title: '3-kilometeren',
                bidirectional: true,
                level: 1,
                findStartText: "Fra lysløypa starter stien inn mot venstre ca 200m nord fra Sinsenkrysset.",
                infoText: "Ei fin skogsløype som for det aller meste går over flat mark. Ganske smal sti på deler av vegen. Forbindelse til mange andre stier: [Korketrekkeren] og [Kamelen] ender begge opp her, og en kan ta av til både [Flatan], [Aleèn] og [The Wall].",
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
                infoText: "Artig liten sti som starter ut med et dropp og følger på med et par hopp. Forbinder [S-works] med [Kranglefanten] som et alternativ til Størevelta/Froskedammen.",
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
                url: 'data/trails/tungvekter/nedfraribberaasen.gpx',
                title: 'Ribberåsen ned',
                level: 3,
                bidirectional: false,
                findStartText: "Starter fra Varden på toppen av [Ribberåsen]. [Rallarvegen] og [Ribberveggen] leder begge hit.",
                infoText: "Downhill med masse fart! Denne tar deg ned fra Ribberåsen i løpet av kun et par hundre meter. Her er det mye røtter og stiener du skal komme deg over!",
                images: {
                    trailStart: 'tungvekter/trails/15.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/pikniktoppen.gpx',
                title: 'Pikniktoppen',
                level: 2,
                bidirectional: false,
                findStartText: "Starter til høyre like etter inngangen til [Eventyrskogen] fra Piknikbordet.",
                infoText: "Liten sti som går over en topp med litt klatring og tette svinger. Nedkjøring på nordsiden inn mot [Eventyrskogen].",
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
                infoText: "Bjørnebo er en gård som eies av Arendal kommune og disponeres av KFUK/KFUM speideren. Enkelte søndager er det åpent med servering av vafler og varme drikker.<br>Videre nordover fra Bjørnebo finner en flere flotte stier i skogområdene.",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti1.gpx',
                title: null,
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti11.gpx',
                title: null,
                level: 0,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: null
                }
            },
            {
                url: 'data/trails/tungvekter/sti12.gpx',
                title: null,
                level: 0,
                bidirectional: true,
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
                findStartText: "Stien starter fra første toppen i [X-kjærringene]. Ta til venstre ned mot kjerrevegen(Kjerringene) og fortsett over denne.",
                infoText: "Spennende liten sti med et dropp midt i. Kan være litt vanskelig å få fart inn mot droppet, så pass på.<br>Ender i [Opp til parkeringa].",
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

        routes: [
            {
                title: 'Snill tur fra Stoa',
                description: 'Denne turen starter og ender ved parkeringen Stoa. Det er en tur som for det meste går over stier uten noe særlig klarting eller utfor.<br>En fin introduksjon til Åsbie som fint kan kjøres på en vanlig terrengsykkel.',
                segments: [
                    {
                        text: 'Start ut fra parkeringen på Stoa og inn på [Scottløypa]. Kjør denne til du er tilbake på grusvegen - her tar du til venstre.',
                        start: 0,
                        stop: 25
                    },
                    {
                        text: 'Følg grusvegen ca 150 meter og ta inn til venstre på [Flykræsjet]. Kjør stien til du igjen kommer inn på grusvegen oppe ved Stoa. Ta til høyre her.',
                        start:25,
                        stop: 75
                    },
                    {
                        text: 'Følg grusvegen til [Langekjerr](inn mot høyre). Nå skal du kjøre ned hele [Langekjerr]. Her er det noen små utfordringer mot slutten. Ta så til venstre på grusvegen mot Doppedalen.',
                        start: 75,
                        stop: 120
                    },
                    {
                        text: 'Følg grusvegen og ta inn til venstre på [Opp vedlaget]. Følg stien helt til du igjen kommer ut i toppen av [Langekjerr]. Det blir litt humpete mot slutten her. Ta til høyre på [Langekjerr] opp til grusvegen.',
                        start: 120,
                        stop: 168
                    },
                    {
                        text: 'Ta til høyre ut på grusvegen og følg denne opp til høyden ved Politistasjonen. Her tar du inn på [Politistien] og kjører denne til Krysset.',
                        start: 169,
                        stop: 198
                    },
                    {
                        text: 'Følg [Krysset til Doppedalen] til du er tilbake på grusvegen ved Doppedalen. Det er et par utfordringer på denne stien. Følg så grusvegen til [Opp Vedlaget].',
                        start: 197,
                        stop: 223
                    },
                    {
                        text: 'Ta inn på [Langekjerr til Vedlaget] - dette er stien som går til venstre for [Opp Vedlaget] som du kjørte tidligere. Følg stien ned til [Langekjerr].',
                        start: 223,
                        stop: 235
                    },
                    {
                        text: 'Følg [Langekjerr] opp til [Snarvei]en som går inn til venstre og tar deg over i [Flykræsjet]. Hold til høyre opp [Flykræsjet]. Ta til venstre på grusvegen og du er tilbake på parkeringsplassen!<br><b>Takk for turen :-)</b>',
                        start: 235,
                        stop: 269
                    }
                ],
                level: 1,
                url: 'data/routes/asbie/route1.gpx',
            },
            {
                title: 'Røff tur fra Stoa',
                description: 'Denne turen starter og ender ved parkeringen Stoa. Det er en tur som innebærer det meste av røffe nedkjøringer i Åsbieskogen. Det er et par stier som ikke ble med, men noe må en spare til senere :-)',
                segments: [
                    {
                        text: 'Start ut fra parkeringen på Stoa. Følg grusvegen mot venstre til toppen ved Politistasjonen. Her finner du starten på [Politistien]. Følg [Politistien] til den ender i Krysset.',
                        start: 0,
                        stop: 46
                    },
                    {
                        text: 'Hold til venstre inn i [Krysset til Hogstfeltet]. Følg denne stien rett frem til den går over i [Hogstfeltet til Doppedalen]. Her kommer du til et Crux som kan kjøres ned enten rett frem eller via et spor ut mot høyre. Cruxet kan også ommgåes ved å ta ned i skogen mot høyre.<br>Følg stien til du ender opp i grusvegen ved Doppedalen.',
                        start: 46,
                        stop: 100
                    },
                    {
                        text: 'Følg grusvegen ca 100m til du kommer til starten på [Opp vedlaget] inn mot høyre. Ca halvvegs gjennom [Opp vedlaget] finner du [Gruvestien] rett ut mot høyre. Følg denne til endes og hold mot venstre.',
                        start: 100,
                        stop: 136
                    },
                    {
                        text: 'Nå kommer du til den fantastiske [Åsbieflyt]! Stien starter rett opp mot høyre i skråninga. Følg på og hold mot venstre for å fortsette stien når du kommer til Doppedalen.<br>På slutten av stien har du tre valg. Her kan du enten kjøre ned mot høyre bunnen av siste dumpa - dette er den enkleste nedkjøringa. Alternativt kjører du videre opp skråninga og tar inn mot høyre på toppen - her er det et par ganske bratte spor nedover. Om du har lyst til å teste noe VIRKELIG bratt så fortsetter du rett frem og ned heia... Alle nedkjøringene ender opp ved Rytterspranget(hopp) ved et bekkefar.',
                        start: 136,
                        stop: 192
                    },
                    {
                        text: 'Følg stien ut og hold mot venstre. Etter ca 500m går det en sti opp mot venstre. Pass på, for denne er lett å overse!<br>Følg hårnålssvingene opp til Speiderleiren. Kjør så gjennom leiren og følg siten som krysser bekkefaret. Følg denne stien til første kryss. I krysset tar du til venstre og klatrer helt til topps. Her har du vært før!',
                        start: 192,
                        stop: 252
                    },
                    {
                        text: 'Følg på nytt [Hogstfeltet til Doppedalen] ned til grusvegen og fortsett til [Opp vedlaget].',
                        start: 252,
                        stop: 292
                    },
                    {
                        text: 'Følg [Opp vedlaget] ca 200m til du finner starten på [Hoppene] ned mot venstre. Denne starter med en tur ned i et lite søkk og opp igjen før nedkjøringen med en del forskjellige hopp starter. Følg på ut i [Langekjerr] og ta siste hoppet der.',
                        start: 292,
                        stop: 321
                    },
                    {
                        text: 'Etter hoppet snur du og kjører tilbake oppover [Langekjerr] 300-400m til du ser en sti inn mot venstre. Følg [Snarveien] over til [Flykjæsjet] og ta til venstre og følg stien til du er ute på grusvegen igjen.',
                        start: 321,
                        stop: 358
                    },
                    {
                        text: 'Ta til høyre på grusvegen til du kommer til starten på [Store skogvei]. Husk å ta til venstre i første kryss og til høyre på første kryssende sti.',
                        start: 358,
                        stop: 421
                    },
                    {
                        text: 'Ca. midt i [Store skogvei] kommer du til et ommråde med et dropp og et par hopp. Her tar du runden rundt toppen til venstre for deg og fortsetter rett frem helt ned til grusvegen.',
                        start: 421,
                        stop: 436
                    },
                    {
                        text: 'Fra grusvegen snur du og kjører inn igjen på [Store skogvei] på stien som går til venstre for der du kom ut. Følg stien til den ender ved steingjerdet på før [Steingjerdet til stien].',
                        start: 436,
                        stop: 465
                    },
                    {
                        text: 'Nå begynner en artig liten utforkjøring! Etter hver kommer du til en bratt klatreseksjon. På toppen av denne skal du ta inn til høyre til [Syretoppen]. Følg over toppen og hold til venstre i første kryss.<br>Kjør stien helt ned til grusvegen. På slutten er det en ganske bratt nedkjøring, alternativt kan du ta <i>Collsdroppet</i> - men kjør ned og sjekk forholdene først!',
                        start: 465,
                        stop: 518
                    },
                    {
                        text: 'Da bærer det oppover langs grusvegen. Du skal til topps hvor du vil se et gammelt piknikkbord inn mot høyre.',
                        start: 518,
                        stop: 537
                    },
                    {
                        text: 'Nå starter [Jordvepsen]! Kjør inn til høyre for piknikkbordet. Her kommer det et dropp ganske tidlig, du kan evt holde til venstre for å unngå dette. Nå er det bare nedover helt til du kommer ut i bunnen av [Langekjerr].<br> Kjør ut til den første grusvegen ut fra [Langekjerr] og ta til venstre ca 10 meter. Her starter [Padda-Kantarellen] som tar deg tilbake ned til Rytterspranget!',
                        start: 537,
                        stop: 583
                    },
                    {
                        text: 'Etter denne fantastiske nedkjøringa er det på tide å klatre litt. Følg stien til høyre denne gangen. Du kommer ut på grusvegen igjen og følger bakken opp mot biefeltet. Hold til høyre og følg på opp bakkene. Ta inn i [Langekjerr] og tråkk opp til ommrådet med hoppet. Her tar du inn til høyre og følger [Langekjerr til vedlaget].',
                        start: 583,
                        stop: 642
                    },
                    {
                        text: 'Atter en gang står du i starten av [Opp vedlaget]. Igjen skal du følger denne opp og gjennom [Gruvestien].',
                        start: 642,
                        stop: 665
                    },
                    {
                        text: 'Denne gangen fortsetter du oppover stien mov <i>Krysset</i>. Kjør [Krysset til hogstfeltet], og ta til venstre [Opp til hogstfeltet]. Her er det et Crux ca midt på.<br>Ta så til venstre helt opp på toppen av Hogstfeltet(du må nok dra sykkelen med deg opp siste skrenten).<br>Ta en pause og nyt utsikten!',
                        start: 665,
                        stop: 693
                    },
                    {
                        text: 'Da er det [Hogstfeltet downhill 1] som står for tur! Kjør ned fra toppen, hold videre til høyre. Her kommer en flott seksjon med doserte svinger og noen rufsete utfordringer. Når du kommer ned til et steinete parti hvor stien deler seg så hold mot venstre. Hold så mot høyre i det du kommer inn på [Kråkefotstien] og kjør denne til du ender opp nede på Biejordene.',
                        start: 693,
                        stop: 744
                    },
                    {
                        text: 'Nå kommer en liten transportetappe... Tråkk opp mot pumpehuset i nordenden av jordet. Følg stien mot høyre for så å ta videre til venstre på grusvegen. Ta til høyre i første kryss i <i>Egelundvegen</i> og tråkk oppover rundt svingen til du ser en sti i skråningen ned mot venstre.',
                        start: 744,
                        stop: 784
                    },
                    {
                        text: 'Kjør ned skråningen, forbi huset og ut på vegen igjen. Ta til høyre i tredje krysset, og ta til høyre i første kryssende gate. I enden av gata starter [Mariåsen Downhill 2].',
                        start: 784,
                        stop: 834
                    },
                    {
                        text: 'Denne stien går foran blokkene på Mariåsen og har et relativt høyt stup ned på venstre hånd. Tunga rett i munnen :-)',
                        start: 834,
                        stop: 852
                    },
                    {
                        text: 'Igjen havner du på grusvegen. Følg grusvegen oppover samme rute som tidligere opp til toppen med piknikkbordet.',
                        start: 852,
                        stop: 894
                    },
                    {
                        text: '5 meter forbi ommrådet med piknikkbordet starter [Krempartiet] inn mot høyre. Følg stien ned til [Langekjerr] og du er tilbake i ommrådet med hoppet.',
                        start: 894,
                        stop: 911
                    },
                    {
                        text: 'Ta til høyre og tråkk [Langekjerr] til den ender opp i grusvegen ved Stoa. Her holder du til venstre og du er tilbake på parkeringsplassen!<br><b>Takk for turen :-)</b>',
                        start: 911,
                        stop: 935
                    }
                ],
                level: 3,
                url: 'data/routes/asbie/route2.gpx',
            }
        ],

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
                infoText: "Dette er en fantastisk nedkjøring med masse fart og spenning! Det er en relativt røff sti som starter med et godt dropp - kjør til venstre om du ønsker å unngå dette. Det kommer også et crux i det en skal ned på [Langekjerr] helt på slutten.",
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
                infoText: "Disse to stiene kan kombineres med [Jordvepsen] for en fartsfylt og røff opplevelse! Her er det flere bratte seksjoner og et flytparti mot midten hvor en virkelig kan dra på. <br> Pass på å ta til høyre ned mot Biejordene på toppen etter nedkjøringene i Padda.",
                images: {
                    trailStart: 'asbie/IMG_20190508_201914_7883.JPG'
                }
            },
            {
                url: 'data/trails/asbie/hoppene.gpx',
                title: 'Hoppene',
                level: 3,
                bidirectional: false,
                findStartText: "Denne stien starter med en nedoverbakke til venstre et lite stykke opp i [Opp Vedlaget] om en kjører mot Stoa. Det finnes også en alternativ sti opp fra Langekjerr, men denne ender i dumpa etter den første nedoverbakken.",
                infoText: "En relativt kort sti som ineholder en del hopp og dropp. Avsluttes inn i Langekjerr med det flotte oppbygde hoppet der! Det kanskje mest utfordrende hoppet kommer i bakken ned mot Langekjerr, dette kan en fint unngå ved å holde til venstre.",
                images: {
                    trailStart: 'asbie/IMG_20190508_201118_7878.JPG'
                }
            },
            {
                url: 'data/trails/asbie/bukken.gpx',
                title: 'Bukken',
                level: 2,
                bidirectional: false,
                findStartText: "Denne stien starter helt i slutten av [Krempartiet] i toppen av skråningen ned mot Langekjerr. Her tar du til høyre over ei bro.",
                infoText: "En flott sti med god flyt som starter ut over ei bro før en starter en fartsfylt ferd ned mot Langekjerr.",
                images: {
                    trailStart: 'asbie/bukken.JPG'
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
                findStartText: "Ta deg opp til Hogstfeltet via [Krysset til Hogstfeltet]. I krysset hvor en kan kjøre opp til Hogstfelttoppen og starten på [Hogstfeltet dwonhill 1]/[Hogstfeltet dwonhill 2] følger du på rett frem. Ta også rett frem i nedste kryss([Hogstfeltet Downhill 3]).",
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
                findStartText: "Følg [Store skogvei] og videre [Steingjerdet til stien]. På toppen av den bratte klatringen i [Steingjerdet til stien] går det en sti inn mot høyre. Dette er starten på Syretoppen. Alternativt kan en ta av rett inn til mot den bratte klatringen fra grusvegen.",
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
                infoText: "En fartsfylt sti som starter på flotte furuskogs-stier og etter hvert går over i et litt røffere parti før stien krysser inn på samme sport som [Hogstfeltet Downhill 1]. Den siste biten er fartsfylt med et lite hopp og noen flotte broer. Ned mot jordene holder du mot venstre og krysser til sist over mot høyre hvor en stein utgjør et naturlig siste hopp før en er ute på jordet. NB - PASS PÅ mot slutten da dette er et område hvor det ferdes mye folk(og hunder) til fots!",
                images: {
                    trailStart: 'asbie/IMG_20190508_200112_7873.JPG'
                }
            },
            {
                url: 'data/trails/asbie/gruvestien.gpx',
                title: 'Gruvestien',
                level: 2,
                bidirectional: false,
                findStartText: "Omtrent midt i [Vedlaget opp] går det en sti inn i skauen mot høyre om du kjører mot Stoa.",
                infoText: "En spennende liten sti som binder sammen stien fra vedlaget over til en av stiene opp mot hogstfeltet. Her kan en se rester etter gammel gruvedrift! Mot slutten kommer et bratt klatreparti - her er det en fordel med litt fart inn!",
                images: {
                    trailStart: 'asbie/IMG_20190508_201207_7879.JPG'
                }
            },
            {
                url: 'data/trails/asbie/langekjerr_stikk.gpx',
                title: 'Snarveien',
                level: 1,
                bidirectional: true,
                findStartText: "En liten sti som forbinder [Langekjerr] med [Flykræsjet].",
                infoText: "Om du kjører [Langekjerr] oppover mot Stoa så kommer denne på venstre hånd ca 3/4 på vei. Kjører du [Flykræsjet] mot Stoa går stien inn mot høyre ca. 2/3 av vegen.",
                images: {
                    trailStart: 'asbie/IMG_20190508_201448_7880.JPG'
                }
            },
            {
                url: 'data/trails/asbie/paralellen.gpx',
                title: 'Paralellen',
                level: 3,
                bidirectional: true,
                findStartText: "Kjører du [Langekjerr] ned mot Biejordene så kommer inngangen til [Paralellen] på venstre hånd ca 100 meter etter hoppet med trepallene. Stien går bratt rett opp i skråninga.",
                infoText: "En artig sti som er et alternativ til, den ofte sølefylte, starten på [Langekjerr]. Er mest spennende i retning nedover(mot Biejordene) - men kan fint kjøres begge veier. Kjører du mot Biejordene er det et lite dropp på toppen av første bakke med alternativ sti på venstresiden.",
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
                findStartText: "Starten på denne kommer brått på midt i [Langekjerr til Vedlaget]. Se etter en sti inn til høyre.",
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
                findStartText: "Starter i enden av [Krysset til Hogstfeltet].",
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
                findStartText: "Stien starter i krysset i slutten av [Politistien]. Her tar du til høyre.",
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
                findStartText: "Stien starter i krysset i slutten av [Politistien]. Her tar du til venstre.",
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
                findStartText: "Om du kjører [Flykræsjet] mot Stoa, så går denne stien rett frem og opp i lia i det [Flykræsjet] tar en venstresving etter ca 100 meter.",
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
                findStartText: "Fra [Krempartiet] kan du ta mot høyre 20 meter før den bratte bakken som avslutter stien ned mot [Langekjerr].",
                infoText: "Denne stien binder sammen [Kermpartiet] og [Flykræsjet] og kan kjøres begge veger.",
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
                findStartText: "Ta deg opp til Hogstfeltet enten via [Krysset til Hogstfeltet] eller evt ved å kjøre opp [Hogstfeltet Downhill 3]. Følg stien opp mot Hogstfelttoppen og start nedkjøringen herfra! Har du dårlig tid så kan nedkjøringen startes direkte fra krysset opp mot Hogstfelttoppen.",
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
                findStartText: "Følg [Store skogvei til steingjerdet. Ta så videre over steingjerdet.]",
                infoText: "Alternativ slutt på skogsløpypa i østkanten. En spennende nedkjøring som desverre ender i et område uten noen gode koblinger videre mot andre stier. Kjører du elektrisk så freser du bare opp igjen :-)",
                images: {
                    trailStart: 'asbie/IMG_20190508_204311_7890.JPG'
                }
            },
            {
                url: 'data/trails/asbie/scott1.gpx',
                title: 'Scottløypa',
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
                findStartText: "Inngangen i sørenden finner du fra grusvegen inn mot Doppedalen. Kjører du mot Doppedalen starter stien på toppen av den bratteste bakken. Det går to stier her, den til venstre er utgangen av [Langekjerr til vedlaget]. Stien til høyre er [Opp Vedlaget].<br>I nordenden starter stien nesten helt i toppen av [Langekjerr].",
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
                findStartText: "Følg [Politistien] ca 10-15 meter inn og ta til venstre.",
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
                findStartText: "Ca midt i stien, i en liten topp, i [Krysset til Doppedalen] går det en bratt sti opp til venstre om en kjører i retning Doppedalen.",
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
                findStartText: "Følg [Store Skogvei] til du når toppen med steingjerdet. Ikke ta over steingjerdet, men følg stien mot venstre.",
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
                findStartText: "Ta deg opp til Hogstfeltet enten via [Krysset til Hogstfeltet] eller evt ved å kjøre opp [Hogstfeltet Downhill 3]. Følg stien opp mot Hogstfelttoppen og start nedkjøringen herfra! Har du dårlig tid så kan nedkjøringen startes direkte fra krysset opp mot Hogstfelttoppen.",
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
                findStartText: "Følg [Krysset til Hogstfeltet] og fortsett rett frem i krysset hvor en tar av opp mot Hogstfelttoppen. Ta så første sti mot venstre lengre oppe. Alternativt kan en kjøre denne stien opp fra Biejordene - men det fordrer at en kjenner stien.",
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
            infoText: "<h2>Hisøy</h2>Kart for Hisøy er [Work in Progress]" +
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
