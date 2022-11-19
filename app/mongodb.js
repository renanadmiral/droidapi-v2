const mongoose = require('mongoose')

const URL = 'mongodb+srv://admin:f151vdu5kGX7aPlA@droidmongodb.jxbrm6m.mongodb.net/droid-db-api'

async function connectDB(startOptions) {
    await mongoose.connect(URL)
      .then(() => { console.log('Conectou ao mongo') })
      .then(() => { startOptions() })
      .catch((error) => { console.log(error) })
 }
 
 exports.connectDB = connectDB;