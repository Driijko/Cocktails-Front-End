export default function randomRGB() {
  return randRange(0, 256);
}

function randRange(min, max) {
  if (min < 0 && max <= 0) {
    return min + Math.floor(Math.random() * (Math.abs(min) + max));
  }
  else if (min < 0 && max >= 0) {
    return Math.floor(Math.random() * (Math.abs(min) + Math.abs(max))) + min;
  }
  else if (min >= 0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}