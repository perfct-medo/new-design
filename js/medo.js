//selcet landing page
let landingPage = document.querySelector(".landing-page");

//sellct all bullets
let bulletsOption = document.querySelectorAll(".bullets-option span");
let bulletsOptionON = document.querySelector(".bullets-option .on");
let bulletsOptionOF = document.querySelector(".bullets-option .of");
let localstorigbullets = localStorage.getItem("bulletsOption");
let bullets = document.querySelectorAll(".nav-bullets .bullet");
let navbullets = document.querySelector(".nav-bullets");
let upbtn = document.querySelector(".up-btn");

// gett ary of imeges
let imgesArry = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
];

// open stting box
let sttingsBox = document.querySelector(".sttings-box");
let fagear = document.querySelector(".sttings-box .fa-gear");
fagear.addEventListener("click", function() {
    sttingsBox.classList.toggle("open");
});

//switch colors
let colorsList = document.querySelectorAll(".colors-list li");

colorsList.forEach((i) => {
    i.addEventListener("click", (e) => {
        document.documentElement.style.setProperty(
            "--main-color",
            e.target.dataset.color
        );
        handelActive(e);
        localStorage.setItem("color-option", e.target.dataset.color);
    });
});

//save colors in locale storege
let colorSave = localStorage.getItem("color-option");

if (colorSave !== "null") {
    document.documentElement.style.setProperty(
        "--main-color",
        localStorage.getItem("color-option")
    );

    colorsList.forEach((e) => {
        e.classList.remove("active");
        if (e.dataset.color === colorSave) {
            e.classList.add("active");
        }
    });
}

//random option
let randombac = true;

let backgroundInterval;
//switch backgrounds option
let randomBackel = document.querySelectorAll(".random-backgrounds span");
let randomBackelyes = document.querySelector(".random-backgrounds .yes");
let randomBackelno = document.querySelector(".random-backgrounds .no");

// chick if ther is localStorage

let localstorigeBackgroundOption = localStorage.getItem("background_option");
if (localstorigeBackgroundOption !== null) {
    if (localstorigeBackgroundOption === "true") {
        randombac = true;
        landingPage.style.backgroundImage = localStorage.getItem("backgroundImage");
    } else {
        randombac = false;
        landingPage.style.backgroundImage = localStorage.getItem("backgroundImage");
    }
}

randomBackel.forEach((s) => {
    s.addEventListener("click", (e) => {
        handelActive(e);
        if (e.target.dataset.background === "yes") {
            randombac = true;
            randomizeImges();
            localStorage.setItem("background_option", true);
            localStorage.setItem("random_btn", "yes");
        } else {
            randombac = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
            localStorage.setItem("random_btn", "no");
        }
    });
});

// add random btn in locale Storage
let localstorigbtun = localStorage.getItem("random_btn");
if (localstorigbtun === "yes") {
    randomBackelyes.classList.add("active");
    randomBackelno.classList.remove("active");
} else {
    randomBackelno.classList.add("active");
    randomBackelyes.classList.remove("active");
}

// function to randomize option
function randomizeImges() {
    if (randombac === true) {
        backgroundInterval = setInterval(() => {
            // get ramndom
            let random = Math.floor(Math.random() * imgesArry.length);
            //change imge

            landingPage.style.backgroundImage = `url("imges/${random}.jpg")`;
            localStorage.setItem("backgroundImage", `url("imges/${random}.jpg")`);
        }, 10000);
    } else {}
}
randomizeImges();

// skills sellector
let skilsBox = document.querySelector(".skills");
let skilsBoxSpans = document.querySelectorAll(".skill-progress span ");
//gallary visallble
let gallery = document.querySelector(".gallery");
//time line
let timeline = document.querySelector(".timeline");

