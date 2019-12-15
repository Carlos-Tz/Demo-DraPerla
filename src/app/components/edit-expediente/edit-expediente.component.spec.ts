import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpedienteComponent } from './edit-expediente.component';

describe('EditExpedienteComponent', () => {
  let component: EditExpedienteComponent;
  let fixture: ComponentFixture<EditExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
