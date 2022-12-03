import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myBold]'
})
export class BoldDirective {

  constructor(private element: ElementRef, private render: Renderer2) { 
    element.nativeElement.style.color = "blue";
    element.nativeElement.style.fontWeight = "bold";
    render.setStyle(element.nativeElement,"color","red");
  }

}
