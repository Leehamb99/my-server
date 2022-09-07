const express = require('express')
const app = express();
const cors = require('cors');

const tenWebsites = [
    {title: "Cat.com | Cat | Caterpillar", link: "https://www.cat.com/", description: "Welcome! Select a region and language to continue. Select a Region, Africa, Middle-East, Asia, Australia, New Zealand, Eurasia, Europe, Latin ..."},
    {title: "Cat - Wikipedia", link: "https://en.wikipedia.org/wiki/Cat", description: "The cat (Felis catus) is a domestic species of small carnivorous mammal. ... It is the only domesticated species in the family Felidae and is often referred to as ..."},
    {title: "cat | Breeds & Facts - Encyclopedia Britannica", link: "https://www.britannica.com/animal/cat", description: "Aug 16, 2022 — cat, (Felis catus), also called house cat or domestic cat, domesticated member of the family Felidae, order Carnivora, and the smallest ..."},
    {title: "Cat phones: Made Mighty", link: "https://www.catphones.com/", description: "Our comprehensive range of market-leading rugged smartphones are no different. Unlike traditional phones, Cat phones are engineered to work under extraordinary ..."},
    {title: "Cat Breeds | Types of Cats - Purina", link: "https://www.purina.com/cats/cat-breeds", description: "Cat Breeds. Thinking about getting a cat but not sure which breed is right for you? We can help."},
    {title: "Domestic Cat - National Geographic", link: "https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat", description: "Domestic cats, no matter their breed, are all members of one species. Relationship with Humans. Felis catus has had a very long relationship with humans."},
    {title: "Cat Owners Can (Almost) All Agree on One Thing - The Atlantic", link: "https://www.theatlantic.com/science/archive/2022/08/cat-gum-health-brush-teeth/671206/", description: "Aug 23, 2022 — “I'm always very shocked if someone says they brush their cat's teeth,” says Anson Tsugawa, a veterinary dentist in California. When Steve ..."},
    {title: "Thinking of getting a cat? | International Cat Care", link: "https://icatcare.org/advice/thinking-of-getting-a-cat/", description: "Oct 1, 2018 — As pets go, cats are relatively low maintenance compared to dogs which need companionship, walking, training etc. However, like any pet, they do ..."},
    {title: "Cats | Healthy Pets, Healthy People | CDC", link: "https://www.cdc.gov/healthypets/pets/cats.html", description: "Nearly 40 million households in the United States have pet cats. Although cats are great companions, cat owners should be aware that sometimes cats can carry ..."},
    {title: "Cat Care | Grooming | Nutrition | Disease | Behavior - ASPCA", link: "https://www.aspca.org/pet-care/cat-care", description: "Cat Care. Do you have a feline companion? We've got you covered. Our ASPCA veterinarians and behaviorists offer up tips, solutions and answers to some of ..."}
]


app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/ten-websites', (req, res) => {
    res.send(tenWebsites)
})

app.get('/ten-websites/random', (req, res) => {
    let index = Math.floor(Math.random() * 9 );
    res.send(tenWebsites[index].link)
})
  



module.exports = app
