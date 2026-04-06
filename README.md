# task-manager-express

## INITIALISATION, INSTALLATION, & SETUP

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

# GitHub Practices and Procedures:

[Stage 1]
git checkout main & git pull: 
    (Retrieve latest code from main.)

[Stage 2]
git checkout -b feature/add-auth: 
    (Create a new branch for a specific feature.)

[Stage 3]
< WORK >

[Stage 4]
git add . & git commit -m "feat: add argon2 password hashing": 
    (Save locally.)

[Stage 5]
git push origin feature/add-auth: 
    (Push the branch to main.)

[Stage 6]
Pull Request (PR): 

[Stage 7]
Merge: 
    (Merge into the main.)
