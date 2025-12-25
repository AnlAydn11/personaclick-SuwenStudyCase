document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Üye girişi aktif !");
});
const popup = document.getElementById("popup"); // Popup elementini DOM üzerinden alır
const closeBtn = document.getElementById("closeBtn"); // Popup içindeki kapatma butonunu alır

const FIRST_SHOW_KEY = "popupFirstShownTime"; // Popup’ın gösterildiği ilk zamanı saklamak için kullanılacak key

const SECOND_SHOW_KEY = "popupSecondShown"; // Popup’ın ikinci defa gösterilip gösterilmediğini saklamak için kullanacagım key

function showPopup() {
    popup.classList.remove("hidden");
}

function hidePopup() {
    popup.classList.add("hidden");
}

closeBtn.addEventListener("click", hidePopup); // Kullanıcı kapatma tuşuna basınca popup kapat

// 10 saniye sonra kontrol
setTimeout(() => {
    const firstShownTime = localStorage.getItem(FIRST_SHOW_KEY); // Popup ın ilk kez gösterilip gösterilmediğini localStorage dan kontrol

    const secondShown = localStorage.getItem(SECOND_SHOW_KEY); // Popup’ın ikinci kez gösterilip gösterilmediğini localStorage dan kontol

    // İlk gösterdiği kısım
    if (!firstShownTime) {
        showPopup();
        localStorage.setItem(FIRST_SHOW_KEY, Date.now());
        return;
    }

    // 2 saat sonra 2.kez göster 
    if (!secondShown) {
        const twoHours = 2 * 60 * 60 * 1000; // 2 saatlik süreyi milisaniyeden hesapla
        const now = Date.now(); //şu anın zamanı

        if (now - Number(firstShownTime) >= twoHours) { // // 2 saat geçtiyse popup’ı tekrar gösterir
            showPopup();
            localStorage.setItem(SECOND_SHOW_KEY, "true");
        }
    }
}, 10000); //10 sn delay at