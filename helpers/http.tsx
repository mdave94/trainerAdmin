import Customer from "../models/customer";
import axios from "axios";

const rootURL: string =
  "https://traineradmin-4c2ae-default-rtdb.europe-west1.firebasedatabase.app/";

export function storeCustomer(customer: Customer) {
  axios.post(rootURL + "customers.json", customer);
}

export async function getCustomerList(): Promise<Customer[]> {
  const response = await axios.get(rootURL + "/customers.json");

  const customers: Customer[] = [];

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
      commentLogs: response.data[key].commentLogs,
    };

    customers.push(customerObj);
  }

  return customers;
}
export async function storeComment(customerId: string, comment: string) {
  try {
    const commentRef = rootURL + `customers/${customerId}/commentLogs.json`;

    await axios.post(commentRef, `"${comment}"`);

    console.log("Comment added successfully");
  } catch (error) {
    console.error("Error adding comment:", error);
  }
}
