module.exports = {
    database: {
        dbUrl: 'mongodb://86.27.197.196/DevDb',
        authDbUrl: 'mongodb://86.27..197.196/DevDb'
    },
    server: {
        port: '3000'
    },
    settings: {
        settingDocObjectId: '5a985a4917fd01299334e96c'
    },
    twitter: {
        consumer_key: 'wmQ884x5DKICPJpHQusuTP1bE',
        consumer_secret: 'mBGp9dE4TTXxH69lj7kuD8Ms0myxfJuf901iXRMRrEY80VecTf',
        bearer_token: 'AAAAAAAAAAAAAAAAAAAAAPUY4QAAAAAAeG9M903ZlKt40V8Ilv58rmDPfnk%3DrAQczh8U6m9FNUxOBSltOKNgjWsNIdo7MOvAyQ8SMs52Lq5mne',
        count: 10,              // Number of Tweets returned per keyword.
        result_type: 'recent',  // Either 'recent', 'popular' or 'mixed'.
        lang: 'en'              // Language based on ISO 639-1 code.
    }
};