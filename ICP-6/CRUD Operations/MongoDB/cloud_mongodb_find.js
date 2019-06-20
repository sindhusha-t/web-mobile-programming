/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://dbuser:dbpwd@cluster0-omfoe.mongodb.net/Student?retryWrites=true\'';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("Student");
    dbase.collection("newCollection").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
