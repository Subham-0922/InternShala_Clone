let cart = JSON.parse(localStorage.getItem("cart")) || []

let url = "https://636e4eed182793016f3cfd7d.mockapi.io/course"
fetch(url)
  .then((res) => (res.json()))
  .then((data) => {
    display(data)
  })
function display(data) {
  document.querySelector(".course").innerHTML = ""
  data.forEach(element => {
    let flag = true
    let div = document.createElement("div")
    div.setAttribute("class", "cbox")
    let title = document.createElement("h2")
    title.innerText = element.Title
    let dist = document.createElement("p")
    dist.innerText = element.Disc
    let cate = document.createElement("h3")
    cate.innerText = "Category: " + element.Cate
    let cutprice = document.createElement("s")
    cutprice.setAttribute("class", "cutp")
    cutprice.innerText = "Rs." + Math.floor(element.Price * 1.1)
    let price = document.createElement("h3")
    price.setAttribute("class", "pp")
    price.innerText = "Rs." + element.Price
    let image = document.createElement("img")
    image.setAttribute("src", element.image)
    butt = document.createElement("button")
    butt.setAttribute("class", "carta")
    butt.innerText = "Add To Cart"
    butt.addEventListener("click", function () {

      console.log(flag)
      if (flag) {
        alert("Product Added To Cart")
        cart.push(element)
        localStorage.setItem("cart", JSON.stringify(cart))
        flag = false
      } else {

        alert("Product Already in Cart")
      }
    })
    div.append(image, title, dist, cate, cutprice, price, butt)
    document.querySelector(".course").append(div)

  });
}