let testimonials = document.querySelector(".testimonials");
let features = document.querySelector(".features");
let links = document.querySelectorAll(".links li");
let linkContainer = document.querySelector(".links");
let toggolBtn = document.querySelector(".toggle-menu");
let toggolico = document.querySelector(".toggle-menu i");
document.addEventListener("click", function(e) {
    if (e.target !== toggolBtn) {
        linkContainer.classList.remove("open");
    }
});
toggolBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    linkContainer.classList.toggle("open");
});
upbtn.addEventListener("click", (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
window.onscroll = function() {
    //skills visabilaty
    let skillsoffsettop = skilsBox.offsetTop;
    let sillouterhight = skilsBox.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScroltop = window.pageYOffset;
    if (window.scrollY >= skillsoffsettop + sillouterhight - windowHeight) {
        upbtn.style.display = "block";
        skilsBoxSpans.forEach((e) => {
            e.style.width = e.dataset.width;
        });
    } else {
        skilsBoxSpans.forEach((e) => {
            e.style.width = 0;
        });
        upbtn.style.display = "none";
    }

    if (window.scrollY >= gallery.offsetTop - 400) {
        gallery.style.opacity = 1;
    } else {
        gallery.style.opacity = 0;
    }

    //time line  V
    if (window.scrollY >= timeline.offsetTop - 500) {
        timeline.style.opacity = 1;
    } else {
        timeline.style.opacity = 0;
    }
    //testimonials
    if (window.scrollY >= testimonials.offsetTop - 500) {
        testimonials.style.opacity = 1;
    } else {
        testimonials.style.opacity = 0;
    }
    //features
    if (window.scrollY >= features.offsetTop - 500) {
        features.style.opacity = 1;
    } else {
        features.style.opacity = 0;
    }
};
//create popup with imge
let gallary = document.querySelectorAll(".gallery .imges-box img");

gallary.forEach((img) => {
    img.addEventListener("click", (e) => {
        // creat overlay Element
        let overlay = document.createElement("div");
        overlay.className = "pop-overlay";
        document.body.append(overlay);
        let pobox = document.createElement("div");
        pobox.className = "pop-box";
        let popImg = document.createElement("img");
        popImg.src = img.src;
        pobox.append(popImg);
        document.body.append(pobox);

        if (img.alt !== "") {
            let imgheading = document.createElement("h3");
            let imgetexst = document.createTextNode(img.alt);
            imgheading.append(imgetexst);
            pobox.prepend(imgheading);
        } else {
            let imgheading = document.createElement("h3");
            let imgetexst = document.createTextNode("no imge name");
            imgheading.append(imgetexst);
            pobox.prepend(imgheading);
        }
        overlay.addEventListener("click", () => {
            overlay.remove();
            pobox.remove();
        });
    });
});

if (localstorigbullets === "on") {
    bulletsOptionON.classList.add("active");
    bulletsOptionOF.classList.remove("active");
    navbullets.classList.add("on");
} else {
    bulletsOptionOF.classList.add("active");
    bulletsOptionON.classList.remove("active");
    navbullets.classList.remove("on");
}

bulletsOption.forEach((bul) => {
    bul.addEventListener("click", (e) => {
        bulletsOption.forEach((e) => {
            e.classList.remove("active");
            localStorage.setItem("bulletsOption", bul.dataset.bullets);
        });
        bul.classList.add("active");
        if (bul.dataset.bullets === "on") {
            navbullets.classList.add("on");
            localStorage.setItem("bulletsOption", bul.dataset.bullets);
        } else {
            navbullets.classList.remove("on");
            localStorage.setItem("bulletsOption", bul.dataset.bullets);
        }
    });
});

function scroolToSection(element) {
    element.forEach((link) => {
        link.addEventListener("click", (e) => {
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth",
            });
            // handelActive(e);
        });
    });
}
scroolToSection(links);
scroolToSection(bullets);

//handel active
function handelActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
        ele.classList.remove("active");
    });
    ev.target.classList.add("active");
}
// rest-options

document.querySelector(".rest-options").onclick = function() {
    localStorage.removeItem("background_option");
    localStorage.removeItem("backgroundImage");
    localStorage.removeItem("color-option");
    localStorage.removeItem("bulletsOption");
    localStorage.removeItem("random_btn");
    localStorage.removeItem("123");
    window.location.reload();
};