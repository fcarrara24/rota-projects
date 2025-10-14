export abstract class BaseComponent<T extends HTMLElement> {
    protected element: T;

    constructor(tagName: keyof HTMLElementTagNameMap, className: string = '') {
        this.element = document.createElement(tagName) as T;
        if (className) {
            this.element.className = className;
        }
    }

    public getElement(): T {
        return this.element;
    }

    protected addClass(className: string): void {
        this.element.classList.add(className);
    }

    protected setText(text: string): void {
        this.element.textContent = text;
    }

    protected appendChild(child: HTMLElement): void {
        this.element.appendChild(child);
    }
}
