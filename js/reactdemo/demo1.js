/**
 * Created by admin on 2017/8/2.
 */

/*demo1*/
ReactDOM.render(
    <h1>hello,world!</h1>,
    document.getElementById("example1")
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
    document.getElementById("example2")
);

/*demo3*/
var temp = [<h1>fuck</h1>,<h1>the</h1>,<h1>world</h1>];
ReactDOM.render(
    <div>
        {temp.map(function(item){
            return item;
        })}
    </div>,
    document.getElementById("example3")
);


/*demo4*/
var HelloWorld = React.createClass({
    render:function(){
        return <h1>hello,world4!{this.props.name}</h1>;
    }
});
ReactDOM.render(
    <HelloWorld name="World:fuck you"/>,
    document.getElementById("example4")
);

/*demo5*/
var ChildDemo = React.createClass({
    render:function(){
        return <ol>{
            React.Children.map(this.props.children,function(item){
                return <li>{item}</li>
            })
        }</ol>
    }
});

ReactDOM.render(
    <ChildDemo>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </ChildDemo>,
        document.getElementById("example5")
);


/*demo6*/
var TitleDemo = React.createClass({
    getDefaultProps:function(){
        return {title:123123123,name:11}
    },
    propTypes:{title:React.PropTypes.string.isRequired},
    render:function(){
        return <div>{this.props.name}</div>
    }
});
var data=123;
ReactDOM.render(
    <TitleDemo title={data} />,
    document.getElementById("example6")
);


/*demo7*/
var MyContent = React.createClass({
    getInitialState:function(){
        return {name:"123",title:false}
    },
    handleClick:function(){
        this.refs.myinput.focus();
        this.setState({name:this.state.title});
        this.setState({title:!this.state.title});
    },

    render:function(){
        var text = this.state.title?"place":"don't";
       return (<div>
            <input type="text" ref="myinput" value={this.state.name}/>
            <input type="button" value="focus the input" onClick={this.handleClick}/>
               <div onClick={this.handleClick}>{text} Click</div>
        </div>
           );
    }
});
ReactDOM.render(
    <MyContent />,
    document.getElementById("example7")
)

/*demo8*/
var ChangeText = React.createClass({
    getInitialState:function(){
        return {value:"hello"};
    },
    handleClick:function(event){
        this.setState({value:event.target.value});
    },
    render: function(){
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleClick} />
                    <p>{this.state.value}</p>
            </div>
        )
    }
});
ReactDOM.render(
    <ChangeText />,
    document.getElementById("example8")
)

/*demo9*/
var TimerSet = React.createClass({
    getInitialState:function(){
        return {time:0,opacity:1.0};
    },
    componentDidMount:function(){
        this.timer = setInterval(function(){
            var time = ++this.state.time;
            var opacity = this.state.opacity;
            this.setState({time:time});
            if(opacity>0.1){
                opacity -= 0.1;
            }
            else{
                opacity=1;
            }
            this.setState({opacity:opacity});
        }.bind(this),100)
    },
    render:function(){
        return (<p style={{opacity:this.state.opacity}}>{this.state.time}</p>

        )
    }
});
ReactDOM.render(
    <TimerSet />,
    document.getElementById("example9")
);

/*demo10*/