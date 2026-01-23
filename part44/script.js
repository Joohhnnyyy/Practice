//js
//jsx - javascript extensible js + html

import box from './test.js';
// export const h11  = React.createElement('h1', {id:'hero',className:'hero',style: {color: 'green'}}, 'Hello World');
// export const h22 = React.createElement('h2',{style: {color: 'green'}}, 'Subheading here');
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(box);
