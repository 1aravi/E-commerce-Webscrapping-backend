const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbUrl = "mongodb+srv://Aravind:asep123@cluster0.sfwun.mongodb.net/?retryWrites=true&w=majority";

module.exports = {MongoClient, dbUrl};