var currentQuote = "Inspiration comes and goes with the click of a button.",
    currentAuthor = "Kyle Kenney";

$('.quote-search').click(function() {
    $.ajax({
        datatype: 'json',
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
        method: 'post',
        headers: {
            "X-Mashape-Key": "q0P2HCCKybmsh87MBUMSVsvqBPr1p18vKzWjsnkpasgklGek38",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(response) {
            var resp = JSON.parse(response);
            console.log('success: ', resp);
            currentQuote = resp.quote;
            currentAuthor = resp.author;
            $(".quote").text(currentQuote);
            $(".author").text(currentAuthor);
        },
        error: function(response) {
            console.log('error: ', response);
        }
    })
});

$(document).ready(function() {
    $('.tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
});
