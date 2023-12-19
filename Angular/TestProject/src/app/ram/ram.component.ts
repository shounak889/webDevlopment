import { Component } from '@angular/core';

@Component({
  selector: 'app-ram',
  standalone: true,
  imports: [],
  templateUrl: './ram.component.html',
  styleUrl: './ram.component.css'
})
export class RamComponent 
{
   public name : string = "";

   public display()
   {
    this.name = "ddwdwdwdd";
   }

   public dis()
   {
    return  this.name = "ojasdd";
   }

   public tat()
   {
    console.log("Tat is clicked");
   }

   public Ramse(val1 : any)
   {
     console.log(val1);
   }


}
