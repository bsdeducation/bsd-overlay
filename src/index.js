import './style.css';
import { button } from './button';
import { panel } from './panel';

(function (win) {
  win.$BSD = {
    button,
    panel,
  };
})(window);
