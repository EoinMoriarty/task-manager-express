import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Database Connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

app.get('/', async (req, res) => {
    try {
        const dbRes = await pool.query('SELECT NOW()');
        res.json({
            status: "Heartbeat Alive",
            database_time: dbRes.rows[0].now
        });
    } catch (err) {
        res.status(500).json({ status: "Heartbeat Failing", error: err });
    }
});

app.listen(port, () => {
    console.log(`🚀 Server glowing at http://localhost:${port}`);
});

app.listen(port, () => {
    console.log(`Is this the Krusty Krab?`);
});

app.listen(port, () => {
    console.log(`No, this is Patrick.`);
});
    