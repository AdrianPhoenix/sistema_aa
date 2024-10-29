import { conn } from "@/libs/mariadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const data = await req.json();
    console.log(data);

    let {
      name,
      lastname,
      email,
      cedula,
      phone,
      direction,
      type_client_id,
      loan,
      loan_percentage,
      loan_date,
    } = data;

    type_client_id = parseInt(type_client_id)
    loan = parseInt(loan)
    loan_percentage = parseInt(loan_percentage)


    const result_customer = await conn.query("INSERT INTO customers SET ?", {
      name,
      lastname,
      email,
      cedula,
      phone,
      direction,
      type_client_id,
    });


    const last_customer = await conn.query(
      "SELECT MAX(customer_id) AS last_customer FROM customers"
    );

    console.log(last_customer)

    const customer_id = last_customer[0].last_customer;

    console.log(customer_id)


    const result_loan = await conn.query("INSERT INTO loans SET ?", {
      loan,
      loan_percentage,
      loan_date,
      customer_id,
    });

    console.log(result_loan)
    

    let debt_revenue = (loan * ( loan_percentage / 100 ))
        
    const debt_total = Number.parseInt(debt_revenue) + Number.parseInt(loan)

    console.log(debt_total)


    const result_debt = await conn.query("INSERT INTO debt SET ?", {
      debt_total,
      customer_id,
    });


    console.log(result_debt)

    return NextResponse.json(result_customer);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
