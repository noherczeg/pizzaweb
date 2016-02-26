namespace app.home {
    'use strict';

    export interface IHomeVM {
        testVar: string;
        translateCtrlVars: any;
    }

    export class HomeController implements IHomeVM{
        testVar: string;
        translateCtrlVars: any;

        constructor () {
            this.testVar = 'Test Variable in home controller!';
            this.translateCtrlVars = {
                home: 'home'
            }
        }
    }

    angular
        .module('pizzaweb.home')
        .controller('Home', HomeController);
}
