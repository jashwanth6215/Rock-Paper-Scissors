const score=JSON.parse(localStorage.getItem('score'))||{
    win:0,
    loss:0,
    tie:0
};
let scoresEle=document.querySelector('.js-scores');
scoresEle.innerHTML='Wins: '+score.win+' , Losses: '+score.loss+' ,Ties: '+score.tie;
function ran()
{
    const random=Math.random();
    if(random>=0 && random <1/3)
    {
        return 'Rock';
    }
    else if(random>=1/3 && random<2/3)
    {
        return 'Paper';
    }
    return 'Scissors';
}
function play(user)
{
    const computer=ran();
    if(user===computer)
    {
        res='tie';
        score.tie++;
    }
    else if((user==='Rock' && computer==='Paper') || (user==='Paper' && computer==='Scissors') || (user==='Scissors' && computer==='Rock'))
    {
        res='loss'
        score.loss++;
    }
    else{
        res='win';
        score.win++;
    }
    localStorage.setItem('score',JSON.stringify(score));
    display(res,user,computer);
}
function display(res,user,computer)
{
    let resultEle=document.querySelector('.js-result');
    resultEle.innerHTML='You '+res+'.';
    let moveEle=document.querySelector('.js-move');
    moveEle.innerHTML=`You <img src="images/${user}.png">  Computer <img src="images/${computer}.png">`;
    let scoresEle=document.querySelector('.js-scores');
    scoresEle.innerHTML='Wins: '+score.win+' , Losses: '+score.loss+' ,Ties: '+score.tie;
}
function reset()
{
    score.win=0;
    score.tie=0;
    score.loss=0;
    localStorage.setItem('score',JSON.stringify(score));
    let resultEle=document.querySelector('.js-result');
    resultEle.innerHTML='';
    let moveEle=document.querySelector('.js-move');
    moveEle.innerHTML='';
    let scoresEle=document.querySelector('.js-scores');
    scoresEle.innerHTML='Wins:0, Losses:0 ,Ties: 0';
}