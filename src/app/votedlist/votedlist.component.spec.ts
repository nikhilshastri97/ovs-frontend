import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedlistComponent } from './votedlist.component';

describe('VotedlistComponent', () => {
  let component: VotedlistComponent;
  let fixture: ComponentFixture<VotedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotedlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
