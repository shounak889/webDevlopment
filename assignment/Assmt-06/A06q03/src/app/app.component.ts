import { Component } from '@angular/core';


// here we have used th `` tilt symbol above the tab key  and didi the inline css and html insted of giving the path for it 
@Component({
  selector: 'app-root',
  template: `
  <h1 class="dj">
    Marvellous Infosystems</h1>
  
  <h1 class="bravo">
    Enter something that is in your mind</h1>
  
  <input [(ngModel)] = "n3" type="text">
  
  <h1 class="ok">
    You are typing ::: {{n3}}</h1>
  
  <router-outlet></router-outlet>
  `,
  styles: `.dj
  {
      color: blue;
  }
  
  .bravo
  {
      color: darkturquoise;
  }
  
  .ok
  {
      color: lightseagreen;
  }`
})
export class AppComponent {
  public n3 = "";
}
