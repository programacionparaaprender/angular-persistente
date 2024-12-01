import { Component, inject, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { AppState } from '../../../../store/app.state';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductFacade } from '../../../../store/product/product.facade';
import { ProductDto } from '../../../../infraestructure/dtos/products/product.dto';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  //templateUrl: './my-component.component.html',
  template: `
    <div style="text-align:center">
      <div>
        @for(product of productValue; track product){
          {{product.name}}
        }
      </div>
    </div>
    <button (click)="addNewProduct()">Add Product</button>
  `,
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent implements OnInit {
  title = 'angular-persistente';
  productFacade:ProductFacade = inject(ProductFacade);
  productValue:any[]=[]
  async ngOnInit() {
    this.productFacade.loadProducts();
    this.productValue = await firstValueFrom(this.productFacade.products$);
  }
  async addNewProduct() {
    const product: ProductDto = { name: 'New Product', description: 'New Description', amount: 100 }; // ID se generará en el Use Case
    this.productFacade.addProduct(product);
    this.productValue = await firstValueFrom(this.productFacade.products$);
  }
}
