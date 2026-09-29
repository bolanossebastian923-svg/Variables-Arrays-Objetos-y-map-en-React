function Actividad5(){
    const VideoJuegos=[
        {
            id:1,
            nombre:"Red Dead Redemption 2",
            plataforma:"PlayStation 4 / Xbox One / PC",
            Genero:"Acción / Aventura en Mundo Abierto",
            AnoLanzamiento:"2018",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5VUL0rswkka6NA8DU7n53xwnTTMr0ExasMSBKUwVsA&s=10"
        },
        {
            id:2,
            nombre:"Among Us",
            plataforma:"PC / Dispositivos Móviles / Consolas",
            Genero:"Deducción social / Multijugador",
            AnoLanzamiento:"2018",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7eU4ioQtxjY6XpYxQ8zx4TLuBB1pWbzqpVvw89G0gQ&s"
        },
        {
            id:3,
            nombre:"Grand Theft Auto V",
            plataforma:"PC / PlayStation / Xbox",
            Genero:"Acción / Mundo Abierto",
            AnoLanzamiento:"2013",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJkBzdR36Ikpn1BGKMVcwYZgBvLFuGwUrrynzkVu6CR8YWPA5G5VK9_k&s=10"
        },
        {
            id:4,
            nombre:"God of War Ragnarök",
            plataforma:"PlayStation 4 / PlayStation 5",
            Genero:"Acción / Aventura",
            AnoLanzamiento:"2022",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkd_afT7hNw-3VW4xrHCkNKeot9ak01vHNgt7eKUNGag&s=10"

        },
        {
            id:5,
            nombre:"EA Sports FC 24",
            plataforma:"Multiplataforma",
            Genero:"Deportes",
            AnoLanzamiento:"2023",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQPK6C2E26WanCD0aigde1bYkkZii4grauiTNYY-6kA&s=10"
        },
        {
            id:6,
            nombre:"Halo: Combat Evolved",
            plataforma:"Xbox / PC",
            Genero:"Shooter en primera persona",
            AnoLanzamiento:"2001",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_mnFMQRAKWbGDnrEVyFGY__m7HBXXcSRphHZgyRvpw&s=10"
        },
        {
            id:7,
            nombre:"Batman: Arkham City",
            plataforma:"PC / PlayStation / Xbox",
            Genero:"Acción / Aventura / Beat 'em up",
            AnoLanzamiento:"2011",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1X6CoVjTkAU6NXcQGbnseHBzRallfcB0-ZaIfnzz7ig&s=10"
        },
        {
            id:8,
            nombre:"Dragon Ball Z: Budokai Tenkaichi 3",
            plataforma:"PlayStation 2 / Wii",
            Genero:"Lucha",
            AnoLanzamiento:"2007",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7nvxh9sRMxAGpaRPvxYBCAyM2IVcVwNVUHBMGz-fVg&s=10"
        }
    ]
    return(
        <div className="contenedor-tablas">
            <h2>Lista de Videojuegos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Plataforma</th>
                        <th>Género</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    {VideoJuegos.map((juego) => (
                        <tr key={juego.id}>
                            <td>
                                <img src={juego.imagen} alt={juego.nombre} className="img-juego" />
                            </td>
                            <td>{juego.id}</td>
                            <td>{juego.nombre}</td>
                            <td>{juego.plataforma}</td>
                            <td>{juego.Genero}</td>
                            <td>{juego.AnoLanzamiento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Actividad5;