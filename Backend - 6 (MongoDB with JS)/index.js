// Connection setup in MongoDB with JS
const mongoose = require('mongoose');
main()
  .then((res) => {
    console.log("connection successful");
  })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Creating Schema for MongoDB :- in SQL it was defining table, here it's for collections
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//Models in MongoDB :- Model in mongoose is a class with which we construct documents.
const User = mongoose.model("User",userSchema);



// Insert into Collections

// 1. insertOne
const user2 = new User({
  name: "Eve",
  email: "eve@yahoo.in",
  age: 48
});

user2.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 2. insertMany
User.insertMany([
  {name: "Tony", email: "tonay@gmail.com", age: 50},
  {name: "Peter", email: "peter@gmail.com", age: 30},
  {name: "Bruce", email: "bruce@gmail.com", age: 47},
]).then((res) => {
  console.log(res);
});




// Find in MongoDB

// 1. Finding at one go
User.find({})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});

// 2. using conditions
User.find({age:{$gt: 48}})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});

// 3. finding one document using findOne()
User.findOne({age:{$gt: 46}})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});



// Update in MongoDB

//1. updateOne()
User.updateOne({ name: "Bruce"},{age: 49})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})

//2. updateMany()
User.updateMany({age: {$gt: 48}},{age: 55})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});

// 3. findOneAndUpdate()
User.findOneAndUpdate({ name: "Bruce"},{ age: 35})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})

// 4. findOneAndUpdate
User.findByIdAndUpdate(
  "6a3f894374ffe54ab9b60c65",
  { age: 35 },
  { new: true }
)
.then(res => console.log(res))
.catch(err => console.log(err));

// Delete in MongoDB

// 1. deleteOne()
User.deleteOne({ name: "Bruce"})
.then((res) => {
  console.log(res);
})

// 2. deleteMany()
User.deleteMany({ age: 48})
.then((res) => {
  console.log(res);
});

// 3. findByIdAndDelete()
User.findByIdAndDelete("6a3f894374ffe54ab9b60c63")
.then((res) => {
  console.log(res);
});

// 4. findOneandDelete()
User.findOneAndDelete({ name: "Bruce" })
  .then(res => {
    console.log("Deleted document:", res);
  })
  .catch(err => {
    console.log(err);
  });



