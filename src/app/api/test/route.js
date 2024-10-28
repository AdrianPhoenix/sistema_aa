import { conn } from "@/libs/mariadb.js";
import { NextResponse } from "next/server";

export const GET = async()=>{
    try {
        const result = await conn.query("SELECT NOW()")

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
}