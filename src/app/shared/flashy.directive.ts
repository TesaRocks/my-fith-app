import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appFlashy]',
})
export class FlashyDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'backgroundColor',
      'green'
    );
  }
  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'pink');
  }
}
