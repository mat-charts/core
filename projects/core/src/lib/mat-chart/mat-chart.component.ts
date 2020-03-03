import { MatBarComponent } from '../mat-bar/mat-bar.component';
import { Component, OnDestroy, ElementRef, ContentChildren, AfterContentInit } from '@angular/core';

@Component({
    selector:       'mat-chart',
    styleUrls:      ['./mat-chart.component.scss'],
    templateUrl:    './mat-chart.component.html'
})

export class MatChartComponent implements AfterContentInit, OnDestroy {

    @ContentChildren(MatBarComponent) private bars;

    constructor(private element: ElementRef) {};

    private max:            number  = 0;
    private increment:      number  = 0;
    private subscriptions:  any     = {};

    private async process() {
        const height = this.element.nativeElement.clientHeight - 1;

        this.bars.map(bar => {
            if (bar.value > this.max) {
                this.max        = bar.value;
                this.increment  = (height / bar.value);
            };
        });

        this.bars.map(bar => bar.height(this.increment * bar.value));
    };

    ngAfterContentInit() {
        this.subscriptions.bars = this.bars.changes.subscribe(change => this.process());
    };

    ngOnDestroy() {
        this.subscriptions.bars.unsubscribe();
    };

}