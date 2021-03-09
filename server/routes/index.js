import express from 'express';
import apiRoutes from './api';

const router = express.Router();

router.use('/api/v1', apiRoutes);

module.exports = router;