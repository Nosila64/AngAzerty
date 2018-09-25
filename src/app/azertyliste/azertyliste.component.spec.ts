import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzertylisteComponent } from './azertyliste.component';

describe('AzertylisteComponent', () => {
  let component: AzertylisteComponent;
  let fixture: ComponentFixture<AzertylisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzertylisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzertylisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
