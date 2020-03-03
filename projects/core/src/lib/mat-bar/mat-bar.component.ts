import { Input, OnInit, Renderer, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
    selector:       'mat-bar',
    styleUrls:      ['./mat-bar.component.scss'],
    templateUrl:    './mat-bar.component.html'
})

export class MatBarComponent implements OnInit, OnDestroy {

    @Input('color') private color: string = '#E0E0E0';
    @Input('title') private title: string = '';
    @Input('value') private value: number = 0;
    
    constructor(public element: ElementRef, public renderer: Renderer) {};

    public height(value: number) {
        this.renderer.setElementStyle(this.element.nativeElement, 'height', value + 'px');
    };

    ngOnInit() {
        this.renderer.setElementStyle(this.element.nativeElement, 'background-color', this.color);
    };

    ngOnDestroy() {};

}