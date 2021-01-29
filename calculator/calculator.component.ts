import { Component} from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})



export class CalculatorComponent{

  public number1 : number;
  public number2 : number;
  public result : number;

  add(){
    this.result = this.number1 + this.number2;
  }
  subtract(){
    this.result = this.number1 - this.number2;
  }
  multiply(){
    this.result = this.number1 * this.number2;
  }
  divide(){
    this.result = this.number1 / this.number2;
  }
}
