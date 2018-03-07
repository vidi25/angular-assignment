import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {

  @Input() title;
  @Input() thumbnail;
  @Input() videoId;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
