document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");

    // Load and parse the menu XML
    fetch("menu.xml")
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");

            // Meals
            const meals = xmlDoc.querySelectorAll("meal");
            meals.forEach(meal => {
                const name = meal.querySelector("name").textContent;
                const description = meal.querySelector("description").textContent;
                const price = meal.getAttribute("price");
                const image = meal.getAttribute("image");

                const cardHTML = `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${image}" class="card-img-top" alt="${name}">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">${description}</p>
                                <p class="card-text fw-bold">$${price}</p>
                            </div>
                        </div>
                    </div>
                `;
                menuContainer.innerHTML += cardHTML;
            });

            // Beverages
            const beverages = xmlDoc.querySelectorAll("beverage");
            beverages.forEach(beverage => {
                const name = beverage.querySelector("name").textContent;
                const description = beverage.querySelector("description").textContent;
                const price = beverage.getAttribute("price");
                const image = beverage.getAttribute("image");

                const cardHTML = `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${image}" class="card-img-top" alt="${name}">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">${description}</p>
                                <p class="card-text fw-bold">$${price}</p>
                            </div>
                        </div>
                    </div>
                `;
                menuContainer.innerHTML += cardHTML;
            });
        })
        .catch(error => console.error("Error loading menu.xml:", error));
});
