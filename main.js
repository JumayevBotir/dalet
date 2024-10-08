let user = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      genres: ["Comedy", "Fantasy"],
      director: "Tim Burton",
      actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
      description:
        'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
      imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
    },
    {
      id: 2,
      title: "The Cotton Club",
      year: "1984",
      genres: ["Crime", "Drama", "Music"],
      director: "Francis Ford Coppola",
      actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
      description:
        "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
    },
    {
      id: 3,
      title: "The Shawshank Redemption",
      year: "1994",
      genres: ["Crime", "Drama"],
      director: "Frank Darabont",
      actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
    },
    {
      id: 4,
      title: "Crocodile Dundee",
      year: "1986",
      genres: ["Adventure", "Comedy"],
      director: "Peter Faiman",
      actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
      description:
        "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
    },
    {
      id: 5,
      title: "Valkyrie",
      year: "2008",
      genres: ["Drama", "History", "Thriller"],
      director: "Bryan Singer",
      actors: "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
      description:
        "A dramatization of the 20 July assassination and political coup description by desperate renegade German Army officers against Hitler during World War II.",
      imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
    },
    {
      id: 6,
      title: "Ratatouille",
      year: "2007",
      genres: ["Animation", "Comedy", "Family"],
      director: "Brad Bird, Jan Pinkava",
      actors: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
      description:
        "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
    }
    
]
// function deletData(user,userId){
//       user=user.filter((w)=>{
//         return w.id!==userId
//       })
// }
function addData(user){
  var itemsElemnt=document.querySelector('.items');
  itemsElemnt.innerHTML = "";
user.forEach((item)=>{
   let img=item.imageUrl;
   let title=item.title;
   let id=item.id;
   let drec=item.director;
   let list=document.createElement('li');
   let pic=document.createElement('img');
   let text=document.createElement('p')
   let textOne=document.createElement('p')
   let textTwo=document.createElement('p')
   itemsElemnt.append(list);
   
   let btn =document.createElement('button')
   btn.classList.add('btn');
   btn.addEventListener('click',(e)=>{
      user=user.filter((w)=>{
         return w.id!=e.target.parentElement.children[2].textContent
          
        })
      
        addData(user);
      
     
   })
   list.append(pic);
   text.append(title);
   textOne.append(id);
   textTwo.append(drec)
   list.append(text,textOne,textTwo);
   pic.src=img;
   list.classList.add('list');
   pic.classList.add('img')

   btn.textContent='Dalet';
   list.append(btn)
});

}addData(user)

let input=document.querySelectorAll('input');
let btnnElemnt=document.querySelector('.btnn');
let id=7;
btnnElemnt.addEventListener('click',(yangi)=>{
  let imgesOne=document.createElement('img');
    let nevObj={
      id:id++,
      imageUrl:
   "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
    };
    nevObj.title= input[0].value;
    nevObj.email= input[1].value;
    nevObj. director= input[2].value;
   if(nevObj.title&&nevObj.email&&nevObj.director){
    input.forEach((im)=>{
      im.value=""
  })

user.push(nevObj);
  addData(user)

   }
  
  
      
})
