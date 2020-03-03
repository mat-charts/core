import { NgModule } from '@angular/core';
import { MatBarComponent } from './mat-bar/mat-bar.component';
import { MatChartComponent } from './mat-chart/mat-chart.component';

@NgModule({
    exports: [
        MatBarComponent,
        MatChartComponent
    ],
    providers: [],
    declarations: [
        MatBarComponent,
        MatChartComponent
    ]
})

export class MatChartsModule {}