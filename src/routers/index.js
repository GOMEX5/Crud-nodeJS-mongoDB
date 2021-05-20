const {Router} = require('express');
const router = Router();
const controllers = require('../controllers/main');

router.get('/',controllers.home);

router.get('/insert',controllers.insert);

router.post('/add',controllers.add);

router.get('/delete/:id',controllers.delete);

router.get('/done/:id',controllers.done);

router.get('/edit/:id',controllers.edit);

router.post('/update/:id',controllers.update);

module.exports = router;