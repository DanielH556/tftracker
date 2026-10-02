import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AugmentsList } from './augments-list';

describe('AugmentsList', () => {
  let component: AugmentsList;
  let fixture: ComponentFixture<AugmentsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AugmentsList],
    }).compileComponents();

    fixture = TestBed.createComponent(AugmentsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
