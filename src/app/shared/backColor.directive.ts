import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appBackColor]',
})
export class BackColorDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') change() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'backgroundColor',
      'green'
    );
  }
  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'backgroundColor',
      'transparent'
    );
  }
}
