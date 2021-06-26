import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../services/produit.service";
import {Produit} from "../model/produit.model";

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  public currentProduit: Produit | any;
  public data: Produit | any;
  private url: string | any;


  constructor(private router:Router, private activeroute:ActivatedRoute, private produitService:ProduitService) { }


  ngOnInit(): void {
    this.url=atob(this.activeroute.snapshot.params.id);
    this.produitService.getResource(this.url).subscribe(date=>{
      this.currentProduit=this.data;
    },error => {
      console.log(error);
    })
  }

  onEditProduct(value: any) {
    this.produitService.updateResource(this.url,value)
      .subscribe(data=>{
      alert("Mise à jour effectuée avec succes")
        this.router.navigateByUrl("/produit")
    },error=>{
      console.log(error);
    })
  }
}
