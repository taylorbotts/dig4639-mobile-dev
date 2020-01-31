class Adder {
    constructor(props){
        this.props = props;
    }

    sum(){
        return this.props.a + this.props.b;
    }

    render(){
        return `The sum of ${this.props.a} and ${this.props.b} is ${this.sum()}`;
    }
}

module.exports = Adder;