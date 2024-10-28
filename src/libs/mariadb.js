import mariadb from 'serverless-mysql'

export const conn = mariadb({
    config:{
        host: process.env.ENDPOINT,
        user: 'root',
        password: process.env.PASSWORD,
        port: '3306',
        database: process.env.DATABASE
    }
})