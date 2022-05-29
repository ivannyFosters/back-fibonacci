"use strict";
/**
 * Fibonacci Number
 * Author: Iván Moreno Mendoza
 * Version: 0.1
 * Tango.IO Challenge
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3066;
app.get('/', (req, res) => {
    res.send(`Welcome to Iván's Fibonacci calculator! Write /api/fibonacci/ and add a number to get the Fibonacci number.`);
});
app.get('/api/fibonacci', (req, res) => {
    res.send(`Add a number as param to get the Fibonacci number`);
});
app.get('/api/fibonacci/:numFib', (req, res) => {
    // Function to calculate Fibonacci number
    let fibonacci = [0, 1];
    function getFibonacci(num) {
        for (let i = 2; i < num; i++) {
            fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        }
        return fibonacci;
    }
    let preFormatNumber = +req.params.numFib;
    // Push into the array
    getFibonacci(preFormatNumber);
    // Sum last two values of the array and return it
    let newfibonacci = fibonacci.slice(-2), returnNumberFibonacci = newfibonacci[0] + newfibonacci[1];
    res.send(`Number of fibonacci: ${returnNumberFibonacci}`);
});
app.listen(port, () => {
    console.log(`Fibonacci Server running at http://localhost:${port}`);
    console.log(`Use http://localhost:${port}/api/fibonacci/ and add a number to get te Fibonacci number`);
});
