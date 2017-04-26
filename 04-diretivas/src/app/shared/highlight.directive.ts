import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

	// Evento que vou escutar entre parentes
	// Host Listener escuta eventos no hospedeiro
	@HostListener('mouseenter') onMouseOver(){
  		this.backgroundColor = this.highlightColor;
	}

	@HostListener('mouseleave') onMouseLeave(){
  		this.backgroundColor = this.defaultColor;
	}

	@HostBinding('style.backgroundColor') backgroundColor: string;

	@Input('highlight') defaultColor: string = 'white';
	@Input() highlightColor: string = 'yellow';


  	constructor() { }

  	ngOnInit(){
  		this.backgroundColor = this.defaultColor
  	}

}
