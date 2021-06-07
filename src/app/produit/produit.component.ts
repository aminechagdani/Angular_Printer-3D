import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProduitService} from "../services/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  public produits:any;
  public size:number=10;
  public currentPage:number=0;
  public totalPages: number | undefined;
  public pages: Array<number> | undefined;
  private catService: any;

  constructor(private produitService:ProduitService, private router:Router) { }

  ngOnInit(): void {
  this.produitService.getProduits(this.currentPage,this.size)
    .subscribe(data=>{
      // @ts-ignore
      this.totalPages=data["page"].totalPages;
      if (this.totalPages != null) {
        this.pages = new Array<number>(this.totalPages);
      }
      this.produits=data;
    },err=>{
      console.log(err);
    })
  }


  onPageProduct(i:any) {
    this.currentPage=i;
    this.ngOnInit();
  }

  onChercher(value: any) {
    console.log(value);
  }

  onEditProduct(p:any) {
    let url=p._links.self.href;

    this.router.navigateByUrl("/edit_produit/"+btoa(url));
  }
}
