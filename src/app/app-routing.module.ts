import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RoleGuardService } from './auth/role-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/authentication/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/authentication/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/authentication/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        pathMatch: 'full'
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        // canActivate: [RoleGuardService],
        // data: {
        //   expectedRole: 'admin'
        // }
      },
      {
        path: 'family',
        loadChildren: () => import('./family/family.module').then(m => m.FamilyModule),
      },

      {
        path: 'music',
        loadChildren: () => import('./music/music.module').then(m => m.MusicModule),
      },
      {
        path: 'drinking',
        loadChildren: () => import('./drinking/drinking.module').then(m => m.DrinkingModule),
      },
      {
        path: 'work',
        loadChildren: () => import('./work/work.module').then(m => m.WorkModule),
      },
      {
        path: 'status',
        loadChildren: () => import('./status/status.module').then(m => m.StatusModule),
      },
      {
        path: 'smoking',
        loadChildren: () => import('./smoking/smoking.module').then(m => m.SmokingModule),
      },
      {
        path: 'purpose',
        loadChildren: () => import('./purpose/purpose.module').then(m => m.PurposeModule),
      },
      {
        path: 'literacy',
        loadChildren: () => import('./literacy/literacy.module').then(m => m.LiteracyModule),
      },
      {
        path: 'habit',
        loadChildren: () => import('./habit/habit.module').then(m => m.HabitModule),
      },
      {
        path: 'reason',
        loadChildren: () => import('./reason/reason.module').then(m => m.ReasonModule),
      },
      {
        path: 'exercise',
        loadChildren: () => import('./exercise/exercise.module').then(m => m.ExerciseModule),
      },
      {
        path: 'expecting',
        loadChildren: () => import('./expecting/expecting.module').then(m => m.ExpectingModule),
      },
      {
        path: 'hobby',
        loadChildren: () => import('./hobby/hobby.module').then(m => m.HobbyModule),
      },
      {
        path: 'pet',
        loadChildren: () => import('./pet/pet.module').then(m => m.PetModule),
      },
      {
        path: 'singer',
        loadChildren: () => import('./singer/singer.module').then(m => m.SingerModule),
      },
      {
        path: 'apps/inbox',
        loadChildren: () => import('./pages/apps/inbox/inbox.module').then(m => m.InboxModule),
      },
      {
        path: 'apps/calendar',
        loadChildren: () => import('./pages/apps/calendar/calendar.module').then(m => m.CalendarAppModule),
      },
      {
        path: 'apps/chat',
        loadChildren: () => import('./pages/apps/chat/chat.module').then(m => m.ChatModule),
      },
      {
        path: 'components',
        loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsModule),
      },
      {
        path: 'forms/form-elements',
        loadChildren: () => import('./pages/forms/form-elements/form-elements.module').then(m => m.FormElementsModule),
      },
      {
        path: 'forms/form-wizard',
        loadChildren: () => import('./pages/forms/form-wizard/form-wizard.module').then(m => m.FormWizardModule),
      },
      {
        path: 'icons',
        loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsModule),
      },
      {
        path: 'page-layouts',
        loadChildren: () => import('./pages/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule),
      },
      {
        path: 'tables/all-in-one-table',
        loadChildren: () => import('./pages/tables/all-in-one-table/all-in-one-table.module').then(m => m.AllInOneTableModule),
      },
      {
        path: 'drag-and-drop',
        loadChildren: () => import('./pages/drag-and-drop/drag-and-drop.module').then(m => m.DragAndDropModule)
      },
      {
        path: 'editor',
        loadChildren: () => import('./pages/editor/editor.module').then(m => m.EditorModule),
      },
      {
        path: 'blank',
        loadChildren: () => import('./pages/blank/blank.module').then(m => m.BlankModule),
      },
      {
        path: 'level1/level2/level3/level4/level5',
        loadChildren: () => import('./pages/level5/level5.module').then(m => m.Level5Module),
      },
      { path: '**', loadChildren: () => import('./pages/blank/blank.module').then(m => m.BlankModule), }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
