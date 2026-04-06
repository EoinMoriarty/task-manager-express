import { pgTable, serial, text, timestamp, pgEnum } from 'drizzle-orm/pg-core';

export const userStatusEnum = pgEnum('user_status', ['active', 'inactive', 'deleted']);

export const users = pgTable('users', {
  user_id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  password_hash: text('password').notNull(),
  created_at: timestamp('created_at').defaultNow(),
  user_status: userStatusEnum('status').notNull().default('active'),
});