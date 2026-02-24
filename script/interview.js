
// interview rendering 

function renderingInterview() {
    const interviewsecond = document.getElementById("second");



    interviewsecond.innerHTML = ''; 

    for (let interview of interviewList) {

        let div = document.createElement('div');
    
         div.className = "card bg-[#FFFFFF] rounded-sm flex flex-row justify-between p-7 border-none gap-2 mb-4 border border-gray-200";

        div.innerHTML = `
        <div class="left">
            <h1 class="heading font-bold text-xl">${interview.heading}</h1>
            <h2 class="heading2 text-gray-600 pt-1">${interview.heading2}</h2>
            <h3 class="para1 text-gray-600 py-4">${interview.para1}</h3>
            <h1 class="changing-btn bg-green-100 text-green-700 w-fit p-2 rounded-sm">${interview.status}</h1>
            <p class="para2 my-2">${interview.para2}</p>
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
        
        interviewsecond.append(div);
        
    }
    
    count(); 
}