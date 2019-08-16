import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: 'car.component.html',
  styleUrls: ['./car.component.less']
})
export class CarComponent {
  name = 'Volvo';
  year = 2019;

  getName() {
    return this.name;
  }
}
