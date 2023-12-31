// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(allProducts:any[],searchTerm:string,propertyName:string): any[] {
//     const result:any[]=[];
//     if(!allProducts||searchTerm==""||propertyName==""){
//       return allProducts;
//     }

//     allProducts.forEach((item:any)=>{
//       if(item[propertyName].trim().toLowerCase().includes(searchTerm.trim().toLocaleLowerCase())){
//         result.push

//       }
//     })
//     return result;
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allProducts: any[], searchTerm: string, propertyName: string): any[] {
    const result: any[] = [];
    if (!allProducts || searchTerm === "" || propertyName === "") {
      return allProducts;
    }

    allProducts.forEach((item: any) => {
      if (item[propertyName].trim().toLowerCase().includes(searchTerm.trim().toLocaleLowerCase())) {
        result.push(item); // Add 'item' to the result array
      }
    });

    return result;
  }

}

