var chanels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster40489789"];

function makeURL(type, channel) {
    return 'https://api.twitch.tv/kraken/' + type + '/' + channel + '?callback=?';
}

function writeStreamings(channel, status, description, url, logo) {
    var htmlBuilder = 
        '<li>' +
            '<div class="row">' +
                '<div class="col-md-3 col-xs-0"></div>'+
                '<div class="col-md-1 col-xs-2">'+
                    '<a href="' + url + '" target="_blank"><img src="' + logo + '" class="img-responsive img-circle" alt="logo" width="64"></a>' +
                '</div>'+
                '<div class="col-md-2 col-xs-4">'+
                    ((status === "Online") ? '<img src="http://icons.iconarchive.com/icons/saviourmachine/chat/64/online-icon.png" class="img-responsive" width="32" style="display: inline">'  : ( (status === "Offline") ? '<img src="http://icons.iconarchive.com/icons/saviourmachine/chat/64/offline-icon.png" class="img-responsive" width="32" style="display: inline">' : '<img src="http://icons.iconarchive.com/icons/emey87/sfeers/32/deny-icon.png" class="img-responsive" width="32" style="display: inline">' )) + 
                    '<a href="' + url + '" target="_blank">' + channel + '</a>' + 
                '</div>'+
                '<div class="col-md-3 col-xs-6">'+
                    ((status === "Online") ? description : status) +
                '</div>'+
                '<div class="col-md-3 col-xs-0"></div>'+
            "</div>" +
        "</li>";
    $("#streams").append(htmlBuilder);
}

chanels.forEach(function (channel) {
    var status, url = "https://www.twitch.tv",
        description = "",
        logo;
    $.getJSON(makeURL("streams", channel), function (data) {
        if (data.status === 422) {
            status = "Unavailable";
        } else if (data.status === 404) {
            status = "Not exist";
        } else if (data.stream === null) {
            status = "Offline";
        } else {
            status = "Online";
        }
    });
    $.getJSON(makeURL("channels", channel), function (data) {
        url = (status === "Online" || status === "Offline") ? data.url : url;
        description = (status === "Online") ? data.status : "";
        logo = (status === "Online" || status === "Offline") ? data.logo : "http://helpalife.in/assets/user_missing-be50e0f7f473ed26e1048437bb02562e.png";

        writeStreamings(channel, status, description, url, logo);
    });
});