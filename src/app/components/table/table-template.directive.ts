import { Directive, ViewContainerRef, TemplateRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTableTemplate]'
})
export class TableTemplateDirective {

  public width: any;
  public inicial: number;
  public final: number;
  constructor() { }

  @HostListener('mousedown', ['$event']) aoPassarMouse(event: MouseEvent) {
    this.width = event.toElement.clientWidth;
  }

  @HostListener('mouseover', ['$event']) onMouseOver(event: MouseEvent) {
    this.inicial = event.screenX;
  }

  @HostListener('mouseup', ['$event']) onMouseUp(event: MouseEvent) {
    this.final = event.screenX;
    this.width = this.inicial > this.final ? this.width - (this.inicial - this.final) : this.width + (this.final - this.inicial);
    event.toElement.setAttribute('width', this.width + 'px');
  }

}
