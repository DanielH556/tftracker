import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Artifacts } from './artifacts';

describe('Artifacts', () => {
  let component: Artifacts;
  let fixture: ComponentFixture<Artifacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artifacts],
    }).compileComponents();

    fixture = TestBed.createComponent(Artifacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
