function Book(title,author,pages,haveRead){
    this.title=title
    this.author=author
    this.pages=pages
    this.haveRead=haveRead
}

Book.prototype.info=function(){
    if(this.haveRead){
        return (this.title+" by "+this.author+", "+this.pages+", read")
    }
    else{
        return (this.title+" by "+this.author+", "+this.pages+", not read yet")
    }
}

const b1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
// console.log(b1.info())

// console.log(Object.getPrototypeOf(b1))
// console.log(b1.__proto__)