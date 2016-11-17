import {Component, OnInit} from '@angular/core';

@Component({
    styles: [require('./style.styl').toString()],
    template: require('./template.jade')()
})
export class RegisterComponent implements OnInit {

    // Attributes

    // Methods
        constructor () {}
        ngOnInit () {}

}