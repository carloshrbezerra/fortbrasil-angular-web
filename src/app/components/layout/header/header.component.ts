import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../modules/basico/domain/usuario.model';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/modules/global/services/shared.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;
  constructor(private shared: SharedService, private router: Router) { }

  ngOnInit() {
    if (!this.usuario) {
      this.usuario = this.shared.usuario;
    }
  }

  logout() {
    this.shared.logout();
    this.router.navigate(['/login']);
  }

}
