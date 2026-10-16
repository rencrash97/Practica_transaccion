import express from 'express';
import { PORT } from './config.js';
import transRoutes from './routes/trans.routes.js';
import sequelize from './db.js';

import "./models/transaction.js";

const app = express();

try {
    app.use(express.json());
    app.use((req,res,next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
        next();
    });
    app.listen(PORT);
    app.use(transRoutes);

    await sequelize.sync();

    console.log(`Server en puerto ${PORT}`);

} catch (error) {
    console.log(`Hubo un error al inicializar: (Error ${error})`)
}