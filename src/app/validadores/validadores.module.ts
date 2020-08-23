import { AteDataDirective } from './ate-data.directives';
import { ApartirDataDirective } from './apartir-data.directives';
import { BetWeenDataDirective } from './between-data.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamposIguaisDirective } from './campos-iguais.directive';
import { CpfValidadorDirective } from './cpf-validador.directive';
import { MaiorQueDirective } from './maior-que.directive';
import { ReduzTextoPipe } from './reduz-texto.pipe';
import { SafeUrlPipe } from './safe-url';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CamposIguaisDirective, CpfValidadorDirective, MaiorQueDirective, ReduzTextoPipe, SafeUrlPipe, BetWeenDataDirective, AteDataDirective, ApartirDataDirective],
  exports : [CamposIguaisDirective, CpfValidadorDirective, MaiorQueDirective, ReduzTextoPipe, SafeUrlPipe, BetWeenDataDirective, AteDataDirective, ApartirDataDirective]
})
export class ValidadoresModule { }
