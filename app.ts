/**
 * Fibonacci Number
 * Author: Iván Moreno Mendoza
 * Version: 0.1
 * Tango.IO Challenge
 */

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3066;

app.get("/", (req: Request, res: Response) => {
  res.send(
    `Welcome to Iván's Fibonacci calculator! Write /api/fibonacci/ and add a number to get the Fibonacci number.`
  );
});

app.get("/api/fibonacci", (req: Request, res: Response) => {
  res.send(`Add a number as param to get the Fibonacci number`);
});

app.get("/api/fibonacci/:numFib", (req: Request, res: Response) => {
  // Function to calculate Fibonacci number
  let fibonacci: number[] = [0, 1];

  function getFibonacci(num: number) {
    for (let i: number = 2; i < num; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
  }

  let preFormatNumber: number = +req.params.numFib;

  // Push into the array
  getFibonacci(preFormatNumber);

  // Sum last two values of the array and return it
  let newfibonacci: number[] = fibonacci.slice(-2),
    returnNumberFibonacci = newfibonacci[0] + newfibonacci[1];

  res.send(`Number of fibonacci: ${returnNumberFibonacci}`);
});

app.listen(port, () => {
  console.log(
    `Fibonacci Server running at http://localhost:${port}`,
    `Use http://localhost:${port}/api/fibonacci/ and add a number to get te Fibonacci number`
  );
});
