import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-edit-historia',
  templateUrl: './edit-historia.component.html',
  styleUrls: ['./edit-historia.component.css']
})
export class EditHistoriaComponent implements OnInit {
  myForm: FormGroup;
  save = 2;
  public filePathf1 = '';
  public filePathI1 = '';
  public filePathI2 = '';
  public filePathI3 = '';
  public filePathI4 = '';
  public key = '';
  uploadedImage: Blob;
  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    public formApi: ApiService,
    private storage: AngularFireStorage,
    private ng2ImgMax: Ng2ImgMaxService,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.actRouter.snapshot.paramMap.get('key');
    this.sForm();
    this.formApi.GetForm(this.key).valueChanges().subscribe(data => {
      if (data.historia) {
        this.myForm.patchValue(data.historia);
        this.myForm.patchValue({nombre: data.nombre, folio: data.orden});
      }
    });
  }

  sForm() {
    this.myForm = this.fb.group({
      nombre: [''],
      folio: [0],
      domicilio: [''],
      fecha: [''],
      edad: [0],
      ocupacion: [''],
      telpar: [''],
      telofi: [''],
      dirofi: [''],
      recomen: [''],
      h1: [''],
      h2: [''],
      h2a: [''],
      h3: [''],
      h4: [''],
      h4a: [''],
      h5: [''],
      h6: [''],
      h7: [''],
      h7a: [false],
      h7b: [false],
      h7c: [false],
      h7d: [false],
      h7e: [false],
      h7f: [false],
      h7g: [false],
      h7h: [false],
      h7i: [false],
      h7j: [false],
      h8: [''],
      h8a: [''],
      h9: [''],
      h10: [''],
      firma: [''],
      da1: [''],
      da2: [''],
      da3: [''],
      da4: [''],
      da5: [''],
      da6: [''],
      da7: [''],
      da8: [''],
      da9: [''],
      de1: [''],
      de2: [''],
      de3: [''],
      de4: [''],
      de5: [''],
      di1: [''],
      di2: [''],
      di3: [''],
      di4: [''],
      di5: [''],
      di6: [''],
      di7: [''],
      di8: [''],
      di9: [''],
      di10: [''],
      dp1: [''],
      dp2: [''],
      dp3: [''],
      dp4: [''],
      dp5: [''],
      dp6: [''],
      dr1: [''],
      dr2: [''],
      dr3: [''],
      dr4: [''],
      dr5: [''],
      dr6: [''],
      dr7: [''],
      dr8: [''],
      dr9: [''],
      dr10: [''],
      dr11: [''],
      dr12: [''],
      dr13: [''],
      dr14: [''],
      dr15: [''],
      dr16: [''],
      dr17: [''],
      dd1: [''],
      dd2: [''],
      dd3: [''],
      dd4: [''],
      dd5: [''],
      dd6: [''],
      dd7: [''],
      dd8: [''],
      dt1: [''],
      dt2: [''],
      dt3: [''],
      dt4: [''],
      dt5: [''],
      dt6: [''],
      dt7: [''],
      dt8: [''],
      dt9: [''],
      dt10: [''],
      dt11: [''],
      dpn1: [''],
      dpn2: [''],
      dpn3: [''],
      dpn4: [''],
      diente: [''],
      fecha2: [''],
      diente2: [''],
      grapa: [''],
      fechap1: [''],
      fechap2: [''],
      fechap3: [''],
      fechap4: [''],
      fechap5: [''],
      descp1: [''],
      descp2: [''],
      descp3: [''],
      descp4: [''],
      descp5: [''],
      observa: [''],
      mm1: [''],
      mm2: [''],
      mm3: [''],
      mm4: [''],
      mm5: [''],
      mm6: [''],
      mm7: [''],
      mm8: [''],
      mm9: [''],
      re1: [''],
      re2: [''],
      re3: [''],
      re4: [''],
      re5: [''],
      re6: [''],
      re7: [''],
      re8: [''],
      re9: [''],
      la1: [''],
      la2: [''],
      la3: [''],
      la4: [''],
      la5: [''],
      la6: [''],
      la7: [''],
      la8: [''],
      la9: [''],
      te1: [''],
      te2: [''],
      te3: [''],
      te4: [''],
      te5: [''],
      te6: [''],
      te7: [''],
      te8: [''],
      te9: [''],
      lm1: [''],
      lm2: [''],
      lm3: [''],
      lm4: [''],
      lm5: [''],
      lm6: [''],
      lm7: [''],
      lm8: [''],
      lm9: [''],
      img1: [''],
      img2: [''],
      img3: [''],
      img4: [''],
      desc1: [''],
      desc2: [''],
      desc3: [''],
      desc4: [''],
    });
  }

  imgChanged($event) {
    // this.myForm.patchValue({firma: $event.target.src});
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image')) {
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
              this.myForm.patchValue({ firma: url });
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

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  submitSurveyData = () => {
    this.formApi.UpdateHistoria(this.myForm.value, this.key);
    this.toastr.success('Actualizado!');
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const ima = inputValue.files[0];
    this.ng2ImgMax.resizeImage(ima, 400, 400).subscribe(
      result => {
        this.uploadedImage = result;
        if (inputValue.name === 'img1') {
          if (this.filePathI1 !== '') {
            const ref = this.storage.ref(this.filePathI1);
            ref.delete();
          }
          this.filePathI1 = `images_draperla/image_${Date.now()}`;
          const fileRef = this.storage.ref(this.filePathI1);
          this.storage.upload(this.filePathI1, this.uploadedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.myForm.patchValue({img1: url});
                this.toastr.success('Imagen cargada correctamente!');
              });
            })
          ).subscribe();
        }
        if (inputValue.name === 'img2') {
          if (this.filePathI2 !== '') {
            const ref = this.storage.ref(this.filePathI2);
            ref.delete();
          }
          this.filePathI2 = `images_draperla/image_${Date.now()}`;
          const fileRef = this.storage.ref(this.filePathI2);
          this.storage.upload(this.filePathI2, this.uploadedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.myForm.patchValue({img2: url});
                this.toastr.success('Imagen cargada correctamente!');
              });
            })
          ).subscribe();
        }
        if (inputValue.name === 'img3') {
          if (this.filePathI3 !== '') {
            const ref = this.storage.ref(this.filePathI3);
            ref.delete();
          }
          this.filePathI3 = `images_draperla/image_${Date.now()}`;
          const fileRef = this.storage.ref(this.filePathI3);
          this.storage.upload(this.filePathI3, this.uploadedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.myForm.patchValue({img3: url});
                this.toastr.success('Imagen cargada correctamente!');
              });
            })
          ).subscribe();
        }
        if (inputValue.name === 'img4') {
          if (this.filePathI4 !== '') {
            const ref = this.storage.ref(this.filePathI4);
            ref.delete();
          }
          this.filePathI4 = `images_draperla/image_${Date.now()}`;
          const fileRef = this.storage.ref(this.filePathI4);
          this.storage.upload(this.filePathI4, this.uploadedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.myForm.patchValue({img4: url});
                this.toastr.success('Imagen cargada correctamente!');
              });
            })
          ).subscribe();
        }
      },
      error => {
        this.toastr.error('Imagen invalida!');
      }
    );
  }
}
