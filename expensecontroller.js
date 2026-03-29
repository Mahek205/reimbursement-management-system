const Expense = require("../models/Expense");

exports.createExpense = async (req,res)=>{
  const expense = await Expense.create({
    ...req.body,
    userId: req.user.id
  });

  res.json(expense);
};

exports.getMyExpenses = async (req,res)=>{
  const expenses = await Expense.find({userId:req.user.id});
  res.json(expenses);
};

exports.getPendingExpenses = async (req,res)=>{
  const expenses = await Expense.find({status:"pending"});
  res.json(expenses);
};

exports.approveExpense = async (req,res)=>{
  const expense = await Expense.findByIdAndUpdate(
    req.params.id,
    {status:"approved"},
    {new:true}
  );
  res.json(expense);
};

exports.rejectExpense = async (req,res)=>{
  const expense = await Expense.findByIdAndUpdate(
    req.params.id,
    {status:"rejected"},
    {new:true}
  );
  res.json(expense);
};