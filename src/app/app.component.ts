import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week61';
  parentCount = 0;

  addParentCount(){
    this.parentCount++;
  }

  clearInParent(val : any){
    this.parentCount = val;
  }

 
}
