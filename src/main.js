import './style/index.css';

function component() {
  document.body.innerHTML = '';
  const ele = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');
  img.src = require('./assets/avatar.jpeg');
  span.innerText = 'Hello webpack';
  ele.append(img);
  ele.appendChild(span);
  document.body.appendChild(ele);
  console.log('success');
}

if (module.hot) {
  module.hot.accept();
}

component();