import { useEffect, useState } from 'react';
import './container.css';
import Card from '../components/card';
import Header from '../components/header';
import { ASSISTIVE_TEXT, INPUT_TEXT } from '../common/common';
import axios from 'axios';
import { ICard } from '../common/models';

function Container() {

    const [cards, setCards] = useState<ICard[]>([]);

    useEffect(() => {
        axios.get('https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1', {
        })
        .then(res => {
          setCards([...res.data.items])
        })
      }, [])

    return (
        <div className="container">
            <Header />

            {/* body */}
            <div className="body">
                <div className="assistive-text">
                    <span>
                        {ASSISTIVE_TEXT}
                    </span>
                </div>
                <div className="input-text">
                    <span>
                        {INPUT_TEXT}
                    </span>
                </div>
                <div>
                    <input className="input">
                    </input>
                </div>
                <div className="cards-container">
                    {
                        cards.map((card: ICard, index) => <Card key={index} {...card}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Container;