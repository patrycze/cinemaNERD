import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent {
  isSelectedArray = [];
  rows = Array.apply(null, Array(10)).map((val, idx) => idx+1);
  columns = Array.apply(null, Array(5)).map((val, idx) => idx+1);
  
 

  onPress(column: number, row: number){
    console.log(column, row);
    var index = this.isSelectedArray.findIndex(x => x.column == column && 
                                                                        x.row == row);
    console.log(index);
    
    if(index < 0) {
      console.log('add');
      if(index === -1) {
        this.isSelectedArray.push({column, row});
      }
    } else {
      console.log('remove');
      this.isSelectedArray.splice(index, 1);
    }
    console.log(this.isSelectedArray)
  }

  isColorSelected(column, row) {
    return this.isSelectedArray.findIndex(x => x.column == column && 
      x.row == row) != -1;
  }

  getData(){
    
  }

}
