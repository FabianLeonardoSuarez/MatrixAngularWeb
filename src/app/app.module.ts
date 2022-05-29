import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { MultiplyresultComponent } from './multiplyresult/multiplyresult.component';

@NgModule({
  declarations: [AppComponent, MultiplyComponent, MultiplyresultComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
