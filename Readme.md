# Intro

The goal of this sample to is get started with VueJS.

We will get as starting point an application that displays a list of github members that
belongs to an organization (in the starting excercise is hardcoded to _lemoncode_), and 
we will add an input element to let the user choose another organization to query.

# Excercise

- Start with the stating implementation that is located under the folder *00_start*.

- Let's install the needed dependencies.

```bash
npm install
```

- And start the application to check that everything is working as expected.

```bash
npm start
```

- If we check the current implementation we are getting a list of members belonging to lemoncode
organization, that's nice but we would like to let the user to be able to type the name of the 
orgnization he wants, hit ok and display the list of members for that organization.

- Hints:

  - Create a new entry on the state with the current organization name (_lemoncode_ by default).
  - Create an input to hold the organization member name.
  - Tie up on change to the organization state change.
  - Retrieve the name of the organization from the state before running the query.

# Optional items

If you want to play more with VueJS here you have some proposals to enhance this excercise:

- Add [vuetify](https://github.com/vuetifyjs/vuetify) support, display data in cards or a table.
- Add paging (you will need to update UI, plus client rest api).
- Click on a given member and navigate to a details page where you can read the details of that member (you will need to find out the github api endpoint to retrieve that info).

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
