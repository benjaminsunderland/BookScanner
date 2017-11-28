# Compare The Market

The Aim:

- Write an application that outputs the individual words that appear in the book, and how many times that word appears in the text file.

- The second part is to also output whether the number of times each word appears is a prime number.
 
## Installation

Clone the repository by performing:

* git clone https://github.com/benjaminsunderland/CTM_Test.git

Install the dependencies by:

```sh
npm install
```

## Running the application

Run the tests by:

```sh
jasmine
```

Run the program by:

```sh
Adding these three lines at the bottom of wordCount.js:

word = new WordCount('../CTM_Test/spec/TextFiles/therailwaychildren.txt')
word.readfile()
console.log(word.printOutput())

Finally running node app/wordCount.js in terminal
```

## Technologies

* Javascript
