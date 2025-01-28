# build the app
FROM node:alpine3.20 AS builder 

# set work dir
WORKDIR /usr/src/app

# copy only necessary files 
COPY package*.json ./

# install dependencies 
RUN npm install 

# copy all files (exclude using dockerignore)
COPY . .

# build nextjs application 
RUN npm run build

# run the app 
FROM node:alpine3.20

# work dir 
WORKDIR /usr/src/app

# Copy only necessary files from building stage 
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/node_modules ./node_modules

# create data dir 
RUN mkdir -p /usr/src/app/app/data

# expose default nextjs port 
EXPOSE 3000

# run command 
CMD ["npm", "run", "start"]