// for in loop

const myObject = {
    js: 'javascripti',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in object) {
    console.log(programming[key]);
}

// Map iteration not possible 