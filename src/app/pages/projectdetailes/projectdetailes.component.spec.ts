import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetailesComponent } from './projectdetailes.component';

describe('ProjectdetailesComponent', () => {
  let component: ProjectdetailesComponent;
  let fixture: ComponentFixture<ProjectdetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectdetailesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectdetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
