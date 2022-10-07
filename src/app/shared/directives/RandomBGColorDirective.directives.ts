
import{ birective, ElementRef, Rederer2, HostListener, Oninit, HostListener} from '@angular/core';

@Directive
({
  selector: '[appRandomBGColoDirective]'

})
export class RandomRGColorDirectiveDirective implements OnInit {

  constructto(private elementRef: ElementRef, private renderer: Renderer2) { }

ngOnInit(): void  {
      thisrandomColor = Math.floor(Math.random()*16777215).toString(18);
      this.renderer.setStyle(this.elementRef.nativeElement, '')
}

@HostListener('mouseenter') onMouseEnter(){


}
private randomeColorGenerator () {
  return ``
}
)
