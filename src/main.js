import './style/index.css';

function component() {
  const ele = document.createElement('div');
  const img = document.createElement('img');
  img.src = require('./assets/avatar.jpeg');
  ele.append(img);
  document.body.appendChild(ele);
}


window.onload = component;