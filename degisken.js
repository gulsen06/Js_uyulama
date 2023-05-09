//concat kullanimi
let musteriAdi = "Can";
let musteriSoyadi = " Atak";

console.log("Müsterimiz :" + musteriAdi.concat(musteriSoyadi));

let sentence = "Müsteri \nher \nzaman \nveli \nnimetimizdir";
console.log(sentence);

let newText = `Sayin ${musteriAdi} ${musteriSoyadi} firmamiza herhangi bir borcunuz yoktur.   `;
console.log(newText);

document.write("<br/> <b/> " + newText);

// Array kullanimi

let elektrikliÜrünler = ["ütü", "süpürge", "mixer"];
let mobilyaCesitleri = ["kanepe", "koltuk", "konsol", "masa"];
let dekoratsiyon = ["resim", "vazo", "biblo"];
console.log(dekoratsiyon[5]);

let ürünListesi = elektrikliÜrünler.concat(mobilyaCesitleri, dekoratsiyon);
document.write("<br/>" + ürünListesi);
console.log(ürünListesi[5]);

// ********************************************
let num = 19.524789;
// toplamda 4  basmakli sayi kullan
console.log(num.toPrecision(4));

// Ondalikli kismi 3 basamakla sinirla

console.log(num.toFixed(3));

// en yakin sayiya yuvarla
console.log(Math.round(num));

// asagiya yuvarla
console.log(Math.floor(num));

// yukari yuvarla
console.log(Math.ceil(num));

// 0,65,96,45,12,30, sayilarindan en kücük degeri bul
console.log(Math.min(0, 65, 96, 45, 12, 30));
console.log(Math.max(0, 65, 96, 45, 12, 30));

// sayi araliginda kurllanicinin belirleyevcegi aralikta rastgele sayilar üretelim
let min = 50;
let max = 100;
console.log(Math.floor(min + Math.random() * (max - min)));

// Bir personelin yaptigi mesaiye göre aldigi maasi belirleyelim

let brütMaas = 3700;
let mesaiÜcreti = 10.3;
let MesaiSüresi = 42;

let toplamBrütMaas = brütMaas + MesaiSüresi * mesaiÜcreti;
console.log(toplamBrütMaas);
// toplam bürüt maas üzerinden neet maasi hesapla
let toplamNetMaas = toplamBrütMaas - toplamBrütMaas * 0.25;
console.log(toplamNetMaas.toFixed(3));
