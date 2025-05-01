import { Component } from '@angular/core';
import { car } from '../../Cars';
@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  selectedCar : car = {} as car;  // Declara e inicializa uma propriedade chamada selectedCar,
                                // onde essa propriedade deve respeitar os elementos do objeto car, 
                                //e inicializa um array vazio, o declarando como um car, e passando essas,
                                //informações para  o componente filho.
  isUpdate: Boolean = false;
  idCount : number = 5;

  cars: car[] =[
    {
      id: 1,
      model: "Gol",
      mark: "Wolkswagen",
      price: 18000,
      year: 2000,
     },
     {
      id: 2,
      model: "Corolla",
      mark: "Toyota",
      price: 40000,
      year: 2009,
     },
     {
      id: 3,
      model: "Fiesta",
      mark: "Ford",
      price: 50000,
      year: 2010,
     },
     {
      id: 4,
      model: "Creta",
      mark: "Hyundai",
      price: 55000,
      year: 2012,
     }
  ]
  saveCar(){
    if(!this.isUpdate){  //Criar um novo comportamento dentro da classe CarsComponent
      this.selectedCar.id = this.idCount;
      this.idCount++;
      this.cars.push(this.selectedCar);
   }
      this.selectedCar = {} as car; //Se eu estiver atalizando um livro, entrar no else
      this.isUpdate = false;
  }
   update(selectedCar:car){
    this.selectedCar = selectedCar; //Nome da propriedade que guarda o carro é selectedCar
    this.isUpdate = true;

   }
   remove(removeCar: car){
    this.cars = this.cars.filter( c => c !== removeCar);
   }
}
