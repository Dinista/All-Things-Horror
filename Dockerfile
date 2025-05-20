FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci


COPY . .


ENV PORT 3000
ENV NODE_ENV development


EXPOSE 3000


CMD ["npm", "run", "dev"]

# For production, uncomment these and comment out the dev CMD above
# RUN npm run build
# CMD ["npm", "start"]