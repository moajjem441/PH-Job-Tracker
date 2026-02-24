

// reject rendering 

function renderingReject() {

    const rejectSecond=document.querySelector(".second");

    rejectSecond.innerHTML = ''; 

    for (let reject of rejectedList) {
        let div = document.createElement('div');
        
        div.className = "card bg-[#FFFFFF] rounded-sm flex flex-row justify-between p-7 border-none gap-2 mb-4 border border-gray-200";

        div.innerHTML = `
        <div class="left">
            <h1 class="heading font-bold text-xl">${reject.heading}</h1>
            <h2 class="heading2 text-gray-600 pt-1">${reject.heading2}</h2>
            <h3 class="para1 text-gray-600 py-4">${reject.para1}</h3>
            <h1 class="changing-btn bg-red-100 text-red-700 w-fit p-2 rounded-sm">${reject.status}</h1>
            <p class="para2 my-2">${reject.para2}</p>
            <div class="flex gap-5 mt-4">
                <button id="card-interview-btn"
                                    class="card-interview-btn border-3 border-green-400 text-green-600 font-bold rounded-sm p-2">INTERVIEW</button>
                                <button id="card-rejected-btn"
                                    class="card-rejected-btn border-3 border-red-400 text-red-600 font-bold rounded-sm p-2">REJECTED</button>
            </div>
        </div>
        <div class="right">
            <i class="fa-solid fa-trash text-red-400 cursor-pointer"></i>
        </div> `;
        
        
        rejectSecond.append(div);
    }
    
    count(); 
}