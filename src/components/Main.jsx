import React from 'react';
import { connect } from 'react-redux'

import { apiCallPosts, addPost } from '../redux/post/postAction'

import {SearchBar, FilterPub} from './FilterPublication';
import Publication from './Publication';
import {LoadingPost, LoadingPostError} from './LoadingPost'
 
class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            textChange : "publier votre message ici...",

            publicationList : [
                {
                  id : 1,
                  name : "nina",
                  img : "nina.jpg",
                  text : "je je ss ce que je suis es dane suis ce que je suis ete je suis et je deviendrais ce que je serais dan dan",
                  date : new Date("december 21 2010")
                },
                {
                  id : 2,
                  name : "dilane",
                  img : "dilane.jpg",
                  text : "je suis ce que je suis et je deviendrais ce que je serais dilane",
                  date : new Date("october 18 2018")
                },
                {
                  id : 3,
                  name : "stanela",
                  img : "stanela.jpg",
                  text : "je suis ce que je suis et je deviendrais ce que je serais stanela",
                  date : new Date("jun 09 2000")
                },
                {
                  id: 4,
                  name : "blondelle",
                  img : "blondelle.jpg",
                  text : "je suis ce que je suis et je deviendrais ce que je serais blondelle",
                  date : new Date("march 21 2010")
                },
                {
                  id: 5,
                  name : "donald",
                  img : "donald.jpg",
                  text : "je suis ce que je suis et je deviendrais ce que je serais blondelle",
                  date : new Date("febuary 28 2021")
                },
                {
                  id: 6,
                  name : "levine",
                  img : "levine.jpg",
                  text : "je suis ce que je suis et je deviendrais ce que je serais blondelle",
                  date : new Date("august 01 2005")
                },
                {
                  id: 7,
                  name : "corine",
                  img : "corine.jpg",
                  text : " que je suis et je deviendrais ce que je serais blondelle deviendrais ce que je serais blondelle",
                  date : new Date("april 17 2019")
                }
            ]
        };
    }

    // fetch api when component is mount
    componentDidMount(){
        console.log(this.props)
        this.props.loadAllPost()
    }

    componentDidUpdate(prevProps) {
      if (this.props.postState.isLoadingPost !== prevProps.postState.isLoadingPost) {
        console.log(this.props.postState)
      }
    }

    handleChange = (event) => {
        this.setState({
            textChange : event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.textChange === "publier votre message ici..." || this.state.textChange==="")
            alert("Entrez le contenu de votre publication")
        else{
            const publicationList = [...this.state.publicationList];
            const newPub = {
                                id : new Date().getTime(), 
                                name: "ngimdock",
                                img: "dan.jpg",
                                text: this.state.textChange,
                                date : new Date()
                            };

            publicationList.unshift(newPub);

            this.setState({publicationList, textChange:"un autre message?"});
        }

    }

    render(){

        const {publicationList, textChange} = this.state
        const { postState, loadAllPost, addOnePost } = this.props
        console.log(this.props)

        let displayPosts = null

        if(postState.isLoadingPost){
            displayPosts = <LoadingPost />
        }else{
            displayPosts = postState.errorLoadingPost ? (
                <LoadingPostError errorMessage={postState.errorLoadingPost} />
            ) : (
                displayPosts = postState.posts.map(pub => <Publication key={pub.id} pubInfo={pub} />)
            )
        }

       

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
                    <form className="current-pub" onSubmit={this.handleSubmit}>
                        <label htmlFor="text-to-pub">Avez vous un mot a dire?</label>
                        <textarea name="text-to-pub" value={textChange} onChange = {this.handleChange} ></textarea>
                        <input type="submit" value="publier" onClick= { () => addOnePost(textChange) } />
                    </form>
                    {
                        displayPosts
                    }
                </section>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postState: state.posts,
        hello: "2"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAllPost: () => dispatch(apiCallPosts()),
        addOnePost: (post) => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
