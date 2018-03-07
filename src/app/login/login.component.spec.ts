import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

const mockRouter = {
  navigate: jasmine.createSpy('navigate')
};
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, FormsModule],
      providers: [{provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
  });
  it('should create login component', () => {
    expect(component).toBeTruthy();
  });
});
