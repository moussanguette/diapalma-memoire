import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailBilletPage } from './detail-billet.page';

describe('DetailBilletPage', () => {
  let component: DetailBilletPage;
  let fixture: ComponentFixture<DetailBilletPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailBilletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
