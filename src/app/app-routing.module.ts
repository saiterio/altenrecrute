import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from 'app/products/products.component';
import { AdminProductComponent } from 'app/admin/admin-product/admin-product.component';
const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'admin/products', component: AdminProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule { }
