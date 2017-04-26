import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

	// Metodo setter: toda vez que ngElse mdoficiar chama o metodo
	@Input() set ngElse(condicao: boolean){
		if(!condicao) {
			this._viewContainerRef.createEmbeddedView(this._templateRef);
		} else {
			this._viewContainerRef.clear();
		}

	}


  	constructor(
  		private _templateRef: TemplateRef<any>,
  		private _viewContainerRef: ViewContainerRef) {}

}
