{
    const counter = () => {
        const input = document.querySelector(".js-input");
        const lenght = document.querySelector(".js-output");       

        lenght.textContent = input.value.length;
    }   
    
    const init= () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("keyup", counter)
    };

    init();
}