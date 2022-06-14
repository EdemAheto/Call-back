const grow = document.getElementById('grow');
const small = document.getElementById('shrink');
const round = document.getElementById('round');
const time = document.getElementById('time');
const size =document.getElementById('size');
const object =document.getElementById('object');


function increase(){
    setTimeout(()=>{
        object.style.width += size.value.concat('px')
        object.style.height += size.value.concat('px')
    }, Number(time.value) * 1000)

}
function reset(){
    let seconds = Number(time.value) * 1000;
    let resetTime = Number(seconds) + 1000;
    setTimeout(()=>{
        object.style.height = "100px";
        object.style.weight = "120px";
        object.style.backgroundColor = "red"
     }, resetTime)
     console.log("Hello everyone");
    
}

grow.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log('ello')
    increase();
    reset();
    
});


small.addEventListener('click', (event)=>{
        event.preventDefault();
            setTimeout(()=>{
                object.style.width += size.value.concat('px');
            }, Number(time.value) * 1000)
        
            function reset(){
                let seconds = Number(time.value) * 1000;
                let resetTime = Number(seconds) + 1000;
            
                setTimeout(()=>{
                    object.style.height = "30px";
                    object.style.weight = "30px";
                    object.style.backgroundColor = "orange"
                 }, resetTime)
                }
                 console.log("Hello everyone");
                 

        reset()
})



round.addEventListener('click',(event)=>{
    event.preventDefault();
    let seconds = Number(time.value)*1000;
    setTimeout(()=>{
        object.style.backgroundColor = "aqua"
        object.style.borderRadius = "70px"
    }, seconds)
    function reset(){
        let resetTime = Number(seconds) + 1000;

        setTimeout(()=>{
            object.style.height = "50px";
            object.style.weight = "50px";
            object.style.backgroundColor = "green"
         }, resetTime)
         console.log("Hello everyone");
        
    }
    reset();
})
