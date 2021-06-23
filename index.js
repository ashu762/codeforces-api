const username=document.querySelector(".as");
const sub=document.querySelector(".sub");
const results=document.querySelector(".results");


const fetchdata=async ()=>{
    if(username.value.length==0)
    alert("Please enter a handle name")
    else
    {
        const data=await (await fetch(`https://codeforces.com/api/user.rating?handle=${username.value}`)).json()
        if(data.status==="FAILED")
        alert("User does not exist.Please enter a valid user name")
        else
        {
            results.innerHTML=data.result.map(el=>
                
                `<div class="res">
                <div class="heading">${el.contestName}</div>
                <div class="rank"><b>Rank</b>: ${el.rank}</div>
                <div class="previous"><b>Previous Rating</b>: ${el.oldRating}</div>
                <div class="current"><b>Current Rating</b>: ${el.newRating}</div>
                <div class="timest"><b>Time Of Contest</b>: ${convert(el.ratingUpdateTimeSeconds)}</div>

                </div>
                `

            ).join(' ');
            console.log(results);
        }
    }
}
function convert(unixtimestamp){

    // Unixtimestamp
   
    // Months array
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
   
    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp*1000);
   
    // Year
    var year = date.getFullYear();
   
    // Month
    var month = months_arr[date.getMonth()];
   
    // Day
    var day = date.getDate();
   
    // Hours
    var hours = date.getHours();
   
    // Minutes
    var minutes = "0" + date.getMinutes();
   
    // Seconds
    var seconds = "0" + date.getSeconds();
   
    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    return convdataTime
    
   }
sub.addEventListener("click",fetchdata)
