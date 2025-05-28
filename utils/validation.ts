export class ValidationUtils {
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isValidPassword(password: string): boolean {
    // syarat password:
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  static validateRegisterInput(
    email: string,
    password: string,
    name?: string
  ): string[] {
    const errors: string[] = [];

    if (!email) {
      errors.push("Email is required");
    } else if (!this.isValidEmail(email)) {
      errors.push("Please provide a valid email address");
    }

    if (!password) {
      errors.push("Password is required");
    } else if (!this.isValidPassword(password)) {
      errors.push(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      );
    }

    if (name && name.trim().length < 2) {
      errors.push("Name must be at least 2 characters long");
    }

    return errors;
  }

  static validateLoginInput(email: string, password: string): string[] {
    const errors: string[] = [];

    if (!email) {
      errors.push("Email is required");
    } else if (!this.isValidEmail(email)) {
      errors.push("Please provide a valid email address");
    }

    if (!password) {
      errors.push("Password is required");
    }

    return errors;
  }
}
