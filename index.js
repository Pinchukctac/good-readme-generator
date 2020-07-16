const prompt = require('inquirer').createPromptModule()
const fs = require('fs')

const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js')

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName + '.md', data, error => error ? console.error(error) : console.log(`${fileName + '.md'} generated!`))
}

const init = async _ => {
  let rmObject = {}
  do {
    const { rmUser} = await prompt([
      {
        type: 'input',
        name: 'rmUser',
        message: 'What is your GitHub user name?'
      },
    ])
    rmObject = await api.getUser(rmUser)
    console.log(rmObject)
    if (!rmObject) {
      console.error('Repo not found!')
    } else {
      console.log(`${rmObject.data.login} found!`)
    }
  } while (!rmObject)
  // const ghApi = await api.getUser(rmUser)
  Object.assign(rmObject, await prompt([
{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },
  {
      type: "input",
      message: "Provide a brief description of your project.",
      name: "description" 
  },
  {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation" 
  },

  {
      type: "input",
      message: "Provide instructions and examples for use.",
      name: "usage" 
  },

  {
      type: "input",
      message: "What are guidelines for contributing to your application?",
      name: "contributions" 
  },

  {
      type: "input",
      message: "Provide instructions for how to test the application",
      name: "test" 
  },

  {
      type: "list",
      message: "What licenses apply to your project?",
      name: "license",
      choices: [
        "Apcahe", 
        "GNU LGPLv3", 
        "MIT", 
        "ISC",
        "Mozilla Public License 2.0",
        "Boost Software License 1.0",
        "The Unlicense",
      ]
    },
    
  {
      type: "input",
      message: "What is your email",
      name: "email" 
  },

  ]))
  console.log(rmObject)
  writeToFile(rmObject.title, await generateMarkdown(rmObject))

}


init()