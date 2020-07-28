import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-expediente',
  templateUrl: './edit-expediente.component.html',
  styleUrls: ['./edit-expediente.component.css']
})
export class EditExpedienteComponent implements OnInit {
  myForm: FormGroup;
  save = 2;
  public key = '';
  uploadedImage: Blob;
  public filePathI1 = '';
  public filePathI2 = '';
  public filePathI3 = '';
  public filePathI4 = '';
  public filePathI5 = '';
  public filePathI6 = '';
  public filePathI7 = '';
  public filePathI8 = '';
  public filePathf1 = '';
  public filePathf2 = '';
  public filePathf3 = '';
  public filePathf4 = '';
  public filePathf5 = '';
  public filePathf6 = '';
  public filePathf7 = '';
  public filePathf8 = '';
  public filePathf9 = '';
  public filePathf10 = '';
  public filePathf11 = '';
  public filePathf12 = '';
  public filePathf13 = '';
  public filePathf14 = '';
  public filePathf15 = '';
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
      if (data.expediente) {
        this.myForm.patchValue(data.expediente);
      }
    });
  }

  sForm() {
    this.myForm = this.fb.group({
      nombre: [''],
      folio: [0],
      edad: [0],
      tel: [''],
      fecha: [''],
      sexo: [''],
      cel: [''],
      email: [''],
      direcc: [''],
      cp: [''],
      colonia: [''],
      munic: [''],
      estado: [''],
      escola: [''],
      ecivil: [''],
      fechan: [''],
      peso: [''],
      estatu: [''],
      g1: [''],
      g2: [''],
      g3: [''],
      g4: [''],
      g5: [''],
      g6: [''],
      g7: [''],
      g1a: [''],
      g2a: [''],
      g3a: [''],
      g4a: [''],
      g5a: [''],
      g6a: [''],
      g7a: [''],
      e1: [''],
      e2: [''],
      e3: [''],
      e4: [''],
      e5: [''],
      e6: [''],
      e7: [''],
      e8: [''],
      e9: [''],
      e10: [''],
      ea1: [''],
      ea2: [''],
      ea3: [''],
      ea4: [''],
      ea5: [''],
      ea6: [''],
      ea7: [''],
      ea8: [''],
      ea9: [''],
      ea10: [''],
      h1: [''],
      h2: [''],
      h3: [''],
      h4: [''],
      h5: [''],
      h1a: [''],
      h2a: [''],
      h3a: [''],
      h4a: [''],
      h5a: [''],
      fultima: [''],
      trataa: [''],
      aditame: [''],
      vcepill: [''],
      od1: [''],
      od2: [''],
      od3: [''],
      od4: [''],
      od5: [''],
      od6: [''],
      od7: [''],
      od8: [''],
      od9: [''],
      od10: [''],
      od11: [''],
      od12: [''],
      od13: [''],
      od14: [''],
      od15: [''],
      od16: [''],
      od17: [''],
      od18: [''],
      od19: [''],
      od20: [''],
      od21: [''],
      od22: [''],
      od23: [''],
      od24: [''],
      od25: [''],
      od26: [''],
      od27: [''],
      od28: [''],
      od29: [''],
      od30: [''],
      od31: [''],
      od32: [''],
      od33: [''],
      od34: [''],
      od35: [''],
      od36: [''],
      od37: [''],
      od38: [''],
      od39: [''],
      od40: [''],
      od41: [''],
      od42: [''],
      od43: [''],
      od44: [''],
      od45: [''],
      od46: [''],
      od47: [''],
      od48: [''],
      od49: [''],
      od50: [''],
      od51: [''],
      od52: [''],
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
      f11: [''],
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
      dg1: [''],
      dg2: [''],
      dg3: [''],
      dg4: [''],
      dg5: [''],
      dg6: [''],
      dg7: [''],
      dg8: [''],
      dg9: [''],
      dg10: [''],
      dg11: [''],
      t1: [''],
      t2: [''],
      t3: [''],
      t4: [''],
      t5: [''],
      t6: [''],
      t7: [''],
      t8: [''],
      t9: [''],
      t10: [''],
      t11: [''],
      fi1: [''],
      fi2: [''],
      fi3: [''],
      fi4: [''],
      fi5: [''],
      fi6: [''],
      fi7: [''],
      fi8: [''],
      fi9: [''],
      fi10: [''],
      fi11: [''],
      obser: [''],
      firma1: [''],
      firma2: [''],
      img1: [''],
      img2: [''],
      img3: [''],
      img4: [''],
      img5: [''],
      img6: [''],
      img7: [''],
      img8: [''],
      des1: [''],
      des2: [''],
      des3: [''],
      des4: [''],
      des5: [''],
      des6: [''],
      des7: [''],
      des8: [''],
      af1: [''],
      af1a: [''],
      af2: [''],
      af3: [''],
      af4: [''],
      af5: [''],
      af6: [''],
      af7: [''],
      af8: [''],
      af9: [''],
      af10: [''],
      af11: [''],
      af12: [''],
      af13: [''],
      af14: [''],
      af15: [''],
      af16: [''],
      af17: [''],
      af18: [''],
      af19: [''],
      af20: [''],
      af21: [''],
      af22: [''],
      af23: [''],
      af24: [''],
      af24a: [''],
      af25: [''],
      af26: [''],
      af27: [''],
      af28: [''],
      af29: [''],
      af30: [''],
      af31: [''],
      af32: [''],
      af33: [''],
      af34: [''],
      af35: [''],
      af36: [''],
      af37: [''],
      af38: [''],
      af39: [''],
      af40: [''],
      af41: [''],
      af42: [''],
      af43: [''],
      af44: [''],
      af45: [''],
      af46: [''],
      af47: [''],
      af48: [''],
      af49: [''],
      af50: [''],
      af51: [''],
      af52: [''],
      af53: [''],
      af54: [''],
      af55: [''],
      af55a: [''],
      af56: [''],
      af57: [''],
      af58: [''],
      af59: [''],
      af60: [''],
      af61: [''],
      af62: [''],
      af63: [''],
      af64: [''],
      af65: [''],
      af66: [''],
      af67: [''],
      af68: [''],
      af69: [''],
      af70: [''],
      af71: [''],
      af72: [''],
      af73: [''],
      af74: [''],
      af75: [''],
      af76: [''],
      af77: [''],
      af78: [''],
      af79: [''],
      af80: [''],
      af81: [''],
      af82: [''],
      af83: [''],
      af84: [''],
      af85: [''],
      af86: [''],
      af87: [''],
      af88: [''],
      af89: [''],
      af90: [''],
      af91: ['']
    });
  }

  imgChanged($event) {
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
              this.myForm.patchValue({fi1: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged2($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf2 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf2);
        this.storage.upload(this.filePathf2, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({fi2: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged3($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf3 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf3);
        this.storage.upload(this.filePathf3, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({fi3: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged4($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf4 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf4);
        this.storage.upload(this.filePathf4, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({fi4: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged5($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf5 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf5);
        this.storage.upload(this.filePathf5, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({fi5: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged6($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf6 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf6);
        this.storage.upload(this.filePathf6, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({fi6: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged7($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf7 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf7);
        this.storage.upload(this.filePathf7, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({fi7: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged8($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf8 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf8);
        this.storage.upload(this.filePathf8, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({fi8: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged9($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf9 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf9);
        this.storage.upload(this.filePathf9, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({fi9: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged10($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf10 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf10);
        this.storage.upload(this.filePathf10, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({fi10: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged11($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf11 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf11);
        this.storage.upload(this.filePathf11, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({fi11: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged12($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf12 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf12);
        this.storage.upload(this.filePathf12, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({firma1: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged13($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf13 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf13);
        this.storage.upload(this.filePathf13, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({firma2: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged14($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf14 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf14);
        this.storage.upload(this.filePathf14, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({af63: url});
              this.toastr.success('Firma Actualizada!');
            });
          })
        ).subscribe();
      }
    }
  }
  imgChanged15($event) {
    if ($event.target.src) {
      const imgURL = $event.target.src;
      if (imgURL.startsWith('data:image') ) {
        const block = imgURL.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = this.b64toBlob(realData, contentType);
        /* const filePath = `signs/image_${Date.now()}`; */
        this.filePathf15 = `signs_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathf15);
        this.storage.upload(this.filePathf15, blob).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({af64: url});
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
    this.formApi.UpdateExpediente(this.myForm.value, this.key);
    this.toastr.success('Actualizado!');
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  /* readThis(inputValue: any): void {
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
        if (inputValue.name === 'img5') {
          if (this.filePathI5 !== '') {
            const ref = this.storage.ref(this.filePathI5);
            ref.delete();
          }
          this.filePathI5 = `images_draperla/image_${Date.now()}`;
          const fileRef = this.storage.ref(this.filePathI5);
          this.storage.upload(this.filePathI5, this.uploadedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.myForm.patchValue({img5: url});
                this.toastr.success('Imagen cargada correctamente!');
              });
            })
          ).subscribe();
        }
        if (inputValue.name === 'img6') {
          if (this.filePathI6 !== '') {
            const ref = this.storage.ref(this.filePathI6);
            ref.delete();
          }
          this.filePathI6 = `images_draperla/image_${Date.now()}`;
          const fileRef = this.storage.ref(this.filePathI6);
          this.storage.upload(this.filePathI6, this.uploadedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.myForm.patchValue({img6: url});
                this.toastr.success('Imagen cargada correctamente!');
              });
            })
          ).subscribe();
        }
        if (inputValue.name === 'img7') {
          if (this.filePathI7 !== '') {
            const ref = this.storage.ref(this.filePathI7);
            ref.delete();
          }
          this.filePathI7 = `images_draperla/image_${Date.now()}`;
          const fileRef = this.storage.ref(this.filePathI7);
          this.storage.upload(this.filePathI7, this.uploadedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.myForm.patchValue({img7: url});
                this.toastr.success('Imagen cargada correctamente!');
              });
            })
          ).subscribe();
        }
        if (inputValue.name === 'img8') {
          if (this.filePathI8 !== '') {
            const ref = this.storage.ref(this.filePathI8);
            ref.delete();
          }
          this.filePathI8 = `images_draperla/image_${Date.now()}`;
          const fileRef = this.storage.ref(this.filePathI8);
          this.storage.upload(this.filePathI8, this.uploadedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.myForm.patchValue({img8: url});
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
  } */

  readThis(inputValue: any): void {
    const ima = inputValue.files[0]; 
    const reader = new FileReader();
    if (ima) {
      reader.readAsDataURL(ima);
    }

    reader.onloadend = () => {
      const imgURL = reader.result as string;
      const block = imgURL.split(';');
      const contentType = block[0].split(':')[1];
      const realData = block[1].split(',')[1];
      this.uploadedImage = this.b64toBlob(realData, contentType);
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
      if (inputValue.name === 'img5') {
        if (this.filePathI5 !== '') {
          const ref = this.storage.ref(this.filePathI5);
          ref.delete();
        }
        this.filePathI5 = `images_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI5);
        this.storage.upload(this.filePathI5, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({img5: url});
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img6') {
        if (this.filePathI6 !== '') {
          const ref = this.storage.ref(this.filePathI6);
          ref.delete();
        }
        this.filePathI6 = `images_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI6);
        this.storage.upload(this.filePathI6, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({img6: url});
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img7') {
        if (this.filePathI7 !== '') {
          const ref = this.storage.ref(this.filePathI7);
          ref.delete();
        }
        this.filePathI7 = `images_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI7);
        this.storage.upload(this.filePathI7, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({img7: url});
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
      if (inputValue.name === 'img8') {
        if (this.filePathI8 !== '') {
          const ref = this.storage.ref(this.filePathI8);
          ref.delete();
        }
        this.filePathI8 = `images_draperla/image_${Date.now()}`;
        const fileRef = this.storage.ref(this.filePathI8);
        this.storage.upload(this.filePathI8, this.uploadedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.myForm.patchValue({img8: url});
              this.toastr.success('Imagen cargada correctamente!');
            });
          })
        ).subscribe();
      }
    };

  }
}
