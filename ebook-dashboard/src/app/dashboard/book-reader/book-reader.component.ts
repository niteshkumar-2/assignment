import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-book-reader',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './book-reader.component.html',
  styleUrls: ['./book-reader.component.scss'],
})
export class BookReaderComponent implements OnInit {
  book = {
    title: 'Introduction to Angular',
    totalPages: 100,
    currentPage: 1,
  };

  constructor() {}

  ngOnInit(): void {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      this.book.currentPage = parseInt(savedPage, 10);
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.book.totalPages) {
      this.book.currentPage = page;
      localStorage.setItem('currentPage', page.toString());
    }
  }

  nextPage(): void {
    if (this.book.currentPage < this.book.totalPages) {
      this.book.currentPage++;
      this.saveProgress();
    }
  }

  previousPage(): void {
    if (this.book.currentPage > 1) {
      this.book.currentPage--;
      this.saveProgress();
    }
  }

  private saveProgress(): void {
    localStorage.setItem('currentPage', this.book.currentPage.toString());
  }
}
