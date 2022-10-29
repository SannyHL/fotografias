import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos2021Component } from './fotos2021.component';

describe('Fotos2021Component', () => {
  let component: Fotos2021Component;
  let fixture: ComponentFixture<Fotos2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fotos2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fotos2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
