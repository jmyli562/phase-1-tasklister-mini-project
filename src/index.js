document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit",function(e){

    e.preventDefault();
    let input = document.getElementById("new-task-description").value;
    let btn = document.createElement("button")
    let select = document.createElement("select")
    select.id = "dropdown"
    let defaultOption = document.createElement("option")
    defaultOption.textContent = "DEFAULT"
    let option1 = document.createElement("option")
    option1.textContent = "HIGH PRIORITY"
    let option2 = document.createElement("option")
    option2.textContent = "MEDIUM PRIORITY"
    let option3 = document.createElement("option")
    option3.textContent = "LOW PRIORITY"
    select.appendChild(defaultOption)
    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)

    btn.textContent = "X"
    btn.addEventListener("click", function(e){
      e.target.parentNode.remove()
      select.remove()
    })

    let list = document.getElementById("tasks")
    let li = document.createElement("li")
    li.textContent = `${input} `
    list.appendChild(li)
    list.appendChild(select)

    select.addEventListener("change", function(e){
      if(e.target.value === "HIGH PRIORITY"){
        li.style.color = "red"
      }else if(e.target.value === "MEDIUM PRIORITY"){
        li.style.color = "#F6BE00"
      }else if(e.target.value === "LOW PRIORITY"){
        li.style.color = "green"
      }else if(e.target.value === "DEFAULT"){
        li.style.color = "black"
      }
    })

    li.append(btn)
    form.reset()
});

});