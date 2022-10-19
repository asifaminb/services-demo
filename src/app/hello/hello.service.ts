import { Component, Input, OnDestroy, OnInit, Injectable } from '@angular/core';

@Injectable()
export class HelloService implements OnDestroy{
  public products = ['Product in the Hello Service'];

  constructor() {
    console.log('localService is construct');
  }

  ngOnDestroy() {
    console.log('localService is destroy');
  }
}