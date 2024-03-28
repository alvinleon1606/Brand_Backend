import express from 'express'
import ProjectsController  from '../controllers/Projects';
import upload from '../utils/multer';
// import AuthVerify from '../middleware/auth';

const router = express.Router();

// token
//...............
// add-- AuthVerify.isAuthenticated, AuthVerify.checkRole,
// update -- AuthVerify.isAuthenticated, AuthVerify.checkRole,
// delete --- AuthVerify.isAuthenticated, AuthVerify.checkRole,


router.post('/add', upload.single('image'), ProjectsController.addNewProject);
router.put('/edit/:id', upload.single('image'), ProjectsController.updateProject);
router.delete('/remove/:id', ProjectsController.deleteProject);
router.get('/all', ProjectsController.getAllProjects);
router.get('/:id', ProjectsController.getSingleProject);


export default router;