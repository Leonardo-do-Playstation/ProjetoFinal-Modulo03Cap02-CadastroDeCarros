import { Component, EventEmitter, Input, Output } from '@angular/core';
import { car } from '../../Cars';

@Component({
  selector: 'app-car',
  standalone: false,
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
   
  @Input() 
    selectedCar : car = {} as car;

  @Output()  
   saveEmitter = new EventEmitter();

   save(){
     this.saveEmitter.emit(); 
   }
}
