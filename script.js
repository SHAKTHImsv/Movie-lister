const mockMovies = [
    {
        title: "Inception",
        trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
        description: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
        sourceUrl: "https://www.imdb.com/title/tt1375666/"
    },
    {
        title: "Interstellar",
        trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        sourceUrl: "https://www.imdb.com/title/tt0816692/"
    },
    {
        title: "The Shawshank Redemption",
        trailerUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        sourceUrl: "https://www.imdb.com/title/tt0111161/"
    },
    {
        title: "The Godfather",
        trailerUrl: "https://www.youtube.com/embed/UaVf1hQh2Cw",
        description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        sourceUrl: "https://www.imdb.com/title/tt0068646/"
    },
    {
        title: "Pulp Fiction",
        trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqBHg",
        description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        sourceUrl: "https://www.imdb.com/title/tt0110912/"
    },
    {
        title: "The Dark Knight",
        trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        sourceUrl: "https://www.imdb.com/title/tt0468569/"
    },
    {
        title: "Fight Club",
        trailerUrl: "https://www.youtube.com/embed/SUXWAgh9_7w",
        description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
        sourceUrl: "https://www.imdb.com/title/tt0137523/"
    },
    {
        title: "Forrest Gump",
        trailerUrl: "https://www.youtube.com/embed/bLv8H_9zY1E",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man.",
        sourceUrl: "https://www.imdb.com/title/tt0109830/"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        trailerUrl: "https://www.youtube.com/embed/r5X-hFf6B4w",
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to save Middle-Earth.",
        sourceUrl: "https://www.imdb.com/title/tt0167260/"
    },
    {
        title: "The Good, the Bad and the Ugly",
        trailerUrl: "https://www.youtube.com/embed/sZg0T4jgrBY",
        description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        sourceUrl: "https://www.imdb.com/title/tt0060196/"
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        trailerUrl: "https://www.youtube.com/embed/ViM9v3QH6Hg",
        description: "A meek Hobbit from the Shire and a rebellious Elf set out on an epic quest to destroy a powerful ring.",
        sourceUrl: "https://www.imdb.com/title/tt0120737/"
    },
    {
        title: "The Empire Strikes Back",
        trailerUrl: "https://www.youtube.com/embed/1_0tB96_biA",
        description: "After the Rebels are overpowered by the Empire on the ice planet Hoth, Luke Skywalker seeks out Jedi Master Yoda.",
        sourceUrl: "https://www.imdb.com/title/tt0080684/"
    },
    {
        title: "The Silence of the Lambs",
        trailerUrl: "https://www.youtube.com/embed/ZWQ2nTy0J9A",
        description: "A young FBI cadet must confine the cannibalistic serial killer Dr. Hannibal Lecter to catch another killer.",
        sourceUrl: "https://www.imdb.com/title/tt0102926/"
    },
    {
        title: "Saving Private Ryan",
        trailerUrl: "https://www.youtube.com/embed/qnPpDkStZLw",
        description: "In the midst of World War II, U.S. Army Rangers, led by Captain Miller, are sent to retrieve a paratrooper behind enemy lines.",
        sourceUrl: "https://www.imdb.com/title/tt0120815/"
    },
    {
        title: "The Usual Suspects",
        trailerUrl: "https://www.youtube.com/embed/oiuC93aR0v4",
        description: "A sole survivor tells police the events leading up to a brutal crime and reveals the identity of the mastermind behind it.",
        sourceUrl: "https://www.imdb.com/title/tt0114814/"
    },
    {
        title: "Schindler's List",
        trailerUrl: "https://www.youtube.com/embed/gG22XN8Zy9E",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler becomes an unlikely humanitarian.",
        sourceUrl: "https://www.imdb.com/title/tt0108052/"
    },
    {
        title: "The Lion King",
        trailerUrl: "https://www.youtube.com/embed/4sj1MT9c6sA",
        description: "Lion prince Simba flees his kingdom after the death of his father, but returns as an adult to reclaim his throne.",
        sourceUrl: "https://www.imdb.com/title/tt0110357/"
    },
    {
        title: "Gladiator",
        trailerUrl: "https://www.youtube.com/embed/owK1cxDzoD0",
        description: "A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family.",
        sourceUrl: "https://www.imdb.com/title/tt0172495/"
    },
    {
        title: "The Departed",
        trailerUrl: "https://www.youtube.com/embed/SG2v84R-16U",
        description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.",
        sourceUrl: "https://www.imdb.com/title/tt0407887/"
    },
    {
        title: "The Prestige",
        trailerUrl: "https://www.youtube.com/embed/ij5nA7pS2zM",
        description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion.",
        sourceUrl: "https://www.imdb.com/title/tt0482571/"
    },
    {
        title: "Goodfellas",
        trailerUrl: "https://www.youtube.com/embed/2D8QUx7x9hE",
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
        sourceUrl: "https://www.imdb.com/title/tt0099685/"
    },
    {
        title: "Titanic",
        trailerUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        sourceUrl: "https://www.imdb.com/title/tt0120338/"
    },
    {
        title: "Avatar",
        trailerUrl: "https://www.youtube.com/embed/5PSNL1qE6VY",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        sourceUrl: "https://www.imdb.com/title/tt0499549/"
    },
    {
        title: "Jurassic Park",
        trailerUrl: "https://www.youtube.com/embed/7GJ_3zqF6Y4",
        description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
        sourceUrl: "https://www.imdb.com/title/tt0107290/"
    },
    {
        title: "The Dark Knight Rises",
        trailerUrl: "https://www.youtube.com/embed/g8evyE9TuYk",
        description: "Eight years after the Joker's defeat, Gotham is at peace. But a new menace threatens to undo everything Batman has fought for.",
        sourceUrl: "https://www.imdb.com/title/tt1345836/"
    },
    {
        title: "The Green Mile",
        trailerUrl: "https://www.youtube.com/embed/6dR_M8u_4nA",
        description: "The lives of guards on Death Row are affected by one of their charges: a man accused of child murder, yet he has a mysterious gift.",
        sourceUrl: "https://www.imdb.com/title/tt0120689/"
    },
    {
        title: "The Intouchables",
        trailerUrl: "https://www.youtube.com/embed/34WI7n2FMYE",
        description: "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
        sourceUrl: "https://www.imdb.com/title/tt1675434/"
    },
    {
        title: "The Pianist",
        trailerUrl: "https://www.youtube.com/embed/6GfCOdVd1S4",
        description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        sourceUrl: "https://www.imdb.com/title/tt0253474/"
    },
    {
        title: "The Social Network",
        trailerUrl: "https://www.youtube.com/embed/2W4nH0pY0Cw",
        description: "As Harvard students create the social networking site that would become known as Facebook, they are swept up in a whirlwind of fame, fortune, and betrayal.",
        sourceUrl: "https://www.imdb.com/title/tt1285016/"
    },
    {
        title: "The Shape of Water",
        trailerUrl: "https://www.youtube.com/embed/X6EYhOUBXoo",
        description: "At a top-secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature.",
        sourceUrl: "https://www.imdb.com/title/tt5580390/"
    },
    {
        title: "Black Panther",
        trailerUrl: "https://www.youtube.com/embed/xjDjIWPwcPU",
        description: "T'Challa, the King of Wakanda, must defend his nation from being torn apart by enemies from his past.",
        sourceUrl: "https://www.imdb.com/title/tt1825683/"
    },
    {
        title: "Whiplash",
        trailerUrl: "https://www.youtube.com/embed/7dB45H2W1vY",
        description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by a ruthless instructor.",
        sourceUrl: "https://www.imdb.com/title/tt2582802/"
    },
    {
        title: "La La Land",
        trailerUrl: "https://www.youtube.com/embed/0pdqf4P9MB8",
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        sourceUrl: "https://www.imdb.com/title/tt3783958/"
    },
    {
        title: "Parasite",
        trailerUrl: "https://www.youtube.com/embed/5xH0HfJHsaY",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        sourceUrl: "https://www.imdb.com/title/tt6751668/"
    },
    {
        title: "The Grand Budapest Hotel",
        trailerUrl: "https://www.youtube.com/embed/1Fg5iWmQ2Mc",
        description: "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero, the lobby boy who becomes his most trusted friend.",
        sourceUrl: "https://www.imdb.com/title/tt2278388/"
    },
    {
        title: "Mad Max: Fury Road",
        trailerUrl: "https://www.youtube.com/embed/hEJnMQ9tU04",
        description: "In a post-apocalyptic wasteland, Max teams up with a mysterious woman to try to survive.",
        sourceUrl: "https://www.imdb.com/title/tt1392190/"
    },
    {
        title: "Coco",
        trailerUrl: "https://www.youtube.com/embed/LSnK5Wj8j4s",
        description: "A boy named Miguel dreams of becoming a musician despite his family's generations-old ban on music.",
        sourceUrl: "https://www.imdb.com/title/tt2380307/"
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        trailerUrl: "https://www.youtube.com/embed/g4Hbz2jLx9A",
        description: "Miles Morales becomes the Spider-Man of his reality, crossing paths with his counterparts from other dimensions.",
        sourceUrl: "https://www.imdb.com/title/tt4633694/"
    },
    {
        title: "Her",
        trailerUrl: "https://www.youtube.com/embed/6h8xdYExyWI",
        description: "In a future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
        sourceUrl: "https://www.imdb.com/title/tt1798709/"
    },
    {
        title: "Room",
        trailerUrl: "https://www.youtube.com/embed/8e-4nI0vW3g",
        description: "A young boy is raised in a confined space with his mother, who has been kidnapped.",
        sourceUrl: "https://www.imdb.com/title/tt3170832/"
    },
    {
        title: "A Star Is Born",
        trailerUrl: "https://www.youtube.com/embed/n6MQQq8J8mM",
        description: "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
        sourceUrl: "https://www.imdb.com/title/tt1517451/"
    },
    {
        title: "Inside Out",
        trailerUrl: "https://www.youtube.com/embed/seMwp26yyPU",
        description: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions—Joy, Fear, Anger, Disgust, and Sadness—conflict on how to navigate a new city.",
        sourceUrl: "https://www.imdb.com/title/tt2096673/"
    },
    {
        title: "Deadpool",
        trailerUrl: "https://www.youtube.com/embed/9vN4R6fTLqI",
        description: "A former special forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers and a twisted sense of humor.",
        sourceUrl: "https://www.imdb.com/title/tt1431045/"
    },
    {
        title: "Jojo Rabbit",
        trailerUrl: "https://www.youtube.com/embed/8ouG7ZxJ_K4",
        description: "A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home.",
        sourceUrl: "https://www.imdb.com/title/tt2584384/"
    },
    {
        title: "Once Upon a Time in Hollywood",
        trailerUrl: "https://www.youtube.com/embed/2C1pFRS3K8I",
        description: "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age.",
        sourceUrl: "https://www.imdb.com/title/tt7131622/"
    },
    {
        title: "Knives Out",
        trailerUrl: "https://www.youtube.com/embed/1sO2G3gQef4",
        description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
        sourceUrl: "https://www.imdb.com/title/tt8946378/"
    },
    {
        title: "Midsommar",
        trailerUrl: "https://www.youtube.com/embed/1F0Nw9Gdrm4",
        description: "A couple travels to Sweden for a festival that only happens once every ninety years.",
        sourceUrl: "https://www.imdb.com/title/tt8108198/"
    },
    {
        title: "The Irishman",
        trailerUrl: "https://www.youtube.com/embed/4j0eV2yQ3Zw",
        description: "An aging hitman reflects on his life and career, including his involvement with the Bufalino crime family.",
        sourceUrl: "https://www.imdb.com/title/tt3846304/"
    },
    {
        title: "1917",
        trailerUrl: "https://www.youtube.com/embed/Y6I_mz8b0cM",
        description: "As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
        sourceUrl: "https://www.imdb.com/title/tt8579674/"
    },
    {
        title: "The Farewell",
        trailerUrl: "https://www.youtube.com/embed/8z1-u7mG5Ew",
        description: "A Chinese-American family discovers their grandmother has only a short while left to live and decides to keep her in the dark, scheduling a wedding to gather before she dies.",
        sourceUrl: "https://www.imdb.com/title/tt8623904/"
    },
    {
        title: "A Quiet Place",
        trailerUrl: "https://www.youtube.com/embed/WR7W9-yxNeI",
        description: "A family must live in silence while hiding from creatures that hunt by sound.",
        sourceUrl: "https://www.imdb.com/title/tt6644200/"
    },
    {
        title: "The Lighthouse",
        trailerUrl: "https://www.youtube.com/embed/Hy4u41PB7Kw",
        description: "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
        sourceUrl: "https://www.imdb.com/title/tt7984734/"
    },
    {
        title: "The Conjuring",
        trailerUrl: "https://www.youtube.com/embed/k10ETZ41qDg",
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        sourceUrl: "https://www.imdb.com/title/tt1457767/"
    },
    {
        title: "Get Out",
        trailerUrl: "https://www.youtube.com/embed/LDxeDUUgoNI",
        description: "A young African-American man visits his white girlfriend's family, where he becomes ensnared in a sinister conspiracy.",
        sourceUrl: "https://www.imdb.com/title/tt5052448/"
    },
]

const movieList = document.getElementById('movie-list');
mockMovies.forEach(movie => {
    const li = document.createElement('li');
    li.className = 'movie-item';

    li.innerHTML = `
        <div class="movie-details">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
        </div>
        <a href="${movie.sourceUrl}" target="_blank">View More</a>
    `;

    movieList.appendChild(li);
});
