import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleUpdateComponent } from './people-update.component';

describe('PeopleUpdateComponent', () => {
  let component: PeopleUpdateComponent;
  let fixture: ComponentFixture<PeopleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
