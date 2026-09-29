function Actividad7(){
    const peliculas =[
        {
            id:1,
            titulo:"Furiosa Mad Max Saga",
            director:"George Miller",
            genero:"Acción / Ciencia ficción",
            Ano:2024,
            duracion:"148 min",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7aTq2O-cu5Ri6V47sLIuI4SoU_UtJYoJjYF-7jP2JEw&s=10"
        },
         {
            id:2,
            titulo:"La Máscara",
            director:"Chuck Russell",
            genero:"Comedia / Fantasía",
            Ano:1994,
            duracion:"101 min",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmWXm-A8eQFKE5T3pxDpYBwqmpps-QLN4oK_88qsrUg&s=10"
        },
         {
            id:3,
            titulo:"La Leyenda del Rey Mono 2",
            director:"Soi Cheang",
            genero:"Fantasía / Acción",
            Ano:2026,
            duracion:"119 min",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGa3bNP1LVxhstPm7DnyHxFVitCcirDbSB2YLKzAmHQQ&s=10"
        },
         {
            id:4,
            titulo:"Ong-Bak 2",
            director:"Tony Jaa y Petchtai Wongkamlao",
            genero:"Artes Marciales / Acción",
            Ano:2008,
            duracion:"99 min",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_hB5wF_UYcsl8pLgTmFsTgROMVxeffuyrSda_DtMuw&s=10"
        },
         {
            id:5,
            titulo:"Rápidos y Furiosos 1",
            director:"Rob Cohen",
            genero:"Acción / Crimen",
            Ano:2001,
            duracion:"106 min",
            imagen:"https://static.wikia.nocookie.net/doblaje/images/4/47/RFCartelOriginal.jpg/revision/latest?cb=20171125061739&path-prefix=es"
        },
        {
            id:6,
            titulo:"La Era de Hielo 1",
            director:"Chris Wedge y Carlos Saldanha",
            genero:"Animación / Aventura",
            Ano:2002,
            duracion:"81 min",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k7L_FYV40bYYlFYeSpi-vPOH04aCHr0Ryk0UzaDs6g&s=10"
        },
         {
            id:7,
            titulo:"Invicto 2",
            director:"Isaac Florentine",
            genero:"Acción / Deportes",
            Ano:2006,
            duracion:"96 min",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR88NmbbrhvVsk5RVjxoeUChBoqbAHhEhSIiw2ZGQ8B6A&s=10"
        },
         {
            id:8,
            titulo:"Madagascar 2",
            director:"Eric Darnell y Tom McGrath",
            genero:"Animación / Comedia",
            Ano:2008,
            duracion:"89 min",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChShzUf4g6puxl1azcBf_vpXjAjhBha3pGkdpecBvhA&s=10"
        },
         {
            id:9,
            titulo:"El Caballero de la Noche",
            director:"Christopher Nolan",
            genero:"Acción / Crimen",
            Ano:2008,
            duracion:"152 min",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WQYqbMSa4Z_0Co4AB_Erb3WQ_vUV8lvQx88mMUXAAQ&s=10"
        },
         {
            id:10,
            titulo:"Matrix",
            director:"Lana Wachowski, Lilly Wachowski",
            genero:"Ciencia ficción / Acción",
            Ano:1999,
            duracion:"136 min",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUyob1nsYqWJ9N7nXkJoEqFAP7Z17qnBIM8nsOhh74g&s=10"
            
        },
    ]
    return(
        <div className="contenedor-tabla">
            <h2>Catálogo de Películas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Póster</th>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Director</th>
                        <th>Género</th>
                        <th>Año</th>
                        <th>Duración</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculas.map((pelicula) => (
                        <tr key={pelicula.id}>
                            <td>
                                <img src={pelicula.imagen} alt={pelicula.titulo} className="img-juego" />
                            </td>
                            <td>{pelicula.id}</td>
                            <td>{pelicula.titulo}</td>
                            <td>{pelicula.director}</td>
                            <td>{pelicula.genero}</td>
                            <td>{pelicula.Ano}</td>
                            <td>{pelicula.duracion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Actividad7;