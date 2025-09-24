import { Component, OnInit } from '@angular/core';
import { TravelDestinationObject } from '../../service/travel-destination-object';
import { TravelObjectType } from '../../model/TravelModel.type';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ratingstar } from '../ratingstar/ratingstar';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-adminedit',
  imports: [CommonModule, ReactiveFormsModule, Ratingstar],
  templateUrl: './adminedit.html',
  styleUrl: './adminedit.css',
})
export class Adminedit implements OnInit {
  // cityname = new FormControl();
  // citydescription = new FormControl();
  // cityplaces = new FormControl();
  // price = new FormControl();
  // image = new FormControl();
  // rating = new FormControl();
  addNewCity: boolean = false;
  isEdit: boolean = false;
  editId: string = '';
  addForm!: FormGroup;
  constructor(public service: TravelDestinationObject) {}
  editForm!: FormGroup;
  ngOnInit(): void {
    this.editForm = new FormGroup({
      cityname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      citydescription: new FormControl('', [Validators.required, Validators.minLength(10)]),
      cityplaces: new FormControl('', [Validators.required]),
      price: new FormControl(0, [
        Validators.required,
        Validators.maxLength(6),
        Validators.pattern(/^\d+$/),
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(/^https?:\/\/.+\.(jpg|png|jpeg|webp)$/i),
      ]),
      rating: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(5)]),
    });
    this.addForm = new FormGroup({
      cityid: new FormControl('', [Validators.required]),
      cityname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      citydescription: new FormControl('', [Validators.required, Validators.minLength(10)]),
      cityplaces: new FormControl('', [Validators.required]),
      price: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        Validators.pattern(/^\d+$/),
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(/^https?:\/\/.+\.(jpg|png|jpeg|webp)$/i),
      ]),
      rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(5)]),
    });
  }
  onEditClick(id: string) {
    this.editId = id;
    this.isEdit = true;
    console.log(id);
    const temp = this.service.getTravelDestinationById(this.editId)[0];
    this.editForm.setValue({
      cityname: temp.cityName,
      citydescription: temp.cityDescription,
      cityplaces: temp.placesToSee.join(','),
      price: temp.price,
      image: temp.image,
      rating: temp.rating,
    });
    // this.cityname.setValue(temp.cityName);
    // this.citydescription.setValue(temp.cityDescription);
    // this.cityplaces.setValue(temp.placesToSee.join(','));
    // this.image.setValue(temp.image);
    // this.price.setValue(temp.price);
    // this.rating.setValue(temp.rating);
  }
  onNewClick() {
    this.addNewCity = true;
  }
  onDeleteClick(id: string) {
    const confirm = window.confirm('Are you sure about deleting the package');
    if (confirm) {
      this.service.deleteVacationById(id);
    }
  }
  onCancelClick() {
    this.editId = '';
    this.isEdit = false;
    this.editForm.reset();
  }
  onAddClick(flag: boolean) {
    var newPackage: TravelObjectType;
    if (flag) {
      newPackage = {
        cityID: 'C008',
        cityName: 'Banglore',
        cityDescription: 'silicon city',
        placesToSee: ['silkboard', 'ecity'],
        show_image: 'hidden',
        button_name: 'hide',
        rating: 5,
        btntype: 'btn-danger',
        price: 20000,
        image: 'https://wallpaperaccess.com/full/9267542.jpg',
      };
    } else {
      const formValues = this.addForm.value;
      console.log(formValues);
      newPackage= {
        cityID: formValues.cityid,
        cityName: formValues.cityname,
        cityDescription: formValues.citydescription,
        placesToSee: formValues.cityplaces.split(','),
        show_image: 'hidden',
        button_name: 'hide',
        rating: parseFloat(formValues.rating.toString()),
        btntype: 'btn-danger',
        price: parseFloat(formValues.price),
        image: formValues.image,
      };
    }

    if (this.service.addPackageIfIdDoesNotExist(newPackage)) {
      alert('Package Added Sucessfully');
      this.addNewCity = false;
      this.addForm.reset();
    } else {
      alert('Package with the same id exist');
    }
  }
  onCancelClickInAdd() {
    this.addNewCity = false;
  }
  onSaveClick() {
    this.editForm.markAllAsTouched();
    if (this.editForm.invalid) {
      console.log('The Form Is Invalid');
      return;
    }
    const formValues = this.editForm.value;

    const editedPackage: TravelObjectType = {
      cityID: this.editId,
      cityName: formValues.cityname,
      cityDescription: formValues.citydescription,
      placesToSee: formValues.cityplaces.split(','),
      show_image: 'hidden',
      button_name: 'hide',
      rating: formValues.rating.toString(),
      btntype: 'btn-danger',
      price: parseInt(formValues.price),
      image: formValues.image,
    };
    // const editedPackage: TravelObjectType = {
    //   cityID: this.editId,
    //   cityName: this.cityname.value.toString(),
    //   cityDescription: this.citydescription.value.toString(),
    //   placesToSee: this.cityplaces.value.toString().split(','),
    //   show_image: 'hidden',
    //   button_name: 'hide',
    //   rating: this.rating.value.toString(),
    //   btntype: 'btn-danger',
    //   price: parseInt(this.price.value.toString()),
    //   image: this.image.value.toString(),
    // };
    this.service.updateDestinationDetailById(this.editId, editedPackage);
    this.editId = '';
    this.isEdit = false;
    this.editForm.reset();
  }
}
