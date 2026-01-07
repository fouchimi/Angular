import { computed, signal } from "@angular/core";

const firstName = signal('Fouchimi');
const capitalizedFirstName = computed(() => firstName().toLocaleUpperCase());

console.log(capitalizedFirstName());

firstName.set("Mohamed");
console.log(capitalizedFirstName());