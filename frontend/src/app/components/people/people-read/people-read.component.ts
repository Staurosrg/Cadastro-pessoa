import { Component, OnInit } from '@angular/core';
import { People } from '../people.model';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-read',
  templateUrl: './people-read.component.html',
  styleUrl: './people-read.component.css'
})
export class PeopleReadComponent implements OnInit{
	peoples: People[]
	displayedColumns = ['id','name','cpf','data_nasc','action']
	constructor(private peopleService: PeopleService){}

	ngOnInit(): void {
		this.peopleService.read().subscribe(peoples =>{
			this.peoples = peoples
			console.log(peoples)
		})
	}
}
