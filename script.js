let bookmarkForm = document.getElementById("bookmarkForm");
let siteName = document.getElementById('siteNameInput');
let siteUrl = document.getElementById('siteUrlInput');
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let submitBtn = document.getElementById("submitBtn");
let bookmarksList = document.getElementById("bookmarksList");

let isEmpty = false;
let nameValidation = () => {
    if (siteName.value === "") {
        siteNameErrMsg.textContent = "Required*";
        isEmpty = true;
    } else {
        siteNameErrMsg.textContent = "";
        isEmpty = false;
    }
};

let urlValidation = () => {
    if (siteUrl.value === "") {
        siteUrlErrMsg.textContent = "Required*";
        isEmpty = true;
    } else {
        siteUrlErrMsg.textContent = "";
        isEmpty = false;
    }
};

siteName.addEventListener("change", nameValidation);
siteUrl.addEventListener("change", urlValidation);

let addBookmarkList = document.getElementById("addBookmarkList");
bookmarkForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

submitBtn.addEventListener("click", () => {
    nameValidation();
    urlValidation();

    if (isEmpty === false) {
        addBookmarkList.classList.add("d-block");
        let nameVal = siteName.value;
        let urlVal = siteUrl.value;

        let urlTitle = document.createElement("p");
        urlTitle.textContent = nameVal;
        urlTitle.classList.add("url-name");
        addBookmarkList.appendChild(urlTitle);

        let urlLink = document.createElement("a");
        urlLink.href = urlVal;
        urlLink.target = "_blank";
        urlLink.textContent = urlVal;

        addBookmarkList.appendChild(urlLink);
        siteName.value = "";
        siteUrl.value = "";
    }

});