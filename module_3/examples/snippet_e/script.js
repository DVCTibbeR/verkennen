var json = {
    "userid":82608,
    "username":"tarrow",
    "firstname":"Rudi",
    "lastname":"van Pelt",
    "country":"Netherlands",
    "regdate":"2006-01-10",
    "designerid":114664,
    "hideSupporter":false,
    "userMicrobadges":[
        {"slot":1,"badgeid":42224},
        {"slot":2,"badgeid":2828},
        {"slot":3,"badgeid":51736},
        {"slot":4,"badgeid":17587},
        {"slot":5,"badgeid":25235}
    ],
    "hideName":false,
    "avatar":{
        "urls":{
            "mds":"https:\/\/cf.geekdo-images.com\/p6qPXq6T11j6Za5LPO2323qYbw8=\/fit-in\/28x28\/filters:strip_icc()\/https%3A%2F%2Fcf.geekdo-static.com%2Favatars%2Favatar_id112373.jpg",
            "mds@2x":"https:\/\/cf.geekdo-images.com\/ZpnY8v298uiPCE9vwSI6GDZbtTw=\/fit-in\/56x56\/filters:strip_icc()\/https%3A%2F%2Fcf.geekdo-static.com%2Favatars%2Favatar_id112373.jpg",
            "md":"https:\/\/cf.geekdo-images.com\/AEsLPr8VTN5z7IDEalYpXHsh7h8=\/fit-in\/35x35\/filters:strip_icc()\/https%3A%2F%2Fcf.geekdo-static.com%2Favatars%2Favatar_id112373.jpg",
            "sm":"https:\/\/cf.geekdo-images.com\/RGyrW0oXFdPxAhpihVT98pgKNlg=\/fit-in\/23x23\/filters:strip_icc()\/https%3A%2F%2Fcf.geekdo-static.com%2Favatars%2Favatar_id112373.jpg",
            "default":"https:\/\/cf.geekdo-static.com\/avatars\/avatar_id112373.jpg"
        },
        "height":64,
        "width":64
    }
};

document.getElementById('rawjson').innerHTML = json;

for (let key in json) {
    document.getElementById('loopjson').innerHTML += key + ' : ' + json[key] + '<br/>';
}

document.getElementById('singleentry1').innerHTML = json.username
document.getElementById('singleentrydeep').src = json.avatar.urls.default;
