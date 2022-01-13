class Button {

    constructor(label, onClick) {
        this.label = label
        this.onClick = onClick
    }

    render() {

        const button = document.createElement('button')

        button.innerText = this.label

        button.style.outline = 'none'
        button.style.border = '1px solid rgba(0, 0, 0, 0.1)'
        button.style.backgroundColor = 'white'
        button.style.borderRadius = '4px'
        button.style.padding = '4px'
        button.style.cursor = 'pointer'
        button.style.width = '100px'

        if (this.onClick) {
            button.addEventListener(
                'click',
                () => this.onClick()
            )
        }

        return button

    }

}