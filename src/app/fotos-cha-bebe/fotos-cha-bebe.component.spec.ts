import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosChaBebeComponent } from './fotos-cha-bebe.component';

describe('FotosChaBebeComponent', () => {
  let component: FotosChaBebeComponent;
  let fixture: ComponentFixture<FotosChaBebeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosChaBebeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotosChaBebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
