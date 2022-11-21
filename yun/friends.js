function loadQexoFriends(id, url, color) {
    var uri = url + "/pub/friends/";
    var loadStyle = '<center><div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">友链加载中...</p></div><center>';
    document.getElementById(id).className = "friend-content";
    document.getElementById(id).innerHTML = loadStyle;
    fetch(uri).then(function(data){
        if (data.ok){
            data.json().then(function(res){
            if (res["status"]) {
                    var friends = res["data"];
                    document.getElementById(id).innerHTML = '<ul class="link-items">';
                    for (let i = 0; i < friends.length; i++) {
                        document.getElementById(id).innerHTML += '<li class="link-item" id="' + friends[i]["name"] + '" style="--primary-color:'+color+'"><a class="link-url" href="' + friends[i]["url"] + '" title="' + friends[i]["description"] + '" alt="portrait" target="_blank" rel="friend"><div class="link-left"><img class="link-avatar" alt="哎呀，图片丢了" loading="lazy" src="' + friends[i]["image"] + '" onerror="onAvatarError(this)"></div><div class="link-info"><div class="link-blog">' + friends[i]["name"] + '</div><div class="link-desc">' + friends[i]["description"] + '</div></div></a></li>';
                    }
                    document.getElementById(id).innerHTML += '</ul><br>';
                } else {
                    alert("友链载入失败!");
                }
            });
        } else {
            alert("友链获取失败!");
        }
    });
}
