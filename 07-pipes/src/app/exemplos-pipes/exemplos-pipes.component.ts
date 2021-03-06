import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

	livro: any = {
		titulo: 'Livro Bla Bla',
		rating: 4.590001,
		numeroPaginas: 300,
		preco: 10.99,
		dataLancamento: new Date(2016,5,23),
		url: 'http://google.com.br'
	};

	livros: string[] = ['Angular2', 'Javascript'];

	filtro: string;

	addCurso(valor){
		this.livros.push(valor);
	}

	obterCursos(){
		if(this.livros.length === 0 || this.filtro == null)
			return this.livros;

		return this.livros.filter( (v) => { 
			if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
		  		return true;
		  }
		  return false;
		});
	}

  	constructor() { }

  	ngOnInit() {
  	}

}
