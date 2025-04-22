import Express , {json} from 'express'
import cors from 'cors'
import connectToMongoDB from 'database';
import router from 'Routers';

const app = Express();
app.use(json())
app.use(cors())
connectToMongoDB.execute();

app.use(router)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running in port: ${port}`))