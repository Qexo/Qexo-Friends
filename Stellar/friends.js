function loadQexoFriends(id, url) {
    var uri = url + "/pub/friends/";
    var loadStyle = '<div style="text-align: center;margin-top: 10px;width: 100%;" class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">友链加载中...</p></div><center>';
    document.getElementById(id).className = "tag-plugin users-wrap";
    document.getElementById(id).innerHTML = loadStyle;
    fetch(uri).then(function(data){
        if (data.ok){
            data.json().then(function(res){
                if (res["status"]) {
                    var friends = res["data"];

                    let ls = ["<div class=\"group-body\">" + "<div class=\"grid-box\">" ];
                    for (let i = 0; i < friends.length; i++) {
                        ls.push(`<div class="user-card" title="${friends[i]["description"]}"><a class="card-link" href="${friends[i]["url"]}" rel="external nofollow noopener noreferrer" target="_blank"><img onError="this.src='https://gcore.jsdelivr.net/gh/cdn-x/placeholder@1.0.4/avatar/round/3442075.svg';" src="${friends[i]["image"]}"><div class="name"><span>${friends[i]["name"]}</span></div></a></div>`);
                    }
                    ls.push('</div>')
                    document.getElementById(id).innerHTML = ls.join('') + "</div>";
                } else {
                    alert("友链载入失败!");
                }
            });
        } else {
            alert("友链获取失败!");
        }
    });
}
