const fs = require('fs');
const path = require('path');

// Load JSON data
const jsonFilePath = path.join(__dirname, 'data', 'germany_cities.json');
const germanyData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

/**
 * Get cities in a given province
 * @param {string} provinceName - The name of the province
 * @returns {Array} List of cities in the province or an error message
 */
function getCities(provinceName) {
    const province = germanyData.Germany.provinces.find(p => p.name.toLowerCase() === provinceName.toLowerCase());

    if (!province) {
        return `Province "${provinceName}" not found.`;
    }

    return province.cities;
}

// Export the function for external use
module.exports = { getCities };
