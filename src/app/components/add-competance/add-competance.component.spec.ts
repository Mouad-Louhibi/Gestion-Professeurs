import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetanceComponent } from './add-competance.component';

describe('AddCompetanceComponent', () => {
  let component: AddCompetanceComponent;
  let fixture: ComponentFixture<AddCompetanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompetanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
