import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailesComponent } from './productdetailes.component';

describe('ProductdetailesComponent', () => {
  let component: ProductdetailesComponent;
  let fixture: ComponentFixture<ProductdetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductdetailesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
