function loadCssCode(code) {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.appendChild(document.createTextNode(code));
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}
var allCSS = "#bber{margin-top:2em;width:90% !important}@media screen and (max-width:1000px){#bber{margin-top:2em;width:100% !important}.entry-content li,.comment-content li,.mu_register li{margin:0;margin:0}}.bb-timeline pre{color:#aaa}.bb-timeline ul{margin:0;padding:0}.bb-timeline ul li{list-style-type:none;margin-bottom:1rem}.bb-timeline ul li .datacont ul li{margin-bottom:0}.bb-timeline ul li .bb-div{padding:0.3rem 1rem 1.5rem 1rem;border-bottom:1px solid #E7E9EF;}.bb-load button{width:100% !important;font-size:.8rem;background:none;border-radius:10px;border:0px solid #E7E9EF;padding:10px 30px;letter-spacing:0.8rem;text-align:center;color:#475671}.bb-timeline ul li .datatime{display:flex;overflow:hidden;max-height:100%}.bb-timeline ul li .datacont{margin:10px 0px 0px 35px;padding-left:1.2rem;min-height:50px}.bb-timeline ul li .datacont img[src*='emotion']{display:inline-block;width:auto}.bb-timeline ul li .datafrom{color:#aaa;font-size:0.75em !important;font-style:italic}.bb-timeline ul li p{margin:0;font-size:16px;letter-spacing:1px;line-height:28px;min-height:18px;margin:0}.bb-timeline pre p{display:inline-block}.bb-timeline pre p:empty{display:none}.dark .bb-timeline ul li .datatime{border-color:#666}.dark .bb-timeline ul li .bb-div p,.dark .bb-timeline .bb-load button{color:#fafafa}.dark .bb-timeline ul li .bb-div p svg{fill:#fafafa}.dark .bb-timeline ul li .datafrom{color:#aaa}.datacont p{magin:0}.datacont blockquote{font-family:KaiTi,STKaiti,STFangsong !important;margin:0 0 0 1rem;padding:.25rem 2rem;position:relative;border-left:0 none}.datacont blockquote::before{line-height:2rem;content:'芒鈧�';font-family:Georgia,serif;font-size:28px;font-weight:bold;position:absolute;left:10px;top:5px}.datacont .tag-span{color:#98c1d9}.datasource a{color:#fafafa;background:#3b3d42;padding:2px 8px;margin:0 6px 0 0;border-radius:5px;font-size:.9rem;font-weight:400}.datacont .img{cursor:pointer;max-width:250px;max-height:400px;border-radius:4px;}.datacont .img.square{height:180px;width:180px;object-fit:cover}.resimg.grid{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;gap:4px;width:calc(100%* 2 / 3);box-sizing:border-box;margin:4px 0 0}.resimg.grid-2{grid-template-columns:repeat(2,1fr);width:80%}.resimg.grid-4{grid-template-columns:repeat(2,1fr);width:calc(80% * 2 / 3)}.resimg.grid figure.gallery-thumbnail{position:relative;width:100%;height:0;padding-top:100%;cursor:zoom-in}.resimg figure{text-align:left;max-height:50%;margin:0 !important}.resimg figure img{max-height:50vh}.resimg.grid figure,figcaption{margin:0 !important}.resimg.grid figure.gallery-thumbnail > img.thumbnail-image{position:absolute;left:0;top:0;display:block;width:100%;height:100%;object-fit:cover;object-position:50% 50%}#bb-footer{margin:5rem auto 1rem;text-align:center}#bb-footer p{margin:0 0 0.6rem}.bb-allnums{letter-spacing:2px}.bb-allpub{text-decoration:none;font-style:italic}.bb-timeline ul li::before{content:none}.post-preview{max-width:680px;height:210px;margin:1em auto;position:relative;display:flex;background:#fff;border-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,.25),0 0 1px rgba(0,0,0,.25)}.post-preview--meta{width:75%;padding:25px;overflow:hidden}.post-preview--middle{line-height:28px}.post-preview--title{font-size:18px;margin:0!important}.post-preview--title a{text-decoration:none}.post-preview--date{font-size:14px;color:#999}.post-preview--excerpt{font-size:14px;line-height:1.825}.post-preview--excerpt p{display:inline;margin:0}.post-preview--image{object-fit:cover;height:auto;width:25%;float:right;border-top-right-radius:2px!important;border-bottom-right-radius:2px!important;border-top-left-radius:0!important;border-bottom-left-radius:0!important}@media (max-width:550px){.post-preview{width:95%;height:120px}.post-preview--meta{padding:15px}.post-preview--image{height:120px!important}.post-preview--excerpt{display:none}.post-preview--middle{line-height:19px}}.rating{display:block;line-height:15px}.rating-star{display:inline-block;width:75px;height:15px;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAClCAYAAAAUAAAYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNrs3T9rFEEcxvG7qEQIglaCICKkin9AUEtBKxU7wS61VlYivgWj70TtNFj5BqzE7qxEWwsxKIoYn4UtluFmbm8nczvzm+/BjxyuDwNzu3uXD0+46f7LC5PA45Hm+WTYw1x2LRDc0jzTXB+wqMlsaLPutz8fDFjYZHYauAz3NBvt83XNnyUWNpn1nVm3OsHmsb3EomazzZnVXKMPNcc0xzUnNKc0Rzv/77fms+Z7O3vt9b1eU7bZrNN68l5zcolX4ofmsuZXTdnmMvyi2dR86Bmcac62P6vKrnVubpc0bxYE32nOab45N8YqsvPeDfcD4SOav4HjprPuu+H5BTt9LXDMfNbdLPfT678Fx6vKupt1o/O8+R3pkOaJ5/iktqx7z/qp+aq5q/nY+fczmheaK03Gs7D5rLtZdzSvA6/Ebc2u55j57HQB0TzW7AzkjiKzny6+2hlKNE8juMNcFqKBaIZndRlCNBBNgmx7ZkE0fbLtZkE0EA1EM17WuQwhGogGooFoss6296y52cNO+J6HLJoPaFdbsvA9zGerIxrPh85eWYgGooFoDiQbuAxp0UA0EVmdWbRo+ma1WbRoIBqIZtzsnHdDWjQQDUQD0WSbde5ZS2UhmtqJJtSEiVkXooFoIJre2VATJmZdiKZ2ogk1YSb8oVMvDeUPnSAaiCaPJkzMuhANRAPRQDQpsqEmTMy6EI11oolpwkA0EA1EcyDZmCYMRAPR+LMxTZjqiCamCQPRQDQQzehNGIgGooFoIJpVZ2OaMBBN7USTqgkD0UA0EE3vbKomDERTO9GkasKYJJpUTRiIBqKBaEZvwkA0EA1EA9GkyKZqwkA01olmrCYMRAPRQDR9LkO+0QmiKbAJUyTRjNWEgWggGohm9CYMRAPRQDQQzZDsWE0YiMYC0eTYhIFoIJrKiCbHJgxEY4FocmzCZEs0OTZhIBqIpjKiybEJA9FANBANROPL5tiEgWhKIJoSmzAQDURjjGhKbMJANCUQTYlNmNGIpsQmDEQD0RgjmhKbMBANRAPR1Es0JTZhIJpciMZaEwaigWgKJBprTRiIJheisdaESUo01powEA1EUyDRWGvCQDQQDURjm2isNWEgmlURzWw2q4pZIBqIJkOiCVyGJpkFolkV0ejMMvel28mIRptl7ku3IRqIpjCimfNuaJpZIBqIBqIpm2ice5Z5ZonJupvVkMRu4JW4qXnrOWY++1+AAQBw9BJSCTeN9wAAAABJRU5ErkJggg==);overflow:hidden}.allstar10{background-position:0px 0px}.allstar9{background-position:0px -15px}.allstar8{background-position:0px -30px}.allstar7{background-position:0px -45px}.allstar6{background-position:0px -60px}.allstar5{background-position:0px -75px}.allstar4{background-position:0px -90px}.allstar3{background-position:0px -105px}.allstar2{background-position:0px -120px}.allstar1{background-position:0px -135px}.allstar0{background-position:0px -150px}.rating-average{color:#777;display:inline-block;font-size:13px;margin-left:10px}.dark .post-preview{background:#3b3d42}.video-wrapper{position:relative;padding-bottom:55%;width:100%;height:0}.video-wrapper iframe{position:absolute;height:100%;width:100%}.hy-avatar{max-height:35px;max-width:35px;float:left;border-radius:50%}.hy-intro{margin-left:5px;margin:0 0 0 1.2rem}.hy-name{font-size:0.8em;color:#44507b!important;font-weight:600}.hy-tag .hy-text-muted{color:#9b9b9b;text-align:right;font-size:0.65em}.hy-time .hy-text-muted{color:#9b9b9b;text-align:right;font-size:0.65em}.hy-time{display:flex;justify-content:space-between;flex-wrap:wrap;color:#9b9b9b;text-align:right;font-size:0.65em;margin-top:0px}.hy-tag{color:#9b9b9b;text-align:right;font-size:0.65em;margin-top:20px}.hy-location{color:#576b95;margin-right:10px}.hy-astyle{text-decoration:none;cursor:pointer}.hy-tags-item{margin-right:10px}.commentsLink{text-decoration:none;color:#475671;text-align:right;font-size:12px;border: 1px solid #475671;border-radius: 3px;padding:4px 10px;font-weight: 400;cursor: pointer;}.commentsLink:hover{text-decoration:none;background-color:#98c1d9;color:#ffffff;border: 1px solid #98c1d9;}.d-none {display: none;}.comment{margin-top: 19px;}.load-btn.button-load {cursor: pointer;}";
loadCssCode(allCSS);
var limit = bbMemo.limit
var memos = bbMemo.memos
var page = 1,
  offset = 0,
  nextLength = 0,
  nextDom = '';
