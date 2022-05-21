// ==UserScript==
// @name         Press Telegram Paywall-Yeet
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  removes the article paywall from presstelegram.com
// @author       xsesupremebanana
// @match        *://www.presstelegram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const body = document.querySelectorAll('.article-body')
    console.log("wait script")
    window.setInterval(function(){
        try{
            document.querySelector('.modal-scrollable').style.position='initial';
            document.querySelector('#ConneXt_Action_Id-115155').remove();
            document.querySelector('.connext-modal-backdrop').remove();
            document.querySelector('.article-body').remove();
            document.querySelector('.article-content-wrapper').appendChild(body[0]);
            document.querySelector("body").style.overflow = 'auto';
            console.log("done script")
        }catch(e){
        }
    }, 1000)
})();