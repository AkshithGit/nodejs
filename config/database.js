const mongoose = require('mongoose');

/*const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};*/
const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/'); 
    console.log('connection to mongodb has been established');      
};

module.exports = connectDB; 
