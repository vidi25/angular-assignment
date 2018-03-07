import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
describe('AppComponent', () => {
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule],
      providers: [{provide: Router, useValue: mockRouter}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
