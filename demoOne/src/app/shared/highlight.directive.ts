// #docregion
import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[highlight]' })
/** Set backgroundColor for the attached element to highlight color
 *  and set the element's customProperty to true */
export class HighlightDirective implements OnChanges {

  defaultColor =  'rgb(211, 211, 211)'; // lightgray

  // tslint:disable-next-line:no-input-rename
  @Input('highlight') bgColor: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }
}
