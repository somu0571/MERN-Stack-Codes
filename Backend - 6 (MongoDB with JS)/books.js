const mongoose = require('mongoose');
main()
  .then((res) => {
    console.log("connection successful");
  })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// Using Schema Type Validation
const bookScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20   // Schema Type Options
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1,"Price is too low for Amazon selling"],  // built - in validators & used for updating & error handling
    },
    discount: {
        type: Number,
        default: 0 // Schema Type Options
    },
    category: {
        type: String,
        enum: ["Fictional","Non-Fictional"]  // Schema Type Options
    },
    genre: [String] // Schema Type Options
})

const Book = mongoose.model("Book",bookScheme);

let book1 = new Book({
    title: "Gone Girl",
    price: 1200
});

book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})