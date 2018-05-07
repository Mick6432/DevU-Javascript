// String Template Literals

let name = 'Mike'
console.clear();
// template literals use the back tick
// not the single quotes
console.log(`Hi ${name}\n`); 


let sentence = `This is really a convenience.
        You probably would never want to do something
       quite like this.   You might choose to put
      long passages of text in an external file
     and load it somehow.`;

console.log(sentence);

function getReasonCount() {return 0;}

let interpolation = `\nGive me ${getReasonCount() == 1 ? 'one good reason' : 'a few good reasons'} to try this.\n`;

console.log(interpolation);