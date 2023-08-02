export function checkIsValidEmail(email: string) {
  return email.includes("@") && email.includes(".");
}
