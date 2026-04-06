import express from 'express';
import dotenv from 'dotenv';
import { db } from './database/index.js';
import { users } from './database/schema.js';
import { runMigrations } from './database/migrate.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

await runMigrations();

app.use(express.json());


app.get('/', async (req, res) => {
    try {
        const allUsers = await db.select().from(users); 
        res.json({allUsers});
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

app.listen(port, () => {
    console.log(`🚀 Server glowing at http://localhost:${port}`);
    console.log(`Is this the Krusty Krab?`);
    console.log(`No, this is Patrick.`);
});