// ==UserScript==
// @name         Press Telegram Paywall-be-gone!
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @require http://code.jquery.com/jquery-latest.js
// @description  removes the article paywall from presstelegram.com
// @author        xsesupremebanana
// @match        *://www.presstelegram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var body = $('.article-body').html()
    console.log("wait script")
    window.setInterval(function(){
        try{
            document.querySelector('.modal-scrollable').style.position='initial';
            document.querySelector('#ConneXt_Action_Id-115155').remove();
            document.querySelector('.connext-modal-backdrop').remove();
            document.querySelector('.article-body').remove();
            document.querySelector('.article-content-wrapper').append($.parseHTML(body)[0]);
            $("body").css('overflow', 'auto');
            console.log("done script")
        }catch(e){
        }
    }, 1000)
})();