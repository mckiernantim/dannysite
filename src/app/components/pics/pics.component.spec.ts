import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PicsComponent } from './pics.component';

describe('PicsComponent', () => {
  let component: PicsComponent;
  let fixture: ComponentFixture<PicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