var bbDom = document.querySelector(bbMemo.domId);
var load = '<div class="bb-load"><button class="load-btn button-load">鍔犺浇涓€�</button></div>'
if (bbDom) {
  getFirstList()
  meNums()
  var btn = document.querySelector("button.button-load");
  btn.addEventListener("click", function () {
    btn.textContent = '鍔犺浇涓€�';
    updateHTMl(nextDom)
    if (nextLength < limit) {
      document.querySelector("button.button-load").remove()
      return
    }
    getNextList()
  });
}

function getFirstList() {
  bbDom.insertAdjacentHTML('afterend', load);
  var bbUrl = memos + "api/v1/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit;
  fetch(bbUrl).then(res => res.json()).then(resdata => {
    updateHTMl(resdata)
    var nowLength = resdata.length
    if (nowLength < limit) {
      document.querySelector("button.button-load").remove()
      return
    }
    page++
    offset = limit * (page - 1)
    getNextList()
  });
}

function getNextList() {
  var bbUrl = memos + "api/v1/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit + "&offset=" + offset;
  fetch(bbUrl).then(res => res.json()).then(resdata => {
    nextDom = resdata
    nextLength = nextDom.length
    page++
    offset = limit * (page - 1)
    if (nextLength < 1) {
      document.querySelector("button.button-load").remove()
      return
    }
  });
  Artalk.loadCountWidget({
    server:  artalkInit.server,
    site:    artalkInit.site,
    countEl: '#artalkCount'
  });
}

