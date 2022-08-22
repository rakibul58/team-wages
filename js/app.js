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

document.getElementById('clicked-button').addEventListener('click',function(event){
    let numberOfChild = document.getElementById('players-list').childElementCount;
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
