import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookProgressComponent } from './book-progress.component';

describe('BookProgressComponent', () => {
  let component: BookProgressComponent;
  let fixture: ComponentFixture<BookProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
