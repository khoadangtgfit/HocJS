var jwt = require('jsonwebtoken');
var data = { username: 'nodemy' }
// var token = jwt.sign(data, 'node1234');


var token = jwt.sign(data, '1234')

console.log(token);

// var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vZGVteSIsImlhdCI6MTUxNjIzOTAyMn0.tyWjz7w2bMt2WUjVZIOrMJRExV-jnKeNVl_g5TWf5b0';
// var ketqua = jwt.verify(token, 'nodemy12345')

// console.log(ketqua);
var data = jwt.verify(token, '1234')
console.log(data);