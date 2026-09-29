function Actividad8(){
    const menuPlatos=[
        {
            id:1,
            nombre:"Bandeja Paisa",
            categoria:"Plato Típico",
            precio:"$25.000",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBO1TyfH42hRuin_WmFCC66_SIKqnueXnChrvShszAA&s=10"

        },{
            id:2,
            nombre:"Ajiaco Santafereño",
            categoria:"Sopas",
            precio:"$22.000",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKcEH7aRv9QejnFCOnjE1jgqrBufeDNnWXgI3OdKh7A&s=10"

        },
        {
            id:3,
            nombre:"Sancocho de Gallina",
            categoria:"Sopas",
            precio:"$20.000",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBVFUjBmYRtcrx5xP5-YIDdBktTkty1bWvW3uZspbkA&s=10"

        },
        {
            id:4,
            nombre:"Cazuela de Mariscos",
            categoria:"Plato Fuerte",
            precio:"$35.000",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwoa92CaBjKqjFaymXB6eI7d1hQ2B3IvDLpe-MfCQ5A&s=10"

        },{
            id:5,
            nombre:"Arepa con Queso",
            categoria:"Entradas",
            precio:"$8.000",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBSscuF96QJPTvUW-l691oTgV5gJVxiKLQ7t99ve3OQ&s=10"

        },
        {
            id:6,
            nombre:"Lechona Tolimense",
            categoria:"Plato Típico",
            precio:"$18.000",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYv3zICIPWcUjZyoFEDeRhAtmHauSpOAW_hofTJiADw&s"

        },
        {
            id:7,
            nombre:"Patacones con Hogao",
            categoria:"Entradas",
            precio:"$10.000",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKoRePr-EDHvEoh1uKWt2aIuKdeR8Bsf-goNEJJDezJA&s=10"

        },
        {
            id:8,
            nombre:"Hamburguesa Artesanal",
            categoria:"Rápidos",
            precio:"$22.000",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4q9dhFYMD7ZZvA7c16F7GbsP3VHDa_wo4qJaoqFzPg&s=10"

        },
        {
            id:9,
            nombre:"Costillas BBQ",
            categoria:"Plato Fuerte",
            precio:"30.000",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMdbpCBzGqUFaMx38r6Tp4qqHOj3E0lG-UWjH4kXf4w&s=10"

        },
        {
            id:10,
            nombre:"Pechuga Gratinada",
            categoria:"Plato Fuerte",
            precio:"$24.000",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU4eSf0gDeR0iHy3-m-OanWGQ92P3Sy8Gxdh1iqXuQw&s=10"

        },
    ]
    return(
        <div className="menu-contenedores">
            <h2>Menú del Restaurante</h2>
            <div className="tarjetas-grid">
                {menuPlatos.map((plato) => (
                    <div className="tarjeta-plato" key={plato.id}>
                        <img src={plato.imagen} alt={plato.nombre} />
                        <div className="info-plato">
                            <span className="categoria">{plato.categoria}</span>
                            <h3>{plato.nombre}</h3>
                            <p className="precio">{plato.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Actividad8;