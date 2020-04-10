import React, {Component} from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        this.componentRef.current.increment();
    }

    myCallback = (dataFromChild) => {
        console.log(dataFromChild);
    }

    render() {
        return(
            <div>
                <Child ref={this.componentRef}  callbackFromParent={this.myCallback} />
                <button onClick={this.clickHandler}>Click here</button>
            </div>
        );
    }
}

export default Parent;