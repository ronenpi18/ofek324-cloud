import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent implements OnInit, OnDestroy {
    form: FormGroup;
    aboutYouStep1: FormGroup;
    aboutYourServiceStep2: FormGroup;
    aboutYourConsumersStep3: FormGroup;
    doneStep4: FormGroup;

    private _unsubscribeAll: Subject<any>;
    private formModel: object = {
        firstName : ['', Validators.required],
        lastName  : ['', Validators.required],
        ADGroup  : ['', Validators.required],
        serviceName: ['', Validators.required],
        gitURL: ['', Validators.required],
        description: ['', Validators.required],
        tech: ['', Validators.required],
        isUserFields: ['', Validators.required],
        userFields: ['']
    };

  constructor(
      private _formBuilder: FormBuilder
  ) {
      this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
      this.form = this._formBuilder.group(this.formModel);
      this.aboutYouStep1 = this._formBuilder.group({
          firstName: this.formModel['firstName'],
          lastName: this.formModel['lastName'],
          ADGroup: this.formModel['ADGroup']
      });
      this.aboutYourServiceStep2 = this._formBuilder.group({
          serviceName: this.formModel['serviceName'],
          gitURL: this.formModel['gitURL'],
          description: this.formModel['description'],
          tech: this.formModel['tech']
      });
      this.aboutYourConsumersStep3 = this._formBuilder.group({
          isUserFields: this.formModel['isUserFields'],
          userFields: this.formModel['userFields']
      });

  }
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    /**
     * Finish the vertical stepper
     */
    finishVerticalStepper(): void
    {
        let postObj = Object.assign(this.aboutYouStep1.getRawValue(),this.aboutYourServiceStep2.getRawValue(),this.aboutYourConsumersStep3.getRawValue());
        alert(JSON.stringify(postObj));
    }
}
