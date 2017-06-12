import {map} from 'lodash';
import template from './numberlist.hbs';

let numbers = map ([1, 2, 3, 4, 5, 6], n => n*n);

document.querySelector('#app-container').innerHTML =  template({ numbers });
