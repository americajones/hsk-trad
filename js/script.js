const quizStudyBox = document.querySelector('#quiz-practice');
const mainCharText = document.querySelector('#main-char');
const mainBox = document.querySelector('#main-box');
const secondaryCharText = document.querySelector('#optional-char');
const answersBox = document.querySelector('.answers');
const skipButt = document.querySelector('.skip');
const swapButt = document.querySelector('.swap');
const flashBox = document.querySelector('.flashBox');
const flashBox2 = document.querySelector('.flashBox2');
const flashBox3 = document.querySelector('.flashBox3');
const sentenceBox = document.querySelector('.sentenceBox');
const pageHeader = document.querySelector('.title');
const hanziWriteBox = document.querySelector('#hanziWriteBox');
const charInput = document.querySelector('#char');
const writeBox = document.querySelector('#character-target-div');
const buttBox = document.querySelector('.bottom-buttons');

let hanziArray = [];
let zhuyinArray = [];
let pinyinArray = [];
let meaningsArray = [];
let thisHanzi;
let trueAnswer;
let selectedAnswer;
let secretMessage = "";
let answersArray = [];
let randoNumber = 69;
let numberArray = [];
let initNumber = 0;
let lightercolor = "#fdecb8";
let lightcolor = "#ffbf6f";
let medlightcolor = "#f7b6a2";
let redcolor = "#ca3b70";
let medpurpcolor = "#58537b";
let darkblucolor = "#1f2b53";
let darkestblucolor = "#111b34";

pageHeader.addEventListener('click', function () {
    location.reload();
});
let sentencesArray = [];
let toneArray = [];
let sMeaningsArray = [];
let sZhuyinArray = [];
let grammarArray = [];
let gMeaningsArray = [];
let gZhuyinArray = [];
let gExplanationArray = [];
let gPatternsArray = [];

function loadZhuyinRadicalFlashcards() {
    pageHeader.textContent = "";
    pageHeader.textContent = "方字";
    quizStudyBox.classList.add('hidden');
    hanziWriteBox.classList.add('hidden');
    sentenceBox.classList.add('hidden');
    let zhuyinCharArray = [];
    let zhuyinMeaningsArray = [];
    let radicalCharArray = [];
    let numberArray = [];
    let radicalZhuArray = [];
    let radicalMeaningsArray = [];
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    for (var [zhuyin, value] of Object.entries(zhuyinCharacters)) {
        zhuyinCharArray.push(zhuyin);
        zhuyinMeaningsArray.push(value.pinyin);
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        nuDivTit.textContent = zhuyin;
        nuTxt.textContent = value.pinyin;
        nuDivTit.classList.add('cursive');
        nuTxt.classList.add('small');
        nuTxt.classList.add('semifaded');
        nuDiv.classList.add('zhuyinFlashcards')
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        flashBox.append(nuDiv);
    };
    let numberr = 0;
    for (var [hanzi, value] of Object.entries(chineseRadicals)) {
        radicalCharArray.push(hanzi);
        radicalZhuArray.push(value.zhuyin);
        radicalMeaningsArray.push(value.english);
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        numberr++;
        let nuNumDiv = document.createElement('div');
        nuNumDiv.classList.add('numLabel');
        nuNumDiv.textContent = numberr;
        nuDivTit.textContent = hanzi;
        nuTxt.textContent = value.zhuyin;
        nuTxt2.textContent = value.english;
        nuDivTit.classList.add('cursive');
        nuDivTit.classList.add('xlarge');
        // nuTxt.classList.add('cursive');
        nuTxt.classList.add('faded');
        nuTxt2.classList.add('small');
        nuTxt2.classList.add('pink');
        nuTxt2.classList.add('opacity');
        nuDiv.classList.add('radicalFlashcards');
        nuDiv.addEventListener('click', toggleEnglish);
        nuDiv.append(nuNumDiv);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxt2);
        flashBox2.append(nuDiv);
        function toggleEnglish() {
            nuTxt2.classList.toggle('opacity');
        }
    };
};
function returnNumberArray(num) {
    let numberArr = new Array(num);
    return numberArr;
};

