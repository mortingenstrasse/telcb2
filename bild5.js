// DOSYANIN EN BAŞINA BU SATIRI EKLEYİN
const lektionData = 

[
  {
    kelime: "der Äquator",
    anlami: "Ekvator",
    ornekCumle: "Der Äquator teilt die Erde in eine Nord- und Südhalbkugel."
  },
  {
    kelime: "das Charakteristikum",
    anlami: "Özellik, karakteristik",
    ornekCumle: "Ein wichtiges Charakteristikum dieser Region ist das milde Klima."
  },
  {
    kelime: "die Durchschnittstemperatur",
    anlami: "Ortalama sıcaklık",
    ornekCumle: "Die Durchschnittstemperatur im Sommer liegt bei 25 Grad Celsius."
  },
  {
    kelime: "die Dürre",
    anlami: "Kuraklık",
    ornekCumle: "Die Dürre führte zu großen Ernteausfällen."
  },
  {
    kelime: "der Einfallswinkel",
    anlami: "Geliş açısı",
    ornekCumle: "Der Einfallswinkel des Sonnenlichts beeinflusst die Temperatur."
  },
  {
    kelime: "die Erdachse",
    anlami: "Yer ekseni",
    ornekCumle: "Die Erdachse ist um etwa 23,5 Grad geneigt."
  },
  {
    kelime: "das Gewässer",
    anlami: "Su kütlesi, su yolu",
    ornekCumle: "Der See ist ein wichtiges Gewässer für die Region."
  },
  {
    kelime: "die Hitze-/Kältewelle",
    anlami: "Sıcak/soğuk hava dalgası",
    ornekCumle: "Eine Hitzewelle hat das Land fest im Griff."
  },
  {
    kelime: "das Hochwasser",
    anlami: "Sel, taşkın",
    ornekCumle: "Das Hochwasser verursachte große Schäden."
  },
  {
    kelime: "das Insekt",
    anlami: "Böcek",
    ornekCumle: "Ein Insekt krabbelte über den Tisch."
  },
  {
    kelime: "der Jahresverlauf",
    anlami: "Yılın seyri",
    ornekCumle: "Der Jahresverlauf der Temperaturen ist in dieser Region sehr konstant."
  },
  {
    kelime: "der Jahreszyklus",
    anlami: "Yıllık döngü",
    ornekCumle: "Der Jahreszyklus der Natur ist faszinierend."
  },
  {
    kelime: "der Klimawandel",
    anlami: "İklim değişikliği",
    ornekCumle: "Der Klimawandel ist eine globale Herausforderung."
  },
  {
    kelime: "die Konstellation",
    anlami: "Konum, durum",
    ornekCumle: "Die aktuelle Konstellation der Sterne ist besonders."
  },
  {
    kelime: "die Meteorologe/die Meteorologin",
    anlami: "Meteorolog",
    ornekCumle: "Die Meteorologin sagte für morgen Regen voraus."
  },
  {
    kelime: "die Nahrungskette",
    anlami: "Besin zinciri",
    ornekCumle: "Jedes Lebewesen ist Teil der Nahrungskette."
  },
  {
    kelime: "der Neigungswinkel",
    anlami: "Eğim açısı",
    ornekCumle: "Der Neigungswinkel der Erdachse ist für die Jahreszeiten verantwortlich."
  },
  {
    kelime: "der Niederschlag",
    anlami: "Yağış",
    ornekCumle: "Der Niederschlag war in diesem Monat sehr gering."
  },
  {
    kelime: "das Niveau",
    anlami: "Seviye",
    ornekCumle: "Das Niveau des Wassers ist gestiegen."
  },
  {
    kelime: "die Nord-/Südhalbkugel",
    anlami: "Kuzey/Güney Yarımküre",
    ornekCumle: "Die Nordhalbkugel erlebt gerade den Sommer."
  },
  {
    kelime: "der Nord-/Südpol",
    anlami: "Kuzey/Güney Kutbu",
    ornekCumle: "Der Nordpol ist von Eis bedeckt."
  },
  {
    kelime: "die Periode",
    anlami: "Dönem, periyot",
    ornekCumle: "Die Periode der Trockenheit ist vorbei."
  },
  {
    kelime: "die Phase",
    anlami: "Faz, aşama",
    ornekCumle: "Das Projekt befindet sich in der letzten Phase."
  },
  {
    kelime: "der Sonnenaufgang/-untergang",
    anlami: "Gün doğumu/batımı",
    ornekCumle: "Der Sonnenuntergang am Meer war wunderschön."
  },
  {
    kelime: "die Sonneneinstrahlung",
    anlami: "Güneş ışınımı",
    ornekCumle: "Die Sonneneinstrahlung ist im Sommer am stärksten."
  },
  {
    kelime: "der Sonnenstrahl",
    anlami: "Güneş ışını",
    ornekCumle: "Ein Sonnenstrahl brach durch die Wolken."
  },
  {
    kelime: "das Synonym",
    anlami: "Eş anlamlı",
    ornekCumle: "'Groß' ist ein Synonym für 'riesig'."
  },
  {
    kelime: "der Treibhauseffekt",
    anlami: "Sera etkisi",
    ornekCumle: "Der Treibhauseffekt trägt zur globalen Erwärmung bei."
  },
  {
    kelime: "die Umlaufbahn",
    anlami: "Yörünge",
    ornekCumle: "Der Mond bewegt sich auf einer Umlaufbahn um die Erde."
  },
  {
    kelime: "die Vegetationsperiode",
    anlami: "Bitki örtüsü dönemi",
    ornekCumle: "Die Vegetationsperiode ist in dieser Region sehr lang."
  },
  {
    kelime: "die Wetteraufzeichnung",
    anlami: "Hava kaydı",
    ornekCumle: "Die Wetteraufzeichnungen zeigen einen Anstieg der Temperaturen."
  },
  {
    kelime: "das Wetterereignis",
    anlami: "Hava olayı",
    ornekCumle: "Ein starkes Gewitter ist ein seltenes Wetterereignis."
  },
  {
    kelime: "das Wetterphänomen",
    anlami: "Hava olayı, hava fenomeni",
    ornekCumle: "Polarlichter sind ein beeindruckendes Wetterphänomen."
  },
  {
    kelime: "der Winkel",
    anlami: "Açı",
    ornekCumle: "Der Winkel zwischen den beiden Linien beträgt 90 Grad."
  },
  {
    kelime: "aussterben",
    anlami: "Nesli tükenmek",
    ornekCumle: "Viele Tierarten sind vom Aussterben bedroht."
  },
  {
    kelime: "umkreisen",
    anlami: "Etrafında dönmek, yörüngesinde dönmek",
    ornekCumle: "Der Satellit umkreist die Erde."
  },
  {
    kelime: "wahrnehmen",
    anlami: "Algılamak, fark etmek",
    ornekCumle: "Ich konnte eine leichte Veränderung wahrnehmen."
  },
  {
    kelime: "aufeinanderfolgend",
    anlami: "Ardı ardına, birbirini takip eden",
    ornekCumle: "Drei aufeinanderfolgende Siege brachten das Team an die Spitze."
  },
  {
    kelime: "gegenüberliegend",
    anlami: "Karşıt, karşıda bulunan",
    ornekCumle: "Das Geschäft befindet sich auf der gegenüberliegenden Straßenseite."
  },
  {
    kelime: "kurzfristig",
    anlami: "Kısa vadeli",
    ornekCumle: "Wir brauchen eine kurzfristige Lösung."
  },
  {
    kelime: "statistisch",
    anlami: "İstatistiksel",
    ornekCumle: "Statistisch gesehen ist das Risiko sehr gering."
  },
  {
    kelime: "tragisch",
    anlami: "Trajik",
    ornekCumle: "Der Unfall war ein tragisches Ereignis."
  },
  {
    kelime: "vermehrt",
    anlami: "Artmış, çoğalmış",
    ornekCumle: "In letzter Zeit treten vermehrt Fehler auf."
  },
  {
    kelime: "auf lange Sicht",
    anlami: "Uzun vadede",
    ornekCumle: "Auf lange Sicht wird sich diese Investition auszahlen."
  },
  {
    kelime: "eine Diskussion führen",
    anlami: "Bir tartışma yürütmek",
    ornekCumle: "Wir führten eine lange Diskussion über das Thema."
  },
  {
    kelime: "Früchte tragen",
    anlami: "Meyve vermek",
    ornekCumle: "Unsere Bemühungen haben endlich Früchte getragen."
  },
  {
    kelime: "fundierte Aussagen treffen",
    anlami: "Sağlam ifadeler kullanmak",
    ornekCumle: "Man sollte nur fundierte Aussagen treffen."
  },
  {
    kelime: "die grundlegende Bedeutung",
    anlami: "Temel anlam",
    ornekCumle: "Die grundlegende Bedeutung des Wortes ist 'Liebe'."
  },
  {
    kelime: "im Vergleich zu",
    anlami: "İle karşılaştırıldığında",
    ornekCumle: "Im Vergleich zu letztem Jahr sind die Umsätze gestiegen."
  },
  {
    kelime: "in einem Winkel stehen zu",
    anlami: "Bir açıyla durmak",
    ornekCumle: "Der Tisch steht in einem Winkel zur Wand."
  },
  {
    kelime: "in Zahlen ausgedrückt",
    anlami: "Sayılarla ifade edilmiş",
    ornekCumle: "Der Erfolg wurde in Zahlen ausgedrückt."
  },
  {
    kelime: "in Zahlen benennen",
    anlami: "Sayılarla belirtmek",
    ornekCumle: "Können Sie die Kosten in Zahlen benennen?"
  },
  {
    kelime: "in Zukunft",
    anlami: "Gelecekte",
    ornekCumle: "In Zukunft werden wir mehr auf Nachhaltigkeit achten."
  },
  {
    kelime: "Maßnahmen ergreifen",
    anlami: "Önlem almak",
    ornekCumle: "Die Regierung muss Maßnahmen ergreifen, um die Krise zu bewältigen."
  },
  {
    kelime: "mit Daten belegen",
    anlami: "Verilerle desteklemek",
    ornekCumle: "Er konnte seine Behauptungen mit Daten belegen."
  },
  {
    kelime: "rechnen mit",
    anlami: "Hesaba katmak, beklemek",
    ornekCumle: "Wir müssen mit Schwierigkeiten rechnen."
  },
  {
    kelime: "senkrecht stehen zu",
    anlami: "Dik olmak",
    ornekCumle: "Die Wand steht senkrecht zum Boden."
  },
  {
    kelime: "ein unverkennbares Merkmal",
    anlami: "Ayırt edici bir özellik",
    ornekCumle: "Das ist ein unverkennbares Merkmal seiner Kunst."
  },
  {
    kelime: "zur Folge haben",
    anlami: "Sonuçlanmak, yol açmak",
    ornekCumle: "Die Entscheidung wird weitreichende Folgen haben."
  },
  {
    kelime: "zurückführen auf",
    anlami: "Dayandırmak, atfetmek",
    ornekCumle: "Man kann den Erfolg auf seine harte Arbeit zurückführen."
  },
  {
    kelime: "die Auflage",
    anlami: "Baskı, tiraj",
    ornekCumle: "Die erste Auflage des Buches war schnell vergriffen."
  },
  {
    kelime: "der Bestand",
    anlami: "Mevcut miktar, stok",
    ornekCumle: "Der Bestand an Waren ist sehr hoch."
  },
  {
    kelime: "der Denkmalschutz",
    anlami: "Anıt koruma",
    ornekCumle: "Das Gebäude steht unter Denkmalschutz."
  },
  {
    kelime: "die Ebbe",
    anlami: "Alçak gelgit, çekilme",
    ornekCumle: "Bei Ebbe kann man am Strand spazieren gehen."
  },
  {
    kelime: "die Epidemie",
    anlami: "Epidemi",
    ornekCumle: "Die Epidemie breitete sich schnell aus."
  },
  {
    kelime: "die Fischerei",
    anlami: "Balıkçılık",
    ornekCumle: "Die Fischerei ist ein wichtiger Wirtschaftszweig in dieser Region."
  },
  {
    kelime: "die Flut",
    anlami: "Yüksek gelgit, yükselme",
    ornekCumle: "Bei Flut ist der Strand überflutet."
  },
  {
    kelime: "der Fonds",
    anlami: "Fon",
    ornekCumle: "Der Fonds investiert in erneuerbare Energien."
  },
  {
    kelime: "das Komitee",
    anlami: "Komite",
    ornekCumle: "Das Komitee hat eine Entscheidung getroffen."
  },
  {
    kelime: "die Konvention",
    anlami: "Konvansiyon, gelenek",
    ornekCumle: "Die Konventionen der Gesellschaft sind wichtig."
  },
  {
    kelime: "das Kriterium",
    anlami: "Kriter, ölçüt",
    ornekCumle: "Das wichtigste Kriterium ist die Qualität."
  },
  {
    kelime: "die Kulturstätte",
    anlami: "Kültürel alan",
    ornekCumle: "Die Akropolis ist eine berühmte Kulturstätte."
  },
  {
    kelime: "der Nationalpark",
    anlami: "Milli park",
    ornekCumle: "Wir besuchten einen Nationalpark in den Bergen."
  },
  {
    kelime: "die Naturstätte",
    anlami: "Doğal alan",
    ornekCumle: "Diese Naturstätte ist ein Paradies für Vogelbeobachter."
  },
  {
    kelime: "die Population",
    anlami: "Popülasyon",
    ornekCumle: "Die Population der Wölfe hat zugenommen."
  },
  {
    kelime: "der Rückgang",
    anlami: "Gerileme, düşüş",
    ornekCumle: "Es gab einen Rückgang der Verkaufszahlen."
  },
  {
    kelime: "das Seegras",
    anlami: "Deniz çayırı",
    ornekCumle: "Seegras ist ein wichtiger Lebensraum für viele Meerestiere."
  },
  {
    kelime: "der Seehund",
    anlami: "Fok",
    ornekCumle: "Wir sahen Seehunde am Strand."
  },
  {
    kelime: "die Spende",
    anlami: "Bağış",
    ornekCumle: "Ihre Spende hilft uns sehr."
  },
  {
    kelime: "der Status",
    anlami: "Statü",
    ornekCumle: "Sein Status als Wissenschaftler ist hoch angesehen."
  },
  {
    kelime: "die Überfischung",
    anlami: "Aşırı avlanma",
    ornekCumle: "Die Überfischung der Meere ist ein ernstes Problem."
  },
  {
    kelime: "die Überflutung",
    anlami: "Sel, su baskını",
    ornekCumle: "Die Überflutung zerstörte viele Häuser."
  },
  {
    kelime: "das UNESCO-Weltnaturerbe",
    anlami: "UNESCO Dünya Doğa Mirası",
    ornekCumle: "Das Wattenmeer ist ein UNESCO-Weltnaturerbe."
  },
  {
    kelime: "die Vogelwarte",
    anlami: "Kuş gözlem istasyonu",
    ornekCumle: "Die Vogelwarte erforscht das Zugverhalten der Vögel."
  },
  {
    kelime: "der Wal",
    anlami: "Balina",
    ornekCumle: "Der Wal ist das größte Säugetier der Welt."
  },
  {
    kelime: "das Wattenmeer",
    anlami: "Wadden Denizi",
    ornekCumle: "Das Wattenmeer ist ein einzigartiges Ökosystem."
  },
  {
    kelime: "der Zugvogel",
    anlami: "Göçmen kuş",
    ornekCumle: "Zugvögel fliegen im Herbst in den Süden."
  },
  {
    kelime: "sich ansiedeln",
    anlami: "Yerleşmek, ikamet etmek",
    ornekCumle: "Viele Menschen siedeln sich in der Stadt an."
  },
  {
    kelime: "bewahren",
    anlami: "Korumak, muhafaza etmek",
    ornekCumle: "Wir müssen die Natur für zukünftige Generationen bewahren."
  },
  {
    kelime: "dokumentieren",
    anlami: "Belgelemek",
    ornekCumle: "Die Forschungsergebnisse wurden sorgfältig dokumentiert."
  },
  {
    kelime: "ertrinken",
    anlami: "Boğulmak",
    ornekCumle: "Leider ist der Schwimmer ertrunken."
  },
  {
    kelime: "stabilisieren",
    anlami: "Stabilize etmek, dengelemek",
    ornekCumle: "Die Wirtschaft muss stabilisiert werden."
  },
  {
    kelime: "tagen",
    anlami: "Toplanmak, oturum yapmak",
    ornekCumle: "Das Parlament tagt nächste Woche."
  },
  {
    kelime: "ästhetisch",
    anlami: "Estetik",
    ornekCumle: "Das Design des Hauses ist sehr ästhetisch."
  },
  {
    kelime: "bemerkenswert",
    anlami: "Dikkate değer, kayda değer",
    ornekCumle: "Ihre Leistung war bemerkenswert."
  },
  {
    kelime: "dauerhaft",
    anlami: "Kalıcı, sürekli",
    ornekCumle: "Wir suchen eine dauerhafte Lösung für das Problem."
  },
  {
    kelime: "eigenständig",
    anlami: "Bağımsız, özerk",
    ornekCumle: "Sie arbeitet sehr eigenständig."
  },
  {
    kelime: "einzigartig",
    anlami: "Eşsiz, benzersiz",
    ornekCumle: "Das ist eine einzigartige Gelegenheit."
  },
  {
    kelime: "geologisch",
    anlami: "Jeolojik",
    ornekCumle: "Die geologische Struktur der Region ist komplex."
  },
  {
    kelime: "landschaftszerstörend",
    anlami: "Manzarayı bozan, doğayı tahrip eden",
    ornekCumle: "Der Bau der Autobahn war landschaftszerstörend."
  },
  {
    kelime: "schützenswert",
    anlami: "Korunmaya değer",
    ornekCumle: "Diese Tierart ist schützenswert."
  },
  {
    kelime: "überragend",
    anlami: "Üstün, olağanüstü",
    ornekCumle: "Seine Leistung war überragend."
  },
  {
    kelime: "angesehen werden als",
    anlami: "Olarak kabul edilmek",
    ornekCumle: "Er wird als Experte auf seinem Gebiet angesehen."
  },
  {
    kelime: "die bedrohte Art",
    anlami: "Tehlike altındaki tür",
    ornekCumle: "Der Panda ist eine bedrohte Art."
  },
  {
    kelime: "das ist der Hammer (ugs.)",
    anlami: "Bu harika! (günlük konuşma)",
    ornekCumle: "Dein neues Auto ist der Hammer!"
  },
  {
    kelime: "sich einsetzen für",
    anlami: "Bir şey için çabalamak, mücadele etmek",
    ornekCumle: "Sie setzt sich für den Umweltschutz ein."
  },
  {
    kelime: "den Erhalt sichern",
    anlami: "Korunmasını sağlamak",
    ornekCumle: "Wir müssen den Erhalt dieser alten Gebäude sichern."
  },
  {
    kelime: "freie Natur",
    anlami: "Serbest doğa",
    ornekCumle: "Ich verbringe meine Freizeit gerne in der freien Natur."
  },
  {
    kelime: "halt dich fest (ugs.)",
    anlami: "Sıkı tutun! (günlük konuşma)",
    ornekCumle: "Halt dich fest, es wird eine wilde Fahrt!"
  },
  {
    kelime: "ins Internet stellen",
    anlami: "İnternete koymak",
    ornekCumle: "Er hat seine Fotos ins Internet gestellt."
  },
  {
    kelime: "ohne Sinn und Verstand",
    anlami: "Anlamsız ve mantıksız",
    ornekCumle: "Er redet oft ohne Sinn und Verstand."
  },
  {
    kelime: "eine Tendenz beobachten",
    anlami: "Bir eğilim gözlemlemek",
    ornekCumle: "Wir beobachten eine Tendenz zu steigenden Preisen."
  },
  {
    kelime: "einen Titel verleihen",
    anlami: "Bir unvan vermek",
    ornekCumle: "Die Universität verlieh ihm den Ehrendoktortitel."
  },
  {
    kelime: "verbunden sein mit",
    anlami: "İle bağlantılı olmak",
    ornekCumle: "Das Problem ist eng mit der Wirtschaft verbunden."
  },
  {
    kelime: "die Vergabe der Mittel",
    anlami: "Kaynakların tahsisi",
    ornekCumle: "Die Vergabe der Mittel erfolgt nach strengen Kriterien."
  },
  {
    kelime: "verzeichnet sein",
    anlami: "Kayıtlı olmak",
    ornekCumle: "Sein Name ist in der Liste verzeichnet."
  },
  {
    kelime: "einen Vorschlag einreichen",
    anlami: "Bir öneri sunmak",
    ornekCumle: "Wir haben einen Vorschlag für das neue Projekt eingereicht."
  },
  {
    kelime: "zur Verfügung stehen",
    anlami: "Mevcut olmak, hazır bulunmak",
    ornekCumle: "Ich stehe Ihnen jederzeit zur Verfügung."
  },
  {
    kelime: "Zweifel haben",
    anlami: "Şüphe duymak",
    ornekCumle: "Ich habe Zweifel an seiner Aussage."
  }
];

