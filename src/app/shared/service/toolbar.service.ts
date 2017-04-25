import { Injectable } from '@angular/core';

@Injectable()
export class ToolbarService {

  constructor() { }

  getToolbarData(): Object {
    return {
      title: `Curriculum Vitae`,
    };
  }
}
