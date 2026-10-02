import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompNameDisplay } from './comp-name-display';

describe('CompNameDisplay', () => {
  let component: CompNameDisplay;
  let fixture: ComponentFixture<CompNameDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompNameDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(CompNameDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
