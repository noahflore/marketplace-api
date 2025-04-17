import Express , {json} from 'express'
import cors from 'cors'
import connectToMongoDB from 'database';

const app = Express();
app.use(json())
app.use(cors())
connectToMongoDB.execute();

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running in port: ${port}`))