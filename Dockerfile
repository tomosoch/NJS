# Use the official Node.js image as the base  
FROM node:20

RUN npm install -g nodemon

# Set the working directory inside the container  
WORKDIR /app

# Copy package.json and package-lock.json to the container  
# COPY package*.json ./

# Install dependencies  
# RUN npx create-next-app --use-npm njs 
# RUN npm ci  
# RUN npm i nextjs -g

# Copy the app source code to the container  
COPY . .  


# Build the Next.js app  
# RUN npm run dev  

# Expose the port the app will run on  
EXPOSE 4444

# Start the app  
# RUN npm run build
# CMD ["npm", "run", "build"]     
# CMD ["npm", "start"]  

# # Use the official Node.js image as the base  
# FROM node:20

# # WORKDIR /

# # RUN npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"

# WORKDIR /nextjs-dashboard

# RUN npm install

# COPY . .

# # CMD ["npm", "run", "dev"]
# EXPOSE 3000