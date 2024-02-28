const root = document.documentElement;
root.className = "dark";

const themeToggle = document.getElementById("toggle-theme");
themeToggle.addEventListener("click", () => {
    themeToggle.style.cssText = "";
    toggleTheme();
    })

function toggleTheme() {
    const updateTheme = root.className === "dark" ? "light" : "dark";
    root.className = updateTheme;
}


const contentBlock = document.querySelectorAll(".content-block");
contentBlock.forEach(item => {
    item.addEventListener("mouseover", () => {
        const itemID = item.id
        addUnderline(itemID);
    })
});

contentBlock.forEach(item => {
    item.addEventListener("mouseout", () => {
        const itemID = item.id
        removeUnderline(itemID);
    })
});

function addUnderline(id) {
    const blockToChange = document.getElementById(id);
    const contentID = id + "-content"
    const contentToChange = document.getElementById(contentID);
    const currentTheme = root.className;

    let lineColor = "white" 
    if(currentTheme === "light") {
        lineColor = "white";
    } else {
        lineColor = "black";
    }

    blockToChange.style.cssText = ` text-decoration: underline;
                                    text-decoration-color: var(--flair-color);
                                    text-decoration-thickness: 3px;`
    contentToChange.style.cssText = `text-decoration: underline;
                                    text-decoration-color: ${lineColor};
                                    text-decoration-thickness: 3px;`
}

function removeUnderline(id) {
    const blockToChange = document.getElementById(id);
    const contentID = id + "-content"
    const contentToChange = document.getElementById(contentID);
    blockToChange.style.cssText = "";
    blockToChange.style.cssText = "";
    contentToChange.style.cssText = "";
}

const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        const linkID = link.id
        if(linkID != "") { addBorder(linkID) }
    })    
});

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        const linkID = link.id
        if(linkID != "") { removeBorder(linkID) }
    })    
});

function addBorder(id) {
    if(id === "dashboard-icon" || id === "dashboard") {
        const splitIDs = id.split("-");
        const content = document.getElementById(splitIDs[0]);
        content.classList.add("addUnderline");
        return;
    }
    const containsDash = id.includes("-")
    if(containsDash) {
        const splitIDs = id.split("-")
        const icon = document.getElementById(id)
        const content = document.getElementById(splitIDs[0])
    
        icon.classList.remove("removeMovingBorder")
        icon.classList.add("addMovingBorder")
        content.classList.add("addUnderline")
    } else {
        const iconID = id + "-icon"
        const icon = document.getElementById(iconID)
        const content = document.getElementById(id)

        icon.classList.remove("removeMovingBorder")
        icon.classList.add("addMovingBorder")
        content.classList.add("addUnderline")
    }
}

function removeBorder(id) {
    if(id === "dashboard-icon" || id === "dashboard") {
        const splitIDs = id.split("-");
        const content = document.getElementById(splitIDs[0]);
        content.classList.remove("addUnderline");
        return;
    }
    const containsDash = id.includes("-")
    if(containsDash) {
        const splitIDs = id.split("-")
        const icon = document.getElementById(id)
        const content = document.getElementById(splitIDs[0])

        icon.classList.remove("addMovingBorder")
        icon.classList.add("removeMovingBorder")
        content.classList.remove("addUnderline")
    } else {
        const iconID = id + "-icon"
        const icon = document.getElementById(iconID)
        const content = document.getElementById(id)

        icon.classList.remove("addMovingBorder")
        icon.classList.add("removeMovingBorder")
        content.classList.remove("addUnderline")
    }
}