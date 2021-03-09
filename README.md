# Typescript Starter

This starter use : 
- `Jest`
- `EsLint`
- `Prettier`
- `DotEnv`
## Installation 

    yarn 

    cp .env.example .env


## Commands
```javascript
// Watch mode
 yarn start

// Production mode
 yarn build

// Run test
 yarn test

// Generate test coverage
 yarn test:coverage

// Show linter error
 yarn lint

// Fix linter error
 yarn lint:fix
```

## Env

```typescript
// Get NODE_ENV value
env('NODE_ENV')

// Get NODE_ENV value with default value (if NODE_ENV is empty)
env('NODE_ENV', 'dev')
```
