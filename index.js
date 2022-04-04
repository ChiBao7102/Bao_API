require('dotenv').config()
const mongoose = require('mongoose')
const router = require('./routes/index');

const PORT = process.env.PORT || 3000
const initLibraries = require("./config/libraries");
const server = initLibraries();


try {
  mongoose
  .connect(process.env.DB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology:true
    }); 
    console.log('Connect mongoDB successfully');
} catch (error) {
  console.log('Failed to connect mongoDB', error);
}
router(server);

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
