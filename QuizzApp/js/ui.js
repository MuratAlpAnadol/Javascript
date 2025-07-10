// UI adlı bir constructor fonksiyonu tanımlanıyor.
// Bu fonksiyon, quiz arayüzü ile ilgili HTML elementlerini seçer ve özellik olarak atar.
function UI() {
    // Quiz kutusunu seçer (#quiz-box)
    this.quizBox = document.querySelector("#quiz-box");
    
    // Buton kutusunu seçer (#button-box)
    this.buttonBox = document.querySelector("#button-box");
    
    // Skor kutusunu seçer (#score-box)
    this.scoreBox = document.querySelector("#score-box");
    
    // Soruların ve seçeneklerin bulunduğu ana body kısmını seçer
    this.body = document.querySelector("#quiz-box #body");

    // Doğru cevap simgesi
    this.correctIcon = '<i class="bi bi-check-circle"></i>';
    
    // Yanlış cevap simgesi
    this.inCorrectIcon = '<i class="bi bi-x-circle"></i>';

    // Başlat butonunu seçer (.btn-start)
    this.btnStart = document.querySelector(".btn-start");

    // Sonraki soru butonunu seçer (.btn-next)
    this.btnNext = document.querySelector(".btn-next");

    // Tekrar oyna butonunu seçer (.btn-replay)
    this.btnReplay = document.querySelector(".btn-replay");

    // Çıkış butonunu seçer (.btn-quit)
    this.btnQuit = document.querySelector(".btn-quit");

    // Zaman yazısını seçer (.time-text)
    this.timeText = document.querySelector(".time-text");

    // Zaman sayacını (saniye) seçer (.time-second)
    this.timeSecond = document.querySelector(".time-second");

    // Zaman çizgisini seçer (.time-line)
    this.timeLine = document.querySelector(".time-line");
}

// UI nesnesine, soruGoster adında bir fonksiyon ekleniyor.
// Bu fonksiyon, verilen soruyu HTML içine dinamik olarak yerleştirir.
UI.prototype.soruGoster = function(soru){
    // Önce body içeriği temizleniyor (yeni soru için)
    this.body.innerHTML = "";

    // Yeni bir div oluşturuluyor ve class olarak "card-body" ekleniyor
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Soru metni için bir <h5> başlığı oluşturuluyor
    const title = document.createElement("h5");
    title.classList.add("question-title");
    title.textContent = soru.soruMetni; // Soru metni yerleştiriliyor

    // Seçeneklerin yer alacağı alan oluşturuluyor
    const optionList = document.createElement("div");
    optionList.classList.add("option-list");

    // soru.cevapSecenekleri objesi üzerinde dönülüyor
    for(let [key, value] of Object.entries(soru.cevapSecenekleri)){
        // Her seçenek için bir div oluşturuluyor
        const option = document.createElement("div");
        option.classList.add("option");

        // Her seçeneğe tıklama olayı atanıyor
        option.addEventListener("click", optionSelected);

        // Seçenek metni oluşturuluyor (A) Seçenek)
        const span = document.createElement("span");
        span.textContent = key + ") " + value;

        // Span etiketi div içine, div de listeye ekleniyor
        option.appendChild(span);
        optionList.appendChild(option);
    }

    // Başlık ve seçenek listesi kart gövdesine ekleniyor
    cardBody.appendChild(title);
    cardBody.appendChild(optionList);

    // Kart gövdesi ana body içine ekleniyor
    this.body.appendChild(cardBody);
}

// Tüm seçenekleri devre dışı bırakan fonksiyon
UI.prototype.disableAllOption = function () {
    // Tüm .option sınıfına sahip elementleri seç
    const options = document.querySelectorAll(" .option");
    // Her biri için "disabled" sınıfını ekle
    for(let option of options){
        option.classList.add("disabled");
    }
}

// Soru sayısını ve kaçıncı soruda olunduğunu gösterir
UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru){
    // Örnek çıktı: "2 / 5"
    const etiket = `<span class="badge text-bg-danger">${soruSirasi} / ${toplamSoru} </span>`;
    // .question-index alanına bu etiketi yaz
    document.querySelector(".question-index").innerHTML = etiket;
}

// Skor bilgisini ekrana yazdırır
UI.prototype.skoruGoster = function(dogruCevap, toplamSoru){
    // Skor metni oluşturuluyor
    const etiket = `Toplam ${toplamSoru} soruda ${dogruCevap} doğru cevap verdiniz.`;
    // .score-text sınıfına bu skor metni yazılıyor
    document.querySelector(".score-text").innerHTML = etiket;
}




// { <h5 class="question-title">1-Yüz ölçümü en büyük olan Akdeniz adası hangisidir?</h5>
//                 <div class="option-list">
//                 <div class="option">
//                     <span>a: Girit </span>
//                 </div>
//                  <div class="option">
//                     <span>b: Sicilya </span>
//                 </div>
//                  <div class="option">
//                     <span>c: Malta </span>
//                 </div>
//                  <div class="option">
//                     <span>d: Kıbrıs </span>
//                 </div>
//                 </div>}
