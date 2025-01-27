import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLoadingCardComponent } from './news-loading-card.component';

describe('NewsLoadingCardComponent', () => {
  let component: NewsLoadingCardComponent;
  let fixture: ComponentFixture<NewsLoadingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsLoadingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsLoadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
