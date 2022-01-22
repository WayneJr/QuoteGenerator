import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSquareComponent } from './quote-square.component';

describe('QuoteSquareComponent', () => {
  let component: QuoteSquareComponent;
  let fixture: ComponentFixture<QuoteSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
