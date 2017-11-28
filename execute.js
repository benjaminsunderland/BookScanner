var WordCount= require("./lib/wordCount.js");

word  = new WordCount('../CTM_Test/spec/TextFiles/therailwaychildren.txt')
word.readfile()
console.log(word.printOutput())
