/**
 * Created by admin on 2017/8/2.
 */

/*demo1*/
ReactDOM.render(
    <h1>hello,world!</h1>,
    document.getElementById("example")
);

/*demo2*/
var names = ["jack","mary","jonh"];
ReactDOM.render(
    <div>
        <ul>
    {
        names.map(function(item){
            return (<li>I'm {item}</li>)
        })
    }
            </ul>
    </div>,
    document.getElementById("example1")
);

/*demo3*/
var temp = [<h1>fuck</h1>,<h1>the</h1>,<h1>world</h1>];
ReactDOM.render(
    <div>
        {temp.map(function(item){
            return item;
        })}
    </div>,
    document.getElementById("example2")
);