import React, { Component } from 'react';
import Octocat from './Octocat';

class Gallery extends Component {
    state = {}
    render() {
        return (
            <main>
                <Octocat
                    number="1"
                    name="Scubatocat"
                    imageLink="https://octodex.github.com/scubatocat"
                    image="https://octodex.github.com/images/scubatocat.png"
                    authorImage="https://avatars1.githubusercontent.com/u/19292210?v=4" />
                <Octocat
                    number="2"
                    name="Tentocats"
                    imageLink="https://octodex.github.com/tentocat"
                    image=""
                    authorImage="https://avatars1.githubusercontent.com/u/4226949?v=4" />
                <Octocat
                    number="3"
                    name="Saint Nictocat"
                    imageLink="https://octodex.github.com/saint_nictocat"
                    image=""
                    authorImage="https://avatars3.githubusercontent.com/u/20049049?v=4" />
                <Octocat
                    number="4"
                    name="Dinocat"
                    imageLink="https://octodex.github.com/dinotocat"
                    image=""
                    authorImage="https://avatars2.githubusercontent.com/u/11401067?v=4" />
                <Octocat
                    number="5"
                    name="Benjamin Bannekat"
                    imageLink="https://octodex.github.com/bannekat"
                    image=""
                    authorImage="https://avatars1.githubusercontent.com/u/1300064?v=4" />
                <Octocat
                    number="6"
                    name="Catstello"
                    imageLink="https://octodex.github.com/catstello"
                    image=""
                    authorImage="https://avatars1.githubusercontent.com/u/1300064?v=4" />
                <Octocat
                    number="7"
                    name="Skatetocat"
                    imageLink="https://octodex.github.com/skatetocat"
                    image=""
                    authorImage="https://avatars0.githubusercontent.com/u/7002940?v=4" />
                <Octocat
                    number="8"
                    name="McEfeeline"
                    imageLink="https://octodex.github.com/mcefeeline"
                    image=""
                    authorImage="https://avatars1.githubusercontent.com/u/1300064?v=4" />
                <Octocat
                    number="9"
                    name="Gobble-o-tron"
                    imageLink="https://octodex.github.com/gobbleotron"
                    image=""
                    authorImage="https://avatars1.githubusercontent.com/u/1300064?v=4" />
                <Octocat
                    number="10"
                    name="Luchadortocat"
                    imageLink="https://octodex.github.com/luchadortocat"
                    image=""
                    authorImage="https://avatars1.githubusercontent.com/u/4226949?v=4" />

            </main>
        );
    }
}

export default Gallery;