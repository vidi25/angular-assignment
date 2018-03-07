import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-playvideo',
  templateUrl: './playvideo.component.html',
  styleUrls: ['./playvideo.component.css']
})
export class PlayvideoComponent implements OnInit {
  url: string;
  videoLink: SafeUrl;

  constructor(private router: ActivatedRoute, public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.createUrl();
  }

  createUrl() {
    this.url = 'https://www.youtube.com/embed/' + this.router.snapshot.params['id'];
    this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
