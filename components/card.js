var html = require('yo-yo');

function render(entries){
  return entries.map( entry => {
    return html`
      <div>
        <strong>Time: ${entry.time}</strong>
      </div>
    `;
  });
}

module.exports = ({entries}) => {
  return html`
    <div class="card">
      <h1>Card</h1>
      ${render(entries)}
    </div>
  `;
};
