import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
	// Para colocar somente para um elemento basta colocar o nome do elemento na frente do selector
  selector: 'button[fundoAmarelo]'
})
export class FundoAmareloDirective {

  	constructor(
  		private _renderer: Renderer,
  		private _elementRef: ElementRef) {
  		// Nao usar esse codigo por vulnerabilidade XXS
  		// this._elementRef.nativeElement.style.backgroundColor = 'yellow';
  		this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  	}

}
