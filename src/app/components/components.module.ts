import { TabsComponent } from './tabs/tabs.component';
import { ModalService } from './modal/modal.service';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallBoxComponent } from './small-box/small-box.component';
import { RouterModule } from '@angular/router';
import { CardBoxComponent } from './card-box/card-box.component';
import { CardBoxToolsComponent } from './card-box/card-box-tools/card-box-tools.component';
import { MessageContainerComponent } from './message/message-container/message-container.component';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message/message.service';
import { InputDirective } from './input/input.directive';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { MenuItemComponent } from './layout/menu/menu-item/menu-item.component';
import { SubmenuComponent } from './layout/menu/submenu/submenu.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './security/login/login.component';
import { ToolsActionsComponent } from './card-box/tools-actions/tools-actions.component';
import { TableComponent } from './table/table.component';
import { TbColumnComponent } from './table/tb-column/tb-column.component';
import { TbActionsComponent } from './table/tb-actions/tb-actions.component';
import { TableTemplateDirective } from './table/table-template.directive';
import { ModuleComponent } from './layout/module/module.component';
import { CardListComponent } from './card-list/card-list.component';
import { TableActionsComponent } from './table-actions/table-actions.component';
import { MenuModuloItemComponent } from './layout/menu-modulo/menu-modulo-item/menu-modulo-item.component';
import { MenuModuloSubitem2Component } from './layout/menu-modulo/menu-modulo-subitem2/menu-modulo-subitem2.component';
import { MenuModuloComponent } from './layout/menu-modulo/menu-modulo.component';
import { MenuModuloSubitemComponent } from './layout/menu-modulo/menu-modulo-subitem/menu-modulo-subitem.component';
import { TemplateComponent } from './layout/template/template.component';
import { TabComponent } from './tabs/tab/tab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    HomeComponent, LoginComponent, HeaderComponent, MenuComponent, FooterComponent,
    SmallBoxComponent, CardBoxComponent, CardBoxToolsComponent,
    MessageContainerComponent, MessageComponent, InputDirective,
    InputComponent, MenuItemComponent, SubmenuComponent, ToolsActionsComponent,
    TableComponent, TbColumnComponent, TbActionsComponent, TableTemplateDirective, 
    ModuleComponent, CardListComponent, TableActionsComponent,
    MenuModuloItemComponent, MenuModuloSubitem2Component, MenuModuloSubitemComponent, MenuModuloComponent,
    TemplateComponent, ModalComponent, TabsComponent, TabComponent
  ],
  exports : [
    FormsModule, HomeComponent, LoginComponent, HeaderComponent, MenuComponent,
    FooterComponent, SmallBoxComponent, CardBoxComponent,
    CardBoxToolsComponent, MessageContainerComponent, InputComponent,
    InputDirective, ToolsActionsComponent,
    TableComponent, TbColumnComponent, TbActionsComponent, 
    TableTemplateDirective, CardListComponent, TableActionsComponent,
    MenuModuloItemComponent, MenuModuloSubitem2Component, MenuModuloSubitemComponent, MenuModuloComponent,
    TemplateComponent, ModalComponent, TabsComponent, TabComponent
  ],
  providers: [MessageService, ModalService]
})
export class ComponentsModule { }
