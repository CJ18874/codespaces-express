class ComcastDialog extends HTMLDialogElement {

    constructor() {
        super();
        this.style.display = 'block';
        this.style.position = 'absolute';
        this.style.top = 0;
        this.style.bottom = 0;
        this.style.left = 0;
        this.style.right = 0;
        this.style.border = '10px solid red';
    }

    connectedCallback() {
        console.log("** start connectedCallback **")

        this.craeteHeaderElement();
        this.createSelectElement();

        this.addEventListener("click", (event) => {
            if (event.target === this) {
                const rndCol = `rgb(${this.random(255)} ${this.random(255)} ${this.random(255)})`;
                let randomBorderColor = '10px solid ' + rndCol
                event.target.style.border = randomBorderColor
            }
        });
    }

    craeteHeaderElement() {
        const text = "Change the Dialog background color by using the select menu \nChange the Dialog border color by clicking the Dialog"
        // using createElement
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.style.whiteSpace = "pre-line";
        p.textContent = text;
        // using append
        div.appendChild(p);
        this.appendChild(div);
    }

    createSelectElement() {
        let select = document.createElement("select");
        const options = [
            { value: "white", text: "White" },
            { value: "blue", text: "Blue" },
            { value: "red", text: "Red" },
            { value: "yellow", text: "Yellow" },
            { value: "green", text: "Green" }
        ];
        options.forEach(optionData => {
            let option = document.createElement("option");
            option.value = optionData.value;
            option.text = optionData.text;
            select.appendChild(option);
        });
        select.addEventListener("change", () => {
            this.style.backgroundColor = select.value;
        });
        this.appendChild(select);
    }

    random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    // craeteBorderElement() {
    //     let borderElement = document.createElement('div');
    //     borderElement.style.position = 'absolute';
    //     borderElement.style.top = 0;
    //     borderElement.style.bottom = 0;
    //     borderElement.style.left = 0;
    //     borderElement.style.right = 0;
    //     borderElement.style.border = '2px solid red';
    //     borderElement.style.boxSizing = 'border-box'
    //     this.appendChild(borderElement);
    // }

}

customElements.define("comcast-dialog", ComcastDialog, { extends: "dialog" });