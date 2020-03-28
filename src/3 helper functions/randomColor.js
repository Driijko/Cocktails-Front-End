import randRange from './randRange';

export default function randomColor() {
  return `${randRange(0, 256)}, ${randRange(0, 256)}, ${randRange(0, 256)}`;
}

