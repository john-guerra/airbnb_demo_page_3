export default function Listings() {
  const listing = {};

  console.log("👍🏽 Listings Initialized");
  const form = document.getElementById("create-listings-form");
  const listingsContainer = document.querySelector("#listings-container");

  const appendListing = ({ title, price, description, host = "John" } = {}) => {
    console.log("Append Listing", listing);

    const listingDiv = document.createElement("div");
    listingDiv.className = "listing col-6";
    listingDiv.innerHTML = `
      <article class="card">
        <img
          src="https://a0.muscache.com/pictures/b7c2a199-4c17-4ba6-b81d-751719d2dac6.jpg"
          alt="Thumbnail for Serviced apartment in San Francisco · ★4.87 · 1 bedroom · 2 beds · 1 bath"
          class="card-img-top"
        />

        <div class="card-body">
          <h3>
            ${title}
          </h3>
          <div class="host">Holly</div>
          <div class="price">$${price}</div>
          <div class="rating">⭐️4.87</div>
          <div
            class="description overflow-scroll"
            style="max-height: 180px"
          >
            ${description}
          </div>

          <div class="actions">
            <button class="btn btn-primary">Rent</button>
          </div>
        </div>
        <!-- /.card-body -->
      </article>
    `;

    listingsContainer.appendChild(listingDiv);
  };

  const onCreate = (event) => {
    event.preventDefault();
    console.log("🐣 On create listing", event);

    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());

    appendListing(listing);
  };

  form.addEventListener("submit", onCreate);

  return listing;
}
