//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------
/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
function myCountry(myId) {
  const div_card = document.createElement("div");
  div_card.classList.add("card");

  const img = document.createElement("img");
  img.src = `https://flagsapi.com/TR/flat/64.png`;

  const div_info = document.createElement("div");
  div_info.className = "card-info";

  const h3 = document.createElement("h3");
  h3.className = "ip";
  h3.textContent = myId.sorgu;

  const p_ulke = document.createElement("p");
  p_ulke.textContent = myId.ülke + " {" + myId.ülkeKodu + "}";

  const p_enlem = document.createElement("p");
  p_enlem.textContent = "Enlem: " + myId.enlem + "Boylam: " + myId.boylam;

  const p_sehir = document.createElement("p");
  p_sehir.textContent = myId.şehir;

  const p_saat = document.createElement("p");
  p_saat.textContent = "Saat: " + myId.saatdilimi;

  const p_para = document.createElement("p");
  p_para.textContent = `Para: ${myId.parabirimi}`;

  const p_isp = document.createElement("p");
  p_isp.textContent = `ISP: ${myId.isp}`;

  div_info.append(h3, p_ulke, p_enlem, p_sehir, p_saat, p_para, p_isp);
  div_card.append(img, div_info);

  return div_card;
}

ipAdresimiAl().then(() => {
  const url = "https://apis.ergineer.com/ipgeoapi/" + benimIP;
  axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .then((country) => {
      const card = document.querySelector(".cards");
      card.append(myCountry(country));
    })
    .catch((err) => {
      console.log(err);
    });
});
