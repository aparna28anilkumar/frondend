import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
//to hold particular id of the  product
  productId:any
  //to hold particular details from product
  product:any={}
constructor(private viewActivatedRoute:ActivatedRoute,private api: ApiService){}
//Activated routes is to get path parameter from route
ngOnInit(): void {
  this.viewActivatedRoute.params.subscribe((data:any)=>{
    console.log(data);//id:"6"
    console.log(data.id);//6
    this.productId=data.id
    
    //view particular product details
    this.api.viewProduct(this.productId).subscribe((result:any)=>{
      console.log(result);
      this.product=result;
      

    })
  })
}

//add to wishlist
addtowishlist(){
  const{id,title,price,image}=this.product

  //api call
  this.api.addtowishlist(id,title,price,image).subscribe((result:any)=>{
    alert(result);
  },
  
  (result:any)=>{
    alert(result.error)
  })
}

//add to cat
addtocart(product:any){
  Object.assign(product,{quantity:1})
  console.log(product);
  this.api.addtocart(product).subscribe((result:any)=>{
    this.api.cartCount()
    alert(result)//add to car
  },
 (result:any)=>{
  alert(result.error)//error
 } )
  
}
}
