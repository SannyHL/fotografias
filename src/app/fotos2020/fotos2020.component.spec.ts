import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos2020Component } from './fotos2020.component';

describe('Fotos2020Component', () => {
  let component: Fotos2020Component;
  let fixture: ComponentFixture<Fotos2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fotos2020Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fotos2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
