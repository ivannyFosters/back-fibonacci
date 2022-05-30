# Iván's Fibonacci Calculator Backend

Instructions to install Iván's Fibonacci Calculator.

Step 1: Download and install with clone

    git clone https://github.com/ivannyFosters/back-fibonacci.git)

Step 2: Install dependences

This project need multiple dependences. Express with DotEnv and TypeScript. Mocha and Chai for tests
      
    npm install
  
Now run Node to load de calculator

    npm start
  
Console will show 

  Fibonacci Server running at http://localhost:3066
  Use http://localhost:3066/api/fibonacci/ and add a number to get te Fibonacci number
  
  
Usage examples:

  http://localhost:3066/api/fibonacci/6
  
  http://localhost:3066/api/fibonacci/8
  
  http://localhost:3066/api/fibonacci/23

For Unit and Integration tests load:

    npm run test
