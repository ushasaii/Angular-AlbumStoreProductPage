import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductServiceComponent} from './product.service;

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionnComponent } from './product-descriptionn/product-descriptionn.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionnComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
