import React from 'react';
import {SearchBar, FilterPub} from './FilterPublication';
import Publication from './Publication';
 
class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            publicationIfo : {
                comment : 23,
                like: 57,
                describe : 20,
                share : 11
            }
        };
    }

    render(){

        const publicationList = this.props.publicationList;

        return(
            <main className="main-content">
                <header className="publication-filter-block">
                    <div>
                        <SearchBar />
                    </div>
                    <div>
                        <span className="fil">Filtre</span>
                        <FilterPub />
                    </div>
                </header>
    
                <section className="publication-container">
                    {
                        publicationList.map(pub => {
                            return <Publication key={pub.id} pubInfo={pub} />
                        })
                    }
    
                </section>
            </main>
        );
    }
}

export default Main;