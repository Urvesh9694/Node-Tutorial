const fs = require('fs');


//   #ReadFile

// // async

// fs.readFile('file.txt','utf-8',(err,data) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// // sync

// const fileContent = fs.readFileSync('file.txt','utf-8');
// console.log(fileContent);

//   # WriteFile

fs.writeFile('text.txt', 'My name is Urvesh Patel',(err) => {
    if(err){
        console.log(err)
    }
})
