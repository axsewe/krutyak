let spisak = {
    russian: {
        znak: '<img src="images/ornament-ru.webp" alt="Русский орнамент" width="90">',
        nazvanie: "Русский природный орнамент",
        tekst: "Цветочные розаны и пышные веточки символизируют цветущую Землю, плодородие, домашний уют и радость."
    },
    karelian: {
        znak: '<img src="images/ornament-karel.webp" alt="Карельский орнамент" width="90">',
        nazvanie: "Карельский лесной орнамент",
        tekst: "Строгие геометрические стилизованные ели и сосны, отражающие дух северной природы и стойкость."
    },
    tatar: {
        znak: '<img src="images/ornament-tatar.webp" alt="Татарский орнамент" width="90">',
        nazvanie: "Татарский растительный узор",
        tekst: "Изящные тюльпаны и волнистые стебли — традиционные символы обновления, весеннего процветания и жизни."
    },
    buryat: {
        znak: '<img src="images/ornament-buryat.webp" alt="Бурятский орнамент" width="90">',
        nazvanie: "Бурятский орнамент «Улзы»",
        tekst: "Древо жизни и солярные символы (Солнце и Луна), знаменующие вечность, мудрость и связь поколений."
    },
    yakut: {
        znak: '<img src="images/ornament-yakut.webp" alt="Якутский орнамент" width="90">',
        nazvanie: "Якутский традиционный узор",
        tekst: "Изображения священных оленей, рогов и небесных светил, отражающие гармонию человека с суровой северной тайгой."
    }
};

function pokazat(narod, knopka) {
    let info = spisak[narod];
    if (!info) {
        return;
    }
    
    document.getElementById("znak").innerHTML = info.znak;
    document.getElementById("nazvanie").innerText = info.nazvanie;
    document.getElementById("opisanie").innerText = info.tekst;

    let vse = document.querySelectorAll(".chip");
    for (let i = 0; i < vse.length; i++) {
        vse[i].classList.remove("active");
        vse[i].setAttribute("aria-pressed", "false");
    }
    knopka.classList.add("active");
    knopka.setAttribute("aria-pressed", "true");
}

function proverit(verno, knopka) {
    let otvet = document.getElementById("otvet");
    let vse = document.querySelectorAll(".quiz-btn");

    for (let i = 0; i < vse.length; i++) {
        vse[i].classList.remove("verno");
        vse[i].classList.remove("oshibka");
    }

    otvet.classList.remove("horosho");
    otvet.classList.remove("ploho");

    if (verno) {
        knopka.classList.add("verno");
        otvet.classList.add("horosho");
        otvet.innerText = "Абсолютно верно! Голубь мира — символ созидания и единства.";
    } else {
        knopka.classList.add("oshibka");
        otvet.classList.add("ploho");
        otvet.innerText = "Попробуйте еще раз!";
    }
}

let knopkaMenu = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

knopkaMenu.addEventListener("click", function () {
    if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        knopkaMenu.setAttribute("aria-expanded", "false");
    } else {
        menu.classList.add("is-open");
        knopkaMenu.setAttribute("aria-expanded", "true");
    }
});

let ssylki = document.querySelectorAll(".main-nav a");
for (let i = 0; i < ssylki.length; i++) {
    ssylki[i].addEventListener("click", function () {
        menu.classList.remove("is-open");
        knopkaMenu.setAttribute("aria-expanded", "false");
    });
}

let knopkiNarodov = document.querySelectorAll(".chip");
for (let i = 0; i < knopkiNarodov.length; i++) {
    knopkiNarodov[i].addEventListener("click", function () {
        pokazat(this.getAttribute("data-key"), this);
    });
}

let knopkiTesta = document.querySelectorAll(".quiz-btn");
for (let i = 0; i < knopkiTesta.length; i++) {
    knopkiTesta[i].addEventListener("click", function () {
        let verno = this.getAttribute("data-correct") == "true";
        proverit(verno, this);
    });
}
