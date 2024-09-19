document.addEventListener('DOMContentLoaded',function()
{
    const container-fluid=document.getElementById('container-fluid');
    function checkVisibility()
    {
        const rect=container-fluid.getBoundingClientRect();
        const windowHeight=window.innerHeight||document.documentElement.clientHeight;
        if(rect.top<=windowHeight&&rect.bottom>=0)
        {
            container.classList.add('visible');
        }
        else
        {
            container.classList.remove('visible');
        }
    }
    window.addEventListener('scroll',checkVisibility);
    checkVisibility();
});