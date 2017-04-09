import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/sign-up.component';
import { SchoolComponent } from './components/school/school.component';
import { WarlockComponent } from './components/warlock/warlock.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'warlock', component: WarlockComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'coming-soon', loadChildren: 'app/components/coming-soon/coming-soon.module#ComingSoonModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
