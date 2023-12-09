//

let i = 1;

while (i <= 5) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);

  i++;
}