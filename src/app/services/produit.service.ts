import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/produit.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  public host:string="http://localhost:8080";
  private data: any;


  constructor(private http:HttpClient) { }

  public getProduits(page:number,size:number){
    return this.http.get(this.host+"/produits?pages="+page+"&size="+size);
  }

  public saveResource(url:any,data:any){
    return this.http.post(url,data);
  }

  public getResource(url:any){
    return this.http.get(url);
  }
}
