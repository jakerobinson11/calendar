const express = require("express");
const http = require('http');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server)
const { faker } = require('@faker-js/faker');
const mysql = require('mysql');
const ip = "127.0.0.1";
const port = 4000;
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
})
// connection mysql
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "calendar"
});


const salaries = [];
const salaries_count = 15;
//id_salarie: faker.string.alphanumeric(12) // '3e5V7'
//fullName_salarie: faker.person.fullName();
//lastName_salarie: faker.person.lastName();


for (let i = 0; i < salaries_count; i++) {
    salaries.push({
        id_salarie: faker.string.alphanumeric(12),
        fullName_salarie: faker.person.fullName(),
        // jobTitle: faker.person.jobTitle()
    });
}
//console.dir(salaries);


con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    io.on("connection", (socket) => {
        socket.on("selectDates", (info) => {
            console.dir(info);
            var sql = `INSERT INTO conges (id_salarie, start,end) 
            VALUES ('aqSfhj', '${info.start}','${info.end}')`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });
        })
    })
});


server.listen(port, ip, () => {
    console.log("Demarer sur http://" + ip + ":" + port);

})

