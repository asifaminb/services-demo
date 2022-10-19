import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { GlobalService } from '../app.component';
import { HelloService } from './hello.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
  providers: [HelloService]
})
export class HelloComponent implements OnInit, OnDestroy {
  @Input() name: string;

  constructor(private helloService: HelloService, private globalService: GlobalService) {
    console.log('constructor => helloComponent : name = '+ this.name);
  }

  ngOnInit(){
    console.log('hello component init : name = '+ this.name);
  }

  ngOnDestroy() {
    console.log('hello component destroy');
  }
}
