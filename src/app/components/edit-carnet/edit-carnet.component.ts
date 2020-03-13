import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-carnet',
  templateUrl: './edit-carnet.component.html',
  styleUrls: ['./edit-carnet.component.css']
})
export class EditCarnetComponent implements OnInit {
  myForm: FormGroup;
  save = 2;
  public key = '';
  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    public formApi: ApiService,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.actRouter.snapshot.paramMap.get('key');
    this.sForm();
    this.formApi.GetForm(this.key).valueChanges().subscribe(data => {
      if (data.carnet) {
        this.myForm.patchValue(data.carnet);
        this.myForm.patchValue({nombre: data.nombre, folio: data.orden});
      }
    });
  }

  sForm() {
    this.myForm = this.fb.group({
      nombre: [''],
      folio: [0],
      fecha: [''],
      email: [''],
      c1: [''],
      c2: [''],
      c3: [''],
      c4: [''],
      c5: [''],
      c6: [''],
      c7: [''],
      c8: [''],
      c9: [''],
      c10: [''],
      f1: [''],
      f2: [''],
      f3: [''],
      f4: [''],
      f5: [''],
      f6: [''],
      f7: [''],
      f8: [''],
      f9: [''],
      f10: [''],
      l1: [''],
      l2: [''],
      l3: [''],
      l4: [''],
      l5: [''],
      l6: [''],
      l7: [''],
      l8: [''],
      l9: [''],
      l10: [''],
      s1: [''],
      s2: [''],
      s3: [''],
      s4: [''],
      s5: [''],
      s6: [''],
      s7: [''],
      s8: [''],
      s9: [''],
      s10: [''],
      obser: ['']
    });
  }

  submitSurveyData = () => {
    this.formApi.UpdateCarnet(this.myForm.value, this.key);
    this.toastr.success('Actualizado!');
  }
}
