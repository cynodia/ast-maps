const mmConfigurations = {

    'tungvekter': {
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
                1: '#ffdd33',
                2: '#00f',
                3: '#f00'
            }
        },

        /**
         * Only define background if there is an available background
         */
        background: {
            pos: {
                north: 58.496152,
                south: 58.474954,
                east: 8.805641,
                west:8.770476
            },
            src: 'data/pics/tungvekter/kart_bg.png'
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
                url: 'data/trails/tungvekter/halvfire.gpx',
                title: 'Halv Fire',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image1.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/kunto.gpx',
                title: 'Kun To',
                level: 1,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image2.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/hundetoppen.gpx',
                title: 'Hundetoppen',
                level: 3,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image4.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/vestbredden.gpx',
                title: 'Vestbredden',
                level: 3,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image2.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/ostbredden.gpx',
                title: 'Østbredden',
                level: 2,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image3.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/tungvekter.gpx',
                title: 'Tungvekteren',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'tungvekter/trails/1.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/xkjerringene.gpx',
                title: 'X-Kjærringene',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'tungvekter/trails/2.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/ribberdalen.gpx',
                title: 'Ribberdalen',
                level: 2,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'tungvekter/trails/2.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/sigaren.gpx',
                title: 'Sigaren',
                level: 3,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'tungvekter/trails/2.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/diagonalen.gpx',
                title: 'Diagonalen',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
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
                    trailStart: 'tungvekter/trails/5.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/eventyrrunde.gpx',
                title: 'Eventyrskogen runde',
                level: 2,
                bidirectional: true,
                findStartText: ".....",
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
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/ribberveggen.gpx',
                title: 'Ribberveggen',
                level: 3,
                bidirectional: true,
                findStartText: "Følg lysløypa ca 30 meter fra sørenden av Store Ribbervann med bebyggelsen på høyre hånd. Stien tar mot venstre rett opp i Ribberåsen.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/inniskauen.gpx',
                title: 'Skauen',
                level: 1,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/s-works.gpx',
                title: 'S-Works',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/sti1.gpx',
                title: 'Froskedammen',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/sti2.gpx',
                title: 'Muldvarpen',
                level: 3,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/sti3.gpx',
                title: 'Uten navn',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/sti4.gpx',
                title: 'Opp til parkeringa',
                level: 2,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/nedtilparken.gpx',
                title: 'Ned til parken',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/rallarvegen.gpx',
                title: 'Rallarvegen',
                level: 3,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'tungvekter/trails/6.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/asylet.gpx',
                title: '3D/Asylet',
                level: 3,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/langsveien.gpx',
                title: 'Heitjenn',
                level: 2,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/kvartoverhalvfire.gpx',
                title: 'Kvart på halv fire',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/langemyrdownhill.gpx',
                title: 'Langemyr Downhill',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/langemyrskauen.gpx',
                title: 'Langemyr-skauen',
                bidirectional: true,
                level: 1,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/haldors.gpx',
                title: 'Haldors gullrekke',
                level: 2,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'tungvekter/trails/8.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/sti5.gpx',
                title: 'Korketrekkeren',
                level: 3,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "En smårøff nedkjøring. En kan velge å start helt fra toppen av knausen nedkjøringen går fra. Her finner en en ekstra utfordrende seksjon. Eventuelt kan en begynne bak denne knabben for en litt enklere start.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/langemyrtilvegen.gpx',
                title: 'Puddingen',
                bidirectional: false,
                level: 2,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/forbidammen.gpx',
                title: 'Forbi dammen',
                level: 1,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/elgdriden.gpx',
                title: 'Elgdriden',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/opptilvegen.gpx',
                title: 'Opp til vegen',
                level: 1,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/downhillen.gpx',
                title: 'Downhillen',
                level: 3,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/balplassentilveggen.gpx',
                title: 'Bålplassen til the wall',
                level: 1,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/flatan.gpx',
                title: 'Flatan',
                level: 1,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/uphillen.gpx',
                title: 'Uphillen',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/innfragraen.gpx',
                title: 'Inn fra Gråen',
                level: 1,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/toppentildiagonalen.gpx',
                title: 'Toppen til diagonalen',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
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
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/skauenut.gpx',
                title: 'Ut fra skauen',
                level: 1,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/saeden.gpx',
                title: 'Sæden',
                level: 1,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/philip.gpx',
                title: 'Fillip',
                level: 2,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/langslangemyr.gpx',
                title: 'Ørretdammen',
                level: 2,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/kamelen.gpx',
                title: 'Kamelen',
                level: 3,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'tungvekter/trails/9.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/gubbenoggamla.gpx',
                title: 'Gubben og gamla',
                level: 3,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/jansnye.gpx',
                title: 'Einball',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'tungvekter/trails/3.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/walltillangemyr.gpx',
                title: 'Wall til Langemyr',
                bidirectional: true,
                level: 1,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
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
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/sti6.gpx',
                title: 'Inn i furuskogen',
                level: 1,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/motsaeden.gpx',
                title: 'Opp mot Sæden',
                level: 1,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/nedfraribberaasen.gpx',
                title: 'Ribberåsen ned',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'tungvekter/trails/7.jpg'
                }
            },
            {
                url: 'data/trails/tungvekter/pikniktoppen.gpx',
                title: 'Pikniktoppen',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/tilbjornebo.gpx',
                title: 'Til Bjørnebo',
                level: 1,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/sti7.gpx',
                title: 'Snarvei',
                level: 2,
                bidirectional: false,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/topptiltopp.gpx',
                title: null,
                level: 0,
                bidirectional: true,
                findStartText: null,
                infoText: null,
                images: {
                    trailStart: 'image5.jpeg'
                }
            },
            {
                url: 'data/trails/tungvekter/frajovannsveien.gpx',
                title: 'Ned fra Jovannsveien',
                level: 2,
                bidirectional: true,
                findStartText: "Tekstlig informasjon om hvor en finner startpunkt samt bilde(r) av inngang til sti.",
                infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: {
                    trailStart: 'image5.jpeg'
                }
            }
        ]
    },

    'asbie': {
        main: {
            mainHeaderMobile: "Åsbieskogen",
            mainHeaderDesktop: "Åsbieskogen",
            infoText: "<h2>Åsbieskogen</h2>Åsbieskogen er et turområde som brukes mye av mange, og det er derfor stier på kryss og tvers. Det er knapt mulig å kjøre seg bort her, så det er bare å utforske. Men ta hensyn til andre du måtte møte på din vei." +
                    "<h2>Adkomst</h2>Et godt utgangspunkt er parkeringsplassen på Industritoppen. Ta av fra E-18 ved skiltet avkjøring til FV-42, men kjør i motsatt retning (mot syd) rundt brannstasjon og nytt politihus og opp til toppen.<br>" +
                    "Det er også mulig å parkere på Bjønnes og sykle inn til Biejordene derfra.",
            levelColors: {
                1: '#0f0',
                2: '#00f',
                3: '#f00'
            }
        },

        // background: {
        //     pos: {
        //         north: 58.460856,
        //         south: 58.449055,
        //         east: 8.750585,
        //         west:8.715468
        //     },
        //     src: 'data/pics/asbie/kart_bg.png'
        // },


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
            }
        },

        trails: [
            {
                url: 'data/trails/asbie/jordvepsen.gpx',
                title: 'Jordvepsen',
                level: 3,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: 'image1.jpeg'
                }
            },
            {
                url: 'data/trails/asbie/vibeveien.gpx',
                title: 'Vibeveien downhill',
                level: 3,
                bidirectional: false,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: 'image1.jpeg'
                }
            },
            {
                url: 'data/trails/asbie/hogstfeltet1.gpx',
                title: 'Hogstfeltet Downhill 1',
                bidirectional: false,
                level: 3,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: 'image1.jpeg'
                }
            },
            {
                url: 'data/trails/asbie/scott1.gpx',
                title: 'Scottløypa del1',
                bidirectional: true,
                level: 1,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: 'image1.jpeg'
                }
            },
            {
                url: 'data/trails/asbie/vedlaget.gpx',
                title: 'Opp vedlaget',
                bidirectional: true,
                level: 2,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: 'image1.jpeg'
                }
            },
            {
                url: 'data/trails/asbie/polititoppen.gpx',
                title: 'Polititoppen',
                bidirectional: false,
                level: 2,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: 'image1.jpeg'
                }
            },
            {
                url: 'data/trails/asbie/hogstfeltet2.gpx',
                title: 'Hogstfeltet downhill 2',
                bidirectional: false,
                level: 3,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: 'image1.jpeg'
                }
            },
            {
                url: 'data/trails/asbie/storeskogvei.gpx',
                title: 'Store skogvei',
                level: 2,
                bidirectional: true,
                findStartText: "",
                infoText: "",
                images: {
                    trailStart: 'image1.jpeg'
                }
            }
        ]
    }
};
