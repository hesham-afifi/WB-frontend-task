import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFilterationComponent } from './users-filteration.component';

describe('UsersFilterationComponent', () => {
  let component: UsersFilterationComponent;
  let fixture: ComponentFixture<UsersFilterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFilterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
