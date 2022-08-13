import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesTessComponent } from './tes-tess.component';

describe('TesTessComponent', () => {
  let component: TesTessComponent;
  let fixture: ComponentFixture<TesTessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesTessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesTessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
