import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducaComponent } from './educa.component';

describe('EducaComponent', () => {
  let component: EducaComponent;
  let fixture: ComponentFixture<EducaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducaComponent]
    });
    fixture = TestBed.createComponent(EducaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

