var cardCount = 1;

$(document).ready(function () {
    $(".card").draggable({
        scroll: false
    });
});

function generateCard() {
    var newCard = document.createElement("div");
    newCard.className = "card";

    if (chk.checked) {
        newCard.classList.add('light');
    }

    newCard.id = "card" + cardCount;
    newCard.innerHTML = `
        <i class="fas fa-xmark closeIcon"></i>
        <i class="fas fa-ship"></i>
        <input type="text" class="input" placeholder="Turbina">
        <input type="text" class="input" placeholder="Cliente">
        <input type="text" class="input" placeholder="Embarcação/Vessel">
        <input type="text" class="input" placeholder="Ordem de Serviço">
    `;

    document.getElementById("cardContainer").appendChild(newCard);

   

    $(newCard).css({
        position: "absolute",
        top: "128px", 
        left: "1px"
    });

    $(newCard).draggable({
        scroll: false,
        //containment: "parent"
    });
    

    newCard.querySelector('.closeIcon').addEventListener('click', function() {
        newCard.parentNode.removeChild(newCard);
    });

    chk.addEventListener('change', () => {
        newCard.classList.toggle('light', chk.checked);
    });

    cardCount++;
}

document.getElementById('closeIcon').addEventListener('click', function () {
    var card = document.getElementById('card1');
    card.parentNode.removeChild(card);
});

document.cookie = "draggable=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";

const chk = document.getElementById('chk') 
const card = document.getElementById('card1')
const hide = document.getElementById('hideShowButton')
const button = document.getElementById('button')


chk.addEventListener('change', () => {
    document.body.classList.toggle('light');
    card.classList.toggle('light');
    hide.classList.toggle('light');
    button.classList.toggle('light')
    const inputs = card.querySelectorAll('input')
    inputs.forEach(input => {
         input.classList.toggle('light');
    })
});

  document.addEventListener('DOMContentLoaded', function() {
    var footer = document.getElementById('myFooter');
    var hideShowButton = document.getElementById('hideShowButton');
    var isHidden = false;

    hideShowButton.addEventListener('click', function() {
        if (isHidden) {
            footer.classList.remove('hidden');
            hideShowButton.style.bottom = "30px";
            //hideShowButton.innerHTML = '<i class="fa-solid fa-angles-down"></i>';
        } else {
            footer.classList.add('hidden');
            hideShowButton.style.bottom = "0px";
            hideShowButton.innerHTML = '<i class="fa-solid fa-angles-up"></i>';
        }

        isHidden = !isHidden;
    });
});

