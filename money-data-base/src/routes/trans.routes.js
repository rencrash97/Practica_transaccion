import { Router } from "express";
import { Transaction } from "../models/transaction.js";

const transRoutes = Router();

transRoutes.get("/transaction", async (req,res) => {
    const transactions = await Transaction.findAll();
    res.json(transactions);
});

transRoutes.post("/transaction", async (req,res) => {
    const {money, comment} = req.body;
    
    const newTransaction = await Transaction.create({
        money,
        comment
    })
    
    if (!money) {
        return res.status(400).json({ message: "El monto monetario no puede estar vacio" })
    }

    res.json(newTransaction);
});

export default transRoutes;