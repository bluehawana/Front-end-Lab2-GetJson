document.getElementById("btn1").onclick = function () {
  var request;
  if (window.XMLHttpRequest) {
    http = new XMLHttpRequest();
  } else {
    let http = new XMLHttpRequest();
  }

  http.open("get", "/contents/courses.json", true);

  http.send();

  http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      let courses = JSON.parse(this.responseText);

      let output = "";

      for (let item of courses) {
        output += `
				<div class="course">
					<img src="${item.image}" alt="${item.description}">
					<p class="title">${item.title}</p>
					<p class="description">${item.description}</p>
					<p class="price">
						<span>${item.price}</span>
						<span>&euro;</span>
					</p>
					<p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
				</div>
			`;
      }

      document.querySelector(".courses").innerHTML = output;
    }
  };
};
