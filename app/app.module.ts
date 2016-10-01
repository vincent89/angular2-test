import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BannerComponent }   from './banner/banner.component';
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, BannerComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
