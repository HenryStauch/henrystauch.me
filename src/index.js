import $ from 'jquery';
import './style.scss';

let num = 0;
function timeDisplay() {
  $('#main').html(`You've been on this site for ${num} seconds.`);
  num += 1;
}

setInterval(timeDisplay, 1000);
