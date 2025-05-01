import { Component, EventEmitter, Input, Output } from '@angular/core';
import { car } from '../../Cars';

@Component({
  selector: 'app-car',
  standalone: false,
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
   
  @Input()  // Usado para dizer que o atributo selectedCar é de fora, e é nescessario passar o car para usa-lo
    selectedCar : car = {} as car;

  @Output()  //Usado para enviar uma mensagem ao componente pai, sendo o oposto do acima, vindo de dentro
   saveEmitter = new EventEmitter();

   save(){
     this.saveEmitter.emit(); //Método que vai emitir ao componente pai que os carros foram salvos
   }
}
