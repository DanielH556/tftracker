import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompTypeFilter } from './comp-type-filter';

describe('CompTypeFilter', () => {
  let component: CompTypeFilter;
  let fixture: ComponentFixture<CompTypeFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompTypeFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(CompTypeFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
