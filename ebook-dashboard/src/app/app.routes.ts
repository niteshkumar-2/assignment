import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { BookReaderComponent } from './dashboard/book-reader/book-reader.component';
import { BookProgressComponent } from './dashboard/book-progress/book-progress.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'book-reader',
    component: BookReaderComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'book-progress',
    component: BookProgressComponent,
    canActivate: [AuthGuard],
  },
];
