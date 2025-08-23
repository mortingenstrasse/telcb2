// DOSYANIN EN BAŞINA BU SATIRI EKLEYİN
const lektionData = 

[
  {
    kelime: "der/die Abteilungsleiter/in",
    anlami: "Bölüm yöneticisi/şefi",
    ornekCumle: "Die Abteilungsleiterin hat für morgen eine Besprechung einberufen."
},
  {
    kelime: "die Anerkennung",
    anlami: "Takdir, tanınma",
    ornekCumle: "Für seine harte Arbeit erhielt er viel Anerkennung von seinen Kollegen."
  },
  {
    kelime: "das Arbeitsumfeld",
    anlami: "Çalışma ortamı",
    ornekCumle: "Ein angenehmes Arbeitsumfeld fördert die Produktivität."
  },
  {
    kelime: "die Branche",
    anlami: "Sektör, endüstri",
    ornekCumle: "Die Automobilbranche erlebt derzeit einen starken Aufschwung."
  },
  {
    kelime: "der Lob",
    anlami: "Övgü",
    ornekCumle: "Der Chef sprach ihm großes Lob für seine Leistung aus."
  },
  {
    kelime: "der/die Dolmetscher/in",
    anlami: "Tercüman",
    ornekCumle: "Der Dolmetscher übersetzte die Rede simultan."
  },
  {
    kelime: "die Einkaufsabteilung",
    anlami: "Satın alma departmanı",
    ornekCumle: "Die Einkaufsabteilung ist für die Beschaffung von Materialien zuständig."
  },
  {
    kelime: "der/die Geschäftsführer/in",
    anlami: "Genel müdür/yönetici",
    ornekCumle: "Der Geschäftsführer präsentierte die Quartalszahlen."
  },
  {
    kelime: "der Konferenzraum",
    anlami: "Konferans salonu",
    ornekCumle: "Der Konferenzraum war für das Meeting gut vorbereitet."
  },
  {
    kelime: "der Optimismus",
    anlami: "İyimserlik",
    ornekCumle: "Sein Optimismus half ihm, schwierige Zeiten zu überwinden."
  },
  {
    kelime: "die Position",
    anlami: "Pozisyon, mevki",
    ornekCumle: "Er hat eine neue Position im Unternehmen angenommen."
  },
  {
    kelime: "die Priorität",
    anlami: "Öncelik",
    ornekCumle: "Die Kundenzufriedenheit hat oberste Priorität."
  },
  {
    kelime: "das Privatleben",
    anlami: "Özel hayat",
    ornekCumle: "Sie trennt ihr Privatleben strikt von ihrem Berufsleben."
  },
  {
    kelime: "das Selbstvertrauen",
    anlami: "Özgüven",
    ornekCumle: "Mit mehr Selbstvertrauen konnte sie die Herausforderung meistern."
  },
  {
    kelime: "die Sozialversicherung",
    anlami: "Sosyal sigorta",
    ornekCumle: "Die Sozialversicherung bietet Schutz im Krankheitsfall."
  },
  {
    kelime: "die Umschulung",
    anlami: "Yeniden eğitim, meslek değiştirme",
    ornekCumle: "Nach der Umschulung fand er schnell eine neue Anstellung."
  },
  {
    kelime: "der Urlaubsanspruch",
    anlami: "Tatil hakkı",
    ornekCumle: "Jeder Arbeitnehmer hat einen gesetzlichen Urlaubsanspruch."
  },
  {
    kelime: "das Werksgelände",
    anlami: "Fabrika alanı, tesis",
    ornekCumle: "Das Werksgelände wird durch Sicherheitspersonal überwacht."
  },
  {
    kelime: "absagen",
    anlami: "İptal etmek, reddetmek",
    ornekCumle: "Wir mussten das Treffen leider absagen."
  },
  {
    kelime: "anbieten",
    anlami: "Teklif etmek, sunmak",
    ornekCumle: "Er bot ihr seine Hilfe an."
  },
  {
    kelime: "anreisen",
    anlami: "Yolculuk yapmak, gelmek",
    ornekCumle: "Die Gäste werden morgen anreisen."
  },
  {
    kelime: "anstehen",
    anlami: "Sırada beklemek, sırası gelmek",
    ornekCumle: "Wir mussten lange anstehen, um die Tickets zu bekommen."
  },
  {
    kelime: "sich anstrengen",
    anlami: "Çabalamak, gayret etmek",
    ornekCumle: "Du musst dich mehr anstrengen, um deine Ziele zu erreichen."
  },
  {
    kelime: "äußern",
    anlami: "İfade etmek, belirtmek",
    ornekCumle: "Er äußerte seine Bedenken bezüglich des Projekts."
  },
  {
    kelime: "durchführen",
    anlami: "Gerçekleştirmek, yapmak",
    ornekCumle: "Wir werden die Untersuchung nächste Woche durchführen."
  },
  {
    kelime: "motivieren",
    anlami: "Motive etmek, teşvik etmek",
    ornekCumle: "Der Trainer motivierte sein Team vor dem Spiel."
  },
  {
    kelime: "veranstalten",
    anlami: "Düzenlemek, organize etmek",
    ornekCumle: "Die Stadt veranstaltet jedes Jahr ein großes Fest."
  },
  {
    kelime: "sich verständigen",
    anlami: "Anlaşmak, iletişim kurmak",
    ornekCumle: "Sie konnten sich trotz Sprachbarriere gut verständigen."
  },
  {
    kelime: "sich wohlfühlen",
    anlami: "Kendini iyi hissetmek",
    ornekCumle: "Ich fühle mich in meinem neuen Zuhause sehr wohl."
  },
  {
    kelime: "zwischendurch",
    anlami: "Ara sıra, arada bir",
    ornekCumle: "Ich esse zwischendurch immer einen kleinen Snack."
  },
  {
    kelime: "sich ärgern über",
    anlami: "Bir şeye sinirlenmek",
    ornekCumle: "Er ärgerte sich über den verlorenen Schlüssel."
  },
  {
    kelime: "Aufgaben übernehmen",
    anlami: "Görevleri üstlenmek",
    ornekCumle: "Sie ist bereit, neue Aufgaben zu übernehmen."
  },
  {
    kelime: "ein Bedürfnis befriedigen",
    anlami: "Bir ihtiyacı karşılamak",
    ornekCumle: "Das neue Produkt befriedigt ein wichtiges Kundenbedürfnis."
  },
  {
    kelime: "sich bemühen um",
    anlami: "Çabalamak, uğraşmak",
    ornekCumle: "Er bemüht sich um eine bessere Zukunft."
  },
  {
    kelime: "Bescheid sagen",
    anlami: "Haber vermek, bildirmek",
    ornekCumle: "Bitte sag mir Bescheid, wenn du ankommst."
  },
  {
    kelime: "sich beteiligen an",
    anlami: "Katılmak, iştirak etmek",
    ornekCumle: "Sie beteiligte sich aktiv an der Diskussion."
  },
  {
    kelime: "die Daumen drücken",
    anlami: "Şans dilemek, parmaklarını çaprazlamak",
    ornekCumle: "Ich drücke dir die Daumen für deine Prüfung."
  },
  {
    kelime: "Distanz halten zu",
    anlami: "Uzak durmak, mesafe koymak",
    ornekCumle: "Man sollte Distanz zu negativen Menschen halten."
  },
  {
    kelime: "einverstanden sein mit",
    anlami: "Razı olmak, hemfikir olmak",
    ornekCumle: "Ich bin mit deinem Vorschlag einverstanden."
  },
  {
    kelime: "erscheinen als",
    anlami: "Gibi görünmek, olarak belirmek",
    ornekCumle: "Er erschien als Retter in der Not."
  },
  {
    kelime: "etw. [Dat.] gewachsen sein",
    anlami: "Bir şeye yetkin olmak, üstesinden gelmek",
    ornekCumle: "Sie ist der Aufgabe gewachsen."
  },
  {
    kelime: "etw. mit jmdm. absprechen",
    anlami: "Bir şeyi biriyle konuşmak, kararlaştırmak",
    ornekCumle: "Ich muss das noch mit meinem Kollegen absprechen."
  },
  {
    kelime: "etw. [Dat.] nachgehen",
    anlami: "Bir şeyi takip etmek, peşinden gitmek",
    ornekCumle: "Er geht seinen Hobbys in seiner Freizeit nach."
  },
  {
    kelime: "hilfsbereit gegenüber jmdm. sein",
    anlami: "Birine karşı yardımsever olmak",
    ornekCumle: "Sie ist immer hilfsbereit gegenüber ihren Freunden."
  },
  {
    kelime: "hin und wieder",
    anlami: "Ara sıra, zaman zaman",
    ornekCumle: "Hin und wieder besuche ich meine Großeltern."
  },
  {
    kelime: "im Mittelpunkt stehen",
    anlami: "Odak noktasında olmak, merkezde olmak",
    ornekCumle: "Sie steht gerne im Mittelpunkt."
  },
  {
    kelime: "jmdn. beauftragen mit",
    anlami: "Birini bir şeyle görevlendirmek",
    ornekCumle: "Der Chef beauftragte ihn mit der Leitung des Projekts."
  },
  {
    kelime: "sich kümmern um",
    anlami: "İlgilenmek, bakmak",
    ornekCumle: "Sie kümmert sich liebevoll um ihre Kinder."
  },
  {
    kelime: "eine Präsentation halten",
    anlami: "Bir sunum yapmak",
    ornekCumle: "Er wird morgen eine Präsentation halten."
  },
  {
    kelime: "Wert legen auf",
    anlami: "Önem vermek, değer vermek",
    ornekCumle: "Sie legt großen Wert auf Pünktlichkeit."
  },
  {
    kelime: "zurückschrecken vor",
    anlami: "Geri durmak, çekinmek",
    ornekCumle: "Er schreckt vor keiner Herausforderung zurück."
  },
  {
    kelime: "die Annahme",
    anlami: "Varsayım, kabul",
    ornekCumle: "Meine Annahme hat sich als richtig erwiesen."
  },
  {
    kelime: "die Digitalisierung",
    anlami: "Dijitalleşme",
    ornekCumle: "Die Digitalisierung verändert die Arbeitswelt."
  },
  {
    kelime: "der Einfall",
    anlami: "Fikir, aklına gelme",
    ornekCumle: "Plötzlich hatte ich einen guten Einfall."
  },
  {
    kelime: "das Einkommen",
    anlami: "Gelir",
    ornekCumle: "Sein Einkommen ist in den letzten Jahren gestiegen."
  },
  {
    kelime: "die Empathie",
    anlami: "Empati",
    ornekCumle: "Empathie ist eine wichtige Eigenschaft im Umgang mit Menschen."
  },
  {
    kelime: "die Finanzierung",
    anlami: "Finansman",
    ornekCumle: "Die Finanzierung des Projekts ist gesichert."
  },
  {
    kelime: "das Kapital",
    anlami: "Sermaye",
    ornekCumle: "Das Unternehmen benötigt mehr Kapital für Investitionen."
  },
  {
    kelime: "das Konzept",
    anlami: "Konsept, kavram",
    ornekCumle: "Das Konzept des neuen Produkts ist vielversprechend."
  },
  {
    kelime: "das Merkmal",
    anlami: "Özellik, nitelik",
    ornekCumle: "Ein wichtiges Merkmal dieses Modells ist seine Effizienz."
  },
  {
    kelime: "der Schwerpunkt",
    anlami: "Odak noktası, ağırlık merkezi",
    ornekCumle: "Der Schwerpunkt der Forschung liegt auf erneuerbaren Energien."
  },
  {
    kelime: "die Sozialkompetenz",
    anlami: "Sosyal beceri",
    ornekCumle: "Sozialkompetenz ist im Berufsleben unerlässlich."
  },
  {
    kelime: "das Start-up",
    anlami: "Girişim, başlangıç şirketi",
    ornekCumle: "Das Start-up hat eine innovative Geschäftsidee."
  },
  {
    kelime: "die Zielgruppe",
    anlami: "Hedef kitle",
    ornekCumle: "Die Marketingkampagne richtet sich an eine junge Zielgruppe."
  },
  {
    kelime: "absehbar",
    anlami: "Öngörülebilir",
    ornekCumle: "Eine Lösung des Problems ist absehbar."
  },
  {
    kelime: "abstrakt",
    anlami: "Soyut",
    ornekCumle: "Das Konzept ist noch zu abstrakt."
  },
  {
    kelime: "außergewöhnlich",
    anlami: "Olağanüstü, sıra dışı",
    ornekCumle: "Sie hat eine außergewöhnliche Begabung für Musik."
  },
  {
    kelime: "drastisch",
    anlami: "Dramatik, şiddetli",
    ornekCumle: "Die Maßnahmen hatten drastische Auswirkungen."
  },
  {
    kelime: "ehrlich",
    anlami: "Dürüst",
    ornekCumle: "Er ist ein sehr ehrlicher Mensch."
  },
  {
    kelime: "ernsthaft",
    anlami: "Ciddi, samimi",
    ornekCumle: "Sie verfolgt ihre Ziele sehr ernsthaft."
  },
  {
    kelime: "genügend",
    anlami: "Yeterli",
    ornekCumle: "Wir haben genügend Zeit für das Projekt."
  },
  {
    kelime: "gezielt",
    anlami: "Hedefe yönelik, amaçlı",
    ornekCumle: "Die Werbung war gezielt auf junge Leute ausgerichtet."
  },
  {
    kelime: "industriell",
    anlami: "Endüstriyel",
    ornekCumle: "Die industrielle Produktion ist stark gestiegen."
  },
  {
    kelime: "nachhaltig",
    anlami: "Sürdürülebilir",
    ornekCumle: "Nachhaltige Entwicklung ist wichtig für die Zukunft."
  },
  {
    kelime: "überflüssig",
    anlami: "Gereksiz, fazla",
    ornekCumle: "Diese Information ist überflüssig."
  },
  {
    kelime: "verfügbar",
    anlami: "Mevcut, ulaşılabilir",
    ornekCumle: "Das Produkt ist ab sofort verfügbar."
  },
  {
    kelime: "wirtschaftlich",
    anlami: "Ekonomik, iktisadi",
    ornekCumle: "Die wirtschaftliche Lage hat sich verbessert."
  },
  {
    kelime: "zahlreich",
    anlami: "Çok sayıda, sayısız",
    ornekCumle: "Zahlreiche Besucher kamen zur Ausstellung."
  },
  {
    kelime: "berücksichtigen",
    anlami: "Dikkate almak, göz önünde bulundurmak",
    ornekCumle: "Wir müssen alle Aspekte berücksichtigen."
  },
  {
    kelime: "beurteilen",
    anlami: "Değerlendirmek, yargılamak",
    ornekCumle: "Es ist schwer, die Situation objektiv zu beurteilen."
  },
  {
    kelime: "existieren",
    anlami: "Var olmak, mevcut olmak",
    ornekCumle: "Viele Tierarten existieren nur noch in Zoos."
  },
  {
    kelime: "investieren",
    anlami: "Yatırım yapmak",
    ornekCumle: "Wir wollen in erneuerbare Energien investieren."
  },
  {
    kelime: "prägen",
    anlami: "Şekillendirmek, damga vurmak",
    ornekCumle: "Seine Kindheit hat ihn stark geprägt."
  },
  {
    kelime: "verwirklichen",
    anlami: "Gerçekleştirmek, hayata geçirmek",
    ornekCumle: "Sie konnte ihren Traum verwirklichen."
  },
  {
    kelime: "sich zurücklehnen",
    anlami: "Arkasına yaslanmak, rahatlamak",
    ornekCumle: "Nach getaner Arbeit kann man sich zurücklehnen."
  },
  {
    kelime: "jmdn. auf eine Idee bringen",
    anlami: "Birine bir fikir vermek",
    ornekCumle: "Seine Worte brachten mich auf eine neue Idee."
  },
  {
    kelime: "auf eine Idee kommen",
    anlami: "Bir fikir edinmek, aklına gelmek",
    ornekCumle: "Ich bin auf eine gute Idee gekommen."
  },
  {
    kelime: "sich auswirken auf",
    anlami: "Etkilemek, üzerinde etkisi olmak",
    ornekCumle: "Die Entscheidung wird sich auf die gesamte Firma auswirken."
  },
  {
    kelime: "basieren auf",
    anlami: "Dayanmak, esas almak",
    ornekCumle: "Die Theorie basiert auf langjährigen Forschungen."
  },
  {
    kelime: "sich auf dem Markt behaupten",
    anlami: "Piyasada tutunmak, varlığını sürdürmek",
    ornekCumle: "Das Unternehmen konnte sich erfolgreich auf dem Markt behaupten."
  },
  {
    kelime: "sich beschäftigen mit",
    anlami: "İlgilenmek, meşgul olmak",
    ornekCumle: "Sie beschäftigt sich viel mit Kunst."
  },
  {
    kelime: "sich auf dem Markt durchsetzen",
    anlami: "Piyasada kendini kabul ettirmek",
    ornekCumle: "Das neue Produkt konnte sich schnell auf dem Markt durchsetzen."
  },
  {
    kelime: "erhältlich sein",
    anlami: "Mevcut olmak, temin edilebilir olmak",
    ornekCumle: "Das Buch ist in allen Buchhandlungen erhältlich."
  },
  {
    kelime: "sich erweisen als",
    anlami: "Olarak ortaya çıkmak, olduğu anlaşılmak",
    ornekCumle: "Seine Vorhersage erwies sich als richtig."
  },
  {
    kelime: "sich Gedanken machen",
    anlami: "Düşünmek, kafa yormak",
    ornekCumle: "Ich mache mir viele Gedanken über die Zukunft."
  },
  {
    kelime: "gelten als",
    anlami: "Olarak kabul edilmek, sayılmak",
    ornekCumle: "Er gilt als einer der besten Ärzte."
  },
  {
    kelime: "einem Ideal treu bleiben",
    anlami: "Bir ideale sadık kalmak",
    ornekCumle: "Sie blieb ihren Idealen immer treu."
  },
  {
    kelime: "sich identifizieren mit",
    anlami: "Özdeşleşmek, kendini bir şeyle bağdaştırmak",
    ornekCumle: "Er kann sich mit den Zielen des Unternehmens identifizieren."
  },
  {
    kelime: "im Nachhinein",
    anlami: "Sonradan, geriye dönük olarak",
    ornekCumle: "Im Nachhinein war die Entscheidung richtig."
  },
  {
    kelime: "einen Kredit aufnehmen",
    anlami: "Kredi çekmek",
    ornekCumle: "Wir mussten einen Kredit aufnehmen, um das Haus zu kaufen."
  },
  {
    kelime: "mit sich bringen",
    anlami: "Beraberinde getirmek, yol açmak",
    ornekCumle: "Die Veränderung wird einige Herausforderungen mit sich bringen."
  },
  {
    kelime: "der Norm entsprechen",
    anlami: "Norma uymak",
    ornekCumle: "Das Produkt entspricht nicht der Norm."
  },
  {
    kelime: "eine Tätigkeit ausführen",
    anlami: "Bir faaliyeti yerine getirmek",
    ornekCumle: "Er führt seine Tätigkeit sehr gewissenhaft aus."
  },
  {
    kelime: "überzeugt sein von",
    anlami: "Bir şeye ikna olmak, inanmak",
    ornekCumle: "Ich bin von seiner Ehrlichkeit überzeugt."
  },
  {
    kelime: "umgehen mit",
    anlami: "Başa çıkmak, idare etmek",
    ornekCumle: "Sie kann gut mit Stress umgehen."
  }
]
