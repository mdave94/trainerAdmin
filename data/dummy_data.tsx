import CommentsLog from "../models/commentsLog";
import Customer from "../models/customer";
import Trainer from "../models/trainer";
export const CUSTOMERS: Customer[] = [
  new Customer(
    "c1",
    "First User",
    "firsty",
    "1991-02-11",
    "0123456",
    "email@test.hu",
    "10"
  ),
  new Customer(
    "c2",
    "Second User",
    "secondy",
    "1985-05-22",
    "0123457",
    "email2@test.hu",
    "20"
  ),
  new Customer(
    "c3",
    "Third User",
    "thirdy",
    "1990-11-15",
    "0123458",
    "email3@test.hu",
    "0"
  ),
  new Customer(
    "c4",
    "Fourth User",
    "fourthy",
    "1987-09-03",
    "0123459",
    "email4@test.hu",
    "0"
  ),
  new Customer(
    "c5",
    "Fifth User",
    "fifthy",
    "1995-07-25",
    "0123460",
    "email5@test.hu",
    "10"
  ),
  new Customer(
    "c6",
    "Sixth User",
    "sixthy",
    "1988-03-17",
    "0123461",
    "email6@test.hu",
    "0"
  ),
  new Customer(
    "c7",
    "Seventh User",
    "seventhy",
    "1993-06-09",
    "0123462",
    "email7@test.hu",
    "10"
  ),
  new Customer(
    "c8",
    "Eighth User",
    "eighthy",
    "1986-12-29",
    "0123463",
    "email8@test.hu",
    "20"
  ),
  new Customer(
    "c9",
    "Ninth User",
    "ninthty",
    "1992-04-01",
    "0123464",
    "email9@test.hu",
    "10"
  ),
  new Customer(
    "c10",
    "Tenth User",
    "tenthy",
    "1998-08-14",
    "0123465",
    "email10@test.hu",
    "0"
  ),
];

export const TRAINERS: Trainer[] = [
  new Trainer("t1", "John Doe", "0123456789", "john.doe@example.com"),
  new Trainer("t2", "Jane Smith", "9876543210", "jane.smith@example.com"),
  new Trainer(
    "t3",
    "Michael Johnson",
    "1112223333",
    "michael.johnson@example.com"
  ),
  new Trainer("t4", "Emily Davis", "4445556666", "emily.davis@example.com"),
  new Trainer("t5", "David Lee", "7778889999", "david.lee@example.com"),
];

export const COMMENTS: CommentsLog[] = [
  new CommentsLog("k1", new Date(), "Randm szöveg  "),
  new CommentsLog("k2", new Date(), "Randm Text ASDASDASD "),
  new CommentsLog("k3", new Date(), "sasLorem ipsum akasdeg  "),
];
