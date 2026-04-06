# 1. Initialize the project 
“pnpm init”

# 2. Install production dependencies 
“pnpm add express pg zod dotenv cors argon2 helmet”

# 3. Install development tools 
“pnpm add -D typescript @types/node @types/express @types/pg @types/cors tsx”

# 4. Initialise TypeScript
“npx tsc --init”

# 5. Amend the tsconfig.json to define rootDir and outDir 
"rootDir": "./src"	&	"outDir": "./dist" 

# 6. Added the following to the package.json
"scripts": {
  "dev": "tsx watch src/index.ts",
  "build": "tsc",
  "start": "node dist/index.ts"
}