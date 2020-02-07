import './index.css';

class Card {
    constructor(props){
        this.props = props;
        this.element = document.createElement("div");
        this.element.className = "card";
        this.element.innerHTML = this.props.content;
        this.onClick = this.onClick.bind(this);
        this.element.addEventListener("click",this.onClick);
    }

    onClick(){
        if(this.element.innerHTML == this.props.question){
            this.element.innerHTML = this.props.answer;
        } else {
            this.element.innerHTML = this.props.question;
        }
    }

    render(){
        return this.element;
    }
}

export default Card;