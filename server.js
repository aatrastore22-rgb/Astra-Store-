const express = require('express');
const crypto = require('crypto');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf;
  }
}));

app.get('/', (req, res) => {
  res.send('Astra Store API activa');
});

const PRODUCT_MAP = {
  '110D': { diamonds: 110, clientPrice: 1250, resellerPrice: 1150 },
  '341D': { diamonds: 341, clientPrice: 4150, resellerPrice: 3550 },
  '572D': { diamonds: 572, clientPrice: 6500, resellerPrice: 590
