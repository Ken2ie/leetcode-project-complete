import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessLogicService {

  constructor() { }

  triangle! : number[][];

   generatePascalsTriangle(numRows: number): number[][] {
     this.triangle = [];

    for (let i = 0; i < numRows; i++) {
        const row: number[] = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = this.triangle[i - 1][j - 1] + this.triangle[i - 1][j];
        }
        this.triangle.push(row);
    }
    
    console.log(this.triangle);
    return this.triangle;
}
}
