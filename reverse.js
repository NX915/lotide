const reverse = function(arg) {
  for (let i = 2; i < arg.length; i++) {
    let txt = '';
    for (let j = arg[i].length - 1; j >= 0; j--) {
      txt += arg[i][j];
    }
    console.log(txt);
  }
};

const arg = process.argv;
reverse(arg);