// Global object in node
console.log(__dirname); //directory name => E:\Development\04VSCode\06-ReactJS\nodeJS

console.log(__filename); //file name => E:\Development\04VSCode\06-ReactJS\nodeJS\globals.js

console.log(module); // separate code in modules
// {
//       id: '.',
//       path: 'E:\\Development\\04VSCode\\06-ReactJS\\nodeJS',
//       exports: {},
//       filename: 'E:\\Development\\04VSCode\\06-ReactJS\\nodeJS\\globals.js',
//       loaded: false,
//       children: [],
//       paths: [
//         'E:\\Development\\04VSCode\\06-ReactJS\\nodeJS\\node_modules',
//         'E:\\Development\\04VSCode\\06-ReactJS\\node_modules',
//         'E:\\Development\\04VSCode\\node_modules',
//         'E:\\Development\\node_modules',
//         'E:\\node_modules'
//       ]
//     }

console.log(require) //use code from other files