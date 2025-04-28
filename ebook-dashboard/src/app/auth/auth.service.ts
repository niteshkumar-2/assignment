import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly mockToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIiwiYXV0aG9yaXplZCI6ImFkbWluIiwiaWF0IjoxNjY0MDAwMTY2fQ.WpPfEnHRPZPSkH6npO9PeeOXm9eb3r0ttMwIc5mbkO8';

  login(username: string, password: string): Observable<any> {
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');

    if (username === savedUsername && password === savedPassword) {
      localStorage.setItem('jwt', this.mockToken);
      return of({ token: this.mockToken });
    } else {
      return of({ error: 'Invalid credentials' });
    }
  }

  signup(username: string, password: string): Observable<any> {
    localStorage.setItem('savedUsername', username);
    localStorage.setItem('savedPassword', password);
    console.log('User created:', username, password);
    return of({ message: 'Signup successful. Please log in.' });
  }

  logout(): void {
    localStorage.removeItem('jwt');
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
