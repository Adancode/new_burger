var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: "bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "szn2mdy25ng5rmz5",
    password: "paxv6n15duzgnv94",
    database: "pccc2f35ahiug559"
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
