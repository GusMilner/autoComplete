

## **Project Setup:**

- [Download Node](https://nodejs.org/en/download)
- [Install NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Install Serverless globally
    - `npm install -g serverless`
    - In terminal run `serverless`, [this should prompt to add AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/) 
    - Added in npm package and serverless plugin to run a local env if needed.
- Run project dependencies
  - `npm install`

## Runs project compiler
- `npm run compile`
## Runs project unit tests

- `npm run test`

## Runs Serverless package command

- `npm run package`

## Runs serverless locally

- `npm run local`

## Deploys project up to AWS

- `npm run deploy`



## Running CURL command on local setup
- To deploy api locally using serverless offline
  - `npm run local`
- Run the following CURL Command in a separate terminal to start searching for students by name
  - `CURL -X GET "http://localhost:3000/dev/students/search?name=j"`