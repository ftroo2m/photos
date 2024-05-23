function loadCssCode(code) {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.appendChild(document.createTextNode(code));
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}

var allCSS = "..."; // 你的CSS代码
loadCssCode(allCSS);

var pageSize = bbMemo.limit;
var memos = bbMemo.memos;
var pageToken;
var page = 1,
  nextLength = 0,
  nextDom = '';
var bbDom = document.querySelector(bbMemo.domId);
var load = '<div class="bb-load"><button class="load-btn button-load">加载中…</button></div>';

if (bbDom) {
  getFirstList();
  document.addEventListener("click", function(event) {
    if (event.target && event.target.matches("button.button-load")) {
      getNextList();
      event.target.textContent = '加载中…';
      updateHTMl(nextDom);
      if (nextLength < pageSize) {
        event.target.remove();
        return;
      }
    }
  });
}

function getFirstList() {
  bbDom.insertAdjacentHTML('afterend', load);
  var bbUrl = memos + "api/v1/memos?pageSize=" + pageSize + "&filter=" + "creator == 'users/"+bbMemo.creatorId+"' && visibilities == ['PUBLIC', 'PROTECTED']";
  fetch(bbUrl).then(res => res.json()).then(resdata => {
    updateHTMl(resdata.memos);
    var nowLength = resdata.length;
    if (nowLength < pageSize) {
      document.querySelector("button.button-load").remove();
      return;
    }
    page++;
    pageToken=resdata.nextPageToken;
  }).then(() => {
    Artalk.loadCountWidget({
      server:  artalkInit.server,
      site:    artalkInit.site,
      countEl: '.artalkCount'
    });
  });
}

function getNextList() {
  var bbUrl = memos + "api/v1/memos?pageSize=" + pageSize +"&pageToken="+pageToken+ "&filter=" + "creator == 'users/"+bbMemo.creatorId+"' && visibilities == ['PUBLIC', 'PROTECTED']";
  fetch(bbUrl).then(res => res.json()).then(resdata => {
    nextDom = resdata.memos;
    nextLength = nextDom.length;
    page++;
    pageToken = resdata.nextPageToken;
    if (nextLength < 1) {
      document.querySelector("button.button-load").remove();
      return;
    }
  }).then(() => {
    Artalk.loadCountWidget({
      server:  artalkInit.server,
      site:    artalkInit.site,
      countEl: '.artalkCount'
    });
  });
}

function updateHTMl(data) {
  var result = "", resultAll = "";
  const TAG_REG = /#([^\s#]+?) /g;
  //... 你的其他正则表达式和配置

  marked.setOptions({
    breaks: true,
    smartypants: true,
    langPrefix: 'language-'
  });

  data.forEach(item => {
    var bbContREG = item.content.replace(TAG_REG, "<span class='tag-span'>#$1</span> ");
    bbContREG = marked.parse(bbContREG);
    //... 处理正则表达式替换

    // 处理资源
    if (item.resources && item.resources.length > 0) {
      var resources = item.resources;
      var imgUrl = '', resUrl = '', resImgLength = 0;
      resources.forEach(res => {
        if (res.type.startsWith('image')) {
          imgUrl += `<figure class="gallery-thumbnail"><img class="img thumbnail-image" src="${memos}file/${res.name}"/></figure>`;
          resImgLength++;
        } else {
          resUrl += `<a target="_blank" rel="noreferrer" href="${memos}file/${res.name}">${res.name}</a>`;
        }
      });
      if (imgUrl) {
        var resImgGrid = resImgLength !== 1 ? `grid grid-${resImgLength}` : "";
        bbContREG += `<div class="resimg ${resImgGrid}">${imgUrl}</div>`;
      }
      if (resUrl) {
        bbContREG += `<p class="datasource">${resUrl}</p>`;
      }
    }

    result += `
      <li class="bb-list-li">
        <div class="bb-div">
          <div class="datatime">
            <div class="hy-avatar-block">
              <a href="${bbMemo.userlink}" class="hy-astyle">
                <img src="${bbMemo.useravatar}" class="hy-avatar">
              </a>
            </div>
            <div class="hy-intro">
              <div class="hy-name">${bbMemo.username}</div>
              <div>
                <span class="hy-time hy-text-muted">${formatDate(item.createTime)}</span>
              </div>
            </div>
          </div>
          <div class="datacont">${bbContREG}</div>
          <div class="hy-tag hy-text-muted">
            <span class="hy-location">${bbMemo.location || ""}</span>
            <span class="hy-tags-item">${bbMemo.tags || ""}</span>
            <span>
              <a data-id="${item.uid}" data-site="${artalkInit.site}" data-server="${artalkInit.server}" class="commentsLink" onclick="loadArtalk(this)">
                ${bbMemo.commentsShow ? bbMemo.commentsTitle : ""} 
                <span class="artalkCount" data-page-key="/m/${item.uid}"></span>
              </a>
            </span>
          </div>
          <div id="${item.uid}" class="comment d-none"></div>
        </div>
      </li>
    `;
  });

  var bbBefore = "<section class='bb-timeline'><ul class='bb-list-ul'>", bbAfter = "</ul></section>";
  resultAll = bbBefore + result + bbAfter;
  bbDom.insertAdjacentHTML('beforeend', resultAll);

  fetchDB();

  document.querySelector('button.button-load').textContent = '加载更多';
  window.ViewImage && ViewImage.init('.datacont img');
  window.Lately && Lately.init({
    target: '.datatime'
  });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
  const hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
  return `${year}/${month}/${day} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function loadArtalk(e) {
  let id = e.getAttribute("data-id"), site = e.getAttribute("data-site"), server = e.getAttribute("data-server");
  let artalkDom = document.getElementById(`${id}`);
  let artalkCon = "<div id='artalk'></div>";
  if (artalkDom.classList.contains('d-none')) {
    document.querySelectorAll('.comment').forEach(item => item.classList.add('d-none'));
    document.getElementById("artalk")?.remove();
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
    document.getElementById("artalk").remove();
  }
}
