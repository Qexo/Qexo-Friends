function loadQexoFriends(id, url) {
    var uri = url + "/pub/friends/";
    var loadStyle = '<center><div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">友链加载中...</p></div><center>';
    document.getElementById(id).className = "friend-content";
    document.getElementById(id).innerHTML = loadStyle;
    fetch(uri).then(function(data){
        if (data.ok){
            data.json().then(function(res){
            if (res["status"]) {
                    var friends = res["data"];
                    document.getElementById(id).innerHTML = "";
                    for (let i = 0; i < friends.length; i++) {
                        document.getElementById(id).innerHTML += '<p><a target="_blank" href="' + friends[i]["url"] + '" title="' + friends[i]["name"] + '" class="qexo-friendurl"></p><div class="qexo-frienddiv"><div class="qexo-frienddivleft"><img class="qexo-myfriend" src="' + friends[i]["image"] + '"></div><div class="qexo-frienddivright"><span style="font-weight: bold;">' + friends[i]["name"] + '</span><br>' + friends[i]["description"] + '</div></div></a>';
                    }
                    document.getElementById(id).innerHTML += '';
                } else {
                    alert("友链载入失败!");
                }
            });
        } else {
            alert("友链获取失败!");
        }
    });
}
