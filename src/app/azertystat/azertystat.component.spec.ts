import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzertystatComponent } from './azertystat.component';

describe('AzertystatComponent', () => {
  let component: AzertystatComponent;
  let fixture: ComponentFixture<AzertystatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzertystatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzertystatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
