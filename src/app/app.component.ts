import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Profile } from './profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle = 'Kashif Aslam · Resume';
  profile: Profile;

  constructor(
    private titleService: Title,
    private profileService: ProfileService
  ) {
    this.profile = new Profile();
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
    this.getProfileDetail();
  }

  getProfileDetail() {
    this.profileService.getProfile()
      .subscribe((data) => {
        this.profile = data;
      });
  }
}
