import { el } from './el.js';

let cx;

export const getCx = () => cx;

class Draw {
  constructor (el) {
    this.cx = el.getContext('2d');
  }

  line(style, beginX, beginY, endX, endY) {
    this.cx.beginPath();
    this.cx.strokeStyle = style;
    this.cx.moveTo(beginX, beginY);
    this.cx.lineTo(endX, endY);
    this.cx.stroke();
    return this;
  }

  circle(style, centerX, centerY, radius) {
    this.cx.beginPath();
    this.cx.strokeStyle = style;
    this.cx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    this.cx.stroke();
    return this;
  }
}

export const draw = (id) => new Draw(el(id));
