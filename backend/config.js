import dotenv from 'dotenv';
dotenv.config();

console.log(`Node Environemnt: ${process.env.NODE_ENV}`)
let API_PORT = '';
if (process.env.NODE_ENV === 'production') {
    API_PORT = process.env.API_PORT_PRODUCTION;
} else {
    API_PORT = process.env.API_PORT_DEVELOPMENT;
}

export default {
    API_PORT
};