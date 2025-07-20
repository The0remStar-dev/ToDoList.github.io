const quote = document.querySelector('.input-bar');
const okButton = document.querySelector('.ok-button');
const ul = document.querySelector('.ul');
const date = document.querySelector('.date')



let task=JSON.parse(localStorage.getItem('list',))||[]

  let tri = task.sort((a,b)=> a.date.localeCompare(b.date))
  console.log(tri)

task.forEach((data)=>{
  createElement(data.name,data.date,data)
});

document.querySelector('.ok-button ').addEventListener('click', ()=>{
  
  

   let quoteValue = quote.value.trim();
   let doDate = date.value
  
   const data = {name: quoteValue ,date: doDate }
   task.push(data)
   localStorage.setItem('list', JSON.stringify(task));
   let tri = task.sort((a,b)=> a.date.localeCompare(b.date))
   console.log(tri)
   console.log(data,localStorage)
  
  
    if(quoteValue==""){
    alert('Entrez une tache avant')
    
    
    
  }else{
    
    createElement(quoteValue,doDate,data)

  }

  quote.value=''
  
  






  console.log(task)
  
  

})



//   function datetrie(task){
//   task.sort((a,b)=>a.date-b.date)
//   console.log(task)
// }




function createElement(quoteValue,doDate,data){
  

 
  let doneButton=document.createElement('button')
  doneButton.className='done-button css-done-button'
  doneButton.textContent='Done'

  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'DELETE'
   deleteButton.className= 'delete-button css-delete-button'
  const li = document.createElement('li')
  li.textContent = quoteValue
  const dateP = document.createElement('p')
  dateP.textContent=doDate
  ul.appendChild(li)
  li.appendChild(deleteButton)
  li.appendChild(doneButton)
  ul.appendChild(dateP)
 


    deleteButton.addEventListener('click',()=>{
    const index = task.findIndex(item => item.name === data.name && item.date === data.date);

        if (index !== -1) {
          task.splice(index, 1);  // Retirer la tâche du tableau
          localStorage.setItem('list', JSON.stringify(task));  // Mettre à jour le stockage
        }

        // Supprimer du DOM
        ul.removeChild(li);
        ul.removeChild(dateP);
  });



    console.log(task)
    
    



    doneButton.addEventListener('click',()=>{
alert("Bravo d'avoir réalisé cette tâche !");
    const index = task.findIndex(item => item.name === data.name && item.date === data.date);

    if (index !== -1) {
      task.splice(index, 1);
      localStorage.setItem('list', JSON.stringify(task));
    }

    ul.removeChild(li);
    ul.removeChild(dateP);
  })


}


function alertElem(task){
  if(task ===30){
    alert('Vous avez trop de taches a realiser, supprimer en')
  }
}

function clearLocalStorage(){
  localStorage.clear()
}

// function todo(quoteValue,data,tri,task){
//   let quoteValue = quote.value.trim();
//   let doDate = date.value
  
//   const data = {name: quoteValue ,date: doDate }
//   task.push(data)
//   localStorage.setItem('list', JSON.stringify(task));
//   let tri = task.sort((a,b)=> a.date.localeCompare(b.date))
//   console.log(tri)
//   console.log(data,localStorage)
//   quote.value=''
// }
