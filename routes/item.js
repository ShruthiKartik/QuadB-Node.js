import express from 'express';
import {connectToMongo} from '../db.js';
import {Items} from '../models/Item.js';

const router = express.Router();
connectToMongo();

const app = express()
const port = 3000

app.use(express.json())
router.get('/', async (req, res) => {
    try {
        const items = await Items.find();
        res.json(items)
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

export default router