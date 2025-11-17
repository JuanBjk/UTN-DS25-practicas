import React from "react";

export default function Secciones() {
  return (
    <section className="contenido">

      {/* --- FICCION --- */}
      <h2>Ficción</h2>
      <div className="lista-libros">

        <div className="tarjeta libro">
          <img src="img/ficcion1.jpg" width="200" alt="1984" />
          <h3>1984</h3>
          <p><b>Autor:</b> George Orwell</p>
          <p>Una novela distópica sobre control, vigilancia y libertad.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/ficcion2.jpg" width="200" alt="El Hobbit" />
          <h3>El Hobbit</h3>
          <p><b>Autor:</b> J.R.R. Tolkien</p>
          <p>La aventura que dio inicio al universo de El Señor de los Anillos.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/ficcion3.jpg" width="200" alt="Fahrenheit 451" />
          <h3>Fahrenheit 451</h3>
          <p><b>Autor:</b> Ray Bradbury</p>
          <p>Un futuro donde leer está prohibido y los libros se queman.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/ficcion4.jpg" width="200" alt="Crónica de una muerte anunciada" />
          <h3>Crónica de una muerte anunciada</h3>
          <p><b>Autor:</b> Gabriel García Márquez</p>
          <p>Novela corta basada en hechos reales con estilo periodístico.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/ficcion5.jpg" width="200" alt="El Principito" />
          <h3>El Principito</h3>
          <p><b>Autor:</b> Antoine de Saint-Exupéry</p>
          <p>Un cuento filosófico sobre amistad, infancia y mirada del mundo.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/ficcion6.jpg" width="200" alt="Cementerio de animales" />
          <h3>Cementerio de animales</h3>
          <p><b>Autor:</b> Stephen King</p>
          <p>Una historia oscura sobre muerte, familia y segundas oportunidades.</p>
        </div>
      </div>

      {/* --- INFANTIL --- */}
      <h2>Infantil</h2>
      <div className="lista-libros">

        <div className="tarjeta libro">
          <img src="img/infantil1.jpg" width="200" alt="Platero y yo" />
          <h3>Platero y yo</h3>
          <p><b>Autor:</b> Juan Ramón Jiménez</p>
          <p>Un tierno relato sobre un niño y su burro llamado Platero.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/infantil2.jpg" width="200" alt="Alicia en el País de las Maravillas" />
          <h3>Alicia en el País de las Maravillas</h3>
          <p><b>Autor:</b> Lewis Carroll</p>
          <p>Una aventura surrealista llena de personajes extraños.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/infantil3.jpg" width="200" alt="El Grúfalo" />
          <h3>El Grúfalo</h3>
          <p><b>Autor:</b> Julia Donaldson</p>
          <p>Un cuento rimado popular para niños pequeños.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/infantil4.jpg" width="200" alt="Charlie y la fábrica de chocolate" />
          <h3>Charlie y la fábrica de chocolate</h3>
          <p><b>Autor:</b> Roald Dahl</p>
          <p>Una aventura donde la imaginación y los valores son clave.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/infantil5.jpg" width="200" alt="El monstruo de colores" />
          <h3>El monstruo de colores</h3>
          <p><b>Autor:</b> Anna Llenas</p>
          <p>Un libro para aprender a reconocer emociones.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/infantil6.jpg" width="200" alt="El patito feo" />
          <h3>El patito feo</h3>
          <p><b>Autor:</b> Hans Christian Andersen</p>
          <p>Un clásico cuento sobre identidad, respeto y autoestima.</p>
        </div>
      </div>

      {/* --- CIENCIA --- */}
      <h2>Ciencia</h2>
      <div className="lista-libros">

        <div className="tarjeta libro">
          <img src="img/ciencia1.jpg" width="200" alt="Breves respuestas a las grandes preguntas" />
          <h3>Breves respuestas a las grandes preguntas</h3>
          <p><b>Autor:</b> Stephen Hawking</p>
          <p>Un recorrido accesible por las grandes incógnitas del universo.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/ciencia2.jpg" width="200" alt="El Gen Egoísta" />
          <h3>El gen egoísta</h3>
          <p><b>Autor:</b> Richard Dawkins</p>
          <p>Una explicación moderna de la evolución desde la genética.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/ciencia3.jpg" width="200" alt="Cosmos" />
          <h3>Cosmos</h3>
          <p><b>Autor:</b> Carl Sagan</p>
          <p>Un viaje por el origen del universo, la vida y nuestro lugar en él.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/ciencia4.jpg" width="200" alt="Sapiens" />
          <h3>Sapiens</h3>
          <p><b>Autor:</b> Yuval Noah Harari</p>
          <p>Una historia fascinante de la evolución humana y nuestra sociedad.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/ciencia5.jpg" width="200" alt="El cerebro cuenta" />
          <h3>El cerebro cuenta</h3>
          <p><b>Autor:</b> Facundo Manes</p>
          <p>Un acercamiento accesible al funcionamiento del cerebro humano.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/ciencia6.jpg" width="200" alt="El universo en tu mano" />
          <h3>El universo en tu mano</h3>
          <p><b>Autor:</b> Christophe Galfard</p>
          <p>Un libro claro y didáctico sobre física y astronomía moderna.</p>
        </div>
      </div>

      {/* --- AUTOAYUDA --- */}
      <h2>Autoayuda</h2>
      <div className="lista-libros">

        <div className="tarjeta libro">
          <img src="img/autoayuda1.jpg" width="200" alt="Hábitos atómicos" />
          <h3>Hábitos atómicos</h3>
          <p><b>Autor:</b> James Clear</p>
          <p>Un método para mejorar cada día a través de pequeños hábitos.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/autoayuda2.jpg" width="200" alt="El poder del ahora" />
          <h3>El poder del ahora</h3>
          <p><b>Autor:</b> Eckhart Tolle</p>
          <p>Un enfoque para vivir con mayor conciencia y menos estrés.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/autoayuda3.jpg" width="200" alt="Los 7 hábitos" />
          <h3>Los 7 hábitos de la gente altamente efectiva</h3>
          <p><b>Autor:</b> Stephen Covey</p>
          <p>Un libro clásico sobre productividad y desarrollo personal.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/autoayuda4.jpg" width="200" alt="Cómo ganar amigos" />
          <h3>Cómo ganar amigos e influir en las personas</h3>
          <p><b>Autor:</b> Dale Carnegie</p>
          <p>Consejos prácticos sobre relaciones humanas y comunicación.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/autoayuda5.jpg" width="200" alt="Puedes sanar tu vida" />
          <h3>Puedes sanar tu vida</h3>
          <p><b>Autor:</b> Louise Hay</p>
          <p>Reflexiones sobre autoestima, creencias y bienestar emocional.</p>
        </div>

        <div className="tarjeta libro">
          <img src="img/autoayuda6.jpg" width="200" alt="Sutil arte" />
          <h3>El sutil arte de que todo te importe un carajo</h3>
          <p><b>Autor:</b> Mark Manson</p>
          <p>Una visión directa, honesta y moderna sobre felicidad y límites.</p>
        </div>
      </div>

    </section>
  );
}
