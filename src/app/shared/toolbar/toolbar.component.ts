import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './../service/navbar.service';
import { ToolbarService } from './../service/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  sidenav: any;
  toolbar: any;
  @Output() sidenavEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router,
    private navbarService: NavbarService,
    private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.sidenav = this.navbarService.getSideNavData();
    this.toolbar = this.toolbarService.getToolbarData();

  }

  toggleSidenav() {
    this.sidenavEvent.emit(true);
  }

}
