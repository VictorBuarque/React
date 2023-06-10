function App() {
  //PARA USAR O MAP É NECESSÁRIO Criar a função antes do return pro html.
   const CardEventos= () => {
      const eventos = [{nome: 'Forró do piu-piu', data:'24/06'},{nome:'Tomorrowland',data:'10/10'},{nome: 'Arrocha', data:'22/07'}
       ];
      return(
        <ul class="fundo_Card">
          {eventos.map((eventos)=><li>{eventos.nome +" "+ eventos.data}</li>)}
        </ul>
      );
    }
   return (
    <div class="App">
      <section>
                <CardEventos></CardEventos>
      </section
     </div>
  );
}
export default App;
