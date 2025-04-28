import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLogin: boolean = true;
  authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: [''],
    });
  }

  toggleForm(): void {
    this.isLogin = !this.isLogin;
    this.authForm.reset();
  }

  onSubmit(): void {
    const { username, password, confirmPassword } = this.authForm.value;

    if (this.isLogin) {
      this.authService.login(username, password).subscribe((response) => {
        if (response?.token) {
          localStorage.setItem('authToken', response.token);

          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid credentials');
        }
      });
    } else {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      this.authService.signup(username, password);
      alert('Signup successful, please login');
      this.toggleForm();
    }
  }
}
