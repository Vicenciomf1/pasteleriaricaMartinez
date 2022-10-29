export default function CollapseIcon(){
  return(
    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-3">
      <span className="visually-hidden">Abrir menú</span> {/*Por si es que no se muestra la hamburguesa*/}
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}