// final command
let finalCommand = "";

// video
let nowPlaying = 1;
let myVideo = document.getElementById("myVideo");
let myVideo1 = document.getElementById("myVideo1");
myVideo1.classList.add("hidden");
let myVideo2 = document.getElementById("myVideo2");
myVideo2.classList.add("hidden");

// commands
let helpCommand = document.getElementById("helpCommand");
helpCommand.style.display = "none";

let infoCommand = document.getElementById("infoCommand");
infoCommand.style.display = "none";

let educationCommand = document.getElementById("educationCommand");
educationCommand.style.display = "none";

let certificatesCommand = document.getElementById("certificatesCommand");
certificatesCommand.style.display = "none";

let skillsCommand = document.getElementById("skillsCommand");
skillsCommand.style.display = "none";

let commandField = document.getElementById("commandField");
commandField.addEventListener("input", function(command)
{
    finalCommand = command.target.value;
    finalCommand = finalCommand.toLowerCase();
    //console.log(finalCommand);

    if (finalCommand.length >= 30)
    {
        command.target.value = "";
    }

    //reset
    if (finalCommand == "clear")
    {
        helpCommand.style.display = "none";
        infoCommand.style.display = "none";
        educationCommand.style.display = "none";
        certificatesCommand.style.display = "none";
        skillsCommand.style.display = "none";
        command.target.value = "";
    }

    // video
    if (finalCommand == "video")
    {
        if (nowPlaying == 0)
        {
            myVideo.classList.remove("hidden");
            myVideo1.classList.add("hidden");
            myVideo2.classList.add("hidden");
            nowPlaying += 1;
        }
        else if (nowPlaying == 1)
        {
            myVideo.classList.add("hidden");
            myVideo1.classList.remove("hidden");
            myVideo2.classList.add("hidden");
            nowPlaying += 1;
        }
        else if (nowPlaying == 2)
        {
            myVideo.classList.add("hidden");
            myVideo1.classList.add("hidden");
            myVideo2.classList.remove("hidden");
            nowPlaying = 0;
        }
        command.target.value = "";
    }

    // menu commands
    if (finalCommand == "help")
    {
        helpCommand.style.display = "grid";
        infoCommand.style.display = "none";
        educationCommand.style.display = "none";
        certificatesCommand.style.display = "none";
        skillsCommand.style.display = "none";
        command.target.value = "";
    }

    if (finalCommand == "info")
    {
        helpCommand.style.display = "none";
        infoCommand.style.display = "grid";
        educationCommand.style.display = "none";
        certificatesCommand.style.display = "none";
        skillsCommand.style.display = "none";
        command.target.value = "";
    }

    if (finalCommand == "education")
    {
        helpCommand.style.display = "none";
        infoCommand.style.display = "none";
        educationCommand.style.display = "grid";
        certificatesCommand.style.display = "none";
        skillsCommand.style.display = "none";
        command.target.value = "";
    }

    if (finalCommand == "certificates")
    {
        helpCommand.style.display = "none";
        infoCommand.style.display = "none";
        educationCommand.style.display = "none";
        certificatesCommand.style.display = "grid";
        skillsCommand.style.display = "none";
        command.target.value = "";
    }

    if (finalCommand == "skills")
    {
        helpCommand.style.display = "none";
        infoCommand.style.display = "none";
        educationCommand.style.display = "none";
        certificatesCommand.style.display = "none";
        skillsCommand.style.display = "grid";
        command.target.value = "";
    }
});

// mobile version
// main window
let mobileDemoHide = document.getElementById("mobileDemoHide");

// website block window
let mobileDemoShow = document.getElementById("mobileDemoShow");

window.addEventListener('resize', function()
{
    //console.log("Inner : " + window.innerHeight, window.innerWidth); // Inner : 711 582
    //console.log("Outer : " + window.outerHeight, window.outerWidth); // Outer : 965 742
    //console.log(" ");

    if (this.window.innerHeight < 711 || this.window.innerWidth < 582)
    {
        mobileDemoHide.classList.add("hidden");
        mobileDemoShow.classList.remove("hidden");
    }
    else
    {
        mobileDemoHide.classList.remove("hidden");
        mobileDemoShow.classList.add("hidden");
    }

    if (this.window.outerHeight < 965 || this.window.outerWidth < 742)
    {
        mobileDemoHide.classList.add("hidden");
        mobileDemoShow.classList.remove("hidden");
    }
    else
    {
        mobileDemoHide.classList.remove("hidden");
        mobileDemoShow.classList.add("hidden");
    }
});