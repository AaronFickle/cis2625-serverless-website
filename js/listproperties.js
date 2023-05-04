//const api_url = 'https://ys8gxfz792.execute-api.us-east-1.amazonaws.com/prod';

//const resource = '/properties';
const url = './data/properties.json';

async function getListings() {

    try {
        let res = await fetch(url);
        return await res.json();  
    } catch (error) {
        console.log(error);
    }
}

async function renderListings() {
    let listings = await getListings();
    let html = '';
    listings.forEach(p => {
        let htmlSegment = `
        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
            <section class = "grid-container">
            <div class = "grid-item">
              <img class="card-img-top" src="${p.primarypic}" alt="Thumbnail [100%x225]" >
            
            
            </div>
            <div class = "grid-item">
                    <h2>${p.street_address}, ${p.city}, ${p.state}</h2>
                  <div class="list-card-footer">
                  </div>
                  <div class="list-card-heading">
                      <ul class="list-card-details">
                        <li class="">${p.bds}<abbr class="list-card-label"> bds</abbr></li>
                        <li class="">${p.ba}<abbr class="list-card-label"> ba</abbr></li>
                        <li class="">${p.sqft}<abbr class="list-card-label"> sqft</abbr></li>
                        <li class="list-card-statusText">${p.type}</li>
                   </ul>
                </div>
            </div>
              </div>
            </section>
            </div>
        </div>`;
        html += htmlSegment;
        })
    
    let card = document.querySelector('.row');
    card.innerHTML = html;
    }
    

renderListings();


