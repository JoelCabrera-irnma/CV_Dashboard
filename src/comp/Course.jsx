export default function Course({ruta, nombre}) {
    return(
            <li className="team-member">
                <img src={`/assets/courses/${ruta}`} alt="" />
                <p>{nombre}</p>
            </li>
    )
}