import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const title = document.getElementById("title").value;
        const url = "http://www.omdbapi.com/?t=" + title + "&apikey=c9802ed9";

        let ajax = new XMLHttpRequest();

        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4 && ajax.status === 200) {
                const response = JSON.parse(this.responseText);
                document.querySelector("img").src = response.Poster;
                document.getElementsByTagName("h5")[0].innerText = response.Title;
                document.getElementsByTagName("h5")[1].innerText = response.Year;
            }
        };

        ajax.open("GET", url, true);
        ajax.send();
        console.log('Clicado');
    }
    render() {
        return (
            <div className="input-field second-wrap">
                <button className="btn-search" name="submmit" type="button" onClick={this.handleClick}>SEARCH</button>
            </div>
        );
    }
}