import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

	url: string = 'http://google.com';
	cursoAngular: boolean = true;
	urlImagem: string = 'http://lorempixel.com/400/200/nature';

	valorAtual: string = '';
	valorSalvo: string = '';

	isMouseOver: boolean = false;



	getValor(){
		return 1;
	}

	getCurtirCurso(){
		return true;
	}


	botaoClicado(){
		alert("cliquei");
	}

	onKeyUp(event: KeyboardEvent){
		this.valorAtual = (<HTMLInputElement>event.target).value;
	}

	salvarValor(valor){
		this.valorSalvo = valor;
	}

	onMouseOverOut(){
		this.isMouseOver = !this.isMouseOver;
	}

	constructor() { }

	ngOnInit() {
	}

}