function meNums() {
  var bbLoad = document.querySelector('.bb-load')
  var bbUrl = memos + "api/v1/memo/amount?userId=" + bbMemo.creatorId
  fetch(bbUrl).then(res => res.json()).then(resdata => {
    if (resdata) {}
  })
}

function updateHTMl(data) {
  var result = "",
    resultAll = "";
  const TAG_REG = /#([^\s#]+?) /g,
    BILIBILI_REG = /<a.*?href="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?".*?>.*<\/a>/g,
    NETEASE_MUSIC_REG = /<a.*?href="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g,
    QQMUSIC_REG = /<a.*?href="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g,
    QQVIDEO_REG = /<a.*?href="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g,
    YOUKU_REG = /<a.*?href="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g,
    YOUTUBE_REG = /<a.*?href="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g;
  marked.setOptions({
    breaks: !0,
    smartypants: !0,
    langPrefix: 'language-'
  });
  for (var i = 0; i < data.length; i++) {
    var bbContREG = data[i].content.replace(TAG_REG, "<span class='tag-span'>#$1</span> ")
    bbContREG = marked.parse(bbContREG).replace(BILIBILI_REG, "<div class='video-wrapper'<iframe src='//player.bilibili.com/player.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>").replace(NETEASE_MUSIC_REG, "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>").replace(QQMUSIC_REG, "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>").replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>").replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>").replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")
    if (data[i].resourceList && data[i].resourceList.length > 0) {
      var resourceList = data[i].resourceList;
      var imgUrl = '',
        resUrl = '',
        resImgLength = 0;
      for (var j = 0; j < resourceList.length; j++) {
        var restype = resourceList[j].type.slice(0, 5);
        if (restype == 'image') {
          imgUrl += '<figure class="gallery-thumbnail"><img class="img thumbnail-image" src="' + memos + 'o/r/' + resourceList[j].id + '/' + resourceList[j].filename + '"/></figure>'
          resImgLength = resImgLength + 1
        }
        if (restype !== 'image') {
          resUrl += '<a target="_blank" rel="noreferrer" href="' + memos + 'o/r/' + resourceList[j].id + '/' + resourceList[j].filename + '">' + resourceList[j].filename + '</a>'
        }
      }
      if (imgUrl) {
        var resImgGrid = ""
        if (resImgLength !== 1) {
          var resImgGrid = "grid grid-" + resImgLength
        }
        bbContREG += '<div class="resimg ' + resImgGrid + '">' + imgUrl + '</div>'
      }
      if (resUrl) {
        bbContREG += '<p class="datasource">' + resUrl + '</p>'
      }
    }
    result += '<li class="bb-list-li"><div class="bb-div"><div class="datatime"><div class="hy-avatar-block"><a href="' + bbMemo.userlink + '"class="hy-astyle"><img src="' + bbMemo.useravatar + '"class="hy-avatar"></a></div><div class="hy-intro"><div class="hy-name">' + bbMemo.username + '</div><div><span class="hy-time hy-text-muted">' + new Date(data[i].createdTs * 1000).toLocaleString() + '</span></div></div></div><div class="datacont"><div>' + bbContREG + '</div></div><div class="hy-tag hy-text-muted"><span class="hy-location">' + (bbMemo.location == undefined ? "" : bbMemo.location) + '</span><span class="hy-tags-item">' + (bbMemo.tags == undefined ? "" : bbMemo.tags) + '</span><span><a data-id="' + data[i].id + '" data-site="' + artalkInit.site + '"  data-server="' + artalkInit.server + '" class="commentsLink" onclick="loadArtalk(this)">' + (bbMemo.commentsShow ? bbMemo.commentsTitle : "") + ' ' + '<span id="artalkCount" data-page-key="/m/' + data[i].id + '"></span></a ></span></div><div id="' + data[i].id + '" class="comment d-none"></div></div></li>';
  }
  var bbBefore = "<section class='bb-timeline'><ul class='bb-list-ul'>"
  var bbAfter = "</ul></section>"
  resultAll = bbBefore + result + bbAfter
  bbDom.insertAdjacentHTML('beforeend', resultAll);
  fetchDB()
  document.querySelector('button.button-load').textContent = '鍔犺浇鏇村';
  window.ViewImage && ViewImage.init('.datacont img')
  window.Lately && Lately.init({
    target: '.datatime'
  });
}

