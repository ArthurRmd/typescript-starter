import { config as dotenv } from 'dotenv'
import { env } from '../utils/template/env'

dotenv()

const main = (): void => {
    console.log('Typescript Template ♥‿♥')
    console.log('NODE_ENV = ' + env('NODE_ENV', 'dev'))
}

main()
