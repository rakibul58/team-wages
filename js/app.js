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

function addPlayerName(playerName , numb)
{
    const newLi = document.createElement('li');
    newLi.innerText = numb + '. '+playerName;
    const playerList = document.getElementById('players-list');
    playerList.appendChild(newLi);
}

document.getElementById('clicked-button').addEventListener('click',function(event){
    let numb = document.getElementById('players-list').childElementCount;
    if(event.target.innerText == 'SELECT' && numb<5)
    {
        const playerName = getPlayerName(event.target);
        addPlayerName(playerName , numb+1)
        disableButton(event.target);
    }
    else
    {
        alert('You Cannot Select More than Five Players');
    }
    
})
