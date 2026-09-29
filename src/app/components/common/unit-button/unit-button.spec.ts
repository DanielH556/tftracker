import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitButton } from './unit-button';

describe('UnitButton', () => {
  let component: UnitButton;
  let fixture: ComponentFixture<UnitButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitButton],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
