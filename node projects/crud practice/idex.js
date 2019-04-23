var fs = require('fs');
var path = require('path');
var usersDir = path.join(__dirname, 'users/');
// console.log(usersDir);

var user = {
    name: "akash",
    email: "naman@gmail.com",
    username: "naman123"
}

// fs.open(usersDir + user.username + '.json', 'wx', (err, fd) => {
//     console.log(err, fd);
//     fs.writeFile(fd, JSON.stringify(user), (err) => {
//         if(err) console.error(err);
//         fs.close(fd, (err) => {
//             console.log('success')
//         })
//     })
// });

// fs.readFile("./users/naman123.json", (err, data) => {
//     if (err) console.error(err)
//     console.log(data.toString())
// })

// fs.unlink("./users/naman123.json", (err)=> {
//     if (err)
//     console.log("deleted")
// })

fs.open("./users/naman123.json", "r+", (err, fd)=>{
    fs.ftruncate(12,0, (err)=>{
        if (err) console.log(err);

        fs.writeFile(fd, JSON.stringify(user), (err) => {
            if(err) console.error(err);
            fs.close(fd, (err) => {
                console.log('success')
            })
        })
    })
})