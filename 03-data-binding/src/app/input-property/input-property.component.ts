import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  // inputs:['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {


	// Can use this way, or declaring in the Component above
	@Input('nome') nomeCurso: string = '';
	// nomeCurso: string = '';

    constructor() { }

    ngOnInit() {
    }

}