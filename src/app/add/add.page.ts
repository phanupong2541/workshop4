import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SupermanService} from '../services/superman.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private supSV : SupermanService ,private route:Router) { }
 
  ngOnInit() {
  }

  insert(form) {
    let sup_name = form.sup_name;
    let sup_pirce = form.sup_pirce;
    console.log(sup_pirce);
    this.supSV.insert(sup_name,sup_pirce).subscribe(
       );
       this.route.navigateByUrl("home");
  }

  

}
