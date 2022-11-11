let arr=[
    {name:"Amani Nagda",
    img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    para:"I created my profile because I had before Intern Theorynot come across a consultancy that would execute the responsibility of getting a result for your application irrespective of being failure or success the way they did.They've set the bars really high! Kudos team!"
    },
    {name:"Siddharth Viyyapu",
    img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    para:"I was on a look out for an internship to spend my summer productively and I stumbled upon Inter Theory. Their team was very kind and kept me updated. I applied for Viacom18 and got through. I thank Intern Theory team for giving me this opportunity."
    },
    {name:"Harshil Bhadra",
    img:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    para:"I created my profile because I had before Intern Theorynot come across a consultancy that would execute the responsibility of getting a result for your application irrespective of being failure or success the way they did.They've set the bars really high! Kudos teamWe have been using InternTheory for over a year now and are very happy with the quality of applications that we receive. Their team has been very helpful in screening applications for the various internship requirements we had.It has been a delight working with them."
    }
]
let nam=document.querySelector("#slideh2")
let image=document.querySelector("#slideimg")
let para=document.querySelector("#slidep")
let intrerval=null
let i=1
nam.innerText=arr[0].name
image.setAttribute("src",arr[0].img)
para.innerText=arr[0].para
setInterval(sliderp,3000)

function sliderp(){
    
    nam.innerText=arr[i].name
    image.setAttribute("src",arr[i].img)
    para.innerText=arr[i].para
    
    i=i+1

    if(i==arr.length){
        i=0
    }
    
    
    
    
    
}
document.querySelector("#prev").addEventListener("click",function(){
    if(i===0){
        i=arr.length-1
        console.log(i)
    }else{
        i--
        console.log(i)
    }
    
    nam.innerText=arr[i].name
    image.setAttribute("src",arr[i].img)
    para.innerText=arr[i].para
    


    
})
document.querySelector("#next").addEventListener("click",function(){
    if(i==arr.length-1){
        i=0
        console.log(i)
    }else{
        i++
        console.log(i)
    }
    
    nam.innerText=arr[i].name
    image.setAttribute("src",arr[i].img)
    para.innerText=arr[i].para
    


    
})

