import { Injectable } from '@angular/core';

@Injectable()
export class ToolbarService {

  constructor() { }

  getToolbarData(): any {
    return {
      title: `Curriculum Vitae`,
    };
  }
}
