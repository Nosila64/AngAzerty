import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzertysignComponent } from './azertysign.component';

describe('AzertysignComponent', () => {
  let component: AzertysignComponent;
  let fixture: ComponentFixture<AzertysignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzertysignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzertysignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
