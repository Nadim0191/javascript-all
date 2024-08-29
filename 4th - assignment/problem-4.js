function password(obj) {
    const newArray = ["name", "birthYear", "siteName"];
    for (const arr of newArray ) {
        if (!obj.hasOwnProperty(arr) || obj[arr] === null) {
            return "Invalid - Property is missing.";
        } else if (arr=== "birthYear" && (typeof obj[arr] !== "number" || obj[arr].toString().length !== 4)) {
            return "Invalid - Birth year must be a 4-digit number.";
        } else if (arr=== "siteName" && typeof obj[arr] !== "string") {
            return "Invalid - Site name must be a string.";
        } else if (typeof obj[arr] !== "string") {
            return "Invalid - " + arr+ " must be a string.";
        }
    }
    const myPass = (obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1) ) + "#" + obj.name + "@" + obj.birthYear;
    return myPass ;
}