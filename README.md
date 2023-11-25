# Backend-A-Ties-API

# Documentation
- Base URL (localhost) : http://localhost:8080/

## AC
### POST Data AC
- Method: `POST`
- Url: /acs
- Body: JSON
```json
{
    "isOn" : true,
    "model" : " AC_Akari_05D3LW",
    "status" : "Tidak Normal",
    "lastService" : "04/11/2023",
    "cost" : 11000,
    "pk" : 1.5,
    "suhu" : 19,
    "timestamp" :{
          "05-11-2023 00:00": 0,
          "05-11-2023 01:00": 0,
          "05-11-2023 02:00": 0,
          "05-11-2023 03:00": 0,
          "05-11-2023 04:00": 0,
          "05-11-2023 05:00": 0,
          "05-11-2023 06:00": 90,
          "05-11-2023 07:00": 140,
          "05-11-2023 08:00": 130,
          "05-11-2023 09:00": 100,
          "05-11-2023 10:00": 80,
          "05-11-2023 11:00": 70,
          "05-11-2023 12:00": 110,
          "05-11-2023 13:00": 120,
          "05-11-2023 14:00": 90,
          "05-11-2023 15:00": 100,
          "05-11-2023 16:00": 140,
          "05-11-2023 17:00": 100,
          "05-11-2023 18:00": 80,
          "05-11-2023 19:00": 110,
          "05-11-2023 20:00": 120,
          "05-11-2023 21:00": 90,
          "05-11-2023 22:00": 130,
          "05-11-2023 23:00": 100
    }
}
```

### GET Data All AC
- Method: `GET`
- Url: /acs
- Body: JSON


### GET Data AC By ID
- Method: `GET`
- Url: /acs/:id
- Body: JSON


### UPDATE Data AC By ID
- Method: `PUT`
- Url: /acs/update?id=
- Body: JSON
```json
{
    "isOn" : true,
    "model" : " AC_Akari_05D3LW23",
    "status" : "Normal",
    "lastService" : "04/11/2023",
    "cost" : 15000,
    "pk" : 1.5,
    "suhu" : 20,
    "timestamp" :{
            "05-11-2023 00:00": 0,
          "05-11-2023 01:00": 0,
          "05-11-2023 02:00": 0,
          "05-11-2023 03:00": 0,
          "05-11-2023 04:00": 0,
          "05-11-2023 05:00": 0,
          "05-11-2023 06:00": 90,
          "05-11-2023 07:00": 140,
          "05-11-2023 08:00": 130,
          "05-11-2023 09:00": 100,
          "05-11-2023 10:00": 80,
          "05-11-2023 11:00": 70,
          "05-11-2023 12:00": 110,
          "05-11-2023 13:00": 120,
          "05-11-2023 14:00": 90,
          "05-11-2023 15:00": 100,
          "05-11-2023 16:00": 140,
          "05-11-2023 17:00": 100,
          "05-11-2023 18:00": 80,
          "05-11-2023 19:00": 110,
          "05-11-2023 20:00": 120,
          "05-11-2023 21:00": 90,
          "05-11-2023 22:00": 130,
          "05-11-2023 23:00": 100
    }
}
```

