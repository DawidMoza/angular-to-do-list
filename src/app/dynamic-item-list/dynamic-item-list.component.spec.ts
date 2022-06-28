import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicItemListComponent } from './dynamic-item-list.component';

describe('DynamicItemListComponent', () => {
  let component: DynamicItemListComponent;
  let fixture: ComponentFixture<DynamicItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
