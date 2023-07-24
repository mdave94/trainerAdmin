class Customer {
  constructor(
    public id: string,
    public name: string,
    public nickname: string,
    public birthday: string,
    public phoneNumber: string,
    public email: string,
    public membershipType: string
  ) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.birthday = birthday;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.membershipType = membershipType;
  }
}

export default Customer;
