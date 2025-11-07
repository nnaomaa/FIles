//Ask for a file extension (.js, .py, .java, .cpp, .html) and display the programming language name.

const prompt= require('prompt-sync')();

let extension= prompt("Enter file extension (.js, .py, .java, .cpp, .html):  ");

switch (extension){
  case ".js":
    console.log("Programming language: Javascript");
    break;

  case ".py":
    console.log("Programming language: Python");
    break;

  case ".java":
    console.log("Programming language: Java");
    break;

  case ".cpp":
    console.log("Programming language: C++");
    break;

  case ".html":
    console.log("Programming language: HTML");
    break;

  default:
    console.log("Invalid");
}