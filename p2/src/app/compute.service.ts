import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputeService {

calc(q:number,r:number)
{
   return q*r;
}
}
