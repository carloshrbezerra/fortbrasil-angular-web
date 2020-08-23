import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from '../global/interceptors/auth.guard';
import { EstabelecimentoListComponent } from './estabelecimento/estabelecimento-list/estabelecimento-list.component';
import { EstabelecimentoCreateComponent } from './estabelecimento/estabelecimento-create/estabelecimento-create.component';


export const BASICROUTES: Routes = [

  { path: 'estabelecimento', component: EstabelecimentoListComponent, canActivate: [AuthGuard] },
  { path: 'estabelecimento/create', component: EstabelecimentoCreateComponent, canActivate: [AuthGuard] },
  { path: 'estabelecimento/:id', component: EstabelecimentoCreateComponent, canActivate: [AuthGuard] },


];

export const BasicRoutes: ModuleWithProviders = RouterModule.forChild(BASICROUTES);
