import { Component } from '@angular/core';

@Component({
    selector:       'app-root',
    styleUrls:      ['./app.component.scss'],
    templateUrl:    './app.component.html'
})

export class AppComponent {

    public data: any[] = [];

    constructor() {
        setTimeout(() => {
            for (let i = 0; i < 100; i++) {
                this.data.push({
                    'value': Math.floor(Math.random() * 100) + 1
                });
            };
        }, 1);
    };

}