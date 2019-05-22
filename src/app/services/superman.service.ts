import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Item {
  
}

@Injectable({
  providedIn: 'root'
})
export class SupermanService {

  apiUrl: string= "http://localhost/sup/process/crud_cateactivity.php"

  constructor(public http: HttpClient) { }


  supAtivity(){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'select'
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }

  get(sup_id : any){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'selectone',
      'sup_id' : sup_id
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }
  
  insert( sup_name: string, sup_pirce: string ){
    console.log(sup_name+sup_pirce)
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'insert',
      'sup_name': sup_name,
      'sup_pirce': sup_pirce
    }
    console.log(sup_name+sup_pirce)
    return this.http.post(this.apiUrl, data, { headers: header });
  }

  del( sup_id : any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'delete',
      'sup_id' : sup_id
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
  
  edit( sup_id: any , sup_name: string, sup_price : any 	){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'edit',
      'sup_id' : sup_id ,
      'sup_name': sup_name,
      'sup_price': sup_price
     
     
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
}
