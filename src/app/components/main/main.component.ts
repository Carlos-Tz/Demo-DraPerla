import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  save = 0;
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public formApi: ApiService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.formApi.GetFormsList();
    this.sForm();
  }

  sForm() {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      orden: ['', [Validators.required]]
    });
  }

  submitSurveyData = () => {
    this.formApi.AddForm(this.myForm.value);
    this.toastr.success('Guardado!');
  }
}
