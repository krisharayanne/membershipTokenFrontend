import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRetailerComponent } from './crud-retailer.component';

describe('CrudRetailerComponent', () => {
  let component: CrudRetailerComponent;
  let fixture: ComponentFixture<CrudRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRetailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
