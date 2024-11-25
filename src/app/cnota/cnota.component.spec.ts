import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnotaComponent } from './cnota.component';

describe('CnotaComponent', () => {
  let component: CnotaComponent;
  let fixture: ComponentFixture<CnotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CnotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
