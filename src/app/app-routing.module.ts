import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { UserResolver } from './reolver.resolver';
//can have multiple
const routes: Routes = [
  {
    path: 'djilas',
    component: ComponentComponent,
    resolve: { user: UserResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
