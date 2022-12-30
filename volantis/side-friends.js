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
                    document.getElementById(id).innerHTML = `
 <style>
.Qfriends_line {
        background: #fff;
        border-radius: 5px !important;
        margin: 3px 0 !important;
}
.Qfriends_line:hover {
        background: #a4a4a485 !important;
}
.Qfriends_line > a > .name {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    padding: 3px !important;
}
.Qfriends_line > a > .name > p {
        margin: 0 5px !important;
        font-weight: bold;color: #000 !important;
}
</style>`;
                    for (let i = 0; i < friends.length; i++) {
                        document.getElementById(id).innerHTML += `
                        <li class="Qfriends_line">
                        <a class="flat-box" title="${friends[i]["description"]}" target="_blank" rel="noopener" href="${friends[i]["url"]}">
                        <div class="name">
                        <img src="${friends[i]["image"]}"  height="20" width="20" style="border-radius: 100%;">
                        ${friends[i]["name"]}
                        </div>
                        </a>
                        </li>`; 
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
