

let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');



let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let {name, sposter, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            
        });
        
        // search data load
        data.forEach(element => {
            let {name, imdb, date, sposter, genre, url} = element;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="">
                        <div class="cont">
                            <h3>${name}</h3>
                            <p>${genre}, ${date} , <span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</i></p>
                        </div>
            `
            search.appendChild(card);
        });


        search_input.addEventListener('keyup', () => {
            let filter = search_input.value.toUpperCase();
            let a = search.getElementsByTagName('a');

            for (let index = 0; index < a.length; index++) {
                let b = a[index].getElementsByClassName('cont')[0];
                
                let TextValue = b.textContent || b.innerText;
                if (TextValue.toUpperCase().indexOf(filter) > -1) {
                    a[index].style.display = "flex";
                    search.style.visibility = "visible";
                    search.style.opacity = 1;
                } else {
                    a[index].style.display = "none";
                }
                if (search_input.value == 0) {
                    search.style.visibility = "hidden";
                    search.style.opacity = 0;
                }
            }
        })

        

        

        
    })
