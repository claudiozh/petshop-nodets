import { Request, Response, Router } from 'express';
import * as AppController from '../controllers/app.controller';
import * as SearchController from '../controllers/search.controller';

const router = Router();

router.get('/', AppController.home);
router.get('/dogs', AppController.dogs);
router.get('/cats', AppController.cats);
router.get('/fishes', AppController.fishes);

router.get('/search', SearchController.search);

export default router;