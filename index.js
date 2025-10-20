const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://refatalhasan911_db_user:JZxbdROM2XQFNqpW@cluster0.fowtab5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const usersCollection = client.db('usersDB').collection('users');

    app.get('/users', async(req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log('new user', user);
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


    app.listen(port, () => {
      console.log(`Simple crud server is running on port ${port}`);
    });

  } catch (err) {
    console.error("Failed to connect:", err);
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Simple crud is running');
});
