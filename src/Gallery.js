import React, { Component } from 'react';
import Octocat from './Octocat';

class Gallery extends Component {
    state = {}
    render() {

        const octocatData = [
            {
                name: "Scubatocat",
                number: "1",
                image: "https://octodex.github.com/images/scubatocat.png",
                imageLink: "https://octodex.github.com/scubatocat",
                authorImage: "https://avatars1.githubusercontent.com/u/19292210?v=4"
            },
            {
                number: "2",
                name: "Tentocats",
                imageLink: "https://octodex.github.com/tentocat",
                image: "https://octodex.github.com/images/tentocats.jpg",
                authorImage: "https://avatars1.githubusercontent.com/u/4226949?v=4"
            },
            {
                number: "3",
                name: "Saint Nictocat",
                imageLink: "https://octodex.github.com/saint_nictocat",
                image: "https://octodex.github.com/images/saint_nictocat.jpg",
                authorImage: "https://avatars3.githubusercontent.com/u/20049049?v=4"
            },
            {
                number: "4",
                name: "Dinocat",
                imageLink: "https://octodex.github.com/dinotocat",
                image: "https://octodex.github.com/images/dinotocat.png",
                authorImage: "https://avatars2.githubusercontent.com/u/11401067?v=4"
            },
            {
                number: "5",
                name: "Benjamin Bannekat",
                imageLink: "https://octodex.github.com/bannekat",
                image: "https://octodex.github.com/images/bannekat.png",
                authorImage: "https://avatars1.githubusercontent.com/u/1300064?v=4"
            },
            {
                number: "6",
                name: "Catstello",
                imageLink: "https://octodex.github.com/catstello",
                image: "https://octodex.github.com/images/catstello.png",
                authorImage: "https://avatars1.githubusercontent.com/u/1300064?v=4"
            },
            {
                number: "7",
                name: "Skatetocat",
                imageLink: "https://octodex.github.com/skatetocat",
                image: "https://octodex.github.com/images/skatetocat.png",
                authorImage: "https://avatars0.githubusercontent.com/u/7002940?v=4"
            },
            {
                number: "8",
                name: "McEfeeline",
                imageLink: "https://octodex.github.com/mcefeeline",
                image: "https://octodex.github.com/images/mcefeeline.jpg",
                authorImage: "https://avatars1.githubusercontent.com/u/1300064?v=4"
            }, {
                number: "9",
                name: "Gobble-o-tron",
                imageLink: "https://octodex.github.com/gobbleotron",
                image: "https://octodex.github.com/images/gobbleotron.gif",
                authorImage: "https://avatars1.githubusercontent.com/u/1300064?v=4"
            },
            {
                number: "10",
                name: "Luchadortocat",
                imageLink: "https://octodex.github.com/luchadortocat",
                image: "https://octodex.github.com/images/luchadortocat.png",
                authorImage: "https://avatars1.githubusercontent.com/u/4226949?v=4"
            }
        ]

        const cats = octocatData.map((element) =>
            <Octocat
                name={element.name}
                number={element.number}
                image={element.image}
                imageLink={element.imageLink}
                authorImage={element.authorImage}
            />
        )

        return (
            <main>
                {cats}
            </main>
        );
    }
}

export default Gallery;

