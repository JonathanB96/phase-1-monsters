document.addEventListener("DOMContentLoaded", ()=>{
    //creating the form
    let formContainer = document.querySelector("#create-monster")
    let monsterContainer = document.querySelector("#monster-container")
    let form = document.createElement('form')
    let name = document.createElement("input")
    name.setAttribute("placeholder", "name...")
    let age = document.createElement("input")
    age.setAttribute("placeholder", "age...")
    let btn = document.createElement("input")
    btn.setAttribute("type", "submit")
    btn.setAttribute("value", "Create")
    let description = document.createElement("input")
    description.setAttribute("placeholder", "description...")
    form.appendChild(name)
    form.appendChild(age)
    form.appendChild(description)
    form.appendChild(btn)
    formContainer.appendChild(form)
    //rendering the first 50 monsters on the page

    fetch('http://localhost:3000/monsters')
    .then(res=>res.json())
    .then(res=>{ for(let i = 0; i<50; i++)
        {   let h2 = document.createElement('h2')
            let h3 = document.createElement('h3')
            let p = document.createElement('p')
            h2.textContent = res[i].name
            h3.textContent = res[i].age
            p.textContent = res[i].description
            monsterContainer.appendChild(h2)
            monsterContainer.appendChild(h3)
            monsterContainer.appendChild(p)
            

        }
        //Back & forward btns

        let back = document.querySelector("#back")
        let forward = document.querySelector("#forward")
        let i = res.length-50;

        function backBtn(){
             if(num<0){
                alert(`Ain't no monsters here`)
            }






        }
        // function forwardBtn(){
        //    i+=50
        //     for(let obj of res){
        //         if(obj>i)
        //         let h2 = document.createElement('h2')
        //         let h3 = document.createElement('h3')
        //         let p = document.createElement('p')
        //         h2.textContent = res[i].name
        //         h3.textContent = res[i].age
        //         p.textContent = res[i].description
        //         monsterContainer.appendChild(h2)
        //         monsterContainer.appendChild(h3)
        //         monsterContainer.appendChild(p)
    
        //     }

        // }

        forward.addEventListener('click', ()=>{
            // forwardBtn()
            alert(res.length)

    
        })

        //Create monster
        
        form.addEventListener('submit', (e)=>{
            e.preventDefault()
           
        let formData = {name:"", age:"", description:""};
          formData.name = name.value;
           formData.age = age.value;
           formData.description = description.value;

           fetch('http://localhost:3000/monsters', {
               'method' : 'POST',
               'headers' : {'Content-Type': 'application/json'},
                'body' : JSON.stringify(formData)

           }).then(res=>res.json())
           .then(res=>console.log(res))




        })

        
    })
    




    


})