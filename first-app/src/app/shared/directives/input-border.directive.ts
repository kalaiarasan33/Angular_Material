import { Directive, ElementRef, Renderer2, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputBorder]'
})
export class InputBorderDirective {
  @HostBinding('style.backgroundColor') bgColor: string;
  @HostBinding('style.width.px') width:number = 120;
  @HostBinding('style.focus') f:boolean = true
  @Input() isError: any;

  constructor(
    public el: ElementRef,
    private renderer: Renderer2
  ) { }


 

  @HostListener('mouseover')
    onMouseOver() {
      this.bgColor = 'red';
     
  }

  @HostListener('click')
  onClick() {    
      this.width = 300;   
}

@HostListener('blur')
onblur() {  
    this.width = 120; 
 
}

  @HostListener('mouseout')
    onMouseOut() {
      this.bgColor = 'pink';
      
  }


  ngAfterViewInit(){
    if(this.isError){
      this.renderer.setStyle(this.el.nativeElement,'border','1px solid red')
    }

  }

}
