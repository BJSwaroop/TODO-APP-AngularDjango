import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoapiComponent } from './todoapi.component';

describe('TodoapiComponent', () => {
  let component: TodoapiComponent;
  let fixture: ComponentFixture<TodoapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
