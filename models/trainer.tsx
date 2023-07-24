class Trainer {
  constructor(
    public id: string,
    public name: string,
    public phoneNumber: string,
    public email: string
  ) {
    (this.id = id),
      (this.name = name),
      (this.phoneNumber = phoneNumber),
      (this.email = email);
  }
}

export default Trainer;
