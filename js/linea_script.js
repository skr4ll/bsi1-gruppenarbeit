// object with members
const members = [
    {
        Name: "Marilis",
        Genre: "Filmmusik",
        Song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/13JG9286axiC4Vf19BXopw?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        Name: "Khanh",
        Genre: "tba",
        Song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3DdLcVjNp6G3UJEhe6DQG3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        Name: "Philipp",
        Genre: "Rock",
        Song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1Mzm1CNqVxtwbCYhOo843s?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },

    {
        Name: "Linea",
        Genre: "Eurovision",
        Song:'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4szQkW1CDHqbRZGltXJdd3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    }
];

//function to displaymembers
function displayBandmember(selection) {
    for (let i = 0; i < members.length; i++) {
        if (selection == members[i].Name) {
            document.getElementById("song").innerHTML = members[i].Song;
            document.getElementById("name").innerHTML = members[i].Name;
            document.getElementById("genre").innerHTML = "Genre: " + members[i].Genre;
            break;
        }
    }
}
//calls displaymembersfunction upon loading the page
window.onload = function() {
    displayBandmember("Marilis");
};
    

//gets username
function userName() {
    let userName = document.getElementById("Name").value;
    return userName.trim() !== ""; 
}
//gets email  
function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailPattern.test(document.getElementById("EMail").value);
}
// gets checkbox 
function checkbox() {
    return document.getElementById("dsgvo").checked;
}
//validates input and displays error messages   
function validation() { 
    let error = ""; 
    
    if (!userName()) {
        error += "Please enter a name.<br>";
    }
    if (!validateEmail()) {
        error += "Please enter a valid email address.<br>";
    }
    if (!checkbox()) {
        error += "You must agree to the data protection declaration.<br>";
    }
    
   
    document.getElementById("verificationFail").innerHTML = error;

    if (error === "") {
        alert("You are now subscribed");
        return true; 
    } else {
        return false; 
    }
}