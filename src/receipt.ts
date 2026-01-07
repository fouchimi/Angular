import { Component, inject } from "@angular/core";
import { Calculator } from "./calculator";

@Component({
    selector: "receipt",
    template: `<h1>Total cost {{ totalCost }}</h1>`
})

export class Receipt {
    private calculator = inject(Calculator);
    totalCost = this.calculator.add(2, 5);
}