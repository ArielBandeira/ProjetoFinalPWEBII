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
                document.getElementsByTagName("h5")[3].innerText = response.Released;
                document.getElementsByTagName("h5")[4].innerText = response.Runtime;
                document.getElementsByTagName("h5")[5].innerText = response.Genre;
                document.getElementsByTagName("h5")[6].innerText = response.Director;
                document.getElementsByTagName("h5")[7].innerText = response.Writer;
                document.getElementsByTagName("h5")[8].innerText = response.Actors;
                document.getElementsByTagName("h5")[9].innerText = response.Plot;
                document.getElementsByTagName("h5")[10].innerText = response.Language;
                document.getElementsByTagName("h5")[11].innerText = response.Country;
                document.getElementsByTagName("h5")[12].innerText = response.Awards;
                document.getElementsByTagName("h5")[13].innerText = response.Type;
                document.getElementsByTagName("h5")[14].innerText = response.BoxOffice;
                document.getElementsByTagName("h5")[15].innerText = response.Production;
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