import {SearchBar, FilterPub} from './FilterPublication';
import Publication from './Publication';
 
function Main ({publicationList}){
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

export default Main;