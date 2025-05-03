import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogWithOtherServiceComponent } from './log-with-other-service.component';

describe('LogWithOtherServiceComponent', () => {
  let component: LogWithOtherServiceComponent;
  let fixture: ComponentFixture<LogWithOtherServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogWithOtherServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogWithOtherServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
