const suchary = [
	'– Jak się nazywa lekarz który leczy pandy? <br> – Pandoktor <br>',
	'Na lekcji plastyki dzieci rysują sporty zimowe. Podchodzi pani do Jasia i pyta: <br>– Jasiu, czemu nic nie narysowałeś? <br>– Nieprawda, narysowałam Małysza. <br>– A gdzie on jest? <br>– No poleciał. <br>',
	'– Dlaczego jajka nie potrafią dochować tajemnicy? <br>– Bo pękają, gdy robi się gorąco. <br>',
	'– Tatusiu, czy Ocean Spokojny zawsze jest spokojny? <br>Ojciec odpowiada: <br>– Czy nie możesz zapytać o coś mądrzejszego? <br>– Mogę. Chciałbym wiedzieć, kiedy umarło Morze Martwe. <br>',
	'Dwie muchy grają w piłkę nożną w filiżance. Po jakimś czasie jedna mówi do drugiej: <br>– Staraj się, bo za tydzień gramy w pucharze. <br>',
	'– Gdzie duchy i kościotrupy jadą na wakacje? <br>– Nad Morze Martwe <br>',
	'– Jakie są ulubione ryby matematyka? <br>– Sumy <br>',
	'– Dzień dobry, dzwonię w sprawie garażu. <br>– Tutaj baza rakietowa. Źle pan trafił. <br>– To wy źle trafiliście... <br>',
	'– Panie doktorze, wszyscy mnie ignorują! <br>– Następny proszę! <br>',
	'– Jaki jest największy las na świecie? – pyta pani Jasia na przyrodzie. <br>– Las Vegas <br>',
	'Spotykają się dwa jeże. Jeden ma zabandażowaną łapkę. <br>– Co ci się stało? <br>– Chciałem się podrapać <br>',
	'– Dlaczego duchy nie kłamią? <br>– Bo wiedzą, że możesz je przejrzeć na wylot <br>',
	'– Co mop zawsze ogląda w walentynki? <br>– Przeminęło z wiadrem <br>',
	'– Jaki jest film, którego boją się wszystkie pralki? <br>– Człowiek z bielizną <br>',
	'– Co jedna flaga powiedziała do drugiej? <br>– Nic, tylko sobie pomachały <br>',
	'– Jaki jest ulubiony film piłkarzy? <br>– Robokop <br>',
	'– Jak się czuje ogórek w towarzystwie śmietany? <br>– Mizernie <br>',
	'– Dlaczego lody się topią? <br>– Bo nie umieją pływać <br>',
	'– Budzę się, a to mój telefon frunie przez pokój. Okazało się, że był włączony tryb samolotowy. <br>',
	'– Zofia po dwóch tygodniach diety zrzuciła wagę... z ósmego piętra. <br>',
	'– Mamy twojego syna... <br>– To strasznie! Czego chcecie? <br>– Niech pan przyjdzie i go odbierze, zaraz zamykamy przedszkole. <br>',
	'– A my mamy w domu wszystko! – chwali się koleżankom mała Ala. <br>– Skąd wiesz? <br>– Bo jak tata przywiózł delegacji gitarę, to mama powiedziała, że tylko tego brakowało <br>',
	'– Przychodzi kucharz do lekarza i mówi: <br>– Panie doktorze, ostatnio zauważyłem, że źle słyszę na jedno ucho. <br>– A na drugie? <br>– Kotlet schabowy, frytki i surówka z marchewki. <br>',
	'– Kupiłam swojej córce kamerkę internetową. Dobra informacja jest taka, że połowa pokoju zawsze jest idealnie posprzątana. <br>',
	'Idzie Jasiu do Bacy i mówi: <br>– Powiedzcie: Chrząszcz brzmi w trzcinie. <br>A baca na to: <br>– Chrobok burcy w trowie <br>',
	'– Pana pies szczeka całą noc – mówi rozcwścieczony sąsiad. <br>– To nic, odeśpi w dzień – odpowiada właściciel psa. <br>',
	'– Czy wiesz, za co uwielbiam łopaty? <br>– Wiedzą, że grunt to zdrowie <br>',
	'Rozmawiają koledzy: <br>– Powtarzałeś coś przed egzaminem? <br>– No jasne. <br>– A co? <br>– Będzie dobrze, będzie dobrze <br>',
	'Badania wykazały, że nic tak pozytywnie wpływa na myślenie o sąsiadach, jak wykrycie zaraz po przeprowadzce niezabezpieczonej sieci WiFi. <br>',
	'– Jasiu, dlaczego wnosisz na paluszkach to wiadro z wodą do sypialni? <br>– Bo tata prosił, żeby go o piątej po cichutku obudzić. <br>',
	'– Dzień dobry, do czego służą okulary? <br>– Do widzenia. <br>',
	'Jedno oko mówi do drugiego: <br>– Tak między nami, wydaje mi się, że coś tu węszy <br>',
	'Rozmawiają dwie pchły: <br>– Gdzie byłaś na wakacjach? <br>– Na krecie <br>',
	'– Dlaczego dorośli pytają dzieci, kim chcą zostać w przyszłości? <br>– Bo sami wciąż szukają na to pomysłu <br>',
	'– Dlaczego nie da się zjeść zegarka? <br>– Bo to zbyt czasochłonne <br>',
	'Tata pyta Jasia: <br>– Po co Ci w domu łopata i kompas? <br>– Zamierzam posprzątać w moim pokoju <br>',
	'Dziecko skarży się mamie: <br>– Mamo, dzieci mówią, że jestem wampirem <br>– Nie przejmuj się i jedz szybciej bo ci barszczyk skrzepnie <br>',
	'Jasio wybrał się na mecz. Siedzący obok mężczyzna pyta go: <br>– Jesteś tu sam? Jak wszedłeś? <br>– Miałem bilet. <br> ciąg dalszy nastąpi <br>',
	'ciąg dalszy: <br> – Sam go kupiłeś? <br>– Nie, tata kupił. <br>– A gdzie tata? <br>– W domu, szuka biletu <br>',
	'– Jak leci? <br>– Super, tylko palce mnie strasznie bolą. <br>– Co się stało? <br>– Wczoraj na czacie mieliśmy imprezę karaoke <br>',
	'Na plaży: <br>– Ej, co jest bliżej: Katowice czy Słońce? <br>– A widzisz stąd Katowice? <br>',
	'Pukanie do drzwi: <br>– Otwierać, policja! <br>– A czego chcecie? <br>– Porozmawiać. <br>– A ilu was tam jest? <br>– Dwóch. <br>– To porozmawiajcie między sobą. <br>',
	'– Baco, macie takiego małego pieska i wieszacie na furtce napis: "Uwaga, pies"? <br>– A bo mi go już 3 razy prawie zdeptali <br>',
	'Jasiu do sąsiadki: <br>– Potrzebna pani lodówka? <br>– Nie. <br>– To zaraz przyjdziemy zabrać. <br>',
	'Przychodzi Jasiu do domu i mama się go pyta: <br>– Czemu płaczesz? <br>– Bo dzieci w szkole mówią że dużo jem! <br>Mama na to: <br>– To nieprawda, a teraz zjedz zupkę, bo mi wanna potrzebna <br>',
	'Wpada koleżanka do drugiej koleżanki do domu i zagaduje: <br>– Co u Ciebie tak posprzątane? Internet nie działa? <br>',
	'Nauczyciel języka polskiego pyta sie uczniów: <br>– Jak brzmi liczba mnoga do rzeczownika "niedziela"? <br>– Wakacje, proszę pani. <br>',
	'Jasio mówi do kolegi: <br>– Kiedyś byłem bardzo niezdecydowany. <br>– A teraz? <br>– W sumie sam nie wiem. <br>',
	'Rozmawiają dwie kangurzyce. <br>– Chciałabyś mieć jeszcze jedno dziecko? <br>– A wiesz, to nie na moją kieszeń. <br>',
	'– Dlaczego nauczyciel matemtyki musiał trochę odpocząć? <br>– Bo się kompletnie przeliczył <br>',
	'Śpi gajowy w leśniczówce, nagle budzi się i słyszy jakiś łomot. Patrzy, a tam w kontakcie spadło napięcie. <br>',
	'– Znasz stadion na Księżycu? Mówią, że ma imponującą powierzchnię, ale coś brakuje atmosfery... <br>',
	'– Co robi piłkarz na autostradzie? <br>– Stoi w korkach <br>',
	'– Wpadnij kiedyś do mnie, mam nowego psa. <br>– A nie pogryzie mnie? <br>– Właśnie chciałem to sprawdzić. <br>',
	'– Jaki film najbardziej pasuje do włoszczyzny? <br>– Bulion zachodzącego słońca. <br>',
	'Dzwoni telefon. Pies odbiera i mówi: <br>– Hau! <br>– Halo? <br>– Hau! <br>– Nic nie rozumiem <br>– Hau! <br>– Proszę mówić wyraźniej! <br>– H jak Henryk, A jak Agnieszka, U jak Urszula: Hau! <br>',
	'– Panie, tu wolno łowić ryby tylko na zezwolenie! <br>– A ja już tu trzecią godzinę próbuję złapać coś na robaka <br>',
	'Mały mól pierwszy raz samodzielnie wyleciał z szafy, zrobił rundkę i wrócił na płaszczyk. <br>Stary mól pyta: <br>– Jak poszło? <br>– Chyba dobrze, wszyscy klaskali. <br>',
	'– Dlaczego żaba poszła do lekarza? <br>– Bo coś ją strzykało w stawie <br>',
]

const UstawSuchara = (minuta) =>
{
	document.getElementById('suchar').innerHTML = suchary[minuta % suchary.length]
}
