# Compare The Market

The Aim:

- Write an application that outputs the individual words that appear in the book, and how many times that word appears in the text file.

- The second part is to also output whether the number of times each word appears is a prime number.
 
## Installation

* Make sure you've got node.js installed.
* Clone the repository below to your local computer

```sh
git clone https://github.com/benjaminsunderland/CTM_Test.git
```

Install the dependencies by:

```sh
npm install
```

## Tests

This application has been written using Test Driven Development.

Run the tests by:

```sh
jasmine
```

Run the program by:

```sh
Adding these three lines at the *bottom of wordCount.js*:

word = new WordCount('../CTM_Test/spec/TextFiles/therailwaychildren.txt')
word.readfile()
console.log(word.printOutput())

Finally running node app/wordCount.js in  terminal
```

## Technologies

* Javascript
* TDD with Jasmine
* Used jasmine-spec-reporter for more informative results

## My Approach

- I broke the challenge apart. What I noticed first was there were two requirements. Firstly, the application needed to **count** each individual word. Secondly, the application needed to output whether the number of times each word appears is a **prime** number.
- I began by thinking about the single responsibility principle. How many modules would I need? What purpose would each module have?
- Which module would hold my dependency injections?
- It was important to me to first program an application that could work and then start extracting modules out of it.



As someone who has mostly used Ruby throughout their time being a developer, adjusting to the syntactic way of javascript was proving to be difficult at the beginning of the challenge. It was really important that I spent the first day understanding Javascript syntax, it's **modular patterns** and  the **file System Module**.

Upon understanding these, I started to write out my first module. The first function read the contents of the file and stored them in a variable in the *WordCount* constructor. I then needed to format the text. An example of what I did was by converting all non word characters to spaces. Another being by splitting the text with continuous spaces as the delimiter. I then finally passed this array into a Count function which would convert this datatype into a hash with 'key, value' pairs ('word: number')  I subsequently created the second module which contained a function that could be passed a number and would return 'true or false' depending on it's value.
x
I started to realise it was important to start extracting out each of these formatting functions into its own module. By doing this, I was able to refactor 'WordCount' to be more of a controller and interface. One function could now read the contents and store them. The other function **printOutput** calls functions from the **formattext** module and outputs the hash.

## What am I pleased with

- My understanding of Javascript over the last few days has dramatically increased.
- Very pleased that I managed to program a finished application .
- I'm also pleased with the test driven approach I took.

## What would I like to include in the future

- I would have loved to include **Istanbul** in this project for code coverage. I was finding it difficult to configure and install. This was one of the first times using NodeJS and we had limited time for this project.
- The output could be formatted in a much more aesthetically pleasing way.

## What you will see

<img align="center" width="400" height="600" src="./CTM/public/assets/programoutput.png">
