import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homelabbing } from './homelabbing';

describe('Homelabbing', () => {
  let component: Homelabbing;
  let fixture: ComponentFixture<Homelabbing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homelabbing],
    }).compileComponents();

    fixture = TestBed.createComponent(Homelabbing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
