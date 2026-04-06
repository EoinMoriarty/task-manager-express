import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from './index.js';

export const runMigrations = async () => {
    console.log('Running migrations...');
    try {
        await migrate(db, { migrationsFolder: './migrations' });
        console.log('Migrations completed!');
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
};