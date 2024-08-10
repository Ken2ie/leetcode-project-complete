import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.css'
})
export class InputPageComponent {
  inputNumber : number = 0;

  // Number should go beyond 8 rows, so 8

  constructor(private router : Router){}

  parseNumberToMainPage() {
    if(this.inputNumber > 8 || this.inputNumber == 0) alert("Number must be between 1 to 8")
      else{
    this.router.navigate(['pascal'], {
      queryParams: {input : this.inputNumber}
    })
    }
  }

}
