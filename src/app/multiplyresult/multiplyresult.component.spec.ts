import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyresultComponent } from './multiplyresult.component';

describe('MultiplyresultComponent', () => {
  let component: MultiplyresultComponent;
  let fixture: ComponentFixture<MultiplyresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplyresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplyresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
