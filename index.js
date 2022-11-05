const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5001;

//middleware
app.use(cors());
app.use(express.json());

// user : dbuser2
// pass : EUnuhrGSO9StDLbu


const uri = "mongodb+srv://dbuser2:EUnuhrGSO9StDLbu@cluster0.1evq2bz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){

    try{
        const productCollection = client.db('mongodbProductsDb').collection('products');
        const product = {
            name : '13 pro max',
            price : 'BDT-155,000'
        }
        const result = await productCollection.insertOne(product);
        console.log(result);

    }
    finally{

    }

}
run().catch(err=>console.log(err))




app.get('/',(req,res)=>{
    res.send('hello from server')
})

app.listen(port,()=>{
    console.log(`listen to post ${port}`);
})
