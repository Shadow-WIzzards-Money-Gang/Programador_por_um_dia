const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const path = require("path")
const fs = require("fs")

const app = express()
app.use(express.json())

const port = 5001

app.listen(port,()=>console.log(`Servidor rodando na porta ${port}`))