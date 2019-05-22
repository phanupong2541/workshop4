import { Component, OnInit } from '@angular/core';
import {SupermanService} from '../services/superman.service';

import {Subscription} from 'rxjs';
import {Router , ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  sup_id : string;

  constructor(private supSV : SupermanService ,private route:Router,private router: ActivatedRoute) {
    this.showData(); 
  }
  showData(){
    let sup_id = this.sup_id = (this.router.snapshot.paramMap.get('sup_id'));
    this.subscription=this.supSV.get(sup_id)
    .subscribe(
      data =>{
        this.dataList = data['rs'];
      }
    )
  }

  edit(form) {
    let sup_id = this.sup_id = (this.router.snapshot.paramMap.get('sup_id'));
    let sup_name = form.sup_name;
    let sup_pirce = form.sup_pirce;
   
    
    this.supSV.edit(sup_id , sup_name, sup_pirce).subscribe(
      
       );
       this.route.navigateByUrl("home");
       console.log(sup_id  + sup_name + sup_pirce);
       
  }

  ngOnInit() {
  }

}