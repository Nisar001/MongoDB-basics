import express from 'express'
import { getPropertyType, searchProperty} from '../controllers/AirbnbContr.js'
import {getFilteredData} from '../controllers/AirBnbControllers.js'
const router = express.Router()

router.get('/propertyType_list', getPropertyType)
router.get('/searchType', searchProperty)
router.get('/getFilteredData', getFilteredData)


export default router
