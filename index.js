import fetch from "node-fetch";
import {connectToMongo} from './db.js';
import {Items} from './models/Item.js';
import express from 'express';
import item from './routes/item.js';
import cors from 'cors';

const router = express.Router();
connectToMongo();



async function getPosts(){
   const response= await fetch('https://api.wazirx.com/api/v2/tickers');
   const data =await response.json();
    console.log('Hi')
   
    let dataArr = Object.entries(data);
      for (let i=0;i<10 ;i++){
        const item = new Items({
            name: dataArr[i][1].name,
            last: dataArr[i][1].last,
            buy:dataArr[i][1].buy,
            sell:dataArr[i][1].sell,
            volume:dataArr[i][1].volume,
            base_unit:dataArr[i][1].base_unit
        });
        item.save();
        
      }
      
}

getPosts();

const app = express()
const port = 3000
app.use(cors());
app.use(express.json())

app.use('/api/item',item);
app.listen(port, () => {
  console.log(` listening on port ${port}`)
})