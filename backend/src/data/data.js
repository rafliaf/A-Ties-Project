acData = [
    {
        id: 1,
        ac: [
            {
                id: 1,
                isOn: 1,
                model: 'AC_Midea_MSAF-05CRN2',
                status: 'Good',
                timestamp: {
                    '08:00': 100,
                    '09:00': 120,
                    '10:00': 90,
                },
                lastService: '12-09-2001',
                cost: 12000,
                pk: 1.0,
                suhu: 18,
            },
            {
                id: 2,
                isOn: 1,
                model: 'AC_Daikin_FTC_15NV14',
                status: 'Good',
                timestamp: {
                    '08:00': 100,
                    '09:00': 120,
                    '10:00': 90,
                },
                lastService: '12-09-2001',
                cost: 12000,
                pk: 1.5,
                suhu: 18,
            },
        ], 
        suhuRuangan: 21,
        name: 'Audio Visual'
    },
    {
        id: 2,
        ac: [
            {
                id: 1,
                isOn: 0,
                model: 'AC_Midea_MSAF-05CRN2',
                status: 'Bad',
                timestamp: {
                    '08:00': 100,
                    '09:00': 120,
                    '10:00': 90,
                },
                lastService: '12-09-2001',
                cost: 12000,
                pk: 1.0,
                suhu: 18,
            },
            {
                id: 2,
                isOn: 1,
                model: 'AC_Daikin_FTC_15NV14',
                status: 'Good',
                timestamp: {
                    '08:00': 100,
                    '09:00': 120,
                    '10:00': 90,
                },
                lastService: '12-09-2001',
                cost: 12000,
                pk: 1.5,
                suhu: 18,
            },
        ],
        suhuRuangan: 21,
        name: 'Meeting Room'
    },
    {
        id: 3,
        ac: [
            {
                id: 1,
                isOn: 1,
                model: 'AC_Midea_MSAF-05CRN2',
                status: 'Good',
                timestamp: {
                    '08:00': 100,
                    '09:00': 120,
                    '10:00': 90,
                },
                lastService: '12-09-2001',
                cost: 12000,
                pk: 1.0,
                suhu: 18,
            },
            {
                id: 2,
                isOn: 1,
                model: 'AC_Daikin_FTC_15NV14',
                status: 'Good',
                timestamp: {
                    '08:00': 100,
                    '09:00': 120,
                    '10:00': 90,
                },
                lastService: '12-09-2001',
                cost: 12000,
                pk: 1.5,
                suhu: 18,
            },
        ],
        suhuRuangan: 21,
        name: 'Ruang Database'
    },
];

module.exports = acData;
