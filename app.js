
//inersectioObserver = run  everytime visibilty changes in viewport
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry)
        //show if its intersecting the viewport
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        //hide if its not intersecting the viewport
        else {
            entry.target.classList.remove('show');
        }
    });

});


//Grab all elements with hidden class
const hiddenElements = document.querySelectorAll('.hidden');

// loop thru all hidden el & observe each Hidden elements
hiddenElements.forEach((el) => observer.observe(el));