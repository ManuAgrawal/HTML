var arr = [
    {name:"Manu Agrawal", img:"https://images.unsplash.com/photo-1761165307592-95cdbe1b5864?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387", status:"Stranger"},
    {name:"Mudit Tripathi", img:"https://images.unsplash.com/photo-1607718809330-54ae7d91b37a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387", status:"Stranger"},
    {name:"Harshit Sharma", img:"https://plus.unsplash.com/premium_photo-1745610652757-b217d6388ae5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=410", status:"Stranger"}
];

var clustter="";

arr.forEach(function(ele){
    clustter+=` <div id="card">
            <div id="img">
                <img src="${ele.img}" alt="">
            </div>
            <h3>${ele.name}</h3>
            <h5>${ele.status}</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, aspernatur.</p>
            <button>Add Friend</button>
        </div>`;
});

document.querySelector("#main").innerHTML=clustter;

