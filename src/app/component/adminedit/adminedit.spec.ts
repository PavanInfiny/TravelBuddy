import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminedit } from './adminedit';

describe('Adminedit', () => {
  let component: Adminedit;
  let fixture: ComponentFixture<Adminedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminedit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminedit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
