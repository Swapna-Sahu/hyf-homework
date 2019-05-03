// red , blue and green balls for translateOnebyOne function
function redBall() {
    let red = moveElement(document.querySelector('ul.marks li:nth-child(1)'), {x: 20, y: 300}); 
    return red
}
function blueBall () {
    let blue = moveElement(document.querySelector('ul.marks li:nth-child(2)'), {x: 400, y: 300});
    return blue
}
function greenBall () {
    let green = moveElement(document.querySelector('ul.marks li:nth-child(3)'), {x: 400, y: 20});
    return green
}

//******************** red , blue and green balls for translateOnebyOne function**********
function redBall1() {
    let red = moveElement(document.querySelector('ul.marks li:nth-child(1)'), {x: 20, y: 600}); 
    return red
}
function blueBall1 () {
    let blue = moveElement(document.querySelector('ul.marks li:nth-child(2)'), {x: 800, y: 600});
    return blue
}
function greenBall1 () {
    let green = moveElement(document.querySelector('ul.marks li:nth-child(3)'), {x: 800, y: 20});
    return green
}

// translateAllAtOnce function and translateOnebyOne function defined   
function translateOneByOne () {
    translateAllAtOnce ().then((res)=> { console.log("Start one by one"); return blueBall1();})
    .then((res)=>{ console.log("Blue on Target"); return greenBall1();})
    .then((res)=>{ console.log("Green on Target"); return redBall1();})
    .then((res)=>{ console.log("Red on Target");})
  }  
    
function translateAllAtOnce () {
    return Promise.all([redBall(),blueBall(),greenBall()]).then((res)=> { 
                console.log("ALL DONE!!!",res);
    });  
}

function translateOneByOne () {
    translateAllAtOnce ().then((res)=> { console.log("Red on Target"); return blueBall1();})
    .then((res)=>{ console.log("Blue on Target"); return greenBall1();})
    .then((res)=>{ console.log("Blue on Target"); return redBall1();})
    .then((res)=>{ console.log("Green on Target");})
  }  
translateOneByOne();
