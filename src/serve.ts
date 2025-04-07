import Express , {json} from 'express'
import cors from 'cors'

const app = Express();
app.use(json())
app.use(cors())

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running in port: ${port}`))