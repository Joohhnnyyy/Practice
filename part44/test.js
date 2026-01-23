
const h11  = React.createElement('h1', {id:'hero',className:'hero',style: {color: 'green'}}, 'Hello World');
const h22 = React.createElement('h2',{style: {color: 'green'}}, 'Subheading here');
const h1 = React.createElement('h1', { id: 'hero', className: 'hero', style: { color: 'white' } }, 'Hello World');
const h2 = React.createElement('h2', { style: { color: 'white' } }, 'Subheading here');
const box = React.createElement('div', {className: 'parent' }, [h1, h2,h11,h22 ]);
export default box;