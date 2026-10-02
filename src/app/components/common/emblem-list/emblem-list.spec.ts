import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmblemList } from './emblem-list';

describe('EmblemList', () => {
  let component: EmblemList;
  let fixture: ComponentFixture<EmblemList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmblemList],
    }).compileComponents();

    fixture = TestBed.createComponent(EmblemList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
