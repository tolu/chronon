var root = document.body.appendChild(document.createElement('div'));
var html = require('yo-yo');
var card = require('./components/card');
var state = {
  n: 0,
  entries: [
    { time: 10.2 }
  ]
};

update();

function update () {
  html.update(root, html`<div>
    <h1>clicked ${state.n} times</h1>
    <button onclick=${onclick}>click</button>
    ${card(state)}
  </div>`)
  function onclick () {
    state.n++
    update()
  }
}
