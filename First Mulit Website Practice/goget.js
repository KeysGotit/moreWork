function changeTitle() {
    let theDiv = document.getElementById("hdiv");
    theDiv.style.backgroundColor = 'black';
    theDiv.style.color = 'white';
    theDiv.style.textAlign = 'center';
    
}

function Specials() {
    let theDiv2 = document.getElementById('jdiv');
    let p = document.createElement('p');
    p.innerText = 'Come Check Us Out. We have Deer!!!';
    theDiv2.appendChild(p);
    theDiv.classList.add('major');
}

const animateHeading = () => {
    let heading = document.getElementById('h1');
    heading.classList.add('w3-animate-left');
}

