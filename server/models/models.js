const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MONGO_URI = 'mongodb+srv://papertTrail-App:mypass123@cluster0.is58e.mongodb.net/paperTrail?authSource=admin&replicaSet=atlas-10x0d9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


const userSchema = new Schema ({
  fullName: {type: String, required: true},
  userName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  categories:  [{
    category: String, 
    total: Number,
    items: [{
      description: String,
      id: {
        type: Schema.Types.ObjectId,
        ref: 'item'
      }
    }], 

  }]
})
// Example add category request 

// {
//   type: 'shoes',
//   total: 0,
//   items: []
// }

// // example add item for user
// {
//   category: 'an existing category for the current user'
//   user: 'John Do'
//   cost: 10,
//   description: 'nike shoes',
//   imageImage: 'image in string format'
// }



const User = mongoose.model('user', userSchema);

// const categorySchema = new Schema ({
//   total: Number,
//   type: String,
//   items: [{
//     description: String, 
//     id: {
//       type: Schema.Types.ObjectId,
//       ref: 'item'
//     }
//   }]
// })

// const Category = mongoose.model('category', categorySchema);

const itemSchema = new Schema ({
  cost: Number,
  description: String,
  receiptImage: {
    data: Buffer,
    contentType: String,
  } 
});

const Item = mongoose.model('item', itemSchema);

module.exports = {
  User,
  // Category,
  Item
}