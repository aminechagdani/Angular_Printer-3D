import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitComponent} from "./produit/produit.component";
import {AddProduitComponent} from "./add-produit/add-produit.component";
import {EditProduitComponent} from "./edit-produit/edit-produit.component";

const routes: Routes = [
  {
    path:"produit",
    component: ProduitComponent
  },
  {
    path:"add_produit",
    component: AddProduitComponent
  },
  {
    path:"edit_produit/:id",
    component: EditProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
