console.log('App.js is running'); 
// JSX- Javascript XML
// const template = <p>This is GAutam</p>;
const movie={
    title:'Fuck U',
    subtitle: 'Moron',
    options: []
}

const template= (
<div>
<h1>{movie.title}</h1>
{movie.subtitle && <p>{movie.subtitle}</p>}
<p>{movie.options.length>0? 'Here are Your Options' : 'No fucking Options'}</p>
<ol>
    <li>One</li>
    <li>Two</li>
</ol>
</div>
);
const user={
 
    age: 26
   
};
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;

    }  
}

const templateTwo=(
    <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);
const appRoot= document.getElementById('app');
ReactDOM.render(template,  appRoot);