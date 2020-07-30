$(document).ready(function(){

	// nav transparent to black
	$(document).on("scroll", function(){
		if ($(".navbar").offset().top>80) {
			$('nav').addClass('bg-light');
			$('#chado-logo-white').attr('src' , 'logo-chado-black.png');
		}
		else {
			$('nav').removeClass('bg-light');
			$('#chado-logo-white').attr('src' , 'logo-chado-white.png');
		}
	});


	// kuryere clikleyende alis listi acilsin
	$('#navbardrop').click(function(){
		$('.cart').addClass('cart-active')
		$('.cart').css('opacity','1');
	});


	// baglamaq duymesin vuranda alis listi baglansin 
	$('.close-button').click(function(){
		$('.cart').removeClass('cart-active')
	});
	// mali karta elave edende kuryer gelsin
	$("body").on("click" , ".fa-cart-plus", function(){
		$("#navbardrop").addClass("courier")
	});

	// mehsullar
	var mehsullar = [	{'bolum': 'seher-yemeyi' ,'ad' : 'Səhər yeməyi' ,  'sekil' : 'menu/menu-items/seher-yemeyi.png' , 'terkib' : 'Omlet (pendirli,pomidorlu), Xiyar təzə, Ağ pendir, Holland pendiri, Bekond, Kolbasa Halal, Sosiska Halal, Zeytun, Bal, Meyvə cemi, Kərə yağı, Qaymaq, CHADO təndir çörəyi, Çay' , 'qiymet' : '10' },
						{'bolum': 'corba' , 'ad' : 'Mərci çorbası'  , 'sekil' : 'menu/menu-items/merci.jpg' ,  'terkib' : '' , 'qiymet' : '3'},
						{'bolum': 'corba' , 'ad' : 'Göbələk çorbası'  , 'sekil' : 'menu/menu-items/gobelek.jpg' ,  'terkib' : '' , 'qiymet' : '3'},
						{'bolum': 'corba' , 'ad' : 'Toyuq çorbası'  , 'sekil' : 'menu/menu-items/toyuqlu.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum': 'corba' , 'ad' : 'Tomatlı çorba'  , 'sekil' : 'menu/menu-items/tomatli.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum': 'corba' , 'ad' : 'Yayla çorbası'  , 'sekil' : 'menu/menu-items/yayla.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'salat' , 'ad' : 'Paytaxt salatı'  , 'sekil' : 'menu/menu-items/paytaxt.jpg' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'salat' , 'ad' : 'Toyuqlu Sezar salatı'  , 'sekil' : 'menu/menu-items/sezar.jpg' ,  'terkib' : '(aysberq kələmi, suxarı, qızardılmış toyuq, özəl sezar sousu)' , 'qiymet' : '7'  },
						{'bolum' : 'salat' , 'ad' : 'Krivetkalı Sezar salatı'  , 'sekil' : 'menu/menu-items/sezarwithcrab.jpg' ,  'terkib' : '(aysberq kələmi, suxarı, qızardılmış krivetka, özəl sezar sousu)' , 'qiymet' : '8'  },
						{'bolum' : 'salat' , 'ad' : 'Çoban salatı'  , 'sekil' : 'menu/menu-items/coban.jpeg' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'qelyanalti' , 'ad' : 'French Fries'  , 'sekil' : 'menu/menu-items/fries.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'qelyanalti' , 'ad' : 'Toyuq Nuggets'  , 'sekil' : 'menu/menu-items/nugets.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'qelyanalti' , 'ad' : 'Pendir çubuqları'  , 'sekil' : 'menu/menu-items/pendir-cubuqlari.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'qelyanalti' , 'ad' : 'Soğan Halqası'  , 'sekil' : 'menu/menu-items/soganhalqasi.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'qelyanalti' , 'ad' : 'Krivetka Tempura'  , 'sekil' : 'menu/menu-items/tempura.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'lahmacun' , 'ad' : 'Sadə lahmacun'  , 'sekil' : 'menu/menu-items/lahmacun.jpg' ,  'terkib' : '' , 'qiymet' : '2.7'  },
						{'bolum' : 'lahmacun' , 'ad' : 'Pendirli lahmacun'  , 'sekil' : 'menu/menu-items/pendirlilahmacun.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'lahmacun' , 'ad' : 'Pendirli qozlu lahmacun'  , 'sekil' : 'menu/menu-items/qozlulahmacun.jpg' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'lahmacun' , 'ad' : 'Özəl qozlu lahmacun'  , 'sekil' : 'menu/menu-items/ozellahmacun.jpg' ,  'terkib' : '(qıyma, qaymaq, pomidor, qoz ləpəsi,ﬁsdıq)' , 'qiymet' : '6'  },
						{'bolum' : 'pide' , 'ad' : 'Sadə pide ' , 'sekil' : 'menu/menu-items/pidesade.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'pide' , 'ad' : 'Qıymalı pide'  , 'sekil' : 'menu/menu-items/kiymalipide.jpg' ,  'terkib' : '' , 'qiymet' : '7'  },
						{'bolum' : 'pide' , 'ad' : 'Quşbaşı pide'  , 'sekil' : 'menu/menu-items/kusbasipide.jpg' ,  'terkib' : '(mozzarella pendiri, can əti)' , 'qiymet' : '8'  },
						{'bolum' : 'pide' , 'ad' : 'Sucuqlu pide'  , 'sekil' : 'menu/menu-items/sucuklupide.jpg' ,  'terkib' : '' , 'qiymet' : '8'  },
						{'bolum' : 'pide' , 'ad' : 'Qarışıq pide'  , 'sekil' : 'menu/menu-items/karisikpide.jpg' ,  'terkib' : '(mozzarella pendiri,toyuq quş başı, can əti quş başı, sucuq)' , 'qiymet' : '10'  },
						{'bolum' : 'pizza' , 'ad' : 'Margaritta pizza'  , 'sekil' : 'menu/menu-items/pizza-margaritta.jpg' ,  'terkib' : '(pizza xəmiri, özəl pizza sousu, mozzarella pendiri, pomidor)' , 'qiymet' : '6'},
						{'bolum' : 'pizza' , 'ad' : 'Vegeterian pizza' , 'sekil' : 'menu/menu-items/pizza-vegetarian.jpg' ,  'terkib' : '(pizza xemiri, özəl pizza sousu, mozzarella pendiri, göbələk, bibər, pomidor, qarğıdalı)' , 'qiymet' : '7'  },
						{'bolum' : 'pizza' , 'ad' : 'Sucuqlu Pizza' , 'sekil' : 'menu/menu-items/pizza-sucuklu.png' ,  'terkib' : '(pizza xəmiri, özəl pizza sousu, mozzarella pendiri, sucuq) ', 'qiymet' : '8'  },
						{'bolum' : 'pizza' , 'ad' : 'Sezar Pizza' , 'sekil' : 'menu/menu-items/pizza-sezar.jpg' ,  'terkib' : '(pizza xəmiri, özəl pizza sousu, mozarrela pendiri, toyug ﬁlesi,sezar salatı, özel sezar sousu)', 'qiymet' : '8'  },
						{'bolum' : 'pizza' , 'ad' : 'Toyuqlu Pizza' , 'sekil' : 'menu/menu-items/pizza-toyuqlu.jpg' ,  'terkib' : '(pizza xəmiri, özəl pizza sousu, mozzarella xəmiri, göbələk, toyuq ﬁlesi)', 'qiymet' : '9'  },
						{'bolum' : 'pizza' , 'ad' : 'Qarışıq pizza' , 'sekil' : 'menu/menu-items/pizza-qarisiq.jpg' ,  'terkib' : '' , 'qiymet' : '10'  },
						{'bolum' : 'burger' , 'ad' : 'Chicken Burger' , 'sekil' : 'menu/menu-items/burger-chicken.jpg'  ,  'terkib' : '(Kartof Fri daxil)', 'qiymet' : '7'  },
						{'bolum' : 'burger' , 'ad' : 'Meat Burger' , 'sekil' : 'menu/menu-items/burger-meat.jpg'  ,  'terkib' : '(Kartof Fri daxil)', 'qiymet' : '8'  },
						{'bolum' : 'burger' , 'ad' : 'Special Burger' , 'sekil'  : 'menu/menu-items/burger-special.jpg' ,  'terkib' : '(Kartof Fri daxil)', 'qiymet' : '9'  },
						{'bolum' : 'sendvic' , 'ad' : 'Club Sandwich' , 'sekil' :'menu/menu-items/sandvic-club.jpg' ,  'terkib' : '(tost çörəyi, kahı, vetcina (halal), qızardılmış toyuq, yumurta, pomidor,xiyar)' , 'qiymet' : '7'  },
						{'bolum' : 'sendvic' , 'ad' : 'Chicken Sandwich' , 'sekil' :'menu/menu-items/sandvic-toyuqlu.jpg' ,  'terkib' : '(tost çörəyi, kahı, holland pendiri, qızardılmış toyuq, pomidor,duzlu xiyar)' , 'qiymet' : '7'  },
						{'bolum' : 'sendvic' , 'ad' : 'Sezar Roll' , 'sekil' :'menu/menu-items/sezar-roll.jpg' ,  'terkib' : '(lavaş,kahı,qızardılmış toyuq, xiyar, pomidor, özəl sous)' , 'qiymet' : '6'  },
						{'bolum' : 'sendvic' , 'ad' : 'Chicken Roll' , 'sekil' :'menu/menu-items/chicken-roll.jpg' ,  'terkib' : '(lavaş,kahı, qızardılmış toyuq, Holland pendiri, xiyar, pomidor,özəl sous)' , 'qiymet' : '7'  },
						{'bolum' : 'sendvic' , 'ad' : 'Meat Roll' , 'sekil' :'menu/menu-items/meat-roll.jpg' ,  'terkib' : '(lavaş, kahı, qızardılmış can əti, xiyar,pomidor, özəl sous)' , 'qiymet' : '8'  },
						{'bolum' : 'pasta' , 'ad' : 'Göbələkli İtalyan Pastası' , 'sekil' : 'menu/menu-items/italian-pasta.jfif' ,  'terkib' : '(makaron penne, göbələk, özəl İtaliyan sousu) ', 'qiymet' : '8'  },
						{'bolum' : 'pasta' , 'ad' : 'Spaghetti Bolognese' , 'sekil' : 'menu/menu-items/spaghetti-bolognese.jpg"' ,  'terkib' : '(İtaliyan spagettisi, özəl sousda can ətindən qıyma)', 'qiymet' : '7'  },
						{'bolum' : 'pasta' , 'ad' : 'Chado Special Italian Pasta' , 'sekil' : 'menu/menu-items/chado-italian-pasta.jpg' ,  'terkib' : '(İtaliyan spagettisi, toyuq özəl basdırmada, İtaliyan pasta sousu)', 'qiymet' : '9'  },
						{'bolum' : 'Et-Yemekleri' , 'ad' : 'Toyuq özəl göbələk sousu ilə' , 'sekil' : 'menu/menu-items/toyuq-ozel-gobelek-sousu.jpg' ,  'terkib' : '(toyuğun döş əti ,göbələk ,qaymaqlı sous)' , 'qiymet' : '8'  },
						{'bolum' : 'Et-Yemekleri' , 'ad' : 'Ətli sac qovurma' , 'sekil' : 'menu/menu-items/sac-et.jpg' ,  'terkib' : '' , 'qiymet' : '18'  },
						{'bolum' : 'Et-Yemekleri' , 'ad' : 'Toyuqlu sac qovurma' , 'sekil' : 'menu/menu-items/sac-toyuq.jpeg' ,  'terkib' : '' , 'qiymet' : '15'  },
						{'bolum' : 'Coffee' , 'ad' : 'Espresso 30 ml' , 'sekil' : 'menu/menu-items/kofe-espresso.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'Coffee' , 'ad' : 'Espresso 60 ml' , 'sekil' : 'menu/menu-items/kofe-espresso.jpg' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'Coffee' , 'ad' : 'Türk qəhvəsi' , 'sekil' : 'menu/menu-items/kofe-turk.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'Coffee' , 'ad' : 'Americano' , 'sekil' : 'menu/menu-items/kofe-americano.jpg' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'Coffee' , 'ad' : 'Cappucino' , 'sekil' : 'menu/menu-items/kofe-capucino.jpg' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'Coffee' , 'ad' : 'Cappucino Aromalı' , 'sekil' : 'menu/menu-items/kofe-capucino.jpg' ,  'terkib' : '(vanil,şokolad,karamel,ﬁndıq)' , 'qiymet' : '5'  },
						{'bolum' : 'Coffee' , 'ad' : 'Latte' , 'sekil' : 'menu/menu-items/kofe-latte.jpg' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'Coffee' , 'ad' : 'Latte Aromalı' , 'sekil' : 'menu/menu-items/kofe-latte.jpg' ,  'terkib' : '(vanil,şokolad,karamel,ﬁndıq)' , 'qiymet' : '5'  },
						{'bolum' : 'Coffee' , 'ad' : 'İsti şokolad' , 'sekil' : 'menu/menu-items/kofe-isti-sokolad.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Coffee' , 'ad' : 'Mokka' , 'sekil' : 'menu/menu-items/kofe-mokka.jfif' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Coffee' , 'ad' : 'Sahlep' , 'sekil' : 'menu/menu-items/kofe-sahlep.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Cold Coffee' , 'ad' : 'Soyuq kofe' , 'sekil' : 'menu/menu-items/kofe-soyuq.jpg' ,  'terkib' : '(2 qat, süd, şəkər siropu, buz)' , 'qiymet' : '5'  },
						{'bolum' : 'Cold Coffee' , 'ad' : 'Qlisse' , 'sekil' : 'menu/menu-items/kofe-qlise.jpg' ,  'terkib' : '(2 qat espresso, süd, şəkər, buz, dondurma)' , 'qiymet' : '5'  },
						{'bolum' : 'Cold Coffee' , 'ad' : 'Frappe' , 'sekil' : 'menu/menu-items/kofe-frappe.jpg' ,  'terkib' : '(2 qat espresso, süd,şəkər siropu, buz, qaymaq)' , 'qiymet' : '6'  },
						{'bolum' : 'Cold Coffee' , 'ad' : 'Choco mint' , 'sekil' : 'menu/menu-items/kofe-choco-mint.jpg' ,  'terkib' : '(şokolad, nanə, soyuq kofe, krem)' , 'qiymet' : '6'  },
						{'bolum' : 'Tea' , 'ad' : 'Bergamont çayi' , 'sekil' : 'menu/menu-items/cay-bergamont.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Tea' , 'ad' : 'Yasəmən ətirli çay' , 'sekil' : 'menu/menu-items/cay-yasemen.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Tea' , 'ad' : 'Lənkəran çayı' , 'sekil' : 'menu/menu-items/cay-lenkeran.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'Tea' , 'ad' : 'E-immunitet çayı' , 'sekil' : 'menu/menu-items/cay-imunitet.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'Tea' , 'ad' : 'Məyvə ətirli çay' , 'sekil' : 'menu/menu-items/cay-meyveli.jpg' ,  'terkib' : '(Wildkirsh, kiwi colada, strowbarry, bavaria mind)' , 'qiymet' : '7'  },
						{'bolum' : 'Tea' , 'ad' : 'Mərakeş çayı' , 'sekil' : 'menu/menu-items/cay-merakes.jpg' ,  'terkib' : '' , 'qiymet' : '7'  },
						{'bolum' : 'Tea' , 'ad' : 'Çaytikanı çayı' , 'sekil' : 'menu/menu-items/cay-caytikani.jpg' ,  'terkib' : '' , 'qiymet' : '7'  },
						{'bolum' : 'Tea' , 'ad' : 'Chado special tea' , 'sekil' : 'menu/menu-items/cay-chado-special.jpg' ,  'terkib' : '(qarışıq növ çaylar)' , 'qiymet' : '8'  },
						{'bolum' : 'Tea' , 'ad' : 'Samovar seti' , 'sekil' : 'menu/menu-items/cay-samovar.jpg' ,  'terkib' : '(mürəbbə, şəki paxlavası, fıstıq, fındıq, qoz mindalı)' , 'qiymet' : '25'  },
						{'bolum' : 'Tea' , 'ad' : 'Çay seti' , 'sekil' : 'menu/menu-items/cay-seti.jfif' ,  'terkib' : '(çay, mürəbbə, paxlava 3 ədəd, çərəz)' , 'qiymet' : '15'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Ağ gilas' , 'sekil' : 'menu/menu-items/jam-ag-gilas.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Çiyələk' , 'sekil' : 'menu/menu-items/jam-ciyelek.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Qoz ləpəsi' , 'sekil' : 'menu/menu-items/jam-qoz.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Qarpız' , 'sekil' : 'menu/menu-items/jam-qarpiz.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Heyva' , 'sekil' : 'menu/menu-items/jam-heyva.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Feyxoa' , 'sekil' : 'menu/menu-items/jam-feyxoa.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Böyürtkən' , 'sekil' : 'menu/menu-items/jam-boyurtken.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Cənnət alması' , 'sekil' :'menu/menu-items/jam-cennet-almasi.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Armud' , 'sekil' : 'menu/menu-items/jam-armud.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Malina' , 'sekil' : 'menu/menu-items/jam-malina.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Gavalı' , 'sekil' : 'menu/menu-items/jam-gavali.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Ananas' , 'sekil' : 'menu/menu-items/jam-ananas.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Snickers' , 'sekil' : 'menu/menu-items/jam-snickers.jfif' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Bounty' , 'sekil' : 'menu/menu-items/jam-bounty.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Murebbe ' , 'ad' : 'Coconut' , 'sekil' : 'menu/menu-items/jam-kokos.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Desert' , 'ad' : 'Tiramisu' , 'sekil' : 'menu/menu-items/desert-tiramisu.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'Desert' , 'ad' : 'Cizkek' , 'sekil' : 'menu/menu-items/desert-cizkek.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'Desert' , 'ad' : 'Künefe' , 'sekil' : 'menu/menu-items/desert-kunefe.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'Desert' , 'ad' : 'Türk paxlavası' , 'sekil' : 'menu/menu-items/desert-turk-paxlavasi.jfif' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'Desert' , 'ad' : 'Şəki paxlavası' , 'sekil' : 'menu/menu-items/desert-seki-paxlavasi.jfif' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'Desert' , 'ad' : 'Ballı tort' , 'sekil' : 'menu/menu-items/desert-balli-tort.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'Cerez' , 'ad' : 'Şəki mindalı' , 'sekil' : 'menu/menu-items/seki-mindali.jpg' ,  'terkib' : '(Fındıq, qoz, fistiq) ' , 'qiymet' : '5'  },
						{'bolum' : 'Cerez' , 'ad' : 'Quru meyvə kiçik' , 'sekil' : 'menu/menu-items/quru-meyve.jpg' ,  'terkib' : '(Fındıq, qoz, ərik qurusu, kişmiş) ' , 'qiymet' : '15'  },
						{'bolum' : 'Cerez' , 'ad' : 'Quru meyvə böyük' , 'sekil' : 'menu/menu-items/meyve-seti-boyuk.jpg' ,  'terkib' : '(Fındıq, qoz, ballı araxis, badam, meyvə qurusu, ərik qurusu, ağ-qara kişmiş)' , 'qiymet' : '25'  },
						{'bolum' : 'Meyve' , 'ad' : 'Meyvə salatı' , 'sekil' : 'menu/menu-items/meyve-seti-boyuk.jpg' ,  'terkib' : '(Movsume gore)' , 'qiymet' : '5'  },
						{'bolum' : 'Meyve' , 'ad' : 'Meyvə assorti' , 'sekil' : 'menu/menu-items/meyve-seti.jpg' ,  'terkib' : '' , 'qiymet' : '15'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Soyuq çay ev sayağı' , 'sekil' : 'menu/menu-items/spirtsiz-soyuq-cay.jpg' ,  'terkib' : '(şaftalı, manqo, limon) ' , 'qiymet' : '4'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Love is' , 'sekil' : 'menu/menu-items/spirtsiz-love-is.jpg' ,  'terkib' : '(banan,banan və çiyələkli sirop,qazlı su)' , 'qiymet' : '5'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Mohito' , 'sekil' : 'menu/menu-items/spirtsiz-mojito.jpg' ,  'terkib' : '(klassik, çiyələkli, alma, şaftalı)' , 'qiymet' : '5'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Orange gin' , 'sekil' : 'menu/menu-items/spirtsiz-orange-gin.jpg' ,  'terkib' : '(nar şirəsi, portağal, zəncəﬁl siropu)' , 'qiymet' : '5'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Elegance' , 'sekil' : 'menu/menu-items/spirtsiz-elegance.png' ,  'terkib' : '(nar soku,şaftalı soku,passion night, mandarin)' , 'qiymet' : '6'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Sun set' , 'sekil' : 'menu/menu-items/spirtsiz-sunset.jfif' ,  'terkib' : '(alma soku, visne soku, bublle gum,l imon,moxito sirop)' , 'qiymet' : '6'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Orange mango smoothie' , 'sekil' : 'menu/menu-items/spirtsiz-orange-mango-smoothie.jfif' ,  'terkib' : '(mongo siropu, portağal şirəsi, dondurma)' , 'qiymet' : '6'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Sungria' , 'sekil' : 'menu/menu-items/spirtsiz-sungria.jpg' ,  'terkib' : '(albalı şirəsi, ananas şirəsi, portağal, alma, limon, darçın)' , 'qiymet' : '6'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Mövsüm kokteyli' , 'sekil' : 'menu/menu-items/spirtsiz-movsum-kokteyl.jpg' ,  'terkib' : '(mövsümünə görə)' , 'qiymet' : '6'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Angel' , 'sekil' : 'menu/menu-items/spirtsiz-angel.jpg' ,  'terkib' : '(ananas şirəsi, portağal şirəsi, badam siropu, grenadine siropu, limon soku)' , 'qiymet' : '6'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Blue star' , 'sekil' : 'menu/menu-items/spirtsiz-blue-star.jpg' ,  'terkib' : '(ananas şirəsi, mandarin siropu, blue curacao sirop, limon şirəsi)' , 'qiymet' : '6'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Green mexicano' , 'sekil' : 'menu/menu-items/spirtsiz-green-mexicano.jfif' ,  'terkib' : '(pino kolada siropu, mandarin siropu, ananas şirəsi, şafatalı şirəsi, limon)' , 'qiymet' : '6'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Tropicano delight' , 'sekil' : 'menu/menu-items/spirtsiz-tropicana-delight.jfif' ,  'terkib' : '' , 'qiymet' : '7'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Vitamin C' , 'sekil' : 'menu/menu-items/spirtsiz-vitamin-c.jpg' ,  'terkib' : '(portağal fresh-i, limon fresh-i, banan)' , 'qiymet' : '8'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Mohito energy' , 'sekil' : 'menu/menu-items/spirtsiz-mohito-enerji.jfif' ,  'terkib' : '(laym, nanə mohito siropu,red bull)' , 'qiymet' : '8'  },
						{'bolum' : 'Spirtsiz-kokteyl ' , 'ad' : 'Ananas shake' , 'sekil' : 'menu/menu-items/spirtsiz-ananas-shake.jpg' ,  'terkib' : '(təbii ananas fresh-i, pino kolda siropu, maxito siropu, mandarin siropu, Passion nighte siropu)' , 'qiymet' : '10'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'B52' , 'sekil' : 'menu/menu-items/spirtli-b52.jfif' ,  'terkib' : '(kahlua, baylis, cointreau)' , 'qiymet' : '5'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Gin tonic' , 'sekil' : 'menu/menu-items/spirtli-gin-tonic.jpeg' ,  'terkib' : '(Gin, tonic, limon)' , 'qiymet' : '6'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Cuba Libre' , 'sekil' : 'menu/menu-items/spirtli-cuba-libre.jpg' ,  'terkib' : '(kola, black rom, limon)' , 'qiymet' : '6'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Pino Colada' , 'sekil' : 'menu/menu-items/spirtli-pinocolada.jfif' ,  'terkib' : '(pinokolada siropu, af rom, krem, ananas şirəsi)' , 'qiymet' : '7'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Parma' , 'sekil' : 'menu/menu-items/spirtli-parma.jpg' ,  'terkib' : '(şaftalı siropu, vodka, limon şirəsi, badam siropu, portağal siropu)' , 'qiymet' : '7'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Mararitta' , 'sekil' : 'menu/menu-items/spirtli-mararitta.jpg' ,  'terkib' : '(tekila, cointraue, limon  şirəsi)' , 'qiymet' : '7'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Mai Tai' , 'sekil' : 'menu/menu-items/spirtli-mai-tai.jpg' ,  'terkib' : '(ağ rom, qara rom, portagal  şirəsi, badam  şirəsi)' , 'qiymet' : '7'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Mojito' , 'sekil' : 'menu/menu-items/spirtli-mojito.jpg' ,  'terkib' : '(rom, nanə, moxito siropu)' , 'qiymet' : '7'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Sex on the beach' , 'sekil' : 'menu/menu-items/spirtli-sex-on-the-beach.jfif' ,  'terkib' : '(vodka, portağal, Cointreau, tekila, gtebadine siropu)' , 'qiymet' : '7'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Tequila Sunrise' , 'sekil' : 'menu/menu-items/spirtli-tequila-sunrise.jpg' ,  'terkib' : '(tekila, portağal  şirəsi, grenadine siropu)' , 'qiymet' : '7'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Cosmopolitan' , 'sekil' : 'menu/menu-items/spirtli-cosmopolitan.jpg' ,  'terkib' : '(vodka, portağal, limon  şirəsi, grenadine siropu)' , 'qiymet' : '7'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Passion Night' , 'sekil' : 'menu/menu-items/spirtli-possion-night.jpg' ,  'terkib' : '(gin, cointreau, maracuya siropu, şaftalı şirəsi)' , 'qiymet' : '7'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Espresso Martine' , 'sekil' : 'menu/menu-items/spirtli-espresso-martine.jfif' ,  'terkib' : '(espresso, vodka, khalua, vanil siropu' , 'qiymet' : '8'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Long Iceland Iced Tea' , 'sekil' : 'menu/menu-items/spirtli-long-iceland.jfif' ,  'terkib' : '(Cointreau, rom, gIn, tekila, vodka, limon  şirəsi, kola)' , 'qiymet' : '9'  },
						{'bolum' : 'Spirtli-kokteyl' , 'ad' : 'Long Iceland Energy' , 'sekil' : 'menu/menu-items/spirtli-long-iceland-energy.jpg' ,  'terkib' : '(Cointreau, rom, gin, tekila, vodka, red bull, limon  şirəsi)' , 'qiymet' : '11'  },
						{'bolum' : 'smoothie' , 'ad' : 'Çiyələk smoothie' , 'sekil' : 'menu/menu-items/smoothie-ciyelek.jpg' ,  'terkib' : '(Şaftalı şirəsi, limon, grenadine siropu, çiyələk siropu, təzə banan)' , 'qiymet' : '5'  },
						{'bolum' : 'smoothie' , 'ad' : 'Ginger smoothie' , 'sekil' : 'menu/menu-items/smoothie-ginger.jpg' ,  'terkib' : '(ananas şirəsi, zəncəﬁl siropu, limon, marakuya)' , 'qiymet' : '5'  },
						{'bolum' : 'smoothie' , 'ad' : 'Tropical smoothie' , 'sekil' : 'menu/menu-items/smoothie-tropical.jfif' ,  'terkib' : '(banan təzə, passion fruit,siropu,portağal şirəsi) ' , 'qiymet' : '5'  },
						{'bolum' : 'smoothie' , 'ad' : 'Orange mango smoothie' , 'sekil' : 'menu/menu-items/spirtsiz-orange-mango-smoothie.jfif' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'smoothie' , 'ad' : 'Kivi smoothie' , 'sekil' : 'menu/menu-items/smoothie-kivi.jpg' ,  'terkib' : '(kivi təzə, alma soku, limon, moxito siropu)' , 'qiymet' : '6'  },
						{'bolum' : 'smoothie' , 'ad' : 'Choco Cery smoothie' , 'sekil' : 'menu/menu-items/smoothie-choco-cery.jpg' ,  'terkib' : '(portağal şirəsi, şokolad siropu, grenadine sirop, vişnə şirəsi)' , 'qiymet' : '6'  },
						{'bolum' : 'milky-shake' , 'ad' : 'Milk shake' , 'sekil' : 'menu/menu-items/milk-shake.jpg' ,  'terkib' : '(çiyələk, banan, şokolad, vanil)' , 'qiymet' : '5'  },
						{'bolum' : 'milky-shake' , 'ad' : 'Bounty shake' , 'sekil' : 'menu/menu-items/bounty-shake.jfif' ,  'terkib' : '(sokolad siropu,pino kolada siropu, ananas şirəsi, dondurma, süd, krem)' , 'qiymet' : '6'  },
						{'bolum' : 'milky-shake' , 'ad' : 'Oreo shake' , 'sekil' : 'menu/menu-items/oreo-shake.jfif' ,  'terkib' : '(oreo peçenie, dondurma, süd, krem)' , 'qiymet' : '6'  },
						{'bolum' : 'milky-shake' , 'ad' : 'Freak shake' , 'sekil' : 'menu/menu-items/freak-shake.jfif' ,  'terkib' : '(banan, şokolad, çiyələk)' , 'qiymet' : '6'  },
						{'bolum' : 'fresh' , 'ad' : 'Kök' , 'sekil' : 'menu/menu-items/fresh-kok.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'fresh' , 'ad' : 'Alma' , 'sekil' : 'menu/menu-items/fresh-alma.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'fresh' , 'ad' : 'Limon' , 'sekil' : 'menu/menu-items/fresh-limon.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'fresh' , 'ad' : 'Portağal' , 'sekil' : 'menu/menu-items/fresh-portagal.jfif' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'fresh' , 'ad' : 'Qreypfrut' , 'sekil' : 'menu/menu-items/fresh-qreypfrut.jfif' ,  'terkib' : '' , 'qiymet' : '7'  },
						{'bolum' : 'fresh' , 'ad' : 'İstənilən meyvə qarışığı' , 'sekil' : 'menu/menu-items/fresh-istenilen-meyve-qarisigi.jpg' ,  'terkib' : '' , 'qiymet' : '8'  },
						{'bolum' : 'lemonade' , 'ad' : 'Classic lemonades' , 'sekil' : 'menu/menu-items/classic-lemonades.jfif' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'lemonade' , 'ad' : 'Qazlı lemonades' , 'sekil' : 'menu/menu-items/istenilen-qarisiq-limonad.jfif' ,  'terkib' : 'Secime gore' , 'qiymet' : '4'  },
						{'bolum' : 'soyuq-icki' , 'ad' : 'Coca-Cola 0.33ml' , 'sekil' : 'menu/menu-items/coca-cola.jpg' ,  'terkib' : '' , 'qiymet' : '2'  },
						{'bolum' : 'soyuq-icki' , 'ad' : 'Fanta 0.33ml' , 'sekil' : 'menu/menu-items/fanta0.33.jfif' ,  'terkib' : '' , 'qiymet' : '2'  },
						{'bolum' : 'soyuq-icki' , 'ad' : '7UP' , 'sekil' : 'menu/menu-items/7up.jpg' ,  'terkib' : '' , 'qiymet' : '2'  },
						{'bolum' : 'soyuq-icki' , 'ad' : 'Soyuq çay' , 'sekil' : 'menu/menu-items/fusetea.jpg' ,  'terkib' : '' , 'qiymet' : '2'  },
						{'bolum' : 'soyuq-icki' , 'ad' : 'Sirab 0.33ml' , 'sekil' : 'menu/menu-items/sirab.jpg' ,  'terkib' : '' , 'qiymet' : '2'  },
						{'bolum' : 'soyuq-icki' , 'ad' : 'Sarıkız' , 'sekil' :'menu/menu-items/sarikiz.jfif' ,  'terkib' : '' , 'qiymet' : '2'  },
						{'bolum' : 'soyuq-icki' , 'ad' : 'Hell' , 'sekil' : 'menu/menu-items/hell.jfif' ,  'terkib' : '' , 'qiymet' : '2'  },
						{'bolum' : 'soyuq-icki' , 'ad' : 'Tonic' , 'sekil' : 'menu/menu-items/tonic.jfif' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'soyuq-icki' , 'ad' : 'Redbull' , 'sekil' : 'menu/menu-items/redbull.jfif' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'meyve-siresi' , 'ad' : 'Meyvə şirəsi 0.2l' , 'sekil' : 'menu/menu-items/meyve-siresi-0.2.jpg' ,  'terkib' : '' , 'qiymet' : '1'  },
						{'bolum' : 'meyve-siresi' , 'ad' : 'Meyvə şirəsi 1l' , 'sekil' : 'menu/menu-items/meyve-siresi-1.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'likor' , 'ad' : 'Baileys 0.5ml' , 'sekil' : 'menu/menu-items/baileys.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'likor' , 'ad' : 'Jagermeister 0.5ml' , 'sekil' : 'menu/menu-items/jagermeister.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'viski' , 'ad' : 'Jack Daniels 0.5ml' , 'sekil' : 'menu/menu-items/jack-daniels.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'viski' , 'ad' : 'Jack Daniels 0.5l' , 'sekil' : 'menu/menu-items/jack-daniels.jpg' ,  'terkib' : '' , 'qiymet' : '60'  },
						{'bolum' : 'viski' , 'ad' : 'Jameson 0.5ml' , 'sekil' : 'menu/menu-items/jameson.jfif' ,  'terkib' : '' , 'qiymet' : '7'  },
						{'bolum' : 'viski' , 'ad' : 'Jameson 0.5l' , 'sekil' : 'menu/menu-items/jameson.jfif' ,  'terkib' : '' , 'qiymet' : '60'  },
						{'bolum' : 'viski' , 'ad' : 'Chivas Regal 12 0.5ml' , 'sekil' : 'menu/menu-items/chivas-regal-12.jpg' ,  'terkib' : '' , 'qiymet' : '7'  },
						{'bolum' : 'viski' , 'ad' : 'Chivas Regal 12 0.5l' , 'sekil' : 'menu/menu-items/chivas-regal-12.jpg' ,  'terkib' : '' , 'qiymet' : '7'  },
						{'bolum' : 'viski' , 'ad' : 'Chivas Regal 18 0.5ml' , 'sekil' : 'menu/menu-items/chivas-regal-18.jpg' ,  'terkib' : '' , 'qiymet' : '10'  },
						{'bolum' : 'viski' , 'ad' : 'Chivas Regal 18 0.5l' , 'sekil' : 'menu/menu-items/chivas-regal-18.jpg' ,  'terkib' : '' , 'qiymet' : '150'  },
						{'bolum' : 'tequila' , 'ad' : 'Sierra Silver 0.5ml' , 'sekil' : 'menu/menu-items/sierra-silver.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'tequila' , 'ad' : 'Sierra Silver 0.5l' , 'sekil' : 'menu/menu-items/sierra-silver.jpg' ,  'terkib' : '' , 'qiymet' : '50'  },
						{'bolum' : 'tequila' , 'ad' : 'Sierra Gold 0.5ml' , 'sekil' : 'menu/menu-items/sierra-gold.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'tequila' , 'ad' : 'Sierra Gold 0.5l' , 'sekil' : 'menu/menu-items/sierra-gold.jpg' ,  'terkib' : '' , 'qiymet' : '50'  },
						{'bolum' : 'tequila' , 'ad' : 'Olmega Blanco 0.5ml' , 'sekil' : 'menu/menu-items/olmega-blanco.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'tequila' , 'ad' : 'Olmega Blanco 0.5l' , 'sekil' : 'menu/menu-items/olmega-blanco.jpg' ,  'terkib' : '' , 'qiymet' : '50'  },
						{'bolum' : 'gin' , 'ad' : 'Gordons 0.5ml' , 'sekil' : 'menu/menu-items/gordons.jpg' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'gin' , 'ad' : 'Beefeater 0.5ml' , 'sekil' : 'menu/menu-items/beefeater.jpg' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'rom' , 'ad' : 'Bacardi 0.5ml' , 'sekil' : 'menu/menu-items/bacardi.jpg' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'ag-serab' , 'ad' : 'Savalan Chardonnay' , 'sekil' : 'menu/menu-items/savalan.jfif' ,  'terkib' : '' , 'qiymet' : '35'  },
						{'bolum' : 'ag-serab' , 'ad' : 'İvanovka qədəh' , 'sekil' : 'menu/menu-items/ivanovka.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'qirmizi-serab' , 'ad' : 'Savalan Cabarnet' , 'sekil' : 'menu/menu-items/savalan.jfif' ,  'terkib' : '' , 'qiymet' : '35'  },
						{'bolum' : 'qirmizi-serab' , 'ad' : 'İvanovka qədəh' , 'sekil' : 'menu/menu-items/ivanovka.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'pive' , 'ad' : 'Xırdalan' , 'sekil' : 'menu/menu-items/xirdalan.png' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'pive' , 'ad' : 'Heinken' , 'sekil' : 'menu/menu-items/heinken.png' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'pive' , 'ad' : 'Miller' , 'sekil' : 'menu/menu-items/miller.jpg' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'pive' , 'ad' : 'Corona' , 'sekil' : 'menu/menu-items/corona.png' ,  'terkib' : '' , 'qiymet' : '6'  },
						{'bolum' : 'pive-mezesi' , 'ad' : 'Saçaq pendir' , 'sekil' : 'menu/menu-items/sacaq-pendir.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'pive-mezesi' , 'ad' : 'Qızardılmış saçaq pendir' , 'sekil' : 'menu/menu-items/qizardilmis-sacaq-pendir.jfif' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'pive-mezesi' , 'ad' : 'Cipsi' , 'sekil' : 'menu/menu-items/lays.jpg' ,  'terkib' : '' , 'qiymet' : '3'  },
						{'bolum' : 'pive-mezesi' , 'ad' : 'Qızardılmış düşbərə' , 'sekil' : 'menu/menu-items/qizardilmis-dusbere.jfif' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'pive-mezesi' , 'ad' : 'Araxis qovrulmuş' , 'sekil' : 'menu/menu-items/araxis.jpg' ,  'terkib' : '' , 'qiymet' : '4'  },
						{'bolum' : 'pive-mezesi' , 'ad' : 'Fıstıq' , 'sekil' : 'menu/menu-items/fistiq.jfif' ,  'terkib' : '' , 'qiymet' : '8'  },
						{'bolum' : 'pive-mezesi' , 'ad' : 'Qovrulmuş fıstıq' , 'sekil' : 'menu/menu-items/qovrulmus-fistiq.jfif' ,  'terkib' : '' , 'qiymet' : '9'  },
						{'bolum' : 'pive-mezesi' , 'ad' : 'Özəl araxis çeşidləri' , 'sekil' : 'menu/menu-items/ozel-cerezler.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
						{'bolum' : 'qelyan' , 'ad' : 'Qreypfrut' , 'sekil' : 'menu/menu-items/grapefruit.jfif' ,  'terkib' : '' , 'qiymet' : '20'  },
						{'bolum' : 'qelyan' , 'ad' : 'Alma' , 'sekil' : 'menu/menu-items/apple.jfif' ,  'terkib' : '' , 'qiymet' : '20'  },
						{'bolum' : 'qelyan' , 'ad' : 'Ananas' , 'sekil' : 'menu/menu-items/ananas.jfif' ,  'terkib' : '' , 'qiymet' : '25'  },
						{'bolum' : 'qelyan' , 'ad' : 'Qarpız' , 'sekil' : 'menu/menu-items/qarpiz.jfif' ,  'terkib' : '' , 'qiymet' : '25'  },
						{'bolum' : 'qelyan' , 'ad' : 'Nar' , 'sekil' : 'menu/menu-items/nar.jfif' ,  'terkib' : '' , 'qiymet' : '25'  },
						{'bolum' : 'qelyan' , 'ad' : 'Əlavələr' , 'sekil' : 'menu/menu-items/meyve-seti.jpg' ,  'terkib' : '' , 'qiymet' : '5'  },
					];


	// mehsullari div in icine yazmaq
	for (var i = 0; i < mehsullar.length; i++) {
		$('.menu-list').append('<div' + ' ' + 'style="background:url(' + mehsullar[i].sekil + ')"'+ 
		'sekil="'+mehsullar[i].sekil+ '"' + 'class="menyu' + ' ' + mehsullar[i].bolum + '"' + 'alt="' + mehsullar[i].ad + '"' +
			'<div class="item-info">'+
				'<div class="info-name-price">'+
					'<h1 class="item-name">' + mehsullar[i].ad + '</h1>' + 
					'<p class="item-ingridents">' + mehsullar[i].terkib + '</p>' + 
					'<p class="item-price">' + mehsullar[i].qiymet + ' ₼' + '</p>' +  
					'<div class="add-to-cart">'+
						'<i class="fas fa-cart-plus"></i>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>');
	}
	
	// mehsulu karta atmaq
	$("body").on("click",".fa-cart-plus", function(){
		$(".card-body").append('<div class="selected-items">' + 
			'<div class="selected-items-photo"' + 'style="background:url(' + $(this).parents(".menyu").attr("sekil") + ')"' + '></div>' +
	    	'<div class="selected-items-content">' +
				'<h4 class="text-light product-name"><strong>' + $(this).parents(".menyu").find(".item-name").text() +'</strong></h4>'+
				'<small>'+ $(this).parents(".menyu").find(".item-ingridents").text() +'</small>' +
			'</div>' +
			'<div class="selected-items-price">' +
			'<h6 style="float: left;"><strong class="text-light yemekq">' + $(this).parents(".menyu").find(".item-price").text() +'<span class="text-muted">x</span></strong></h6>' +
	                '<div class="quantity">' +
	                	'<input type="number" step="1" max="99" min="1" value="1" title="Qty" id="qty" size="4">' +
	                '</div>' +
	                	'<button type="button" class="close product-removal" aria-label="Close">'+
							'<span class="text-light" aria-hidden="true">&times;</span>'+
						'</button>'+
	               '</div>'+
			'</div>');
		$(".cart").show();
		$(".yemekq").each(function(){
			sum += parseInt($(this).text());
			// sub = sum * parseInt($('#qty').text());
		})
		$(".cem").text(sum);
		sum=0;
		// sub=0;
	});
	$("#foodmenu").on("click",".readMoreBtn", function(){
		$(".card-body").append('<div class="selected-items">' + 
			'<div class="selected-items-photo"' + 'style="background:url(' + $(this).parents("#foodmenu").find(".food-image").attr("src") + ')"' + '></div>' +
	    	'<div class="selected-items-content">' +
				'<h4 class="product-name"><strong>' + $(this).parents(".content").find(".date").text() +'</strong></h4>'+
				'<small>'+ $(this).parents(".content").find(".title").text() +'</small>' +
			'</div>' +
			'<div class="selected-items-price">' +
			'<h6 style="float: left;"><strong class="yemekq">' + $(this).parents(".content").find(".desc").text() +'<span class="text-muted">x</span></strong></h6>' +
	                '<div class="quantity">' +
	                	'<input type="number" step="1" max="99" min="1" value="1" title="Qty" id="qty" size="4">' +
	                '</div>' +
	                	'<button type="button" class="close product-removal" aria-label="Close">'+
							'<span aria-hidden="true">&times;</span>'+
						'</button>'+
	               '</div>'+
			'</div>');
		$(".cart").show();
		$(".yemekq").each(function(){
			sum += parseInt($(this).text());
			// sub = sum * parseInt($('#qty').text());
		})
		$(".cem").text(sum);
		sum=0;
		// sub=0;
	});


// total qiyme
// 
var sum = 0;


	// remove etmek
	$('body').on('click' , '.product-removal' , function(){
		$(this).parent().parent().remove()
	$(".yemekq").each(function(){
			sum += parseInt($(this).text());
			// sub = sum * $('#qty').text();
		})
		$(".cem").text(sum);
		sum=0;
		// sub=0;
		// say--
	});
//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})

// reqem artmasi
// var say = 1
// $('body').on('click' , 'fa-cart-plus' , function(){
// 	$('.fa-cart-plus').each(function(){
// 		say += parseInt($(this).text())
// 		});
// 		$('.reqem').text(say);
// 		say=1
// });



//Parallax & fade on scroll	
	
	function scrollBanner() {
	  $(document).on('scroll', function(){
		var scrollPos = $(this).scrollTop();
		$('.parallax-fade-top').css({
		  'top' : (scrollPos/2)+'px',
		  'opacity' : 1-(scrollPos/240)
		});
	  });    
	}
	scrollBanner();	

/*! Scroll Reveal Animations */

window.scrollReveal=function(t){
	"use strict";
	function e(e){
		this.docElem=t.document.documentElement,
		this.options=this.extend(this.defaults,e),
		this.styleBank={},
		1==this.options.init&&this.init()
	}
	var i=1,
	o=function(){
		return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){
			t.setTimeout(e,1e3/60)
		}
	}();
	return e.prototype={defaults:{after:"0s",enter:"bottom",move:"24px",over:"0.66s",easing:"ease-in-out",opacity:0,viewportFactor:.33,reset:!1,init:!0},
	init:function(){
		this.scrolled=!1;
		var e=this;
		this.elems=Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")),
		this.elems.forEach(function(t,o){
			var r=t.getAttribute("data-scroll-reveal-id");
			r||(r=i++,t.setAttribute("data-scroll-reveal-id",r)),e.styleBank[r]||(e.styleBank[r]=t.getAttribute("style")),e.update(t)});
		var r=function(t){
			e.scrolled||(e.scrolled=!0,o(function(){
				e._scrollPage()
			})
			)},
			n=function(){
				function t(){
					e._scrollPage(),e.resizeTimeout=null
				}
				e.resizeTimeout&&clearTimeout(e.resizeTimeout),
				e.resizeTimeout=setTimeout(t,200)
			};
			t.addEventListener("scroll",r,!1),
			t.addEventListener("resize",n,!1)},
			_scrollPage:function(){
				var t=this;
				this.elems.forEach(function(e,i){
					t.update(e)
				}),
				this.scrolled=!1
			},
			parseLanguage:function(t){
				function e(t){
					var e=[],
					i=["from","the","and","then","but","with"];
					return t.forEach(function(t,o){
						i.indexOf(t)>-1||e.push(t)}),e}
					var i=t.getAttribute("data-scroll-reveal").split(/[, ]+/),o={};
					return i=e(i),i.forEach(function(t,e){
						switch(t){
							case"enter":return void(o.enter=i[e+1]);
							case"after":return void(o.after=i[e+1]);
							case"wait":return void(o.after=i[e+1]);
							case"move":return void(o.move=i[e+1]);
							case"ease":return o.move=i[e+1],void(o.ease="ease");
							case"ease-in":return o.move=i[e+1],void(o.easing="ease-in");
							case"ease-in-out":return o.move=i[e+1],void(o.easing="ease-in-out");
							case"ease-out":return o.move=i[e+1],void(o.easing="ease-out");
							case"over":return void(o.over=i[e+1]);
							default:return}}),o},
					update:function(t){
						var e=this.genCSS(t),
						i=this.styleBank[t.getAttribute("data-scroll-reveal-id")];
						return null!=i?i+=";":i="",t.getAttribute("data-scroll-reveal-initialized")||(t.setAttribute("style",i+e.initial),
							t.setAttribute("data-scroll-reveal-initialized",!0)),
						this.isElementInViewport(t,this.options.viewportFactor)?t.getAttribute("data-scroll-reveal-complete")?void 0:this.isElementInViewport(t,this.options.viewportFactor)?(t.setAttribute("style",i+e.target+e.transition),void(this.options.reset||setTimeout(function(){""!=i?t.setAttribute("style",i):t.removeAttribute("style"),t.setAttribute("data-scroll-reveal-complete",!0)},e.totalDuration))):void 0:void(this.options.reset&&t.setAttribute("style",i+e.initial+e.reset))},genCSS:function(t){var e,i,o=this.parseLanguage(t);o.enter?(("top"==o.enter||"bottom"==o.enter)&&(e=o.enter,i="y"),("left"==o.enter||"right"==o.enter)&&(e=o.enter,i="x")):(("top"==this.options.enter||"bottom"==this.options.enter)&&(e=this.options.enter,i="y"),("left"==this.options.enter||"right"==this.options.enter)&&(e=this.options.enter,i="x")),("top"==e||"left"==e)&&(o.move?o.move="-"+o.move:o.move="-"+this.options.move);var r=o.move||this.options.move,n=o.over||this.options.over,s=o.after||this.options.after,a=o.easing||this.options.easing,l=o.opacity||this.options.opacity,u="-webkit-transition: -webkit-transform "+n+" "+a+" "+s+",  opacity "+n+" "+a+" "+s+";transition: transform "+n+" "+a+" "+s+", opacity "+n+" "+a+" "+s+";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",c="-webkit-transition: -webkit-transform "+n+" "+a+" 0s,  opacity "+n+" "+a+" "+s+";transition: transform "+n+" "+a+" 0s,  opacity "+n+" "+a+" "+s+";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",f="-webkit-transform: translate"+i+"("+r+");transform: translate"+i+"("+r+");opacity: "+l+";",p="-webkit-transform: translate"+i+"(0);transform: translate"+i+"(0);opacity: 1;";return{transition:u,initial:f,target:p,reset:c,totalDuration:1e3*(parseFloat(n)+parseFloat(s))}},getViewportH:function(){var e=this.docElem.clientHeight,i=t.innerHeight;return i>e?i:e},getOffset:function(t){var e=0,i=0;do isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(i+=t.offsetLeft);while(t=t.offsetParent);return{top:e,left:i}},isElementInViewport:function(e,i){var o=t.pageYOffset,r=o+this.getViewportH(),n=e.offsetHeight,s=this.getOffset(e).top,a=s+n,i=i||0;return r>=s+n*i&&a>=o||"fixed"==(e.currentStyle?e.currentStyle:t.getComputedStyle(e,null)).position},extend:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}},e}(window);

	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();







var getActiveSlideIndex = function () {
    return $("#productSlider .active").index("#productSlider .carousel-item");
  };
  var slider = function (IndexNumber) {
    $(".slider .image")
      .removeClass("active")
      .eq(IndexNumber)
      .addClass("active");
  };
  slider(getActiveSlideIndex());
  $("#productSlider").on("slid.bs.carousel", function () {
    slider(getActiveSlideIndex());
  });
});
