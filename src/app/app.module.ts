import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, GlobalService } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ChildOneComponent } from './hello/child-one/child-one.component';
import { ChildTwoComponent } from './hello/child-two/child-two.component';

@NgModule({
  imports:  [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChildOneComponent, ChildTwoComponent ],
  bootstrap: [ AppComponent ],
  providers: [GlobalService]
})
export class AppModule { }
