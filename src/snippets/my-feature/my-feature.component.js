import template from './my-feature.template.html';
import { sequence, getState } from 'data/store.js';

export default (componentSocket) => {
    if (componentSocket){ run(); }

    function run(){
        componentSocket.innerHTML = template(getState());
    }
}