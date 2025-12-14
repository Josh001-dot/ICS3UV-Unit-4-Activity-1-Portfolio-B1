/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-12-14
 * @fileOverview This program prints a 10x10 grid of X's using nested for loops.
 */

for (let i = 1; i <= 10; i++) {
  let line: string = "";
  for (let j = 1; j <= 10; j++) {
    line += "X";
  }
  console.log(line);
}

console.log("\nDone.");
