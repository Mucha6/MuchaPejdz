var linki = new Array(45);
linki[0] = "https://www.youtube.com/channel/UC70N5rd4k6--UNJ4eXx675g";
linki[1] = "https://aniagotuje.pl/przepis/parowki-w-ciescie-francuskim";
linki[2] = "https://images.app.goo.gl/rbEHGfqcX3yNt2G47";
linki[3] = "https://images.app.goo.gl/6M8ezojEVeioDBxa6";
linki[4] = "https://pl.m.wikipedia.org/wiki/Pr%C4%85d_Zatokowy";
linki[5] = "https://www.granddeco.pl/product-pol-4800-Kamienie-rzeczne-200g-naturalne.html";
linki[6] = "https://www.polsat.pl/program/nasz-nowy-dom/";
linki[7] = "https://www.izolacje.com.pl/produkt/metody-osuszania-budynkow/202047,folia-polietylenowa-hdpe";
linki[8] = "https://en.m.wikipedia.org/wiki/Polytetrafluoroethylene";
linki[9] = "https://en.m.wikipedia.org/wiki/Chinese_characters";
linki[10] = "https://pl.wikipedia.org/wiki/Wikipedia:Neutralny_punkt_widzenia";
linki[11] = "https://es.pons.com/traducci%C3%B3n/polaco-espa%C3%B1ol/dziko";
linki[12] = "https://www.mjakmama24.pl/ciaza/dieta-i-suplementy/herbata-w-ciazy-jaka-herbate-pic-w-ciazy-aa-Mrj3-hX4m-HjTA.html";
linki[13] = "https://youtu.be/q_jHK98rhcs";
linki[14] = "https://pl.m.wikipedia.org/wiki/Tomek_w_krainie_kangur%C3%B3w";
linki[15] = "https://www.instagram.com/p/CFflFgKBtv3/?igshid=17iqmo8sz7xlk";
linki[16] = "https://www.domowe-wypieki.pl/przepisy/ciastka-male-wypieki/873-muffinki-z-czekolada";
linki[17] = "https://www.youtube.com/watch?v=UityBuZoXv0";
linki[18] = "https://www.youtube.com/watch?v=UKGUhDqIEV0";
linki[19] = "https://pl.wikipedia.org/wiki/Przewlek%C5%82a_obturacyjna_choroba_p%C5%82uc";
linki[20] = "https://www.omlet.com.pl/guide/chomiki/o_chomikach/dziko_%C5%BCyj%C4%85ce_chomiki/";
linki[21] = "https://allegro.pl/oferta/proline-waz-ogrodowy-szlauf-szlauch-1-2-20m-5481975073";
linki[22] = "https://www.miejski.pl/slowo-Spadaj+na+drzewa+banany+prostowa%C4%87";
linki[23] = "https://pl.aliexpress.com/item/32963988480.html";
linki[24] = "https://pl.aliexpress.com/item/1005001382256955.html?src=google&albch=shopping&acnt=494-037-6276&isdl=y&slnk=&plac=&mtctp=&albbt=Google_7_shopping&aff_platform=google&aff_short_key=UneMJZVf&&albagn=888888&isSmbAutoCall=false&needSmbHouyi=false&albcp=6459779478&albag=81013839001&trgt=1167175796805&crea=pl1005001382256955&netw=u&device=c&albpg=1167175796805&albpd=pl1005001382256955&gclid=CjwKCAiAhbeCBhBcEiwAkv2cY2vJLouVp5pwbO-D6A3cw1QzMDnaayXW3MS73vfHU7ii756hD4f_GxoCMvYQAvD_BwE&gclsrc=aw.ds";
linki[25] = "https://arena.pl/oferta/elektryczna-rakieta-lapka-na-muchy-komary-owady-na-prad-39522005";
linki[26] = "https://pl.wikipedia.org/wiki/Kategoria:Rosyjskie_ta%C5%84ce_ludowe";
linki[27] = "https://www.maangchi.com/recipe/chaesik-kimchi";
linki[28] = "https://pl.wikipedia.org/wiki/Uusikaupunki";
linki[29] = "https://upload.wikimedia.org/wikipedia/commons/0/02/Pomnik_Chrystusa_w_%C5%9Awiebodzinie.jpg";
linki[30] = "https://szkola.tvn.pl/aktualnosci,2735,n/chcesz-wystapic-w-szkole,144400.html";
linki[31] = "https://www.olx.pl/oferta/zuzel-w-cenie-transportu-szlaka-budowa-drog-materialy-sypkie-transport-CID619-IDqHHER.html";
linki[32] = "https://niemieckiniegryzie.wordpress.com/2018/06/15/konstrukcja-bezokolicznikowa-z-zu-i-bez-zu/";
linki[33] = "https://www.ceneo.pl/91580103";
linki[34] = "https://www.ceneo.pl/40543655";
linki[35] = "https://www.filmweb.pl/film/Jestem+M.+Misfit-2019-841205";
linki[36] = "http://grafik.rp.pl/g4a/417114,128992,3.jpg";
linki[37] = "https://www.youtube.com/watch?v=1t9-6HJbPlc";
linki[38] = "https://i.pinimg.com/originals/90/2b/b8/902bb8da69ea1c854f7d180ac727f30f.jpg";
linki[39] = "https://img.besty.pl/images/398/60/3986005.jpg";
linki[40] = "https://www.youtube.com/watch?v=z6sW6jG8eQY";
linki[41] = "https://tarczynski.pl/rosl-inne";
linki[42] = "https://pbs.twimg.com/profile_images/495157428745678848/_iUW0sIC.jpeg";
linki[43] = "https://pl.wikipedia.org/wiki/Rugby_union";
linki[44] = "https://pl.wikipedia.org/wiki/Kategoria:Niemieccy_kultury%C5%9Bci";

function UstawLink()
{
	var ktorylink = Math.floor(Math.random() * 45);
	var nowya = '<a href="'+linki[ktorylink]+'" target="blank" class="zlinkiem"> <div class="elementylewa" id="randomlink2" onclick="UstawLink()"> <span class="duzaczcionka"> xd </span> </div> </a>';
	document.getElementById("randomlink").innerHTML = nowya;
}