import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzertywatchComponent } from './azertywatch.component';

describe('AzertywatchComponent', () => {
  let component: AzertywatchComponent;
  let fixture: ComponentFixture<AzertywatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzertywatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzertywatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
