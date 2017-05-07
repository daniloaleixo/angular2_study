import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GithubService {

  	constructor(private http: Http) { }

  	getUser(searchText): Observable<any> {
  		const url = 'http://api.github.com/search/users?q=' + searchText;

  		return this.http.get(url).map(res => {
  			const data = res.json();
  			console.log(data);
  			return data;
  		})
  	}

  	getUserDetail(userId): Observable<any> {
  		const url = 'http://api.github.com/users/' + userId;
  		return this.http.get(url).map(
  			res => {
  				const user = res.json();
  				return user;
  			}
  		)
  	}
}
