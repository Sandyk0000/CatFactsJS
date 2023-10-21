console.log("hi");

const facts = document.getElementById('facts');
const btn = document.querySelector('button');

function getData(){
    url = "https://catfact.ninja/fact";
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        facts.textContent = data.fact
    })
}

btn.addEventListener("click",()=>{
    getData();
})

