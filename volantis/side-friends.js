function loadQexoFriends(id, url) {
    var uri = url + "/pub/friends/";
    var loadStyle = '<div class="qexo_loading" style="text-align: center;"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">友链加载中...</p></div>';
    document.getElementById(id).className = "friend-content";
    document.getElementById(id).innerHTML = loadStyle;
    fetch(uri).then(function(data){
        if (data.ok){
            data.json().then(function(res){
            if (res["status"]) {
                    var friends = res["data"];
                    document.getElementById(id).innerHTML = "";
                    for (let i = 0; i < friends.length; i++) {
                        document.getElementById(id).innerHTML += '<li><a class="flat-box" title="' + friends[i]["description"] + '" target="_blank" rel="noopener" href="' + friends[i]["url"] + '" active-action="action-' + friends[i]["url"] + '"><div class="name"><img class="lazyload loaded" alt="哎呀，图片丢了" src="' + friends[i]["image"] + '" srcset="' + friends[i]["image"] + '" data-ll-status="loaded" height="20" width="20">' + friends[i]["name"] + '</div></a></li>'; 
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
