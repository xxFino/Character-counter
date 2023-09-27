{
    const counter = () => {
        const input = document.querySelector(".js-input");
        const lenght = document.querySelector(".js-output");       

        lenght.innerHTML = input.value.length;
    }   
    
    const init= () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", counter)
    };

    init();
}