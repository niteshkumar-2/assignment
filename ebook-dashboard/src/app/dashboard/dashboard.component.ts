import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, MatButtonModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  ebooks = [
    { title: 'E-book 1', progress: 45, id: '1' },
    { title: 'E-book 2', progress: 20, id: '2' },
    { title: 'E-book 3', progress: 85, id: '3' },
  ];

  constructor(private router: Router) {}

  startReading(ebookId: string) {
    const progress = JSON.parse(
      localStorage.getItem(ebookId) || '{"page": 1, "line": 1}'
    );

    this.router.navigate(['/book-reader'], { state: { progress } });
  }

  isPurchased(ebookId: string): boolean {
    const purchasedEbooks = JSON.parse(
      localStorage.getItem('purchasedEbooks') || '[]'
    );
    return purchasedEbooks.includes(ebookId);
  }

  purchaseEbook(ebookId: string) {
    let purchasedEbooks = JSON.parse(
      localStorage.getItem('purchasedEbooks') || '[]'
    );
    if (!purchasedEbooks.includes(ebookId)) {
      purchasedEbooks.push(ebookId);
      localStorage.setItem('purchasedEbooks', JSON.stringify(purchasedEbooks));
    }
  }
  viewProgress(ebookId: string) {
    this.router.navigate(['/book-progress'], { queryParams: { ebookId } });
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
