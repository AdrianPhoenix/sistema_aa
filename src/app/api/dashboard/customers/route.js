import { NextResponse } from "next/server";
import { conn } from "@/libs/mariadb";

export const GET = async () => {
  try {
    const result = await conn.query(`
            SELECT * FROM ((customers
            INNER JOIN loans ON customers.customer_id = loans.customer_id)
            INNER JOIN debt ON customers.customer_id = debt.customer_id); 
    `);

    return NextResponse.json(result)

  } catch (error) {
    return NextResponse.json(
        {
            message: error.message
        },
        {
            status: 500
        }
    )
  }
};
