import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-receta',
  templateUrl: './edit-receta.component.html',
  styleUrls: ['./edit-receta.component.css']
})
export class EditRecetaComponent implements OnInit {
  myForm: FormGroup;
  save = 2;
  public filePathf1 = '';
  public key = '';

  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    public formApi: ApiService,
    private storage: AngularFireStorage,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.actRouter.snapshot.paramMap.get('key');
    this.sForm();
    this.formApi.GetForm(this.key).valueChanges().subscribe(data => {
      if (data.receta) {
        this.myForm.patchValue(data.receta);
        this.myForm.patchValue({nombre: data.nombre, folio: data.orden});
      }
    });
  }

  sForm() {
    this.myForm = this.fb.group({
      nombre: [''],
      folio: [0],
      domicilio: [''],
      edad: [null],
      tel: [''],
      fecha: [''],
      rp: [''],
      firma: ['']
    });
  }

  imgChanged($event) {
    // this.myForm.patchValue({firma: $event.target.src});
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf1 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf1);
        this.storage.upload(this.filePathf1, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({firma: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  b64toBlob(b64Data, contentType, sliceSize?) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  submitSurveyData = () => {
    this.formApi.UpdateReceta(this.myForm.value, this.key);
    this.toastr.success('Actualizado!');
  }
}
