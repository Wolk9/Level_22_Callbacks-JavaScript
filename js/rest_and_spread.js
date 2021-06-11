const telMijnGetallenOp = (...getallen) => {
  return getallen.reduce((eerste, volgende) => {
    return eerste + volgende;
  });
};

console.log(telMijnGetallenOp(1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1));

const telMijnGetallenAndersOp = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const getallenLijst = [1, 2, 3];

console.log(telMijnGetallenAndersOp(...getallenLijst));
