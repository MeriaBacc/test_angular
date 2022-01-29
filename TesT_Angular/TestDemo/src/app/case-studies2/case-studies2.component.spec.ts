import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudies2Component } from './case-studies2.component';

describe('CaseStudies2Component', () => {
  let component: CaseStudies2Component;
  let fixture: ComponentFixture<CaseStudies2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudies2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudies2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
