const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //connection
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    //check for error
    console.log(err);
    process.exit(1);
  }
};

//export connection
module.exports = connectDB;
