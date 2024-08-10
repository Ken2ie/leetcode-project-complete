import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BusinessLogicService } from '../../core/services/business-logic.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {

  
  
  constructor(private route : ActivatedRoute, private businessLogic : BusinessLogicService){}
  
  ngOnInit(): void {
    this.getInputFromRoute();
  }

  triangle !: number[][];

  getInputFromRoute(){
    this.route.queryParams.subscribe((param: any) => {
      const input = param['input'];

      console.log(input)

      if(input != null){
       this.triangle = this.businessLogic.generatePascalsTriangle(input);
      }

    })
  }

 


 

}
