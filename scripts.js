function animations() {
	progress();
	loadIcon();
	popUp();
}

function progress() {
	var progress = document.querySelector("#progress");

	var width = 0;
	var intervalId = setInterval(addProgress, 10);

	function addProgress() {
		if (width == 100) {
			clearInterval(intervalId);
			//progress.style.width = 0 + "%";
		} else {
			width++;
			progress.style.width = width + "%";
		}
	}
}

function loadIcon() {
	setTimeout(() => {
		document.getElementById("load").classList.add("loader");
	}, 1000);
	setTimeout(() => {
		document.getElementById("load").classList.remove("loader");
	}, 8000);
}