function loadArtalk(e) {
  let id = e.getAttribute("data-id"),
    site = e.getAttribute("data-site"),
    server = e.getAttribute("data-server");
  let artalkDom = document.getElementById(`${id}`);
  let artalkCon = "<div id='artalk'></div>";
  if (artalkDom.classList.contains('d-none')) {
    document.querySelectorAll('.comment').forEach((item) => {
      item.classList.add('d-none');
    })
    if (document.getElementById("artalk")) {
      document.getElementById("artalk").remove()
    }
    artalkDom.insertAdjacentHTML('beforeend', artalkCon);
    artalkDom.classList.remove('d-none');
    Artalk.init({
      el: '#artalk',
      pageKey: '/m/' + id,
      pageTitle: '',
      site: site,
      server: server,
      emoticons: false
    });
  } else {
    artalkDom.classList.add('d-none');
    document.getElementById("artalk").remove()
  }
}

function fetchDB() {
  var dbAPI = "https://douban.edui.fun/";
  var dbA = document.querySelectorAll(".bb-timeline a[href*='douban.com/subject/']:not([rel='noreferrer'])") || '';
  if (dbA) {
    for (var i = 0; i < dbA.length; i++) {
      _this = dbA[i]
      var dbHref = _this.href
      var db_reg = /^https\:\/\/(movie|book)\.douban\.com\/subject\/([0-9]+)\/?/;
      var db_type = dbHref.replace(db_reg, "$1");
      var db_id = dbHref.replace(db_reg, "$2").toString();
      if (db_type == 'movie') {
        var this_item = 'movie' + db_id;
        var url = dbAPI + "movies/" + db_id;
        if (localStorage.getItem(this_item) == null || localStorage.getItem(this_item) == 'undefined') {
          fetch(url).then(res => res.json()).then(data => {
            let fetch_item = 'movies' + data.sid;
            let fetch_href = "https://movie.douban.com/subject/" + data.sid + "/"
            localStorage.setItem(fetch_item, JSON.stringify(data));
            movieShow(fetch_href, fetch_item)
          });
        } else {
          movieShow(dbHref, this_item)
        }
      } else if (db_type == 'book') {
        var this_item = 'book' + db_id;
        var url = dbAPI + "v2/book/id/" + db_id;
        if (localStorage.getItem(this_item) == null || localStorage.getItem(this_item) == 'undefined') {
          fetch(url).then(res => res.json()).then(data => {
            let fetch_item = 'book' + data.id;
            let fetch_href = "https://book.douban.com/subject/" + data.id + "/"
            localStorage.setItem(fetch_item, JSON.stringify(data));
            bookShow(fetch_href, fetch_item)
          });
        } else {
          bookShow(dbHref, this_item)
        }
      }
    }
  }
}

