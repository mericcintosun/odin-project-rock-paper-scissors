// İki oyuncu var. İkinci oyuncu bilgisayar olacak. Sen seçimini belirleyebilirsin ama bilgisayarın 33.3 ihtimali var. Random sayı atayacağız.
// Senin seçimine göre karşı tarafla ya kazanacaksın ya kaybedeceksin ya da berabere kalacaksın. 
// Kullanıcıya prompt girdirip değişkene atamalıyım. 
// 2 tane fonksiyon kullanmış, birisi sonucu kontrol eden fonksiyon, diğeri oyun fonksiyonu. Sonucu kontrol etmek için çizdiği algoritma: kullanıcı seçimiyle pc seçimi berabere ise berabere yazsın. Kazanma ihtimallerini yazan bir else if var. Else ise kullanıcının kaybettiği durumlarda. 
// Oyun fonksiyonunda ise toLowerCase yaparak kullanıcıya seçtiriyor bunu da const değişkene atıyor. Kullanıcı taş kağıt makas seçmezse geçersiz sayıyor. Değilse fonksiyonu ilerletiyor. Bilgisayar seçimini de yaparken sonucu kontrol ettiriyor. 

function randomChoose() {
    const secenekler = ["taş" , "kağıt" , "makas"];
    const computerChoose = Math.floor(Math.random() * 3);
    return secenekler[computerChoose];
}
function result (user , computer) {
    if (user === computer) {
        return "Sonuc Berabere!";
    }
    else if (
        (user === "taş" && computer === "makas") || (user === "kağıt" && computer === "taş") || (user === "makas" && computer === "kağıt")
    ) {
        return "Kazandın!";
    }
    else {
        return "Kaybettin!";
    }
}

function oyun () {
    const userChoose = prompt("Taş, kağıt, makas?").toLowerCase();
    
    if (userChoose !== "taş" && userChoose !== "kağıt" && userChoose !== "makas") {
        alert("Tekrar dene!");
        return;
    }
    const computerChoose = randomChoose();
    alert("Pc seçimi:" + computerChoose);
    alert(result(userChoose , computerChoose));
}
oyun();
