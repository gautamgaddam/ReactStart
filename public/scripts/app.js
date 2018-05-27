'use strict';

console.log('App.js is running');
// JSX- Javascript XML
// const template = <p>This is GAutam</p>;
var movie = {
    title: 'Fuck U',
    subtitle: 'Moron',
    options: []
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        movie.title
    ),
    movie.subtitle && React.createElement(
        'p',
        null,
        movie.subtitle
    ),
    React.createElement(
        'p',
        null,
        movie.options.length > 0 ? 'Here are Your Options' : 'No fucking Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'One'
        ),
        React.createElement(
            'li',
            null,
            'Two'
        )
    )
);
var user = {

    age: 26

};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
