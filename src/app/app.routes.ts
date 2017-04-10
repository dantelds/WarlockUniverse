import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArenaComponent} from './components/arena/arena.component';
import {DungeonComponent} from './components/dungeon/dungeon.component';
import {LoginComponent} from './components/login/login.component';
import {SchoolComponent} from './components/school/school.component';
import {SignUpComponent} from './components/signup/sign-up.component';
import {StoreComponent} from './components/store/store.component';
import {WarlockComponent} from './components/warlock/warlock.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'arena', component: ArenaComponent},
  {path: 'dungeon', component: DungeonComponent},
  {path: 'login', component: LoginComponent},
  {path: 'school', component: SchoolComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'store', component: StoreComponent},
  {path: 'warlock', component: WarlockComponent},
  {path: 'coming-soon', loadChildren: 'app/components/coming-soon/coming-soon.module#ComingSoonModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
