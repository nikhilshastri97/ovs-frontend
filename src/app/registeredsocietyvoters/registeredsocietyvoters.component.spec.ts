import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredsocietyvotersComponent } from './registeredsocietyvoters.component';

describe('RegisteredsocietyvotersComponent', () => {
  let component: RegisteredsocietyvotersComponent;
  let fixture: ComponentFixture<RegisteredsocietyvotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredsocietyvotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredsocietyvotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
