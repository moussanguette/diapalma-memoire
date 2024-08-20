import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RechercheVehiculePage } from './recherche-vehicule.page';

describe('RechercheVehiculePage', () => {
  let component: RechercheVehiculePage;
  let fixture: ComponentFixture<RechercheVehiculePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RechercheVehiculePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
