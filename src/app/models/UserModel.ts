export class UserModel {
  public id: string;
  public email: string;
  public first_name: string;
  public last_name: string;
  public avatar: string;

  constructor(
    _id: string,
    _email: string,
    _first_name: string,
    _last_name: string,
    _avatar: string
  ) {
    this.id = _id;
    this.email = _email;
    this.first_name = _first_name;
    this.last_name = _last_name;
    this.avatar = _avatar;
  }
}
