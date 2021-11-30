const sentence = "hello there from lighthouse labs";

const typewrite = function(string) {
  let string1  = string+'\n';
  let count = 0;
  for (const char of string1) {
    count += 1;
    setTimeout(() => process.stdout.write(char) , (0 + (50 * count))); 
  }
    
};

//typewrite(sentence);
typewrite('Hi how do you do?');
