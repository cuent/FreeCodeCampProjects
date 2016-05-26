$.ajax({
  url: "https://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts%7Cpageimages&generator=search&exsentences=1&exlimit=20&exintro=1&explaintext=1&pilimit=50&gsrsearch=computer&gsrnamespace=0&gsrlimit=5",
  dataType: "jsonp",
  success: function (data) {
    console.log(data.query.pages)
    $.each(data.query.pages,function(i,e){
        console.log("URL: "+"https://en.wikipedia.org/?curid="+e.pageid)
        console.log("Title: "+e.title);
        console.log("Extract: "+e.extract);
    });
  }
});


$(document).ready(function(){

});