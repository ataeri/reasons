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
    "",
    "超",
    "すごく",
]

var secondPhrase = [
    "I can beat you in mariokart",
    "I can beat you in pokemon",
    "I love cooking with you",
    "なでなでしてくれるから",
    "エリちゃん凄いから",
    "ビビちゃんだから",
    "一緒にテレビ見てくれるから",
    "エリちゃんといる時落ちずくから",
    "心がいい",
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
    "天才",
    "美人",
    "可愛い",
    "優しい",
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

var countDownDate = new Date("Jul 11, 2020 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);