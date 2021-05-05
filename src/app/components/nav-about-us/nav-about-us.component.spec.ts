import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAboutUsComponent } from './nav-about-us.component';

describe('NavAboutUsComponent', () => {
  let component: NavAboutUsComponent;
  let fixture: ComponentFixture<NavAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
