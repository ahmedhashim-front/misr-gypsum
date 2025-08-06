import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompniesComponent } from './compnies.component';

describe('CompniesComponent', () => {
  let component: CompniesComponent;
  let fixture: ComponentFixture<CompniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
