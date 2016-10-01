"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var state_service_1 = require('app/common/state.service');
var BannerComponent = (function () {
    function BannerComponent(stateService) {
        this.stateService = stateService;
        this.body = 'This is the about home body';
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.message = this.stateService.getMessage();
    };
    BannerComponent = __decorate([
        core_1.Component({
            selector: 'banner',
            templateUrl: 'app/banner/banner.component.html',
            providers: [state_service_1.StateService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof state_service_1.StateService !== 'undefined' && state_service_1.StateService) === 'function' && _a) || Object])
    ], BannerComponent);
    return BannerComponent;
    var _a;
}());
exports.BannerComponent = BannerComponent;
//# sourceMappingURL=banner.component.js.map