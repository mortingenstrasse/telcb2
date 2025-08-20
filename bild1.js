const bild1_words = [
  // BÖLÜM 1: Freizeit versus Arbeitszeit
  {
    kelime: "die Anekdote",
    anlami: "Anekdot, fıkra, kısa ve ilginç hikaye",
    ornekCumle: "Mein Großvater erzählt immer lustige Anekdoten aus seiner Jugend."
  },
  {
    kelime: "die Atmosphäre",
    anlami: "Atmosfer, ortam, hava",
    ornekCumle: "Die Atmosphäre auf der Party war sehr entspannt und freundlich."
  },
  {
    kelime: "das Dutzend",
    anlami: "Düzine (12 adet)",
    ornekCumle: "Ich habe auf dem Markt ein Dutzend Eier gekauft."
  },
  {
    kelime: "der Fischfang",
    anlami: "Balıkçılık, balık avı",
    ornekCumle: "Am Wochenende gehen wir zum Fischfang an den See."
  },
  {
    kelime: "der Gebrauch",
    anlami: "Kullanım, kullanma",
    ornekCumle: "Vor dem Gebrauch des Gerätes sollten Sie die Anleitung lesen."
  },
  {
    kelime: "der Geist",
    anlami: "Ruh, zihin, akıl",
    ornekCumle: "Er hat einen scharfen Geist und lernt sehr schnell."
  },
  {
    kelime: "der Genuss",
    anlami: "Keyif, zevk, haz",
    ornekCumle: "Ein Glas Wein am Abend ist für mich ein reiner Genuss."
  },
  {
    kelime: "der Gesichtsausdruck",
    anlami: "Yüz ifadesi",
    ornekCumle: "An seinem Gesichtsausdruck konnte ich sehen, dass er glücklich war."
  },
  {
    kelime: "der Hummer",
    anlami: "Istakoz",
    ornekCumle: "Im Luxusrestaurant bestellten wir einen frischen Hummer."
  },
  {
    kelime: "das Kopfnicken",
    anlami: "Başıyla onaylama, kafa sallama (onay)",
    ornekCumle: "Ein kurzes Kopfnicken von ihm bedeutete, dass er einverstanden war."
  },
  {
    kelime: "das Kopfschütteln",
    anlami: "Başıyla reddetme, kafa sallama (ret)",
    ornekCumle: "Auf meine Frage antwortete er nur mit einem Kopfschütteln."
  },
  {
    kelime: "der Kutter",
    anlami: "Balıkçı teknesi",
    ornekCumle: "Der alte Kutter fuhr früh am Morgen aufs Meer hinaus."
  },
  {
    kelime: "die Makrele",
    anlami: "Uskumru",
    ornekCumle: "Geräucherte Makrele schmeckt besonders gut."
  },
  {
    kelime: "die Optimierung",
    anlami: "Optimizasyon, en uygun hale getirme",
    ornekCumle: "Die Optimierung der Arbeitsabläufe hat die Effizienz gesteigert."
  },
  {
    kelime: "die Option",
    anlami: "Seçenek, opsiyon",
    ornekCumle: "Wir haben mehrere Optionen, um das Problem zu lösen."
  },
  {
    kelime: "der Ruhestand",
    anlami: "Emeklilik",
    ornekCumle: "Nach 40 Arbeitsjahren freut er sich auf seinen Ruhestand."
  },
  {
    kelime: "die Unzufriedenheit",
    anlami: "Memnuniyetsizlik, hoşnutsuzluk",
    ornekCumle: "Die Unzufriedenheit der Mitarbeiter führte zu vielen Kündigungen."
  },
  {
    kelime: "die Work-Life-Balance",
    anlami: "İş-yaşam dengesi",
    ornekCumle: "Eine gute Work-Life-Balance ist wichtig für die Gesundheit."
  },
  {
    kelime: "dösen",
    anlami: "Uyuklamak, kestirmek",
    ornekCumle: "Die Katze döst gemütlich in der Sonne."
  },
  {
    kelime: "exportieren",
    anlami: "İhraç etmek",
    ornekCumle: "Deutschland exportiert viele Autos in die ganze Welt."
  },
  {
    kelime: "faulenzen",
    anlami: "Tembellik etmek",
    ornekCumle: "Am Sonntag möchte ich einfach nur zu Hause bleiben und faulenzen."
  },
  {
    kelime: "fürchten",
    anlami: "Korkmak",
    ornekCumle: "Viele Menschen fürchten sich vor Spinnen."
  },
  {
    kelime: "genießen",
    anlami: "Tadını çıkarmak, keyfini sürmek",
    ornekCumle: "Lass uns das schöne Wetter im Park genießen."
  },
  {
    kelime: "rumhängen",
    anlami: "Avarelik etmek, takılmak, boş boş dolaşmak",
    ornekCumle: "Die Jugendlichen hängen oft im Einkaufszentrum rum."
  },
  {
    kelime: "schaffen",
    anlami: "Başarmak, üstesinden gelmek, yaratmak",
    ornekCumle: "Ich bin sicher, dass wir das zusammen schaffen werden."
  },
  {
    kelime: "sich strecken",
    anlami: "Gerinmek",
    ornekCumle: "Jeden Morgen muss ich mich erst einmal ausgiebig strecken."
  },
  {
    kelime: "unterdrücken",
    anlami: "Bastırmak, baskılamak",
    ornekCumle: "Er versuchte, sein Lachen zu unterdrücken, aber es gelang ihm nicht."
  },
  {
    kelime: "sich weiterbilden",
    anlami: "Kendini geliştirmek, eğitimine devam etmek",
    ornekCumle: "Um im Beruf erfolgreich zu sein, muss man sich ständig weiterbilden."
  },
  {
    kelime: "verschlucken",
    anlami: "Yutmak",
    ornekCumle: "Das Kind hat aus Versehen eine kleine Münze verschluckt."
  },
  {
    kelime: "zutreffen",
    anlami: "Doğru olmak, geçerli olmak",
    ornekCumle: "Die Beschreibung im Prospekt trifft auf das Hotel voll und ganz zu."
  },
  {
    kelime: "ärmlich",
    anlami: "Fakir, yoksul, sefil",
    ornekCumle: "Sie lebten in einer sehr ärmlichen Hütte am Rande der Stadt."
  },
  {
    kelime: "ausreichend",
    anlami: "Yeterli, kafi",
    ornekCumle: "Wir haben ausreichend Zeit, um das Projekt fertigzustellen."
  },
  {
    kelime: "entspannt",
    anlami: "Rahatlamış, gevşemiş",
    ornekCumle: "Nach dem Yoga-Kurs fühle ich mich immer total entspannt."
  },
  {
    kelime: "erfahren",
    anlami: "Deneyimli, tecrübeli",
    ornekCumle: "Wir suchen einen erfahrenen Programmierer für unser Team."
  },
  {
    kelime: "fantastisch",
    anlami: "Fantastik, harika",
    ornekCumle: "Der Ausblick vom Berggipfel war einfach fantastisch."
  },
  {
    kelime: "großartig",
    anlami: "Muhteşem, harika",
    ornekCumle: "Du hast eine großartige Arbeit geleistet!"
  },
  {
    kelime: "herrlich",
    anlami: "Nefis, harika, şahane",
    ornekCumle: "An diesem herrlichen Sommertag gehen wir schwimmen."
  },
  {
    kelime: "idyllisch",
    anlami: "Sakin ve huzurlu, şirin",
    ornekCumle: "Sie wohnen in einem kleinen, idyllischen Dorf am See."
  },
  {
    kelime: "schläfrig",
    anlami: "Uykulu",
    ornekCumle: "Nach dem Mittagessen werde ich immer etwas schläfrig."
  },
  {
    kelime: "spontan",
    anlami: "Spontane, anlık",
    ornekCumle: "Wir haben uns spontan entschieden, ans Meer zu fahren."
  },
  {
    kelime: "versus",
    anlami: "Karşı, -e karşı",
    ornekCumle: "Das heutige Fußballspiel lautet: Bayern München versus Borussia Dortmund."
  },
  {
    kelime: "an der Stelle (+Gen.)",
    anlami: "...'nın yerinde",
    ornekCumle: "An deiner Stelle würde ich das Angebot sofort annehmen."
  },
  {
    kelime: "auf dem Herzen liegen",
    anlami: "Yüreğine dert olmak, içini kemirmek",
    ornekCumle: "Mir liegt etwas auf dem Herzen, das ich dir sagen muss."
  },
  {
    kelime: "blicken auf",
    anlami: "-e bakmak",
    ornekCumle: "Von unserem Balkon blicken wir direkt auf das Meer."
  },
  {
    kelime: "sich ehrenamtlich engagieren",
    anlami: "Gönüllü olarak çalışmak/faaliyet göstermek",
    ornekCumle: "Viele junge Leute engagieren sich ehrenamtlich im Umweltschutz."
  },
  {
    kelime: "sich einmischen in",
    anlami: "-e karışmak, burnunu sokmak",
    ornekCumle: "Bitte misch dich nicht in meine Angelegenheiten ein!"
  },
  {
    kelime: "es verschlägt jmdm. die Sprache",
    anlami: "Dili tutulmak, nutku tutulmak",
    ornekCumle: "Als sie den Preis gewann, hat es ihr die Sprache verschlagen."
  },
  {
    kelime: "etw. ist jmdm. heilig",
    anlami: "Bir şeyin birisi için kutsal/çok önemli olması",
    ornekCumle: "Sein freier Sonntag ist ihm heilig."
  },
  {
    kelime: "den Feierabend genießen",
    anlami: "İş çıkışı saatinin/paydosun tadını çıkarmak",
    ornekCumle: "Nach einem langen Arbeitstag möchte ich einfach nur meinen Feierabend genießen."
  },
  {
    kelime: "führen zu",
    anlami: "-e yol açmak, sebep olmak",
    ornekCumle: "Ständiger Stress kann zu gesundheitlichen Problemen führen."
  },
  {
    kelime: "halten für",
    anlami: "Birini/bir şeyi ... olarak görmek/kabul etmek",
    ornekCumle: "Ich halte ihn für einen sehr ehrlichen Menschen."
  },
  {
    kelime: "in gleichem Maße",
    anlami: "Aynı ölçüde, eşit derecede",
    ornekCumle: "Erfolg hängt in gleichem Maße von Talent und harter Arbeit ab."
  },
  {
    kelime: "jmdn. fragend anschauen",
    anlami: "Birine sorarcasına bakmak",
    ornekCumle: "Als er den Raum betrat, schauten ihn alle fragend an."
  },
  {
    kelime: "ein Sabbatjahr einlegen",
    anlami: "Bir yıllık ücretli/ücretsiz izin almak",
    ornekCumle: "Nach zehn Jahren im Beruf möchte sie ein Sabbatjahr einlegen und die Welt bereisen."
  },
  {
    kelime: "seinen Gedanken nachgehen",
    anlami: "Düşüncelere dalmak",
    ornekCumle: "Er saß am Fenster und ging seinen Gedanken nach."
  },
  {
    kelime: "sich etw. vorstellen",
    anlami: "Bir şeyi hayal etmek, gözünün önüne getirmek",
    ornekCumle: "Kannst du dir vorstellen, auf dem Mond zu leben?"
  },
  {
    kelime: "zu kurz kommen",
    anlami: "İhmal edilmek, gereken ilgiyi/payı alamamak",
    ornekCumle: "Bei der ganzen Arbeit kommt die Freizeit oft zu kurz."
  },
  // BÖLÜM 2: Freizeitgestaltung
  {
    kelime: "der Ablauf",
    anlami: "Süreç, akış, gidişat",
    ornekCumle: "Der genaue Ablauf der Veranstaltung steht im Programmheft."
  },
  {
    kelime: "die Anmeldebestätigung",
    anlami: "Kayıt onayı",
    ornekCumle: "Sie erhalten nach der Registrierung eine Anmeldebestätigung per E-Mail."
  },
  {
    kelime: "das Anschauungsbeispiel",
    anlami: "Görsel örnek, somut örnek",
    ornekCumle: "Der Lehrer nutzte ein Anschauungsbeispiel, um die Theorie zu erklären."
  },
  {
    kelime: "der Artenschutz",
    anlami: "Türlerin korunması",
    ornekCumle: "Der Artenschutz ist ein wichtiges Thema im Biologieunterricht."
  },
  {
    kelime: "die Aufrechterhaltung",
    anlami: "Sürdürme, devamını sağlama, muhafaza etme",
    ornekCumle: "Die Aufrechterhaltung von Ordnung und Sicherheit ist die Aufgabe der Polizei."
  },
  {
    kelime: "die Ausrüstung",
    anlami: "Ekipman, teçhizat, donanım",
    ornekCumle: "Für die Bergtour benötigen wir eine spezielle Ausrüstung."
  },
  {
    kelime: "das Ehrenamt",
    anlami: "Gönüllü çalışma, fahri görev",
    ornekCumle: "Sie übt ein Ehrenamt im örtlichen Tierheim aus."
  },
  {
    kelime: "die Eigenheit",
    anlami: "Kendine has özellik, tuhaflık",
    ornekCumle: "Jede Region in Deutschland hat ihre eigenen kulinarischen Eigenheiten."
  },
  {
    kelime: "der Eingriff",
    anlami: "Müdahale",
    ornekCumle: "Der Arzt sagte, dass der operative Eingriff notwendig sei."
  },
  {
    kelime: "das Engagement",
    anlami: "Gönüllülük, bağlılık, angajman",
    ornekCumle: "Ihr soziales Engagement für benachteiligte Kinder ist bewundernswert."
  },
  {
    kelime: "die Fähigkeit",
    anlami: "Yetenek, kabiliyet",
    ornekCumle: "Er hat die Fähigkeit, andere Menschen zu motivieren."
  },
  {
    kelime: "das Fechten",
    anlami: "Eskrim",
    ornekCumle: "Fechten ist eine elegante und anspruchsvolle Sportart."
  },
  {
    kelime: "das Hamsterrad",
    anlami: "Hamster çarkı (mecazi: monoton, sıkıcı ve bitmeyen iş döngüsü)",
    ornekCumle: "Viele Menschen fühlen sich gefangen im Hamsterrad des Alltags."
  },
  {
    kelime: "das Herrchen",
    anlami: "(Erkek) Evcil hayvan sahibi",
    ornekCumle: "Der Hund wartet jeden Tag an der Tür auf sein Herrchen."
  },
  {
    kelime: "der Hindernisparcours",
    anlami: "Engelli parkur",
    ornekCumle: "Die Soldaten mussten einen schwierigen Hindernisparcours überwinden."
  },
  {
    kelime: "der Kleingartenverein",
    anlami: "Hobi bahçesi derneği",
    ornekCumle: "Mein Opa ist Mitglied in einem Kleingartenverein."
  },
  {
    kelime: "das Klettern",
    anlami: "Tırmanma, dağcılık",
    ornekCumle: "Am Wochenende gehen wir in den Alpen klettern."
  },
  {
    kelime: "der Lebensraum",
    anlami: "Yaşam alanı",
    ornekCumle: "Der tropische Regenwald ist der Lebensraum für unzählige Tier- und Pflanzenarten."
  },
  {
    kelime: "die Mitgliederversammlung",
    anlami: "Üyeler toplantısı, genel kurul",
    ornekCumle: "Einmal im Jahr findet die Mitgliederversammlung des Vereins statt."
  },
  {
    kelime: "der Mitgliedsbeitrag",
    anlami: "Üyelik aidatı",
    ornekCumle: "Der Mitgliedsbeitrag für das Fitnessstudio wird monatlich abgebucht."
  },
  {
    kelime: "die Mitgliedschaft",
    anlami: "Üyelik",
    ornekCumle: "Ich habe meine Mitgliedschaft im Sportverein gekündigt."
  },
  {
    kelime: "das Ökosystem",
    anlami: "Ekosistem",
    ornekCumle: "Die Verschmutzung der Meere bedroht das gesamte marine Ökosystem."
  },
  {
    kelime: "die Satzung",
    anlami: "Tüzük, nizamname",
    ornekCumle: "Alle Regeln und Ziele des Vereins sind in der Satzung festgelegt."
  },
  {
    kelime: "der Selbstzweck",
    anlami: "Salt amaç, kendi başına amaç",
    ornekCumle: "Kunst sollte frei sein und keinem Selbstzweck dienen."
  },
  {
    kelime: "der Stammtisch",
    anlami: "Müdavim masası (bir grup insanın düzenli olarak buluştuğu masa/yer)",
    ornekCumle: "Jeden Freitag trifft er sich mit seinen Freunden am Stammtisch."
  },
  {
    kelime: "die Strategie",
    anlami: "Strateji",
    ornekCumle: "Wir brauchen eine neue Strategie, um unsere Verkaufszahlen zu steigern."
  },
  {
    kelime: "der Trachtenverein",
    anlami: "Geleneksel kıyafetler derneği",
    ornekCumle: "Der Trachtenverein pflegt bayerisches Brauchtum."
  },
  {
    kelime: "das Trampolin",
    anlami: "Trambolin",
    ornekCumle: "Die Kinder springen den ganzen Tag auf dem Trampolin im Garten."
  },
  {
    kelime: "die Umweltverschmutzung",
    anlami: "Çevre kirliliği",
    ornekCumle: "Umweltverschmutzung ist eines der größten Probleme unserer Zeit."
  },
  {
    kelime: "die Vorverkaufsstelle",
    anlami: "Ön satış gişesi/noktası",
    ornekCumle: "Tickets für das Konzert gibt es an allen bekannten Vorverkaufsstellen."
  },
  {
    kelime: "das Yoga",
    anlami: "Yoga",
    ornekCumle: "Ich mache jeden Morgen Yoga, um entspannt in den Tag zu starten."
  },
  {
    kelime: "basteln",
    anlami: "El işi yapmak",
    ornekCumle: "Zu Weihnachten basteln wir Dekorationen für den Tannenbaum."
  },
  {
    kelime: "beitreten",
    anlami: "Katılmak, üye olmak",
    ornekCumle: "Möchtest du unserem Buchclub beitreten?"
  },
  {
    kelime: "entspannen",
    anlami: "Rahatlamak, gevşemek",
    ornekCumle: "Nach der Arbeit entspanne ich am liebsten bei einem guten Buch."
  },
  {
    kelime: "ermuntern",
    anlami: "Cesaretlendirmek, teşvik etmek",
    ornekCumle: "Seine Freunde ermunterten ihn, an dem Wettbewerb teilzunehmen."
  },
  {
    kelime: "sensibilisieren",
    anlami: "Duyarlı hale getirmek, hassaslaştırmak",
    ornekCumle: "Diese Kampagne soll die Menschen für das Thema Umweltschutz sensibilisieren."
  },
  {
    kelime: "stärken",
    anlami: "Güçlendirmek",
    ornekCumle: "Regelmäßiger Sport stärkt das Immunsystem."
  },
  {
    kelime: "amüsant",
    anlami: "Eğlenceli, keyifli",
    ornekCumle: "Wir haben einen sehr amüsanten Abend im Theater verbracht."
  },
  {
    kelime: "ermäßigt",
    anlami: "İndirimli",
    ornekCumle: "Studenten und Rentner erhalten einen ermäßigten Eintrittspreis."
  },
  {
    kelime: "gemeinnützig",
    anlami: "Kamu yararına, kar amacı gütmeyen",
    ornekCumle: "Er arbeitet für eine gemeinnützige Organisation."
  },
  {
    kelime: "gemeinschaftlich",
    anlami: "Ortaklaşa, toplu",
    ornekCumle: "Das Projekt wurde gemeinschaftlich von allen Abteilungen entwickelt."
  },
  {
    kelime: "harmonisch",
    anlami: "Uyumlu, ahenkli",
    ornekCumle: "Die Farben im Raum wirken sehr harmonisch."
  },
  {
    kelime: "inspirierend",
    anlami: "İlham verici",
    ornekCumle: "Ihre Rede war wirklich sehr inspirierend."
  },
  {
    kelime: "kreativ",
    anlami: "Yaratıcı",
    ornekCumle: "Sie ist eine sehr kreative Künstlerin."
  },
  {
    kelime: "lehrreich",
    anlami: "Öğretici, eğitici",
    ornekCumle: "Der Besuch im Museum war sehr interessant und lehrreich."
  },
  {
    kelime: "Anschluss finden",
    anlami: "Çevre edinmek, (bir gruba) katılmak, bağlantı kurmak",
    ornekCumle: "In einer neuen Stadt ist es oft schwierig, schnell Anschluss zu finden."
  },
  {
    kelime: "das bunte Treiben",
    anlami: "Cıvıl cıvıl hareketlilik, curcuna",
    ornekCumle: "Auf dem Stadtfest herrschte ein buntes Treiben."
  },
  {
    kelime: "der eingetragene Verein (e. V.)",
    anlami: "Tescilli dernek",
    ornekCumle: "Unser Sportclub ist ein eingetragener Verein."
  },
  {
    kelime: "etw./jmdn. zu schätzen wissen",
    anlami: "Bir şeyin/birinin kıymetini bilmek",
    ornekCumle: "Man sollte seine Freunde und Familie zu schätzen wissen."
  },
  {
    kelime: "Fauna und Flora",
    anlami: "Hayvan ve bitki örtüsü (Bitey ve Direy)",
    ornekCumle: "Im Nationalpark kann man die vielfältige Fauna und Flora bewundern."
  },
  {
    kelime: "für so ziemlich alles",
    anlami: "Hemen hemen her şey için",
    ornekCumle: "Mein Bruder interessiert sich für so ziemlich alles, was mit Technik zu tun hat."
  },
  {
    kelime: "in die engere Auswahl kommen",
    anlami: "Kısa listeye kalmak, son elemeye kalmak",
    ornekCumle: "Von 100 Bewerbern sind nur fünf in die engere Auswahl gekommen."
  },
  {
    kelime: "in Einklang bringen",
    anlami: "Uyumlu hale getirmek, bağdaştırmak",
    ornekCumle: "Es ist nicht immer leicht, Beruf und Familie in Einklang zu bringen."
  },
  {
    kelime: "in Rente gehen",
    anlami: "Emekli olmak",
    ornekCumle: "Nächstes Jahr wird mein Vater in Rente gehen."
  },
  {
    kelime: "den inneren Schweinehund überwinden",
    anlami: "Tembelliğini yenmek, nefsine hakim olmak",
    ornekCumle: "Ich muss meinen inneren Schweinehund überwinden und endlich Sport machen."
  },
  {
    kelime: "jmdn. willkommen heißen",
    anlami: "Birini hoş karşılamak, \"hoş geldin\" demek",
    ornekCumle: "Wir möchten unsere neuen Nachbarn herzlich willkommen heißen."
  },
  {
    kelime: "tätig sein als",
    anlami: "... olarak çalışmak/faaliyet göstermek",
    ornekCumle: "Er ist seit vielen Jahren als Anwalt tätig."
  },
  {
    kelime: "sich etw. vornehmen",
    anlami: "Bir şeyi yapmaya niyetlenmek/karar vermek",
    ornekCumle: "Für das neue Jahr habe ich mir vorgenommen, mehr zu lesen."
  },
  {
    kelime: "Was für ein Pech!",
    anlami: "Ne şanssızlık! Ne kötü şans!",
    ornekCumle: "Ich habe den letzten Bus verpasst. Was für ein Pech!"
  }
];