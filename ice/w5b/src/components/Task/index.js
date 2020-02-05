import "./index.css"

class Task {
    constructor(props) {
        this.props = props;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        this.onClick = this.onClick.bind(this);
        checkbox.addEventListener("change",this.onClick);

        this.element.appendChild(checkbox);
        let span = document.createElement("span");
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = "task";
    }
    onClick(e) {
        if (e.target.checked){
            this.props.done = true;
            this.element.style.textDecoration = 'line-through';
            this.element.style.backgroundColor = 'red';
        } else {
            this.props.done = false;
            this.element.style.textDecoration = 'none';
            this.element.style.backgroundColor = 'lavender';
        }
    }
    render() {
        return this.element;
    }
}

export default Task;