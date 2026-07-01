import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coolstuff } from './coolstuff';

describe('Coolstuff', () => {
  let component: Coolstuff;
  let fixture: ComponentFixture<Coolstuff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coolstuff],
    }).compileComponents();

    fixture = TestBed.createComponent(Coolstuff);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
