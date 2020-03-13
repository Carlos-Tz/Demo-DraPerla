import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  public key = '';
  public client = {
    nombre: '',
    orden: '',
    receta: '',
    expediente: '',
    historia: '',
    carnet: ''
  };

  constructor(
    public formApi: ApiService,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.actRouter.snapshot.paramMap.get('key');
    this.formApi.GetForm(this.key).valueChanges().subscribe(data => {
      this.client = data;
    });
  }


}
