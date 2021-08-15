
const loading = "|/-\\||/-\\||/-\\||/-\\||/-\\||/-\\|";

let delay = 50;
for (let i = 0; i < loading.length; i++) {
  
  setTimeout(() => {
    process.stdout.write('\r' + loading[i]);
    if (i === loading.length - 1) {
      console.log();
    }
  }, delay += 10 * i);
};