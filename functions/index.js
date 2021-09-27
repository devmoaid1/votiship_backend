
const functions= require('firebase-functions');
const express =require('express');
const router =require("./routes/PresidentRoutes");

const app =express();


app.use(express.json());

app.use('/presidents', router); 


exports.app=functions.https.onRequest(app);
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300,
  });
exports.setupdb = functions.https.onRequest(require("./setup_database"));

