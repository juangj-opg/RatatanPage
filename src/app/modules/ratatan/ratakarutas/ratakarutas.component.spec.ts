import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatakarutasComponent } from './ratakarutas.component';

describe('RatakarutasComponent', () => {
  let component: RatakarutasComponent;
  let fixture: ComponentFixture<RatakarutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatakarutasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatakarutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
