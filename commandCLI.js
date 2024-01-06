// init node
Node
//execute a do while loop in node
    >
    do {
        ...x++
        ...console.log(x)
            ...
    } while (x <= 10)
1
2
3
4
5
6
7
8
9
10
11

// Set interval in  node
setInterval(() => console.log("hello"), 1000) //using miliseconds

// With Ctrl + C or .exit or Ctrl + D you can exit from node

// process is a global object that indicate the process of node in the current pc 


// process.version said the version of node
// process.versions.v8 said the version of v8 that current installed in node
// os.userInfo() said the information of the user that is using node
{
    uid: -1,
    gid: -1,
    username: 'kevin',
    homedir: 'C:\\Users\\kevin',
    shell: null
}

// process.cwd() said the current directory of node
'E:\\Development\\04VSCode\\06-ReactJS\\nodeJS'


// node -e "console.log(10+10)" execute a command in node
20

//   node -e "console.log(os.userInfo())" execute a command in node
{
    uid: -1,
    gid: -1,
    username: 'kevin',
    homedir: 'C:\\Users\\kevin',
    shell: null
}


// saved the result of a command in a file => .save exampleSaveFile.js
>
const name = ["Juan", "Maria"]
undefined
    >
    const newNames = name.map(name => `hello ${name}`)
undefined
    >
    newNames['hello Juan', 'hello Maria'] >
    .saved
Invalid REPL keyword
    >
    .save exampleSaveFile.js
Session saved to: exampleSaveFile.js


// load file in node => .load exampleSaveFile.js
    >
    .load exampleSaveFile.js
const name = ["Juan", "Maria"]
const newNames = name.map(name => `hello ${name}`)
newNames
    .saved