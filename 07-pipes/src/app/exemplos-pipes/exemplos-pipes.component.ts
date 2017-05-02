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

  	constructor() { }

  	ngOnInit() {
  	}

}
