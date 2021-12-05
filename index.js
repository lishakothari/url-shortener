const { MongoClient } = require("mongodb");

const client = new MongoClient(
    "mongodb+srv://lishakothari:Lisha123@cluster0.iadbi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

client.connect().then((mClient) => {
    const db = mClient.db();

    db.collection("contact").insertOne(
        {
            name :"Lisha kothari",
            phone: "7208212892",
            email:"lishakothari02@gmail.com" 
        },

    ).then(() => {
        console.log("new");
    });

});