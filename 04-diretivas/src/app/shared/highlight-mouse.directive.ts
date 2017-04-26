import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

	// Evento que vou escutar entre parentes
	// Host Listener escuta eventos no hospedeiro
	@HostListener('mouseenter') onMouseOver(){
  		// this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  		this.backgroundColor = 'yellow';
	}

	@HostListener('mouseleave') onMouseLeave(){
  		// this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
  		this.backgroundColor = 'white';
	}

	// Binding permite o bind entre atributo do html com uma variavel
	// @HostBinding('style.backgroundColor') backgroundColor: string;
	@HostBinding('style.backgroundColor') get setColor(){
		return this.backgroundColor;
	}
	private backgroundColor: string;


  	constructor(
  		// private _elementRef: ElementRef, private _renderer: Renderer
  		) {

  	}

}
