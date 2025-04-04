const categoryOne = window.location.pathname.split('/')[1].replace(/^./, s => s.toUpperCase());
const categoryTwo = window.location.pathname.split('/')[2].split('.')[0].replace(/^./, s => s.toUpperCase());

document.getElementById("categoryOne").innerHTML = categoryOne
document.getElementById("categoryTwo").innerHTML = categoryTwo
