

let obj = [
    {id: '1', name: 'Fifa 23', description: 'Deportes', stock: '100', price: '30', img: 'https://res.cloudinary.com/abrahama19/image/upload/v1667757526/Fifa23_xcy9nx.jpg'},   
    {id: '2', name: 'Grand Theft Auto', description: 'Accion', stock: '100', price: '30', img: 'https://res.cloudinary.com/abrahama19/image/upload/v1667757526/GrandTA_mhomtf.jpg'},
    {id: '3', name: 'God of War', description: 'Aventura', stock: '100', price: '30', img: 'https://res.cloudinary.com/abrahama19/image/upload/v1667757525/GodOfWarR_wyo1qy.jpg'},   
    {id: '4', name: 'Call of Duty MW2', description: 'Accion', stock: '100', price: '30', img: 'https://res.cloudinary.com/abrahama19/image/upload/v1667757525/CallOfDuty2_bbbjep.jpg'},   
    {id: '5', name: 'Ghost Of Tsushima', description: 'Accion', stock: '100', price: '30', img: 'https://res.cloudinary.com/abrahama19/image/upload/v1667757525/Ghost_zwmem6.jpg'},   
    {id: '6', name: 'Spider Man 2', description: 'Aventura', stock: '100', price: '30', img: 'https://res.cloudinary.com/abrahama19/image/upload/v1667757525/SpiderMan_gqxiy2.jpg'},   
    {id: '7', name: 'Sonic Frontiers', description: 'Aventura', stock: '100', price: '30', img: 'https://res.cloudinary.com/abrahama19/image/upload/v1667757525/Sonic_iausrg.jpg'},
    {id: '8', name: 'Uncharted', description: 'Aventura', stock: '100', price: '30', img: 'https://res.cloudinary.com/abrahama19/image/upload/v1667757525/Uncharted_u4hqor.jpg'},   
    {id: '9', name: 'Resident Evil 4', description: 'Accion', stock: '100', price: '30', img: 'https://res.cloudinary.com/abrahama19/image/upload/v1667757525/ResidentE_cewzpl.jpg'},   
    {id: '10', name: 'The Last Of Us', description: 'Aventura', stock: '100', price: '30', img: 'https://res.cloudinary.com/abrahama19/image/upload/v1667757525/LastOfUs_olwwrh.jpg'},   
   ]
   //gFetch es una variable de tipo constante que pasa a ser una promesa
   //Para poder reutilizar esta constante (promesa) debo hacerle un cambio, convirtiendola en funcion () => y que pueda recibir un id y poder hacer comprobaciones
   //Asi se usan las promesas en una funcion con un retorno
   // Async await es sugar sintax
   
   export const gFetch = (id) => {
       return new Promise((resuelto, rechazado) => {
         
           setTimeout(() => {
              resuelto(id ? obj.find( item => item.id === id ) : obj)  
           }, 2000)
         
          
       })
        
   }