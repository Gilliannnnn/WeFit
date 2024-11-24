function send(){
    let input = document.querySelector('.input');
    let inputTrim = input.value.trim();
    let comment = document.querySelector('.comment');
    let li = document.createElement('li');
    let user = document.createTextNode('Anonymous: ');
    let p = document.createElement('p');
    let text = document.createTextNode(input.value);

    if(inputTrim === ""){
        alert("Please put a message");
        return
    }
    p.appendChild(text);
    li.appendChild(user);
    li.appendChild(p);
    
    comment.appendChild(li);
    input.value = ""
}

let commentSection = document.querySelector('.commentSection');
let hide = true;
function comment(){
    if (hide === true){
         commentSection.style.zIndex = 1;
         hide = false;
    }else{
        commentSection.style.zIndex = -1;
        hide = true;
    }
}

let chest = document.querySelector('.chest');
let back = document.querySelector('.back');
let bicep = document.querySelector('.bicep');
let cardio = document.querySelector('.cardio');
let core = document.querySelector('.core');
let legs = document.querySelector('.leg');
let shoulder = document.querySelector('.shoulder');
let tricep = document.querySelector('.tricep');
let nameVid = document.querySelector('.nameVid')

let chestChoice = document.querySelector('.chestChoice');
let backChoice = document.querySelector('.backChoice');
let bicepChoice = document.querySelector('.bicepChoice');
let cardioChoice = document.querySelector('.cardioChoice');
let coreChoice = document.querySelector('.coreChoice');
let legsChoice = document.querySelector('.legChoice');
let shoulderChoice = document.querySelector('.shoulderChoice');
let tricepChoice = document.querySelector('.tricepChoice');
let nameVidChoice = document.querySelector('.nameVidChoice')

function chestt(){
    chest.style.display = 'block';
    back.style.display = 'none';
    bicep.style.display = 'none';
    cardio.style.display = 'none';
    core.style.display = 'none';
    legs.style.display = 'none';
    shoulder.style.display = 'none';
    tricep.style.display = 'none';
    nameVid.innerHTML = 'Chest Tutorial'
    chestChoice.style.display = 'none';
    backChoice.style.display = 'block';
    bicepChoice.style.display = 'block';
    cardioChoice.style.display = 'block';
    coreChoice.style.display = 'block';
    legsChoice.style.display = 'block';
    shoulderChoice.style.display = 'block';
    tricepChoice.style.display = 'block';
}
function backk(){
    chest.style.display = 'none';
    back.style.display = 'block';
    bicep.style.display = 'none';
    cardio.style.display = 'none';
    core.style.display = 'none';
    legs.style.display = 'none';
    shoulder.style.display = 'none';
    tricep.style.display = 'none';
    nameVid.innerHTML = 'Back Tutorial'
    chestChoice.style.display = 'blovc';
    backChoice.style.display = 'none';
    bicepChoice.style.display = 'block';
    cardioChoice.style.display = 'block';
    coreChoice.style.display = 'block';
    legsChoice.style.display = 'block';
    shoulderChoice.style.display = 'block';
    tricepChoice.style.display = 'block';
}
function bicepp(){
    chest.style.display = 'none';
    back.style.display = 'none';
    bicep.style.display = 'block';
    cardio.style.display = 'none';
    core.style.display = 'none';
    legs.style.display = 'none';
    shoulder.style.display = 'none';
    tricep.style.display = 'none';
    nameVid.innerHTML = 'Bicep Tutorial'
    chestChoice.style.display = 'block';
    backChoice.style.display = 'block';
    bicepChoice.style.display = 'none';
    cardioChoice.style.display = 'block';
    coreChoice.style.display = 'block';
    legsChoice.style.display = 'block';
    shoulderChoice.style.display = 'block';
    tricepChoice.style.display = 'block';
}
function cardioo(){
    chest.style.display = 'none';
    back.style.display = 'none';
    bicep.style.display = 'none';
    cardio.style.display = 'block';
    core.style.display = 'none';
    legs.style.display = 'none';
    shoulder.style.display = 'none';
    tricep.style.display = 'none';
    nameVid.innerHTML = 'Cardio Tutorial'
    chestChoice.style.display = 'block';
    backChoice.style.display = 'block';
    bicepChoice.style.display = 'block';
    cardioChoice.style.display = 'none';
    coreChoice.style.display = 'block';
    legsChoice.style.display = 'block';
    shoulderChoice.style.display = 'block';
    tricepChoice.style.display = 'block';
}
function coree(){
    chest.style.display = 'none';
    back.style.display = 'none';
    bicep.style.display = 'none';
    cardio.style.display = 'none';
    core.style.display = 'block';
    legs.style.display = 'none';
    shoulder.style.display = 'none';
    tricep.style.display = 'none';
    nameVid.innerHTML = 'Core Tutorial'
    chestChoice.style.display = 'block';
    backChoice.style.display = 'block';
    bicepChoice.style.display = 'block';
    cardioChoice.style.display = 'block';
    coreChoice.style.display = 'none';
    legsChoice.style.display = 'block';
    shoulderChoice.style.display = 'block';
    tricepChoice.style.display = 'block';
}
function legss(){
    chest.style.display = 'none';
    back.style.display = 'none';
    bicep.style.display = 'none';
    cardio.style.display = 'none';
    core.style.display = 'none';
    legs.style.display = 'block';
    shoulder.style.display = 'none';
    tricep.style.display = 'none';
    nameVid.innerHTML = 'Legs Tutorial'
    chestChoice.style.display = 'block';
    backChoice.style.display = 'block';
    bicepChoice.style.display = 'block';
    cardioChoice.style.display = 'block';
    coreChoice.style.display = 'block';
    legsChoice.style.display = 'none';
    shoulderChoice.style.display = 'block';
    tricepChoice.style.display = 'block';
}
function shoulderr(){
    chest.style.display = 'none';
    back.style.display = 'none';
    bicep.style.display = 'none';
    cardio.style.display = 'none';
    core.style.display = 'none';
    legs.style.display = 'none';
    shoulder.style.display = 'block';
    tricep.style.display = 'none';
    nameVid.innerHTML = 'Shoulder Tutorial'
    chestChoice.style.display = 'block';
    backChoice.style.display = 'block';
    bicepChoice.style.display = 'block';
    cardioChoice.style.display = 'block';
    coreChoice.style.display = 'block';
    legsChoice.style.display = 'block';
    shoulderChoice.style.display = 'none';
    tricepChoice.style.display = 'block';
}
function tricepp(){
    chest.style.display = 'none';
    back.style.display = 'none';
    bicep.style.display = 'none';
    cardio.style.display = 'none';
    core.style.display = 'none';
    legs.style.display = 'none';
    shoulder.style.display = 'none';
    tricep.style.display = 'block';
    nameVid.innerHTML = 'Tricep Tutorial'
    chestChoice.style.display = 'block';
    backChoice.style.display = 'block';
    bicepChoice.style.display = 'block';
    cardioChoice.style.display = 'block';
    coreChoice.style.display = 'block';
    legsChoice.style.display = 'block';
    shoulderChoice.style.display = 'block';
    tricepChoice.style.display = 'none';
}