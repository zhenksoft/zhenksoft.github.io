// build time:Tue Mar 03 2020 14:41:46 GMT+0800 (China Standard Time)
$(function(){var e=$('<div class="code_lang" title="代码语言"></div>');$("pre").before(e);$("pre").each(function(){var e=$(this).attr("class");if(!e){return true}var r=e.replace("line-numbers","").trim().replace("language-","").trim();$(this).siblings(".code_lang").text(r)})});
//rebuild by neat 