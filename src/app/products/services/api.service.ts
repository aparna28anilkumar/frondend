import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//to hold cart count
cartItemcount=new BehaviorSubject(0)

  //to hold serch value
  searchTerm= new BehaviorSubject('')
  

  constructor(private http:HttpClient) { 
    this.cartCount()
  }

  // BASE_URL ='http://localhost:5000'
  BASE_URL ='https://backend-ecart.onrender.com'

  //get all products from mongodb
  getAllProducts(){
    return this.http.get(`${this.BASE_URL}/products/allproducts`)
  }

  //view particular products from mongodb
  viewProduct(id:any){
return this.http.get(`${this.BASE_URL}/products/viewProduct/${id}`)
  }
  //add to wishlist
  addtowishlist(id:any,title:any,price:any,image:any){
    const body={
      id,title,price,image
    }
    return this.http.post(`${this.BASE_URL}/products/addtowishlist`,body)

  }

  //get all products from wishlist
  getwishlist(){
    return this.http.get(`${this.BASE_URL}/products/getwishlist`)
  }

  // //delet wishlist product from wishlist collection
  // deletewishlist(id:any){
  //   return this.http.delete(`${this.BASE_URL}/products/deletewishlist${id}`)
  // }

  //delet wishlist product from wishlist collection
deletewishlist(id: any) {
  return this.http.delete(`${this.BASE_URL}/products/deletewishlist/${id}`);
}

//addtocart
addtocart(product:any){
  const body={

    id:product.id,
    title:product.title,
    price:product.price,
    image:product.image,
    quantity:product.quantity
  }
  return this.http.post(`${this.BASE_URL}/products/addtocart`,body)
}

//get cart products
getcart(){
  return this.http.get(`${this.BASE_URL}/products/getcart`)
}


//cart count
cartCount(){
  this.getcart().subscribe((result:any)=>{
    this.cartItemcount.next(result.length);//3
  })
}

//delete cart
deleteCart(id:any){
  return this.http.delete(`${this.BASE_URL}/products/deletecart/${id}`)
  
}
//increment cart count
incrementCartCount(id:any){
  return this.http.get(`${this.BASE_URL}/products/increment/${id}`)
}

//decrement cart count
decrementCartCount(id:any){
  return this.http.get(`${this.BASE_URL}/products/decrement/${id}`)
}
}
