import Router from "express";
import productsRouter from "./products.js";
import messagesRouter from "./messages.js";

const router = Router();

router.use("/productos", productsRouter);

router.use("/mensajes", messagesRouter);

router.get('/', (req,res)=>{
    res.send('<h1> Bienvenidos a mi App </h1>')
});

export default router;
