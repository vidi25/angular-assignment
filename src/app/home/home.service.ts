import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=' +
      'UCP4g5qGeUSY7OokXfim1QCQ&key=AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY').pipe(catchError(err =>
      this.handleError(err)));
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    return Observable.throw(
      'error occurred');
  }
}
