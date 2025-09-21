import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travelcitycard } from './travelcitycard';

describe('Travelcitycard', () => {
  let component: Travelcitycard;
  let fixture: ComponentFixture<Travelcitycard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travelcitycard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Travelcitycard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
