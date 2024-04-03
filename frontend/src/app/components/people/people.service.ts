import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { People } from './people.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  	providedIn: 'root'
})
export class PeopleService {

	baseUrl = "http://localhost:3001/peoples"
	constructor(private snackbar: MatSnackBar,private http: HttpClient) { }
	showMessage(msg: string, isError: boolean = false): void{
		this.snackbar.open(msg,'',{
			duration:3000,
			horizontalPosition:"right",
			verticalPosition:"top",
			panelClass:isError ? ['msg-error'] : ['msg-sucess']
		})
	}
	create(people: People): Observable<People>{
		return this.http.post<People>(this.baseUrl, people).pipe(
			map(obj => obj),
			catchError(e => this.errorHandler(e))
		)
	}

	errorHandler(e: any): Observable<any>{
		this.showMessage("Ocorreu um erro!", true)
		return EMPTY

	}
	read(): Observable<People[]>{
		return this.http.get<People[]>(this.baseUrl)
	}
	readById(id: string): Observable<People>{
		const url = `${this.baseUrl}/${id}`
		return this.http.get<People>(url)
	}
	update(people: People): Observable<People>{
		const url = `${this.baseUrl}/${people.id}`
		return this.http.put<People>(url,people)
	}
	delete(id:string): Observable<People>{
		const url = `${this.baseUrl}/${id}`
		return this.http.delete<People>(url)
	}
}
