import { useEffect, useState } from 'react';
import './container.css';
import Card from '../card';
import Header from '../header';
import { ASSISTIVE_TEXT, INPUT_TEXT, FLICKR_BASE_URL } from '../../common/common';
import { ICard } from '../../common/models';
import { flickerApi } from '../../api/axios';
import Loader from '../loader';


function Container() {

    const [cards, setCards] = useState<ICard[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [loader, setLoader] = useState<boolean>(false);

    useEffect(() => {
        setLoader(true);
        flickerApi(FLICKR_BASE_URL, `&tags=${searchTerm}`)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                setCards([...json.items])
            }).catch(function (ex) {
                window.alert('API failed: ' + ex);
            })
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
                            <div className="loader"><Loader /></div> :
                            cards.map((card: ICard, index) => <Card key={index} {...card} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Container;