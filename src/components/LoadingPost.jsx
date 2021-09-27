import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'

const LoadingPost = () => {


	return (
		<>
			<article className="publication-item loadPostSpinner-container ">
				<Spinner animation="border" className="loadPostSpinner" />
			</article>

			<article className="publication-item loadPostSpinner-container ">
				<Spinner animation="border" className="loadPostSpinner" />
			</article>

			<article className="publication-item loadPostSpinner-container ">
				<Spinner animation="border" className="loadPostSpinner" />
			</article>

			<article className="publication-item loadPostSpinner-container ">
				<Spinner animation="border" className="loadPostSpinner" />
			</article>
		</>
	)
}

const LoadingPostError = ({ errorMessage }) => {
	
	return (
		<div className="publication-item errorMessage">
			<p>{errorMessage}</p>
		</div>
	)
}

export{ LoadingPost, LoadingPostError }