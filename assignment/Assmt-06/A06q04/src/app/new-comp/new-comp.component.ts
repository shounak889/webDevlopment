import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  standalone: true,
  imports: [],
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css'
})
export class NewCompComponent {
  public name = "Marvellous";

  public dataType()
  {
    return typeof this.name;
  }
}
