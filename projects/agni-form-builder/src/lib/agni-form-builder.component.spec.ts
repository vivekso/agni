import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgniFormBuilderComponent } from './agni-form-builder.component';

describe('AgniFormBuilderComponent', () => {
  let component: AgniFormBuilderComponent;
  let fixture: ComponentFixture<AgniFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgniFormBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgniFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
