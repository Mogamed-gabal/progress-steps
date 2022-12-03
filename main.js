// global variables
let nodes=document.querySelectorAll(".node")
let nextBtn=document.getElementById("next")
let prevBtn=document.getElementById("prev")
let progressLine=document.getElementById("progress")


//the counter (how many nodes is active)
let theProgress=1
// the nextbtn functions(increase)
nextBtn.addEventListener("click",function()
{
    theProgress++
    if(theProgress>nodes.length)
    {
        theProgress=nodes.length
        
    }
    progressCheack()
}
)
//the prevbtn functions(decrease)
prevBtn.addEventListener("click",function()
{
    theProgress--
    if(theProgress<1)
    {
        theProgress=1
    }
    progressCheack()
}

)
// function to cheack the progress and active of the nodes in the order of prevBtn and nextBtn 
function progressCheack()
{
    // using foreach to act with nodes with the arrey methods to allow to give ordes to all of them 
    nodes.forEach((circle,i)=>
    {
        if(i<theProgress)
        {
            circle.classList.add("active-node")
        }else
        {
            circle.classList.remove("active-node")
        }
    }
    )
    // preper the progress line width and buttons classes
    let activeProgress=document.querySelectorAll(".active-node")
    progressLine.style.width=(activeProgress.length - 1 ) / (nodes.length - 1 ) *100 + "%"
    
    if(theProgress===1)
    {
        nextBtn.classList.remove("disabled")
        prevBtn.classList.add("disabled")
    }
    if (theProgress===nodes.length)
    {
        prevBtn.classList.remove("disabled")
        nextBtn.classList.add("disabled")
    }
    else
    {
        prevBtn.classList.remove("disabled")
        
        nextBtn.classList.remove("disabled")
    }
    

}

