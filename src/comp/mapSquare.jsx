import Square from './Square.jsx'
import enlaces from '../scripts/links.js'

function MapList() {
    return(
        <div className='projects'>
            {enlaces.map((en)=>
                (<Square 
                key={en.id }
                title={en.title} 
                description={en.descripcion} 
                className={en.id} 
                url={en.url}/>))
                }
        </div>
        )
}

export default MapList
