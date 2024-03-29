// server development
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database';
import UsersRoutes from './routes/userRegistration';
import LoginRoutes from './routes/Login';
import BlogsRoutes from './routes/Blogs';
import ProjectsRoutes from './routes/Projects';
import SkillsRoutes from './routes/Skills';
import MessagesRoutes from './routes/Messages';
import SubsRoutes from './routes/Subs';
import cors from 'cors';


export const app = express()

app.use(express.json())
app.use(cors());
app.use('/uploads', express.static('uploads'));
connectDB()

dotenv.config();


// routes
app.use('/users', UsersRoutes);
app.use('/', LoginRoutes);
app.use('/blogs', BlogsRoutes);
app.use('/projects', ProjectsRoutes);
app.use('/skills', SkillsRoutes);
app.use('/messages', MessagesRoutes);
app.use('/subscribers', SubsRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on ${port} ...`);
})


export default app