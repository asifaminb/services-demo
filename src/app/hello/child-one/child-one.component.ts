import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
})
export class ChildOneComponent implements OnInit {
  constructor(private helloService: HelloService) {}

  ngOnInit() {}

  addToProducts() {
    this.helloService.products.push('Added a product from child one')
    console.log(this.helloService.products);
  }
}
