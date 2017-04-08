import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ComingSoonComponent }    from './coming-soon.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'coming-soon', component: ComingSoonComponent }
  ])],
  exports: [RouterModule]
})
export class ComingSoonRoutingModule {}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
