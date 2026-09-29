function ActividadFinal() {
    const nombreTienda = "Urban Vibes Store";
    const descripcionTienda = "Tu tienda de confianza para encontrar las últimas tendencias en ropa urbana, estilo casual y accesorios modernos.";
    const temporada = "Colección Primavera-Verano 2026";

    const productosRopa = [
        { 
            id: 1, 
            nombre: "Hoodie Oversize",
            categoria: "Hoodies", 
            precio: "$120.000",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrJuunN91BMpxXLeMgVWzpOrPLsSNa4BQHlAJfH6kWA&s=10"
        },
        { 
            id: 2,
            nombre: "Camiseta Básica", 
            categoria: "Camisetas", 
            precio: "$45.000",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdcL670q1Cpbk5ez8vCNe4U34YG8QKc4WPW456JvdJQ&s" 
        },
        { 
            id: 3, 
            nombre: "Pantalón Cargo", 
            categoria: "Pantalones", 
            precio: "$110.000",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrAt0cjDRwUJ9P36hRlY8nIKVW-52coojZge8NRXZJw&s=10" 
        },
        { 
            id: 4, 
            nombre: "Chaqueta de Jeans", 
            categoria: "Chaquetas", 
            precio: "$140.000",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8FQ7hTrab02n4Y5oESHT5liOKFtsBsIC5WsdpyXIag&s=10" 
        },
        { 
            id: 5, 
            nombre: "Gorra Snapback", 
            categoria: "Accesorios", 
            precio: "$35.000",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4y1AN-hmhaqOe5frke_m10lP5TfAxFGIcQwChGdn3cQ&s=10"
        },
        { 
            id: 6, 
            nombre: "Tenis Urbanos", 
            categoria: "Calzado", 
            precio: "$160.000",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVa7tH705u7YtxTLLWMeBAEBFAo6OjzchmYXyAZGZs0w&s=10"
        },
        { 
            id: 7, 
            nombre: "Buzo Deportivo", 
            categoria: "Hoodies", 
            precio: "$95.000",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtI3j_UsMC4j3W3QkRltM3TS7V7MU-NE6yeOu8aSB0Q&s=10" 
        },
        { 
            id: 8, 
            nombre: "Camisa Formal", 
            categoria: "Camisas", 
            precio: "$80.000",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pd-aILR7_VCQt81Fhod0E6YOvJvc-BkqS3ucA2pDyw&s=10" 
        },
        {
            id: 9, 
            nombre: "Jogger Casual", 
            categoria: "Pantalones", 
            precio: "$90.000",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslEce8GSAXf3ZrP5zcTBXzaA8XA5iLZmfztUvSWUm-Q&s=10" 
        },
        { 
            id: 10, 
            nombre: "Medias Estampadas", 
            categoria: "Accesorios", 
            precio: "$15.000",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9_9HJONfnMhWG_qYh_mGfP5UaNXQ2IHqReI-sFPfOw&s=10" 
        }
    ];

    return (
        <section className="tienda-section-principal">
            <div className="tienda-header-info">
                <h1>{nombreTienda}</h1>
                <h2>{temporada}</h2>
                <p>{descripcionTienda}</p>
            </div>

            <hr />

            <div className="tienda-catalogo-container">
                <h3>Catálogo de Productos Disponibles</h3>
                <ul className="tienda-lista">
                    {productosRopa.map((producto) => (
                        <li key={producto.id} className="tienda-item">
                            <img src={producto.imagen} alt={producto.nombre} className="tienda-img" />
                            <div className="tienda-detalles">
                                <span className="tienda-id">ID: #{producto.id}</span>
                                <h4>{producto.nombre}</h4>
                                <p><strong>Categoría:</strong> {producto.categoria}</p>
                                <p className="tienda-precio"><strong>Precio:</strong> {producto.precio}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ActividadFinal;