import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartcounts:string=''
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.cartItemcount.subscribe((data:any)=>{
      console.log(data);//3
      this.cartcounts=data
      
    })
  }

  search(event:any){
console.log(event.target.value);//value entered
this.api.searchTerm.next(event.target.value);
//to assign new value to behavoir subject use next()method


  }

}
