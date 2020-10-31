let page = document.getElementById('buttonDiv');
const kButonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButonColors) {
    for (let item of kButonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('clcik', function() {
            chrome.storage.sync.set({color: item}, function() {
                console.log('color is:'+item);
            });
        });
        page.appendChild(button);
    }
}
constructOptions(kButonColors);