import Customer from "../models/customer";
import axios from "axios";

const rootURL: string =
  "https://traineradmin-4c2ae-default-rtdb.europe-west1.firebasedatabase.app/";

export function storeCustomer(customer: Customer) {
  axios.post(rootURL + "/customers.json", customer);
}

export async function getCustomerList(): Promise<Customer[]> {
  const response = await axios.get(rootURL + "/customers.json");

  const customers: Customer[] = [];

  //return console.log("response", response.data);
  for (const key in response.data) {
    const customerObj = {
      id: key,
      name: response.data[key].name,
      birthday: response.data[key].birthday,
      price: response.data[key].price,
      nickname: response.data[key].nickname,
      phoneNumber: response.data[key].phoneNumber,
      email: response.data[key].email,
      membershipType: response.data[key].membershipType,
    };

    customers.push(customerObj);
  }

  return customers;
}
