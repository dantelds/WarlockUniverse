import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WarlockComponent } from './components/warlock/warlock.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'warlock', component: WarlockComponent },
  { path: 'coming-soon', loadChildren: 'app/components/coming-soon/coming-soon.module#ComingSoonModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
