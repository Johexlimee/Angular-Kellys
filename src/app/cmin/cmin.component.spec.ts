import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CminComponent } from './cmin.component';

describe('CminComponent', () => {
  let component: CminComponent;
  let fixture: ComponentFixture<CminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
