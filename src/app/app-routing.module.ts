import { AuthGuard } from './modules/global/interceptors/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './pages/authentication/login/login.module#LoginModule',
  },
  {
    path: 'questionario',
    loadChildren : './modules/questionario/questionario.module#QuestionarioModule'
  },
  {
    path: 'register',
    loadChildren: './pages/authentication/register/register.module#RegisterModule',
  },
  {
    path: 'forgot-password',
    loadChildren: './pages/authentication/forgot-password/forgot-password.module#ForgotPasswordModule',
  },
  {
    path: 'coming-soon',
    loadChildren: './pages/coming-soon/coming-soon.module#ComingSoonModule',
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
        pathMatch: 'full'
      },
      {
        path: 'basico',
        loadChildren : './modules/basico/basico.module#BasicoModule'
      },
      {
        path: 'resultado',
        loadChildren : './modules/resultado/resultado.module#ResultadoModule'
      },
      {
        path: 'apps/inbox',
        loadChildren: './pages/apps/inbox/inbox.module#InboxModule',
      },
      {
        path: 'apps/calendar',
        loadChildren: './pages/apps/calendar/calendar.module#CalendarAppModule',
      },
      {
        path: 'apps/chat',
        loadChildren: './pages/apps/chat/chat.module#ChatModule',
      },
      {
        path: 'components',
        loadChildren: './pages/components/components.module#ComponentsModule',
      },
      {
        path: 'forms/form-elements',
        loadChildren: './pages/forms/form-elements/form-elements.module#FormElementsModule',
      },
      {
        path: 'forms/form-wizard',
        loadChildren: './pages/forms/form-wizard/form-wizard.module#FormWizardModule',
      },
      {
        path: 'icons',
        loadChildren: './pages/icons/icons.module#IconsModule',
      },
      {
        path: 'page-layouts',
        loadChildren: './pages/page-layouts/page-layouts.module#PageLayoutsModule',
      },
      {
        path: 'maps/google-maps',
        loadChildren: './pages/maps/google-maps/google-maps.module#GoogleMapsModule',
      },
      {
        path: 'tables/all-in-one-table',
        loadChildren: './pages/tables/all-in-one-table/all-in-one-table.module#AllInOneTableModule',
      },
      {
        path: 'drag-and-drop',
        loadChildren: './pages/drag-and-drop/drag-and-drop.module#DragAndDropModule'
      },
      {
        path: 'editor',
        loadChildren: './pages/editor/editor.module#EditorModule',
      },
      {
        path: 'blank',
        loadChildren: './pages/blank/blank.module#BlankModule',
      },
      {
        path: 'level1/level2/level3/level4/level5',
        loadChildren: './pages/level5/level5.module#Level5Module',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
