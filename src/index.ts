import { config as dotenv } from 'dotenv'
dotenv()

const main = () => {
    console.log('Typescript Template ♥‿♥')
    console.log('NODE_ENV = ' + process.env.NODE_ENV)
}

main()
