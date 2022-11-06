# @ernestoyoofi/bmkg-scrap
*this project is beta testing and it is not an official project @infoBMKG*

![NODE JS](https://img.shields.io/npm/v/@ernestoyoofi/bmkg-scrap.svg?style=flat-square)

# ⚡ Installation

*Using NPM*

```bash
npm install --save @ernestoyoofi/bmkg-scrap
```
```bash
npm i github:ernestoyoofi/bmkg-scrap
```
```js
// Imports Module
const BMKG = require("@ernestoyoofi/bmkg-scrap")
```

*Manual Installation* <br/>
if you not using npm, you can [download](https://github.com/ernestoyoofi/bmkg-scrap/archive/refs/heads/main.zip) or [clone](https://github.com/ernestoyoofi/bmkg-scrap.git) this repository
```bash
git clone https://github.com/ernestoyoofi/bmkg-scrap.git
```
```js
// Imports Module
const BMKG = require("./bmkg-scrap/index.js")
```

# 🎉 Usage

See test script in [here](/test.js)

## 🌏 Earthquake List

**Script**
```js
const BMKG = require("@ernestoyoofi/bmkg-scrap")

// View List Earthquake (15 Length)
BMKG.earthquake().then(z => {
  console.log(z)
})
```
**Output**
```js
[
  {
    Tanggal: '05 Nov 2022',
    Jam: '14:42:13 WIB',
    DateTime: '2022-11-05T07:42:13+00:00',
    Coordinates: '3.92,126.39',
    Lintang: '3.92 LU',
    Bujur: '126.39 BT',
    Magnitude: '5.1',
    Kedalaman: '58 km',
    Wilayah: '33 km BaratDaya MELONGUANE-SULUT',
    Potensi: 'Tidak berpotensi tsunami'
  },
  ... 14 Items More
]
```

## 🌏 Recent Earthquake

**Script**
```js
const BMKG = require("@ernestoyoofi/bmkg-scrap")

// View Now Earthquake
BMKG.earthquake_now().then(z => {
  console.log(z)
})
```
**Output**
```js
{
  Tanggal: '05 Nov 2022',
  Jam: '14:42:13 WIB',
  DateTime: '2022-11-05T07:42:13+00:00',
  Coordinates: '3.92,126.39',
  Lintang: '3.92 LU',
  Bujur: '126.39 BT',
  Magnitude: '5.1',
  Kedalaman: '58 km',
  Wilayah: '33 km BaratDaya MELONGUANE-SULUT',
  Potensi: 'Tidak berpotensi tsunami',
  Dirasakan: '-',
  Shakemap: '20221105144605.mmi.jpg'
}
```

## 🌦️ Current Weather

**Script**
```js
const BMKG = require("@ernestoyoofi/bmkg-scrap")

// View List Weather Status Now
BMKG.weather().then(z => {
  console.log(z)
})
```
**Output**
```js
[
  {
    kota: 'Banda Aceh',
    waktu: '19:00 WIB',
    cuaca: [
      'Berawan Tebal'
    ],
    suhu: '24°C',
    icon: 'https://bmkg.go.id/asset/img/icon-cuaca/berawan tebal-pm.png'
  },
  ... 33 Items More
]
```

## 🌦️ Weather Forecast

**Script**
```js
const BMKG = require("@ernestoyoofi/bmkg-scrap")

// View List Weather Status Now
BMKG.forecast_weather().then(z => {
  console.log(z)
})
```
**Output**
```js
{
  tanggal: [ 'Sabtu, 05 Nov', 'Minggu, 06 Nov', 'Senin, 07 Nov' ],
  row_1: [
    {
      lokasi: 'Banda Aceh',
      cuaca: [
        'Berawan Tebal'
      ],
      suhu: '22 - 30',
      kelembapan: '80 - 95'
    },
    ... More Items
  ],
  row_2: [
    {
      lokasi: 'Banda Aceh',
      cuaca: [
        'Hujan Ringan',
        'Hujan Lebat',
        'Cerah Berawan',
        'Berawan'
      ],
      suhu: '22 - 30',
      kelembapan: '75 - 95'
    },
    ... More Items
  ]
  row_3: [
    {
      lokasi: 'Banda Aceh',
      cuaca: [
        'Cerah Berawan',
        'Hujan Ringan',
        'Berawan',
        'Hujan Petir'
      ],
      suhu: '21 - 30',
      kelembapan: '80 - 95'
    },
    ... More Items
  ]
}
```
