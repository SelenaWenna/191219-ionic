export const environment = {
    // flag for using mocks for ionic native
    useNativeMocks: false,
    production: false,
    // http schema
    schema: 'https://',
    // base (domain url)
    baseUrl: 'dev.finmarket.online',
    // api path prefix
    apiPrefix: 'api',
    // api version code
    apiVer: 0,
    // shortcut for accessing to full api host url
    get host() {
        return `${this.schema}${this.baseUrl}/`;
    },
    // api entry shortcut
    get apiPath() {
        return `${this.apiPrefix}${this.apiVer}/`;
    },
    // sms code max length
    smsCodeLength: 6,

    // dadata address search limit
    searchLimit: 10,

    // dadata search url
    dadataAddressSearchUrl: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',

    // dadata auth header value
    dadataAuthorizationAddressHeader: 'Token 2559e0bc78d438cea97307bf13e9e5b8363fec20',
    // timeout for restoring any state for defaults
    stateRestoreTimeputMs: 300,

    // listed entities paging start
    pagingStart: 0,

    // listed entities paging limit
    pagingLimit: 100,

    // on screen message lifetime (milliseconds)
    toastDuration: 5000,

    // sms get offset time (milliseconds)
    smsGetTimeOffset: 120000,
    masks: {
        snils: [/[0-9]/, /\d/, /\d/, '-', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/],
        phone: [7, '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
        passport_police_code: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
    },
    formats: {
        datepicker_date: 'MM.DD.YYYY',
        datepicker_datetime: 'MM.DD.YYYYTHH:mm',
        datepicker_datetimeFull: 'MM-DD-YYYYTHH:mm:ssZ',
        weekdays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        monthPickerFormat: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    agentBlockDefaultReason: 'Блокировка агента по требованию',
    defaults: {
        repeatButtonText: 'Повторить'
    }
};
