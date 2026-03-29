const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  createExpense,
  getMyExpenses,
  getPendingExpenses,
  approveExpense,
  rejectExpense
} = require("../controllers/expenseController");

router.post("/",auth,createExpense);
router.get("/my",auth,getMyExpenses);
router.get("/pending",auth,getPendingExpenses);
router.put("/approve/:id",auth,approveExpense);
router.put("/reject/:id",auth,rejectExpense);

module.exports = router;