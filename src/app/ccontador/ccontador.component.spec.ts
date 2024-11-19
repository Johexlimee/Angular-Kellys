import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcontadorComponent } from './ccontador.component';

describe('CcontadorComponent', () => {
  let component: CcontadorComponent;
  let fixture: ComponentFixture<CcontadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CcontadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcontadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
