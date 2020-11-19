export default function getRandom(min, max) {
  const rand = Math.random() * (max - min) + min;
  return Math.round(rand);
}
