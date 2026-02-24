
let interviewList=[];
let rejectedList=[];
let currentStatus='all-btn';


const total=document.getElementById('total');
const interviewCount=document.getElementById('interview-count');
const rejectedCount=document.getElementById("rejected-count");


const secondTotal=document.getElementById('counted');

const allBtn=document.getElementById("all-btn");
const interviewBtn=document.getElementById("interview-btn");
const rejectedBtn=document.getElementById("rejected-btn");


// count part 

function count()
{
    const totalCards=document.querySelectorAll('#all .card').length;
    total.innerText=totalCards;
    
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerText=rejectedList.length;


    if(allBtn.classList.contains('bg-blue-600')){
        secondTotal.innerText=totalCards;

    }
    else if(interviewBtn.classList.contains('bg-blue-600'))
    {
        secondTotal.innerText=`${interviewList.length} of 8`;
    }
    else if(rejectedBtn.classList.contains('bg-blue-600')){
        secondTotal.innerText=`${rejectedList.length} of 8`;
    }
    

}
count();



// card remove part 


document.querySelector("#main").addEventListener('click', function (e) {
    

    if (e.target.classList.contains('fa-trash') || e.target.closest('.fa-trash')) {
        
        const card = e.target.closest('.card');
        const confirmDelete = confirm("Are you  you want to delete this card?");
        
        if (confirmDelete) {
            card.remove();
            count();
        }
    }

});






// main part 



document.getElementById("main").addEventListener('click', function (e) {
    const parent = e.target.closest(".card");
    if (!parent) return;

    const heading = parent.querySelector('.heading').innerText;
    const heading2 = parent.querySelector('.heading2').innerText;
    const para1 = parent.querySelector('.para1').innerText;
    const para2 = parent.querySelector('.para2').innerText;
    const changingBtnTag = parent.querySelector('.changing-btn');

   
    if (e.target.classList.contains('card-interview-btn')) {
        const status = 'INTERVIEWED';

    
        changingBtnTag.innerText = status;
        changingBtnTag.className = 'changing-btn border-3 w-fit border-green-400 text-green-600 font-bold rounded-sm p-2';

        const cardInfo = { heading, heading2, para1, status, para2 };

        const exist = interviewList.find(item => item.heading == cardInfo.heading);

        if (!exist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.heading != cardInfo.heading);

       
        
        if(currentStatus=='rejected-btn')
        {
            
            renderingReject();
        }
        count();
    }

    
    else if (e.target.classList.contains('card-rejected-btn')) {
        const status = 'REJECTED';

 
        changingBtnTag.innerText = status;
        changingBtnTag.className = 'changing-btn border-3 w-fit border-red-400 text-red-600 font-bold rounded-sm p-2';

        const cardInfo = { heading, heading2, para1, status, para2 };

        const exist = rejectedList.find(item => item.heading == cardInfo.heading);
        if (!exist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.heading != cardInfo.heading);



      if (currentStatus == 'interview-btn') {
        
        renderingInterview();
    }

       count();
    }
});



