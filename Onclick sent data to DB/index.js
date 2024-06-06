let addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    fetch("dbput.php", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: "price=900&name=momo",
	})
		.then(async (response) => {
			const data = await response.text();
            if(data === "success"){
                alert("success");
            }else{
                alert("failed");
            }
			
		})
		.catch(() => {
			
		});
})