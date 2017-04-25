import { Component, ViewChild, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { MdSidenav } from '@angular/material';
import { SidenavService } from './shared/service/sidenav.service';
import { ThemeService } from './shared/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  themeSelector: string;

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private sidenavService: SidenavService,
    private themeService: ThemeService) {
  }

  ngOnInit() {
    this.themeSelector = this.themeService.themeName;
    this.sidenavService.sidenav = this.sidenav;
  }

  toggleTheme() {
    this.themeSelector = this.themeService.toggleTheme();
  }
}
