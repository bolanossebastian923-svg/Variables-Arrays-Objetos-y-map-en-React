function Actividad1(){
    const titulo="Cien Años De Soledad"
    const Autor ="Gabriel Garcia Marquez"
    const AñoPublicacion="5 de junio de 1967"
    const Editorial="Sudamericana"
    const NumeroPaginas = 550
    return(
        <div className="libro">
            <h1>{titulo}</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjRApLRpsoz4UUZrJRpR_dXL0D1iIrkWML_WwuwoY8g&s=10"></img>
            <p>Autor: {Autor}</p>
            <p>Año de Publicacion:{AñoPublicacion}</p>
            <p>Editorial: {Editorial}</p>
            <p>Numero de Paginas: {NumeroPaginas}</p>

        </div>
    );
}
export default Actividad1;