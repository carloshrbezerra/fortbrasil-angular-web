import { EstabelecimentoListComponent } from './estabelecimento/estabelecimento-list/estabelecimento-list.component';
import { EstabelecimentoCreateComponent } from './estabelecimento/estabelecimento-create/estabelecimento-create.component';
import { ValidadoresModule } from './../../validadores/validadores.module';
import { RepresentanteService } from './services/representante.service';
import { MaterialModule } from './../../../@fury/shared/material-components.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from '../../components/message/message.service';
import { BasicRoutes } from './basico.routes';
import { ComponentsModule } from '../../components/components.module';

import { SharedService } from '../global/services/shared.service';
import { AuthGuard } from '../global/interceptors/auth.guard';

import { AuthInterceptor } from '../global/interceptors/auth.interceptor';
import { TableModule } from 'primeng/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FurySharedModule } from 'src/@fury/fury-shared.module';

import { MascaraModule } from 'src/app/mascara/mascara.module';




@NgModule({
  imports: [
    CommonModule,
    BasicRoutes,
    MascaraModule,
    MaterialModule,
    FurySharedModule,
    TableModule,
    MatPaginatorModule,
    ComponentsModule,
    MatAutocompleteModule,
    MatCardModule,
    ValidadoresModule
  ],
  declarations: [EstabelecimentoCreateComponent, EstabelecimentoListComponent
                ],
  providers: [
      UserService,
      SharedService,
      AuthGuard,
      MessageService,
      EstabelecimentoService,
      PerfilService,
      {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
      }]
})
export class BasicoModule { }
