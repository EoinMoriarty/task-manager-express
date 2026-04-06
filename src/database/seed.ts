import 'dotenv/config';
import { db } from './index.js';
import { users } from './schema.js';
import argon2 from 'argon2';

async function seed() {

    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined. Check your .env file!");
    }
    console.log('Seeding database...');

    const hashedPassword = await argon2.hash('password123');

    await db.insert(users).values([
        {
            email: 'eoin@taskmanager.com',
            password_hash: hashedPassword,
            user_status: 'active',
        },
        {
            email: 'guest@taskmanager.com',
            password_hash: hashedPassword,
            user_status: 'inactive',
        }
    ]);

    console.log('Seeding finished!');
    process.exit(0);
}

seed().catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
});