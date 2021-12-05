const { MongoClient } = require("mongodb");

const client = new MongoClient(
    "mongodb+srv://<username>:<password>@cluster0.iadbi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

client.connect().then((mClient) => {
    const db = mClient.db();

    db.collection("contact").insertOne(
        {
            name :"Lisha Kothari",
            phone: "8393231456",
            email:"lishakothari02@gmail.com" 
        },

    ).then(() => {
        console.log("new");
    });

});
