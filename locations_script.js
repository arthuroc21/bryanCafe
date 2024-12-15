document.addEventListener("DOMContentLoaded", () => {
    const locationsContainer = document.querySelector("#locations .row");

    // Load and parse the branches XML
    fetch("branches.xml")
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");

            // Branches
            const branches = xmlDoc.querySelectorAll("branch");
            branches.forEach(branch => {
                const address = branch.querySelector("address").textContent;
                const contact = branch.querySelector("contact").textContent;
                const hours = branch.querySelector("hours").textContent;
                const map = branch.querySelector("map").textContent;

                const cardHTML = `
                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">${address.split(",")[0]}</h5>
                                <p class="card-text">${address}</p>
                                <p class="card-text">Contact: ${contact}</p>
                                <p class="card-text">Opening Hours: ${hours}</p>
                                <a href="${map}" target="_blank" class="btn btn-primary">View on Map</a>
                            </div>
                        </div>
                    </div>
                `;
                locationsContainer.innerHTML += cardHTML;
            });
        })
        .catch(error => console.error("Error loading branches.xml:", error));
});
