// ==============================
// ЭКРАНЫ
// ==============================

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const readyBtn = document.getElementById("readyBtn");
const talkBtn = document.getElementById("talkBtn");

const typingText = document.getElementById("typingText");

// ==============================
// ТЕКСТ ПИСЬМА
// ==============================

const text = `Мне сейчас непросто это писать, но я не хочу молчать.

Я невероятно благодарен судьбе за то, что познакомился с тобой, ты потрясающий человек.

Но я чувствую, что из-за нашей тишины мы сейчас на грани расставания, и от этого очень тяжело.

Мне не хочется, чтобы мы просто так потеряли друг друга.

Давай встретимся и спокойно поговорим?

Я люблю тебя, менин кошаканым ❤️`;


// ==============================
// ПЕРЕХОД НА 2 ЭКРАН
// ==============================

readyBtn.addEventListener("click", () => {

    screen1.classList.remove("active");

    setTimeout(() => {

        screen2.classList.add("active");

        typeWriter();

    },600);

});

// ==============================
// ЭФФЕКТ ПЕЧАТИ
// ==============================

let index = 0;

function typeWriter(){

    if(index < text.length){

        const char = text.charAt(index);

        if(char === "\n"){

            typingText.innerHTML += "<br><br>";

        }else{

            typingText.innerHTML += char;

        }

        index++;

        setTimeout(typeWriter,28);

    }else{

        talkBtn.classList.remove("hidden");

        talkBtn.classList.add("fade");

    }

}

// ==============================
// ПЕРЕХОД НА 3 ЭКРАН
// ==============================

talkBtn.addEventListener("click",()=>{

    screen2.classList.remove("active");

    setTimeout(()=>{

        screen3.classList.add("active");

    },600);

});

// ==============================
// ЛЕТАЮЩИЕ СЕРДЦА
// ==============================

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize =
    (16 + Math.random()*18) + "px";

    heart.style.animationDuration =
    (6 + Math.random()*4) + "s";

    heart.style.opacity =
    0.2 + Math.random()*0.5;

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,500);

// ==============================
// ПЕРВЫЕ СЕРДЦА
// ==============================

for(let i=0;i<15;i++){

    setTimeout(createHeart,i*300);

}