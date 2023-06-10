// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://translate.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //WARNING!!! YOU SHOULD CHANGE YOUR BROWSER LANGUAGE TO ENGLISH BEFORE YOU APPLY THIS SCRIPTS, CAUSE IT ONLY CAN CATCH THE TEXT "Source text".
    //if your browser display language is not english, you should change the "aria-label" attribute to match the corresponding text. find it by dev tools inspect function.
    //auto-focus on the text-field when you open a new window.
    document.querySelector('[aria-label="Source text"]').focus();
    document.querySelector('[aria-label="Source text"]').select();

    //disable default hotkeys about alt
    document.addEventListener('keydown',
                              function(ev){
        //I just can't stop alt-F4 and CTRL-W though, think they are overrides you can't change, but for ones you can change, this works
        if(ev.altKey){ev.preventDefault()}
    }
                             )

    var btn = document.createElement("button");
    btn.innerHTML = "listen";
    btn.onclick = () => {
        alert("please press [alt + e] to listen!");
        return false;
    };
    document.querySelector('[aria-label="Listen to source text"]').after(btn);
    var btn2 = document.createElement("button");
    btn2.innerHTML = "clear";
    btn2.onclick = () => {
        const container = document.querySelector('[aria-label="Source text"]');
        container.value=("");
        return false;
    };

    document.querySelector('[aria-label="Source text"]').after(btn2);
    btn2.style.display="none";
    btn.style.display="none";
    btn2.accessKey="A";
    //This is the hotKey for clearing the button

    document.querySelector('[aria-label="Listen to source text"]').accessKey="E";
    //this is the hotkey for Listening the conten

    /*Use Alt + hotkey to listen what you typed or cleard what you've typed,
    Hope this snippet program will help your learning a new langauge with google translation. */

    /*below is the css filter I used to apply on the extension: u block orign to elimiate the source text side, I only remain the definition side and read the words' definition in english.
    you can download them in here: https://ublockorigin.com
    */
    /*and also recommend you choose a fixed build of chromium browser them set's default search to google translate.then set the defalt
    search page to google chrome, here's the url I used to set:
    https://translate.google.com/?source=en&sl=en&tl=de&op=translate&text=%s
    */
    // remember to allow tampermonky to accesss your website's url. so that it can detect your webpage, and set the execution at the start of the page.



})();
