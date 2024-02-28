let colors = ['bg-success', 'bg-warning', 'bg-danger', 'bg-info']

function set_next_color_for_element(element) {
    nextColor = undefined;
    foundColor = false;
    for (let index = colors.length; index >= 0; index--) {
        if (element.classList.contains(colors[index])){
            element.classList.remove(colors[index]);
            if (nextColor != undefined){
                element.classList.add(nextColor);
                foundColor = true;
            }
        }
        
        nextColor = colors[index];
    }

    if (!foundColor && nextColor.length > 0){
        element.classList.add(nextColor);
    }
}

// voeg een class toe aan het parent element
let parent_btn = document.getElementById('parent-btn');
parent_btn.onclick = function () {
    set_next_color_for_element(this.parentElement);
}

// voeg een class toe aan het vorige sibling element
let ps_btn = document.getElementById('previous-sibling-btn');
ps_btn.onclick = function () {
    set_next_color_for_element(this.previousElementSibling);
}

// voeg een class toe aan het vorige sibling element
let ns_btn = document.getElementById('next-sibling-btn');
ns_btn.onclick = function () {
    set_next_color_for_element(this.nextElementSibling);
}

let ul = document.getElementsByTagName('ul')[0];

function write_info() {
    let info_p = document.getElementById('children');
    let info = [];

    info.push('Aantal children (manier 1): '+ul.children.length);
    info.push('Aantal children (manier 2): '+ul.childElementCount);

    if (ul.childElementCount > 0){
        info.push('Inhoud eerste element: '+ul.firstElementChild.innerHTML);
        info.push('Inhoud laatste element: '+ul.lastElementChild.innerHTML);

        index = 0;
        if (ul.childElementCount > 1){
            index = Math.round(Math.random() * (ul.childElementCount-1));
        }
        info.push('Inhoud child-element['+index+']: '+ul.children[index].innerHTML);
    }

    info_p.innerHTML = '';
    for (let index = 0; index < info.length; index++) {
        info_p.innerHTML += info[index]+'<br/>';
    }
}
write_info();

// verijder het eerste child element van de ul
let rfchild_btn = document.getElementById('rfchild-btn');
rfchild_btn.onclick = function () {
    ul.removeChild(ul.firstElementChild)
    write_info();
}

// verijder het laatste child element van de ul
let rlchild_btn = document.getElementById('rlchild-btn');
rlchild_btn.onclick = function () {
    ul.removeChild(ul.lastElementChild);
    write_info();
}

let rachildren_btn = document.getElementById('rachildren-btn');
rachildren_btn.onclick = function () {
    while (ul.children.length > 0) {
        ul.removeChild(ul.firstChild);
    }
    write_info();
}


let element_nr = 0;
function creat_new_li() {
    element_nr++;
    let li = document.createElement('li');
    li.innerHTML = 'New LI Element #'+element_nr;
    return li
}

let ib_btn = document.getElementById('ibefore-btn');
ib_btn.onclick = function () {
    ul.insertBefore(creat_new_li(), ul.firstElementChild);
    write_info();
}
let ia_btn = document.getElementById('iafter-btn');
ia_btn.onclick = function () {
    ul.appendChild(creat_new_li());
    write_info();
}

