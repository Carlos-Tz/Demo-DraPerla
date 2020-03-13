import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { Orden } from 'src/app/models/orden';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  Form: Orden[];
  save = 1;
  data_ = false;
  public dtOptions = {};

  constructor(
    public formApi: ApiService,
    private location: Location/* ,
    private storage: AngularFireStorage */
  ) { }

  ngOnInit() {

    this.formApi.GetFormsList().snapshotChanges().subscribe(data => {
      this.Form = [];
      data.forEach(item => {
        const form_ = item.payload.toJSON();
        form_['$key'] = item.key;
        this.Form.push(form_ as Orden);
      //  this.l1.push(form_);
      });
      this.data_ = true;
    });

    this.dtOptions = {
      dom: 'Bfrtip',
      order: [[0, 'desc']],
      // Configure the buttons
      buttons: [ ],
      language: {
        paginate: {
            first:    '«',
            previous: '‹',
            next:     '›',
            last:     '»'
        },
        aria: {
            paginate: {
                first:    'Primero',
                previous: 'Anterior',
                next:     'Siguiente',
                last:     'Último'
            }
        },
        info: 'Mostrando _START_ a _END_ de _TOTAL_ entradas',
        search: 'Buscar',
        emptyTable: ' '
      },
      info: false
    };
  }

  goBack = () => {
    this.location.back();
  }
}
