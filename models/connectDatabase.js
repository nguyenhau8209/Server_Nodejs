const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://hauncph23182:KDCmBivkwk8nWTJI@mydatabase.inj6nec.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log("connected failure", err));

module.exports = {
  mongoose,
};
