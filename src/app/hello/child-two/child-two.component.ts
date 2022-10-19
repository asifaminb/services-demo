import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  constructor(private helloService: HelloService) { 

  }

  addToProducts() {
    this.helloService.products.push('Added a product from child two')
    console.log(this.helloService.products);
  }

  ngOnInit() {
  
  }

}