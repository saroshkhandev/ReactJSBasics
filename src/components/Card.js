import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

// we cant use our components as a wrapper like a div for html code by default..
// so what we have to do is to pass the props.children basically what this does is to 
// extract all the html code that is placed between our component tag and place it here
// which is a basic normal nature according to html
// so we created a wrapper class.
// one more thing we also cannot pass multiple classes for our component tag so for that we 
// created a classes array and then passed it here. --Update