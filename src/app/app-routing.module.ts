import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './mainpage/main-page.component';
import { MainPageModule } from './mainpage/main-page.module';

const routes: Routes = [
  { path: '', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
