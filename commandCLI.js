// init node
Node

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