import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayvideoComponent } from './playvideo.component';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DomSanitizer} from '@angular/platform-browser';

describe('PlayvideoComponent', () => {
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let component: PlayvideoComponent;
  let fixture: ComponentFixture<PlayvideoComponent>;
  let sanitizer: DomSanitizer;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayvideoComponent ],
      providers: [{provide: ActivatedRoute, useValue: mockRouter}]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PlayvideoComponent);
    component = fixture.debugElement.componentInstance;
  });
  it('should create playvideo component', () => {
    expect(component).toBeDefined();
  });
  it('should return url', () => {
    spyOn(sanitizer, 'bypassSecurityTrustResourceUrl').and.returnValue(Observable.of('https://www.youtube.com/embed/TsIqaqE-WP4'));
    expect(component.videoLink).toEqual('https://www.youtube.com/embed/TsIqaqE-WP4');
  });
});
