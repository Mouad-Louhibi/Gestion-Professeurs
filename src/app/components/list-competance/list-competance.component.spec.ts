import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompetanceComponent } from './list-competance.component';

describe('ListCompetanceComponent', () => {
  let component: ListCompetanceComponent;
  let fixture: ComponentFixture<ListCompetanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompetanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
