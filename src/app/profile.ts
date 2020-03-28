export class Profile {
  private _fullName: string;
  private _jobTitle: string;
  private _mobileNumber: string;
  private _email: string;
  private _summary: string;

  constructor() {
  }

  set fullName(name: string) {
    this._fullName = name;
  }

  set jobTitle(title: string) {
    this._jobTitle = title;
  }

  set mobileNumber(mobile: string) {
    this._mobileNumber = mobile;
  }

  set email(emailAddress: string) {
    this._email = emailAddress;
  }

  set summary(text: string) {
    this._summary = text;
  }

  get fullName(): string {
    return this._fullName;
  }

  get jobTitle(): string {
    return this._jobTitle;
  }

  get mobileNumber(): string {
    return this._mobileNumber;
  }

  get email(): string {
    return this._email;
  }

  get summary(): string {
    return this._summary;
  }
}
