$("#cancelBtn").click(function (e) {
    e.preventDefault();
    window.history.back();
});

$("input[type=submit]").click(function (e) {
    e.preventDefault();
    let formEle = e.target.closest("form");
    let checker = formEle.checkValidity();
    formEle.reportValidity();
    if (checker) {
        window.history.back();
    }
});

$(".deleteBtn").click(function (e) {
    let row = e.target.closest("tr");
    $("#deleteModal").modal("show");
    $("#approveDelete").click(function (e) {
        $("#deleteModal").modal("hide");
        row.remove();
    });
});

console.log("ok");
    
