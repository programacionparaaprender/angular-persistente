import { Routes } from '@angular/router';
import { MyComponentComponent } from './presentation/components/my-component/my-component.component';
import { ListProductsComponent } from './presentation/components/products/list-products/list-products.component';

export const routes: Routes = [
    { path: 'component' , component: MyComponentComponent},
    { path: 'list-products' , component: ListProductsComponent},

];
