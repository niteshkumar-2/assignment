import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-progress',
  standalone: true,
  imports: [MatProgressBarModule, MatCardModule, CommonModule],
  templateUrl: './book-progress.component.html',
  styleUrls: ['./book-progress.component.scss'],
})
export class BookProgressComponent implements OnInit {
  books = [
    {
      title: 'Angular for Beginners',
      progress: 0.65,
      category: 'Web Development',
      pagesRead: 130,
      totalPages: 200,
    },
    {
      title: 'Advanced Angular',
      progress: 0.45,
      category: 'Web Development',
      pagesRead: 90,
      totalPages: 200,
    },
    {
      title: 'React Basics',
      progress: 0.2,
      category: 'Web Development',
      pagesRead: 40,
      totalPages: 200,
    },
    {
      title: 'Node.js for Beginners',
      progress: 0.8,
      category: 'Backend Development',
      pagesRead: 160,
      totalPages: 200,
    },
    {
      title: 'Express.js Essentials',
      progress: 0.5,
      category: 'Backend Development',
      pagesRead: 100,
      totalPages: 200,
    },
    {
      title: 'Python for Data Science',
      progress: 0.75,
      category: 'Data Science',
      pagesRead: 150,
      totalPages: 200,
    },
    {
      title: 'Machine Learning with Python',
      progress: 0.3,
      category: 'Data Science',
      pagesRead: 60,
      totalPages: 200,
    },
  ];

  constructor() {}

  ngOnInit() {}

  calculateProgress(book: any): number {
    return (book.pagesRead / book.totalPages) * 100;
  }
}
