function getArticles(keyword) {
    $.ajax({
        url: "https://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts%7Cpageimages&generator=search&exsentences=1&exlimit=20&exintro=1&explaintext=1&pilimit=50&gsrsearch=" + keyword + "&gsrnamespace=0&gsrlimit=5",
        dataType: "jsonp",
        success: function (data) {
            $.each(data.query.pages, function (i, e) {
                $("#results").append('<li><a target="_blank" href="https://en.wikipedia.org/?curid=' + e.pageid + '"><h2>' + e.title + '</h2><span>' + e.extract + '</span></a></li>');
            });
        }
    });

}

$('#searchText').keypress(function (e) {
    if (e.keyCode == 13)
        makeSearch();
});

$("#search").button().click(function () {
    makeSearch();
});

function makeSearch() {
    var textToSearch = $("#searchText").val();

    if (textToSearch != "") {
        $("ul").empty();
        getArticles(textToSearch);
    } else {
        $("ul").empty();
    }
}