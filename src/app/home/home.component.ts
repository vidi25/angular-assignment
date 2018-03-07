import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private service: HomeService) {
  }

  ngOnInit() {
    this.getJsonData();
  }

  getJsonData() {
    this.service.getData().subscribe(
      (data: any) => {
        this.data = data.items;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
