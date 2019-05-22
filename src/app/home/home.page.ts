import { Component } from '@angular/core';
import { SupermanService } from '../services/superman.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subscription : Subscription;
  dataList : any =[];
  dataRow =0;
constructor(private supSV : SupermanService, private route:Router) {
  this.showData();

}

showData() {
  this.subscription = this.supSV.supAtivity()
  .subscribe( data =>
    {
      //console.log("data:"+ data['rs'].length);
      this.dataList = data['rs'];
      
    }
    
    );
  }

    adddata(){
      this.route.navigateByUrl("add");
    }

    deletedata(sup_id){
      this.supSV.del(sup_id).subscribe();
      console.log(sup_id);
    }

    editdata(sup_id){
      this.route.navigate(['/edit',{sup_id : sup_id}]);
      console.log(sup_id);
    }
    
    }
  
    
