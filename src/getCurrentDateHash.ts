import moment from 'moment'

export const DATE_HASH_FORMAT = 'YYYY-MM-DD'

export const getCurrentDateHash = () => moment().format(DATE_HASH_FORMAT)
