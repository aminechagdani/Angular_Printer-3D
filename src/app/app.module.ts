import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AddProduitComponent } from './add-produit/add-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { ShowProduitComponent } from './show-produit/show-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    AddProduitComponent,
    EditProduitComponent,
    ShowProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
