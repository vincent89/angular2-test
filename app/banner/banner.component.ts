import { Component } from '@angular/core';
import { StateService } from 'app/common/state.service';

@Component({
    selector:       'banner',
    templateUrl:    'app/banner/banner.component.html'
    providers: [StateService]
})
export class BannerComponent {
    body:           string = 'This is the about home body';
    message:        string;

    constructor(private stateService: StateService) {

    }

    ngOnInit() {
        this.message = this.stateService.getMessage();
    }
}