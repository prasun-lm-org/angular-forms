import { AbstractControl } from "@angular/forms";

export function ValidateUsername(control: AbstractControl) {
  const abusiveWords = ['fool', 'idiot', 'damn', 'bloody'];
  const username = control.value;
  if (abusiveWords.includes(username)) {
    return {isAbusive: true}
  } else {
    return null;
  }
}