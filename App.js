/*
<div id="parent">
    <div id="child">
        <h1> I'm an H1 tag</h1>
    </div>
</div>
*/

// const heading = React.createElement(
//                     "h1", 
//                     {id: "heading", class: "heading"}, 
//                     "Hello World from React via App.js!"
//                 );
const heading = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
        "div",
        {id: "child1"},
        [
            React.createElement("h1",{},"I'm an H1 tag"),
            React.createElement("h2",{},"I'm an H2 tag")
        ]
    ),
    React.createElement(
        "div",
        {id: "child2"},
        [
            React.createElement("h1",{},"I'm an H1 tag"),
            React.createElement("h2",{},"I'm an H2 tag")
        ]
    )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(heading);
