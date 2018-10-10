import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    renderer.setStyle(elementRef.nativeElement, 'box-shadow', '2px 2px 12px blue');
  }
}
