import { Component, signal } from "@angular/core";

@Component({
    selector: "user-profile",
    templateUrl: "user-profile.html",
    styleUrl: "user-profile.css"
})

export class UserProfile {
    userName = signal('Ousmane');
    isAdmin = signal(false);
    admin = signal("Barack");

    isValidUserId = signal(false);

    cancelSubscription(event : Event) {

    }

    toggle(event : Event) {
        console.log(event);
        if(!this.isAdmin()) {
            this.isAdmin.set(true);
        } else {
            this.isAdmin.set(false);
        }
    }
}