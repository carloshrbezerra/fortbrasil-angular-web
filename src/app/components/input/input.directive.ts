import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[input-content][ngModel]'
})
export class InputDirective {


  constructor(private model: NgModel, private element: ElementRef, private renderer: Renderer2) {
  }

  checarValidade() {
    if (this.model.touched && this.model.invalid) {
      this.renderer.addClass(this.element.nativeElement, 'is-invalid');
    } else {
      this.renderer.removeClass(this.element.nativeElement, 'is-invalid');
    }
  }

}
