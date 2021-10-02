import logo from "./media/Maylo2.png";
import './styles/styles.css';
import fotoMaylo from "./media/Maylo.jpeg"
import fotoCandy from "./media/Candy.jpeg"
function App() {
  return (
    <div className="App">
         <header>
    <ul class = "navbar">

        <li>
            <img src={logo} alt ="imagen" class="logo"/>
        </li>
        
        <li>
            <button class = "button mainButton">Nuevo Post test</button>
        </li>

<li>
            <div class="buscar">
                <input placeholder="Buscar una raza"/>
                <i class="fas fa-search button iconoBusqueda"></i> 
            </div>
           
        </li>

        <li>
            <button class = "button secondaryButton">Login</button>
        </li>
        <li>
            <button class = "button mainButton">Registro</button>
        </li>
 
    </ul>
    </header>
    <main>
        <section>

            <h1 class="title">MIS AMIGOS PERROSs</h1>
            <ul class="breedCardContainer">
                <li class="breedCard">
                    <div class="contenedorImagen">
                        <img src={fotoMaylo} alt="Maylo" />   
                    </div>
                    <span class="breedTitle"> Maylo </span>
                    <span class="breedInteraction"><i class="fas fa-heart"></i> </span>
                    <span class="breedInteraction">150</span>

                    <span class="breedInteraction"> <i class="fas fa-eye"></i> </span>
                    <span class="breedInteraction">820</span>
                   
                </li>
                <li class="breedCard">
                    <div class="contenedorImagen">
                        <img src={fotoCandy} alt="Candy" />   
                    </div>
                    <span class="breedTitle"> Candy </span>
                    <span class="breedInteraction"><i class="fas fa-heart"></i> </span>
                    <span class="breedInteraction">140</span>

                    <span class="breedInteraction"> <i class="fas fa-eye"></i> </span>
                    <span class="breedInteraction">820</span>

                </li>
            </ul>
        </section>
        <section></section>
      </main>
    <footer></footer>
    </div>
  );
}

export default App;
