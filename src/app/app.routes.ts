import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'character', pathMatch: 'full'},
  { path: 'character', loadChildren: 'app/character/character.module#CharacterModule' },
  { path: 'coming-soon', loadChildren: 'app/coming-soon/coming-soon.module#ComingSoonModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
