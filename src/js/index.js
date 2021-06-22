import './modules/oneModule';
import './modules/twoModule';

import '../styles/main.scss'

console.log('index js');


var checkbox = document.querySelector("#purple");
checkbox.addEventListener("change", function(){document.body.style.background = checkbox.checked ? "mediumpurple" : "";});

