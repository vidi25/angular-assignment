import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {HomeService} from './home.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {VideolistComponent} from '../videolist/videolist.component';
import {FormsModule} from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: HomeService;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, VideolistComponent],
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      providers: [HomeService,
        {provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.get(HomeService);
  });
  it('should create home component', () => {
    expect(component).toBeDefined();
  });
  it('should have the videolist component', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-videolist').not.toBe(null);
  }));
  it('should get data from service', () => {
    spyOn(service, 'getData').and.returnValue(Observable.of({message: ['success']}));
    component.getJsonData();
    expect(component.data).toEqual({message: ['success']});
  });
  it('should throw error from service', () => {
    spyOn(service, 'getData').and.returnValue(Observable.throw({message: 'error'}));
    spyOn(console, 'log');
    component.getJsonData();
    expect(console.log).toHaveBeenCalled();
    expect(component.data).toEqual(undefined);
  });
});
