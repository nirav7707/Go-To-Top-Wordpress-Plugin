function abc() {
	var el = document.querySelector(".wp-block-plugin-go-to-top-go-to-top-block");

	function scrollDoc() {
		return document.documentElement || document.body;
	}

	document.addEventListener("scroll", function (event) {
		if (scrollDoc().scrollTop > 400) {
			el.classList.add("showbtn");
		} else {
			el.classList.remove("showbtn");
		}
	});

	el.addEventListener("click", function (event) {
		document.documentElement.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	el.classList.remove("showbtn");
}
document.addEventListener("DOMContentLoaded", abc);
