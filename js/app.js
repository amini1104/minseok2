
document.addEventListener("DOMContentLoaded",function(){

    const progressbar = document.querySelectorAll(".progress-bar")
    progressbar.forEach(bar => {
       const target = bar.getAttribute("data-bs-target");
       setTimeout(() => {
        bar.style.width = target + "%";
       },500) 
    })


})  