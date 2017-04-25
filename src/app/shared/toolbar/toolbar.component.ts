import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { SidenavService } from './../service/sidenav.service';
import { ThemeService } from './../service/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  sidenav: MdSidenav;
  @Output() themeChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private sidenavService: SidenavService,
    private themeService: ThemeService) { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }

  closeSidenav() {
    this.sidenavService.closeSidenav();
  }

  toggleTheme() {
    this.themeChanged.emit('new_theme');
  }
}
