import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentification/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'fokontany', 
  component: MainComponent,
  canActivate:[AuthGuard],
  },
  {path: 'login', component: LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
