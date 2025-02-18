# 🇩🇪 Germany Cities Lookup

A simple Node.js package that provides a list of cities in German provinces (Bundesländer).  

## 🚀 Features
- Get all cities of a specific province in Germany.
- Easy-to-use function with JSON data.
- Lightweight and efficient.

---

## 📦 Installation
You can install this package using **npm**:

```sh
npm install germany-cities
```

or clone the repository manually:

```sh
git clone https://github.com/RadinAnsari/germany-cities.git
cd germany-cities
```

---

## 📚 Usage
### Import the module:
```javascript
const { getCities } = require('germany-cities');
```

### Get cities in a province:
```javascript
console.log(getCities('Bayern'));
// Output: ["München", "Nürnberg", "Augsburg", "Regensburg", "Würzburg", "Ingolstadt", "Fürth", "Erlangen", "Bamberg", "Bayreuth"]

console.log(getCities('Nordrhein-Westfalen'));
// Output: ["Köln", "Düsseldorf", "Dortmund", "Essen", "Bonn", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Münster"]

console.log(getCities('Unknown'));
// Output: Province "Unknown" not found.
```

---

## 🔧 API

### `getCities(provinceName)`
Returns an **array** of city names in the given German province.

#### **Parameters:**
| Parameter    | Type     | Description                           |
|-------------|---------|---------------------------------------|
| `provinceName` | `string` | The name of the German province (case insensitive). |

#### **Returns:**
- If the province exists: Returns an **array** of city names.
- If the province is not found: Returns an **error message** as a string.

---



## 📜 License
This project is licensed under the **MIT License**.

---

## 🌟 Contributing
Pull requests are welcome! Feel free to **fork** this repo and submit improvements.

For major changes, please open an **issue** first to discuss what you'd like to change.

---

## 📬 Contact
- GitHub: [RadinAnsari](https://github.com/RadinAnsari)
- Email: gently.crow@gmail.com
