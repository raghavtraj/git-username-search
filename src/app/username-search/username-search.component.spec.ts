import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameSearchComponent } from './username-search.component';

describe('UsernameSearchComponent', () => {
  let component: UsernameSearchComponent;
  let fixture: ComponentFixture<UsernameSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
