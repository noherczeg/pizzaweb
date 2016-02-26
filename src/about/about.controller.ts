namespace app.about {
    'use strict';

    export interface IAdminVM {
        author: Author;
        project: string;
    }

    export class AboutController implements IAdminVM{
        author: Author = new Author('Norbert Csaba Herczeg', 'software developer');
        project: string = 'angular sample app';

        constructor () {}
    }

    export class Author {
        private name: string;
        private position: string;

        constructor (name: string, position: string) {
            this.name = name;
            this.position = position;
        }
    }

    angular
        .module('pizzaweb.about')
        .controller('About', AboutController);
}
