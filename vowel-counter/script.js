let textInputOne = document.querySelector('#textInput');
const checkBtn = document.querySelector('#checkBtn');
const vowels = ['a', 'e', 'i', 'o', 'u'];
const containsVowels = [];


checkBtn.onclick = () => {

    let textInput = textInputOne.value;

    for (let i = 0; i < textInput.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if (textInput[i] === vowels[j]) {
                containsVowels.push(textInput[i]);
            }
        }
        
        
    }
    alert(`There are ${containsVowels.length} vowels`);

    textInputOne.value = '';
    containsVowels.length = 0;
    

}