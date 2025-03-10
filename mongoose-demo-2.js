const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
});

const kittySchema = new mongoose.Schema({
  name: String,
});

kittySchema.methods.speak = function () {
  const greeting = this.name ? `Meow name is ${this.name}` : "I am a kitty";
  console.log(greeting);
};

const Kitten = mongoose.model("Kitten", kittySchema);

const fluffy = new Kitten({ name: "Fluffy" });
fluffy.speak();
