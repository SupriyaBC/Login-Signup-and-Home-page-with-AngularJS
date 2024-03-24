import { Component } from '@angular/core';
import { ComputeService } from './compute.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  q:number=0;
  r:number=0;
  bill:number=0;
  submitted:boolean=false;
  constructor(private obj:ComputeService){

  }

   
  disp(){
  
   this.submitted=true;
   this.bill=this.obj.calc(this.q,this.r);
}
}