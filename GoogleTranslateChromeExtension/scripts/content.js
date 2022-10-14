// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://translate.google.com.tw/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com.tw
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  // Your code here...

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
})();