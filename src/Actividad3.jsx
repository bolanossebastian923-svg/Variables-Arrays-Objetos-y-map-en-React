import './canciones.css'
function Actividad3(){
    const canciones = [
        {
            id: 1,
            titulo: "Una cervesa",
            Artista: "Fuerza Regida",
            Albun: "Pa las Baby's Y Belikeada",
            Ano: 2023,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagOO5Kgb3qQaft85JozsLXPb1pjuikfHJVhJvAuupXg&s=10"
        },
        {
            id: 2,
            titulo: "Tu Boda",
            Artista: "Oscar Maydon",
            Albun: "Rico o Muerto, Vol. 1",
            Ano: 2024,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawtlIynLg6UjIUHTeXpBcvzYz7OdAfde4ke-9xA9qig&s=10"
        },
        {
            id: 3,
            titulo: "Hawái",
            Artista: "Maluma",
            Albun: "Papi Juancho",
            Ano: 2020,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5THrxM0pEOKYQqfheOMTGHDVGeOSNnh7qmfnRZmAhw&s=10"
        },
        {
            id: 4,
            titulo: "Tal Vez",
            Artista: "Paulo Londra",
            Albun: "Homerun",
            Ano: 2019,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkk9kXT3EBOUxeAYsl39MR9pSKsmpP0nCLwC28pdUUKg&s=10"
        },
        {
            id: 5,
            titulo: "Te Deseo Lo Meejor",
            Artista: "Bad Bunny",
            Albun: "El último tour del mundo.",
            Ano: 2020,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcVj8cXS6CD5WlMUs7wgq-yGts1SZiLMrhf0kVKlcJvw&s=10"
        },
        {
            id: 6,
            titulo: "Me Llamas",
            Artista: "Piso 21",
            Albun: "Ubuntu",
            Ano: 2016,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGER8Ug-f056wkGt1C1ivzwalXqwbDA_ngI_G3iG3ATg&s=10"
        },
        {
            id: 7,
            titulo: "AmorFoda",
            Artista: "Bad Bunny",
            Albun: "ningún álbum",
            Ano: 2018,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtURUaRBp-mI_QfLuyPWCtu5KeWnK-0DSRmWYeBmLKQA&s=10"
        },
        {
            id: 8,
            titulo: "Mis Ojos Lloran Por Ti",
            Artista: "Big Boy",
            Albun: "Mis ojos lloran por ti",
            Ano: 1996,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBitcELJ7N7kGHapS8KDkjtnnX86HLC3wiSG3MSI-4w&s=10"
        }
    ];

    return(
        <div className="contenedo-tabla">
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Artista</th>
                        <th>Álbum</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    {canciones.map((cancion) => (
                        <tr key={cancion.id}>
                            <td>
                                <img src={cancion.imagen} alt={cancion.Artista} className="img-artista" />
                            </td>
                            <td>{cancion.id}</td>
                            <td>{cancion.titulo}</td>
                            <td>{cancion.Artista}</td>
                            <td>{cancion.Albun}</td>
                            <td>{cancion.Ano}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Actividad3;