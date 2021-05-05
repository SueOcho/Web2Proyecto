import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProyectComponent } from './nav-proyect.component';

describe('NavProyectComponent', () => {
  let component: NavProyectComponent;
  let fixture: ComponentFixture<NavProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavProyectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