function movieShow(fetch_href, fetch_item) {
  var storage = localStorage.getItem(fetch_item);
  var data = JSON.parse(storage);
  var db_star = Math.ceil(data.rating);
  var db_html = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" + fetch_href + "'>銆�" + data.name + "銆�</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating + "</div></div><time class='post-preview--date'>瀵兼紨锛�" + data.director + " / 绫诲瀷锛�" + data.genre + " / " + data.year + "</time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + data.intro.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + data.img + "></div>"
  var db_div = document.createElement("div");
  var qs_href = ".bb-timeline a[href='" + fetch_href + "']"
  var qs_dom = document.querySelector(qs_href)
  qs_dom.parentNode.replaceChild(db_div, qs_dom);
  db_div.innerHTML = db_html
}

function bookShow(fetch_href, fetch_item) {
  var storage = localStorage.getItem(fetch_item);
  var data = JSON.parse(storage);
  var db_star = Math.ceil(data.rating.average);
  var db_html = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" + fetch_href + "'>銆�" + data.title + "銆�</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating.average + "</div></div><time class='post-preview--date'>浣滆€咃細" + data.author + " </time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + data.summary.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + data.images.medium + "></div>"
  var db_div = document.createElement("div");
  var qs_href = ".bb-timeline a[href='" + fetch_href + "']"
  var qs_dom = document.querySelector(qs_href)
  qs_dom.parentNode.replaceChild(db_div, qs_dom);
  db_div.innerHTML = db_html
}
