# GraphQL Sample

This is a sample project to demonstrate how to use GraphQL with Express and TypeScript.

## How to run

Clone the repository

```bash
git clone https://github.com/Guilherme-07062002/socket.io-sample.git
```

Install the dependencies

```bash
npm install
```

Run the server

```bash
npm run dev
```

## How to use

To send a query, you can use the following URL:

```text
http://localhost:3000/graphql
```

You can use the following queries and mutations:

* Use the following query to get the list of pets:

  ```graphql
    {
      pets {
        name
        age
        ownerName
      }
    }
  ```

  (Note that the fields between curly braces are the fields that you want to get from the query, in this case when you send the query, you will get the name, age and ownerName of each pet)

* You can use the following query to get a pet by id:

  ```graphql
    {
      pet(id: "pet_id") {
        id
        name
        age
      }
    }
  ```

* You can use the following mutation to create a pet:

  ```graphql
    mutation {
      create(name: "pet", age: 0, ownerName: "owner"){
        id
        name
        age
        ownerName
      }
    }
  ```

  (To use a mutation, you need to use the keyword "mutation" and then the name of the mutation, in this case "create", and then you need to pass the parameters that the mutation needs, in this case `name`, `age` and `ownerName`)

* You can use the following mutation to update a pet:

  ```graphql
    mutation {
      update(id: "pet_id" ,name: "new name"){
        id
        name
        age
        ownerName
      }
    }
  ```

* You can use the following mutation to delete a pet:

  ```graphql
    mutation {
      delete(id: "pet_id")
    }
  ```
