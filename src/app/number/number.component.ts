import { Component, OnInit } from '@angular/core';
import { NumberService } from './number.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  number: any;
  valueNumber: any;

  constructor(private numberService: NumberService) { }

  ngOnInit() {
  }

  getNumberDecompose(){
    this.numberService.getNumberDecompose(this.valueNumber).subscribe(response => {
        this.number = response;
      }, error => {
        console.log(error);
        alert(error.error.message);
      });
  };
}
