import {Component, OnInit} from '@angular/core';

@Component({
    styles: [require('./style.styl').toString()],
    template: require('./template.jade')()
})
export class LoginComponent implements OnInit {

    // Attributes

    // Methods
        constructor () {}
        ngOnInit () {}

}