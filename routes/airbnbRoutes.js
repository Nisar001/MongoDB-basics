import express from 'express'
import { getFilteredData, getProperty_type, searchByname } from '../controllers/AirBnbController.js'

const router = express.Router()

router.get('/propertyType_list', getProperty_type)
router.get('/searchType', searchByname)
router.get('/getFilteredData', getFilteredData)


export default router