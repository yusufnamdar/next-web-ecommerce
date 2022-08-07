import Axios from 'axios'

const axios = Axios.create({ headers: { 'content-type': 'application/json' } })

export { axios }
