
//---show when click





function showOnly(id1,id2)
{

    
  currentStatus=id2;

    const all=document.getElementById("all");
    const interview=document.getElementById("interview");
    const interviewFirtPart=interview.querySelector('#first')
    const interviewSecondPart=interview.querySelector('#second')
    const rejected=document.getElementById("rejected");
    const rejectFirstPart=rejected.querySelector('#first')
    const rejectSecondPart=rejected.querySelector('.second')

    
    const allBtn=document.getElementById("all-btn");
    const interviewBtn=document.getElementById("interview-btn");
    const rejectedBTn=document.getElementById("rejected-btn");
    

    const interviewCount=document.getElementById('interview-count');
    const rejectedCount=document.getElementById('rejected-count');
    


    all.classList.add("hidden");
    interview.classList.add("hidden");
    rejected.classList.add("hidden");

    allBtn.classList.remove('bg-blue-600','text-white');
    interviewBtn.classList.remove('bg-blue-600','text-white');
    rejectedBTn.classList.remove('bg-blue-600','text-white');
    
    

    const selected2=document.getElementById(id2);
   
    selected2.classList.remove("bg-[#FFFFFF]");
    selected2.classList.add("bg-blue-600");
    selected2.classList.add("text-white");

  


    const selected=document.getElementById(id1);
    // selected.classList.remove("hidden");

   if(id2=='interview-btn')
   {
    if(interviewCount.innerText=='0')
    {
        selected.classList.remove('hidden');
        interviewSecondPart.classList.add("hidden")
        interviewFirtPart.classList.remove('hidden')


    }
    else{
        selected.classList.remove('hidden');
        interviewSecondPart.classList.remove("hidden")
        interviewFirtPart.classList.add('hidden')
        renderingInterview();
    }
   }

    else if(id2=='rejected-btn')
   {
    if(rejectedCount.innerText=='0')
    {
        selected.classList.remove('hidden');
        rejectSecondPart.classList.add("hidden")
        rejectFirstPart.classList.remove('hidden')
    }
    else{
        selected.classList.remove('hidden');
        rejectSecondPart.classList.remove("hidden")
        rejectFirstPart.classList.add('hidden')
        renderingReject();
    }
   }
   else{
    selected.classList.remove("hidden");
   }


    count();
    
}








