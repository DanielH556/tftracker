import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponentsSingle } from './item-components-single';

describe('ItemComponents', () => {
  let component: ItemComponentsSingle;
  let fixture: ComponentFixture<ItemComponentsSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemComponentsSingle],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponentsSingle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
