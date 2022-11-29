/*import './App.css';*/

import './final.css';
import Navbar from './componentes/Navbar.js'
import Inicio from './paginas/Inicio.js'
import Ranking from './paginas/Ranking.js'
import Calendario from './paginas/Calendario.js'
import Auspiciadores from './paginas/Auspiciadores.js'
import Inscribirse from './paginas/Inscribirse.js'


function App() {
  let component
  console.log(window.location.pathname)
  switch(window.location.pathname){
    case '/inicio':
      component = <Inicio />
      console.log(component)
      break
    case '/ranking':
      component = <Ranking />
      console.log(component)
      break
    case '/calendario':
      component = <Calendario />
      console.log(component)
      break
    case '/auspiciadores':
      component = <Auspiciadores />
      break
    case '/inscribirse':
      component = <Inscribirse />
      break

  }
  return (
    <div className='App'>
      <h1 className="bg-tema-100 text-tema-200 text-3xl font-bold underline">
        Hello world!
      </h1>
      <Navbar />
      {component}
    </div>
    

  );
}

export default App;