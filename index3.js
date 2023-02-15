let h = document.querySelectorAll('a')

for(i of h){
    if(i.attributes['data-track-click']!==undefined){
    if (i.attributes['data-track-click'].textContent=='homepage_click'){
        console.log(i.href)
    }}
}

