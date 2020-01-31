const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();
const env = process.env
module.exports = {
    "type": "mongodb",
    "host": env.MONGO_HOST,
    "port": env.MONGO_PORT_NUMBER,
    "database": env.MONGO_DATABASE,
    "username": env.MONGO_USERNAME,
    "password": env.MONGO_PASSWORD,
    "ssl":  env.MONGO_IS_SSL === 'true',
    "sslCA": [fs.readFileSync(env.MONGO_SSL_CA_FILE)],
    "entities": ['src/orm/entities/**/*.ts'],
    "migrations": ['migrations/**/*.ts'],
    "synchronize": true,
}