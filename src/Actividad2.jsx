function Actividad2() {
    const ciudades = [
        "Bogotá",
        "Medellín",
        "Cali",
        "Barranquilla",
        "Cartagena",
        "Bucaramanga",
        "Pereira",
        "Santa Marta",
        "Manizales",
        "Popayán"
    ];

    return (
        <div className="lista-ciudades">
            <h2>Lista de Ciudades de Colombia</h2>
            <ul>
                {ciudades.map((ciudad, index) => (
                    <li key={index}>{ciudad}</li>
                ))}
            </ul>
        </div>
    );
}

export default Actividad2;