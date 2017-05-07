import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

	public happyText = 'Manager is on vacation';

	public myTodos = [
		'Wash coffed mug',
		'Take a shower',
		'Say hi t the new hire',
		'Shampoo you hair'
	];

  	constructor() { }

  	ngOnInit() {
  		this.happyText = 'Manager is sick';
  	}

  	makeHappier(){
  		this.happyText = 'Manager is fired';
  	}

}
