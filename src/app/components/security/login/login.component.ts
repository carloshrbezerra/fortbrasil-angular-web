import { MessageService } from './../../message/message.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../modules/basico/services/user.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../modules/basico/domain/usuario.model';
import { SharedService } from 'src/app/modules/global/services/shared.service';
import { CurrentUser } from 'src/app/modules/global/model/current-user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = new Usuario();
  shared: SharedService;
  message: string;

  constructor(private userService: UserService,
    private router: Router,
    private notificador: MessageService
  ) {
    this.shared = SharedService.getInstance();
  }


  login() {
    this.message = '';
    this.userService.login(this.usuario).subscribe((userAuthentication: CurrentUser) => {
      this.shared.logando(userAuthentication);
      this.router.navigate(['/']);
    }, err => {
      this.shared.token = null;
      this.shared.usuario = null;
      this.shared.showTemplate.emit(false);
      this.notificador.messageErro('Email ou Senha Inválido!');
    });
  }

}