function loadWordFlashcards(num) {
    let number = 0;
    pageHeader.textContent = "";
    pageHeader.textContent = "方字";
    quizStudyBox.classList.add('hidden');
    hanziWriteBox.classList.add('hidden');
    sentenceBox.classList.add('hidden');
    let hanziCharArray = [];
    let hanziZhuyinArray = [];
    let hanziMeaningsArray = [];
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);

    if (num === 1) {
        for (var [word, value] of Object.entries(HSK1words)) {
            loadCards();
        }
    } else if (num === 2) {
        for (var [word, value] of Object.entries(HSK2words)) {
            loadCards();
        }
    } else if (num === 3) {
        for (var [word, value] of Object.entries(HSK3words)) {
            loadCards();
        }
    } else if (num === 4) {
        for (var [word, value] of Object.entries(HSK4words)) {
            loadCards();
        }
    }
    function loadCards() {
        hanziCharArray.push(word);
        hanziZhuyinArray.push(value.zhuyin);
        hanziMeaningsArray.push(value.english);
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        number++;
        let nuNumDiv = document.createElement('div');
        nuNumDiv.classList.add('numLabel');
        nuNumDiv.textContent = number;
        nuDivTit.textContent = word;
        nuTxt.textContent = value.zhuyin;
        nuTxt2.textContent = value.english;
        nuTxt2.classList.add('small');
        nuTxt2.classList.add('opacity');
        nuTxt2.classList.add('pink');
        nuDivTit.classList.add('cursive');
        nuDivTit.classList.add('xlarge');
        // nuTxt.classList.add('cursive');
        nuTxt.classList.add('faded');
        nuDiv.classList.add('radicalFlashcards');
        nuDiv.addEventListener('click', toggleEnglish);
        nuDiv.append(nuNumDiv);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxt2);
        flashBox2.append(nuDiv);
        function toggleEnglish() {
            nuTxt2.classList.toggle('opacity');
        }
    }
};

