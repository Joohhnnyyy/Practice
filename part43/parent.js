import div from './test.js';
import circle from './test1.js';
function parent(){
    return React.createElement('div',{id: "parent", className: "parent"}, [div(), circle()]);
}
export default parent;