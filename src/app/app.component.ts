import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { ThemeService } from '../@fury/services/theme.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private sidenavService: SidenavService,
    private iconRegistry: MatIconRegistry,
    private renderer: Renderer2,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform,
    private route: ActivatedRoute) {
    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.themeService.setStyle(queryParamMap.get('style')));

    this.iconRegistry.setDefaultFontSetClass('material-icons');
    this.themeService.theme$.subscribe(theme => {
      if (theme[0]) {
        this.renderer.removeClass(this.document.body, theme[0]);
      }

      this.renderer.addClass(this.document.body, theme[1]);
    });

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.sidenavService.addItems([
      {
        name: 'CADASTROS',
        position: 5,
        type: 'subheading',
        customClass: 'first-subheading'
      },
      {
        name: 'Departamento Regional',
        routeOrFunction: '/basico/departamento-regional',
        icon: 'assignment',
        position: 15,
        profile: "ADMIN"
      },
      {
        name: 'Empresa',
        routeOrFunction: '/basico/empresa',
        icon: 'date_range',
        profile: "USER",
        position: 25
      },
      {
        name: 'Pesquisas',
        routeOrFunction: '/basico/campanha',
        icon: 'date_range',
        position: 26
      },
      {
        name: 'Usuario',
        routeOrFunction: '/basico/usuario',
        icon: 'inbox',
        position: 27,
        profile: "ADMIN"
      },
      {
        name: 'Perfil',
        routeOrFunction: '/basico/perfil',
        icon: 'inbox',
        position: 28,
        profile: "ADMIN"
      },
      {
        name: 'ROI',
        type: 'subheading',
        position: 35
      },
      {
        name: 'Metodologia',
        icon: 'description',
        position: 35,
        routeOrFunction: '/resultado/metodo',
      },
      {
        name: 'Empresa',
        routeOrFunction: '#',
        icon: 'layers',
        position: 40,
        subItems : [
          {
            name: 'Informações Organizacionais da Empresa',
            icon: 'inbox',
            routeOrFunction: '/resultado/metodologia/programa-saude',
            position: 15
          },
        ]
      },
      {
        name: 'Funcionario',
        icon: 'description',
        position: 45,
        routeOrFunction: '/resultado/metodologia/funcionario',
      },
      {
        name: 'Questionário de Coleta',
        icon: 'description',
        position: 50,
        routeOrFunction: '/resultado/coleta',
      },
      {
        name: 'RELATÓRIOS',
        type: 'subheading',
        position: 65
      },
      {
        name: 'Perfil de Saúde da Empresa',
        icon: 'lock',
        position: 66,
        subItems: [
          {
            name: 'Página de login',
            routeOrFunction: '/login',
            position: 5
          },
          {
            name: 'Esqueci a senha',
            routeOrFunction: '#',
            position: 15
          }
        ]
      }
    ]);
  }
}
