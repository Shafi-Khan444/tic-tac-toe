let btns=document.querySelectorAll(".box");
let player=document.querySelector(".player");
let player1=document.querySelector(".player1");
let winner=document.querySelector(".winner")
let msg=document.querySelector(".msg")
let newbtn=document.querySelector(".newbtn");
let O=true;


const winpatterns = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
];
const resetgame = () => {
   O = true;
   enablebtns();
   msg.innerText ="";
}; 

btns.forEach((box)=>{
      box.addEventListener("click",() => {
        if(O)
            {
            box.innerText="O";
            player.setAttribute("class","player1")
           
            player1.setAttribute("class","player")
            O=false;
        }else{
            box.innerText="X";
            player1.setAttribute("class","player1")
            player.setAttribute("class","player")
            
            O=true;
        }
        box.disabled=true;
        checkwinner();
      });
});
const disablebtns=()=>{
    for(let btn of btns)
       {
         btn.disabled=true;
        }
};
const enablebtns=()=>{
    for(let btn of btns)
       {
         btn.disabled = false;
         btn.innerText="";
        }
};

const showwinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    disablebtns();
};

  const checkwinner =() => {
    for(let pattern of winpatterns)
        {
        let pos1val=btns[pattern[0]].innerText;
        let pos2val=btns[pattern[1]].innerText;
        let pos3val=btns[pattern[2]].innerText;

        if( pos1val != "" && pos2val != "" && pos3val != "" )
            {
            if(pos1val === pos2val && pos2val === pos3val)
                {
                    console.log("winner",pos1val);
                    showwinner(pos1val);
                }
            }
        }
};
newbtn.addEventListener("click",resetgame);