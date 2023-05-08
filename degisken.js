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
document.write(ürünListesi);
console.log(ürünListesi[5]);
