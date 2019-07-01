import {
  blue,
  brown,
  cyan,
  green,
  orange,
  pink,
  purple,
  yellow,
  red,
} from '@material-ui/core/colors';

const colors = [
  blue,
  brown,
  cyan,
  green,
  orange,
  pink,
  purple,
  yellow,
  red,
];

export const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
