const {Router} = require('express');
const router = Router();
const controllers = require('../controllers/main');
const login = require('../controllers/login');

router.get('/login',login.login)
router.post('/logiar',login.logiar)
router.get('/registro',login.registro)
router.post('/registrar',login.registrar)
router.get('/logout',login.logout)

router.get('/',controllers.home);

router.get('/insert',controllers.insert);

router.post('/add',controllers.add);

router.get('/delete/:id',controllers.delete);

router.get('/done/:id',controllers.done);

router.get('/edit/:id',controllers.edit);

router.post('/update/:id',controllers.update);

module.exports = router;