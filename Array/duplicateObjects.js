let books = [
  { title: 'C++', author: 'Bjarne' },
  { title: 'Java', author: 'James' },
  { title: 'Python', author: 'Guido' },
  { title: 'Java', author: 'James' },
  { title: 'C++', author: 'Bjarne' },
  { title: 'Java', author: 'James' },
  { title: 'Python', author: 'Guido' },
  { title: 'Java', author: 'James' }
];
const result = books.filter((item, index, theArray) => {
  if (
    theArray.findIndex(
      s => s.title === item.title && s.author === item.author
    ) === index
  ) {
    return item;
  }
});
console.log(JSON.stringify(result));
