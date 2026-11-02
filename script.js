
function show(section) {
    alert("بخش " + section + " هنوز به API ربات متصل نشده است.");
}

function openActions() {
    const repo = localStorage.getItem("samgamesbot_repo");
    window.open(
        repo ? repo + "/actions" : "https://github.com/",
        "_blank"
    );
}
