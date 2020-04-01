import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { VievTaskComponent } from './viev-task/viev-task.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: 'view/:id', component: ViewProductsComponent },
  { path: 'task', component: ListTaskComponent},
  { path: 'task/:id', component: VievTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
