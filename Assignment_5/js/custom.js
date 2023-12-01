/*------------------Start---------------------*/
function subscribe(){
    const buttonElement = document.querySelector('.js-subscribe-button');

        if (buttonElement.innerHTML==='Subscribe'){
            buttonElement.innerHTML='Subscribed';
            buttonElement.classList.add("is-subscribed");/*classList gives us control of class attributes*/
        }
        else{
            buttonElement.innerHTML = 'Subscribe';
            buttonElement.classList.remove("is-subscribed");
        }
}
/*-------------------Finish------------------*/

/*------------------Start---------------------*/
/*-------------------Finish------------------*/

