let linki = [
	"https://www.youtube.com/channel/UC70N5rd4k6--UNJ4eXx675g",
	"https://aniagotuje.pl/przepis/parowki-w-ciescie-francuskim",
	"https://images.app.goo.gl/rbEHGfqcX3yNt2G47",
	"https://images.app.goo.gl/6M8ezojEVeioDBxa6",
	"https://pl.m.wikipedia.org/wiki/Pr%C4%85d_Zatokowy",
	"https://www.granddeco.pl/product-pol-4800-Kamienie-rzeczne-200g-naturalne.html",
	"https://www.polsat.pl/program/nasz-nowy-dom/",
	"https://www.izolacje.com.pl/produkt/metody-osuszania-budynkow/202047,folia-polietylenowa-hdpe",
	"https://en.m.wikipedia.org/wiki/Polytetrafluoroethylene",
	"https://en.m.wikipedia.org/wiki/Chinese_characters",
	"https://pl.wikipedia.org/wiki/Wikipedia:Neutralny_punkt_widzenia",
	"https://es.pons.com/traducci%C3%B3n/polaco-espa%C3%B1ol/dziko",
	"https://www.mjakmama24.pl/ciaza/dieta-i-suplementy/herbata-w-ciazy-jaka-herbate-pic-w-ciazy-aa-Mrj3-hX4m-HjTA.html",
	"https://youtu.be/q_jHK98rhcs",
	"https://pl.m.wikipedia.org/wiki/Tomek_w_krainie_kangur%C3%B3w",
	"https://www.instagram.com/p/CFflFgKBtv3/?igshid=17iqmo8sz7xlk",
	"https://www.domowe-wypieki.pl/przepisy/ciastka-male-wypieki/873-muffinki-z-czekolada",
	"https://www.youtube.com/watch?v=UityBuZoXv0",
	"https://www.youtube.com/watch?v=UKGUhDqIEV0",
	"https://pl.wikipedia.org/wiki/Przewlek%C5%82a_obturacyjna_choroba_p%C5%82uc",
	"https://www.omlet.com.pl/guide/chomiki/o_chomikach/dziko_%C5%BCyj%C4%85ce_chomiki/",
	"https://allegro.pl/oferta/proline-waz-ogrodowy-szlauf-szlauch-1-2-20m-5481975073",
	"https://www.miejski.pl/slowo-Spadaj+na+drzewa+banany+prostowa%C4%87",
	"https://pl.aliexpress.com/item/32963988480.html",
	"https://pl.aliexpress.com/item/1005001382256955.html?src=google&albch=shopping&acnt=494-037-6276&isdl=y&slnk=&plac=&mtctp=&albbt=Google_7_shopping&aff_platform=google&aff_short_key=UneMJZVf&&albagn=888888&isSmbAutoCall=false&needSmbHouyi=false&albcp=6459779478&albag=81013839001&trgt=1167175796805&crea=pl1005001382256955&netw=u&device=c&albpg=1167175796805&albpd=pl1005001382256955&gclid=CjwKCAiAhbeCBhBcEiwAkv2cY2vJLouVp5pwbO-D6A3cw1QzMDnaayXW3MS73vfHU7ii756hD4f_GxoCMvYQAvD_BwE&gclsrc=aw.ds",
	"https://arena.pl/oferta/elektryczna-rakieta-lapka-na-muchy-komary-owady-na-prad-39522005",
	"https://pl.wikipedia.org/wiki/Kategoria:Rosyjskie_ta%C5%84ce_ludowe",
	"https://www.maangchi.com/recipe/chaesik-kimchi",
	"https://pl.wikipedia.org/wiki/Uusikaupunki",
	"https://upload.wikimedia.org/wikipedia/commons/0/02/Pomnik_Chrystusa_w_%C5%9Awiebodzinie.jpg",
	"https://szkola.tvn.pl/aktualnosci,2735,n/chcesz-wystapic-w-szkole,144400.html",
	"https://www.olx.pl/oferta/zuzel-w-cenie-transportu-szlaka-budowa-drog-materialy-sypkie-transport-CID619-IDqHHER.html",
	"https://niemieckiniegryzie.wordpress.com/2018/06/15/konstrukcja-bezokolicznikowa-z-zu-i-bez-zu/",
	"https://www.ceneo.pl/91580103",
	"https://www.ceneo.pl/40543655",
	"https://www.filmweb.pl/film/Jestem+M.+Misfit-2019-841205",
	"http://grafik.rp.pl/g4a/417114,128992,3.jpg",
	"https://www.youtube.com/watch?v=1t9-6HJbPlc",
	"https://i.pinimg.com/originals/90/2b/b8/902bb8da69ea1c854f7d180ac727f30f.jpg",
	"https://img.besty.pl/images/398/60/3986005.jpg",
	"https://www.youtube.com/watch?v=z6sW6jG8eQY",
	"https://tarczynski.pl/rosl-inne",
	"https://pbs.twimg.com/profile_images/495157428745678848/_iUW0sIC.jpeg",
	"https://pl.wikipedia.org/wiki/Rugby_union",
	"https://pl.wikipedia.org/wiki/Kategoria:Niemieccy_kultury%C5%9Bci"
];

function UstawLink()
{
	let ktorylink = Math.floor(Math.random() * 45);
	document.getElementById("randomlink").innerHTML = `<a href="${linki[ktorylink]}" target="blank" class="zlinkiem"><div class="elementylewa" id="randomlink2" onclick="UstawLink()"> <span class="duzaczcionka"> xd </span></div></a>`;
}
