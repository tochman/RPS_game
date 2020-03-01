# Rock Paper Scissors [WIP]


This project is a Challenge by CraftAcademy Interview series, the user will be able to play
the famous game rock, paper, and scissors with a clean and functional interface.

This app has been created using React check more on: https://reactjs.org/

## Getting Started

To play you can visit this page :

[WIP page]

To make use of the code you will have to install:

1- Visual code studio or any other code editor.
2- Install the latest version of Node.js: https://nodejs.org/en/
3- Once you open the code in your code editor run: yarn install, as it will install all the files in the package.
4- To play it locally use the command: 

```
yarn start 
```
this will open the game in http://localhost:3000/ on your web browser.

## Running the tests

If you are interested to test this app use the command below and it will open cypress for automating testing.
```
yarn cy:open
```

### Break down into end to end tests


These tests were made to check that every aspect of the game is playable for example the user can click the game buttons:

```
    it('Can Click the buttons', () => {
        cy.get('button#rock-button').click();
        cy.get('button#paper-button').click();
        cy.get('button#scissor-button').click();
    });
```

## Deployment [WIP]

This app will be deployed soon in netlify.

## Built With

* React
* JS
* HTML
* CSS

## Contributing

## Authors

* **Jaime Cruz** - (hhttps://github.com/JaimeCrz/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments [WIP]

* Hat tip to anyone whose code was used
* Inspiration
* etc
