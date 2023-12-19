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
   public name = "Ramoji";

   public display()
   {
    return "Ram is Back";
   }
   
}
