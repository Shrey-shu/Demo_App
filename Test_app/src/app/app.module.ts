import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBar } from 'src/store/top-bar/top-bar';
import { ProductList } from 'src/store/product-list/productlist'; 
import { ProductComponent } from 'src/store/product-list/product/product.component';
import { TOH } from 'src/TOH/toh.component';
import { Heros } from 'src/TOH/heroslist/heros.component';
import { HeroDetail } from 'src/TOH/heroDetail/heroDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBar,
    ProductList,
    ProductComponent,
    TOH,
    Heros,
    HeroDetail
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
