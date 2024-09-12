// Sample dataset of Indian cities (you can extend this dataset as needed)
const cities = [
    { name: "Mumbai", state: "Maharashtra", population: "20,185,064" },
    { name: "Delhi", state: "Delhi", population: "18,980,000" },
    { name: "Bangalore", state: "Karnataka", population: "12,339,000" },
    { name: "Hyderabad", state: "Telangana", population: "10,000,000" },
    { name: "Ahmedabad", state: "Gujarat", population: "8,000,000" },
    { name: "Chennai", state: "Tamil Nadu", population: "7,088,000" },
    { name: "Kolkata", state: "West Bengal", population: "14,850,000" },
    { name: "Jaipur", state: "Rajasthan", population: "3,046,000" },
    { name: "Lucknow", state: "Uttar Pradesh", population: "3,500,000" },
    { name: "Pune", state: "Maharashtra", population: "6,000,000" }
];

// Function to search and display city details
function searchCity() {
    const input = document.getElementById('search').value.toLowerCase();
    const tbody = document.querySelector('#cityTable tbody');
    const noResult = document.getElementById('noResult');
    
    // Clear previous results
    tbody.innerHTML = '';
    noResult.style.display = 'none';

    // Filter cities based on input
    const filteredCities = cities.filter(city => city.name.toLowerCase().includes(input));

    if (filteredCities.length > 0) {
        filteredCities.forEach(city => {
            const row = `<tr>
                <td>${city.name}</td>
                <td>${city.state}</td>
                <td>${city.population}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
    } else {
        noResult.style.display = 'block';
    }
}
