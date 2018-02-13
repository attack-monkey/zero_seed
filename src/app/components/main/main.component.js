import template from './main.template.js';
import { sequence, getState } from 'data/store.js';
import subComponent from './sub/sub.component.js';

export default (componentSocket) => {
    if (componentSocket){ run(); }

    function run(){
        componentSocket.innerHTML = template(getState());

        subComponent(document.querySelector('#sub-component'));
    }
    
}