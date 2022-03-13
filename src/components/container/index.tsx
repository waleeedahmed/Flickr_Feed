import { useEffect, useState } from 'react';
import './container.css';
import Card from '../card';
import Header from '../header';
import { ASSISTIVE_TEXT, INPUT_TEXT } from '../../common/common';
import { ICard } from '../../common/models';
import { instance } from '../../api/axios';
import Loader from '../loader';

function Container() {

    const [cards, setCards] = useState<ICard[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [loader, setLoader] = useState<boolean>(false);

    useEffect(() => {
        setLoader(true);
        instance.get(searchTerm.length > 0 ? `&tags=${searchTerm}` : "", {
        })
            .then(res => {
                setCards([...res.data.items])
            })
            .catch(err => window.alert('API failed, error: ' + err))
            .finally(() => setLoader(false));
    }, [searchTerm])



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
                    <input className="input" onChange={(event) => {
                        // comma delimited list for multiple search tags
                        var commaSearch = event.target.value.replaceAll(' ', ',');
                        setSearchTerm(commaSearch);
                    }} />
                </div>
                <div className="cards-container">
                    {
                        loader ? 
                            <div className="loader"><Loader/></div> : 
                            cards.map((card: ICard, index) => <Card key={index} {...card} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Container;