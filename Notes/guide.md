#

##  A   Initialisation, Installation and Set Up

### 1. Initialize the project 
“pnpm init”

### 2. Install production dependencies 
“pnpm add express pg zod dotenv cors argon2 helmet”

### 3. Install development tools 
“pnpm add -D typescript @types/node @types/express @types/pg @types/cors tsx”

### 4. Initialise TypeScript
“npx tsc --init”

### 5. Amend the tsconfig.json to define rootDir and outDir 
"rootDir": "./src"	&	"outDir": "./dist" 

### 6. Added the following to the package.json
"scripts": {
  "dev": "tsx watch src/index.ts",
  "build": "tsc",
  "start": "node dist/index.ts"
}

##  B   Minimum Viable Product Containerised 

### Environment 

Create a .env file
Create a .gitignore file

### Containerisation (Infrastructure)

Create a Dockerfile
Create a docker-compose.yml
Create as .github/workflows/ci.yml

### Minimum Viable Product (Application)

src/index.ts 

### Database Construction 

Core ORM and Postgres driver (and) Development tools for migrations and type generation
  pnpm add drizzle-orm pg
  pnpm add -D drizzle-kit @types/pg

Define the Schema 
  src/db/schema.ts

Drizzle Configuration
  drizzle.config.ts