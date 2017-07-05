import _ from 'lodash';
import './style.css'

function component2() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack2'], ' ');
    element.classList.add('hello');

    return element
}

document.body.appendChild(component2());