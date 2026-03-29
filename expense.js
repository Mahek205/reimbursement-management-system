const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  amount: Number,
  category: String,
  description: String,
  date: Date,
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },
  comments: String
});

module.exports = mongoose.model("Expense", expenseSchema);