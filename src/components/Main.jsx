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
        };
    }

    // fetch api when component is mount
    componentDidMount(){
        this.props.loadAllPost()
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

            const newPost = {
                                id : new Date().getTime(), 
                                title: this.state.textChange,
                                url: "https://i.ibb.co/qs0mg9f/IMG-20201128-155513-737-1614485976414.jpg" 
                            };

            this.props.addOnePost(newPost)
        }

    }

    render(){

        const { textChange } = this.state
        const { postState } = this.props

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
                        <input type="submit" value="publier" />
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
