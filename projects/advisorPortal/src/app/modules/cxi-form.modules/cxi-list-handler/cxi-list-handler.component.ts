import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cxi-list-handler-rl",
  template: "<ng-content></ng-content>"
})
export class CxiListHandlerComponent {
  @Input() public list: any[] = [];
  @Output() public listChangeEvent = new EventEmitter<any[]>();
  constructor() {}

  /* A common function to remove an object from the array. 
     @param obj (any)       : the object that is going to be deleted
     @param index (number)  : the index of this object inside the array
  */
  public removeObject(index: number): void {
    if (this.list && this.list.length > 0) {
      this.list.splice(index, 1);
      this.listChangeEvent.emit(this.list);
    }
  }

  /* A common function to remove an object from the array. 
     @param obj (any)       : the object that is going to be added into the array
  */

  public addObject(obj: any): void {
    debugger;
    if (this.list) {
      this.list.push(obj);
      this.listChangeEvent.emit(this.list);
    }
  }

  private matchObjects(object1, object2) {}
}
