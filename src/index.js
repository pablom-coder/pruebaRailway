import "dotenv/config";
import Server from "./services/server.js";
import { initMongoDB } from "./services/database.js";
import { application } from "express";

/* import express from 'express';
const app = express(); */

/* const init = async () => {
  await initMongoDB();
  const puerto = process.env.PORT || 8080;

  Server.listen(puerto, () => console.log(`Server up en puerto ${puerto}`));

  Server.on("error", (error) => {
    console.log("Catch de error en servidor!", error);
  });
}; 
init();
*/

const init = async () => {
  //await initMongoDB();
  const puerto = process.env.PORT || 8080;

  Server.listen(puerto, () => console.log(`Server up en puerto ${puerto}`));

  Server.on("error", (error) => {
    console.log("Catch de error en servidor!", error);
  });
}; 
init();
/* const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`Server en el puerto ${PORT}`)
})
 */

