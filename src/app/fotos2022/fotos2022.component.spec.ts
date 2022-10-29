import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos2022Component } from './fotos2022.component';

describe('Fotos2022Component', () => {
  let component: Fotos2022Component;
  let fixture: ComponentFixture<Fotos2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fotos2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fotos2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
