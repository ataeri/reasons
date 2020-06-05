var firstPhrase = [
    "I love you because ",
    "I am in love with you because ",
    "You are the loml because ",
    "I am dating you because ",
    "I fell in love with you because ",
    "You are dear to my hear because ",
]

var connecting = [
    "so much",
    "extremely",
    "so so so so",
    "so darn",
    ""
]

var secondPhrase = [
    "I can beat you in mariokart",
    "I can beat you in pokemon",
    "I love cooking with you",
    "なでなでしてくれるから",
]

var adjective = [
    "kind",
    "nice",
    "beautiful",
    "amazing",
    "sexy",
    "hardworking",
    "a perfectionist",
    "overthinker/overlover",
]


const reasonToLove = () => {
    var phrase = firstPhrase[Math.floor(Math.random() * firstPhrase.length)]
    if(Math.random() > 0.5){
        phrase += secondPhrase[Math.floor(Math.random() * secondPhrase.length)]
    }
    else{
        phrase += connecting[Math.floor(Math.random() * connecting.length)]
        phrase += adjective[Math.floor(Math.random() * adjective.length)]
    }
    document.getElementById("reason").innerHTML = phrase
}

var image = "image" + Math.floor(Math.random() * 11) + ".jpg"
document.body.style.backgroundImage = "url(images/" + image + ")"
console.log(image)