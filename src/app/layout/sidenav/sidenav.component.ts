import { Profile } from './../../modules/basico/domain/profile';
import { Usuario } from './../../modules/basico/domain/usuario.model';
import { SharedService } from './../../modules/global/services/shared.service';
import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidenavItem } from './sidenav-item/sidenav-item.interface';
import { SidenavService } from './sidenav.service';
import { ThemeService } from '../../../@fury/services/theme.service';

@Component({
  selector: 'fury-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  sidenavUserVisible$ = this.themeService.config$.pipe(map(config => config.sidenavUserVisible));

  @Input()
  @HostBinding('class.collapsed')
  collapsed: boolean;
  user: Usuario;

  @Input()
  @HostBinding('class.expanded')
  expanded: boolean;

  items$: Observable<SidenavItem[]>;

  constructor(private router: Router,
              private sidenavService: SidenavService,
              private shared: SharedService,
              private themeService: ThemeService) {
  }

  ngOnInit() {
    this.user = this.shared.usuario;
    this.items$ = this.sidenavService.items$.pipe(
      map((items: SidenavItem[]) => {
        items = Profile[this.user.profile] == Profile.ADMIN ? items : items.filter(i => !i.profile || i.profile == this.user.profile);
        return this.sidenavService.sortRecursive(items, 'position');
      })
    );
  }

  toggleCollapsed() {
    this.sidenavService.toggleCollapsed();
  }

  @HostListener('mouseenter')
  @HostListener('touchenter')
  onMouseEnter() {
    this.sidenavService.setExpanded(true);
  }

  @HostListener('mouseleave')
  @HostListener('touchleave')
  onMouseLeave() {
    this.sidenavService.setExpanded(false);
  }

  logout(){
    this.shared.logout();
    this.router.navigate(['/login'])
  }

  ngOnDestroy() {
  }
}
