import { MongoClient,ServerApiVersion } from "mongodb";
const URI = process.env.ATLAS_URI || "";
const client = new MongoClient(URI,{
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

try {
    await client.connect()
    await client.db("admin").command({ping:1})
    console.log("Pinged your deployment. You connected to MongoDB!")
} catch(err){
    console.log(err);
}

let db = client.db("employees")

export default db;