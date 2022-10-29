import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosGestacaoComponent } from './fotos-gestacao.component';

describe('FotosGestacaoComponent', () => {
  let component: FotosGestacaoComponent;
  let fixture: ComponentFixture<FotosGestacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosGestacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotosGestacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
