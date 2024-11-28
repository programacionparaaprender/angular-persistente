import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { firstValueFrom, Observable } from 'rxjs';
import { AppState } from '../../../../store/app.state';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductFacade } from '../../../../store/product/product.facade';

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
  `,
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent implements OnInit {
  title = 'angular-persistente';
  productFacade:ProductFacade = inject(ProductFacade);
  productValue:any[]=[]
  constructor(private store: Store<AppState>) {
  }
  async ngOnInit() {
    this.productFacade.loadProducts();
    this.productValue = await firstValueFrom(this.productFacade.products$);
  }
}
