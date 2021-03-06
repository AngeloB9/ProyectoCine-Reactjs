import "./styles/Lista3Noticias.css";

import React, { Component } from "react";


class Lista3 extends Component {
  handleChange() {
    window.location.reload();
  }
  render() {
    return (
      <section>
        <div className="tituloContenedorNoticias"> Te Recomendamos</div>
        {this.props.noticias.map((noticia) => {
          return (
            <a
              href={`/Noticias/${noticia.notid}`}
              className="text-reset text-decoration-none"
              key={noticia.notid}
            >
              <div className="contenedorLista3Noticias">
                <div className="imagenContenedorLista3Noticias">
                  <img
                    src={noticia.notimagen}
                    alt=""
                    className="imagenLista3Noticias"
                  ></img>
                </div>
                <div className="fechaLista3Noticias">{noticia.notfecha}</div>
                <div className="contenedortituloLista3Noticias">
                  <em className="tituloLista3Noticias">{noticia.nottitulo}</em>
                </div>
                <br />
              </div>
            </a>
          );
        })}
      </section>
    );
  }
}

export default Lista3;
