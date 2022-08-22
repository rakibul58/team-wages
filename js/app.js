function disableButton(disabledButton)
{
    disabledButton.classList.remove('hover:bg-blue-500');
    disabledButton.style.backgroundColor = 'gray';
    disabledButton.setAttribute('disabled' , true);
}

function getPlayerName(targetedName)
{
    const targetedParentNode = targetedName.parentNode;
    const nameNode = targetedParentNode.firstElementChild;
    const playerName = nameNode.innerText;
    return playerName;
}

function addPlayerName(playerName , numberOfChild)
{
    const newLi = document.createElement('li');
    newLi.innerText = numberOfChild + '. '+playerName;
    const playerList = document.getElementById('players-list');
    playerList.appendChild(newLi);
}

function getValueFromInput(inputId)
{
    const inputElement = document.getElementById(inputId);
    const inputString = inputElement.value;
    const inputNumber = parseFloat(inputString);
    return inputNumber;
}

function setToElement(elementId , setItem)
{
    document.getElementById(elementId).innerText = setItem;
}

function validateInput(inputId)
{
    const inputElement = document.getElementById(inputId);
    const inputString = inputElement.value;
    if(isNaN(inputString) || inputString == '')
        return true;
    else
        return false;
}

document.getElementById('clicked-button').addEventListener('click',function(event){
    const numberOfChild = document.getElementById('players-list').childElementCount;
    if(event.target.innerText == 'SELECT' && numberOfChild<5)
    {
        const playerName = getPlayerName(event.target);
        addPlayerName(playerName , numberOfChild+1)
        disableButton(event.target);
    }
    else if(numberOfChild>=5 && event.target.innerText == 'SELECT')
    {
        alert('You Cannot Select More than Five Players');
    }
    
})

document.getElementById('calculate-btn').addEventListener('click',function(){
    const numberOfChild = document.getElementById('players-list').childElementCount;
    const payPerPlayerAmount = getValueFromInput('per-player-amout');
    const playerExpenses = payPerPlayerAmount * numberOfChild;
    if(validateInput('per-player-amout'))
    {
        alert('Enter A valid Number');
        document.getElementById('per-player-amout').value = '';
        return;
    }
    if(numberOfChild == 0){
        alert('You did not selected any player');
        return;
    }
    setToElement('player-expenses' , playerExpenses.toFixed(2));
    
})

document.getElementById('total-btn').addEventListener('click' , function(){

    const playerExpenses = parseFloat(document.getElementById('player-expenses').innerText);
    const managerExpenses = getValueFromInput('input-manager');
    const coachExpenses = getValueFromInput('input-coach');
    if(validateInput('input-manager') || validateInput('input-coach')){
        alert('Enter valid Numbers');
        document.getElementById('input-coach').value = '';
        document.getElementById('input-manager').value = '';
        return;
    }
    const total = (playerExpenses+managerExpenses+coachExpenses).toFixed(2);

    setToElement('total-amount' , total);

})
