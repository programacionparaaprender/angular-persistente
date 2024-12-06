import { Component, inject, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { AppState } from '../../../../store/app.state';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductFacade } from '../../../../store/product/product.facade';
import { ProductDto } from '../../../../infraestructure/dtos/products/product.dto';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './list-products.component.html',
  /* template: `
    <div style="text-align:center">
      <div>
        @for(product of productValue; track product){
          {{product.name}}
        }
      </div>
    </div>
    <button (click)="addNewProduct()">Add Product</button>
  `, */
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent implements OnInit {
  title = 'angular-persistente';
  productFacade:ProductFacade = inject(ProductFacade);
  productValue:any[]=[]
  fb: FormBuilder = inject(FormBuilder);
  registerForm: FormGroup;
  constructor(){
    this.registerForm = this.fb.group({ 
      id:0,
      name: ['', Validators.required], 
      description: ['', Validators.required, Validators.maxLength(32)],
      amount: [0, Validators.required]
    }); 
  }
  async ngOnInit() {
    this.productFacade.loadProducts();
    this.productValue = await firstValueFrom(this.productFacade.products$);
  }
  async addNewProduct() {
    if(this.registerForm.invalid){
      return;
    }
    try {
      const name = this.registerForm.getRawValue().name;
      const description = this.registerForm.getRawValue().description;
      const amount = this.registerForm.getRawValue().amount;
      const product: ProductDto = { 
        name: name, 
        description: description, 
        amount: amount 
      }; 
      this.productFacade.addProduct(product);
      this.productValue = await firstValueFrom(this.productFacade.products$);
      this.registerForm.reset();  
    }catch(error){

    }
  }
}
