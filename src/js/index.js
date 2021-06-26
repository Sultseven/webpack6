import './modules/oneModule';
import './modules/twoModule';

import img from '../images/image.png';
import '../styles/main.scss'

console.log('index js');

document.write(img);

var checkbox = document.querySelector("#purple");
checkbox.addEventListener("change", function(){document.body.style.background = checkbox.checked ? "mediumpurple" : "";});

