import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleReadComponent } from './people-read.component';

describe('PeopleReadComponent', () => {
  let component: PeopleReadComponent;
  let fixture: ComponentFixture<PeopleReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleReadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
