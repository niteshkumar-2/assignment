import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { BookReaderComponent } from './dashboard/book-reader/book-reader.component';
import { BookProgressComponent } from './dashboard/book-progress/book-progress.component';


export const routes: Routes = [
  // Default route redirects to the login page
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  // Login page
  { path: 'login', component: LoginComponent },
  
  // Dashboard, protected by AuthGuard
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard], // Only accessible if the user is authenticated
  },
  
  // Book Reader page, protected by AuthGuard
  { 
    path: 'book-reader', 
    component: BookReaderComponent, 
    canActivate: [AuthGuard], 
  },
  
  { 
    path: 'book-progress', 
    component: BookProgressComponent, 
    canActivate: [AuthGuard], 
  }
];
