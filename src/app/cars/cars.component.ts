import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less']
})
export class CarsComponent {

  inputText = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW'];

  constructor() {

  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.inputText);
    this.inputText = '';
  }
}
