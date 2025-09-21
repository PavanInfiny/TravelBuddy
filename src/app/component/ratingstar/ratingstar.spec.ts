import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ratingstar } from './ratingstar';

describe('Ratingstar', () => {
  let component: Ratingstar;
  let fixture: ComponentFixture<Ratingstar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ratingstar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ratingstar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
