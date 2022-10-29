import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos2019Component } from './fotos2019.component';

describe('Fotos2019Component', () => {
  let component: Fotos2019Component;
  let fixture: ComponentFixture<Fotos2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fotos2019Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fotos2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
