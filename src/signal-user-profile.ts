import { Component, signal, computed } from "@angular/core";

@Component({
    selector : "signal-user-profile",
    template: `
      <h1>User Profile</h1>
      <p>This is user profile page using signal</p>
    `
})

export class SignalUserProfile {
    isTrial = signal(false);
    isTrialExpired = signal(true);
    showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());

    activateTrial() {
        this.isTrial.set(true);
    }
}