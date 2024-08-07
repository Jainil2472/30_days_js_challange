let book = {
    title: "let's start js",
    author: "chai or code",
    "year": 2022,
    returnobj : function()  {return this.author, this.title },
    updateyear : (year) =>{
        book.year=year;
    },
    thismethod : function() {
        return this.title;
    }
};

//Activity 1

console.log(book);
console.log(book.year);

//Activity 2

console.log(book.returnobj());
book.updateyear(2002);
console.log(book);

// //Activity3
let library={
    name : "DDU Library",
    book : [
        {
            title: "hackme"
        },
        {
            title: "let's C"
        },
        {
            title: "nothing"
        }
    ]
};
console.log(library);
console.log(library.book[1]);

//Activity 4

console.log(book.thismethod());

//Activity 5
for (const key in book) {
    console.log(book[key]);
    
}
console.log(Object.keys(book));
console.log(Object.values(book));