function makeButtons(swapEvent, skipEvent) {
    removeAllChildren(buttBox);
    let secret = document.createElement('p');
    secret.classList.add('secret-message')
    secret.textContent = "";
    let skipButt = document.createElement('button');
    skipButt.textContent = "skip";
    skipButt.classList.add("skip");
    skipButt.classList.add("butt");
    let swapButt = document.createElement('button');
    swapButt.textContent = "swap quiz style";
    swapButt.classList.add("swap");
    swapButt.classList.add("butt");
    skipButt.addEventListener('click', skipEvent);
    swapButt.addEventListener('click', swapEvent);
    buttBox.append(swapButt);
    buttBox.append(secret);
    buttBox.append(skipButt);
    secretMessage = document.querySelector('.secret-message');
};
function loadZhuyin() {
    pinyinArray = [];
    zhuyinArray = [];
    answersBox.classList.remove('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    hanziWriteBox.classList.add('hidden');
    sentenceBox.classList.add('hidden');
    pageHeader.textContent = "";
    pageHeader.textContent = "ㄅㄆㄇㄈ";
    quizStudyBox.classList.remove('hidden');
    for (var [zhuyin, value] of Object.entries(zhuyinCharacters)) {
        // console.log(zhuyin, value.pinyin);
        zhuyinArray.push(zhuyin);
        pinyinArray.push(value.pinyin);
    };
};
function handleAnswerClick(timeoutFunction, event, time) {
    console.log(event.target);
    selectedAnswer = event.target.textContent;
    // console.log("you chose:", selectedAnswer, " correct answer is: ", trueAnswer)
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            timeoutFunction();
            secretMessage.textContent = '';
        }, time);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
};
function handleAnswerClickEng(timeoutFunction, event, time) {
    console.log(event.target);
    selectedAnswer = event.target.textContent;
    // console.log("you chose:", selectedAnswer, " correct answer is: ", trueAnswer)
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", meaningsArray[randoNumber]);
        console.log('. * nice! * .');
        setTimeout(() => {
            timeoutFunction();
            secretMessage.textContent = '';
        }, time);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
};
function loadZhuyinQuiz1() {
    loadZhuyin();
    removeAllChildren(answersBox);
    makeButtons(loadZhuyinQuiz2, loadZhuyinQuiz1);
    randoNumber = Math.floor(Math.random() * zhuyinArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive')
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = pinyinArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * zhuyinArray.length);
        let randoAnswer = pinyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadZhuyinQuiz1, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadZhuyinQuiz2() {
    loadZhuyin();
    removeAllChildren(answersBox);
    makeButtons(loadZhuyinQuiz1, loadZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * pinyinArray.length);
    thisHanzi = pinyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = zhuyinArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * pinyinArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', function (e) {
            handleAnswerClick(loadZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('med');
        newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};


let writingAnswers = "";
const charTarget = document.querySelector('#character-target-div');
const wbuttBox = document.querySelector('.writingButtBox');
const subButt = document.querySelector('#subButt')
const wskipButt = document.querySelector('#skipButt')

function makeCharacter(char) {
    var writer = HanziWriter.create('character-target-div', char, {
        width: 200,
        height: 200,
        padding: 10,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 500,
        drawingColor: "#ffffff",
        strokeColor: '#000',
        outlineColor: '#6670a0',
        // radicalColor: '#168F16'
    });
    document.getElementById('animate-button').addEventListener('click', function () {
        writer.animateCharacter();
    });
};

function getWords(num) {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    toneArray = [];
    sentenceBox.classList.add('hidden');
    hanziWriteBox.classList.add('hidden');
    answersBox.classList.remove('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    pageHeader.textContent = "";
    pageHeader.textContent = "詞";
    quizStudyBox.classList.remove('hidden');
    if (num === 1) {
        for (var [word, value] of Object.entries(HSK1words)) {
            // console.log(value.zhuyin);
            hanziArray.push(word);
            zhuyinArray.push(value.zhuyin);
            meaningsArray.push(value.english);
        };
    } else if (num === 2) {
        for (var [word, value] of Object.entries(HSK2words)) {
            // console.log(value.zhuyin);
            hanziArray.push(word);
            zhuyinArray.push(value.zhuyin);
            meaningsArray.push(value.english);
        };
    } else if (num === 3) {
        for (var [word, value] of Object.entries(HSK3words)) {
            // console.log(value.zhuyin);
            hanziArray.push(word);
            zhuyinArray.push(value.zhuyin);
            meaningsArray.push(value.english);
        };
    } else if (num === 4) {
        for (var [word, value] of Object.entries(HSK4words)) {
            // console.log(value.zhuyin);
            hanziArray.push(word);
            zhuyinArray.push(value.zhuyin);
            meaningsArray.push(value.english);
        };
    }
};
function loadWordsFamiliQuiz() {
    getWords(1);
    removeAllChildren(answersBox);
    makeButtons(loadWordsFamiliQuiz2, loadWordsFamiliQuiz);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[initNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[initNumber];
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWordsFamiliQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWordsFamiliQuiz2() {
    getWords(1);
    removeAllChildren(answersBox);
    makeButtons(loadWordsFamiliQuiz, loadWordsFamiliQuiz2);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = meaningsArray[initNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = zhuyinArray[initNumber];
    answersArray.push(trueAnswer);
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWordsFamiliQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWordsMeaningsQuiz() {
    getWords(1);
    removeAllChildren(answersBox);
    makeButtons(loadWordsMeaningsQuiz2, loadWordsMeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWordsMeaningsQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWordsMeaningsQuiz2() {
    getWords(1);
    removeAllChildren(answersBox);
    makeButtons(loadWordsMeaningsQuiz, loadWordsMeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = hanziArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWordsMeaningsQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};

function loadWordsZhuyinQuiz() {
    getWords(1);
    removeAllChildren(answersBox);
    makeButtons(loadWordsZhuyinQuiz2, loadWordsZhuyinQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = zhuyinArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadWordsZhuyinQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};
function loadWordsZhuyinQuiz2() {
    getWords(1);
    removeAllChildren(answersBox);
    makeButtons(loadWordsZhuyinQuiz, loadWordsZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    mainCharText.classList.remove('cursive');
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = hanziArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadWordsZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function loadWords2FamiliQuiz() {
    getWords(2);
    removeAllChildren(answersBox);
    makeButtons(loadWords2FamiliQuiz2, loadWords2FamiliQuiz);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[initNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[initNumber];
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords2FamiliQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWords2FamiliQuiz2() {
    getWords(2);
    removeAllChildren(answersBox);
    makeButtons(loadWords2FamiliQuiz, loadWords2FamiliQuiz2);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = meaningsArray[initNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = zhuyinArray[initNumber];
    answersArray.push(trueAnswer);
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords2FamiliQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWords2MeaningsQuiz() {
    getWords(2);
    removeAllChildren(answersBox);
    makeButtons(loadWords2MeaningsQuiz2, loadWords2MeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords2MeaningsQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWords2MeaningsQuiz2() {
    getWords(2);
    removeAllChildren(answersBox);
    makeButtons(loadWords2MeaningsQuiz, loadWords2MeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = hanziArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords2MeaningsQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};

function loadWords2ZhuyinQuiz() {
    getWords(2);
    removeAllChildren(answersBox);
    makeButtons(loadWords2ZhuyinQuiz2, loadWords2ZhuyinQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = zhuyinArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadWords2ZhuyinQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};
function loadWords2ZhuyinQuiz2() {
    getWords(2);
    removeAllChildren(answersBox);
    makeButtons(loadWords2ZhuyinQuiz, loadWords2ZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    mainCharText.classList.remove('cursive');
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = hanziArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadWords2ZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function loadWords3FamiliQuiz() {
    getWords(3);
    removeAllChildren(answersBox);
    makeButtons(loadWords3FamiliQuiz2, loadWords3FamiliQuiz);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[initNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[initNumber];
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords3FamiliQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWords3FamiliQuiz2() {
    getWords(3);
    removeAllChildren(answersBox);
    makeButtons(loadWords3FamiliQuiz, loadWords3FamiliQuiz2);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = meaningsArray[initNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = zhuyinArray[initNumber];
    answersArray.push(trueAnswer);
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords3FamiliQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWords3MeaningsQuiz() {
    getWords(3);
    removeAllChildren(answersBox);
    makeButtons(loadWords3MeaningsQuiz2, loadWords3MeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords3MeaningsQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWords3MeaningsQuiz2() {
    getWords(3);
    removeAllChildren(answersBox);
    makeButtons(loadWords3MeaningsQuiz, loadWords3MeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = hanziArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords3MeaningsQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};

function loadWords3ZhuyinQuiz() {
    getWords(3);
    removeAllChildren(answersBox);
    makeButtons(loadWords3ZhuyinQuiz2, loadWords3ZhuyinQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = zhuyinArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadWords3ZhuyinQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};
function loadWords3ZhuyinQuiz2() {
    getWords(3);
    removeAllChildren(answersBox);
    makeButtons(loadWords3ZhuyinQuiz, loadWords3ZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    mainCharText.classList.remove('cursive');
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = hanziArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadWords3ZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function loadWords4FamiliQuiz() {
    getWords(4);
    removeAllChildren(answersBox);
    makeButtons(loadWords4FamiliQuiz2, loadWords4FamiliQuiz);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[initNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[initNumber];
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords4FamiliQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWords4FamiliQuiz2() {
    getWords(4);
    removeAllChildren(answersBox);
    makeButtons(loadWords4FamiliQuiz, loadWords4FamiliQuiz2);
    thisHanzi = hanziArray[initNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = meaningsArray[initNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = zhuyinArray[initNumber];
    answersArray.push(trueAnswer);
    if (initNumber === hanziArray.length - 1) {
        initNumber = 0;
    } else initNumber++;
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords3FamiliQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWords4MeaningsQuiz() {
    getWords(4);
    removeAllChildren(answersBox);
    makeButtons(loadWords4MeaningsQuiz2, loadWords4MeaningsQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.remove('cursive');
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = meaningsArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords4MeaningsQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWords4MeaningsQuiz2() {
    getWords(4);
    removeAllChildren(answersBox);
    makeButtons(loadWords4MeaningsQuiz, loadWords4MeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.remove('cursive');
    secondaryCharText.textContent = zhuyinArray[randoNumber];
    secondaryCharText.classList.add('small')
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = hanziArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWords4MeaningsQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};

function loadWords4ZhuyinQuiz() {
    getWords(4);
    removeAllChildren(answersBox);
    makeButtons(loadWords4ZhuyinQuiz2, loadWords4ZhuyinQuiz);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    mainCharText.classList.add('cursive');
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = zhuyinArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = zhuyinArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadWords4ZhuyinQuiz, e, 1000)
        })
        newDiv.classList.add('answer');
        // newDiv.classList.add('cursive');
        answersBox.append(newDiv);
    });
};
function loadWords4ZhuyinQuiz2() {
    getWords(4);
    removeAllChildren(answersBox);
    makeButtons(loadWords4ZhuyinQuiz, loadWords4ZhuyinQuiz2);
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = zhuyinArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    mainCharText.classList.remove('cursive');
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * hanziArray.length);
        let randoAnswer = hanziArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClickEng(loadWords4ZhuyinQuiz2, e, 1000)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};

function loadWordsWritingQuiz() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    charInput.value = "";
    writingAnswers = "";
    getWords(1);
    sentenceBox.classList.add('hidden');
    answersBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    removeAllChildren(charTarget);
    removeAllChildren(buttBox);
    removeAllChildren(wbuttBox);
    hanziWriteBox.classList.remove('hidden');
    writeBox.classList.add('words');
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    writingAnswers = zhuyinArray[randoNumber] + " - " + meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    var char1 = thisHanzi.charAt(0);
    var char2 = thisHanzi.charAt(1);
    makeWord(char1);
    makeWord(char2);
    // charInput.focus();
    subButt.removeEventListener('click', handleAnswerClickW3);
    subButt.removeEventListener('click', handleAnswerClickW2);
    subButt.addEventListener('click', handleAnswerClick3);
    subButt.classList.add('butt')
    wskipButt.classList.add('butt');
    wskipButt.removeEventListener('click', loadWords2WritingQuiz);
    wskipButt.removeEventListener('click', loadWords3WritingQuiz);
    wskipButt.addEventListener('click', loadWordsWritingQuiz);
};
function loadWords2WritingQuiz() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    charInput.value = "";
    writingAnswers = "";
    getWords(2);
    sentenceBox.classList.add('hidden');
    answersBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    removeAllChildren(charTarget);
    removeAllChildren(buttBox);
    removeAllChildren(wbuttBox);
    hanziWriteBox.classList.remove('hidden');
    writeBox.classList.add('words');
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    writingAnswers = zhuyinArray[randoNumber] + " - " + meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    var char1 = thisHanzi.charAt(0);
    var char2 = thisHanzi.charAt(1);
    makeWord(char1);
    makeWord(char2);
    // charInput.focus();
    subButt.removeEventListener('click', handleAnswerClickW3);
    subButt.removeEventListener('click', handleAnswerClick3);
    subButt.addEventListener('click', handleAnswerClickW2);
    subButt.classList.add('butt')
    wskipButt.classList.add('butt')
    wskipButt.removeEventListener('click', loadWords3WritingQuiz);
    wskipButt.removeEventListener('click', loadWordsWritingQuiz);
    wskipButt.addEventListener('click', loadWords2WritingQuiz);
};
function loadWords3WritingQuiz() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    charInput.value = "";
    writingAnswers = "";
    getWords(3);
    sentenceBox.classList.add('hidden');
    answersBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    removeAllChildren(charTarget);
    removeAllChildren(buttBox);
    removeAllChildren(wbuttBox);
    hanziWriteBox.classList.remove('hidden');
    writeBox.classList.add('words');
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    writingAnswers = zhuyinArray[randoNumber] + " - " + meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    var char1 = thisHanzi.charAt(0);
    var char2 = thisHanzi.charAt(1);
    makeWord(char1);
    makeWord(char2);
    // charInput.focus();
    subButt.removeEventListener('click', handleAnswerClick3);
    subButt.removeEventListener('click', handleAnswerClickW2);
    subButt.addEventListener('click', handleAnswerClickW3);
    subButt.classList.add('butt')
    wskipButt.classList.add('butt')
    wskipButt.removeEventListener('click', loadWordsWritingQuiz);
    wskipButt.removeEventListener('click', loadWords2WritingQuiz);
    wskipButt.addEventListener('click', loadWords3WritingQuiz);
};
function loadWords4WritingQuiz() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    charInput.value = "";
    writingAnswers = "";
    getWords(4);
    sentenceBox.classList.add('hidden');
    answersBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    removeAllChildren(charTarget);
    removeAllChildren(buttBox);
    removeAllChildren(wbuttBox);
    hanziWriteBox.classList.remove('hidden');
    writeBox.classList.add('words');
    randoNumber = Math.floor(Math.random() * hanziArray.length);
    thisHanzi = hanziArray[randoNumber];
    writingAnswers = zhuyinArray[randoNumber] + " - " + meaningsArray[randoNumber];
    mainCharText.textContent = thisHanzi;
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = hanziArray[randoNumber];
    answersArray.push(trueAnswer);
    var char1 = thisHanzi.charAt(0);
    var char2 = thisHanzi.charAt(1);
    makeWord(char1);
    makeWord(char2);
    // charInput.focus();
    subButt.removeEventListener('click', handleAnswerClick3);
    subButt.removeEventListener('click', handleAnswerClickW2);
    subButt.removeEventListener('click', handleAnswerClickW3);
    subButt.addEventListener('click', handleAnswerClickW4);
    subButt.classList.add('butt')
    wskipButt.classList.add('butt')
    wskipButt.removeEventListener('click', loadWordsWritingQuiz);
    wskipButt.removeEventListener('click', loadWords2WritingQuiz);
    wskipButt.removeEventListener('click', loadWords3WritingQuiz);
    wskipButt.addEventListener('click', loadWords4WritingQuiz);
};
function makeWord(char) {
    var writer = HanziWriter.create('character-target-div', char, {
        width: 100,
        height: 100,
        padding: 10,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 500,
        drawingColor: "#ffffff",
        strokeColor: '#000',
        outlineColor: '#6670a0',
        // radicalColor: '#168F16'
    });
    document.getElementById('animate-button').addEventListener('click', function () {
        writer.animateCharacter();
    });
};
function handleAnswerClick3() {
    selectedAnswer = charInput.value;
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        secondaryCharText.textContent = writingAnswers;
        charInput.value = "";
        setTimeout(() => {
            loadWordsWritingQuiz();
            secretMessage.textContent = '';
        }, 4000);
    } else {
        secretMessage.textContent = 'try again.';
        charInput.value = "";
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1500);
    }
};
let lesearchButt;
function handleAnswerClickW2() {
    selectedAnswer = charInput.value;
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        secondaryCharText.textContent = writingAnswers;
        charInput.value = "";
        setTimeout(() => {
            loadWords2WritingQuiz();
            secretMessage.textContent = '';
        }, 4000);
    } else {
        secretMessage.textContent = 'try again.';
        charInput.value = "";
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1500);
    }
};
function handleAnswerClickW3() {
    selectedAnswer = charInput.value;
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        secondaryCharText.textContent = writingAnswers;
        charInput.value = "";
        setTimeout(() => {
            loadWords3WritingQuiz();
            secretMessage.textContent = '';
        }, 4000);
    } else {
        secretMessage.textContent = 'try again.';
        charInput.value = "";
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1500);
    }
};
function handleAnswerClickW4() {
    selectedAnswer = charInput.value;
    if (selectedAnswer == trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        secondaryCharText.textContent = writingAnswers;
        charInput.value = "";
        setTimeout(() => {
            loadWords4WritingQuiz();
            secretMessage.textContent = '';
        }, 4000);
    } else {
        secretMessage.textContent = 'try again.';
        charInput.value = "";
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1500);
    }
};
function loadSearchPage() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    charInput.value = "";
    writingAnswers = "";
    sentenceBox.classList.add('hidden');
    answersBox.classList.add('hidden');
    quizStudyBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    removeAllChildren(charTarget);
    removeAllChildren(buttBox);
    removeAllChildren(wbuttBox);
    let nuDiv = document.createElement('div');
    let input = document.createElement('input');
    let button = document.createElement('button');
    let searchResults = document.createElement('div');
    let searchResults2 = document.createElement('div');
    let searchResults3 = document.createElement('div');
    nuDiv.classList.add('searchBundle');
    input.classList.add('searchBox');
    searchResults.classList.add('searchRes');
    searchResults2.classList.add('searchRes2');
    searchResults3.classList.add('searchRes3');
    button.classList.add('searchButt');
    button.classList.add('butt');
    button.textContent = "search";
    button.addEventListener('click', leSearch);
    nuDiv.append(input, button, searchResults, searchResults2, searchResults3);
    flashBox.append(nuDiv);
};

let searchResS = [];
let searchRes = [];
let searchResMeanings = [];
let searchResZhuyin = [];
function leSearch() {
    searchRes = [];
    searchResS = [];
    searchResMeanings = [];
    searchResZhuyin = [];
    let searchBox = document.querySelector('.searchBox');
    let searchResBox = document.querySelector('.searchRes');
    let searchResBox2 = document.querySelector('.searchRes2');
    let searchResBox3 = document.querySelector('.searchRes3');
    removeAllChildren(searchResBox);
    removeAllChildren(searchResBox2);
    removeAllChildren(searchResBox3);
    let searchTerm = searchBox.value;
    console.log(searchTerm);
    for (let [key, value] of Object.entries(hanziAll)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    for (let [key, value] of Object.entries(HSK1words)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    for (let [key, value] of Object.entries(plecoLookupWords)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    for (let [key, value] of Object.entries(bookWordsXWZ)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    for (let [key, value] of Object.entries(bookWordsGradedReaders)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    for (let [key, value] of Object.entries(bookWordsCACG)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    for (let [key, value] of Object.entries(measureWords)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
        if (value.english.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.english);
            searchResZhuyin.push(value.zhuyin);
        }
    }
    for (let [key, value] of Object.entries(A1sentences)) {
        if (key.search(searchTerm) !== -1) {
            searchResS.push(" " + key)
        }
    }
    searchRes.forEach((hanzi, index) => {
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        nuDivTit.textContent = hanzi;
        nuTxt.textContent = searchResZhuyin[index];
        nuTxt2.textContent = searchResMeanings[index];
        nuTxt2.classList.add('small');
        nuTxt.classList.add('opacity');
        nuTxt2.classList.add('opacity');
        nuTxt2.classList.add('pink');
        nuDivTit.classList.add('cursive');
        // nuTxt.classList.add('faded');
        nuDiv.classList.add('searchResBox');
        nuDiv.addEventListener('click', toggleEnglish);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxt2);
        function toggleEnglish() {
            nuTxt2.classList.toggle('opacity');
            nuTxt.classList.toggle('opacity');
        }
        searchResBox.append(nuDiv);
    })
    searchResBox2.append("Sentences including '" + searchTerm + "' : " + searchResS);
};

function loadRadicalWritingQuiz() {
    hanziArray = [];
    pinyinArray = [];
    zhuyinArray = [];
    meaningsArray = [];
    sentenceBox.classList.add('hidden');
    removeAllChildren(flashBox);
    removeAllChildren(flashBox2);
    removeAllChildren(flashBox3);
    removeAllChildren(answersBox);
    answersBox.append("Currently Under Construction");
};
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

//menu shit

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");
const finals = document.querySelectorAll(".final");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "學 ▼";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "✖";
    }
};

/* Activate Submenu */
function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
};

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
};
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
    }
    item.addEventListener("keypress", toggleItem, false);
};
for (let item of finals) {
    item.addEventListener('click', toggleMenu, false)
};
document.addEventListener("click", closeSubmenu, false);