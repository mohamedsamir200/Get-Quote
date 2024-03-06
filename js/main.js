var quotes = [
  {
    author: " -- Oscar Wilde",
    quote:
      '"Beware of what you become in pursuit of what you want.Be yourself; everyone else is already taken."',
  },
  {
    author: " -- Mahatma Gandhi",
    quote: '"Be the change that you wish to see in the world."',
  },
  { author: "-- Frank Zappa", "quote": '"So many books, so little time."' },
  {
    author: "-- Marcus Tullius Cicero",
    quote: '"A room without books is like a body without a soul."',
  },
  {
    author: "-- Mae West",
    quote: ' "You only live once, but if you do it right, once is enough."',
  },
  {
    author: "-- Robert Frost",
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
  },

  {
    author: "--  Frank Zappa",
    quote: "“So many books, so little time"
  },


  {
    author: "-- Albert Einstein",
    quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  },

  {
    author: "-- Bernard M. Baruch",
    quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  },

  {
    author: "-- Dr. Seuss",
    quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  },
];


const btn = document.querySelector("button");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

function getQuote() {
  const currentIndex = Math.trunc(Math.random() * quotes.length);
  quote.innerHTML = quotes[currentIndex].quote;
  author.innerHTML = quotes[currentIndex].author;
}


btn.onclick = function () {
  getQuote();
};




// var x = Math.floor(Math.random() * quotes.length);
// document.getElementById("author").innerHTML = quotes[x].author;
// document.getElementById("quote").innerHTML = quotes[x].quote;