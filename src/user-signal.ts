import { signal } from "@angular/core";

const firstName = signal('Fouchimi');

console.log("My name: ", firstName());

firstName.set('Hello');

console.log("My new Name: ", firstName());

firstName.update(name => name.toUpperCase());

console.log("Capitalized Name is: ", firstName());