const express = require('express');
const app = express();
const port = 5000;
const mysql = require('mysql');
const dbconfig = require('./dbconfig')
const conn = mysql.createConnection(dbconfig);
const cors = require('cors')

let corsOption = {
    origin: 'http://localhost:8080',
    credential: true
}

app.use(cors(corsOption));

app.listen(port, () => {
    console.log("server open");
});

//본인인증 

// app.get("/certified", async(req, res) => {

// })


//회원현황 

app.get("/experience", async(req, res) => {
    var state = {};
    
    conn.query
    ("select experience as 'experience', count(*) as count from (select case when experience_year between 0 and 1 then '0-1' when experience_year between 2 and 3 then '2-3' when experience_year between 4 and 5 then '4-5' when experience_year between 6 and 10 then '6-10' else 'more than 10' end as experience from user_arbitrator )A group by A.experience order by experience asc;", function(err, row) {
        if(err) throw err;

        console.log(row[0].experience);
        console.log(JSON.stringify(row[0].experience));
        console.log(row);

        for(var i = 0; i < row.length; i++) {
                state[row[i].experience] = row[i].count;
    
            console.log("middle : " + JSON.stringify(state));

        }
        console.log("state: " + JSON.stringify(state));
        res.send(state);
        // console.log(state);

    }) 

});

app.get("/result", async (req, res) => {
    var state = {};
    conn.query("select result_amount div 5 as result_range, count(id) as count from user_arbitrator group by result_amount div 5 order by result_range asc;", function(err, row) {
        if(err) throw err;
        for(var i = 0; i < row.length; i++) {
            state[row[i].result_range] = row[i].count;
            console.log("result middle : " + JSON.stringify(state));
        }

        console.log("state: " + JSON.stringify(state));
        res.send(state);
    })

    });
    
app.get("/rating", (req, res) => {
    var state = [{count: 0}, {count: 0}, {count: 0}, {count: 0}, {count: 0}];
    conn.query("SELECT count(*) as count from user_arbitrator group by rating order by rating asc", function(err, row) {
        if(err) throw err;
        for(var i = 0; i < state.length; i++) {
            state[i]= row[i].count;
        }

        res.send(state);
        // console.log((state));
    })
});

