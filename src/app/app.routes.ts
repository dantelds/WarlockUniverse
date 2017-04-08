import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: 'app/components/login/login.module#LoginModule' },
  { path: 'warlock', loadChildren: 'app/components/warlock/warlock.module#WarlockModule' },
  { path: 'coming-soon', loadChildren: 'app/components/coming-soon/coming-soon.module#ComingSoonModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
