/*
*/
chrome.tabs.executeScript({
  code:"var p = document.querySelector('.cs_spellingcheck .check_area p').style; p.width = '550px'; p.height = '350px'; var style = document.createElement('style'); style.textContent = '.cs_spellingcheck .check_area p .re_green {color: #fb00ff !important; font-weight: bold; }'; document.head.appendChild(style);"
});
/*
var p = document.querySelector('.cs_spellingcheck .check_area p').style; p.width = '550px'; p.height = '350px';
var font = document.querySelector('.cs_spellingcheck .check_area p .re_green').style;font.color = '#f800fc';font.fontWeight = 'bold';
*/
