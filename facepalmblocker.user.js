// 2011-11-02
// version 0.2
// author - Alder (aleksey.derkach@gmail.com)
// ==UserScript==
// @name          Facepalm Vkontakte blocker
// @namespace     vkontakteBlocker
// @description   Block some stupid communities in your news.
// @include       http://vk.com/feed?section=posts
// @include       http://vkontakte.ru/feed?section=posts
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
  
  $('#feed_wall').bind('DOMNodeInserted', function(event) {
      var blocks = new Array();
      blocks[0] = "Трахни нормальность";
      blocks[1] = "TrollFace | Official page |";
      blocks[2] = "Покорми Мозг";
      blocks[3] = "Прикольные статусы новый год 2012";
      blocks[4] = "40 КГ";
      blocks[5] = "Публичный дом. 18+";
      blocks[6] = "- А ты я вижу дура... - А ты я вижу плохо видишь";

      if (event.type == 'DOMNodeInserted') {
          $('div.feed_row').each(function (index, item) {
              for (var j = 0; j < blocks.length; j++)
              {
                var block = blocks[j];
                if ($(item).find('.published_by').text().indexOf(block) != -1) {
                  item.style.display = 'none';
                  break;
                }
              }
          });
      } else {
        //
      }
  });  
}

// load jQuery and execute the main function
addJQuery(main);
