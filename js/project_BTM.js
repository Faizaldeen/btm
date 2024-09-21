document.addEventListener('DOMContentLoaded',function()
{
    const bikers=document.getElementById("about");
    const bikers1=document.getElementById("duke");
    const bikers2=document.getElementById("rc");
    const racers=document.getElementById("racers");
    console.log(bikers);
    console.log(racers);
    function checkVisibility()
    {
        const rect=bikers.getBoundingClientRect();
        const windowHeight=window.innerHeight||document.documentElement.clientHeight;
        if(rect.top<=windowHeight&&rect.bottom>=0)
        {
            bikers.classList.add('visible');
            bikers1.classList.add('visible');
            bikers2.classList.add('visible');
        }
        else
        {
            bikers.classList.remove('visible');
            bikers1.classList.remove('visible');
            bikers2.classList.remove('visible');
        }
    }
    window.addEventListener('scroll',checkVisibility);
    checkVisibility();


/* function checkVisibility1()
{
    const rect=racers.getBoundingClientRect();
    const windowHeight=window.innerHeight||document.documentElement.clientHeight;
    if(rect.top<=windowHeight&&rect.bottom>=0)
    {
        racers.classList.add('visible');
    }
    else
    {
        racers.classList.remove('visible');
    }
}
window.addEventListener('scroll',checkVisibility1);
checkVisibility1(); */

function visit() 
{
    const racers = [document.getElementById('about1'), document.getElementById('duke1-1'), document.getElementById('duke1-2'), document.getElementById('duke1-3'), document.getElementById('duke1-4')];

    racers.forEach(racers => 
        {
        const rect = racers.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) 
        {
            racers.classList.add('visible'); // Add 'visible' class when in view
        } 
        else 
        {
            racers.classList.remove('visible'); // Remove 'visible' class when out of view
        }
    });
}
// Event listener for scroll events
window.addEventListener('scroll', visit);

// Initial check to see if elements are already in view
visit();
});