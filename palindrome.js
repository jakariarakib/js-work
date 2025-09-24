function palindrome_check(str_entry) {
    let cstry = str_entry.toLowerCase().replace(/[^a-z0-9]+/g, ''); 
    let contt = 0;

    if (cstry === "") {
        console.log("Nothing found");
        return false;
    }

    if (cstry.length % 2 === 0) {
        contt = cstry.length / 2;
    } else {
        if (cstry.length === 1) {
            console.log("Word is a palindrome");
            return true;
        } else {
            contt = (cstry.length - 1) / 2;
        }
    }

    for (let x = 0; x < contt; x++) {
        if (cstry[x] !== cstry[cstry.length - 1 - x]) {
            console.log("Entry is not a palindrome.");
            return false;
        }
    }

    console.log("The entry is a palindrome.");
    return true;
}

palindrome_check("madam");