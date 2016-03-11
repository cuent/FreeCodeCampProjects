var quote;

//Load the default quote and randoms quotes
$(document).ready(function () {
    changeQuote();

    //activate when user's click on butto quote.
    $("#generate").on('click', function () {
        changeQuote();
    });

    //make a tweet
    $("#tweet").on("click", function () {
        if (quote.quote.length > 140) {
            alert("Tweet too long!\nShould have less than 140 characters");
        } else {
            tweetLink = "https://twitter.com/intent/tweet?text=" + quote.quote + "&via=Xavier_Sumba";
            window.open(tweetLink, "_blank");
        }
    });
});

//load a random quote
function changeQuote() {
    var quotes = getQuotes();
    var id = Math.floor(Math.random() * (quotes.length));
    quote = quotes[id];
    $("#quote").text(quote.quote);
    $("#author").text(quote.author + " ");
    $("#source").text(quote.source);
}

//return all the quotes availables
function getQuotes() {
    return [
        {
            quote: "You can do anything, but not everything",
            author: "David Allen",
            source: ""
    }, {
            quote: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
            author: "Antoine de Saint-Exupéry",
            source: ""
    }, {
            quote: "The richest man is not he who has the most, but he who needs the least.",
            author: "Unknown Author",
            source: ""
    }, {
            quote: "You miss 100 percent of the shots you never take.",
            author: "Wayne Gretzky",
            source: ""
    }, {
            quote: "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
            author: "Ambrose Redmoon",
            source: ""
    }, {
            quote: "You must be the change you wish to see in the world.",
            author: "Gandhi",
            source: ""
    }, {
            quote: "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.",
            author: "Lin-Chi",
            source: ""
    }, {
            quote: "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.",
            author: "A. A. Milne",
            source: ""
    }, {
            quote: "To the man who only has a hammer, everything he encounters begins to look like a nail.",
            author: "Abraham Maslow",
            source: ""
    }, {
            quote: "We are what we repeatedly do; excellence, then, is not an act but a habit.",
            author: "Aristotle",
            source: ""
    }, {
            quote: "A wise man gets more use from his enemies than a fool from his friends.",
            author: "Baltasar Gracian",
            source: ""
    }, {
            quote: "Do not seek to follow in the footsteps of the men of old; seek what they sought.",
            author: "Basho",
            source: ""
    }, {
            quote: "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
            author: "Lao-Tze",
            source: ""
    }, {
            quote: "Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.",
            author: "Georg Christoph Lichtenberg",
            source: ""
    }, {
            quote: "What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.",
            author: "John Ruskin",
            source: ""
    }, {
            quote: "The real voyage of discovery consists not in seeking new lands but seeing with new eyes.",
            author: "Marcel Proust",
            source: ""
    }, {
            quote: "Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching",
            author: "Unknown Author",
            source: ""
    }, {
            quote: "Try a thing you haven’t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not.",
            author: "Virgil Garnett Thomson",
            source: ""
    }, {
            quote: "Even if you’re on the right track, you’ll get run over if you just sit there.",
            author: "Will Rogers",
            source: ""
    }, {
            quote: "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
            author: "Zig Ziglar",
            source: ""
    }];
}