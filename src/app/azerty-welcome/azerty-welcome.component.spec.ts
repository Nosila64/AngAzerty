import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzertyWelcomeComponent } from './azerty-welcome.component';

describe('AzertyWelcomeComponent', () => {
  let component: AzertyWelcomeComponent;
  let fixture: ComponentFixture<AzertyWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzertyWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzertyWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
