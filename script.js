/* ===============================
   Random Welcome Messages
================================= */

const welcomes = [
    "Hey cute cute Tanu ❤️",
    "Hello My Babu ☀️",
    "Welcome Tanu 👑",
    "Hey My Baby ❤️",
    "Someone Amazing Is Here ✨",
    "Hello Bacchu 🌸",
    "Welcome My Happiness bacchi💕",
    "Hi golu molu 😊",
    "Good To See You bacchu ❤️",
    "The Most Beautiful Girl Just Arrived 💖"
];

document.getElementById("welcome").innerText =
    welcomes[Math.floor(Math.random() * welcomes.length)];

const randomQuote = [

"❤️ You are loved more than you know.",

"🌸 You make ordinary days feel magical.",

"✨ Never forget how amazing you are.",

"💖 Today is another reason to smile.",

"☀️ Keep shining, beautiful."

];

document.getElementById("messageBox").innerHTML =
randomQuote[Math.floor(Math.random()*randomQuote.length)];
/* ===============================
   Countdown
================================= */

const birthday = new Date("July 28, 2026 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

},1000);


/* ===============================
   Love Letters
================================= */

const letters = [

`My babu ❤️

I hope today makes you smile.

No matter what happens,

always remember that someone cares about you deeply.

❤️`,

`Dear Babu,

If I could give you one thing,

it would be seeing yourself through my eyes.

You're wonderful.

💕`,

`You know what's special?

It's not the countdown.

It's the person waiting at the end of it.

❤️`,

`I don't know what tomorrow brings,

but I know one thing...

I want your smile to always stay.

❤️`,

`Every refresh...

A new letter.

Because you deserve a new reason to smile.

😊`

];

function openLetter(){

const random = letters[Math.floor(Math.random()*letters.length)];

document.getElementById("messageBox").innerHTML = random;

}


/* ===============================
   Compliments
================================= */

const compliments = [

"You're absolutely beautiful ❤️",

"Your smile can brighten anyone's day ☀️",

"You're stronger than you think 💪",

"You're one of a kind 💖",

"You're my favorite notification 📱",

"You deserve all the happiness in the world 🌸",

"You make ordinary days feel special ✨",

"You have a beautiful heart ❤️",

"You are enough just the way you are 💕",

"You make the world prettier 🌍"

];

function compliment(){

const random = compliments[Math.floor(Math.random()*compliments.length)];

document.getElementById("messageBox").innerHTML =
"<h2>❤️ Compliment</h2><br>"+random;

}


/* ===============================
   Surprise Button
================================= */

const surprises = [

"🌹 Sending you a virtual rose!",

"🎈 A balloon just flew to you!",

"🍫 Here's your favorite chocolate!",

"🤗 A warm hug has been delivered!",

"💋 One invisible forehead kiss!",

"✨ You unlocked a smile!",

"🌈 Today is going to be beautiful!",

"❤️ Someone loves you a lot!",

"🎁 Surprise! You're amazing!",

"🌸 Flowers are blooming just for you!"

];

function surprise(){

const random = surprises[Math.floor(Math.random()*surprises.length)];

document.getElementById("messageBox").innerHTML =
"<h2>🎁 Surprise</h2><br>"+random;

heartExplosion();

}


/* ===============================
   Floating Hearts
================================= */

const heartContainer=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,700);


/* ===============================
   Stars
================================= */

const stars=document.getElementById("stars");

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

const size=Math.random()*3;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDuration=(2+Math.random()*4)+"s";

stars.appendChild(star);

}


/* ===============================
   Heart Explosion
================================= */

function heartExplosion(){

for(let i=0;i<20;i++){

setTimeout(createHeart,i*50);

}

}
/* ==========================
      Wishes
========================== */

const wishes=[

"I wish your smile never fades ❤️",

"I wish all your dreams come true ✨",

"I wish today brings you happiness 🌸",

"I wish life always treats you kindly 💕",

"I wish you always believe in yourself ❤️",

"I wish every morning starts with a smile ☀️",

"I wish your heart stays full of joy 💖",

"I wish you laugh a little more today 😊"

];

function wish(){

const random=wishes[Math.floor(Math.random()*wishes.length)];

document.getElementById("messageBox").innerHTML=

"<h2>🌠 My Wish For You</h2><br>"+random;

}
/* ==========================
      Flowers
========================== */

const flowers=[

"🌹 Rose — Love",

"🌸 Cherry Blossom — New Beginnings",

"🌻 Sunflower — Happiness",

"🌷 Tulip — Care",

"🌺 Hibiscus — Beauty",

"💐 Bouquet — You're Special",

"🪻 Lavender — Peace",

"🌼 Daisy — Joy"

];

function flower(){

const random=flowers[Math.floor(Math.random()*flowers.length)];

document.getElementById("messageBox").innerHTML=

"<h2>🌸 Today's Flower</h2><br>"+random;

}
/* ==========================
      Memory Jar
========================== */

const memories=[

"I can't wait to celebrate your birthday ❤️",

"Every conversation with you makes my day better.",

"You deserve all the happiness in the world.",

"Seeing you smile is enough to make my day.",

"You're one of the best things that happened to me.",

"I hope one day we laugh together remembering this website."

];

function memory(){

const random=memories[Math.floor(Math.random()*memories.length)];

document.getElementById("messageBox").innerHTML=

"<h2>📖 Memory Jar</h2><br>"+random;

}

/* ==========================
        Gifts
========================== */

const gifts=[

"🧸 Teddy Bear",

"🍫 Chocolate",

"🌹 Red Rose",

"💍 Promise Ring",

"🎂 Birthday Cake",

"🎈 Balloon",

"🎵 Your Favorite Song",

"💖 A Warm Hug"

];

function gift(){

const random=gifts[Math.floor(Math.random()*gifts.length)];

document.getElementById("messageBox").innerHTML=

"<h2>🎀 Gift Delivered</h2><br>"+random;

heartExplosion();

}
/* ==========================
    Why I Like You
========================== */

const reasons=[

"Because your smile is beautiful ❤️",

"Because you're kind 🌸",
"Because you're amazing babu 🌟",
"Because you're caring 💕",

"Because you're strong baccha 💪",

"Because you're golu molu 😂",

"Because you're thoughtful ❤️",

"Because you're uniquely you ✨",

"Because you make people smile 😊",
"and endless reasons to love you 💖"

];

function reason(){

const random=reasons[Math.floor(Math.random()*reasons.length)];

document.getElementById("messageBox").innerHTML=

"<h2>💖 One Reason</h2><br>"+random;

}
