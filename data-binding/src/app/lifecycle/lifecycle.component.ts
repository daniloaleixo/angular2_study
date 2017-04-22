import { Component, OnChanges,
DoCheck,
OnInit,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

	@Input() valorInicial: number = 10;

    constructor() {
    	this.log("constructor");
	}

	ngOnChanges() {
		this.log("ngOnChanges");
	}

    ngOnInit() {
    	this.log("ngOnInit");
    }

    ngDoCheck(){
    	this.log("ngDoCheck");
    }

    ngAfterContentInit(){
    	this.log("ngAfterContentInit");
    }

    ngAfterContentChecked(){
    	this.log("ngAfterContentChecked");
    }

    ngAfterViewInit(){
    	this.log("ngAfterViewInit");
    }

    ngAfterViewChecked(){
    	this.log("ngAfterViewChecked");
    }

    ngOnDestroy(){
    	this.log("ngOnDestroy");
    }

    private log(hook: string){
    	console.log(hook);
    }



}
