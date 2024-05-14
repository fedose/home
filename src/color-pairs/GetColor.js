import Colors from './Colors';

function GetColor() {
  const colors = Colors;

  return colors[Math.floor(Math.random()*colors.length)];
}

export default GetColor;