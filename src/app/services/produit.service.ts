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

  public saveResource(url:any,data:any):Observable<Produit>{
    return this.http.post<Produit>(url,data);
  }

  public getResource(url:any):Observable<Produit>{
    return this.http.get<Produit>(url);
  }

  public updateResource(url:any,data:any){
    return this.http.put(url,data);
  }
}
