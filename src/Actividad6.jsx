function Actividad6() {
    const jugadores = [
        {
            numero: 1,
            nombre: "Iker",
            apellido: "Casillas",
            posicion: "Portero",
            edad: 33,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp37K5GEpSjPRnVDHzjqpMcbCWMMFyHh7y9EOHeU_fng&s=10"
        },
        {
            numero: 15,
            nombre: "Daniel",
            apellido: "Carvajal",
            posicion: "Defensa",
            edad: 23,
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziBtLXpDZDAtvBIDaeF8Twx_ej6heS4SDgI3yZgUxGQ&s=10"
        },
        {
            numero: 3,
            nombre: "Pepe",
            apellido: "(Képler Laveran)",
            posicion: "Defensa",
            edad: 32,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHmFsCYDMGM8Avr4GObjDjbqNQ10WvgJh0bXIiNfL-A&s=10"
        },
        {
            numero: 4,
            nombre: "Sergio",
            apellido: "Ramos",
            posicion: "Defensa",
            edad: 29,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmw3q1FjPf3OZ8pKhDKkowoXud5tVjaqDdzljoA8Zo3w&s=10"
        },
        {
            numero: 12,
            nombre: "Marcelo",
            apellido: "Vieira",
            posicion: "Defensa",
            edad: 27,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNHvt2TE6gEssWSpAwok6q8Rr2DnhW7fI27OgvYSx_A&s=10"
        },
        {
            numero: 19,
            nombre: "Luka",
            apellido: "Modrić",
            posicion: "Mediocampista",
            edad: 29,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqVZERMhHrYEUXRADl7DMWKYSTsnxUY6aUp6IBvma4g&s=10"
        },
        {
            numero: 16,
            nombre: "Toni",
            apellido: "Kroos",
            posicion: "Mediocampista",
            edad: 25,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjCKM5WPx4R9Eukb5ugBZKU_RJOf1YIBEvggUZsuv-w&s=10"
        },
        {
            numero: 10,
            nombre: "James",
            apellido: "Rodríguez",
            posicion: "Mediocampista",
            edad: 23,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9de-k7r0vTI4DdZ1cxLnqqFhVYieQuQj77EZ_rxklA&s=10"
        },
        {
            numero: 11,
            nombre: "Gareth",
            apellido: "Bale",
            posicion: "Delantero",
            edad: 25,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSquBU_Z-6HDPe-lGhHc7FuihQ6456ZHWEIZbCDMnyKLQ&s=10"
        },
        {
            numero: 9,
            nombre: "Karim",
            apellido: "Benzema",
            posicion: "Delantero",
            edad: 27,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSte7wL_izI5MNjtT7AbeMR4238HT4qC_-qbfKW7VYyEw&s=10"
        },
        {
            numero: 7,
            nombre: "Cristiano",
            apellido: "Ronaldo",
            posicion: "Delantero",
            edad: 30,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd19esxI822KHabolQm5GumzC6GrF7GT9KQeqbjLxEdA&s=10"
        }
    ];

    return (
        <div className="contenedor-plantilla">
            <h2>Plantilla Real Madrid 2015</h2>
            <table className="tabla-equipo">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Dorsal</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Posición</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {jugadores.map((jugador, index) => (
                        <tr key={index}>
                            <td>
                                <img src={jugador.imagen} alt={jugador.nombre} className="img-jugador" />
                            </td>
                            <td><span className="badge-numero">{jugador.numero}</span></td>
                            <td>{jugador.nombre}</td>
                            <td>{jugador.apellido}</td>
                            <td>{jugador.posicion}</td>
                            <td>{jugador.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Actividad6;