const generateMarkdown = require("./utils/generateMarkdown")
var inquirer = require("inquirer")
var axios = require("axios")
const fs = require("fs")

const questions = [
    // Username
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    
    // Repository Name
    {
        type: "input",
        message: "What is the name of the Repository?",
        name: "Repo"
    },
    
    // Title
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    
      // Description
      {
        type: "input",
        message: "What is a brief description of the project?",
        name: "description"
    },

    // Installation
    {
        type: "input",
        message: "What is needed to be installed in order to run your project?",
        name: "install"
    },
    // Usage
    {
        type: "input",
        message: "Write instructions for people to use this application.",
        name: "usage"
    },
    
    // Contributing
    {
        type: "input",
        message: "How would someone else contribute to your project?",
        name: "contributers"
    },

    // Tests
    {
        type: "input",
        message: "How would someone test your application?",
        name: "test"
    },
    // Questions
    {
        type: "input",
        message: "What are some of the FAQ or Frequently asked questions about your project?",
        name: "questions"
    }
];

function init() {
    inquirer
    .prompt(questions)
    .then(answers =>{
        axios.get("https://api.github.com/users/" + answers.username)
        .then(response =>{
            console.log(response)
            var imageURL = response.data.avatar_url
            answers.image = imageURL; 
            console.log(imageURL)
            fs.writeFile("README.md", generateMarkdown(answers), function (err){
                if  (err) {
                    throw err;
                }
            })
        })
    })
}

init();

