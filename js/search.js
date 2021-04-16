<<<<<<< HEAD
var searchFunc = function (path, search_id, content_id) {
    'use strict';
    $.ajax({
        url: path,
        dataType: "xml",
        success: function (xmlResponse) {
            // get the contents from search data
            var datas = $("entry", xmlResponse).map(function () {
                return {
                    title: $("title", this).text(),
                    content: $("content", this).text(),
                    url: $("url", this).text()
                };
            }).get();
            var $input = document.getElementById(search_id);
            var $resultContent = document.getElementById(content_id);
            $input.addEventListener('input', function () {
                var str = '<ul class=\"search-result-list\">';
                var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                $resultContent.innerHTML = "";
                if (this.value.trim().length <= 0) {
                    return;
                }
                // perform local searching
                datas.forEach(function (data) {
                    var isMatch = true;
                    var content_index = [];
                    var data_title = data.title.trim().toLowerCase();
                    var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                    var data_url = data.url;
                    var index_title = -1;
                    var index_content = -1;
                    var first_occur = -1;
                    // only match artiles with not empty titles and contents
                    if (data_title != '' && data_content != '') {
                        keywords.forEach(function (keyword, i) {
                            index_title = data_title.indexOf(keyword);
                            index_content = data_content.indexOf(keyword);
                            if (index_title < 0 && index_content < 0) {
                                isMatch = false;
                            } else {
                                if (index_content < 0) {
                                    index_content = 0;
                                }
                                if (i == 0) {
                                    first_occur = index_content;
                                }
                            }
                        });
                    }
                    // show search results
                    if (isMatch) {
                        str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
                        var content = data.content.trim().replace(/<[^>]+>/g, "");
                        if (first_occur >= 0) {
                            // cut out 100 characters
                            var start = first_occur - 20;
                            var end = first_occur + 80;
                            if (start < 0) {
                                start = 0;
                            }
                            if (start == 0) {
                                end = 100;
                            }
                            if (end > content.length) {
                                end = content.length;
                            }
                            var match_content = content.substr(start, end);
                            // highlight all keywords
                            keywords.forEach(function (keyword) {
                                var regS = new RegExp(keyword, "gi");
                                match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                            });

                            str += "<p class=\"search-result\">" + match_content + "...</p>"
                        }
                        str += "</li>";
                    }
                });
                str += "</ul>";
                $resultContent.innerHTML = str;
            });
        }
    });
}
=======
"use strict";var searchFunc=function(t,a,i){$.ajax({url:t,dataType:"xml",success:function(t){var e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),r=document.getElementById(a),n=document.getElementById(i);r.addEventListener("input",function(){var f='<ul class="search-result-list">',m=this.value.trim().toLowerCase().split(/[\s\-]+/);n.innerHTML="",this.value.trim().length<=0||(e.forEach(function(t){var r=!0,n=t.title.trim().toLowerCase(),a=t.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),e=t.url,i=-1,s=-1,c=-1;if(""!=n&&""!=a&&m.forEach(function(t,e){i=n.indexOf(t),s=a.indexOf(t),i<0&&s<0?r=!1:(s<0&&(s=0),0==e&&(c=s))}),r){f+="<li><a href='"+e+"' class='search-result-title'>"+n+"</a>";var l=t.content.trim().replace(/<[^>]+>/g,"");if(0<=c){var u=c-20,o=c+80;u<0&&(u=0),0==u&&(o=100),o>l.length&&(o=l.length);var h=l.substr(u,o);m.forEach(function(t){var e=new RegExp(t,"gi");h=h.replace(e,'<em class="search-keyword">'+t+"</em>")}),f+='<p class="search-result">'+h+"...</p>"}f+="</li>"}}),f+="</ul>",n.innerHTML=f)})}})};
>>>>>>> 4cdc97bc2c9e84186cc4c0b205967907208d5e4c
