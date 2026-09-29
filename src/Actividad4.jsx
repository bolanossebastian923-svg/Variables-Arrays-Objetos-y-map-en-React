function Actividad4(){
    const animales =[
        {
            id: 1,
            nombre: "Elefante africano",
            especie: "Loxodonta africana",
            habitad: "Sabanas y bosques de África",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeccFY5AgiellfBTW6ztQUTUd_KcuNxFnRgqVAa11sYw&s=10"
        },
        {
            id: 2,
            nombre: "Oso panda",
            especie: "Ailuropoda melanoleuca",
            habitad: "Bosques de bambú en montañas de China",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHstdvEePqce-j1-RYydquKOd2SYP90ePbi375qVFMw&s=10"
        },
        {
            id: 3,
            nombre: "Lobo gris",
            especie: "Canis lupus",
            habitad: "Bosques templados y tundras",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxznlzJ55HQr_a2LrkLw4J5-KWxoo6tK_p00ni2V7xg&s=10"
        },
        {
            id: 4,
            nombre: "Cebra de plains",
            especie: "Equus quagga",
            habitad: "Praderas y sabanas del este y sur de África",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgze1WGLuBr3OB6wiZsU-v1ozmZn5rAM08avFwZRNSEw&s=10"
        },
        {
            id: 5,
            nombre: "Tiburón blanco",
            especie: "Carcharodon carcharias",
            habitad: "Aguas costeras templadas de todo el mundo",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kjvVhF0B1PC_rG0otcQVl9vMP2KumXpUoxrTXPnxPQ&s=10"
        },
        {
            id: 6,
            nombre: "Koala",
            especie: "Phascolarctos cinereus",
            habitad: "Bosques de eucalipto en Australia",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnag8Gmo4h4tpXzbdGy6F3eQ-TF_1Hm-BTHKMHQpjc7A&s=10"
        },
        {
            id: 7,
            nombre: "Zorro rojo",
            especie: "Vulpes vulpes",
            habitad: "Bosques, praderas y zonas montañosas", // Corregido aquí
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZi3IUezfeSilpmQsaTav-AAjf8mpbVUatZbiLs_olzw&s=10"
        },
        {
            id: 8,
            nombre: "Iguana marina",
            especie: "Amblyrhynchus cristatus",
            habitad: "Costas rocosas de las Islas Galápagos",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjslu7CwYtfq-rjQmygN-ZQzsKVSPCdouEECUj72eNbQ&s=10"
        },
        {
            id: 9,
            nombre: "Mapache común",
            especie: "Procyon lotor",
            habitad: "Bosques mixtos, zonas húmedas y áreas suburbanas",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLZB96Q7tAr56eMoReQj1_Zeyhlels4bJE7GqN0yU1A&s=10"
        },
        {
            id: 10,
            nombre: "Avestruz común",
            especie: "Struthio camelus",
            habitad: "Sabanas y desiertos abiertos de África",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZRBtectu1mmxJv3g8hQtuMvG4kEgKjywiL9HvVghYQ&s=10"
        }
    ];

    return(
        <div className="seccion-animales">
            <h2>Lista de Animales</h2>
            <div className="grid-animales">
                {animales.map((animal) => (
                    <div className="tarjeta-animal" key={animal.id}>
                        <img src={animal.imagen} alt={animal.nombre} className="img-animal" />
                        <div className="tarjeta-contenido">
                            <p className="numero-id">#{animal.id}</p>
                            <h3>{animal.nombre}</h3>
                            <p>Especie: {animal.especie}</p>
                            <p>Hábitat: {animal.habitad}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Actividad4;