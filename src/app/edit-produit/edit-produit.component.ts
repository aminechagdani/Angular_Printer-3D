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


  constructor(private router:Router, private activeroute:ActivatedRoute, private produitService:ProduitService) { }


  ngOnInit(): void {
    let url=atob(this.activeroute.snapshot.params.id);
    console.log(url);
  }

  onUpdateProduct(value:any) {

  }
}
