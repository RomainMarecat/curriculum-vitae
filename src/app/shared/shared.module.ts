import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { Angulartics2Module } from 'angulartics2';
import { NavbarService } from './service/navbar.service';
import { ToolbarService } from './service/toolbar.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    Angulartics2Module.forChild()
  ],
  declarations: [
    ToolbarComponent,
    SidenavComponent
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent
  ],
  providers: [
    NavbarService,
    ToolbarService
  ]
})
export class SharedModule {}
