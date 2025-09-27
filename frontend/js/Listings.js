export default function Listings() {
  const listing = {};
  console.log("👍🏽 Listings Initialized");

  const form = document.getElementById("create-listings-form");
  const listingsContainer = document.getElementById("listings-container");

  console.log("Form loaded", form);

  const appendListing = ({
    title,
    price,
    description = "N/A",
    host = "John",
  } = {}) => {
    console.log("➕ Appending listing", listing);

    const div = document.createElement("div");
    div.className = "listing col-6";
    div.innerHTML = `
    
      <article class="card">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-49096045/original/0e6f3f2e-2dcb-4a7c-8f1e-6d2f3f2e3f4g.jpeg"
          alt="Thumbnail for Serviced apartment in San Francisco · ★4.87 · 1 bedroom · 2 beds · 1 bath"
          class="card-img-top"
        />

        <div class="card-body">
          <h3>
            ${title}
          </h3>
          <div class="host">${host}</div>
          <div class="price">${price}</div>
          <div class="rating">⭐️4.87</div>
          <div
            class="description overflow-scroll"
            style="max-height: 180px"
          >${description}</div>

          <div class="actions">
            <button class="btn btn-primary">Rent</button>
          </div>
        </div>
        <!-- /.card-body -->
      </article>
    `;

    listingsContainer.appendChild(div);
  };

  const onCreate = (event) => {
    // Stops the default submit behavior
    event.preventDefault();

    console.log("🐣 creating listing");

    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());

    appendListing(listing);
    form.reset();
  };

  const fetchListings = async () => {
    console.log("🌍 fetching listings");

    try {
      const res = await fetch("/api/listings");

      if (!res.ok) {
        console.log("Error loading listings!");
        return;
      }

      const listings = await res.json();

      console.log("Listings", listings.data);
    } catch (error) {
      console.log("Error loading listings!", error);
    }
  };

  form.addEventListener("submit", onCreate);

  fetchListings();

  return listing;
}
