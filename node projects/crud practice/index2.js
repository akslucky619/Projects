var fs = require('fs');
var path = require('path');
var usersDir = path.join(__dirname, 'users/');
// console.log(usersDir);

var user = {
    name: "akash",
    email: "akash@gmail.com",
    username: "akash123"
}

fs.open(usersDir + user.username + '.json', 'wx', (err, fd) => {
    console.log(err, fd);
    fs.writeFile(fd, JSON.stringify(user), (err) => {
        if(err) console.error(err);
        fs.close(fd, (err) => {
            console.log('success')
            res.end(fd);
        })
    })
});
