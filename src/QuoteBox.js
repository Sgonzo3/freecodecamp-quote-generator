import React, { Component } from 'react';
import './App.css';

export default class QuoteBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      chosenQuote: {
        quote: "Sorry, not able to find quotes.",
        author: "N/A"
      }
    }
  }
  fetchQuotes = () => {
    let api = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
    fetch(api)
      .then(resp => resp.json())
      .then(resp => this.setState({
        quotes: resp.quotes,
        chosenQuote: resp.quotes[Math.floor(Math.random() * 100)]
      })
    )
    .catch(error => console.log(error) )
  }
  resetQuote = () => {
    this.setState({
      chosenQuote: this.state.quotes[Math.floor(Math.random() * 100)] || {
        quote: "Sorry, not able to find quotes.",
        author: "N/A"
      }
    })
  }
  componentDidMount() {
    this.fetchQuotes()
  }
  render(){
    return(
      <section id="quote-box">
        <article id="text">{this.state.chosenQuote.quote}</article>
        <article id="author"> - {this.state.chosenQuote.author}</article>
        <div className="button-box">
          <a
              className="twitter-share-button" id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${this.state.chosenQuote.quote} - ${this.state.chosenQuote.author}`}
              data-size="large"
              target="_blank"
              >Tweet
          </a>
          <button id="new-quote" onClick={this.resetQuote}>New Quote</button>
        </div>
      </section>
    )
  }
}
